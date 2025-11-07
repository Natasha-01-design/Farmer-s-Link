import { Edit, Trash2 } from 'lucide-react';
import { useToast } from '../../hooks/Toasthook';

export default function ProductCard({ product, onEdit, onDelete }) {
  const { success } = useToast();

  const handleEdit = () => {
    onEdit(product);
    success(`Editing "${product.name}"...`);
  };

  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
        <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          Stock: {product.stock}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{product.category}</p>

        {product.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        )}

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-green-600">Ksh {product.price}</p>
            <p className="text-xs text-gray-500">per {product.unit || 'unit'}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 rounded-lg transition-colors font-medium"
          >
            <Edit size={18} />
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 py-2 rounded-lg transition-colors font-medium"
          >
            <Trash2 size={18} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}