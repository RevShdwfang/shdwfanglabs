'use client';

import styles from '@/styles/modules/Footer.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
  faBluesky,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerItem}>
            <h3>Shadowfang Labs</h3>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.footerItem}>
            <h3>Community</h3>
            <ul>
              <li><Link href="https://kick.com/shdwfanglabs" target="_blank">Kick Stream</Link></li>
              <li><Link href="/shop">Forge (Shop)</Link></li>
              <li><Link href="/signin">Client Portal</Link></li>
            </ul>
          </div>

          <div className={styles.footerItem}>
            <h3>Connect</h3>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com/theShdwfang" target="_blank" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://x.com/theShdwfang" target="_blank" aria-label="X (Twitter)">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href="https://instagram.com/theShdwfang" target="_blank" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com/in/theShdwfang" target="_blank" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://bsky.app/profile/theShdwfang" target="_blank" aria-label="Bluesky">
                <FontAwesomeIcon icon={faBluesky} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          &copy; {new Date().getFullYear()} Shadowfang Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
