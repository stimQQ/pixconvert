import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Convert JPG/PNG to WebP in JavaScript (Browser + Node.js)',
  description:
    'How to convert images to WebP using the Canvas API in the browser, or with sharp and imagemin in Node.js. Full code examples.',
  alternates: { canonical: '/blog/jpg-to-webp-javascript' },
};

export default function JpgToWebpJavascriptPage() {
  return (
    <article className="prose prose-gray max-w-none">
      <div className="not-prose mb-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {['JavaScript', 'Node.js', 'Browser'].map(t => (
            <span key={t} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{t}</span>
          ))}
          <span className="text-xs text-gray-400 ml-auto">6 min read</span>
        </div>
      </div>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        Convert JPG/PNG to WebP in JavaScript
      </h1>
      <p className="text-lg text-gray-500 mb-10">
        Two approaches: Canvas API for in-browser conversion, and <code>sharp</code> for Node.js server-side processing.
        Both preserve quality and support transparency.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Method 1: Canvas API (browser, no dependencies)</h2>
      <p className="text-gray-600 text-sm mb-4">
        The Canvas API is available in all modern browsers and can encode to WebP natively.
        This is how PixConvert works under the hood.
      </p>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-4">
{`/**
 * Convert an image File to WebP using Canvas API.
 * Works in Chrome, Firefox, Safari 14+, Edge.
 * @param {File} file - Input image file (JPG, PNG, WebP, etc.)
 * @param {number} quality - 0.0 to 1.0, default 0.92
 * @returns {Promise<Blob>} WebP blob
 */
async function convertToWebP(file, quality = 0.92) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      canvas.toBlob(
        (blob) => {
          if (!blob) return reject(new Error('Conversion failed'));
          resolve(blob);
        },
        'image/webp',
        quality
      );
    };

    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = url;
  });
}

// Usage
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  const webpBlob = await convertToWebP(file, 0.92);

  // Download
  const a = document.createElement('a');
  a.href = URL.createObjectURL(webpBlob);
  a.download = file.name.replace(/\\.[^.]+$/, '') + '.webp';
  a.click();
});`}
      </pre>

      <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-8">
        <strong>Note:</strong> AVIF encoding (<code>image/avif</code>) via canvas.toBlob only works in Chrome 94+ and Edge 94+.
        Firefox and Safari do not support AVIF encoding via the Canvas API.
      </div>

      <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Method 2: Checking WebP support</h2>
      <p className="text-gray-600 text-sm mb-4">
        Always check if the browser supports WebP <em>encoding</em> before using it as output:
      </p>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-8">
{`/**
 * Check if the browser can encode to a given MIME type via canvas.toBlob()
 * @param {string} mimeType - e.g. 'image/webp', 'image/avif'
 * @returns {Promise<boolean>}
 */
async function canEncode(mimeType) {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    canvas.toBlob(
      (blob) => resolve(blob !== null && blob.type === mimeType),
      mimeType
    );
  });
}

// Usage
const supportsWebP = await canEncode('image/webp');   // true in all modern browsers
const supportsAVIF = await canEncode('image/avif');   // true in Chrome 94+, Edge 94+`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Method 3: Node.js with sharp (server-side)</h2>
      <p className="text-gray-600 text-sm mb-4">
        <a href="https://sharp.pixelplumbing.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">sharp</a> is the fastest Node.js image processing library. It wraps libvips and supports WebP, AVIF, PNG, and JPEG.
      </p>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-4">
{`npm install sharp`}
      </pre>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-4">
{`import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

// Single file
await sharp('input.jpg')
  .webp({ quality: 92 })
  .toFile('output.webp');

// With transparency (PNG source)
await sharp('logo.png')
  .webp({ lossless: true })   // lossless preserves sharp edges
  .toFile('logo.webp');

// Batch convert entire directory
async function batchConvertToWebP(dir, quality = 85) {
  const files = await readdir(dir);
  const images = files.filter(f => /\\.(jpg|jpeg|png)$/i.test(f));

  await Promise.all(
    images.map(async (file) => {
      const input = path.join(dir, file);
      const output = path.join(dir, file.replace(/\\.[^.]+$/, '.webp'));
      await sharp(input).webp({ quality }).toFile(output);
      console.log(\`✓ \${file} → \${path.basename(output)}\`);
    })
  );
}

await batchConvertToWebP('./public/images');`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Method 4: imagemin (build pipeline)</h2>
      <p className="text-gray-600 text-sm mb-4">
        For integrating into a build process (not Next.js — see the <Link href="/blog/png-to-webp-nextjs-vite" className="text-indigo-600 hover:underline">Next.js/Vite guide</Link> for that):
      </p>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-8">
{`npm install imagemin imagemin-webp`}
      </pre>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-8">
{`import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

await imagemin(['images/*.{jpg,png}'], {
  destination: 'images/webp',
  plugins: [
    imageminWebp({ quality: 85 })
  ],
});

console.log('Images converted to WebP');`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Quality guide</h2>
      <div className="not-prose overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Quality</th>
              <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Use case</th>
              <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Approx size vs JPG</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['100 (lossless)', 'Logos, icons, UI', '~same as PNG'],
              ['90-95', 'High-fidelity web images', '~15-20% smaller'],
              ['80-90 ⭐', 'Most website photos', '~25-35% smaller'],
              ['60-80', 'Thumbnails, previews', '~40-55% smaller'],
            ].map(([q, use, size]) => (
              <tr key={q} className="border-b border-gray-100">
                <td className="px-4 py-2 font-mono text-gray-800 border border-gray-100">{q}</td>
                <td className="px-4 py-2 text-gray-600 border border-gray-100">{use}</td>
                <td className="px-4 py-2 text-green-700 border border-gray-100">{size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="not-prose mt-10 pt-8 border-t border-gray-100">
        <p className="text-sm text-gray-400 mb-3">Related guides:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/blog/png-to-webp-python" className="text-sm text-indigo-600 hover:underline">Python (Pillow) guide →</Link>
          <Link href="/blog/convert-webp-command-line" className="text-sm text-indigo-600 hover:underline">CLI guide (cwebp, ImageMagick) →</Link>
          <Link href="/blog/png-to-webp-nextjs-vite" className="text-sm text-indigo-600 hover:underline">Next.js / Vite guide →</Link>
          <Link href="/jpg-to-webp/quality" className="text-sm text-indigo-600 hover:underline">Online JPG→WebP converter →</Link>
        </div>
      </div>
    </article>
  );
}
