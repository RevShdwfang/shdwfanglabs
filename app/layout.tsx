// app/layout.tsx
import './globals.css';
import StyleSwitcher from '@/components/StyleSwitcher';
import Aside from '@/components/aside/Aside';
import { CartProvider } from '@/components/cart/cart-context';
import '@/styles/styleswitcher.css';

export const metadata = {
  title: 'Shadowfang Labs – Unleashing Bold Design',
  description: 'Shadowfang Labs transforms adversity into striking digital design. Specializing in branding, UI/UX, and stream visuals that tell your story.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Shadowfang Labs – Unleashing Bold Design',
    description: 'Born of Shadows, Built for Legacy. From stream overlays to full brand identity — powered by purpose and crafted with resilience.',
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
    description: 'Born of Shadows, Built for Legacy. Shadowfang Labs creates bold visuals and purposeful designs for brands and creators.',
    creator: '@theShdwfang',
    images: ['/og-preview.jpg'],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="style-switcher-container">
            <StyleSwitcher />
          </div>

          <div className="layout-container">
            <Aside />
            <main className="layout-main">
              {children}
            </main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
