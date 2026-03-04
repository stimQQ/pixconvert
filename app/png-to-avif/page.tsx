import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'PNG to AVIF Converter – Keep Transparency, 50–70% Smaller',
  description:
    'Convert PNG to AVIF online for free. Preserve alpha transparency, reduce file sizes 50–70%. No upload — runs in your browser. Requires Chrome or Edge.',
  alternates: { canonical: '/png-to-avif' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does PNG to AVIF preserve transparency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AVIF supports full alpha transparency, so your PNG images with transparent backgrounds will retain transparency after conversion. Logos, icons, and design assets with transparent backgrounds convert perfectly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much smaller will AVIF be compared to PNG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AVIF is typically 50–70% smaller than PNG for the same image at the same visual quality. For photographic content saved as PNG, savings can exceed 80%. PNG uses lossless compression while AVIF can use both lossless and lossy modes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which browsers support AVIF encoding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AVIF encoding via the browser Canvas API works in Chrome 94+ and Edge 94+. Firefox and Safari do not yet support encoding AVIF via canvas.toBlob(). For cross-browser encoding, use PNG→WebP instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is PNG to AVIF good for logos and icons?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, AVIF supports lossless mode with full alpha transparency, making it suitable for logos and UI assets. However, for design workflows — Figma, Photoshop, Canva — PNG remains the universal standard. Use AVIF for web delivery, keep PNG for editing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will AVIF work in all browsers for display?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AVIF display is supported in Chrome 85+, Firefox 93+, Safari 16+, and Edge 121+. For older browsers and broader compatibility, use a <picture> element with PNG or WebP fallback.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert multiple PNG files to AVIF at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Drop multiple PNG files and they all convert simultaneously. A "Download all" button appears when there are two or more files.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are my PNG files uploaded to a server?',
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
  name: 'How to Convert PNG to AVIF',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Open in Chrome or Edge',
      text: 'AVIF encoding requires Chrome 94+ or Edge 94+.',
    },
    {
      '@type': 'HowToStep',
      name: 'Upload your PNG file',
      text: 'Drag and drop one or more PNG images onto the converter, or click "Choose Files".',
    },
    {
      '@type': 'HowToStep',
      name: 'Download your AVIF',
      text: 'Click Download next to each file. Use "Download all" for multiple files.',
    },
  ],
};

export default function PngToAvifPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ── Hero + Converter ── */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          PNG to AVIF Converter
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Convert PNG to AVIF with full alpha transparency preserved.
          <strong className="text-gray-700"> 50–70% smaller</strong> than PNG, same visual quality. Free, no upload.
        </p>

        <div className="inline-flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800 text-left max-w-lg mx-auto mb-8">
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            <strong>Requires Chrome or Edge:</strong> AVIF encoding is not yet supported in Firefox or Safari.
            Use <Link href="/png-to-webp" className="underline">PNG→WebP</Link> for cross-browser encoding support.
          </span>
        </div>

        <Converter
          inputMime="image/png"
          outputMime="image/avif"
          inputLabel="PNG"
          outputLabel="AVIF"
          accept="image/png,.png"
        />
      </section>

      <div className="max-w-3xl mx-auto px-4 pb-20 space-y-14">

        {/* ── How to use ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to convert PNG to AVIF</h2>
          <ol className="space-y-4">
            {[
              { n: '1', title: 'Open in Chrome or Edge', body: 'AVIF encoding via canvas requires Chrome 94+ or Edge 94+. Firefox and Safari users should use PNG→WebP instead.' },
              { n: '2', title: 'Drop your PNG file', body: 'Drag and drop one or more .png files onto the converter, or click "Choose Files". Multiple files convert simultaneously.' },
              { n: '3', title: 'Download your AVIF', body: 'Click "Download" next to each result. For multiple files, click "Download all" to save a zip.' },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">PNG to AVIF: massive size savings</h2>
          <p className="text-gray-500 mb-4">
            PNG is the dominant format for transparent images, but its lossless compression results in
            large file sizes — especially for complex illustrations and photographic content.
            AVIF can achieve the same or better visual quality at a fraction of the file size.
          </p>
          <p className="text-gray-500 mb-6">
            For web assets like icons and logos, AVIF lossless mode can be 30–50% smaller than PNG
            while keeping pixel-perfect quality. For photographic PNGs, the savings with lossy AVIF
            can exceed 80%.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { stat: '50–70%', label: 'Smaller than PNG', desc: 'Average savings across image types' },
              { stat: '80%+', label: 'Savings for photos', desc: 'Photographic PNG → lossy AVIF' },
              { stat: '97%+', label: 'AVIF display support', desc: 'Chrome, Firefox, Safari 16+, Edge' },
            ].map(({ stat, label, desc }) => (
              <div key={label} className="p-4 rounded-xl border border-gray-100 text-center">
                <p className="text-3xl font-extrabold text-indigo-600 mb-1">{stat}</p>
                <p className="font-semibold text-gray-900 text-sm">{label}</p>
                <p className="text-xs text-gray-500 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">PNG vs WebP vs AVIF — for transparent images</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-gray-500">PNG</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-gray-600">WebP</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-indigo-700">AVIF</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Transparency', '✓', '✓', '✓'],
                  ['File size (lossless vs PNG)', 'Baseline', '~26% smaller', '30–50% smaller'],
                  ['File size (lossy vs PNG)', '—', '60–80% smaller', '50–80%+ smaller'],
                  ['Browser display', '100%', '97%+', '97%+'],
                  ['Browser encoding', '✓ All', '✓ All', '✗ Chrome/Edge only'],
                  ['Design tools', '✓ Universal', '✗ Limited', '✗ Very limited'],
                  ['Core Web Vitals', 'Baseline', '✓ Better', '✓ Best'],
                ].map(([feature, png, webp, avif]) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="px-4 py-2 font-medium text-gray-700 border border-gray-100">{feature}</td>
                    <td className="px-4 py-2 text-center text-gray-400 border border-gray-100">{png}</td>
                    <td className="px-4 py-2 text-center text-gray-500 border border-gray-100">{webp}</td>
                    <td className="px-4 py-2 text-center text-indigo-600 border border-gray-100">{avif}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Keep PNG for design workflows. Use AVIF for web delivery, with PNG or WebP as fallback.
          </p>
        </section>

        {/* ── Privacy note ── */}
        <section className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
          <h2 className="font-bold text-gray-900 mb-2 text-base">100% private — files never leave your device</h2>
          <p className="text-sm text-gray-600">
            All PNG-to-AVIF conversion happens inside your browser using the{' '}
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
            <Link href="/png-to-webp" className="text-sm text-indigo-600 hover:underline">PNG to WebP (cross-browser) →</Link>
            <Link href="/jpg-to-avif" className="text-sm text-indigo-600 hover:underline">JPG to AVIF →</Link>
            <Link href="/avif-to-png" className="text-sm text-indigo-600 hover:underline">AVIF to PNG (convert back) →</Link>
          </div>
        </section>

      </div>
    </>
  );
}
