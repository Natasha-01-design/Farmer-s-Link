import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ productCount, pendingOrders }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  const currentPage = location.pathname.split('/')[2] || 'dashboard';

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - Fixed on desktop, slide-over on mobile */}
      <Sidebar
        productCount={productCount}
        pendingOrders={pendingOrders}
        isOpen={sidebarOpen}
        isMobile={isMobile}
        onClose={closeSidebar}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Header - Sticky */}
        <Header currentPage={currentPage} onMenuClick={toggleSidebar} isMobile={isMobile} />

        {/* Page Content - Scrollable */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}