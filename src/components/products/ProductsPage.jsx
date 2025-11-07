import { useState } from 'react'; 
import { Plus } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function ProductsPage({ products, setProducts }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleSave = (data) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...data } : p));
    } else {
      setProducts([...products, { id: Date.now(), ...data }]);
    }
    setEditingProduct(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const openEdit = (product) => {
    setEditingProduct(product);
    setModalOpen(true);
  };

  return (
    <>
      <div className="flex justify-end mb-6">
        <button
          onClick={() => { setEditingProduct(null); setModalOpen(true); }}
          className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          <Plus size={20} /> Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(products ?? []).map(product => ( // FIXED: Added safety check for products
          <ProductCard
            key={product.id}
            product={product}
            onEdit={openEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <ProductModal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setEditingProduct(null); }}
        product={editingProduct}
        onSave={handleSave}
      />
    </>
  );
}