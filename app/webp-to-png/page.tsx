import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'WebP to PNG Converter – Keep Transparency, Free Online',
  description:
    'Convert WebP to PNG online for free — full alpha transparency preserved, lossless output, no upload. Works on iPhone, Android, Mac and Windows. Unlimited files.',
  alternates: { canonical: '/webp-to-png' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does WebP to PNG keep the transparent background?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PNG fully supports alpha transparency. Every transparent pixel in your WebP file is preserved exactly in the PNG output — no white fill, no black fill, just clean transparency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the PNG output lossless?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PNG uses lossless compression. Every pixel in the output is identical to the source image. There is zero quality loss when converting WebP to PNG.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why convert WebP to PNG instead of JPG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose PNG when your image has a transparent background — logos, icons, UI elements, stickers, and design assets. PNG preserves that transparency perfectly. JPG fills transparent areas with white and uses lossy compression, which degrades quality. PNG is also preferred when you need pixel-perfect lossless output for editing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my PNG file larger than the WebP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PNG uses lossless compression — every pixel is stored exactly as-is, with no data thrown away. WebP\'s compression algorithm is more efficient, so WebP files are typically 25–50% smaller than equivalent PNGs. The trade-off: PNG works everywhere and preserves 100% of the image data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert multiple WebP files to PNG at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Drop multiple WebP files at once and all of them convert simultaneously. When there are two or more files, a "Download all" button appears to grab everything as a zip.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this converter work on iPhone and Android?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The converter works in Safari on iPhone and Chrome on Android. Tap "Choose Files" to select WebP images from your Photos or Files app, then download the PNG.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is WebP to PNG safe? Will my files be uploaded?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely safe. The entire conversion runs inside your browser using the Canvas API. Your images are never sent to any server — not even for a millisecond. What happens in your browser stays in your browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use the PNG in Photoshop, Figma, or Canva?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. PNG is universally supported by every design tool — Adobe Photoshop, Illustrator, Figma, Canva, Sketch, Affinity Designer, and every other creative application. It\'s the standard format for design assets.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert WebP to PNG',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload your WebP file',
      text: 'Drag and drop one or more WebP images onto the converter, or click "Choose Files" to browse. Multiple files are supported.',
    },
    {
      '@type': 'HowToStep',
      name: 'Automatic conversion with transparency preserved',
      text: 'Conversion starts instantly. The Canvas API reads your WebP, preserves every transparent pixel, and outputs a lossless PNG — all inside your browser.',
    },
    {
      '@type': 'HowToStep',
      name: 'Download your PNG',
      text: 'Click Download next to each file. Converting multiple files? Use "Download all" to get a zip in one click.',
    },
  ],
};

export default function WebpToPngPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ── Hero + Converter ── */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          WebP to PNG Converter
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Convert WebP to PNG instantly — free, no upload, runs 100% in your browser.
          <strong className="text-gray-700"> Full alpha transparency preserved.</strong> Lossless output. Unlimited files.
        </p>
        <Converter
          inputMime="image/webp"
          outputMime="image/png"
          inputLabel="WebP"
          outputLabel="PNG"
          accept="image/webp"
        />
      </section>

      <div className="max-w-3xl mx-auto px-4 pb-20 space-y-14">

        {/* ── How to use ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to convert WebP to PNG</h2>
          <ol className="space-y-4">
            {[
              { n: '1', title: 'Drop your WebP file', body: 'Drag and drop one or more .webp files onto the converter above, or click "Choose Files". Multiple files convert simultaneously — great for batch jobs.' },
              { n: '2', title: 'Instant transparent conversion', body: 'No settings needed. The converter uses the browser\'s Canvas API to decode your WebP and re-encode as PNG, preserving every alpha pixel. Your files never leave your device.' },
              { n: '3', title: 'Download your PNG', body: 'Click "Download" next to each result. For multiple files, use "Download all" to grab everything as a single zip.' },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When should you convert WebP to PNG?</h2>
          <p className="text-gray-500 mb-4">
            PNG is the professional standard for images that need to maintain quality across edits and
            support transparent backgrounds. Here are the most common reasons to convert WebP to PNG:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              { icon: '🖼️', title: 'Logos and brand assets', desc: 'PNG keeps the transparent background so logos look clean on any colored surface.' },
              { icon: '🎨', title: 'Design files (Figma, Photoshop)', desc: 'PNG is the universal format for design tools. Import directly with no compatibility issues.' },
              { icon: '📱', title: 'UI icons and app assets', desc: 'Icons need transparency and pixel-perfect edges — PNG delivers both without quality loss.' },
              { icon: '🖨️', title: 'Print-ready artwork', desc: 'Printers and publishers expect PNG or TIFF. WebP is not accepted by most print services.' },
              { icon: '✂️', title: 'Stickers and cut-out images', desc: 'Subject-only images with transparent backgrounds are naturally stored as PNG.' },
              { icon: '📋', title: 'Presentations and documents', desc: 'Word, PowerPoint, Keynote, and Google Slides all accept PNG without any compatibility issues.' },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">WebP vs PNG — key differences</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-indigo-700">WebP</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-gray-700">PNG</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Transparency (alpha)', '✓ Supported', '✓ Supported'],
                  ['Compression type', 'Lossy or lossless', 'Lossless only'],
                  ['File size', '25–50% smaller', 'Larger (lossless)'],
                  ['Quality loss', 'Possible (lossy mode)', '✗ Zero — pixel-perfect'],
                  ['Browser support', 'All modern browsers', 'Every browser ever made'],
                  ['App compatibility', 'Limited (2010–present)', 'Universal (since 1996)'],
                  ['Design tool support', '✗ Often unsupported', '✓ All tools accept PNG'],
                  ['Print services', '✗ Rarely accepted', '✓ Always accepted'],
                  ['Re-editing quality', 'Degrades with lossy', '✓ No generation loss'],
                ].map(([feature, webp, png]) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="px-4 py-2 font-medium text-gray-700 border border-gray-100">{feature}</td>
                    <td className="px-4 py-2 text-center text-indigo-600 border border-gray-100">{webp}</td>
                    <td className="px-4 py-2 text-center text-gray-500 border border-gray-100">{png}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Use WebP on websites for performance. Use PNG when you need to edit, print, or preserve transparency in design tools.
          </p>
        </section>

        {/* ── PNG vs JPG decision guide ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">PNG or JPG — which should you use?</h2>
          <p className="text-gray-500 mb-5">
            After converting your WebP, you might wonder whether to save as PNG or JPG. The answer depends on what your image contains:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border-2 border-indigo-200 bg-indigo-50/40">
              <p className="font-bold text-indigo-700 mb-2">Choose PNG when…</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  'Image has a transparent background',
                  'It\'s a logo, icon, or UI element',
                  'You need lossless / pixel-perfect quality',
                  'It will be used in Photoshop or Figma',
                  'It will be re-edited multiple times',
                  'Text, screenshots, or line art',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold mt-0.5">✓</span>{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/40">
              <p className="font-bold text-gray-700 mb-2">Choose JPG when…</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  'Image is a photograph',
                  'No transparent areas needed',
                  'Smallest possible file size matters',
                  'Sharing via email or social media',
                  'Printing a standard photo',
                  'Uploading to a CMS or website gallery',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-gray-400 font-bold mt-0.5">✓</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Privacy note ── */}
        <section className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
          <h2 className="font-bold text-gray-900 mb-2 text-base">100% private — files never leave your device</h2>
          <p className="text-sm text-gray-600">
            Most online converters upload your images to their servers. PixConvert is different:
            all WebP-to-PNG conversion happens inside your browser using the{' '}
            <code className="bg-white px-1 rounded text-xs">Canvas API</code>. Your files are never
            transmitted anywhere. No account required, no watermark, no file size limit enforced by a server.
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
            <Link href="/webp-to-jpg" className="text-sm text-indigo-600 hover:underline">WebP to JPG (smaller files, no transparency) →</Link>
            <Link href="/png-to-webp" className="text-sm text-indigo-600 hover:underline">PNG to WebP (reduce file size) →</Link>
            <Link href="/avif-to-png" className="text-sm text-indigo-600 hover:underline">AVIF to PNG →</Link>
          </div>
        </section>

      </div>
    </>
  );
}
