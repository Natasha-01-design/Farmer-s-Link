import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, LogOut, X } from 'lucide-react';
import { UserContext } from '../../App';

export default function Sidebar({ productCount, pendingOrders, isOpen, isMobile, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, handleLogout } = useContext(UserContext);

  const isActive = (path) => location.pathname === path;

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/login');
  };

  const handleNavClick = () => {
    if (isMobile) onClose();
  };

  // Handle escape key to close sidebar on mobile
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobile && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobile, isOpen, onClose]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobile, isOpen]);

  if (!isMobile && !isOpen) return null;

  return (
    <>
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out ${
          isMobile
            ? isOpen
              ? 'translate-x-0'
              : '-translate-x-full'
            : 'translate-x-0'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="p-6 border-b border-gray-200 flex items-center justify-between lg:justify-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌱</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">FarmDirect</h1>
              <p className="text-xs text-gray-600">{user?.role === 'farmer' ? 'Farmer' : 'farmer'}</p>
            </div>
          </div>
          {isMobile && (
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close sidebar"
            >
              <X size={24} />
            </button>
          )}
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <p className="text-xs font-semibold text-gray-500 mb-3">Navigation</p>
          
          <button
            onClick={() => { navigate('/dashboard'); handleNavClick(); }}
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
            onClick={() => { navigate('/products'); handleNavClick(); }}
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
            onClick={() => { navigate('/orders'); handleNavClick(); }}
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
            <p className="text-sm font-medium text-gray-900">{user?.fullName || 'User'}</p>
            <p className="text-xs text-gray-600">{user?.email || 'user@example.com'}</p>
          </div>
          <button
            onClick={handleLogoutClick}
            className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}