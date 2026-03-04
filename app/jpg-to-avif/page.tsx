import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'JPG to AVIF Converter – 40–60% Smaller Files, Free Online',
  description:
    'Convert JPG/JPEG to AVIF online for free. Reduce file sizes by 40–60% vs JPG with no visible quality loss. No upload — runs in your browser. Requires Chrome or Edge.',
  alternates: { canonical: '/jpg-to-avif' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much smaller is AVIF compared to JPG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AVIF typically produces files 40–60% smaller than equivalent JPG files at the same visual quality, making it one of the most efficient image formats available. For photographic content with smooth gradients and textures, the savings are most pronounced.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which browsers support AVIF encoding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AVIF encoding via the browser Canvas API is supported in Chrome 94+ and Edge 94+. Firefox and Safari cannot encode AVIF via canvas.toBlob() yet. For cross-browser encoding, use JPG→WebP instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will JPG to AVIF improve my Google PageSpeed score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AVIF is currently the highest-rated format in Google Lighthouse and PageSpeed Insights for image compression. Smaller files directly improve Largest Contentful Paint (LCP), a critical Core Web Vitals metric.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does JPG to AVIF lose quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use quality 92% by default, which looks excellent for most images. Since your source JPG is already lossy, this is a re-encoding step — for best results, always convert from the original source file rather than a previously compressed JPG.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AVIF supported in all browsers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AVIF display is supported in Chrome 85+, Firefox 93+, Safari 16+, and Edge 121+. For older browsers, use a <picture> element with a WebP fallback and a JPG last resort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert multiple JPG files to AVIF at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Drop multiple JPG files and they all convert simultaneously. A "Download all" button appears when there are two or more files.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are my files uploaded to a server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All conversion runs inside your browser using the Canvas API. Your images are never sent to any server. No account required, no watermark, no file size limit.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert JPG to AVIF',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Open in Chrome or Edge',
      text: 'AVIF encoding requires Chrome 94+ or Edge 94+. Open this page in one of those browsers.',
    },
    {
      '@type': 'HowToStep',
      name: 'Upload your JPG file',
      text: 'Drag and drop one or more JPG/JPEG images onto the converter, or click "Choose Files".',
    },
    {
      '@type': 'HowToStep',
      name: 'Download your AVIF',
      text: 'Click Download next to each file. Use "Download all" for multiple files.',
    },
  ],
};

export default function JpgToAvifPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ── Hero + Converter ── */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          JPG to AVIF Converter
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Convert JPG to AVIF for <strong className="text-gray-700">40–60% smaller files</strong> with the same visual quality.
          Free, no upload, runs 100% in your browser. Improve Core Web Vitals instantly.
        </p>

        <div className="inline-flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800 text-left max-w-lg mx-auto mb-8">
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            <strong>Requires Chrome or Edge:</strong> AVIF encoding is not yet supported in Firefox or Safari.
            Use <Link href="/jpg-to-webp" className="underline">JPG→WebP</Link> for cross-browser support.
          </span>
        </div>

        <Converter
          inputMime="image/jpeg"
          outputMime="image/avif"
          inputLabel="JPG"
          outputLabel="AVIF"
          accept="image/jpeg,image/jpg,.jpg,.jpeg"
        />
      </section>

      <div className="max-w-3xl mx-auto px-4 pb-20 space-y-14">

        {/* ── How to use ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to convert JPG to AVIF</h2>
          <ol className="space-y-4">
            {[
              { n: '1', title: 'Open in Chrome or Edge', body: 'AVIF encoding requires Chrome 94+ or Edge 94+. If you\'re on Firefox or Safari, switch browsers first.' },
              { n: '2', title: 'Drop your JPG or JPEG file', body: 'Drag and drop one or more .jpg or .jpeg files onto the converter, or click "Choose Files". Multiple files convert simultaneously.' },
              { n: '3', title: 'Download your AVIF', body: 'Click "Download" next to each file. For multiple files, use "Download all" to save everything as a zip.' },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why AVIF is the future of web images</h2>
          <p className="text-gray-500 mb-4">
            AVIF (AV1 Image File Format) is based on the AV1 video codec developed by the Alliance for Open Media —
            a consortium that includes Google, Netflix, Apple, and Microsoft. It achieves remarkable compression
            by using more sophisticated encoding algorithms than JPG or even WebP.
          </p>
          <p className="text-gray-500 mb-6">
            For web developers, switching to AVIF can dramatically improve Core Web Vitals scores by reducing
            image payload. Google, Netflix, and Facebook have all adopted AVIF for significant bandwidth savings.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { stat: '40–60%', label: 'Smaller than JPG', desc: 'At the same visual quality' },
              { stat: '20–50%', label: 'Smaller than WebP', desc: 'Additional savings over WebP' },
              { stat: '97%+', label: 'Display support', desc: 'Chrome 85+, Firefox 93+, Safari 16+' },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Using AVIF on your website</h2>
          <p className="text-gray-500 mb-5">
            Serve AVIF with fallbacks for maximum browser coverage:
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
              <p className="font-semibold text-gray-900 text-sm mb-2">Next.js — automatic AVIF + WebP output</p>
              <pre className="text-xs bg-gray-50 rounded-lg p-3 overflow-x-auto text-gray-700">{`// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};`}</pre>
            </div>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">JPG vs WebP vs AVIF — compression comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-gray-500">JPG</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-gray-600">WebP</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-indigo-700">AVIF</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['File size', 'Baseline', '25–35% smaller', '40–60% smaller'],
                  ['Transparency', '✗', '✓', '✓'],
                  ['HDR color', '✗', '✗', '✓'],
                  ['Browser support (display)', '100%', '97%+', '97%+'],
                  ['Safari encoding', '✓', '✓', '✗'],
                  ['Core Web Vitals', 'Baseline', '✓ Better', '✓ Best'],
                  ['Introduced', '1992', '2010', '2019'],
                ].map(([feature, jpg, webp, avif]) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="px-4 py-2 font-medium text-gray-700 border border-gray-100">{feature}</td>
                    <td className="px-4 py-2 text-center text-gray-400 border border-gray-100">{jpg}</td>
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
            All JPG-to-AVIF conversion happens inside your browser using the{' '}
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
            <Link href="/jpg-to-webp" className="text-sm text-indigo-600 hover:underline">JPG to WebP (cross-browser) →</Link>
            <Link href="/png-to-avif" className="text-sm text-indigo-600 hover:underline">PNG to AVIF →</Link>
            <Link href="/avif-to-jpg" className="text-sm text-indigo-600 hover:underline">AVIF to JPG (convert back) →</Link>
          </div>
        </section>

      </div>
    </>
  );
}
