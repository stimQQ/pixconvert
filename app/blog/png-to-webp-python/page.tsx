import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Convert PNG and JPG to WebP with Python (Pillow)',
  description:
    'How to convert images to WebP in Python using Pillow. Includes single file, batch processing, lossless mode, and transparency handling. Copy-paste code examples.',
  alternates: { canonical: '/blog/png-to-webp-python' },
};

export default function PngToWebpPythonPage() {
  return (
    <article>
      <div className="flex flex-wrap gap-2 mb-3">
        {['Python', 'Pillow', 'Batch'].map(t => (
          <span key={t} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{t}</span>
        ))}
        <span className="text-xs text-gray-400 ml-auto">5 min read</span>
      </div>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        Convert PNG and JPG to WebP with Python
      </h1>
      <p className="text-lg text-gray-500 mb-10">
        Using <a href="https://python-pillow.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Pillow</a> — the most popular Python imaging library.
        Single file, batch, lossless, and transparency all covered.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Install Pillow</h2>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-6">
{`pip install Pillow`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Basic conversion (single file)</h2>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-6">
{`from PIL import Image

# Open and convert to WebP
img = Image.open("photo.jpg")
img.save("photo.webp", "WEBP", quality=85)

# PNG with transparency → WebP (preserves alpha channel)
img = Image.open("logo.png")  # RGBA mode
img.save("logo.webp", "WEBP", quality=90)

print("Done!")`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Lossless WebP (pixel-perfect, best for logos)</h2>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-6">
{`from PIL import Image

img = Image.open("logo.png")
img.save(
    "logo.webp",
    "WEBP",
    lossless=True,   # Lossless mode
    quality=100,     # Ignored when lossless=True, but good practice
    method=6         # Compression effort 0-6 (6 = smallest, slower)
)`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Batch convert a folder</h2>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-6">
{`from PIL import Image
from pathlib import Path

def batch_to_webp(
    src_dir: str,
    dst_dir: str = None,
    quality: int = 85,
    lossless: bool = False,
    extensions: tuple = (".jpg", ".jpeg", ".png"),
):
    src = Path(src_dir)
    dst = Path(dst_dir) if dst_dir else src
    dst.mkdir(parents=True, exist_ok=True)

    for path in src.iterdir():
        if path.suffix.lower() not in extensions:
            continue
        out = dst / path.with_suffix(".webp").name
        try:
            img = Image.open(path)
            # Preserve RGBA for PNG transparency
            if img.mode not in ("RGB", "RGBA"):
                img = img.convert("RGBA" if "A" in img.getbands() else "RGB")
            img.save(out, "WEBP", quality=quality, lossless=lossless)
            print(f"✓ {path.name} → {out.name}")
        except Exception as e:
            print(f"✗ {path.name}: {e}")

# Usage
batch_to_webp("./images", "./images/webp", quality=85)
# Lossless for logos
batch_to_webp("./logos", "./logos/webp", lossless=True)`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Handling transparency correctly</h2>
      <p className="text-gray-600 text-sm mb-4">
        Pillow preserves the alpha channel automatically when saving PNG to WebP.
        The only gotcha is when you have a palette-mode (<code>mode=&apos;P&apos;</code>) PNG:
      </p>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-6">
{`from PIL import Image

img = Image.open("palette.png")  # mode='P' (palette with transparency)

# WRONG — saves without transparency
img.save("output.webp", "WEBP")

# CORRECT — convert to RGBA first
if img.mode == "P":
    img = img.convert("RGBA")
img.save("output.webp", "WEBP", quality=90)`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Resize and convert in one step</h2>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-6">
{`from PIL import Image

img = Image.open("large-photo.jpg")

# Resize to max 1200px wide while keeping aspect ratio
img.thumbnail((1200, 1200), Image.LANCZOS)

img.save("resized.webp", "WEBP", quality=85)
print(f"Output size: {img.size}")`}
      </pre>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Command-line script</h2>
      <p className="text-gray-600 text-sm mb-4">
        Save as <code>convert_to_webp.py</code> and run from terminal:
      </p>
      <pre className="bg-gray-900 text-green-400 text-xs rounded-xl p-5 overflow-x-auto mb-6">
{`#!/usr/bin/env python3
"""
Convert image files to WebP.
Usage:
  python convert_to_webp.py input.jpg            # → input.webp
  python convert_to_webp.py *.jpg -q 90          # batch with quality
  python convert_to_webp.py logo.png --lossless  # lossless mode
"""
import argparse
from pathlib import Path
from PIL import Image


def convert(src: Path, quality: int, lossless: bool) -> None:
    dst = src.with_suffix(".webp")
    img = Image.open(src)
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGBA" if "transparency" in img.info else "RGB")
    img.save(dst, "WEBP", quality=quality, lossless=lossless)
    orig_kb = src.stat().st_size / 1024
    out_kb = dst.stat().st_size / 1024
    savings = (1 - out_kb / orig_kb) * 100
    print(f"✓ {src.name} → {dst.name}  ({orig_kb:.0f}KB → {out_kb:.0f}KB, -{savings:.0f}%)")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("files", nargs="+", help="Input image file(s)")
    parser.add_argument("-q", "--quality", type=int, default=85)
    parser.add_argument("--lossless", action="store_true")
    args = parser.parse_args()

    for pattern in args.files:
        for path in Path(".").glob(pattern) if "*" in pattern else [Path(pattern)]:
            try:
                convert(path, args.quality, args.lossless)
            except Exception as e:
                print(f"✗ {path}: {e}")`}
      </pre>

      <div className="mt-10 pt-8 border-t border-gray-100">
        <p className="text-sm text-gray-400 mb-3">Related guides:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/blog/jpg-to-webp-javascript" className="text-sm text-indigo-600 hover:underline">JavaScript (Canvas/sharp) guide →</Link>
          <Link href="/blog/convert-webp-command-line" className="text-sm text-indigo-600 hover:underline">CLI guide (cwebp, ImageMagick) →</Link>
          <Link href="/png-to-webp/lossless" className="text-sm text-indigo-600 hover:underline">Online PNG→WebP lossless converter →</Link>
        </div>
      </div>
    </article>
  );
}
