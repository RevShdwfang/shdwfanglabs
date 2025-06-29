'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  faHome,
  faUser,
  faList,
  faBriefcase,
  faComments,
  faStore,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
  faBluesky
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Aside({ onLinkClick }: { onLinkClick: () => void }) {
  const pathname = usePathname();
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(document.body.classList.contains('light'));

    const observer = new MutationObserver(() => {
      setIsLight(document.body.classList.contains('light'));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="aside-body">
        <div className='aside-inner'>
        <div className="logo">
          <a href="/">
            <img
              id="logo-image"
              src={
                isLight
                  ? '/assets/images/Logo/CompanyLogo_black.png'
                  : '/assets/images/Logo/CompanyLogo_white.png'
              }
              alt="Shadowfang Labs Logo"
              style={{ width: '150px', height: 'auto' }}
            />
          </a>
        </div>

        <div className="nav-wrapper">
        <ul className="nav">
          <li className={pathname === '/' ? 'active' : ''}>
            <Link href="/" onClick={onLinkClick}><FontAwesomeIcon icon={faHome} /> Home</Link>
          </li>
          <li className={pathname === '/about' ? 'active' : ''}>
            <Link href="/about" onClick={onLinkClick}><FontAwesomeIcon icon={faUser} /> About</Link>
          </li>
          <li className={pathname === '/services' ? 'active' : ''}>
            <Link href="/services" onClick={onLinkClick}><FontAwesomeIcon icon={faList} /> Services</Link>
          </li>
          <li className={pathname === '/portfolio' ? 'active' : ''}>
            <Link href="/portfolio" onClick={onLinkClick}><FontAwesomeIcon icon={faBriefcase} /> Portfolio</Link>
          </li>
          <li className={pathname === '/contact' ? 'active' : ''}>
            <Link href="/contact" onClick={onLinkClick}><FontAwesomeIcon icon={faComments} /> Contact</Link>
          </li>
          <li className={pathname === '/shop' ? 'active' : ''}>
            <Link href="/shop" onClick={onLinkClick}><FontAwesomeIcon icon={faStore} /> Shop</Link>
          </li>
          <li className={pathname === '/terms-of-service' ? 'active' : ''}>
            <Link href="/terms-of-service" onClick={onLinkClick}><FontAwesomeIcon icon={faFileAlt} /> User Agreement</Link>
          </li>
        </ul>
        </div>
        </div>
        </div>

      <footer className="aside-footer">
        <div className="container">
          <div className="row">
            <div className="footer-item">
              <p>&copy; 2025 Shadowfang Labs. All Rights Reserved.</p>
            </div>
            <div className="footer-item">
              <div className="social-links">
                <a href="https://www.facebook.com/shdwfanglabs" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://x.com/shdwfanglabs" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="https://instagram.com/shdwfanglabs" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://linkedin.com/in/shdwfanglabs" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://bsky.app/profile/shdwfanglabs.bsky.social" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faBluesky} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
