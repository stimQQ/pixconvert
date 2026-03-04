import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'How to Convert WebP to JPG on iPhone (iOS)',
  description:
    'Convert WebP images to JPG on iPhone for free — works in Safari without any app. Also covers the Shortcuts app method and why iPhone saves images as WebP.',
  alternates: { canonical: '/webp-to-jpg/iphone' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does my iPhone save images as WebP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you long-press and save an image from Safari, iOS saves it in the original format the website delivered — which is often WebP. iOS 16+ introduced a fix: go to Settings → Safari → Request Desktop Website → All Websites to force JPEG delivery, but this doesn\'t work for all sites.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert WebP to JPG on iPhone without an app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Open this page in Safari on your iPhone, tap "Choose Files" and select your WebP image from Files or Photos. The converter runs in Safari — no app download needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the iPhone Files app support WebP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Files app can store and preview WebP files, but it cannot convert them. You need to either use a web-based converter or the Shortcuts app method.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the converted JPG save to my iPhone Camera Roll?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After conversion, tap "Download". Safari will save the JPG to your Downloads folder (Files app). From there, tap and hold the file → Share → Save to Photos to add it to your Camera Roll.',
      },
    },
  ],
};

export default function WebpToJpgIphonePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-4">
        <p className="text-sm text-gray-400 mb-2">
          <Link href="/webp-to-jpg" className="hover:text-indigo-600">WebP to JPG</Link>
          <span className="mx-2">›</span>iPhone
        </p>
      </div>

      <section className="max-w-3xl mx-auto px-4 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Convert WebP to JPG on iPhone
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Works directly in Safari on iOS — no app to download.
          Tap the upload area below to select your WebP file from Photos or Files.
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
          3 ways to convert WebP to JPG on iPhone
        </h2>

        <div className="space-y-8">
          {/* Method 1 */}
          <div className="border border-indigo-100 rounded-xl p-6 bg-indigo-50/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              <h3 className="font-bold text-gray-900">Use PixConvert in Safari (recommended)</h3>
            </div>
            <ol className="space-y-2 text-sm text-gray-600 mb-3">
              <li className="flex gap-2"><span className="text-gray-400 font-mono">1.</span>Open this page in Safari on your iPhone</li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">2.</span>Tap <strong>"Choose Files"</strong> and pick your WebP from Photos or Files</li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">3.</span>Conversion is instant — tap <strong>Download</strong> to save the JPG</li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">4.</span>Go to Files → Downloads → long-press the JPG → <strong>Save to Photos</strong></li>
            </ol>
            <p className="text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2 inline-block">
              ✓ Free · ✓ No app · ✓ Works on iOS 14+ in Safari
            </p>
          </div>

          {/* Method 2 */}
          <div className="border border-gray-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-7 rounded-full bg-gray-300 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              <h3 className="font-bold text-gray-900">Stop Safari saving WebP in the first place (iOS 16+)</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Prevent Safari from downloading WebP by requesting the desktop version of websites, which forces many sites to serve JPEG instead.
            </p>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-gray-400 font-mono">1.</span>Open <strong>Settings → Safari</strong></li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">2.</span>Scroll to <strong>Request Desktop Website → All Websites</strong></li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">3.</span>Toggle it on</li>
            </ol>
            <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2 mt-3 inline-block">
              ⚠ Not all websites respect this. Some always send WebP regardless.
            </p>
          </div>

          {/* Method 3 */}
          <div className="border border-gray-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-7 rounded-full bg-gray-300 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              <h3 className="font-bold text-gray-900">iPhone Shortcuts app (batch, no internet needed)</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Create a Shortcut to auto-convert WebP images from your Photos library to JPEG on-device.
            </p>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-gray-400 font-mono">1.</span>Open <strong>Shortcuts → New Shortcut</strong></li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">2.</span>Add action: <strong>Get Photos</strong> (select album or specific photos)</li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">3.</span>Add action: <strong>Convert Image</strong> → set format to <strong>JPEG</strong></li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">4.</span>Add action: <strong>Save to Photo Album</strong></li>
              <li className="flex gap-2"><span className="text-gray-400 font-mono">5.</span>Run the shortcut — done!</li>
            </ol>
            <p className="text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2 mt-3 inline-block">
              ✓ Works offline · ✓ Batch supported · ✓ Stays in Photos
            </p>
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
            <Link href="/webp-to-jpg/mac" className="text-sm text-indigo-600 hover:underline">WebP to JPG on Mac →</Link>
            <Link href="/webp-to-jpg/batch" className="text-sm text-indigo-600 hover:underline">Batch convert WebP to JPG →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
