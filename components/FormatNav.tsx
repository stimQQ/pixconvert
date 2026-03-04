'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const groups = [
  {
    label: 'From WebP',
    formats: [
      { label: 'WebP → JPG', href: '/webp-to-jpg' },
      { label: 'WebP → PNG', href: '/webp-to-png' },
      { label: 'WebP → AVIF', href: '/webp-to-avif' },
    ],
  },
  {
    label: 'From AVIF',
    formats: [
      { label: 'AVIF → JPG', href: '/avif-to-jpg' },
      { label: 'AVIF → PNG', href: '/avif-to-png' },
      { label: 'AVIF → WebP', href: '/avif-to-webp' },
    ],
  },
  {
    label: 'To WebP',
    formats: [
      { label: 'JPG → WebP', href: '/jpg-to-webp' },
      { label: 'PNG → WebP', href: '/png-to-webp' },
      { label: 'GIF → WebP', href: '/gif-to-webp' },
    ],
  },
  {
    label: 'To AVIF',
    formats: [
      { label: 'JPG → AVIF', href: '/jpg-to-avif' },
      { label: 'PNG → AVIF', href: '/png-to-avif' },
    ],
  },
];

const allFormats = groups.flatMap((g) => g.formats);

export default function FormatNav() {
  const pathname = usePathname();

  const pill = (href: string, label: string) => {
    const active = pathname === href || (pathname === '/' && href === '/webp-to-jpg');
    return (
      <Link
        key={href}
        href={href}
        className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          active
            ? 'bg-indigo-600 text-white shadow-sm'
            : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="mb-8">
      {/* Mobile: single horizontal scroll row */}
      <div className="sm:hidden overflow-x-auto pb-2 -mx-4 px-4">
        <div className="flex gap-2 w-max">
          {allFormats.map(({ label, href }) => pill(href, label))}
        </div>
      </div>

      {/* Desktop: grouped rows with labels */}
      <div className="hidden sm:flex flex-col gap-3">
        {groups.map((group) => (
          <div key={group.label} className="flex flex-wrap justify-center items-center gap-2">
            <span className="text-xs font-medium text-gray-400 w-16 text-right shrink-0">
              {group.label}
            </span>
            {group.formats.map(({ label, href }) => pill(href, label))}
          </div>
        ))}
      </div>
    </div>
  );
}
