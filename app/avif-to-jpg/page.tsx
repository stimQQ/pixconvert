import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'AVIF to JPG Converter – Free, Instant, No Upload',
  description:
    'Convert AVIF to JPG online for free — no upload, no sign-up, runs 100% in your browser. Transparent areas filled with white. Universal JPG compatibility. Unlimited files.',
  alternates: { canonical: '/avif-to-jpg' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why can\'t I open AVIF files?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AVIF is a very new format (standardized in 2019). Older applications — Windows Photo Viewer, Microsoft Office, most email clients, older versions of Photoshop, and many print services — do not support it yet. Converting to JPG gives you a file that opens everywhere, on any device, in any app.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to transparent areas when converting AVIF to JPG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JPG does not support transparency. Any transparent areas in your AVIF image will be filled with a white background during conversion. If you need to keep transparency, convert to PNG instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I lose quality converting AVIF to JPG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some quality loss is expected since JPG uses lossy compression. We use quality 92% by default which looks excellent for most images. AVIF sources often contain more detail than JPG, so the output will still look very good.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AVIF to JPG conversion free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely free. No sign-up, no watermarks, no file size limits (beyond your browser\'s memory). Files are never uploaded to a server.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert multiple AVIF files to JPG at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Drop multiple AVIF files and they all convert simultaneously. When there are two or more files, a "Download all" button appears to save everything as a zip.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this work on iPhone, Android, and Mac?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The converter works in Safari on iPhone, Chrome on Android, and all desktop browsers. AVIF display is supported in Safari 16+, Chrome, and Firefox. Select your AVIF file and download the JPG.',
      },
    },
    {
      '@type': 'Question',
      name: 'AVIF to JPG or AVIF to PNG — which should I choose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose JPG if the image is a photograph and you want the smallest file size. Choose PNG if the image has a transparent background (logo, icon, design asset) — PNG preserves transparency while JPG fills it with white.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert AVIF to JPG',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload your AVIF file',
      text: 'Drag and drop one or more AVIF images onto the converter, or click "Choose Files". Multiple files are supported.',
    },
    {
      '@type': 'HowToStep',
      name: 'Automatic conversion',
      text: 'Conversion starts instantly. Transparent areas are filled with white. The Canvas API runs everything in your browser — no upload needed.',
    },
    {
      '@type': 'HowToStep',
      name: 'Download your JPG',
      text: 'Click Download next to each file. Use "Download all" for a zip when converting multiple files.',
    },
  ],
};

export default function AvifToJpgPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ── Hero + Converter ── */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          AVIF to JPG Converter
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Convert AVIF to JPG instantly — free, no upload, runs 100% in your browser.
          Transparent areas filled with white. Universal JPG compatibility on every device.
        </p>
        <Converter
          inputMime="image/avif"
          outputMime="image/jpeg"
          inputLabel="AVIF"
          outputLabel="JPG"
          accept="image/avif,.avif"
        />
      </section>

      <div className="max-w-3xl mx-auto px-4 pb-20 space-y-14">

        {/* ── How to use ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to convert AVIF to JPG</h2>
          <ol className="space-y-4">
            {[
              { n: '1', title: 'Drop your AVIF file', body: 'Drag and drop one or more .avif files onto the converter above, or click "Choose Files". Multiple files convert at the same time.' },
              { n: '2', title: 'Instant automatic conversion', body: 'No settings needed. The Canvas API decodes your AVIF image and re-encodes as JPG at quality 92. Transparent areas are filled with white (JPG does not support transparency). Your files never leave your device.' },
              { n: '3', title: 'Download your JPG', body: 'Click "Download" next to each file. For multiple files, use "Download all" to save a zip in one click.' },
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

        {/* ── Why convert ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why convert AVIF to JPG?</h2>
          <p className="text-gray-500 mb-4">
            AVIF (AV1 Image File Format) is one of the most advanced image formats available — it achieves
            remarkable compression, often 40–60% smaller than JPG at the same visual quality. But that
            efficiency comes at a cost: <strong className="text-gray-700">compatibility</strong>.
          </p>
          <p className="text-gray-500 mb-4">
            Despite browser support improving, AVIF still cannot be opened by a long list of common software:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {[
              'Windows Photo Viewer (pre-Win 11)',
              'Microsoft Office (Word, PowerPoint)',
              'Older email clients (Outlook, Apple Mail)',
              'Adobe Photoshop (older versions)',
              'Most print shops and photo services',
              'Many CMS and upload dialogs',
              'Some social media upload forms',
              'Older iPhone / Android gallery apps',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-500">
            Converting AVIF to JPG solves all of these instantly. JPG is the most universally supported
            image format — every device, every app, every platform accepts it without issue.
          </p>
        </section>

        {/* ── Comparison table ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AVIF vs JPG — key differences</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-indigo-700">AVIF</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-gray-700">JPG</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['File size', '40–60% smaller than JPG', 'Baseline (larger)'],
                  ['Transparency', '✓ Supported', '✗ Not supported'],
                  ['Browser support', 'Chrome 85+, Safari 16+, Firefox 93+', 'Every browser ever made'],
                  ['App compatibility', 'Very limited (2019–present)', 'Universal (since 1992)'],
                  ['Compression type', 'Lossy or lossless', 'Lossy only'],
                  ['Print services', '✗ Not accepted', '✓ Always accepted'],
                  ['Email clients', '✗ Many block it', '✓ Always opens'],
                  ['Editing in Photoshop', 'Requires CS2023+ or plugin', '✓ All versions'],
                ].map(([feature, avif, jpg]) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="px-4 py-2 font-medium text-gray-700 border border-gray-100">{feature}</td>
                    <td className="px-4 py-2 text-center text-indigo-600 border border-gray-100">{avif}</td>
                    <td className="px-4 py-2 text-center text-gray-500 border border-gray-100">{jpg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Use AVIF on modern websites for performance. Use JPG when you need to share, print, or open in any app.
          </p>
        </section>

        {/* ── Privacy note ── */}
        <section className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
          <h2 className="font-bold text-gray-900 mb-2 text-base">100% private — files never leave your device</h2>
          <p className="text-sm text-gray-600">
            All AVIF-to-JPG conversion happens inside your browser using the{' '}
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
            <Link href="/avif-to-png" className="text-sm text-indigo-600 hover:underline">AVIF to PNG (keep transparency) →</Link>
            <Link href="/avif-to-webp" className="text-sm text-indigo-600 hover:underline">AVIF to WebP (broader compatibility) →</Link>
            <Link href="/webp-to-jpg" className="text-sm text-indigo-600 hover:underline">WebP to JPG →</Link>
          </div>
        </section>

      </div>
    </>
  );
}
