
import { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, XCircle, X } from 'lucide-react';

export default function Toast({ message, type = 'success', duration = 3000, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const bgColor = {
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
    warning: 'bg-yellow-50 border-yellow-200'
  }[type];

  const textColor = {
    success: 'text-green-800',
    error: 'text-red-800',
    warning: 'text-yellow-800'
  }[type];

  const iconColor = {
    success: 'text-green-600',
    error: 'text-red-600',
    warning: 'text-yellow-600'
  }[type];

  const Icon = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle
  }[type];

  return (
    <div className={`fixed top-4 right-4 max-w-md border ${bgColor} rounded-lg p-4 shadow-lg flex items-start gap-3 z-50 animate-slide-in`}>
      <Icon className={`${iconColor} flex-shrink-0 mt-0.5`} size={20} />
      <div className="flex-1">
        <p className={`${textColor} font-medium`}>{message}</p>
      </div>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose?.();
        }}
        className={`${textColor} hover:opacity-70 transition-opacity flex-shrink-0`}
      >
        <X size={18} />
      </button>
    </div>
  );
}

export function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="fixed top-4 right-4 space-y-2 z-50">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}