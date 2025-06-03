
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, BarChart3 } from 'lucide-react';

const ActivityCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividade da Plataforma</CardTitle>
        <CardDescription>Métricas de uso e engajamento (dados de exemplo)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Projetos por Plano</h3>
              <Activity className="w-4 h-4 text-gray-500" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Freemium</span>
                <span className="text-sm font-medium">240</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Pro</span>
                <span className="text-sm font-medium">60</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Business</span>
                <span className="text-sm font-medium">20</span>
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Média de Projetos</h3>
              <BarChart3 className="w-4 h-4 text-gray-500" />
            </div>
            <div className="text-2xl font-bold text-blue-600">
              2.1
            </div>
            <p className="text-sm text-gray-500">projetos por usuário</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
