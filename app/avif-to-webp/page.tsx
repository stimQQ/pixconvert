import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'AVIF to WebP Converter – Broader Compatibility, Free Online',
  description:
    'Convert AVIF to WebP online for free. WebP works in 97%+ of browsers vs AVIF\'s limited support. Transparency preserved. No upload — runs in your browser.',
  alternates: { canonical: '/avif-to-webp' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why convert AVIF to WebP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WebP has broader compatibility than AVIF. While AVIF offers better compression, some platforms, CMS upload dialogs, email clients, and social media services still don\'t accept AVIF. WebP is the safer middle ground — 25–35% smaller than JPG, and supported by 97%+ of browsers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better: AVIF or WebP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AVIF typically achieves 20–50% better compression than WebP at the same visual quality. However, WebP has broader and more consistent support — especially on older Safari versions, social platforms, and CMS tools. Use AVIF for maximum compression on modern platforms, WebP for maximum compatibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does AVIF to WebP preserve transparency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Both AVIF and WebP support full alpha transparency. Your transparent AVIF images will retain every transparent pixel when converted to WebP.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my WebP files be larger than the AVIF originals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AVIF is a more efficient format. WebP files will typically be 20–50% larger than equivalent AVIF files at the same quality. You\'re trading compression efficiency for compatibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert multiple AVIF files to WebP at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Drop multiple AVIF files and they all convert simultaneously. A "Download all" button appears when there are two or more files.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is WebP supported that AVIF is not?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WebP is supported in older Safari versions (macOS 11+ vs AVIF requiring Safari 16+), many social media platforms, CMS upload tools like WordPress and Shopify, and various image hosting services that haven\'t yet added AVIF support.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert AVIF to WebP',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload your AVIF file',
      text: 'Drag and drop one or more AVIF images onto the converter, or click "Choose Files".',
    },
    {
      '@type': 'HowToStep',
      name: 'Automatic conversion',
      text: 'The Canvas API decodes your AVIF and re-encodes as WebP, preserving transparency. All processing runs in your browser.',
    },
    {
      '@type': 'HowToStep',
      name: 'Download your WebP',
      text: 'Click Download next to each result. Use "Download all" for a zip when converting multiple files.',
    },
  ],
};

export default function AvifToWebpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ── Hero + Converter ── */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          AVIF to WebP Converter
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Convert AVIF to WebP instantly — free, no upload, runs 100% in your browser.
          WebP works in <strong className="text-gray-700">97%+ of browsers</strong> and most platforms where AVIF isn&apos;t yet supported.
          Full transparency preserved.
        </p>
        <Converter
          inputMime="image/avif"
          outputMime="image/webp"
          inputLabel="AVIF"
          outputLabel="WebP"
          accept="image/avif,.avif"
        />
      </section>

      <div className="max-w-3xl mx-auto px-4 pb-20 space-y-14">

        {/* ── How to use ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to convert AVIF to WebP</h2>
          <ol className="space-y-4">
            {[
              { n: '1', title: 'Drop your AVIF file', body: 'Drag and drop one or more .avif files onto the converter above, or click "Choose Files". Multiple files convert simultaneously.' },
              { n: '2', title: 'Instant browser conversion', body: 'The Canvas API reads your AVIF and outputs WebP at quality 92. Transparency is preserved. No upload, no server wait.' },
              { n: '3', title: 'Download your WebP', body: 'Click "Download" next to each file. For multiple files, click "Download all" to save a zip.' },
            ].map(({ n, title, body }) => (
              <li key={n} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">{n}</span>
                <div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="text-gray-500 text-sm mt-1">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── AVIF vs WebP decision guide ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AVIF vs WebP — choosing the right format</h2>
          <p className="text-gray-500 mb-5">
            Both AVIF and WebP are modern formats that beat JPG on compression. The question is which
            one fits your use case:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/40">
              <p className="font-bold text-gray-700 mb-2">Keep AVIF when…</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  'Maximum compression is the top priority',
                  'You control the delivery environment',
                  'Target audience uses Chrome / Edge / modern Safari',
                  'Serving images on your own website',
                  'You have WebP or JPG fallbacks set up',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-gray-400 font-bold mt-0.5">✓</span>{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-xl border-2 border-indigo-200 bg-indigo-50/40">
              <p className="font-bold text-indigo-700 mb-2">Convert to WebP when…</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  'Uploading to social media or CMS platforms',
                  'Target includes older Safari users',
                  'Using tools that don\'t accept AVIF',
                  'Sharing images in messaging apps',
                  'WordPress, Shopify, or other CMS uploads',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold mt-0.5">✓</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AVIF vs WebP — technical comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-indigo-700">AVIF</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-gray-700">WebP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['File size vs JPG', '40–60% smaller', '25–35% smaller'],
                  ['Transparency', '✓ Supported', '✓ Supported'],
                  ['Chrome', '✓ v85+', '✓ v10+'],
                  ['Firefox', '✓ v93+', '✓ v65+'],
                  ['Safari', '✓ v16+ only', '✓ macOS 11+ / iOS 14+'],
                  ['Edge', '✓ v121+', '✓ v18+'],
                  ['Social media upload', '✗ Often rejected', '✓ Widely accepted'],
                  ['CMS compatibility', '✗ Often unsupported', '✓ WordPress, Shopify etc.'],
                  ['Introduced', '2019', '2010'],
                ].map(([feature, avif, webp]) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="px-4 py-2 font-medium text-gray-700 border border-gray-100">{feature}</td>
                    <td className="px-4 py-2 text-center text-indigo-600 border border-gray-100">{avif}</td>
                    <td className="px-4 py-2 text-center text-gray-500 border border-gray-100">{webp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Privacy note ── */}
        <section className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
          <h2 className="font-bold text-gray-900 mb-2 text-base">100% private — files never leave your device</h2>
          <p className="text-sm text-gray-600">
            All AVIF-to-WebP conversion happens inside your browser using the{' '}
            <code className="bg-white px-1 rounded text-xs">Canvas API</code>. Your images are never
            transmitted anywhere. No account, no watermark, no server-imposed file size limit.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related ── */}
        <section className="pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-400 mb-3">Related converters:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/avif-to-jpg" className="text-sm text-indigo-600 hover:underline">AVIF to JPG (maximum compatibility) →</Link>
            <Link href="/webp-to-avif" className="text-sm text-indigo-600 hover:underline">WebP to AVIF (better compression) →</Link>
            <Link href="/avif-to-png" className="text-sm text-indigo-600 hover:underline">AVIF to PNG →</Link>
          </div>
        </section>

      </div>
    </>
  );
}
