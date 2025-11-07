import { Package, ShoppingCart, Bell } from 'lucide-react'; 
import StatsCard from './StatsCard';
import RecentOrders from './RecentOrders';
import LowStockAlert from './LowStockAlert';



export default function DashboardPage({ stats, orders, products }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Total Revenue" value={`KSh ${stats.revenue}`} icon="KSh" color="green" change={stats.revenueChange} />
        <StatsCard title="Active Products" value={stats.activeProducts} icon={Package} color="blue" />
        <StatsCard title="Total Orders" value={stats.totalOrders} icon={ShoppingCart} color="purple" />
        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 hover:shadow-lg transition-shadow">
          <StatsCard title="Pending Orders" value={stats.pendingOrders} icon={Bell} color="yellow" />
        </div>
      </div>

      <RecentOrders orders={orders} />
      <LowStockAlert products={products} />
    </>
  );
}
