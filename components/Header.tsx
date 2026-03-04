import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-14 border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50 flex items-center justify-between px-4 lg:px-6">
      <Link href="/" className="flex items-center gap-2 font-bold text-base text-indigo-600">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="PixConvert" width={28} height={28} className="rounded-md" />
        PixConvert
      </Link>
      <Link
        href="/blog"
        className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors"
      >
        Blog
      </Link>
    </header>
  );
}
