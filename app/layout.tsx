// app/layout.tsx
import './globals.css';
import '@/styles/styleswitcher.css';

import { CartProvider } from '@/components/cart/cart-context';
import StyleSwitcher from '@/components/shared/StyleSwitcher';
import TopNav from '@/components/shared/TopNav';
import Footer from '@/components/shared/Footer';
import ClientLayout from '@/components/shared/ClientLayout';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shdwfanglabs.com'),
  title: 'Shadowfang Labs – Unleashing Bold Design',
  description:
    'Shadowfang Labs transforms adversity into striking digital design. Specializing in branding, UI/UX, and stream visuals that tell your story.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Shadowfang Labs – Unleashing Bold Design',
    description:
      'Born of Shadows, Built for Legacy. From stream overlays to full brand identity — powered by purpose and crafted with resilience.',
    url: 'https://www.shdwfanglabs.com',
    siteName: 'Shadowfang Labs',
    type: 'website',
    images: [
      {
        url: '/og-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Shadowfang Labs – Born of Shadows, Built for Legacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shadowfang Labs – Unleashing Bold Design',
    description:
      'Born of Shadows, Built for Legacy. Shadowfang Labs creates bold visuals and purposeful designs for brands and creators.',
    creator: '@theShdwfang',
    images: ['/og-preview.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap"
        />
      </head>
      <body>
        <CartProvider>
          <TopNav />
          <div className="style-switcher-container">
            <StyleSwitcher />
          </div>
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}


