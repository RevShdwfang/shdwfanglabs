'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from '@/styles/modules/TopNav.module.css';

interface TopNavProps {
  isLight: boolean;
}

export default function TopNav({ isLight }: TopNavProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className={styles.topnav} aria-label="Primary Navigation">
      <div className={styles.navLogo}>
  <Link href="/" aria-label="Return to Shadowfang Labs Core">
    <span className={styles.shadowfangText}>Shadowfang</span>
    <span className={styles.labsText}>Labs</span>
  </Link>
</div>

      <button
        className={styles.menuToggle}
        aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`} aria-hidden={!isMenuOpen}>
        <li className={pathname === '/' ? styles.active : ''}>
          <Link href="/" onClick={handleLinkClick} aria-label="Navigate to Core Domain">Home</Link>
        </li>
        <li className={pathname === '/about' ? styles.active : ''}>
          <Link href="/about" onClick={handleLinkClick} aria-label="Navigate to Legacy Domain">Abut</Link>
        </li>
        <li className={pathname === '/services' ? styles.active : ''}>
          <Link href="/services" onClick={handleLinkClick} aria-label="Navigate to Offerings Domain">Services</Link>
        </li>
        <li className={pathname === '/portfolio' ? styles.active : ''}>
          <Link href="/portfolio" onClick={handleLinkClick} aria-label="Navigate to Artifact Gallery">Portfolio</Link>
        </li>
        <li className={pathname === '/contact' ? styles.active : ''}>
          <Link href="/contact" onClick={handleLinkClick} aria-label="Navigate to Conduit Hub">Contact</Link>
        </li>
        <li className={pathname === '/shop' ? styles.active : ''}>
          <Link href="/shop" onClick={handleLinkClick} aria-label="Navigate to Shadowfang Forge">Forge</Link>
        </li>
      </ul>

      <div className={styles.navCommand}>
        <Link
          href="/signin"
          className={styles.sigilBtn}
          onClick={handleLinkClick}
          aria-label="Access Client Portal"
        >
          Enter Portal
        </Link>
      </div>
    </nav>
  );
}


