import { useState } from 'react';
import { Plus } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { ToastContainer } from '../ui/Toast';
import { useToast } from '../../hooks/Toasthook';

export default function ProductsPage({ products, setProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { toasts, removeToast, success, error } = useToast();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddProduct = (newProduct) => {
    const product = {
      ...newProduct,
      id: Date.now()
    };
    setProducts([...products, product]);
    setEditingProduct(null);
    success(`"${newProduct.name}" has been added successfully!`);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    setEditingProduct(null);
    success(`"${updatedProduct.name}" has been updated successfully!`);
  };

  const handleDeleteProduct = (productId) => {
    const product = products.find(p => p.id === productId);
    if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      setProducts(products.filter(p => p.id !== productId));
      success(`"${product.name}" has been deleted successfully!`);
    }
  };

  const handleSaveProduct = (productData) => {
    try {
      if (editingProduct) {
        handleUpdateProduct({ ...productData, id: editingProduct.id });
      } else {
        handleAddProduct(productData);
      }
      setIsModalOpen(false);
    } catch (err) {
      error('Failed to save product. Please try again.');
    }
  };

  const handleOpenModal = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Toast Container */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600">{filteredProducts.length} products</p>
        </div>
        <button
          onClick={handleOpenModal}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
        >
          <Plus size={20} />
          Add Product
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No products found</p>
          <button
            onClick={handleOpenModal}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Add Your First Product
          </button>
        </div>
      )}

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={editingProduct}
        onSave={handleSaveProduct}
      />
    </div>
  );
}