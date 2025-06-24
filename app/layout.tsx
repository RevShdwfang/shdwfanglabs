// app/layout.tsx
import './globals.css';
import StyleSwitcher from '@/components/StyleSwitcher';
import Aside from '@/components/aside/Aside';
import { CartProvider } from '@/components/cart/cart-context';
import '@/styles/styleswitcher.css'

export const metadata = {
  title: 'Shadowfang Labs',
  description: 'Cybernetic apparel and merch',
  icons: {
    icon: "/favicon.ico", // ← this line sets the favicon
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
