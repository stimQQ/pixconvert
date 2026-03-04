import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'How to Convert WebP to JPG on Windows 10 & 11',
  description:
    'Convert WebP to JPG on Windows for free — works in any browser, no software install needed. Also covers Windows Photos, Paint, and command-line methods.',
  alternates: { canonical: '/webp-to-jpg/windows' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Windows 11 support WebP files natively?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Windows 11 Photos app can open WebP files but cannot export or save them as JPG. Windows 10 requires installing the WebP Image Extensions from the Microsoft Store. Neither version offers a built-in "Save as JPG" option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use Microsoft Paint to convert WebP to JPG on Windows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Open the WebP file in Paint (right-click → Open with → Paint), then go to File → Save as → JPEG picture. This works on both Windows 10 and Windows 11 and is completely free.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I convert multiple WebP files to JPG on Windows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the batch converter on this page — drag and drop multiple WebP files at once. For command-line batch conversion, see: for %f in (*.webp) do magick "%f" "%~nf.jpg" using ImageMagick.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does Chrome save images as WebP on Windows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Websites serve WebP images because they\'re smaller and faster. Chrome saves them in the original format. Use our converter to turn them into JPG after downloading.',
      },
    },
  ],
};

export default function WebpToJpgWindowsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-4">
        <p className="text-sm text-gray-400 mb-2">
          <Link href="/webp-to-jpg" className="hover:text-indigo-600">WebP to JPG</Link>
          <span className="mx-2">›</span>Windows
        </p>
      </div>

      <section className="max-w-3xl mx-auto px-4 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Convert WebP to JPG on Windows
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Works in Chrome, Edge, and Firefox on Windows 10 and 11.
          No software to install — your files never leave your PC.
        </p>
        <Converter
          inputMime="image/webp"
          outputMime="image/jpeg"
          inputLabel="WebP"
          outputLabel="JPG"
          accept="image/webp"
        />
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          4 ways to convert WebP to JPG on Windows
        </h2>

        <div className="space-y-8">
          {/* Method 1 */}
          <div className="border border-indigo-100 rounded-xl p-6 bg-indigo-50/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              <h3 className="font-bold text-gray-900">Use PixConvert in your browser (recommended)</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Works on any Windows version, no install needed. Drag your WebP file into the converter above
              and download the JPG. Supports batch conversion of multiple files at once.
            </p>
            <p className="text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2 inline-block">
              ✓ Free · ✓ No install · ✓ Batch supported · ✓ Files stay on your PC
            </p>
          </div>

          {/* Method 2 */}
          <div className="border border-gray-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-7 rounded-full bg-gray-300 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              <h3 className="font-bold text-gray-900">Microsoft Paint (built-in, free)</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Paint can open WebP files and save them as JPG — no install required.
            </p>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-gray-400 font-mono">1.</span>Right-click the .webp file → <strong>Open with → Paint</strong></li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">2.</span>Go to <strong>File → Save as → JPEG picture</strong></li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">3.</span>Choose a location and click Save</li>
            </ol>
            <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2 mt-3 inline-block">
              ⚠ One file at a time. Transparent areas become white.
            </p>
          </div>

          {/* Method 3 */}
          <div className="border border-gray-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-7 rounded-full bg-gray-300 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              <h3 className="font-bold text-gray-900">Windows Photos app (Windows 11)</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              The Photos app in Windows 11 can view WebP but the export option is hidden.
            </p>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-gray-400 font-mono">1.</span>Open the WebP file in Photos</li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">2.</span>Click the <strong>⋯ menu → Save a copy</strong></li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">3.</span>Change the file type dropdown to <strong>JPEG</strong></li>
            </ol>
            <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2 mt-3 inline-block">
              ⚠ Windows 10 may need the WebP Image Extension from the Microsoft Store first.
            </p>
          </div>

          {/* Method 4 */}
          <div className="border border-gray-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-7 rounded-full bg-gray-300 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
              <h3 className="font-bold text-gray-900">Command line — batch convert (PowerShell + ImageMagick)</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              For converting many files at once, <a href="https://imagemagick.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">ImageMagick</a> is the power-user option.
            </p>
            <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-4 overflow-x-auto">
{`# Install ImageMagick first from imagemagick.org
# Then in PowerShell:

# Convert a single file
magick input.webp output.jpg

# Batch convert all .webp in current folder
Get-ChildItem *.webp | ForEach-Object {
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
            <Link href="/webp-to-jpg/iphone" className="text-sm text-indigo-600 hover:underline">WebP to JPG on iPhone →</Link>
            <Link href="/webp-to-jpg/mac" className="text-sm text-indigo-600 hover:underline">WebP to JPG on Mac →</Link>
            <Link href="/webp-to-jpg/batch" className="text-sm text-indigo-600 hover:underline">Batch convert WebP to JPG →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
