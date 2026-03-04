import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-14 border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50 flex items-center justify-between px-4 lg:px-6">
      <Link href="/" className="flex items-center gap-2 font-bold text-base text-indigo-600">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#6366F1" />
          <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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
