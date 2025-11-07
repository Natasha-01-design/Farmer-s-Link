import { Check } from 'lucide-react';
import Badge from '../ui/Badge';

export default function OrderCard({ order, onConfirm }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-bold text-gray-900 text-lg">{order.id}</h3>
            <Badge status={order.status} />
          </div>
          <p className="text-sm text-gray-600">Email: {order.customer} ({order.email})</p>
          <p className="text-sm text-gray-600">Placed on {order.date}</p>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        {order.items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-600">Ksh{item.price.toFixed(2)} per unit</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <p className="font-bold text-gray-900 text-lg">Total Amount</p>
        <p className="font-bold text-gray-900 text-xl">${order.total.toFixed(2)}</p>
      </div>

      {order.status === 'pending' && (
        <button
          onClick={() => onConfirm(order.id)}
          className="w-full mt-4 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          <Check size={20} /> Confirm Order
        </button>
      )}
    </div>
  );
}