import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, LogOut } from 'lucide-react';

export default function Sidebar({ productCount, pendingOrders }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">FD</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">FarmDirect</h1>
            <p className="text-xs text-gray-600">Farmer</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <p className="text-xs font-semibold text-gray-500 mb-3">Navigation</p>
        
        <button
          onClick={() => navigate('/dashboard')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
            isActive('/dashboard')
              ? 'bg-green-50 text-green-700 font-medium'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <LayoutDashboard size={20} />
          <span>Overview</span>
        </button>

        <button
          onClick={() => navigate('/products')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
            isActive('/products')
              ? 'bg-green-50 text-green-700 font-medium'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Package size={20} />
          <span>Products</span>
          <span className="ml-auto bg-green-600 text-white text-xs rounded-full px-2 py-0.5">
            {productCount}
          </span>
        </button>

        <button
          onClick={() => navigate('/orders')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            isActive('/orders')
              ? 'bg-green-50 text-green-700 font-medium'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <ShoppingCart size={20} />
          <span>Orders</span>
          <span className="ml-auto bg-yellow-500 text-white text-xs rounded-full px-2 py-0.5">
            {pendingOrders}
          </span>
        </button>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="mb-3">
          <p className="text-sm font-medium text-gray-900">kokob</p>
          <p className="text-xs text-gray-600">kokob@gmail.com</p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}