import Link from 'next/link';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-10 pb-20">
      <p className="text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-indigo-600">PixConvert</Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
      </p>
      {children}
    </div>
  );
}
