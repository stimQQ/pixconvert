import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'Batch Convert WebP to JPG – Free, Convert Multiple Files',
  description:
    'Batch convert multiple WebP files to JPG at once for free. Drag and drop all your files together — no ZIP, no upload, all processed locally in your browser.',
  alternates: { canonical: '/webp-to-jpg/batch' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many WebP files can I batch convert at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no hard file count limit. You can drop dozens of files at once. Performance depends on your device — conversions happen in sequence, each typically takes under a second. Very large files (10MB+) may take longer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to ZIP my files before uploading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Just select all your WebP files at once in the file picker (Ctrl+A or Cmd+A), or drag them all together into the drop zone. Each file is converted and available for individual download.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I download all converted files at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Once 2 or more files are converted, a "Download all" button appears at the top. Each file is downloaded as an individual JPG (no ZIP). Your browser may ask permission to download multiple files.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is batch WebP to JPG conversion free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely free with no file count limits, no watermarks, and no sign-up. Everything runs locally in your browser — nothing is uploaded.',
      },
    },
  ],
};

export default function WebpToJpgBatchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-4">
        <p className="text-sm text-gray-400 mb-2">
          <Link href="/webp-to-jpg" className="hover:text-indigo-600">WebP to JPG</Link>
          <span className="mx-2">›</span>Batch
        </p>
      </div>

      <section className="max-w-3xl mx-auto px-4 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Batch Convert WebP to JPG
        </h1>
        <p className="text-lg text-gray-500 mb-4">
          Drop all your WebP files at once — they convert in parallel and you can
          download each result or all at once. No ZIP, no upload, no limits.
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          {[
            ['No file count limit', '✓'],
            ['No watermarks', '✓'],
            ['No ZIP needed', '✓'],
            ['Download all button', '✓'],
          ].map(([label, check]) => (
            <div key={label} className="flex items-center gap-1.5 text-sm text-green-700 bg-green-50 rounded-full px-3 py-1">
              <span className="font-bold">{check}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <Converter
          inputMime="image/webp"
          outputMime="image/jpeg"
          inputLabel="WebP"
          outputLabel="JPG"
          accept="image/webp"
        />
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to batch convert</h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { step: '1', title: 'Select all files', desc: 'Click the upload area and press Ctrl+A (or Cmd+A on Mac) to select all WebP files in a folder, or drag them all at once.' },
            { step: '2', title: 'Wait for conversion', desc: 'Each file converts sequentially. A progress spinner shows per-file status. Fast files finish in under a second each.' },
            { step: '3', title: 'Download all', desc: 'Click "Download all (N)" to trigger individual downloads for every converted JPG. Your browser may ask permission once.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="text-center">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {step}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need batch conversion on the command line?</h2>
        <p className="text-gray-500 text-sm mb-4">
          For large-scale batch jobs (hundreds of files), a command-line tool is faster.
          Here are quick one-liners for each OS:
        </p>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">macOS / Linux — sips or ImageMagick</p>
            <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-4 overflow-x-auto">
{`# macOS built-in (sips)
for f in *.webp; do sips -s format jpeg "$f" --out "\${f%.webp}.jpg"; done

# ImageMagick (cross-platform)
mogrify -format jpg *.webp`}
            </pre>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Windows — PowerShell + ImageMagick</p>
            <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-4 overflow-x-auto">
{`Get-ChildItem *.webp | ForEach-Object {
  magick $_.FullName "$($_.BaseName).jpg"
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((item) => (
            <div key={item.name}>
              <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400 mb-3">Related guides:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/webp-to-jpg/windows" className="text-sm text-indigo-600 hover:underline">WebP to JPG on Windows →</Link>
            <Link href="/webp-to-jpg/iphone" className="text-sm text-indigo-600 hover:underline">WebP to JPG on iPhone →</Link>
            <Link href="/blog/convert-webp-command-line" className="text-sm text-indigo-600 hover:underline">CLI batch conversion guide →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
