'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from '@/styles/modules/TopNav.module.css';

export default function TopNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.topnav}>
      <div className={styles.navLogo}>
        <Link href="/" onClick={closeMenu}>
          <span className={styles.shadowfangText}>Shadowfang</span>
          <span className={styles.labsText}>Labs</span>
        </Link>
      </div>

      <button
  className={styles.menuToggle}
  onClick={toggleMenu}
  aria-expanded={menuOpen}
  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
>
  <span className={styles.burgerIcon}>
    <span className={`${styles.bar} ${menuOpen ? styles.barTopOpen : ''}`}></span>
    <span className={`${styles.bar} ${menuOpen ? styles.barMiddleOpen : ''}`}></span>
    <span className={`${styles.bar} ${menuOpen ? styles.barBottomOpen : ''}`}></span>
  </span>
</button>


      <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
        <li className={pathname === '/' ? styles.active : ''}>
          <Link href="/" onClick={closeMenu}>Home</Link>
        </li>
        <li className={pathname === '/about' ? styles.active : ''}>
          <Link href="/about" onClick={closeMenu}>About</Link>
        </li>
        <li className={pathname === '/services' ? styles.active : ''}>
          <Link href="/services" onClick={closeMenu}>Services</Link>
        </li>
        <li className={pathname === '/portfolio' ? styles.active : ''}>
          <Link href="/portfolio" onClick={closeMenu}>Portfolio</Link>
        </li>
        <li className={pathname === '/contact' ? styles.active : ''}>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </li>
        <li className={pathname === '/shop' ? styles.active : ''}>
          <Link href="/shop" onClick={closeMenu}>Forge</Link>
        </li>
        <li className={`${styles.navCommandMobile}`}>
          <Link href="/signin" className={styles.sigilBtn} onClick={closeMenu}>
            Enter Portal
          </Link>
        </li>
      </ul>

      <div className={styles.navCommandDesktop}>
        <Link href="/signin" className={styles.sigilBtn}>
          Enter Portal
        </Link>
      </div>
    </nav>
  );
}
