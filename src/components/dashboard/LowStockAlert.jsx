
import React from 'react'; 

export default function LowStockAlert({ products }) {
  const lowStock = (products ?? []).filter(p => p.stock < 50).slice(0, 3); 
  if (lowStock.length === 0) return null;

  return (
    <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Low Stock Alert</h3>
      <p className="text-sm text-gray-600 mb-4">Products running low on inventory</p>
      {lowStock.map(p => (
        <div key={p.id} className="bg-white rounded-lg p-4 mb-3 flex items-center justify-between hover:bg-orange-50 transition-colors">
          <p className="font-medium text-gray-900">{p.name}</p>
          <span className="text-orange-600 font-semibold">{p.stock} left</span>
        </div>
      ))}
    </div>
  );
}