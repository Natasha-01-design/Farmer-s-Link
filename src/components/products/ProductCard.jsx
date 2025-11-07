
import React from 'react'; 
import { Edit2, Trash2 } from 'lucide-react';

export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all group">
      <div className="relative h-48 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="p-5">
        <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mb-3">
          {product.category}
        </span>
        <h3 className="font-bold text-gray-900 text-lg mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-gray-900">Ksh{product.price}</p>
            <p className="text-sm text-gray-600">{product.unit}</p>
          </div>
          <div className="text-right">
            <p className={`text-lg font-semibold ${product.stock < 50 ? 'text-orange-600' : 'text-green-600'}`}>
              {product.stock}
            </p>
            <p className="text-xs text-gray-600">in stock</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(product)}
            className="flex-1 flex items-center justify-center gap-2 bg-green-50 text-green-700 py-2 rounded-lg hover:bg-green-100 transition-colors"
          >
            <Edit2 size={16} /> Edit
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="flex items-center justify-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}