'use client';

import styles from '@/components/modules/Footer.module.css';

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
            <p>BORN OF SHADOWS. BUILT FOR LEGACY.</p>
          </div>

          <div className={styles.footerItem}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/terms-of-service">User Agreement</a></li>
            </ul>
          </div>

          <div className={styles.footerItem}>
            <h3>Connect With Us</h3>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/shdwfanglabs" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://x.com/shdwfanglabs" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href="https://instagram.com/shdwfanglabs" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com/in/shdwfanglabs" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://bsky.app/profile/shdwfanglabs.bsky.social" target="_blank" rel="noreferrer" aria-label="Bluesky">
                <FontAwesomeIcon icon={faBluesky} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 Shadowfang Labs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
