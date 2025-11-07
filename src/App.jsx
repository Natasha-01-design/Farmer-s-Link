import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { mockProducts, mockOrders } from './data/mockData';

import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import DashboardPage from './components/dashboard/DashboardPage';
import ProductsPage from './components/products/ProductsPage';
import OrdersPage from './components/orders/OrdersPage';


function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [products, setProducts] = useLocalStorage('farmProducts', mockProducts);
  const [orders, setOrders] = useLocalStorage('farmOrders', mockOrders);

  const pendingOrders = (orders ?? []).filter(o => o.status === 'pending').length; // FIXED: Added safety check for orders
  const totalRevenue = (orders ?? []).reduce((sum, o) => sum + o.total, 0).toFixed(2); // FIXED: Added safety check for orders

  const stats = {
    revenue: totalRevenue,
    revenueChange: 17.3,
    activeProducts: products.length,
    totalOrders: orders.length,
    pendingOrders
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        productCount={products.length}
        pendingOrders={pendingOrders}
      />
      <div className="flex-1 overflow-auto">
        <Header currentPage={currentPage} />
        <main className="p-8">
          {currentPage === 'dashboard' && <DashboardPage stats={stats} orders={orders} products={products} />}
          {currentPage === 'products' && <ProductsPage products={products} setProducts={setProducts} />}
          {currentPage === 'orders' && <OrdersPage orders={orders} setOrders={setOrders} />}
        </main>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/signup";
import Login from "./pages/login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
