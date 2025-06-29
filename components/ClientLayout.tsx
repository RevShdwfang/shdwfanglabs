'use client';

import { useState } from 'react';
import Aside from '@/components/aside/Aside';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };
   const closeAside = () => setIsAsideOpen(false);

  return (
    <div className="layout-container">
      {/* 🟥 Sidebar */}
      <aside className={`aside ${isAsideOpen ? 'open' : ''}`}>
        <Aside onLinkClick={closeAside} />
      </aside>
      
      {/* 🟦 Mobile nav toggler */}
      <div className="nav-toggler" onClick={toggleAside}>
        <span></span>
      </div>

      {/* 🟨 Overlay appears only when sidebar is open */}
      {isAsideOpen && (
        <div className="overlay" onClick={() => setIsAsideOpen(false)} />
      )}

      {/* 🟩 Main content */}
      <main className="layout-main">{children}</main>
    </div>
  );
}

