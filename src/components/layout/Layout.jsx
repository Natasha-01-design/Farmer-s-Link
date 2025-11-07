import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ productCount, pendingOrders }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Fixed */}
      <Sidebar
        productCount={productCount}
        pendingOrders={pendingOrders}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - Sticky */}
        <Header />

        {/* Page Content - Scrollable */}
        <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}