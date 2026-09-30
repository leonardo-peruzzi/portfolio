import type { Metadata, Viewport } from 'next';
import { Bodoni_Moda, Hanken_Grotesk } from 'next/font/google';
import Spotlight from '@/components/Spotlight';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import { profile, navItems } from '@/data/profile';
import './globals.css';

const display = Bodoni_Moda({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const body = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name}, ${profile.headline}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.statement,
};

export const viewport: Viewport = {
  themeColor: '#0B1A16',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${display.variable} ${body.variable}`}>
      <body>
        <Spotlight />
        <SiteHeader items={navItems} initials={profile.initials} name={profile.name} cv={profile.cv} />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
