import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, BarChart3 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ActivityCard = () => {
  const [projectsPerPlan, setProjectsPerPlan] = useState({
    freemium: 0,
    pro: 0,
    business: 0,
  });
  const [averageProjectsPerUser, setAverageProjectsPerUser] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadActivityData = async () => {
      setLoading(true);
      try {
        // Fetch users
        const { data: users, error: usersError } = await supabase
          .from('users')
          .select('*');

        if (usersError) {
          console.error('Error fetching users:', usersError);
          return;
        }

        // Calculate projects per plan
        const freemiumProjects = users.filter(user => user.plan_type === 'freemium').reduce((total, user) => total + (user.projects_generated || 0), 0);
        const proProjects = users.filter(user => user.plan_type === 'pro').reduce((total, user) => total + (user.projects_generated || 0), 0);
        const businessProjects = users.filter(user => user.plan_type === 'business').reduce((total, user) => total + (user.projects_generated || 0), 0);

        setProjectsPerPlan({
          freemium: freemiumProjects,
          pro: proProjects,
          business: businessProjects,
        });

        // Calculate average projects per user
        const totalProjects = users.reduce((total, user) => total + (user.projects_generated || 0), 0);
        const averageProjectsPerUser = users.length > 0 ? totalProjects / users.length : 0;
        setAverageProjectsPerUser(averageProjectsPerUser);
      } catch (error) {
        console.error('Error loading activity data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadActivityData();
  }, []);

  return (
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
            {loading ? (
              <div>Carregando...</div>
            ) : (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Freemium</span>
                  <span className="text-sm font-medium">{projectsPerPlan.freemium}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Pro</span>
                  <span className="text-sm font-medium">{projectsPerPlan.pro}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Business</span>
                  <span className="text-sm font-medium">{projectsPerPlan.business}</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Média de Projetos</h3>
              <BarChart3 className="w-4 h-4 text-gray-500" />
            </div>
            {loading ? (
              <div>Carregando...</div>
            ) : (
              <>
                <div className="text-2xl font-bold text-blue-600">
                  {averageProjectsPerUser.toFixed(1)}
                </div>
                <p className="text-sm text-gray-500">projetos por usuário</p>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
