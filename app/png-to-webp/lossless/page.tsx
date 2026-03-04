import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'Convert PNG to WebP Lossless – No Quality Loss, Free',
  description:
    'Convert PNG to WebP with lossless compression. Smaller files, zero quality loss, transparency preserved. Free browser-based converter — no upload.',
  alternates: { canonical: '/png-to-webp/lossless' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is lossless WebP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lossless WebP compresses images without discarding any pixel data — the decoded image is bit-for-bit identical to the original. It uses a more efficient algorithm than PNG\'s DEFLATE compression, resulting in files typically 26% smaller than equivalent PNGs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is lossless WebP different from lossy WebP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lossless WebP preserves every pixel exactly — ideal for graphics, logos, and UI elements with sharp edges. Lossy WebP (the default) discards some detail for much smaller files — ideal for photos. Both support transparency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does lossless PNG to WebP preserve transparency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Both lossless and lossy WebP support full alpha transparency. Your PNG\'s transparent areas will be perfectly preserved in the WebP output.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will lossless WebP always be smaller than PNG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lossless WebP is typically 26% smaller than PNG on average, but results vary by image content. For already-optimized PNGs or images with very simple content, the savings may be smaller. For complex images and photos-saved-as-PNG, savings are usually significant.',
      },
    },
  ],
};

export default function PngToWebpLosslessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-4">
        <p className="text-sm text-gray-400 mb-2">
          <Link href="/png-to-webp" className="hover:text-indigo-600">PNG to WebP</Link>
          <span className="mx-2">›</span>Lossless
        </p>
      </div>

      <section className="max-w-3xl mx-auto px-4 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          PNG to WebP — Lossless, No Quality Loss
        </h1>
        <p className="text-lg text-gray-500 mb-4">
          Convert PNG to WebP at maximum quality — every pixel preserved.
          Lossless WebP is typically 26% smaller than PNG with zero visual difference.
        </p>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm text-green-800 mb-8">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          This converter uses <strong className="mx-1">quality=1.0</strong> (lossless mode) for WebP output.
        </div>
        <Converter
          inputMime="image/png"
          outputMime="image/webp"
          inputLabel="PNG"
          outputLabel="WebP"
          accept="image/png,.png"
        />
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Lossless vs lossy WebP — when to use each</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="border border-indigo-100 rounded-xl p-5 bg-indigo-50/30">
            <p className="font-semibold text-indigo-700 mb-3">Use lossless WebP for:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <svg className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Logos and brand assets (sharp edges must stay sharp)</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>UI icons and illustrations</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Screenshots and text-heavy images</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Images requiring pixel-perfect accuracy</span>
              </li>
            </ul>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-semibold text-gray-700 mb-3">Use lossy WebP for:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Photographs (much smaller files, barely visible loss)</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Hero images and product photos</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Any image where 25-35% size reduction matters</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Background images viewed at small sizes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-5 bg-gray-50 rounded-xl">
          <p className="text-sm font-semibold text-gray-700 mb-3">Quick size comparison (typical results):</p>
          <div className="space-y-3">
            {[
              { label: 'PNG original', pct: 100, color: 'bg-gray-300' },
              { label: 'Lossless WebP (~26% smaller)', pct: 74, color: 'bg-indigo-400' },
              { label: 'Lossy WebP quality 90 (~60% smaller)', pct: 40, color: 'bg-indigo-600' },
            ].map(({ label, pct, color }) => (
              <div key={label}>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>{label}</span><span>{pct}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className={`h-2 ${color} rounded-full`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
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
          <p className="text-sm text-gray-400 mb-3">Related:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/png-to-webp" className="text-sm text-indigo-600 hover:underline">PNG to WebP converter →</Link>
            <Link href="/webp-to-png/transparent" className="text-sm text-indigo-600 hover:underline">WebP to PNG transparent →</Link>
            <Link href="/blog/png-to-webp-python" className="text-sm text-indigo-600 hover:underline">Python lossless conversion guide →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
