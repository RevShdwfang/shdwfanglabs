'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from '@/styles/modules/TopNav.module.css';
import Image from "next/image";


export default function TopNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(p => !p);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.topnav}>
      <div className={styles.navContainer}>
        {/* Left: Logo */}
        <div className={styles.leftGroup}>
          <Link
  href="/"
  aria-label="Shadowfang Labs"
  onClick={closeMenu}
  className={styles.logoBox}
>
  <Image
    src="/assets/brand/mark.svg"   // <- update to your path (svg/png/webp)
    alt=""                          // decorative (Link has the aria-label)
    aria-hidden="true"
    fill                             // let it fill the square
    sizes="48px"                     // matches desktop size; overrides via media queries below
    className={styles.logoImg}
    priority
  />
</Link>
        </div>

        {/* Center: main nav */}
        <ul className={`${styles.mainNav} ${menuOpen ? styles.show : ''}`}>
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
            <Link href="/contact" onClick={closeMenu}>Contact Us</Link>
          </li>
          

          {/* Mobile CTA at the end of the list */}
          <li className={styles.navCommandMobile}>
            <Link href="/signin" className={styles.cta} onClick={closeMenu}>
              Enter Portal
            </Link>
          </li>
        </ul>

        {/* Right: CTA + burger (burger only shows on mobile) */}
        <div className={styles.rightGroup}>
          <Link href="/signin" className={styles.cta}>
            Enter Portal
          </Link>

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
        </div>
      </div>
    </header>
  );
}
