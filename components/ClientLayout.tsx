"use client";

import { usePathname } from "next/navigation";
import TopNav from "@/components/modules/TopNav";
import Footer from "@/components/modules/Footer";
import PageHeader from "@/components/modules/PageHeader/PageHeader";

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
