import React from 'react'; 
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ children, currentPage, setCurrentPage, productCount, pendingOrders }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Fixed */}
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        productCount={productCount}
        pendingOrders={pendingOrders}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - Sticky */}
        <Header currentPage={currentPage} />

        {/* Page Content - Scrollable */}
        <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}