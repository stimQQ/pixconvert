'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const subNavConfig: Record<string, { label: string; href: string }[]> = {
  '/webp-to-jpg': [
    { label: 'Converter', href: '/webp-to-jpg' },
    { label: 'Windows', href: '/webp-to-jpg/windows' },
    { label: 'iPhone', href: '/webp-to-jpg/iphone' },
    { label: 'Mac', href: '/webp-to-jpg/mac' },
    { label: 'Batch', href: '/webp-to-jpg/batch' },
  ],
  '/webp-to-png': [
    { label: 'Converter', href: '/webp-to-png' },
    { label: 'Transparent', href: '/webp-to-png/transparent' },
  ],
  '/png-to-webp': [
    { label: 'Converter', href: '/png-to-webp' },
    { label: 'Lossless', href: '/png-to-webp/lossless' },
  ],
  '/jpg-to-webp': [
    { label: 'Converter', href: '/jpg-to-webp' },
    { label: 'Quality', href: '/jpg-to-webp/quality' },
  ],
};

export default function SubNav() {
  const pathname = usePathname();

  const baseRoute = Object.keys(subNavConfig).find(
    (key) => pathname === key || pathname.startsWith(key + '/')
  );

  if (!baseRoute) return null;

  const tabs = subNavConfig[baseRoute];

  return (
    <div className="border-b border-gray-100 bg-white">
      <div className="flex overflow-x-auto px-4 lg:px-6">
        {tabs.map(({ label, href }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`shrink-0 px-3 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                active
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
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
