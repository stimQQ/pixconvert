'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const allFormats = [
  { label: 'WebPtoJPG', href: '/webp-to-jpg' },
  { label: 'WebPtoPNG', href: '/webp-to-png' },
  { label: 'WebPtoAVIF', href: '/webp-to-avif' },
  { label: 'AVIFtoJPG', href: '/avif-to-jpg' },
  { label: 'AVIFtoPNG', href: '/avif-to-png' },
  { label: 'AVIFtoWebP', href: '/avif-to-webp' },
  { label: 'JPGtoWebP', href: '/jpg-to-webp' },
  { label: 'PNGtoWebP', href: '/png-to-webp' },
  { label: 'GIFtoWebP', href: '/gif-to-webp' },
  { label: 'JPGtoAVIF', href: '/jpg-to-avif' },
  { label: 'PNGtoAVIF', href: '/png-to-avif' },
];

export default function MobileFormatNav() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden border-b border-gray-100 overflow-x-auto">
      <div className="flex gap-1.5 px-4 py-2 w-max">
        {allFormats.map(({ label, href }) => {
          const active =
            pathname === href ||
            (pathname === '/' && href === '/webp-to-jpg') ||
            pathname.startsWith(href + '/');
          return (
            <Link
              key={href}
              href={href}
              className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                active
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
