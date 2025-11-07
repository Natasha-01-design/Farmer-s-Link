// src/components/orders/OrderFilters.jsx
import React from 'react'; // FIXED: Added React import

export default function OrderFilters({ filter, setFilter, orders }) {
  const counts = {
    all: (orders ?? []).length, // FIXED: Added safety check for orders
    pending: (orders ?? []).filter(o => o.status === 'pending').length, // FIXED: Added safety check for orders
    confirmed: (orders ?? []).filter(o => o.status === 'confirmed').length, // FIXED: Added safety check for orders
    completed: (orders ?? []).filter(o => o.status === 'completed').length // FIXED: Added safety check for orders
  };

  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      {(['all', 'pending', 'confirmed', 'completed']).map(status => (
        <button
          key={status}
          onClick={() => setFilter(status)}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            filter === status
              ? status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                status === 'completed' ? 'bg-green-100 text-green-800' :
                'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)} ({counts[status]})
        </button>
      ))}
    </div>
  );
}