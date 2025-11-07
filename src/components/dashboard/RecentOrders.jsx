import Badge from '../ui/Badge';

export default function RecentOrders({ orders }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Recent Orders</h3>
      <p className="text-sm text-gray-600 mb-6">Your most recent customer orders</p>
      <div className="space-y-4">
        {(orders ?? []).slice(0, 4).map(order => ( 
          <div key={order.id} className="bg-green-50 rounded-lg p-4 hover:bg-green-100 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {order.customer.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{order.id}</p>
                  <p className="text-sm text-gray-600">{order.customer}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">KSh {order.total.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <Badge status={order.status} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
