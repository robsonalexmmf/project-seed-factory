
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserDashboard from '@/components/UserDashboard';
import NewAdminDashboard from '@/components/NewAdminDashboard';
import { useAuth } from '@/hooks/useAuth';

const Dashboard = () => {
  const navigate = useNavigate();
  const { userProfile, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      // Se não está autenticado, redireciona para login
      if (!userProfile) {
        navigate('/login', { replace: true });
        return;
      }
      
      // Se for admin, redireciona para o dashboard admin
      if (userProfile.plan_type === 'admin') {
        navigate('/admin', { replace: true });
        return;
      }
    }
  }, [userProfile, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-lg text-gray-600">Carregando dashboard...</div>
        </div>
      </div>
    );
  }
  
  // Exibe o dashboard de usuário para não admins (freemium, pro e business)
  return <UserDashboard />;
};

export default Dashboard;
