import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity,
  Settings,
  Download,
  BarChart,
  Shield,
  UserPlus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import UserProfile from './UserProfile';

interface AdminStats {
  totalUsers: number;
  activeSubscriptions: number;
  monthlyRevenue: number;
  projectsGenerated: number;
}

interface RecentUser {
  id: string;
  email: string;
  full_name?: string;
  plan_type: string;
  created_at: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { userProfile, loading: authLoading } = useAuth();
  const [users, setUsers] = useState<RecentUser[]>([]);
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    activeSubscriptions: 0,
    monthlyRevenue: 0,
    projectsGenerated: 0
  });
  const [loading, setLoading] = useState(true);
  const [addUserModalOpen, setAddUserModalOpen] = useState(false);
  const [newUserData, setNewUserData] = useState({
    email: '',
    fullName: '',
    password: '',
    planType: 'freemium'
  });
  const [addingUser, setAddingUser] = useState(false);

  useEffect(() => {
    if (authLoading) return;

    console.log('AdminDashboard - UserProfile:', userProfile);

    if (!userProfile) {
      console.log('No user profile, redirecting to login');
      navigate('/login');
      return;
    }

    if (userProfile.plan_type !== 'admin') {
      console.log('User is not admin, redirecting to generator');
      navigate('/generator');
      return;
    }

    loadAdminData();
  }, [userProfile, authLoading, navigate]);

  const loadAdminData = async () => {
    try {
      console.log('Loading admin data...');
      
      // Carregar todos os usuários
      const { data: allUsers, error: usersError } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false });

      console.log('Users query result:', { allUsers, usersError });

      if (usersError) {
        console.error('Error loading users:', usersError);
        toast({
          title: "Erro ao carregar usuários",
          description: usersError.message,
          variant: "destructive"
        });
        return;
      }

      setUsers(allUsers || []);

      // Calcular estatísticas
      const totalUsers = allUsers?.length || 0;
      const activeSubscriptions = allUsers?.filter(u => u.plan_type !== 'freemium').length || 0;
      const monthlyRevenue = allUsers?.reduce((total, u) => {
        if (u.plan_type === 'pro') return total + 29.90;
        if (u.plan_type === 'business') return total + 79.90;
        return total;
      }, 0) || 0;
      const projectsGenerated = allUsers?.reduce((total, u) => total + (u.projects_generated || 0), 0) || 0;

      setStats({
        totalUsers,
        activeSubscriptions,
        monthlyRevenue,
        projectsGenerated
      });

      console.log('Stats calculated:', {
        totalUsers,
        activeSubscriptions,
        monthlyRevenue,
        projectsGenerated
      });
    } catch (error) {
      console.error('Error loading admin data:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar dados administrativos",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const addNewUser = async () => {
    setAddingUser(true);
    
    try {
      // Criar usuário no Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: newUserData.email,
        password: newUserData.password,
        options: {
          data: {
            full_name: newUserData.fullName,
            plan_type: newUserData.planType
          }
        }
      });

      if (authError) throw authError;

      if (authData.user) {
        // Criar entrada na tabela users
        const monthlyLimit = newUserData.planType === 'freemium' ? 2 : 
                           newUserData.planType === 'pro' ? 10 : -1;

        const { error: userError } = await supabase
          .from('users')
          .insert({
            id: authData.user.id,
            email: newUserData.email,
            full_name: newUserData.fullName,
            plan_type: newUserData.planType,
            projects_generated: 0,
            monthly_limit: monthlyLimit
          });

        if (userError) throw userError;

        // Se for plano pago, criar entrada na tabela sales
        if (newUserData.planType === 'pro' || newUserData.planType === 'business') {
          const amount = newUserData.planType === 'pro' ? 29.90 : 79.90;
          
          const { error: salesError } = await supabase
            .from('sales')
            .insert({
              user_id: authData.user.id,
              amount: amount,
              plan_type: newUserData.planType,
              status: 'completed'
            });

          if (salesError) throw salesError;
        }

        toast({
          title: "Usuário criado com sucesso",
          description: `${newUserData.email} foi adicionado com plano ${newUserData.planType}`,
        });

        // Limpar formulário e fechar modal
        setNewUserData({
          email: '',
          fullName: '',
          password: '',
          planType: 'freemium'
        });
        setAddUserModalOpen(false);

        // Recarregar dados
        await loadAdminData();
      }
    } catch (error) {
      console.error('Error creating user:', error);
      toast({
        title: "Erro ao criar usuário",
        description: error instanceof Error ? error.message : "Erro desconhecido",
        variant: "destructive"
      });
    } finally {
      setAddingUser(false);
    }
  };

  const exportData = async () => {
    try {
      const { data: users, error } = await supabase
        .from('users')
        .select('*');

      if (error) throw error;

      const csvContent = [
        'Email,Nome,Plano,Projetos Gerados,Data de Cadastro',
        ...(users || []).map((user: any) => 
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
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  const recentUsers = users.slice(0, 5);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg">Carregando dashboard admin...</div>
          <div className="text-sm text-gray-500 mt-2">Verificando permissões...</div>
        </div>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg">Acesso negado</div>
          <div className="text-sm text-gray-500 mt-2">Redirecionando para login...</div>
        </div>
      </div>
    );
  }

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
            <div className="flex items-center space-x-3">
              <UserProfile />
              <Dialog open={addUserModalOpen} onOpenChange={setAddUserModalOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Adicionar Usuário
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Adicionar Novo Usuário</DialogTitle>
                    <DialogDescription>
                      Crie uma nova conta de usuário diretamente pelo painel admin.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={newUserData.email}
                        onChange={(e) => setNewUserData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="usuario@exemplo.com"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="fullName">Nome Completo</Label>
                      <Input
                        id="fullName"
                        value={newUserData.fullName}
                        onChange={(e) => setNewUserData(prev => ({ ...prev, fullName: e.target.value }))}
                        placeholder="Nome do usuário"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Senha</Label>
                      <Input
                        id="password"
                        type="password"
                        value={newUserData.password}
                        onChange={(e) => setNewUserData(prev => ({ ...prev, password: e.target.value }))}
                        placeholder="Mínimo 6 caracteres"
                        minLength={6}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="planType">Tipo de Plano</Label>
                      <Select 
                        value={newUserData.planType} 
                        onValueChange={(value) => setNewUserData(prev => ({ ...prev, planType: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o plano" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="freemium">Freemium</SelectItem>
                          <SelectItem value="pro">Pro (R$ 29,90)</SelectItem>
                          <SelectItem value="business">Business (R$ 79,90)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setAddUserModalOpen(false)}>
                      Cancelar
                    </Button>
                    <Button 
                      onClick={addNewUser} 
                      disabled={addingUser || !newUserData.email || !newUserData.password}
                    >
                      {addingUser ? 'Criando...' : 'Criar Usuário'}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
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
                {recentUsers.map((user) => (
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
                  {users.filter(u => u.plan_type === 'freemium').length}
                </div>
                <div className="text-sm font-medium">Freemium</div>
                <div className="text-xs text-gray-500">Plano gratuito</div>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {users.filter(u => u.plan_type === 'pro').length}
                </div>
                <div className="text-sm font-medium">Pro (R$ 29,90)</div>
                <div className="text-xs text-gray-500">10 projetos/mês</div>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {users.filter(u => u.plan_type === 'business').length}
                </div>
                <div className="text-sm font-medium">Business (R$ 79,90)</div>
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
