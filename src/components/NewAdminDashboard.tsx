import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminStatsCards from '@/components/admin/AdminStatsCards';
import PlanDistributionCard from '@/components/admin/PlanDistributionCard';
import RevenueCards from '@/components/admin/RevenueCards';
import ActivityCard from '@/components/admin/ActivityCard';
import UsersTabContent from '@/components/admin/UsersTabContent';
import { supabase } from '@/integrations/supabase/client';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;

    if (!userProfile) {
      navigate('/login', { replace: true });
      return;
    }

    if (userProfile.plan_type !== 'admin') {
      navigate('/generator', { replace: true });
      return;
    }

    const loadAdminData = async () => {
      setLoading(true);
      try {
        // Fetch users
        const { data: users, error: usersError } = await supabase
          .from('users')
          .select('*');

        if (usersError) {
          console.error('Error fetching users:', usersError);
          toast({
            title: 'Error fetching users',
            description: usersError.message,
            variant: 'destructive',
          });
          return;
        }

        // Calculate stats
        const totalUsers = users.length;
        const newUsersThisMonth = users.filter(user => {
          const createdAt = new Date(user.created_at);
          const now = new Date();
          return createdAt.getMonth() === now.getMonth() && createdAt.getFullYear() === now.getFullYear();
        }).length;
        const projectsGenerated = users.reduce((total, user) => total + (user.projects_generated || 0), 0);

        // Fetch sales
        const { data: sales, error: salesError } = await supabase
          .from('sales')
          .select('*');

        if (salesError) {
          console.error('Error fetching sales:', salesError);
          toast({
            title: 'Error fetching sales',
            description: salesError.message,
            variant: 'destructive',
          });
          return;
        }

        // Calculate total revenue
        const totalRevenue = sales.reduce((total, sale) => total + sale.amount, 0);

        // Calculate plan distribution
        const planDistribution = {
          freemium: users.filter(user => user.plan_type === 'freemium').length,
          pro: users.filter(user => user.plan_type === 'pro').length,
          business: users.filter(user => user.plan_type === 'business').length,
          admin: users.filter(user => user.plan_type === 'admin').length,
        };

        // Update state
        setStats({
          totalUsers,
          newUsersThisMonth,
          totalRevenue,
          projectsGenerated,
          planDistribution,
        });
      } catch (error) {
        console.error('Error loading admin data:', error);
        toast({
          title: 'Error loading admin data',
          description: error instanceof Error ? error.message : 'Unknown error',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    loadAdminData();
  }, [userProfile, authLoading, navigate]);

  const updateUserPlan = async (userId: string, newPlan: string) => {
    toast({
      title: "Função temporariamente desabilitada",
      description: "Esta função será reativada em breve",
      variant: "destructive"
    });
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

  if (!userProfile || userProfile.plan_type !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader onSignOut={signOut} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="users">Usuários</TabsTrigger>
            <TabsTrigger value="revenue">Receita</TabsTrigger>
            <TabsTrigger value="activity">Atividade</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <AdminStatsCards stats={stats} />
            <PlanDistributionCard
              planDistribution={stats.planDistribution}
              totalUsers={stats.totalUsers}
            />
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <UsersTabContent />
            {/* Funcionalidade temporariamente desabilitada devido a problemas de conexão com banco. */}
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <RevenueCards
              planDistribution={stats.planDistribution}
              totalRevenue={stats.totalRevenue}
            />
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <ActivityCard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NewAdminDashboard;
