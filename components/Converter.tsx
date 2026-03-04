'use client';

import { useCallback, useRef, useState } from 'react';
import { convertImage, downloadBlob, formatBytes, type ConvertResult, type OutputMime } from '@/lib/convert';

interface FileEntry {
  file: File;
  state: 'pending' | 'converting' | 'done' | 'error';
  result?: ConvertResult;
  preview?: string;       // original file object URL
  resultPreview?: string; // converted blob object URL
  error?: string;
}

interface ConverterProps {
  inputMime: string;           // accepted input mime types (e.g. "image/webp")
  outputMime: OutputMime;
  inputLabel: string;          // e.g. "WebP"
  outputLabel: string;         // e.g. "JPG"
  accept: string;              // file input accept attribute
}

export default function Converter({ inputMime, outputMime, inputLabel, outputLabel, accept }: ConverterProps) {
  const [entries, setEntries] = useState<FileEntry[]>([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFiles = useCallback(async (files: File[]) => {
    const valid = files.filter(f => f.type === inputMime || f.type.startsWith('image/'));
    if (valid.length === 0) return;

    const newEntries: FileEntry[] = valid.map(file => ({
      file,
      state: 'converting',
      preview: URL.createObjectURL(file),
    }));

    setEntries(prev => [...prev, ...newEntries]);

    for (const file of valid) {
      try {
        const result = await convertImage(file, outputMime);
        const resultPreview = URL.createObjectURL(result.blob);
        setEntries(prev =>
          prev.map(e =>
            e.file === file
              ? { ...e, state: 'done', result, resultPreview }
              : e
          )
        );
      } catch (err) {
        setEntries(prev =>
          prev.map(e =>
            e.file === file
              ? { ...e, state: 'error', error: (err as Error).message }
              : e
          )
        );
      }
    }
  }, [inputMime, outputMime]);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  }, [processFiles]);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    processFiles(files);
    e.target.value = '';
  }, [processFiles]);

  const downloadAll = () => {
    entries.forEach(e => {
      if (e.state === 'done' && e.result) {
        downloadBlob(e.result.blob, e.result.filename);
      }
    });
  };

  const clear = () => setEntries([]);

  const doneCount = entries.filter(e => e.state === 'done').length;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Drop zone */}
      <div
        className={`relative rounded-2xl border-2 border-dashed transition-all cursor-pointer
          ${dragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 bg-gray-50 hover:border-indigo-400 hover:bg-indigo-50/40'}
          ${entries.length > 0 ? 'p-6' : 'p-14'}`}
        onDragEnter={e => { e.preventDefault(); setDragging(true); }}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple
          className="hidden"
          onChange={onFileChange}
        />

        {entries.length === 0 ? (
          <div className="flex flex-col items-center gap-4 pointer-events-none">
            <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800">
                Drop your {inputLabel} files here
              </p>
              <p className="text-sm text-gray-500 mt-1">
                or click to browse — multiple files supported
              </p>
            </div>
            <p className="text-xs text-gray-400">Your files never leave your device</p>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Drop more {inputLabel} files to convert
            </p>
            <button
              onClick={e => { e.stopPropagation(); inputRef.current?.click(); }}
              className="text-sm text-indigo-600 font-medium hover:underline"
            >
              + Add files
            </button>
          </div>
        )}
      </div>

      {/* Results */}
      {entries.length > 0 && (
        <div className="mt-6 space-y-4">
          {/* Action bar */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">{entries.length} file{entries.length !== 1 ? 's' : ''}</p>
            <div className="flex gap-3">
              {doneCount > 1 && (
                <button
                  onClick={downloadAll}
                  className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Download all ({doneCount})
                </button>
              )}
              <button
                onClick={clear}
                className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>

          {/* File cards */}
          {entries.map((entry, i) => (
            <FileCard key={i} entry={entry} outputLabel={outputLabel} />
          ))}
        </div>
      )}
    </div>
  );
}

function FileCard({ entry, outputLabel }: { entry: FileEntry; outputLabel: string }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
      {entry.state === 'converting' && (
        <div className="p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 animate-spin text-indigo-500" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 truncate">{entry.file.name}</p>
            <p className="text-xs text-gray-400">Converting…</p>
          </div>
        </div>
      )}

      {entry.state === 'error' && (
        <div className="p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 truncate">{entry.file.name}</p>
            <p className="text-xs text-red-400">{entry.error}</p>
          </div>
        </div>
      )}

      {entry.state === 'done' && entry.result && (
        <div className="grid grid-cols-2">
          {/* Original */}
          <div className="p-4 border-r border-gray-100">
            <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">Original</p>
            {entry.preview && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={entry.preview}
                alt="original"
                className="w-full h-32 object-contain rounded-lg bg-checkerboard mb-2"
              />
            )}
            <p className="text-xs text-gray-500 truncate">{entry.file.name}</p>
            <p className="text-xs font-medium text-gray-700">{formatBytes(entry.result.originalSize)}</p>
          </div>

          {/* Converted */}
          <div className="p-4">
            <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">{outputLabel}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={entry.resultPreview}
              alt="converted"
              className="w-full h-32 object-contain rounded-lg bg-checkerboard mb-2"
            />
            <p className="text-xs text-gray-500 truncate">{entry.result.filename}</p>
            <p className="text-xs font-medium text-indigo-600">{formatBytes(entry.result.convertedSize)}</p>
          </div>
        </div>
      )}

      {entry.state === 'done' && entry.result && (
        <div className="px-4 pb-4">
          <button
            onClick={() => downloadBlob(entry.result!.blob, entry.result!.filename)}
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Download {entry.result.filename}
          </button>
        </div>
      )}
    </div>
  );
}
