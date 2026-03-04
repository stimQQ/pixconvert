import type { Metadata } from 'next';
import Link from 'next/link';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'Convert WebP to PNG with Transparent Background – Free',
  description:
    'Convert WebP to PNG and keep the transparent background. Alpha channel fully preserved. Free, browser-based, no upload needed.',
  alternates: { canonical: '/webp-to-png/transparent' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does the converted PNG keep the transparent background?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PNG fully supports alpha transparency, including semi-transparent pixels. Every transparent and semi-transparent area in your WebP image will be preserved exactly in the PNG output.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my WebP image have a transparent background?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WebP supports alpha transparency just like PNG. Images like logos, icons, stickers, and product shots on e-commerce sites often use transparent backgrounds so they can be placed on any color background.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why should I use PNG instead of JPG for transparent images?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JPG does not support transparency at all. If you convert a transparent WebP to JPG, the transparent areas become solid white. Always use PNG (or WebP) when transparency matters.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does "alpha channel" mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The alpha channel is the fourth color channel (beyond R, G, B) that controls pixel opacity. A value of 0 is fully transparent, 255 is fully opaque. Values in between create semi-transparent effects like drop shadows and soft edges.',
      },
    },
  ],
};

export default function WebpToPngTransparentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-4">
        <p className="text-sm text-gray-400 mb-2">
          <Link href="/webp-to-png" className="hover:text-indigo-600">WebP to PNG</Link>
          <span className="mx-2">›</span>Keep Transparency
        </p>
      </div>

      <section className="max-w-3xl mx-auto px-4 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          WebP to PNG — Keep Transparent Background
        </h1>
        <p className="text-lg text-gray-500 mb-4">
          Converts WebP to PNG while fully preserving alpha transparency.
          Works for logos, icons, stickers, and any image with a transparent background.
        </p>

        {/* Transparency visual explainer */}
        <div className="grid grid-cols-3 gap-4 mb-8 text-center text-sm">
          <div className="rounded-xl border border-gray-100 p-4">
            <div className="w-full h-16 rounded-lg bg-checkerboard mb-2 flex items-center justify-center text-2xl">🖼</div>
            <p className="font-medium text-gray-700">Your WebP</p>
            <p className="text-xs text-gray-400">Has transparency</p>
          </div>
          <div className="flex items-center justify-center text-gray-300 text-2xl">→</div>
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/30 p-4">
            <div className="w-full h-16 rounded-lg bg-checkerboard mb-2 flex items-center justify-center text-2xl">🖼</div>
            <p className="font-medium text-indigo-700">PNG Output</p>
            <p className="text-xs text-indigo-400">Transparency preserved</p>
          </div>
        </div>

        <Converter
          inputMime="image/webp"
          outputMime="image/png"
          inputLabel="WebP"
          outputLabel="PNG"
          accept="image/webp"
        />
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">WebP transparency vs JPG vs PNG</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-100">Format</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700 border border-gray-100">Transparency</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700 border border-gray-100">Semi-transparent</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700 border border-gray-100">File size</th>
              </tr>
            </thead>
            <tbody>
              {[
                { fmt: 'WebP', trans: '✓', semi: '✓', size: 'Small' },
                { fmt: 'PNG', trans: '✓', semi: '✓', size: 'Medium' },
                { fmt: 'JPG', trans: '✗', semi: '✗', size: 'Small' },
                { fmt: 'GIF', trans: '✓ (1-bit only)', semi: '✗', size: 'Large' },
              ].map(({ fmt, trans, semi, size }) => (
                <tr key={fmt} className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-800 border border-gray-100">{fmt}</td>
                  <td className={`px-4 py-3 text-center border border-gray-100 ${trans.startsWith('✓') ? 'text-green-600' : 'text-red-400'}`}>{trans}</td>
                  <td className={`px-4 py-3 text-center border border-gray-100 ${semi === '✓' ? 'text-green-600' : 'text-red-400'}`}>{semi}</td>
                  <td className="px-4 py-3 text-center text-gray-500 border border-gray-100">{size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm">
          For transparent images, PNG is the safest choice — universally supported in every design tool,
          browser, and platform. WebP is more efficient but not all tools accept it.
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
            <Link href="/webp-to-png" className="text-sm text-indigo-600 hover:underline">WebP to PNG converter →</Link>
            <Link href="/png-to-webp/lossless" className="text-sm text-indigo-600 hover:underline">PNG to WebP lossless →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
