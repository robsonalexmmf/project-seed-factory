
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

const UsersTabContent = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gerenciamento de Usuários</CardTitle>
        <CardDescription>Funcionalidade temporariamente desabilitada devido a problemas de conexão com banco</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Usuários serão carregados em breve</h3>
          <p className="text-gray-500">Estamos resolvendo problemas de conectividade</p>
          <Button 
            className="mt-4" 
            onClick={() => navigate('/user-management')}
          >
            Ir para Página de Usuários
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsersTabContent;
