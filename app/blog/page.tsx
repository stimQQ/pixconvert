import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WebP & Image Conversion Guides for Developers',
  description:
    'Tutorials on converting WebP, PNG, and JPG images using JavaScript, Python, CLI tools, Next.js, and Vite. Code examples included.',
  alternates: { canonical: '/blog' },
};

const posts = [
  {
    slug: 'jpg-to-webp-javascript',
    title: 'Convert JPG/PNG to WebP in JavaScript (Browser + Node.js)',
    desc: 'Canvas API, sharp, and imagemin — with full code examples for both browser and server.',
    tags: ['JavaScript', 'Node.js'],
    readTime: '6 min',
  },
  {
    slug: 'png-to-webp-python',
    title: 'Convert PNG and JPG to WebP with Python (Pillow)',
    desc: 'Single files, batch processing, and lossless mode using Pillow. No dependencies beyond pip.',
    tags: ['Python', 'Pillow'],
    readTime: '5 min',
  },
  {
    slug: 'convert-webp-command-line',
    title: 'Convert WebP Images via Command Line (cwebp / ImageMagick / ffmpeg)',
    desc: 'Reference guide for cwebp, dwebp, mogrify, and ffmpeg. Includes batch one-liners for macOS, Linux, and Windows.',
    tags: ['CLI', 'ImageMagick', 'cwebp'],
    readTime: '7 min',
  },
  {
    slug: 'animated-gif-to-webp-guide',
    title: 'Convert Animated GIF to WebP: Complete Guide',
    desc: 'How to convert animated GIFs to animated WebP using ffmpeg and gif2webp. Includes size comparison data.',
    tags: ['Animation', 'GIF', 'ffmpeg'],
    readTime: '8 min',
  },
  {
    slug: 'png-to-webp-nextjs-vite',
    title: 'Serve WebP Images in Next.js, Vite, and Webpack',
    desc: 'Automatic WebP conversion in your build pipeline. next/image, vite-imagetools, and imagemin-webp configurations.',
    tags: ['Next.js', 'Vite', 'Webpack'],
    readTime: '6 min',
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Developer Guides</h1>
      <p className="text-gray-500 mb-10">
        Code-first tutorials for converting images programmatically.
      </p>
      <div className="space-y-6">
        {posts.map(({ slug, title, desc, tags, readTime }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="block rounded-xl border border-gray-100 p-6 hover:border-indigo-200 hover:bg-indigo-50/20 transition-all group"
          >
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map(t => (
                <span key={t} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{t}</span>
              ))}
              <span className="text-xs text-gray-400 ml-auto">{readTime} read</span>
            </div>
            <h2 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-1">{title}</h2>
            <p className="text-sm text-gray-500">{desc}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
