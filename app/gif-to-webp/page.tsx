import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'GIF to WebP Converter – 64% Smaller Files, Free Online',
  description:
    'Convert GIF images to WebP online for free. 64% smaller than GIF, 16 million colors, full transparency support. No upload — runs in your browser. Instant conversion.',
  alternates: { canonical: '/gif-to-webp' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does this converter support animated GIFs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This browser-based converter processes the first frame of animated GIFs and outputs a static WebP. Full animated GIF to animated WebP conversion requires server-side processing using tools like ffmpeg or libwebp, because the browser Canvas API only draws a single frame at a time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much smaller is WebP compared to GIF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WebP images are typically 64% smaller than equivalent GIF images for the same visual quality. GIF is limited to 256 colors and uses LZW compression from 1987 — WebP uses modern algorithms that are dramatically more efficient.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why convert GIF to WebP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WebP is superior to GIF in every technical dimension: 64% smaller files, 16 million colors (vs GIF\'s 256), full alpha transparency (vs GIF\'s 1-bit on/off), and both lossy and lossless compression modes. For web use, replacing GIFs with WebP dramatically reduces page load times.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is WebP supported in all browsers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WebP is supported by Chrome (2010+), Firefox (2019+), Safari (macOS 11+ / iOS 14+), and Edge. Over 97% of users globally can view WebP. For the remaining 3%, use a <picture> element with a GIF fallback.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use WebP as a GIF replacement on my website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For static images, absolutely — WebP is a strict upgrade. For animated content, animated WebP works in Chrome and Edge (and Safari 16+), but you\'ll need a fallback for older browsers. Most web frameworks support this via <picture><source type="image/webp"><img src="fallback.gif"></picture>.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are animated WebP files?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Animated WebP is the WebP equivalent of animated GIF. It stores multiple frames with frame timing, just like GIF, but with far better compression and full color support. Animated WebP files are typically 64-80% smaller than the equivalent animated GIF. Browser support: Chrome, Edge, Firefox (96+), and Safari (16+).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I convert an animated GIF to animated WebP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Browser-based tools can only convert the first frame. For full animated WebP, use: (1) ffmpeg: "ffmpeg -i input.gif output.webp", (2) Google\'s gif2webp command-line tool from the libwebp package, or (3) ImageMagick: "convert input.gif output.webp".',
      },
    },
    {
      '@type': 'Question',
      name: 'Are my GIF files uploaded to a server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All conversion happens inside your browser using the Canvas API. Your images are never sent to any server. There is no account required and no file size limit imposed from outside.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert GIF to WebP',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload your GIF file',
      text: 'Drag and drop one or more GIF images onto the converter, or click "Choose Files". Multiple files convert simultaneously.',
    },
    {
      '@type': 'HowToStep',
      name: 'Automatic conversion',
      text: 'The first frame of each GIF is instantly converted to WebP inside your browser. No upload, no settings needed.',
    },
    {
      '@type': 'HowToStep',
      name: 'Download your WebP',
      text: 'Click Download next to each file. Use "Download all" for a zip when converting multiple files.',
    },
  ],
};

export default function GifToWebpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ── Hero + Converter ── */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          GIF to WebP Converter
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Convert GIF to WebP instantly — free, no upload, runs 100% in your browser.
          WebP is <strong className="text-gray-700">64% smaller than GIF</strong> with full color and transparency support.
        </p>

        {/* Animated GIF note */}
        <div className="inline-flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800 text-left max-w-lg mx-auto mb-8">
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            <strong>Static conversion:</strong> This tool converts the first frame of animated GIFs to static WebP.
            For animated GIF → animated WebP, use <code className="bg-amber-100 px-1 rounded text-xs">ffmpeg</code> or <code className="bg-amber-100 px-1 rounded text-xs">gif2webp</code> — see the guide below.
          </span>
        </div>

        <Converter
          inputMime="image/gif"
          outputMime="image/webp"
          inputLabel="GIF"
          outputLabel="WebP"
          accept="image/gif,.gif"
        />
      </section>

      <div className="max-w-3xl mx-auto px-4 pb-20 space-y-14">

        {/* ── How to use ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to convert GIF to WebP</h2>
          <ol className="space-y-4">
            {[
              { n: '1', title: 'Drop your GIF file', body: 'Drag and drop one or more .gif files onto the converter above, or click "Choose Files". Multiple files are supported.' },
              { n: '2', title: 'Instant browser conversion', body: 'The Canvas API renders the first frame of your GIF and outputs a static WebP. No upload needed — everything runs locally in under a second.' },
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

        {/* ── GIF vs WebP ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">GIF vs WebP — why WebP wins</h2>
          <p className="text-gray-500 mb-6">
            GIF was invented in 1987 — 35+ years ago. Despite being ancient technology, it's still widely
            used for animations and simple graphics. WebP, launched by Google in 2010, is its modern
            replacement and is superior in every measurable way.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="font-semibold text-gray-700 mb-3">GIF limitations</p>
              <ul className="space-y-2 text-sm text-gray-500">
                {[
                  '256 color limit (creates banding)',
                  '1-bit transparency (on/off only)',
                  'LZW compression from 1987',
                  'Large file sizes for complex images',
                  'No partial transparency / anti-aliasing',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-xl p-5">
              <p className="font-semibold text-indigo-700 mb-3">WebP advantages</p>
              <ul className="space-y-2 text-sm text-indigo-700">
                {[
                  'Full 24-bit color (16 million colors)',
                  'Full alpha transparency channel',
                  'Modern compression (64% smaller)',
                  'Both lossy and lossless modes',
                  'Animated WebP support (like animated GIF)',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0">✓</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { stat: '64%', label: 'Smaller than GIF', desc: 'Average file size reduction' },
              { stat: '16M', label: 'Colors', desc: 'vs GIF\'s 256-color limit' },
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

        {/* ── Animated WebP guide ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Converting animated GIF to animated WebP</h2>
          <p className="text-gray-500 mb-5">
            Browser-based tools can only convert the first frame of an animated GIF. For full animated
            WebP output — preserving all frames and frame timing — use one of these command-line tools:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900 text-sm mb-2">Option 1 — ffmpeg (most common)</p>
              <pre className="text-xs bg-gray-50 rounded-lg p-3 overflow-x-auto text-gray-700">{`# Install ffmpeg (macOS: brew install ffmpeg)
ffmpeg -i input.gif output.webp

# With quality control (0–100, default ~75)
ffmpeg -i input.gif -quality 90 output.webp`}</pre>
            </div>
            <div className="p-4 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900 text-sm mb-2">Option 2 — gif2webp from libwebp (Google's official tool)</p>
              <pre className="text-xs bg-gray-50 rounded-lg p-3 overflow-x-auto text-gray-700">{`# Install: brew install webp (macOS) or apt install webp (Linux)
gif2webp input.gif -o output.webp

# Lossless mode
gif2webp -lossless input.gif -o output.webp`}</pre>
            </div>
            <div className="p-4 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900 text-sm mb-2">Option 3 — ImageMagick</p>
              <pre className="text-xs bg-gray-50 rounded-lg p-3 overflow-x-auto text-gray-700">{`# Install: brew install imagemagick
convert input.gif output.webp

# Batch convert all GIFs in a folder
for f in *.gif; do convert "$f" "\${f%.gif}.webp"; done`}</pre>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Animated WebP is supported in Chrome, Edge, Firefox 96+, and Safari 16+. Use a{' '}
            <code className="bg-gray-100 px-1 rounded text-xs">{'<picture>'}</code> element with a GIF fallback
            for older browsers.
          </p>
        </section>

        {/* ── Comparison table ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">GIF vs WebP — full comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-gray-500">GIF</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-indigo-700">WebP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Colors', '256 maximum', '16 million (24-bit)'],
                  ['File size', 'Baseline', '~64% smaller'],
                  ['Transparency', '1-bit (on/off only)', 'Full alpha channel'],
                  ['Animation', '✓ Supported', '✓ Animated WebP'],
                  ['Compression', 'LZW (1987)', 'Modern lossy/lossless'],
                  ['Browser support', 'Universal (100%)', '97%+ modern browsers'],
                  ['Introduced', '1987', '2010 by Google'],
                  ['Best for', 'Legacy animations', 'All modern web images'],
                ].map(([feature, gif, webp]) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="px-4 py-2 font-medium text-gray-700 border border-gray-100">{feature}</td>
                    <td className="px-4 py-2 text-center text-gray-500 border border-gray-100">{gif}</td>
                    <td className="px-4 py-2 text-center text-indigo-600 border border-gray-100">{webp}</td>
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
            All GIF-to-WebP conversion happens inside your browser using the{' '}
            <code className="bg-white px-1 rounded text-xs">Canvas API</code>. Your files are never
            transmitted to any server. No account required, no watermark, no file size limit.
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
            <Link href="/png-to-webp" className="text-sm text-indigo-600 hover:underline">PNG to WebP (with transparency) →</Link>
            <Link href="/jpg-to-webp" className="text-sm text-indigo-600 hover:underline">JPG to WebP →</Link>
            <Link href="/webp-to-png" className="text-sm text-indigo-600 hover:underline">WebP to PNG →</Link>
          </div>
        </section>

      </div>
    </>
  );
}
