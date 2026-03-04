import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'Convert JPG to WebP Without Losing Quality – Free',
  description:
    'Convert JPG to WebP at maximum quality — we use 92% quality by default so your images look identical while saving 25-35% on file size. No upload.',
  alternates: { canonical: '/jpg-to-webp/quality' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there quality loss when converting JPG to WebP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At quality 80+ the difference is imperceptible to the human eye. We use 92% by default, which produces WebP files visually identical to the source JPG but 25-35% smaller. The only real quality loss happens because JPG was already lossy — converting to WebP is a re-encoding of already-compressed data.',
      },
    },
    {
      '@type': 'Question',
      name: 'What quality setting gives the best results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most uses, 80-90% quality is the sweet spot: much smaller files with no visible difference. For professional or archival use where you want maximum fidelity, use 90-95%. Avoid converting from a low-quality JPG source — garbage in, garbage out.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my WebP file larger than the original JPG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This can happen with already highly-compressed JPGs (quality < 60). The original JPG may have extensive artifacts that WebP at higher quality preserves more cleanly, resulting in a slightly larger file. Try converting from the original uncompressed source if available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I convert JPG to WebP for my website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Google\'s PageSpeed Insights specifically recommends serving images in WebP. The typical 25-35% size reduction directly improves Largest Contentful Paint (LCP) scores, which affects SEO rankings.',
      },
    },
  ],
};

export default function JpgToWebpQualityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-4">
        <p className="text-sm text-gray-400 mb-2">
          <Link href="/jpg-to-webp" className="hover:text-indigo-600">JPG to WebP</Link>
          <span className="mx-2">›</span>Without Losing Quality
        </p>
      </div>

      <section className="max-w-3xl mx-auto px-4 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Convert JPG to WebP Without Losing Quality
        </h1>
        <p className="text-lg text-gray-500 mb-4">
          We use quality 92% by default — visually identical to the source, 25-35% smaller.
          Compare the file sizes in the result cards after conversion.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-indigo-50 text-indigo-700 text-sm px-3 py-1.5 rounded-full font-medium">Quality 92% default</span>
          <span className="bg-green-50 text-green-700 text-sm px-3 py-1.5 rounded-full font-medium">~25-35% smaller</span>
          <span className="bg-gray-50 text-gray-700 text-sm px-3 py-1.5 rounded-full font-medium">No perceptible difference</span>
        </div>
        <Converter
          inputMime="image/jpeg"
          outputMime="image/webp"
          inputLabel="JPG"
          outputLabel="WebP"
          accept="image/jpeg,image/jpg,.jpg,.jpeg"
        />
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding WebP quality settings</h2>
        <p className="text-gray-500 text-sm mb-6">
          WebP quality is measured 0–100. Unlike JPG, WebP is more efficient at each quality level —
          a WebP at quality 80 typically looks better than a JPG at quality 80, and is much smaller.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-100">Quality</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-100">Size vs JPG</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-100">Visual quality</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-100">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                { q: '95-100', size: '~10-15% smaller', vis: 'Lossless / near-lossless', use: 'Professional, archival' },
                { q: '90-95', size: '~20-25% smaller', vis: 'Excellent', use: 'High-quality web' },
                { q: '80-90 ⭐', size: '~25-35% smaller', vis: 'Very good, imperceptible loss', use: 'Most websites (recommended)' },
                { q: '60-80', size: '~40-55% smaller', vis: 'Good, slight artifacts', use: 'Thumbnails, social media' },
                { q: '< 60', size: '~60%+ smaller', vis: 'Noticeable artifacts', use: 'Low-priority background images' },
              ].map(({ q, size, vis, use }) => (
                <tr key={q} className="border-b border-gray-100">
                  <td className="px-4 py-3 font-mono text-gray-800 border border-gray-100">{q}</td>
                  <td className="px-4 py-3 text-green-700 border border-gray-100">{size}</td>
                  <td className="px-4 py-3 text-gray-600 border border-gray-100">{vis}</td>
                  <td className="px-4 py-3 text-gray-500 border border-gray-100">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preserve quality in your build pipeline</h2>
        <p className="text-gray-500 text-sm mb-4">
          For automated conversion at the same quality setting, use <code className="bg-gray-100 px-1 rounded">cwebp</code>:
        </p>
        <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-4 overflow-x-auto mb-4">
{`# Single file at quality 92
cwebp -q 92 input.jpg -o output.webp

# Batch (Linux/macOS)
for f in *.jpg; do cwebp -q 92 "$f" -o "\${f%.jpg}.webp"; done`}
        </pre>
        <p className="text-gray-500 text-sm">
          See the full CLI guide → <Link href="/blog/convert-webp-command-line" className="text-indigo-600 hover:underline">Convert images via command line</Link>
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((item) => (
            <div key={item.name}>
              <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400 mb-3">Related:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/jpg-to-webp" className="text-sm text-indigo-600 hover:underline">JPG to WebP converter →</Link>
            <Link href="/blog/jpg-to-webp-javascript" className="text-sm text-indigo-600 hover:underline">JPG to WebP in JavaScript →</Link>
            <Link href="/blog/convert-webp-command-line" className="text-sm text-indigo-600 hover:underline">CLI conversion guide →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
