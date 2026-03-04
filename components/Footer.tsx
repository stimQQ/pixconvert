import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 mt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          <div>
            <p className="font-semibold text-gray-800 mb-3">WebP Tools</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/webp-to-jpg" className="hover:text-indigo-600">WebP to JPG</Link></li>
              <li><Link href="/webp-to-png" className="hover:text-indigo-600">WebP to PNG</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-3">Convert to WebP</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/jpg-to-webp" className="hover:text-indigo-600">JPG to WebP</Link></li>
              <li><Link href="/png-to-webp" className="hover:text-indigo-600">PNG to WebP</Link></li>
              <li><Link href="/gif-to-webp" className="hover:text-indigo-600">GIF to WebP</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-3">Why PixConvert</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>100% browser-based</li>
              <li>No file uploads</li>
              <li>Completely free</li>
              <li>No sign-up needed</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-3">About</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Privacy-first converter</li>
              <li>Your files never leave your device</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>© 2025 PixConvert. All rights reserved.</p>
          <p>All conversions happen locally in your browser — we never see your files.</p>
        </div>
      </div>
    </footer>
  );
}
