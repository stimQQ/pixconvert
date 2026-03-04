import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import SideNav from '@/components/SideNav';
import SubNav from '@/components/SubNav';
import MobileFormatNav from '@/components/MobileFormatNav';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'PixConvert – Free Online Image Converter',
    template: '%s | PixConvert',
  },
  description:
    'Convert WebP, JPG, PNG and GIF images instantly in your browser. No uploads, no sign-up — 100% private and free.',
  metadataBase: new URL('https://pixconvert.app'),
  openGraph: {
    siteName: 'PixConvert',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {/* Full-width sticky header */}
        <Header />

        {/* Below header: sidebar + content */}
        <div className="flex min-h-[calc(100vh-3.5rem)]">
          {/* Left sidebar — desktop only, sticks below header */}
          <aside className="hidden lg:flex lg:flex-col w-52 shrink-0 border-r border-gray-100 sticky top-14 h-[calc(100vh-3.5rem)]">
            <SideNav />
          </aside>

          {/* Right column */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Mobile: scrollable format pills */}
            <MobileFormatNav />
            {/* Sub-page tabs (Windows / iPhone / etc.) — shown when applicable */}
            <SubNav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
