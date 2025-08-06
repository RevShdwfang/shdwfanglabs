"use client";

import { usePathname } from "next/navigation";
import PageHeader from "@/components/shared/PageHeader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="page-wrapper">
      <main className="layout-main">
        {!isHome && <PageHeader />}
        {children}
      </main>
    </div>
  );
}
