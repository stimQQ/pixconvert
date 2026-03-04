import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'JPG to WebP Converter – Reduce File Size 25–35%, Free Online',
  description:
    'Convert JPG/JPEG images to WebP online for free. Reduce file sizes by 25–35% with no visible quality loss. No upload, runs in your browser. Improve Core Web Vitals instantly.',
  alternates: { canonical: '/jpg-to-webp' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much smaller will my WebP files be compared to JPG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WebP typically produces files 25–35% smaller than equivalent JPG files at the same visual quality. For photographic content, some images compress even more. Results vary by image content — high-detail photos see slightly less savings than simple compositions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is WebP supported by all browsers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WebP is supported by all modern browsers: Chrome (since 2010), Firefox (since 2019), Safari (since macOS 11 / iOS 14), and Edge (since 2018). Over 97% of users globally can view WebP natively. For the remaining 3%, use an HTML <picture> element with a JPG fallback.',
      },
    },
    {
      '@type': 'Question',
      name: 'What quality setting does the converter use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use quality 92% (out of 100), which is visually indistinguishable from the original for almost all images. This balances file size reduction with output quality. Since your source JPG was already lossy, avoid re-encoding multiple times — always convert from the best-quality source.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will JPG to WebP improve my Google PageSpeed score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Google PageSpeed Insights and Lighthouse actively recommend serving images in WebP format. Smaller image payloads directly improve Largest Contentful Paint (LCP) and overall page load times — two critical Core Web Vitals metrics.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I use WebP images in HTML?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the <picture> element for maximum compatibility: <picture><source srcset="image.webp" type="image/webp"><img src="image.jpg" alt="..."></picture>. Modern browsers load the WebP; older browsers fall back to JPG automatically. In Next.js, the built-in <Image> component handles WebP conversion automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert multiple JPG files to WebP at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Drop multiple JPG files and they all convert simultaneously. When there are two or more files, a "Download all" button appears to grab everything as a zip.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are my files uploaded to a server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All conversion happens inside your browser using the Canvas API. Your images never leave your device. There is no server, no account required, and no file size limit imposed from outside.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does JPG to WebP work on mobile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The converter works in Chrome on Android and Safari on iPhone (iOS 14+). Select your JPG from your Photos app, wait for the instant conversion, and download the WebP.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert JPG to WebP',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload your JPG file',
      text: 'Drag and drop one or more JPG/JPEG images onto the converter, or click "Choose Files". Multiple files are converted simultaneously.',
    },
    {
      '@type': 'HowToStep',
      name: 'Automatic conversion at quality 92',
      text: 'The browser\'s Canvas API re-encodes your JPG as WebP at quality 92 — visually identical but 25–35% smaller. No upload, no waiting.',
    },
    {
      '@type': 'HowToStep',
      name: 'Download your WebP',
      text: 'Click Download next to each file. Use "Download all" to get a zip when converting multiple files.',
    },
  ],
};

export default function JpgToWebpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ── Hero + Converter ── */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          JPG to WebP Converter
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Convert JPG to WebP instantly — free, no upload, runs 100% in your browser.
          Reduce file sizes by <strong className="text-gray-700">25–35%</strong> with no visible quality loss.
          Improve your Core Web Vitals in seconds.
        </p>
        <Converter
          inputMime="image/jpeg"
          outputMime="image/webp"
          inputLabel="JPG"
          outputLabel="WebP"
          accept="image/jpeg,image/jpg,.jpg,.jpeg"
        />
      </section>

      <div className="max-w-3xl mx-auto px-4 pb-20 space-y-14">

        {/* ── How to use ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to convert JPG to WebP</h2>
          <ol className="space-y-4">
            {[
              { n: '1', title: 'Drop your JPG or JPEG file', body: 'Drag and drop one or more .jpg or .jpeg files onto the converter, or click "Choose Files". Batch conversion is supported — all files convert at the same time.' },
              { n: '2', title: 'Instant browser conversion', body: 'The converter uses the Canvas API to re-encode your JPG as WebP at quality 92. No settings needed. Your files are never uploaded anywhere — everything runs in-browser.' },
              { n: '3', title: 'Download your WebP', body: 'Click "Download" next to each file. For multiple files, use "Download all" to grab everything in one zip.' },
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

        {/* ── Why WebP ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why convert JPG to WebP?</h2>
          <p className="text-gray-500 mb-4">
            WebP is Google's open image format designed specifically for the web. It produces files
            <strong className="text-gray-700"> 25–35% smaller than JPG</strong> at the same visual quality —
            meaning faster page loads, less bandwidth, and better user experience, without any visible difference.
          </p>
          <p className="text-gray-500 mb-6">
            Google officially recommends WebP in their{' '}
            <strong className="text-gray-700">PageSpeed Insights</strong> and{' '}
            <strong className="text-gray-700">Lighthouse</strong> reports. If your images are still in JPG,
            switching to WebP is one of the easiest wins for improving your site's performance score.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { stat: '25–35%', label: 'Smaller file size', desc: 'vs equivalent JPG at the same quality' },
              { stat: '97%+', label: 'Browser support', desc: 'Chrome, Firefox, Safari, Edge all support WebP' },
              { stat: '~0ms', label: 'Conversion time', desc: 'Runs in your browser — no server wait time' },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Using WebP images in your website</h2>
          <p className="text-gray-500 mb-5">
            Once you have your WebP files, here's how to use them in common web frameworks:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900 text-sm mb-2">HTML — with JPG fallback for older browsers</p>
              <pre className="text-xs bg-gray-50 rounded-lg p-3 overflow-x-auto text-gray-700">{`<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>`}</pre>
            </div>
            <div className="p-4 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900 text-sm mb-2">Next.js — automatic WebP conversion via Image component</p>
              <pre className="text-xs bg-gray-50 rounded-lg p-3 overflow-x-auto text-gray-700">{`import Image from 'next/image';

// Next.js automatically serves WebP when supported
<Image src="/photo.jpg" alt="Description" width={800} height={600} />`}</pre>
            </div>
            <div className="p-4 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900 text-sm mb-2">CSS background images</p>
              <pre className="text-xs bg-gray-50 rounded-lg p-3 overflow-x-auto text-gray-700">{`/* Serve WebP via CSS; no fallback needed for 97%+ of users */
.hero {
  background-image: url('/hero.webp');
}`}</pre>
            </div>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">JPG vs WebP — key differences</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-gray-700">JPG</th>
                  <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-indigo-700">WebP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['File size', 'Baseline', '25–35% smaller'],
                  ['Compression type', 'Lossy only', 'Lossy or lossless'],
                  ['Transparency', '✗ Not supported', '✓ Alpha channel'],
                  ['Browser support', 'Universal (100%)', '97%+ modern browsers'],
                  ['App compatibility', 'Universal', 'Web & modern apps only'],
                  ['Animation support', '✗ No', '✓ Animated WebP'],
                  ['Core Web Vitals impact', 'Baseline', '✓ LCP improvement'],
                  ['Google PageSpeed rec.', 'Use as fallback', '✓ Recommended format'],
                ].map(([feature, jpg, webp]) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="px-4 py-2 font-medium text-gray-700 border border-gray-100">{feature}</td>
                    <td className="px-4 py-2 text-center text-gray-500 border border-gray-100">{jpg}</td>
                    <td className="px-4 py-2 text-center text-indigo-600 border border-gray-100">{webp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Use WebP for all web images. Keep the original JPG as a fallback for older browsers and non-web uses.
          </p>
        </section>

        {/* ── Privacy note ── */}
        <section className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
          <h2 className="font-bold text-gray-900 mb-2 text-base">100% private — files never leave your device</h2>
          <p className="text-sm text-gray-600">
            All JPG-to-WebP conversion happens inside your browser using the{' '}
            <code className="bg-white px-1 rounded text-xs">Canvas API</code>. Your images are never
            transmitted to any server. No account, no watermark, no file size limit.
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
            <Link href="/gif-to-webp" className="text-sm text-indigo-600 hover:underline">GIF to WebP →</Link>
            <Link href="/webp-to-jpg" className="text-sm text-indigo-600 hover:underline">WebP to JPG (convert back) →</Link>
          </div>
        </section>

      </div>
    </>
  );
}
