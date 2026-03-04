import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Convert WebP via Command Line: cwebp, dwebp, ImageMagick, ffmpeg',
  description:
    'Complete reference for converting WebP images from the command line. Covers cwebp, dwebp, ImageMagick mogrify, and ffmpeg with batch one-liners for macOS, Linux, and Windows.',
  alternates: { canonical: '/blog/convert-webp-command-line' },
};

export default function ConvertWebpCommandLinePage() {
  return (
    <article>
      <div className="flex flex-wrap gap-2 mb-3">
        {['CLI', 'cwebp', 'ImageMagick', 'ffmpeg'].map(t => (
          <span key={t} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{t}</span>
        ))}
        <span className="text-xs text-gray-400 ml-auto">7 min read</span>
      </div>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        Convert WebP Images via Command Line
      </h1>
      <p className="text-lg text-gray-500 mb-10">
        Reference guide for <code className="bg-gray-100 px-1 rounded text-sm">cwebp</code>, <code className="bg-gray-100 px-1 rounded text-sm">dwebp</code>, ImageMagick, and ffmpeg.
        Batch one-liners for macOS, Linux, and Windows PowerShell.
      </p>

      {/* Tool overview */}
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Tool</th>
              <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Direction</th>
              <th className="text-left px-4 py-2 border border-gray-100 font-semibold text-gray-700">Best for</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['cwebp', 'JPG/PNG → WebP', 'Encoding, quality control, metadata'],
              ['dwebp', 'WebP → PNG/PPM', 'Decoding WebP, exact pixel output'],
              ['ImageMagick (magick/mogrify)', 'Any ↔ Any', 'Batch, resize+convert in one step'],
              ['ffmpeg', 'Any → WebP / animated', 'Video frames, GIF → animated WebP'],
            ].map(([tool, dir, use]) => (
              <tr key={tool} className="border-b border-gray-100">
                <td className="px-4 py-2 font-mono text-gray-800 border border-gray-100">{tool}</td>
                <td className="px-4 py-2 text-gray-600 border border-gray-100">{dir}</td>
                <td className="px-4 py-2 text-gray-500 border border-gray-100">{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Install the tools</h2>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-3">
{`# macOS (Homebrew)
brew install webp imagemagick ffmpeg

# Ubuntu / Debian
sudo apt install webp imagemagick ffmpeg

# Windows (winget)
winget install Google.WebPCodec
winget install ImageMagick.ImageMagick
# ffmpeg: https://ffmpeg.org/download.html`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">cwebp — encode to WebP</h2>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-3">
{`# Basic conversion (quality 85)
cwebp -q 85 input.jpg -o output.webp

# High quality (near-lossless)
cwebp -q 95 input.png -o output.webp

# Lossless mode (for logos, icons)
cwebp -lossless input.png -o output.webp

# With metadata stripping (smaller file)
cwebp -q 85 -metadata none input.jpg -o output.webp

# Resize to max 1200px width while converting
cwebp -q 85 -resize 1200 0 input.jpg -o output.webp
# (0 = auto-calculate height to preserve aspect ratio)

# Show encoding stats
cwebp -q 85 -v input.jpg -o output.webp`}
      </pre>

      <h3 className="text-base font-bold text-gray-900 mt-6 mb-2">Batch: JPG/PNG → WebP</h3>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-6">
{`# macOS / Linux — convert all JPG in current folder
for f in *.jpg; do cwebp -q 85 "$f" -o "\${f%.jpg}.webp"; done

# Include PNG too
for f in *.{jpg,jpeg,png}; do
  cwebp -q 85 "$f" -o "\${f%.*}.webp"
done

# Windows PowerShell
Get-ChildItem *.jpg | ForEach-Object {
  cwebp -q 85 $_.FullName -o "$($_.BaseName).webp"
}`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">dwebp — decode WebP to PNG</h2>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-6">
{`# WebP → PNG (lossless, preserves transparency)
dwebp input.webp -o output.png

# WebP → PPM (for scripts that need raw pixels)
dwebp input.webp -ppm -o output.ppm

# Batch: all WebP → PNG
for f in *.webp; do dwebp "$f" -o "\${f%.webp}.png"; done`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">ImageMagick — universal converter</h2>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-3">
{`# Convert a single file
magick input.jpg output.webp
magick input.webp output.jpg
magick input.webp output.png

# With quality control
magick input.jpg -quality 85 output.webp

# Lossless WebP
magick input.png -define webp:lossless=true output.webp

# Resize and convert
magick input.jpg -resize 1200x output.webp

# Batch convert (mogrify — overwrites originals by default!)
# Always use -path to save to a different directory
mkdir webp_output
mogrify -format webp -quality 85 -path ./webp_output *.jpg

# Windows PowerShell
New-Item -ItemType Directory -Force -Path webp_output
Get-ChildItem *.jpg | ForEach-Object {
  magick $_.FullName -quality 85 "webp_output\\$($_.BaseName).webp"
}`}
      </pre>
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800 mb-8">
        <strong>Warning:</strong> <code>mogrify</code> without <code>-path</code> overwrites the original files. Always specify an output directory.
      </div>

      <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">ffmpeg — animated WebP and video frames</h2>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-3">
{`# Static image → WebP
ffmpeg -i input.jpg output.webp

# GIF → animated WebP
ffmpeg -i animation.gif -c:v libwebp \\
  -lossless 0 -compression_level 6 \\
  -q:v 70 -loop 0 -preset picture \\
  -an -vsync 0 output.webp

# Video → WebP (first 5 seconds, 15fps)
ffmpeg -i video.mp4 -vf fps=15 -t 5 \\
  -c:v libwebp -q:v 80 -loop 0 output.webp`}
      </pre>

      <div className="mt-10 pt-8 border-t border-gray-100">
        <p className="text-sm text-gray-400 mb-3">Related guides:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/blog/animated-gif-to-webp-guide" className="text-sm text-indigo-600 hover:underline">Animated GIF to WebP guide →</Link>
          <Link href="/blog/jpg-to-webp-javascript" className="text-sm text-indigo-600 hover:underline">JavaScript (Node.js/sharp) guide →</Link>
          <Link href="/blog/png-to-webp-python" className="text-sm text-indigo-600 hover:underline">Python (Pillow) guide →</Link>
          <Link href="/jpg-to-webp/quality" className="text-sm text-indigo-600 hover:underline">Online converter →</Link>
        </div>
      </div>
    </article>
  );
}
