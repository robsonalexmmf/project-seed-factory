
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  FileText, 
  Settings,
  Crown,
  Activity,
  BarChart3,
  UserPlus,
  LogOut
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface DashboardStats {
  totalUsers: number;
  newUsersThisMonth: number;
  totalRevenue: number;
  projectsGenerated: number;
  planDistribution: {
    freemium: number;
    pro: number;
    business: number;
    admin: number;
  };
}

interface RecentUser {
  id: string;
  email: string;
  full_name?: string;
  plan_type: string;
  created_at: string;
  projects_generated: number;
}

const NewAdminDashboard = () => {
  const navigate = useNavigate();
  const { userProfile, loading: authLoading, signOut } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    newUsersThisMonth: 0,
    totalRevenue: 0,
    projectsGenerated: 0,
    planDistribution: { freemium: 0, pro: 0, business: 0, admin: 0 }
  });
  const [recentUsers, setRecentUsers] = useState<RecentUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;

    if (!userProfile || userProfile.plan_type !== 'admin') {
      navigate('/login');
      return;
    }

    loadDashboardData();
  }, [userProfile, authLoading, navigate]);

  const loadDashboardData = async () => {
    try {
      // Carregar todos os usuários
      const { data: users, error } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      // Calcular estatísticas
      const newUsersThisMonth = users?.filter(user => {
        const userDate = new Date(user.created_at);
        return userDate.getMonth() === currentMonth && userDate.getFullYear() === currentYear;
      }).length || 0;

      const totalRevenue = users?.reduce((total, user) => {
        if (user.plan_type === 'pro') return total + 29.90;
        if (user.plan_type === 'business') return total + 79.90;
        return total;
      }, 0) || 0;

      const projectsGenerated = users?.reduce((total, user) => total + (user.projects_generated || 0), 0) || 0;

      const planDistribution = {
        freemium: users?.filter(u => u.plan_type === 'freemium').length || 0,
        pro: users?.filter(u => u.plan_type === 'pro').length || 0,
        business: users?.filter(u => u.plan_type === 'business').length || 0,
        admin: users?.filter(u => u.plan_type === 'admin').length || 0
      };

      setStats({
        totalUsers: users?.length || 0,
        newUsersThisMonth,
        totalRevenue,
        projectsGenerated,
        planDistribution
      });

      // Últimos 10 usuários
      setRecentUsers(users?.slice(0, 10) || []);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar dados do dashboard",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateUserPlan = async (userId: string, newPlan: string) => {
    try {
      const monthlyLimit = newPlan === 'freemium' ? 2 : newPlan === 'pro' ? 10 : -1;

      const { error } = await supabase
        .from('users')
        .update({ 
          plan_type: newPlan,
          monthly_limit: monthlyLimit,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId);

      if (error) throw error;

      toast({
        title: "Plano atualizado",
        description: `Usuário alterado para plano ${newPlan}`,
      });

      loadDashboardData(); // Recarregar dados
    } catch (error) {
      console.error('Erro ao atualizar plano:', error);
      toast({
        title: "Erro",
        description: "Erro ao atualizar plano do usuário",
        variant: "destructive"
      });
    }
  };

  const getPlanBadgeVariant = (plan: string) => {
    switch (plan) {
      case 'business': return 'default';
      case 'pro': return 'secondary';
      case 'admin': return 'destructive';
      default: return 'outline';
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-lg text-gray-600">Carregando dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard Administrativo</h1>
              <p className="text-gray-600">Painel de controle completo da plataforma</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/user-management')}>
                <Users className="w-4 h-4 mr-2" />
                Gerenciar Usuários
              </Button>
              <Button variant="outline" onClick={() => navigate('/reports')}>
                <BarChart3 className="w-4 h-4 mr-2" />
                Relatórios
              </Button>
              <Button variant="outline" onClick={signOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="users">Usuários</TabsTrigger>
            <TabsTrigger value="revenue">Receita</TabsTrigger>
            <TabsTrigger value="activity">Atividade</TabsTrigger>
          </TabsList>

          {/* Visão Geral */}
          <TabsContent value="overview" className="space-y-6">
            {/* Cards de Métricas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">{stats.totalUsers}</div>
                  <p className="text-xs text-muted-foreground">
                    +{stats.newUsersThisMonth} este mês
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Receita Mensal</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{formatCurrency(stats.totalRevenue)}</div>
                  <p className="text-xs text-muted-foreground">
                    Receita recorrente estimada
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Projetos Gerados</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">{stats.projectsGenerated}</div>
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
                <CardDescription>Análise dos tipos de assinatura</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(stats.planDistribution).map(([plan, count]) => (
                    <div key={plan} className="text-center p-4 border rounded-lg">
                      <div className="text-3xl font-bold mb-2 text-gray-700">{count}</div>
                      <Badge variant={getPlanBadgeVariant(plan)} className="mb-2">
                        {plan.charAt(0).toUpperCase() + plan.slice(1)}
                      </Badge>
                      <div className="text-sm text-gray-500">
                        {stats.totalUsers > 0 ? ((count / stats.totalUsers) * 100).toFixed(1) : 0}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Usuários */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Usuários Recentes</CardTitle>
                <CardDescription>Últimos usuários cadastrados na plataforma</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium">{user.full_name || user.email}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                        <div className="text-xs text-gray-400">
                          Cadastrado em {new Date(user.created_at).toLocaleDateString('pt-BR')}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <Badge variant={getPlanBadgeVariant(user.plan_type)}>
                            {user.plan_type}
                          </Badge>
                          <div className="text-xs text-gray-500 mt-1">
                            {user.projects_generated || 0} projetos
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateUserPlan(user.id, 'pro')}
                            disabled={user.plan_type === 'pro'}
                          >
                            <Crown className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateUserPlan(user.id, 'business')}
                            disabled={user.plan_type === 'business'}
                          >
                            <UserPlus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Receita */}
          <TabsContent value="revenue" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Receita Pro</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">
                    {formatCurrency(stats.planDistribution.pro * 29.90)}
                  </div>
                  <p className="text-sm text-gray-500">
                    {stats.planDistribution.pro} assinantes Pro
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Receita Business</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">
                    {formatCurrency(stats.planDistribution.business * 79.90)}
                  </div>
                  <p className="text-sm text-gray-500">
                    {stats.planDistribution.business} assinantes Business
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Receita Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">
                    {formatCurrency(stats.totalRevenue)}
                  </div>
                  <p className="text-sm text-gray-500">
                    Receita mensal total
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Atividade */}
          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Atividade da Plataforma</CardTitle>
                <CardDescription>Métricas de uso e engajamento</CardDescription>
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
                        <span className="text-sm font-medium">
                          {recentUsers.filter(u => u.plan_type === 'freemium')
                            .reduce((total, u) => total + (u.projects_generated || 0), 0)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Pro</span>
                        <span className="text-sm font-medium">
                          {recentUsers.filter(u => u.plan_type === 'pro')
                            .reduce((total, u) => total + (u.projects_generated || 0), 0)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Business</span>
                        <span className="text-sm font-medium">
                          {recentUsers.filter(u => u.plan_type === 'business')
                            .reduce((total, u) => total + (u.projects_generated || 0), 0)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">Média de Projetos</h3>
                      <BarChart3 className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      {stats.totalUsers > 0 ? (stats.projectsGenerated / stats.totalUsers).toFixed(1) : 0}
                    </div>
                    <p className="text-sm text-gray-500">projetos por usuário</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NewAdminDashboard;
