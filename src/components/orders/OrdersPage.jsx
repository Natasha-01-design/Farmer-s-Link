import React, { useState } from 'react'; 
import OrderFilters from './OrderFilters';
import OrderCard from './OrderCard';

export default function OrdersPage({ orders, setOrders }) {
  const [filter, setFilter] = useState('all');

  const filteredOrders = filter === 'all'
    ? (orders ?? []) 
    : (orders ?? []).filter(o => o.status === filter);

  const handleConfirm = (id) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: 'confirmed' } : o));
  };

  return (
    <>
      <OrderFilters filter={filter} setFilter={setFilter} orders={orders} />
      <div className="space-y-6">
        {filteredOrders.map(order => (
          <OrderCard key={order.id} order={order} onConfirm={handleConfirm} />
        ))}
      </div>
    </>
  );
}