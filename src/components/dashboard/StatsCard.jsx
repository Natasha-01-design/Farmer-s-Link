import React from 'react'; 
export default function StatsCard({ title, value, color, change, icon }) { 
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${color}-100 rounded-lg flex items-center justify-center`}>
          {typeof icon === 'string' ? ( 
            <span className={`${color}-600 text-xl font-bold`}>{icon}</span>
          ) : (
            React.createElement(icon, { className: `${color}-600`, size: 24 }) 
          )}
        </div>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
      {change && <p className="text-sm text-green-600">+{change}% From last month</p>}
    </div>
  );
}
