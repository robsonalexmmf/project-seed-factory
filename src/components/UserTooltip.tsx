
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Crown, Zap, Timer, Star, User, ArrowRight } from 'lucide-react';
import { UserProfile } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';

interface UserTooltipProps {
  userProfile: UserProfile;
  children: React.ReactNode;
}

const UserTooltip: React.FC<UserTooltipProps> = ({ userProfile, children }) => {
  const getProjectsRemaining = () => {
    if (userProfile.plan_type === 'admin' || userProfile.plan_type === 'business') return -1;
    return Math.max(0, userProfile.monthly_limit - userProfile.current_month_projects);
  };

  const projectsRemaining = getProjectsRemaining();
  const hasReachedLimit = projectsRemaining === 0 && userProfile.plan_type !== 'admin' && userProfile.plan_type !== 'business';

  const getPlanIcon = () => {
    switch (userProfile.plan_type) {
      case 'admin':
        return <Crown className="w-4 h-4 text-yellow-500" />;
      case 'business':
        return <Star className="w-4 h-4 text-purple-500" />;
      case 'pro':
        return <Zap className="w-4 h-4 text-blue-500" />;
      default:
        return <Timer className="w-4 h-4 text-green-500" />;
    }
  };

  const getPlanColor = () => {
    switch (userProfile.plan_type) {
      case 'admin':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'business':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'pro':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      default:
        return 'bg-green-100 text-green-800 border-green-300';
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent className="w-80 p-4 bg-white border-2 border-gray-200 shadow-xl">
          <div className="space-y-4">
            {/* Header do usuário */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">
                  {userProfile.full_name || 'Usuário'}
                </h3>
                <p className="text-sm text-gray-600">{userProfile.email}</p>
              </div>
            </div>

            {/* Plano atual */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Plano Atual:</span>
              <Badge className={`flex items-center space-x-1 ${getPlanColor()}`}>
                {getPlanIcon()}
                <span className="capitalize font-bold">{userProfile.plan_type}</span>
              </Badge>
            </div>

            {/* Uso de projetos */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Projetos este mês:</span>
                <span className="font-bold text-gray-900">
                  {userProfile.current_month_projects}
                  {userProfile.plan_type === 'freemium' && ' / 2'}
                  {userProfile.plan_type === 'pro' && ' / 10'}
                  {(userProfile.plan_type === 'business' || userProfile.plan_type === 'admin') && ' / ∞'}
                </span>
              </div>
              
              {/* Barra de progresso */}
              {userProfile.plan_type !== 'admin' && userProfile.plan_type !== 'business' && (
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all ${
                      hasReachedLimit ? 'bg-red-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'
                    }`}
                    style={{ 
                      width: `${Math.min(100, (userProfile.current_month_projects / userProfile.monthly_limit) * 100)}%` 
                    }}
                  ></div>
                </div>
              )}

              {/* Status */}
              <div className="text-center">
                {projectsRemaining === -1 ? (
                  <span className="text-green-600 font-bold text-sm">
                    ✨ Projetos Ilimitados
                  </span>
                ) : hasReachedLimit ? (
                  <span className="text-red-600 font-bold text-sm">
                    🚫 Limite Atingido
                  </span>
                ) : (
                  <span className="text-blue-600 font-bold text-sm">
                    🎯 {projectsRemaining} projetos restantes
                  </span>
                )}
              </div>
            </div>

            {/* Botão de upgrade se necessário */}
            {((userProfile.plan_type === 'freemium' && projectsRemaining <= 1) || 
              (userProfile.plan_type === 'pro' && projectsRemaining <= 2) || 
              hasReachedLimit) && (
              <Link to="/subscription">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold">
                  <Crown className="w-4 h-4 mr-2" />
                  Fazer Upgrade
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default UserTooltip;
