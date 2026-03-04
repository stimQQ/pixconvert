import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'WebP to AVIF Converter – 20–50% Smaller, Free Online',
  description:
    'Convert WebP to AVIF online for free. Get 20–50% smaller files than WebP with the same quality. No upload — runs in your browser. Requires Chrome or Edge.',
  alternates: { canonical: '/webp-to-avif' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is AVIF better than WebP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In terms of compression, yes — AVIF typically achieves 20–50% smaller files than WebP at equivalent visual quality. AVIF also supports HDR color, wider color gamuts, and higher bit depths. However, WebP has broader platform compatibility, especially on older Safari versions and many social/CMS platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does WebP to AVIF preserve transparency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Both WebP and AVIF support full alpha transparency. Every transparent pixel in your WebP image will be preserved exactly in the AVIF output.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which browsers support AVIF encoding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AVIF encoding via the browser Canvas API requires Chrome 94+ or Edge 94+. Firefox and Safari cannot encode AVIF via canvas.toBlob() yet. If you need cross-browser encoding, use WebP instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will WebP to AVIF improve my Core Web Vitals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Smaller image files directly improve Largest Contentful Paint (LCP), a key Core Web Vitals metric. Switching from WebP to AVIF can shave additional kilobytes off your image payload, especially for image-heavy pages.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I use AVIF in HTML with a fallback?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the <picture> element: <picture><source srcset="image.avif" type="image/avif"><source srcset="image.webp" type="image/webp"><img src="image.jpg" alt="..."></picture>. Browsers load the first format they support — AVIF first, WebP as fallback, JPG as last resort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AVIF good for logos and transparent images?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AVIF supports lossless mode with full alpha transparency, making it suitable for logos and UI assets. However, tool and platform support for AVIF is still limited — PNG or WebP may be safer for design workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are my files uploaded to a server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All conversion runs inside your browser using the Canvas API. Your images are never sent anywhere. No account required, no watermark, no file size limit.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert WebP to AVIF',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Open in Chrome or Edge',
      text: 'AVIF encoding requires Chrome 94+ or Edge 94+. Open this page in one of those browsers.',
    },
    {
      '@type': 'HowToStep',
      name: 'Upload your WebP file',
      text: 'Drag and drop one or more WebP images onto the converter, or click "Choose Files".',
    },
    {
      '@type': 'HowToStep',
      name: 'Download your AVIF',
      text: 'Click Download next to each file. Use "Download all" for multiple files.',
    },
  ],
};

export default function WebpToAvifPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ── Hero + Converter ── */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          WebP to AVIF Converter
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Upgrade WebP images to AVIF for <strong className="text-gray-700">20–50% smaller files</strong> with the same visual quality.
          Free, no upload, runs 100% in your browser. Full transparency preserved.
        </p>

        <div className="inline-flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800 text-left max-w-lg mx-auto mb-8">
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            <strong>Requires Chrome or Edge:</strong> AVIF encoding is not yet supported in Firefox or Safari.
            Use <Link href="/webp-to-png" className="underline">WebP→PNG</Link> or keep WebP for cross-browser support.
          </span>
        </div>

        <Converter
          inputMime="image/webp"
          outputMime="image/avif"
          inputLabel="WebP"
          outputLabel="AVIF"
          accept="image/webp,.webp"
        />
      </section>

      <div className="max-w-3xl mx-auto px-4 pb-20 space-y-14">

        {/* ── How to use ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to convert WebP to AVIF</h2>
          <ol className="space-y-4">
            {[
              { n: '1', title: 'Open in Chrome or Edge', body: 'AVIF encoding via canvas requires Chrome 94+ or Edge 94+. If you\'re on Firefox or Safari, the converter will show an error — switch browsers.' },
              { n: '2', title: 'Drop your WebP file', body: 'Drag and drop one or more .webp files onto the converter, or click "Choose Files". Multiple files convert simultaneously.' },
              { n: '3', title: 'Download your AVIF', body: 'Click "Download" next to each result. Use "Download all" for a zip when converting multiple files.' },
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

        {/* ── Why AVIF ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">WebP to AVIF: the next step in compression</h2>
          <p className="text-gray-500 mb-4">
            If you're already using WebP for your images, switching to AVIF can squeeze an additional
            <strong className="text-gray-700"> 20–50%</strong> out of your file sizes without any visible quality difference.
            This means faster page loads, lower bandwidth costs, and better Core Web Vitals scores.
          </p>
          <p className="text-gray-500 mb-6">
            AVIF (AV1 Image File Format) is based on the AV1 video codec developed by the Alliance for Open Media.
            It achieves remarkable results by using more sophisticated encoding algorithms than WebP —
            especially for photographic content with smooth gradients and complex textures.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { stat: '20–50%', label: 'Smaller than WebP', desc: 'Additional savings on top of WebP' },
              { stat: '40–60%', label: 'Smaller than JPG', desc: 'Total compression advantage' },
              { stat: '97%+', label: 'Display support', desc: 'Chrome, Firefox, Safari 16+, Edge' },
            ].map(({ stat, label, desc }) => (
              <div key={label} className="p-4 rounded-xl border border-gray-100 text-center">
                <p className="text-3xl font-extrabold text-indigo-600 mb-1">{stat}</p>
                <p className="font-semibold text-gray-900 text-sm">{label}</p>
                <p className="text-xs text-gray-500 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Developer tips ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Using AVIF with a WebP fallback</h2>
          <p className="text-gray-500 mb-5">
            For production sites, serve AVIF with a WebP fallback for maximum compatibility:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900 text-sm mb-2">HTML — AVIF first, WebP fallback, JPG last resort</p>
              <pre className="text-xs bg-gray-50 rounded-lg p-3 overflow-x-auto text-gray-700">{`<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>`}</pre>
            </div>
            <div className="p-4 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900 text-sm mb-2">Next.js — automatic AVIF support</p>
              <pre className="text-xs bg-gray-50 rounded-lg p-3 overflow-x-auto text-gray-700">{`// next.config.js — enable AVIF output
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

// Next.js <Image> automatically serves AVIF to supported browsers
<Image src="/photo.webp" alt="..." width={800} height={600} />`}</pre>
            </div>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">WebP vs AVIF — technical comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-gray-700">WebP</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-indigo-700">AVIF</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['File size vs JPG', '25–35% smaller', '40–60% smaller'],
                  ['Compression vs WebP', 'Baseline', '20–50% smaller'],
                  ['Transparency', '✓ Supported', '✓ Supported'],
                  ['HDR / wide color', '✗ No', '✓ Supported'],
                  ['Browser encoding', 'All modern browsers', 'Chrome / Edge only'],
                  ['Safari display', '✓ macOS 11+', '✓ Safari 16+ only'],
                  ['Social media upload', '✓ Widely accepted', '✗ Often rejected'],
                  ['Core Web Vitals', '✓ Better than JPG', '✓ Best in class'],
                ].map(([feature, webp, avif]) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="px-4 py-2 font-medium text-gray-700 border border-gray-100">{feature}</td>
                    <td className="px-4 py-2 text-center text-gray-500 border border-gray-100">{webp}</td>
                    <td className="px-4 py-2 text-center text-indigo-600 border border-gray-100">{avif}</td>
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
            All WebP-to-AVIF conversion happens inside your browser using the{' '}
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
            <Link href="/jpg-to-avif" className="text-sm text-indigo-600 hover:underline">JPG to AVIF →</Link>
            <Link href="/png-to-avif" className="text-sm text-indigo-600 hover:underline">PNG to AVIF →</Link>
            <Link href="/avif-to-webp" className="text-sm text-indigo-600 hover:underline">AVIF to WebP (convert back) →</Link>
          </div>
        </section>

      </div>
    </>
  );
}
