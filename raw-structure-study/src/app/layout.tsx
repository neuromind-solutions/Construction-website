import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ArchitecturalHUD from '@/components/ArchitecturalHUD';

export const metadata: Metadata = {
  title: 'RAW STRUCTURE — Construction & Engineering',
  description:
    'Design-build contractor for towers, bridges and industrial buildings — engineered with obsessive precision and delivered without drama.',
  keywords: [
    'Construction',
    'Engineering',
    'General Contracting',
    'Structural Steel',
    'Civil Infrastructure',
    'Design and Build',
    'Rotterdam',
    'RAW STRUCTURE',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0e0e0d] text-[#f6f4f0] antialiased selection:bg-[#ff4d00] selection:text-[#0e0e0d]">
        <SiteHeader />
        <ArchitecturalHUD />
        <main className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
