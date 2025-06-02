
import { useState } from 'react';

interface Toast {
  title: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (toast: Toast) => {
    setToasts(prev => [...prev, toast]);
    
    // Simular toast notification
    console.log(`Toast: ${toast.title} - ${toast.description}`);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.slice(1));
    }, 3000);
  };

  return { toast, toasts };
};
