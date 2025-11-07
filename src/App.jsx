import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import { mockProducts, mockOrders } from './data/mockData';

import Login from './pages/login';
import Signup from './pages/signup';
import Layout from './components/layout/Layout';
import DashboardPage from './components/dashboard/DashboardPage';
import ProductsPage from './components/products/ProductsPage';
import OrdersPage from './components/orders/OrdersPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useLocalStorage('farmProducts', mockProducts);
  const [orders, setOrders] = useLocalStorage('farmOrders', mockOrders);

  const pendingOrders = (orders ?? []).filter(o => o.status === 'pending').length;
  const totalRevenue = (orders ?? []).reduce((sum, o) => sum + o.total, 0).toFixed(2);

  const stats = {
    revenue: totalRevenue,
    revenueChange: 17.3,
    activeProducts: products.length,
    totalOrders: orders.length,
    pendingOrders
  };

  return (
    <Router>
      <Routes>
        {/* Auth Routes - Accessible to everyone */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Signup setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />

        {/* Protected Dashboard Routes with Layout */}
        <Route
          element={
            isAuthenticated ? (
              <Layout productCount={products.length} pendingOrders={pendingOrders} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route path="/dashboard" element={<DashboardPage stats={stats} orders={orders} products={products} />} />
          <Route path="/products" element={<ProductsPage products={products} setProducts={setProducts} />} />
          <Route path="/orders" element={<OrdersPage orders={orders} setOrders={setOrders} />} />
        </Route>

        {/* Redirect root to dashboard or login */}
        <Route path="/" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />} />
      </Routes>
    </Router>
  );
}

export default App;