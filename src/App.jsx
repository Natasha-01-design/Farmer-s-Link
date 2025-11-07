import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import { mockProducts, mockOrders } from './data/mockData';

import Login from './pages/login';
import Signup from './pages/signup';
import Layout from './components/layout/Layout';
import DashboardPage from './components/dashboard/DashboardPage';
import ProductsPage from './components/products/ProductsPage';
import OrdersPage from './components/orders/OrdersPage';

export const UserContext = React.createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
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

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, handleLogout }}>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
              )
            }
          />
          <Route
            path="/signup"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Signup setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
              )
            }
          />

          {/* Dashboard Routes */}
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

          {/* Redirect root */}
          <Route path="/" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;