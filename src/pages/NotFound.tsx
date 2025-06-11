
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página não encontrada</h2>
        <p className="text-gray-600 mb-8">
          A página que você está procurando não existe ou foi removida.
        </p>
        <div className="flex flex-col space-y-3">
          <Button onClick={() => navigate('/')} className="w-full">
            Voltar à página inicial
          </Button>
          <Button onClick={() => navigate('/dashboard')} variant="outline" className="w-full">
            Ir para o Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
