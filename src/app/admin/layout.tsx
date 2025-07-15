
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { LayoutDashboard, LogOut, MessageSquare, Package, FileImage, Settings, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const sessionActive = sessionStorage.getItem('isAdminAuthenticated') === 'true';
    setIsAuthenticated(sessionActive);

    const isAuthPage = pathname === '/admin/login' || pathname === '/admin/register';

    if (!sessionActive && !isAuthPage) {
      router.push('/admin/login');
    }
    
    setLoading(false);
  }, [router, pathname]);


  const handleLogout = () => {
    sessionStorage.removeItem('isAdminAuthenticated');
    setIsAuthenticated(false);
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-4 p-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    );
  }

  if (!isAuthenticated && (pathname !== '/admin/login' && pathname !== '/admin/register')) {
    return null; // The useEffect hook will handle the redirect.
  }

  if (pathname === '/admin/login' || pathname === '/admin/register') {
    return <>{children}</>;
  }

  const navItems = [
    { href: '/admin/dashboard', label: 'لوحة التحكم الرئيسية', icon: LayoutDashboard },
    { href: '/admin/dashboard/products', label: 'إدارة المنتجات', icon: Package },
    { href: '/admin/dashboard/orders', label: 'إدارة الطلبات', icon: ShoppingCart },
    { href: '/admin/dashboard/messages', label: 'رسائل العملاء', icon: MessageSquare },
    { href: '/admin/dashboard/content', label: 'إدارة المحتوى', icon: FileImage },
    { href: '/admin/dashboard/settings', label: 'إعدادات عامة', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-muted/40">
      <aside className="hidden w-64 flex-col border-e bg-card p-4 md:flex">
        <nav className="flex flex-1 flex-col gap-2">
          {navItems.map(item => (
            <Button key={item.href} asChild variant={pathname.startsWith(item.href) ? 'default' : 'ghost'} className="justify-start gap-2">
              <Link href={item.href}>
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div>
          <Button variant="outline" className="w-full justify-start gap-2" onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
            تسجيل الخروج
          </Button>
        </div>
      </aside>
      <main className="flex-1 p-4 md:p-6">{children}</main>
    </div>
  );
}

export default AdminLayout;
