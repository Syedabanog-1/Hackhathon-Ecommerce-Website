'use client';

import { usePathname } from 'next/navigation';
import { AdminHeader } from '@/components/AdminHeader';
import { AdminSidebar } from '@/components/AdminSidsebar';


export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname.startsWith('/sign-in');
  const isStudio = pathname.startsWith('/studio');
  const studioAndSignIn = !isHome && !isStudio;

  return (
    <div className="min-h-screen">
      {studioAndSignIn && <AdminHeader />}
      <div className="flex">
        {studioAndSignIn && <AdminSidebar />}
        <main className="flex-1 bg-muted/40">{children}</main>
      </div>
    </div>
  );
}
