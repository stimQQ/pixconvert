import type { Metadata } from 'next';
import Converter from '@/components/Converter';

export const metadata: Metadata = {
  title: 'Free Online Image Converter – WebP to JPG, PNG, and More',
  description:
    'Convert WebP, JPG, PNG and GIF images instantly — no uploads, no sign-up, 100% in your browser. Free forever.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are my files uploaded to a server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All conversions happen entirely inside your browser using the Canvas API. Your files never leave your device.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is PixConvert free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely free with no sign-up, no watermarks, and no limits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which formats are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WebP ↔ JPG, WebP ↔ PNG, and GIF → WebP. More formats coming soon.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          Free Image Converter
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8">
          Convert WebP, JPG, PNG and GIF images instantly — no uploads, no sign-up, 100% in your browser.
        </p>
        <Converter
          inputMime="image/webp"
          outputMime="image/jpeg"
          inputLabel="WebP"
          outputLabel="JPG"
          accept="image/webp"
        />
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Drop your files', desc: 'Drag and drop or click to select your images. Multiple files supported.' },
            { step: '2', title: 'Auto-converts instantly', desc: "Conversion starts immediately using your browser's built-in Canvas API. No waiting." },
            { step: '3', title: 'Download results', desc: 'Click download for each file, or download all at once.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="text-center">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                {step}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
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
      </section>
    </>
  );
}
