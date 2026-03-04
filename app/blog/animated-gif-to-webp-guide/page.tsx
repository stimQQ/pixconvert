import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Convert Animated GIF to WebP: Complete Guide (ffmpeg, gif2webp, Node.js)',
  description:
    'How to convert animated GIFs to animated WebP using ffmpeg and gif2webp. Includes file size comparison, browser support, and when to use each approach.',
  alternates: { canonical: '/blog/animated-gif-to-webp-guide' },
};

export default function AnimatedGifToWebpGuidePage() {
  return (
    <article>
      <div className="flex flex-wrap gap-2 mb-3">
        {['Animation', 'GIF', 'ffmpeg', 'gif2webp'].map(t => (
          <span key={t} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{t}</span>
        ))}
        <span className="text-xs text-gray-400 ml-auto">8 min read</span>
      </div>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        Convert Animated GIF to WebP: Complete Guide
      </h1>
      <p className="text-lg text-gray-500 mb-6">
        Animated WebP files are typically 64% smaller than GIF at the same visual quality.
        Here&apos;s how to convert using <code className="bg-gray-100 px-1 rounded text-sm">ffmpeg</code>, <code className="bg-gray-100 px-1 rounded text-sm">gif2webp</code>, and Node.js sharp.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-8">
        <strong>Browser converter limitation:</strong> Our <Link href="/gif-to-webp" className="underline">online GIF to WebP converter</Link> only converts
        the first frame (static WebP) because browsers cannot encode multi-frame animated WebP via the Canvas API.
        For animated output, you need one of the server-side methods below.
      </div>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">GIF vs animated WebP — size comparison</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Property</th>
              <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-gray-700">GIF</th>
              <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-indigo-700">Animated WebP</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Colors', '256 max', '16M+ (full color)'],
              ['Transparency', 'Binary (on/off)', 'Full alpha (0-255)'],
              ['Compression', 'LZW lossless', 'Lossy or lossless per frame'],
              ['Typical file size', '100%', '~36% (64% savings)'],
              ['Browser support', '100%', '~97% (Chrome, Firefox, Safari 14+)'],
              ['Loop control', '✓', '✓'],
            ].map(([prop, gif, webp]) => (
              <tr key={prop} className="border-b border-gray-100">
                <td className="px-4 py-2 font-medium text-gray-700 border border-gray-100">{prop}</td>
                <td className="px-4 py-2 text-center text-gray-500 border border-gray-100">{gif}</td>
                <td className="px-4 py-2 text-center text-indigo-600 font-medium border border-gray-100">{webp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Method 1: ffmpeg (recommended)</h2>
      <p className="text-gray-600 text-sm mb-4">
        ffmpeg is the most flexible tool and handles edge cases well (variable frame rates, palette transparency, etc.).
      </p>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-4">
{`# Install
# macOS: brew install ffmpeg
# Ubuntu: sudo apt install ffmpeg
# Windows: winget install Gyan.FFmpeg

# Basic GIF → animated WebP
ffmpeg -i animation.gif \\
  -c:v libwebp \\
  -lossless 0 \\
  -compression_level 6 \\
  -q:v 70 \\
  -loop 0 \\
  -preset picture \\
  -an -vsync 0 \\
  output.webp

# Flags explained:
# -lossless 0       → lossy compression (much smaller)
# -compression_level 6 → max compression effort
# -q:v 70           → quality 0-100 (70 is a good balance)
# -loop 0           → loop forever (0=infinite, -1=no loop)
# -preset picture   → optimized for still-like content
# -an               → no audio
# -vsync 0          → preserve original frame timing`}
      </pre>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-6">
{`# Lossless mode (larger, but perfect quality)
ffmpeg -i animation.gif \\
  -c:v libwebp -lossless 1 -loop 0 -an -vsync 0 \\
  output_lossless.webp

# Batch convert all GIFs in folder
for f in *.gif; do
  ffmpeg -i "$f" -c:v libwebp -lossless 0 -q:v 75 -loop 0 -an -vsync 0 \\
    "\${f%.gif}.webp"
done`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Method 2: gif2webp (Google&apos;s official tool)</h2>
      <p className="text-gray-600 text-sm mb-4">
        Part of the <code className="bg-gray-100 px-1 rounded">libwebp</code> package from Google.
        Specifically designed for GIF → WebP with excellent handling of GIF-specific quirks.
      </p>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-4">
{`# Install (comes with the webp package)
# macOS: brew install webp
# Ubuntu: sudo apt install webp
# Windows: included with webp tools from Google

# Basic conversion
gif2webp animation.gif -o output.webp

# Quality control
gif2webp -q 80 animation.gif -o output.webp

# Minimize size (slower encoding)
gif2webp -min_size animation.gif -o output.webp

# Lossless
gif2webp -lossless animation.gif -o output.webp

# Batch
for f in *.gif; do gif2webp "$f" -o "\${f%.gif}.webp"; done`}
      </pre>
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-sm text-indigo-800 mb-8">
        <strong>gif2webp vs ffmpeg:</strong> <code>gif2webp</code> often produces smaller files than ffmpeg for GIF sources
        because it understands GIF&apos;s frame disposal methods. Use ffmpeg when you also need to trim, resize, or
        control frame rate during conversion.
      </div>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Method 3: Node.js with sharp</h2>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-4">
{`npm install sharp`}
      </pre>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-4">
{`import sharp from 'sharp';

// Note: sharp converts animated GIF to animated WebP
// as of sharp 0.31 (uses libvips 8.13+)
await sharp('animation.gif', { animated: true })
  .webp({ quality: 80, loop: 0 })
  .toFile('output.webp');`}
      </pre>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-8">
        <strong>sharp version note:</strong> Animated GIF/WebP support requires sharp ≥ 0.31 and libvips ≥ 8.13.
        Run <code>sharp.versions</code> to check your libvips version.
      </div>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Browser support for animated WebP</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Browser</th>
              <th className="text-center px-4 py-2 border border-gray-100 font-semibold text-gray-700">Animated WebP support</th>
              <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Since version</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Chrome', '✓', '32'],
              ['Firefox', '✓', '65'],
              ['Safari', '✓', '14 (macOS 11)'],
              ['Edge', '✓', '18'],
              ['iOS Safari', '✓', 'iOS 14'],
              ['Samsung Internet', '✓', '5'],
            ].map(([browser, support, since]) => (
              <tr key={browser} className="border-b border-gray-100">
                <td className="px-4 py-2 text-gray-700 border border-gray-100">{browser}</td>
                <td className="px-4 py-2 text-center text-green-600 font-bold border border-gray-100">{support}</td>
                <td className="px-4 py-2 text-gray-500 border border-gray-100">{since}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gray-500 text-sm mb-8">
        Overall browser support is ~97%. For the remaining 3%, serve GIF as fallback using the{' '}
        <code className="bg-gray-100 px-1 rounded">&lt;picture&gt;</code> element:
      </p>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-8">
{`<picture>
  <source srcset="animation.webp" type="image/webp">
  <img src="animation.gif" alt="Animation">
</picture>`}
      </pre>

      <div className="mt-10 pt-8 border-t border-gray-100">
        <p className="text-sm text-gray-400 mb-3">Related:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/gif-to-webp" className="text-sm text-indigo-600 hover:underline">Online GIF→WebP converter (static) →</Link>
          <Link href="/blog/convert-webp-command-line" className="text-sm text-indigo-600 hover:underline">Full CLI reference →</Link>
          <Link href="/blog/jpg-to-webp-javascript" className="text-sm text-indigo-600 hover:underline">JavaScript guide →</Link>
        </div>
      </div>
    </article>
  );
}
