'use client';

import { usePathname } from 'next/navigation';
import styles from '@/components/modules/PageHeader.module.css';

const routeTitles: Record<string, string> = {
  '/about': 'Enter the Legacy',
  '/services': 'Design Arsenal',
  '/portfolio': 'Artifact Gallery',
  '/contact': 'Initiate Contact',
  '/terms': 'Terms of Service',
  '/privacy': 'Privacy Policy',
  '/shop': 'ShadowForge',
  '/signin': 'Client Portal Access',
  '/services/stream-forge': 'Stream Forge',
  '/services/custom-package': 'Build Your Custom Package',

};

const routeSubtitles: Record<string, string> = {
  '/about': 'Discover the mission, values, and story behind Shadowfang Labs.',
  '/services': 'Explore battle-ready design services tailored for creators and visionaries.',
  '/portfolio': 'Browse a curated collection of completed missions and artifacts.',
  '/contact': 'Open comms and forge your next collaboration.',
  '/terms': 'The fine print for operating within the Domain.',
  '/privacy': 'How your data is guarded in the shadows.',
  '/shop': 'Gear forged for the bold. Enter the ShadowForge.',
  '/signin': 'Client access to secure uploads, invoices, and documents.',
  '/services/stream-forge': 'Crafted overlays, alerts, and branding assets to amplify your presence on Twitch, YouTube, and beyond.',
  '/services/custom-package': 'Select what you need. I’ll forge the perfect combo and quote.',
};

interface PageHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  const pathname = usePathname();

  const finalTitle = title || routeTitles[pathname];
  const finalSubtitle = subtitle || routeSubtitles[pathname];

  if (!finalTitle) return null;

  return (
    <header className={styles.forgeHeader}>
      <h1 className={styles.forgeTitle}>{finalTitle}</h1>
      {finalSubtitle && <p className={styles.forgeSubtitle}>{finalSubtitle}</p>}
      <div className={styles.sigilGlow}></div>
    </header>
  );
}
