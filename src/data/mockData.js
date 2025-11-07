export const mockProducts = [
  { id: 1, name: 'Organic Tomatoes', category: 'Vegetables', description: 'Fresh, vine-ripened organic tomatoes', price: 150, unit: 'per kg', stock: 150, image: 'https://images.unsplash.com/photo-1546470427-227a33ca528f?w=400&h=300&fit=crop' },
  { id: 2, name: 'Farm Fresh Eggs', category: 'Dairy & Eggs', description: 'Free-range chicken eggs', price: 420, unit: 'per tray', stock: 80, image: 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=400&h=300&fit=crop' },
  { id: 3, name: 'Organic Carrots', category: 'Vegetables', description: 'Crispy fresh carrots', price: 120, unit: 'per kg', stock: 45, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop' }
];

export const mockOrders = [
  { id: 'ORD-2024-003', customer: 'Sarah Johnson', email: 'sarah.j@email.com', date: '07/11/2024', status: 'pending', items: [{ name: 'Organic Tomatoes', price: 150, quantity: 2 }], total: 300 },
  { id: 'ORD-2024-004', customer: 'Mike Chen', email: 'mike.chen@email.com', date: '07/11/2024', status: 'pending', items: [{ name: 'Farm Fresh Eggs', price: 420, quantity: 3 }, { name: 'Organic Tomatoes', price: 150, quantity: 1 }], total: 1410 },
  { id: 'ORD-2024-002', customer: 'Emily Davis', email: 'emily.d@email.com', date: '06/11/2024', status: 'confirmed', items: [{ name: 'Organic Carrots', price: 120, quantity: 4 }], total: 480 },
  { id: 'ORD-2024-001', customer: 'John Smith', email: 'john.s@email.com', date: '05/11/2024', status: 'completed', items: [{ name: 'Farm Fresh Eggs', price: 420, quantity: 2 }], total: 840 }
];

export const categories = ['Vegetables', 'Fruits', 'Dairy & Eggs', 'Grains & Cereals', 'Meat & Poultry', 'Herbs & Spices'];