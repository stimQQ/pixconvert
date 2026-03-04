import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'PNG to WebP Converter – Smaller Files, Keep Transparency, Free',
  description:
    'Convert PNG to WebP online for free. Full alpha transparency preserved. WebP lossless is 26% smaller than PNG. No upload — runs in your browser. Unlimited files.',
  alternates: { canonical: '/png-to-webp' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does PNG to WebP preserve the transparent background?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WebP supports full alpha transparency. Every transparent pixel in your PNG is preserved exactly in the WebP output. Logos, icons, and design assets with transparent backgrounds convert perfectly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much smaller is WebP compared to PNG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WebP lossless is typically 26% smaller than equivalent PNG files. With lossy WebP encoding, photographic PNG files can compress 60–80% smaller. For logos and icons with limited colors, lossless WebP is the best option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is PNG to WebP good for logos and icons?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WebP supports lossless compression with full alpha transparency — making it ideal for logos, icons, and UI assets where you need sharp edges and transparent backgrounds. WebP lossless is smaller than PNG while keeping pixel-perfect quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will all browsers display my WebP images?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Over 97% of users can view WebP natively. Chrome (2010+), Firefox (2019+), Safari (macOS 11+ / iOS 14+), and Edge all support WebP. For the remaining users, use a <picture> element with a PNG fallback.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use lossless or lossy WebP for PNG files?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For logos, icons, text, and images with sharp edges or flat colors, use lossless WebP to preserve quality. For photographic PNGs (screenshots with complex backgrounds, product photos saved as PNG), lossy WebP at quality 90+ gives much smaller files with near-identical quality. This converter uses lossy mode at quality 92.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert multiple PNG files to WebP at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Drop multiple PNG files at once and all convert simultaneously. When there are two or more files, a "Download all" button appears to grab everything as a zip.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are my PNG files uploaded to a server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All conversion runs inside your browser using the Canvas API. Your images are never transmitted to any server — not even for a moment. This also means there is no file size limit imposed from outside.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert PNG to WebP',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload your PNG file',
      text: 'Drag and drop one or more PNG images onto the converter, or click "Choose Files". Multiple files are supported.',
    },
    {
      '@type': 'HowToStep',
      name: 'Automatic conversion with transparency preserved',
      text: 'The Canvas API reads your PNG, preserves every transparent pixel, and outputs a WebP — all inside your browser in under a second.',
    },
    {
      '@type': 'HowToStep',
      name: 'Download your WebP',
      text: 'Click Download next to each file. Use "Download all" to get a zip when converting multiple files.',
    },
  ],
};

export default function PngToWebpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ── Hero + Converter ── */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          PNG to WebP Converter
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Convert PNG to WebP instantly — free, no upload, runs 100% in your browser.
          <strong className="text-gray-700"> Full alpha transparency preserved.</strong>{' '}
          WebP lossless is 26% smaller than PNG.
        </p>
        <Converter
          inputMime="image/png"
          outputMime="image/webp"
          inputLabel="PNG"
          outputLabel="WebP"
          accept="image/png,.png"
        />
      </section>

      <div className="max-w-3xl mx-auto px-4 pb-20 space-y-14">

        {/* ── How to use ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to convert PNG to WebP</h2>
          <ol className="space-y-4">
            {[
              { n: '1', title: 'Drop your PNG file', body: 'Drag and drop one or more .png files onto the converter above, or click "Choose Files". Multiple files are supported and all convert at the same time.' },
              { n: '2', title: 'Instant browser conversion', body: 'The Canvas API decodes your PNG and re-encodes it as WebP, preserving every transparent pixel. No upload, no server wait — everything runs locally in under a second.' },
              { n: '3', title: 'Download your WebP', body: 'Click "Download" next to each result. For multiple files, click "Download all" to save a zip.' },
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

        {/* ── Why PNG to WebP ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why convert PNG to WebP?</h2>
          <p className="text-gray-500 mb-4">
            PNG is the standard format for transparent images, but its lossless compression results in
            larger file sizes — especially for complex artwork and high-resolution assets. WebP offers a
            significant upgrade: smaller files with the same quality and the same transparency support.
          </p>
          <p className="text-gray-500 mb-6">
            For web use, converting PNG to WebP can cut your image payload by 26–80% depending on the
            content type. This translates directly to faster page loads and better{' '}
            <strong className="text-gray-700">Core Web Vitals</strong> scores — a key factor in Google rankings.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { stat: '26%', label: 'Smaller (lossless)', desc: 'WebP lossless vs equivalent PNG' },
              { stat: '60–80%', label: 'Smaller (lossy)', desc: 'For photographic PNG content' },
              { stat: '97%+', label: 'Browser support', desc: 'Chrome, Firefox, Safari, Edge' },
            ].map(({ stat, label, desc }) => (
              <div key={label} className="p-4 rounded-xl border border-gray-100 text-center">
                <p className="text-3xl font-extrabold text-indigo-600 mb-1">{stat}</p>
                <p className="font-semibold text-gray-900 text-sm">{label}</p>
                <p className="text-xs text-gray-500 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Use cases ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Best use cases for PNG to WebP</h2>
          <ul className="space-y-3">
            {[
              { icon: '🏷️', title: 'Website logos', body: 'Serve your logo as WebP to reduce bandwidth. Transparent background is preserved — logo still looks sharp on any color background.' },
              { icon: '🖼️', title: 'UI icons and illustrations', body: 'Icon sets and SVG-converted PNGs compress well in WebP lossless mode while maintaining crisp edges.' },
              { icon: '🛒', title: 'E-commerce product images', body: 'Product photos on white or transparent backgrounds compress significantly as WebP, improving page speed scores.' },
              { icon: '📊', title: 'Infographics and charts', body: 'Charts with transparent backgrounds and flat colors see 30–50% size savings in WebP lossless mode.' },
              { icon: '🎮', title: 'Game sprites and assets', body: 'WebP supports animation (animated WebP) and transparency, making it a strong choice for web-based game assets.' },
            ].map(({ icon, title, body }) => (
              <li key={title} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100">
                <span className="text-2xl mt-0.5 flex-shrink-0">{icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{title}</p>
                  <p className="text-xs text-gray-500 mt-1">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Comparison table ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">PNG vs WebP — key differences</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-gray-700">PNG</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-indigo-700">WebP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Transparency (alpha)', '✓ Supported', '✓ Supported'],
                  ['Compression type', 'Lossless only', 'Lossy or lossless'],
                  ['File size (lossless)', 'Baseline', '~26% smaller'],
                  ['File size (lossy vs PNG)', '—', '60–80% smaller for photos'],
                  ['Browser support', 'Universal (100%)', '97%+ modern browsers'],
                  ['Animation support', '✗ No (use GIF/APNG)', '✓ Animated WebP'],
                  ['Design tool support', '✓ All tools', 'Web tools only'],
                  ['Core Web Vitals', 'Larger payload', '✓ Smaller = better LCP'],
                ].map(([feature, png, webp]) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="px-4 py-2 font-medium text-gray-700 border border-gray-100">{feature}</td>
                    <td className="px-4 py-2 text-center text-gray-500 border border-gray-100">{png}</td>
                    <td className="px-4 py-2 text-center text-indigo-600 border border-gray-100">{webp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Keep your PNG masters for editing. Serve WebP on the web. Use a{' '}
            <code className="bg-gray-100 px-1 rounded">{'<picture>'}</code> element with a PNG fallback for older browsers.
          </p>
        </section>

        {/* ── Privacy note ── */}
        <section className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
          <h2 className="font-bold text-gray-900 mb-2 text-base">100% private — files never leave your device</h2>
          <p className="text-sm text-gray-600">
            All PNG-to-WebP conversion happens inside your browser using the{' '}
            <code className="bg-white px-1 rounded text-xs">Canvas API</code>. Your images are never
            transmitted to any server. No account required, no watermark, no artificial file size limit.
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
            <Link href="/jpg-to-webp" className="text-sm text-indigo-600 hover:underline">JPG to WebP (no transparency) →</Link>
            <Link href="/gif-to-webp" className="text-sm text-indigo-600 hover:underline">GIF to WebP →</Link>
            <Link href="/webp-to-png" className="text-sm text-indigo-600 hover:underline">WebP to PNG (convert back) →</Link>
          </div>
        </section>

      </div>
    </>
  );
}
