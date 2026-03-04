'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const groups = [
  {
    label: 'From WebP',
    formats: [
      { label: 'WebP to JPG', href: '/webp-to-jpg' },
      { label: 'WebP to PNG', href: '/webp-to-png' },
      { label: 'WebP to AVIF', href: '/webp-to-avif' },
    ],
  },
  {
    label: 'From AVIF',
    formats: [
      { label: 'AVIF to JPG', href: '/avif-to-jpg' },
      { label: 'AVIF to PNG', href: '/avif-to-png' },
      { label: 'AVIF to WebP', href: '/avif-to-webp' },
    ],
  },
  {
    label: 'To WebP',
    formats: [
      { label: 'JPG to WebP', href: '/jpg-to-webp' },
      { label: 'PNG to WebP', href: '/png-to-webp' },
      { label: 'GIF to WebP', href: '/gif-to-webp' },
    ],
  },
  {
    label: 'To AVIF',
    formats: [
      { label: 'JPG to AVIF', href: '/jpg-to-avif' },
      { label: 'PNG to AVIF', href: '/png-to-avif' },
    ],
  },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 overflow-y-auto py-4 px-3">
      {groups.map((group) => (
        <div key={group.label} className="mb-5">
          <div className="px-2 mb-1 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
            {group.label}
          </div>
          <ul className="space-y-0.5">
            {group.formats.map(({ label, href }) => {
              const active =
                pathname === href ||
                (pathname === '/' && href === '/webp-to-jpg') ||
                pathname.startsWith(href + '/');
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm transition-colors ${
                      active
                        ? 'bg-indigo-50 text-indigo-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        active ? 'bg-indigo-600' : 'bg-transparent'
                      }`}
                    />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
