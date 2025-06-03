
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
    totalUsers: 150,
    newUsersThisMonth: 25,
    totalRevenue: 4500,
    projectsGenerated: 320,
    planDistribution: { freemium: 120, pro: 25, business: 4, admin: 1 }
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (authLoading) return;

    if (!userProfile) {
      navigate('/login');
      return;
    }

    setLoading(false);
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
