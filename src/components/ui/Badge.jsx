import React from 'react'; 
export default function Badge({ status }) {
  const colors = {
    pending: 'bg-yellow-200 text-yellow-800',
    confirmed: 'bg-blue-200 text-blue-800',
    completed: 'bg-green-200 text-green-800'
  };
  return <span className={`text-xs px-3 py-1 rounded-full ${colors[status] || 'bg-gray-200 text-gray-800'}`}>{status}</span>;
}