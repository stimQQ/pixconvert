import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'AVIF to PNG Converter – Keep Transparency, Free Online',
  description:
    'Convert AVIF to PNG online for free — full alpha transparency preserved, lossless output, no upload. Works in all modern browsers. Unlimited files.',
  alternates: { canonical: '/avif-to-png' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does AVIF to PNG preserve transparency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PNG fully supports alpha transparency, just like AVIF. Every transparent pixel in your AVIF image is preserved exactly in the PNG output — no white fill, clean transparency.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I convert AVIF to PNG instead of JPG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose PNG if your image has a transparent background — logos, icons, UI elements, stickers, design assets. PNG preserves that transparency perfectly. Choose JPG if you only need smaller files and the image has no transparency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the PNG be larger than the AVIF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, almost certainly. AVIF uses extremely efficient compression — often 40–60% smaller than equivalent PNG. PNG uses lossless compression that is less space-efficient. The PNG will be larger but pixel-perfect and fully editable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is PNG output lossless?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PNG is a lossless format — every pixel in the output is identical to what was in the AVIF. No quality is degraded during conversion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use the PNG in Photoshop, Figma, or Canva?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. PNG is universally supported by every design tool — Adobe Photoshop, Illustrator, Figma, Canva, Sketch, and every other creative application. It\'s the standard format for design assets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert multiple AVIF files to PNG at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Drop multiple AVIF files and they all convert simultaneously. A "Download all" button appears when there are two or more files.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are my AVIF files uploaded to a server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All conversion runs inside your browser using the Canvas API. Your images are never sent to any server. There is no file size limit imposed from outside.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert AVIF to PNG',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload your AVIF file',
      text: 'Drag and drop one or more AVIF images onto the converter, or click "Choose Files".',
    },
    {
      '@type': 'HowToStep',
      name: 'Automatic lossless conversion',
      text: 'The Canvas API decodes your AVIF, preserves every transparent pixel, and outputs a lossless PNG — all inside your browser.',
    },
    {
      '@type': 'HowToStep',
      name: 'Download your PNG',
      text: 'Click Download next to each file. Use "Download all" for multiple files.',
    },
  ],
};

export default function AvifToPngPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ── Hero + Converter ── */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          AVIF to PNG Converter
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Convert AVIF to PNG instantly — free, no upload, runs 100% in your browser.
          <strong className="text-gray-700"> Full alpha transparency preserved.</strong> Lossless output. Works in all modern browsers.
        </p>
        <Converter
          inputMime="image/avif"
          outputMime="image/png"
          inputLabel="AVIF"
          outputLabel="PNG"
          accept="image/avif,.avif"
        />
      </section>

      <div className="max-w-3xl mx-auto px-4 pb-20 space-y-14">

        {/* ── How to use ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to convert AVIF to PNG</h2>
          <ol className="space-y-4">
            {[
              { n: '1', title: 'Drop your AVIF file', body: 'Drag and drop one or more .avif files onto the converter above, or click "Choose Files". Multiple files are supported.' },
              { n: '2', title: 'Transparent lossless conversion', body: 'The Canvas API decodes your AVIF and re-encodes as PNG, preserving every alpha pixel. Lossless — no quality loss. Your files never leave your device.' },
              { n: '3', title: 'Download your PNG', body: 'Click "Download" next to each file. For multiple files, use "Download all" to save a zip.' },
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

        {/* ── Why PNG ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why convert AVIF to PNG?</h2>
          <p className="text-gray-500 mb-4">
            AVIF offers cutting-edge compression, but its compatibility story is still incomplete —
            many design tools, image editors, and applications don't support AVIF yet.
            PNG is the universal format for transparent images, supported by every tool in existence.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              { icon: '🎨', title: 'Design tools (Figma, Photoshop)', desc: 'PNG is the standard for all design software. Import directly, edit, and re-export.' },
              { icon: '🖼️', title: 'Logos and brand assets', desc: 'PNG keeps the transparent background so your logo looks clean on any surface.' },
              { icon: '📱', title: 'App icons and UI assets', desc: 'Pixel-perfect edges and transparency — exactly what icons need.' },
              { icon: '🖨️', title: 'Print-ready files', desc: 'Printers and publishers accept PNG. AVIF is not accepted by most print services.' },
              { icon: '📋', title: 'Presentations', desc: 'Word, PowerPoint, Keynote, and Google Slides all work with PNG natively.' },
              { icon: '🌐', title: 'Universal web compatibility', desc: 'PNG works in every browser ever made — zero compatibility risk.' },
            ].map(({ icon, title, desc }) => (
              <li key={title} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100">
                <span className="text-xl mt-0.5">{icon}</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Comparison table ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AVIF vs PNG — key differences</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-indigo-700">AVIF</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-gray-700">PNG</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Transparency', '✓ Supported', '✓ Supported'],
                  ['Compression', 'Lossy or lossless', 'Lossless only'],
                  ['File size', '40–60% smaller than PNG', 'Larger (lossless)'],
                  ['Quality loss', 'Possible (lossy mode)', '✗ Zero — pixel-perfect'],
                  ['Browser support', 'Chrome 85+, Firefox 93+, Safari 16+', 'Every browser ever made'],
                  ['App / tool support', 'Very limited', '✓ Universal — all tools'],
                  ['Print services', '✗ Not accepted', '✓ Always accepted'],
                  ['Re-editing', 'Lossy degradation possible', '✓ No generation loss'],
                ].map(([feature, avif, png]) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="px-4 py-2 font-medium text-gray-700 border border-gray-100">{feature}</td>
                    <td className="px-4 py-2 text-center text-indigo-600 border border-gray-100">{avif}</td>
                    <td className="px-4 py-2 text-center text-gray-500 border border-gray-100">{png}</td>
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
            All AVIF-to-PNG conversion happens inside your browser using the{' '}
            <code className="bg-white px-1 rounded text-xs">Canvas API</code>. Your images are never transmitted anywhere. No account, no watermark, no server-imposed file size limit.
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
            <Link href="/avif-to-jpg" className="text-sm text-indigo-600 hover:underline">AVIF to JPG (smaller file, no transparency) →</Link>
            <Link href="/avif-to-webp" className="text-sm text-indigo-600 hover:underline">AVIF to WebP →</Link>
            <Link href="/webp-to-png" className="text-sm text-indigo-600 hover:underline">WebP to PNG →</Link>
          </div>
        </section>

      </div>
    </>
  );
}
