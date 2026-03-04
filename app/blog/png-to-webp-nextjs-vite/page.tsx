import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Serve WebP Images in Next.js, Vite, and Webpack (2025)',
  description:
    'How to automatically convert PNG and JPG images to WebP in your build pipeline. Covers next/image, vite-imagetools, imagemin-webp, and @squoosh/lib.',
  alternates: { canonical: '/blog/png-to-webp-nextjs-vite' },
};

export default function PngToWebpNextjsVitePage() {
  return (
    <article>
      <div className="flex flex-wrap gap-2 mb-3">
        {['Next.js', 'Vite', 'Webpack', 'Build tools'].map(t => (
          <span key={t} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{t}</span>
        ))}
        <span className="text-xs text-gray-400 ml-auto">6 min read</span>
      </div>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        Serve WebP Images in Next.js, Vite, and Webpack
      </h1>
      <p className="text-lg text-gray-500 mb-10">
        Automatic WebP conversion at build time or request time. No manual conversion needed —
        your build pipeline handles it for you.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Next.js — built-in WebP via next/image</h2>
      <p className="text-gray-600 text-sm mb-4">
        Next.js <code className="bg-gray-100 px-1 rounded">next/image</code> automatically converts images to WebP
        (or AVIF) at request time via its built-in Image Optimization API. No configuration needed for basic usage.
      </p>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-4">
{`// Just use next/image — it auto-converts to WebP in modern browsers
import Image from 'next/image';

export default function Hero() {
  return (
    <Image
      src="/hero.jpg"        // Can be JPG or PNG — served as WebP automatically
      alt="Hero image"
      width={1200}
      height={600}
      priority              // Use for above-the-fold images (improves LCP)
    />
  );
}`}
      </pre>
      <p className="text-gray-600 text-sm mb-4">
        To also enable AVIF (even smaller files), configure <code className="bg-gray-100 px-1 rounded">next.config.ts</code>:
      </p>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-4">
{`// next.config.ts
import type { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],   // Try AVIF first, WebP fallback
    minimumCacheTTL: 31536000,               // Cache for 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default config;`}
      </pre>
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-sm text-indigo-800 mb-8">
        <strong>Note:</strong> next/image optimization requires a Node.js server or a provider with image optimization support
        (Vercel, Cloudflare, etc.). For static exports (<code>output: &apos;export&apos;</code>), use the Vite or sharp approaches below.
      </div>

      <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Vite — vite-imagetools</h2>
      <p className="text-gray-600 text-sm mb-4">
        <a href="https://github.com/JonasKruckenberg/imagetools" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">vite-imagetools</a> transforms images at build time with query parameters.
      </p>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-4">
{`npm install --save-dev vite-imagetools`}
      </pre>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-4">
{`// vite.config.ts
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [imagetools()],
});`}
      </pre>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-6">
{`<!-- In your HTML/JSX — add ?format=webp to convert at build time -->
<picture>
  <source srcset="./hero.jpg?format=webp" type="image/webp">
  <img src="./hero.jpg" alt="Hero">
</picture>

// Or in React/Vue with import
import heroWebp from './hero.jpg?format=webp';
import heroJpg from './hero.jpg';

// Responsive with multiple sizes
import { src, srcset } from './hero.jpg?w=800;1200;1600&format=webp&as=srcset';`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Vite — @imagetools/core with rollup plugin</h2>
      <p className="text-gray-600 text-sm mb-4">
        For generating WebP alongside the original format (for <code className="bg-gray-100 px-1 rounded">&lt;picture&gt;</code> fallbacks):
      </p>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-8">
{`// vite.config.ts — generate both WebP and original
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    imagetools({
      defaultDirectives: (url) => {
        // Auto-generate WebP for all images
        if (/\.(jpg|jpeg|png)$/.test(url.pathname)) {
          return new URLSearchParams({ format: 'webp' });
        }
        return new URLSearchParams();
      },
    }),
  ],
});`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Webpack — imagemin-webp</h2>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-4">
{`npm install --save-dev imagemin-webp imagemin-webpack-plugin`}
      </pre>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-8">
{`// webpack.config.js
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminWebp = require('imagemin-webp');

module.exports = {
  plugins: [
    new ImageminPlugin({
      plugins: [
        imageminWebp({ quality: 85 })
      ],
      test: /\.(jpe?g|png)$/i,
    }),
  ],
};`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Node.js build script with sharp (framework-agnostic)</h2>
      <p className="text-gray-600 text-sm mb-4">
        Works with any framework. Run as a pre-build step or in CI/CD.
      </p>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-4">
{`// scripts/generate-webp.mjs
import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import path from 'path';

const SRC = './public/images';
const DST = './public/images/webp';

await mkdir(DST, { recursive: true });

const files = await readdir(SRC);
await Promise.all(
  files
    .filter(f => /\\.(jpg|jpeg|png)$/i.test(f))
    .map(async (file) => {
      const src = path.join(SRC, file);
      const dst = path.join(DST, file.replace(/\\.[^.]+$/, '.webp'));
      await sharp(src).webp({ quality: 85 }).toFile(dst);
      console.log(\`✓ \${file}\`);
    })
);`}
      </pre>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-4">
{`// package.json
{
  "scripts": {
    "generate-webp": "node scripts/generate-webp.mjs",
    "build": "npm run generate-webp && next build"
  }
}`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Using &lt;picture&gt; for maximum compatibility</h2>
      <p className="text-gray-600 text-sm mb-4">
        Regardless of build tool, serve WebP with a fallback for older browsers:
      </p>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-8">
{`<!-- HTML: serve WebP, fallback to JPG -->
<picture>
  <source srcset="/images/webp/hero.webp" type="image/webp">
  <source srcset="/images/hero.jpg" type="image/jpeg">
  <img src="/images/hero.jpg" alt="Hero" width="1200" height="600">
</picture>

<!-- With AVIF + WebP + JPG fallback chain -->
<picture>
  <source srcset="/images/avif/hero.avif" type="image/avif">
  <source srcset="/images/webp/hero.webp" type="image/webp">
  <img src="/images/hero.jpg" alt="Hero" width="1200" height="600">
</picture>`}
      </pre>

      <div className="mt-10 pt-8 border-t border-gray-100">
        <p className="text-sm text-gray-400 mb-3">Related:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/blog/jpg-to-webp-javascript" className="text-sm text-indigo-600 hover:underline">JavaScript (sharp) guide →</Link>
          <Link href="/blog/png-to-webp-python" className="text-sm text-indigo-600 hover:underline">Python (Pillow) guide →</Link>
          <Link href="/jpg-to-webp" className="text-sm text-indigo-600 hover:underline">Online JPG→WebP converter →</Link>
        </div>
      </div>
    </article>
  );
}
