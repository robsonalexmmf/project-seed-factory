
import React, { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeSubscriptions: 0,
    monthlyRevenue: 0,
    projectsGenerated: 0
  });

  useEffect(() => {
    // Verificar se é admin
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user.id || user.plan_type !== 'admin') {
      navigate('/login');
      return;
    }

    // Carregar dados dos usuários
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(allUsers);

    // Calcular estatísticas
    const totalUsers = allUsers.length;
    const activeSubscriptions = allUsers.filter((u: any) => u.plan_type !== 'freemium').length;
    const monthlyRevenue = allUsers.reduce((total: number, u: any) => {
      if (u.plan_type === 'pro') return total + 29.90;
      if (u.plan_type === 'business') return total + 80.00;
      return total;
    }, 0);
    const projectsGenerated = allUsers.reduce((total: number, u: any) => total + (u.projects_generated || 0), 0);

    setStats({
      totalUsers,
      activeSubscriptions,
      monthlyRevenue,
      projectsGenerated
    });
  }, [navigate]);

  const recentUsers = users.slice(-5).reverse();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard Admin</h1>
              <p className="text-gray-600">Gerencie usuários e monitore a plataforma</p>
              <div className="mt-2">
                <Badge variant="outline" className="text-xs">
                  Credenciais Admin: admin@admin.com / 320809eu
                </Badge>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" onClick={() => navigate('/generator')}>
                <Activity className="w-4 h-4 mr-2" />
                Gerar Projeto SaaS
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </Button>
            </div>
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
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                Usuários cadastrados na plataforma
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
                Planos Pro e Business ativos
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Mensal</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {stats.monthlyRevenue.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                Receita recorrente mensal
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Projetos Gerados</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.projectsGenerated}</div>
              <p className="text-xs text-muted-foreground">
                Total de projetos criados
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
                {recentUsers.map((user: any) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{user.full_name || user.email}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                      <div className="text-xs text-gray-400">
                        {new Date(user.created_at).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    <Badge 
                      variant={user.plan_type === 'business' ? 'default' : user.plan_type === 'pro' ? 'secondary' : 'outline'}
                    >
                      {user.plan_type}
                    </Badge>
                  </div>
                ))}
                {recentUsers.length === 0 && (
                  <div className="text-center text-gray-500 py-8">
                    Nenhum usuário cadastrado ainda
                  </div>
                )}
              </div>
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
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => navigate('/user-management')}
              >
                <Users className="w-4 h-4 mr-2" />
                Gerenciar Usuários ({stats.totalUsers})
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => navigate('/reports')}
              >
                <BarChart className="w-4 h-4 mr-2" />
                Relatórios Detalhados
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => {
                  const users = JSON.parse(localStorage.getItem('users') || '[]');
                  const csvContent = [
                    'Email,Nome,Plano,Projetos Gerados,Data de Cadastro',
                    ...users.map((user: any) => 
                      `${user.email},${user.full_name || ''},${user.plan_type},${user.projects_generated || 0},${user.created_at}`
                    )
                  ].join('\n');
                  
                  const blob = new Blob([csvContent], { type: 'text/csv' });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `usuarios_${new Date().toISOString().split('T')[0]}.csv`;
                  a.click();
                  window.URL.revokeObjectURL(url);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Exportar Dados
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => window.open('https://dashboard.stripe.com', '_blank')}
              >
                <Shield className="w-4 h-4 mr-2" />
                Configurar Pagamentos
              </Button>
              <Button 
                className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => navigate('/generator')}
              >
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
                <div className="text-3xl font-bold text-gray-600 mb-2">
                  {users.filter((u: any) => u.plan_type === 'freemium').length}
                </div>
                <div className="text-sm font-medium">Freemium</div>
                <div className="text-xs text-gray-500">Plano gratuito</div>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {users.filter((u: any) => u.plan_type === 'pro').length}
                </div>
                <div className="text-sm font-medium">Pro (R$ 29,90)</div>
                <div className="text-xs text-gray-500">10 projetos/mês</div>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {users.filter((u: any) => u.plan_type === 'business').length}
                </div>
                <div className="text-sm font-medium">Business (R$ 80,00)</div>
                <div className="text-xs text-gray-500">Projetos ilimitados</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
