
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity,
  Settings,
  Download,
  BarChart,
  Shield
} from 'lucide-react';

const AdminDashboard = () => {
  // Mock data - em produção viria do Supabase
  const stats = {
    totalUsers: 1254,
    activeSubscriptions: 342,
    monthlyRevenue: 15680.50,
    projectsGenerated: 2847
  };

  const recentUsers = [
    { id: 1, name: 'João Silva', email: 'joao@email.com', plan: 'pro', created: '2024-01-15' },
    { id: 2, name: 'Maria Santos', email: 'maria@email.com', plan: 'business', created: '2024-01-14' },
    { id: 3, name: 'Pedro Costa', email: 'pedro@email.com', plan: 'freemium', created: '2024-01-13' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard Admin</h1>
              <p className="text-gray-600">Gerencie usuários e monitore a plataforma</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Settings className="w-4 h-4 mr-2" />
              Configurações
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +12% em relação ao mês passado
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assinaturas Ativas</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeSubscriptions}</div>
              <p className="text-xs text-muted-foreground">
                +8% em relação ao mês passado
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Mensal</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {stats.monthlyRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
              <p className="text-xs text-muted-foreground">
                +15% em relação ao mês passado
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Projetos Gerados</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.projectsGenerated.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +23% em relação ao mês passado
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Users */}
          <Card>
            <CardHeader>
              <CardTitle>Usuários Recentes</CardTitle>
              <CardDescription>
                Últimos usuários cadastrados na plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                      <div className="text-xs text-gray-400">{user.created}</div>
                    </div>
                    <Badge 
                      variant={user.plan === 'business' ? 'default' : user.plan === 'pro' ? 'secondary' : 'outline'}
                    >
                      {user.plan}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Ver Todos os Usuários
              </Button>
            </CardContent>
          </Card>

          {/* Admin Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Ações Administrativas</CardTitle>
              <CardDescription>
                Ferramentas de gestão da plataforma
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Gerenciar Usuários
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChart className="w-4 h-4 mr-2" />
                Relatórios Detalhados
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Exportar Dados
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Shield className="w-4 h-4 mr-2" />
                Logs do Sistema
              </Button>
              <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white">
                <Activity className="w-4 h-4 mr-2" />
                Gerar Projeto SaaS
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Plans Overview */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Distribuição por Planos</CardTitle>
            <CardDescription>
              Visão geral dos usuários por tipo de plano
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border rounded-lg">
                <div className="text-3xl font-bold text-gray-600 mb-2">847</div>
                <div className="text-sm font-medium">Freemium</div>
                <div className="text-xs text-gray-500">67.5% dos usuários</div>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">284</div>
                <div className="text-sm font-medium">Pro (R$ 29,90)</div>
                <div className="text-xs text-gray-500">22.6% dos usuários</div>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">123</div>
                <div className="text-sm font-medium">Business (R$ 80,00)</div>
                <div className="text-xs text-gray-500">9.8% dos usuários</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
