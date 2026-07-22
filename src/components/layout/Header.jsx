import { Bell, Menu } from 'lucide-react';

export default function Header({ currentPage, onMenuClick, isMobile }) {
  const titles = {
    dashboard: 'Dashboard Overview',
    products: 'Your Products',
    orders: 'Customer Orders'
  };

  const subtitles = {
    dashboard: "Welcome back! Here's what's happening with your farm today.",
    products: 'Manage your farm products and inventory',
    orders: 'Manage incoming orders from your customers'
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between sticky top-0 z-10 lg:px-8">
      <div className="flex items-center gap-4">
        {isMobile && (
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        )}
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
            {titles[currentPage] || 'Welcome'}
          </h2>
          <p className="text-sm text-gray-600 mt-1 hidden sm:block">
            {subtitles[currentPage] || 'FarmDirect Dashboard'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-semibold text-lg">
          K
        </div>
      </div>
    </header>
  );
}