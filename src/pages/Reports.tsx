
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, TrendingUp, Download, Calendar, DollarSign } from 'lucide-react';

const Reports = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalUsers: 0,
    newUsersThisMonth: 0,
    totalRevenue: 0,
    projectsThisMonth: 0,
    planDistribution: { freemium: 0, pro: 0, business: 0 }
  });
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    // Verificar se é admin
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user.id || user.plan_type !== 'admin') {
      navigate('/login');
      return;
    }

    // Carregar dados
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const newUsersThisMonth = users.filter((u: any) => {
      const userDate = new Date(u.created_at);
      return userDate.getMonth() === currentMonth && userDate.getFullYear() === currentYear;
    }).length;

    const totalRevenue = users.reduce((total: number, u: any) => {
      if (u.plan_type === 'pro') return total + 29.90;
      if (u.plan_type === 'business') return total + 80.00;
      return total;
    }, 0);

    const projectsThisMonth = users.reduce((total: number, u: any) => total + (u.projects_generated || 0), 0);

    const planDistribution = {
      freemium: users.filter((u: any) => u.plan_type === 'freemium').length,
      pro: users.filter((u: any) => u.plan_type === 'pro').length,
      business: users.filter((u: any) => u.plan_type === 'business').length
    };

    setStats({
      totalUsers: users.length,
      newUsersThisMonth,
      totalRevenue,
      projectsThisMonth,
      planDistribution
    });

    // Simular atividade recente
    const activity = users.slice(-10).map((user: any) => ({
      id: user.id,
      action: 'Novo cadastro',
      user: user.email,
      date: user.created_at,
      plan: user.plan_type
    }));

    setRecentActivity(activity);
  }, [navigate]);

  const exportData = () => {
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
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/admin')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Relatórios Detalhados</h1>
                <p className="text-gray-600">Análise completa da plataforma</p>
              </div>
            </div>
            <Button onClick={exportData} className="bg-green-600 hover:bg-green-700">
              <Download className="w-4 h-4 mr-2" />
              Exportar CSV
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Métricas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Novos Usuários (Mês)</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.newUsersThisMonth}</div>
              <p className="text-xs text-muted-foreground">
                Cadastros este mês
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">R$ {stats.totalRevenue.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                Receita mensal estimada
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Projetos Gerados</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{stats.projectsThisMonth}</div>
              <p className="text-xs text-muted-foreground">
                Total de projetos criados
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                {stats.totalUsers > 0 
                  ? (((stats.planDistribution.pro + stats.planDistribution.business) / stats.totalUsers) * 100).toFixed(1)
                  : 0}%
              </div>
              <p className="text-xs text-muted-foreground">
                Freemium para pago
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Distribuição de Planos */}
        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Planos</CardTitle>
            <CardDescription>
              Análise detalhada dos tipos de assinatura
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border rounded-lg">
                <div className="text-4xl font-bold text-gray-600 mb-2">
                  {stats.planDistribution.freemium}
                </div>
                <Badge variant="outline" className="mb-2">Freemium</Badge>
                <div className="text-sm text-gray-500">
                  {stats.totalUsers > 0 
                    ? ((stats.planDistribution.freemium / stats.totalUsers) * 100).toFixed(1)
                    : 0}% dos usuários
                </div>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stats.planDistribution.pro}
                </div>
                <Badge variant="secondary" className="mb-2">Pro</Badge>
                <div className="text-sm text-gray-500">
                  {stats.totalUsers > 0 
                    ? ((stats.planDistribution.pro / stats.totalUsers) * 100).toFixed(1)
                    : 0}% dos usuários
                </div>
                <div className="text-xs text-green-600 font-medium">
                  R$ {(stats.planDistribution.pro * 29.90).toFixed(2)}/mês
                </div>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {stats.planDistribution.business}
                </div>
                <Badge className="mb-2">Business</Badge>
                <div className="text-sm text-gray-500">
                  {stats.totalUsers > 0 
                    ? ((stats.planDistribution.business / stats.totalUsers) * 100).toFixed(1)
                    : 0}% dos usuários
                </div>
                <div className="text-xs text-green-600 font-medium">
                  R$ {(stats.planDistribution.business * 80.00).toFixed(2)}/mês
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Atividade Recente */}
        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>
              Últimas ações na plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity: any) => (
                <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">{activity.action}</div>
                    <div className="text-sm text-gray-500">{activity.user}</div>
                    <div className="text-xs text-gray-400">
                      {new Date(activity.date).toLocaleString('pt-BR')}
                    </div>
                  </div>
                  <Badge variant={activity.plan === 'business' ? 'default' : activity.plan === 'pro' ? 'secondary' : 'outline'}>
                    {activity.plan}
                  </Badge>
                </div>
              ))}
              {recentActivity.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  Nenhuma atividade recente
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
