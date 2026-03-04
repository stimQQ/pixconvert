export interface ConvertResult {
  blob: Blob;
  filename: string;
  originalSize: number;
  convertedSize: number;
}

export type OutputMime = 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif';

function getExtension(mime: OutputMime): string {
  switch (mime) {
    case 'image/jpeg': return 'jpg';
    case 'image/png': return 'png';
    case 'image/webp': return 'webp';
    case 'image/avif': return 'avif';
  }
}

function getOutputFilename(originalName: string, outputMime: OutputMime): string {
  const base = originalName.replace(/\.[^/.]+$/, '');
  return `${base}.${getExtension(outputMime)}`;
}

export async function convertImage(
  file: File,
  outputMime: OutputMime,
  quality = 0.92
): Promise<ConvertResult> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Cannot get canvas context'));
          return;
        }

        // JPEG does not support transparency — fill white background
        if (outputMime === 'image/jpeg') {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            URL.revokeObjectURL(url);
            if (!blob) {
              if (outputMime === 'image/avif') {
                reject(new Error('AVIF encoding is not supported in this browser. Please use Chrome 94+ or Edge 94+.'));
              } else {
                reject(new Error('Conversion failed. The format may not be supported in this browser.'));
              }
              return;
            }
            resolve({
              blob,
              filename: getOutputFilename(file.name, outputMime),
              originalSize: file.size,
              convertedSize: blob.size,
            });
          },
          outputMime,
          quality
        );
      } catch (err) {
        URL.revokeObjectURL(url);
        reject(err);
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image. Make sure the file is a valid image.'));
    };

    img.src = url;
  });
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
