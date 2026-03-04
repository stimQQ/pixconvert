import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'WebP to JPG Converter – Free, Instant, No Upload',
  description:
    'Convert WebP to JPG (JPEG) online for free — no upload, no sign-up, runs 100% in your browser. Transparent areas filled with white automatically. Unlimited files.',
  alternates: { canonical: '/webp-to-jpg' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I convert WebP to JPG for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drop your WebP file onto this page and it converts to JPG instantly — no upload, no account, completely free. The conversion runs inside your browser using the Canvas API.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why convert WebP to JPG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JPG is universally supported by every app, device, and platform. WebP cannot be opened by older email clients, Microsoft Office, most print services, and many photo editors. Converting WebP to JPG ensures the file works everywhere.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to transparent areas when converting WebP to JPG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JPG does not support transparency. Any transparent areas in your WebP file are filled with a white background during conversion. If you need to keep transparency, convert to PNG instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a file size limit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no server-side limit because files never leave your device. Very large images (above ~50 MB) may be limited by your browser\'s available memory.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does converting WebP to JPG lose quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JPG uses lossy compression. We use quality 92% by default — visually indistinguishable from the original for most images. If you need pixel-perfect output, convert to PNG instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert multiple WebP files to JPG at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Drop multiple WebP files at once and they all convert simultaneously. A "Download all" button appears when there are two or more converted files.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this work on iPhone and Android?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The converter works in Safari on iPhone and Chrome on Android. Tap "Choose Files" to select WebP images from your Photos or Files app, then download the JPG.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is WebP the same as JPEG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. WebP (.webp) is a format developed by Google in 2010. JPEG/JPG (.jpg, .jpeg) is a much older format from 1992. WebP produces smaller files but has limited compatibility. JPG works on every device ever made.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert WebP to JPG',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload your WebP file',
      text: 'Drag and drop your WebP image onto the converter, or click to browse your files. You can select multiple WebP files at once.',
    },
    {
      '@type': 'HowToStep',
      name: 'Wait for automatic conversion',
      text: 'Conversion starts immediately and finishes in under a second. No settings to adjust — transparent areas are automatically filled with white.',
    },
    {
      '@type': 'HowToStep',
      name: 'Download your JPG',
      text: 'Click the Download button next to each converted image. For multiple files, use the "Download all" button to get a zip.',
    },
  ],
};

export default function WebpToJpgPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ── Hero + Converter ── */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          WebP to JPG Converter
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Convert WebP to JPG instantly — free, no upload, runs 100% in your browser.
          Also converts <strong className="text-gray-700">WebP to JPEG</strong>. Transparent areas are automatically filled with a white background.
        </p>
        <Converter
          inputMime="image/webp"
          outputMime="image/jpeg"
          inputLabel="WebP"
          outputLabel="JPG"
          accept="image/webp"
        />
      </section>

      <div className="max-w-3xl mx-auto px-4 pb-20 space-y-14">

        {/* ── How to use ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to convert WebP to JPG</h2>
          <ol className="space-y-4">
            {[
              { n: '1', title: 'Drop your WebP file', body: 'Drag and drop one or more .webp files onto the converter above, or click "Choose Files" to browse. Multiple files are converted simultaneously.' },
              { n: '2', title: 'Instant automatic conversion', body: 'No settings needed. The converter runs entirely in your browser using the Canvas API — your files are never uploaded to a server. Transparent areas are filled with white (JPG does not support transparency).' },
              { n: '3', title: 'Download your JPG', body: 'Click "Download" next to each file. Converting two or more files? Use "Download all" to grab everything in one click.' },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why convert WebP to JPG?</h2>
          <p className="text-gray-500 mb-4">
            WebP is Google's modern image format — it produces files 25–35% smaller than JPG at the same visual quality.
            But smaller file size comes at a cost: <strong className="text-gray-700">compatibility</strong>.
            Despite being released in 2010, WebP still cannot be opened by a long list of common software:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {[
              'Microsoft Office (Word, PowerPoint)',
              'Older email clients (Outlook 2016 and below)',
              'Most print shops and photo-print services',
              'Adobe Photoshop (older versions)',
              'Many CMS upload dialogs',
              'Windows Photo Viewer (pre-Win 11)',
              'Some social media upload forms',
              'iOS Camera Roll saving from Safari',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-500">
            Converting WebP to JPG (JPEG) solves all of these instantly. JPG is the most universally supported
            image format in existence — every device, every app, every platform accepts it without issue.
          </p>
        </section>

        {/* ── Comparison table ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">WebP vs JPG — key differences</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-indigo-700">WebP</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-gray-700">JPG / JPEG</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['File size', '25–35% smaller', 'Baseline (larger)'],
                  ['Transparency (alpha)', '✓ Supported', '✗ Not supported'],
                  ['Browser display', 'All modern browsers', 'Every browser ever made'],
                  ['App compatibility', 'Limited (2010–present)', 'Universal (since 1992)'],
                  ['Compression type', 'Lossy or lossless', 'Lossy only'],
                  ['Print services', '✗ Rarely accepted', '✓ Always accepted'],
                  ['Email attachments', '✗ Some clients block', '✓ Always opens'],
                  ['Editing in Photoshop', 'Requires CS6+ or plugin', '✓ All versions'],
                ].map(([feature, webp, jpg]) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="px-4 py-2 font-medium text-gray-700 border border-gray-100">{feature}</td>
                    <td className="px-4 py-2 text-center text-indigo-600 border border-gray-100">{webp}</td>
                    <td className="px-4 py-2 text-center text-gray-500 border border-gray-100">{jpg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Use WebP on websites for performance. Use JPG when you need to share, print, or open in apps.
          </p>
        </section>

        {/* ── Device nav ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Convert WebP to JPG on your device</h2>
          <p className="text-gray-500 mb-5 text-sm">
            The converter above works on every device. For step-by-step guides tailored to each platform:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: '/webp-to-jpg/windows', icon: '🪟', label: 'WebP to JPG on Windows', desc: 'Paint, Windows Photos, and PowerShell methods' },
              { href: '/webp-to-jpg/iphone', icon: '📱', label: 'WebP to JPG on iPhone', desc: 'Safari converter, Shortcuts app, iOS settings fix' },
              { href: '/webp-to-jpg/mac', icon: '🍎', label: 'WebP to JPG on Mac', desc: 'Preview, sips terminal, Automator workflow' },
              { href: '/webp-to-jpg/batch', icon: '📦', label: 'Batch WebP to JPG', desc: 'Convert dozens of WebP files at once' },
            ].map(({ href, icon, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors group"
              >
                <span className="text-xl mt-0.5">{icon}</span>
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-indigo-700 text-sm">{label} →</p>
                  <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Privacy note ── */}
        <section className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
          <h2 className="font-bold text-gray-900 mb-2 text-base">100% private — files never leave your device</h2>
          <p className="text-sm text-gray-600">
            Most online converters upload your images to their servers. PixConvert is different:
            all WebP-to-JPG conversion happens inside your browser using the{' '}
            <code className="bg-white px-1 rounded text-xs">Canvas API</code>. Your files are never
            transmitted anywhere. No account, no watermark, no file size limit enforced by a server.
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
            <Link href="/webp-to-png" className="text-sm text-indigo-600 hover:underline">WebP to PNG (keep transparency) →</Link>
            <Link href="/jpg-to-webp" className="text-sm text-indigo-600 hover:underline">JPG to WebP (reduce file size) →</Link>
            <Link href="/avif-to-jpg" className="text-sm text-indigo-600 hover:underline">AVIF to JPG →</Link>
          </div>
        </section>

      </div>
    </>
  );
}
