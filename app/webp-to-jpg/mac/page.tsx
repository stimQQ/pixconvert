import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'How to Convert WebP to JPG on Mac (Preview, Terminal & More)',
  description:
    'Convert WebP to JPG on Mac for free. Works in Safari without installing anything. Also covers Preview app, sips command, and ImageMagick methods.',
  alternates: { canonical: '/webp-to-jpg/mac' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can macOS Preview app convert WebP to JPG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Open the WebP file in Preview, then go to File → Export, choose JPEG from the format dropdown, and save. Preview comes with every Mac and requires no install.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I batch convert WebP to JPG on Mac using Terminal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'macOS includes "sips" (scriptable image processing system) built-in. Run: for f in *.webp; do sips -s format jpeg "$f" --out "${f%.webp}.jpg"; done — this converts all .webp files in the current folder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does macOS support WebP natively?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, macOS 11 (Big Sur) and later support WebP natively in Preview, Safari, and Quick Look. Older macOS versions may need a third-party viewer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does the WebP file look different after converting to JPG on Mac?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the original WebP has a transparent background, it will appear white in the JPG (JPG does not support transparency). This is expected behavior. Use our converter or export to PNG instead if you need transparency preserved.',
      },
    },
  ],
};

export default function WebpToJpgMacPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-4">
        <p className="text-sm text-gray-400 mb-2">
          <Link href="/webp-to-jpg" className="hover:text-indigo-600">WebP to JPG</Link>
          <span className="mx-2">›</span>Mac
        </p>
      </div>

      <section className="max-w-3xl mx-auto px-4 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Convert WebP to JPG on Mac
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Works in Safari on any Mac — no software to install.
          Also covers the built-in Preview app and Terminal one-liners.
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
          4 ways to convert WebP to JPG on Mac
        </h2>

        <div className="space-y-8">
          <div className="border border-indigo-100 rounded-xl p-6 bg-indigo-50/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              <h3 className="font-bold text-gray-900">Use PixConvert in Safari (recommended)</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Drag your .webp file into the converter above or click to choose from Finder.
              Conversion is instant and files never leave your Mac.
            </p>
            <p className="text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2 inline-block">
              ✓ Free · ✓ No install · ✓ Drag &amp; drop from Finder · ✓ Batch supported
            </p>
          </div>

          <div className="border border-gray-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-7 rounded-full bg-gray-300 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              <h3 className="font-bold text-gray-900">Preview app (built-in, one file at a time)</h3>
            </div>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-gray-400 font-mono">1.</span>Double-click the .webp file — it opens in Preview</li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">2.</span>Go to <strong>File → Export…</strong></li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">3.</span>Change the <strong>Format</strong> dropdown to <strong>JPEG</strong></li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">4.</span>Adjust Quality if needed, then click <strong>Save</strong></li>
            </ol>
          </div>

          <div className="border border-gray-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-7 rounded-full bg-gray-300 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              <h3 className="font-bold text-gray-900">Terminal — sips (batch, no install)</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              <code className="bg-gray-100 px-1 rounded">sips</code> is built into every Mac. Perfect for batch converting a folder.
            </p>
            <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-4 overflow-x-auto">
{`# Convert a single file
sips -s format jpeg photo.webp --out photo.jpg

# Batch convert all .webp in current folder
for f in *.webp; do
  sips -s format jpeg "$f" --out "\${f%.webp}.jpg"
done`}
            </pre>
          </div>

          <div className="border border-gray-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-7 rounded-full bg-gray-300 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
              <h3 className="font-bold text-gray-900">Automator workflow (batch, no Terminal)</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Create a right-click Quick Action in Automator to convert WebP files from Finder.
            </p>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-gray-400 font-mono">1.</span>Open <strong>Automator</strong> → New → <strong>Quick Action</strong></li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">2.</span>Set "Workflow receives" to <strong>image files</strong> in <strong>Finder</strong></li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">3.</span>Add action: <strong>Change Type of Images</strong> → JPEG</li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">4.</span>Save — now right-click any .webp → Quick Actions → your workflow</li>
            </ol>
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
            <Link href="/webp-to-jpg/batch" className="text-sm text-indigo-600 hover:underline">Batch convert WebP to JPG →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
