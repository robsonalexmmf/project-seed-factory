
import { useState } from 'react';

interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: 'default' | 'destructive';
  action?: React.ReactNode;
}

let toastCount = 0;
let globalToastSetter: ((toasts: Toast[]) => void) | null = null;

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  
  // Register the global setter
  globalToastSetter = setToasts;

  const dismiss = (toastId: string) => {
    setToasts(prev => prev.filter(t => t.id !== toastId));
  };

  return { toasts, dismiss };
};

export const toast = ({ title, description, variant = 'default' }: Omit<Toast, 'id'>) => {
  const id = (++toastCount).toString();
  const newToast: Toast = {
    id,
    title,
    description,
    variant
  };
  
  if (globalToastSetter) {
    globalToastSetter(prev => [...prev, newToast]);
  }
  
  // Simular toast notification
  console.log(`Toast: ${title} - ${description}`);
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    if (globalToastSetter) {
      globalToastSetter(prev => prev.filter(t => t.id !== id));
    }
  }, 3000);
};
