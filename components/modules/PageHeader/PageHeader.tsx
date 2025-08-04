'use client';

import { usePathname } from 'next/navigation';
import styles from './PageHeader.module.css';

const routeTitles: Record<string, string> = {
  '/about': 'Enter the Legacy',
  '/services': 'Design Arsenal',
  '/portfolio': 'Artifact Gallery',
  '/contact': 'Initiate Contact',
  '/terms': 'Terms of Service',
  '/privacy': 'Privacy Policy',
  '/shop': 'ShadowForge',
  '/signin': 'Client Portal Access',
};

interface PageHeaderProps {
  title?: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  const pathname = usePathname();

  const finalTitle = title || routeTitles[pathname];

  // Only render if we have a route title or a manually passed prop
  if (!finalTitle) return null;

  return (
    <header className={styles.forgeHeader}>
      <h1 className={styles.forgeTitle}>{finalTitle}</h1>
      <div className={styles.sigilGlow}></div>
    </header>
  );
}
