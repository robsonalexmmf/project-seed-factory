
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Crown, 
  Zap, 
  Star, 
  Timer, 
  TrendingUp, 
  Calendar,
  ArrowRight,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const UserDashboard = () => {
  const { userProfile } = useAuth();
  const navigate = useNavigate();

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dashboard...</p>
        </div>
      </div>
    );
  }

  const getProjectsRemaining = () => {
    if (userProfile.plan_type === 'admin' || userProfile.plan_type === 'business') return -1;
    return Math.max(0, userProfile.monthly_limit - userProfile.current_month_projects);
  };

  const getUsagePercentage = () => {
    if (userProfile.monthly_limit === -1) return 0;
    return Math.min(100, (userProfile.current_month_projects / userProfile.monthly_limit) * 100);
  };

  const projectsRemaining = getProjectsRemaining();
  const usagePercentage = getUsagePercentage();
  const isNearLimit = projectsRemaining <= 1 && projectsRemaining > 0;
  const hasExceededLimit = projectsRemaining === 0 && userProfile.plan_type !== 'business' && userProfile.plan_type !== 'admin';

  const getPlanIcon = () => {
    switch (userProfile.plan_type) {
      case 'admin': return <Crown className="w-6 h-6 text-yellow-500" />;
      case 'business': return <Star className="w-6 h-6 text-purple-500" />;
      case 'pro': return <Zap className="w-6 h-6 text-blue-500" />;
      default: return <Timer className="w-6 h-6 text-green-500" />;
    }
  };

  const getPlanColor = () => {
    switch (userProfile.plan_type) {
      case 'admin': return 'from-yellow-400 to-orange-500';
      case 'business': return 'from-purple-400 to-pink-500';
      case 'pro': return 'from-blue-400 to-cyan-500';
      default: return 'from-green-400 to-emerald-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard do Usuário
          </h1>
          <p className="text-gray-600">
            Bem-vindo, {userProfile.full_name || userProfile.email}! Acompanhe seu uso e gere projetos SaaS.
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Plan Status Card */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Plano Atual</CardTitle>
              {getPlanIcon()}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold capitalize mb-1">
                {userProfile.plan_type}
              </div>
              <p className="text-xs text-muted-foreground">
                {userProfile.plan_type === 'freemium' && 'Limite: 2 projetos/mês'}
                {userProfile.plan_type === 'pro' && 'Limite: 5 projetos/mês'}
                {(userProfile.plan_type === 'business' || userProfile.plan_type === 'admin') && 'Projetos ilimitados'}
              </p>
            </CardContent>
          </Card>

          {/* Usage Card */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Uso Mensal</CardTitle>
              <TrendingUp className="w-6 h-6 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">
                {userProfile.current_month_projects}
                {userProfile.monthly_limit !== -1 && ` / ${userProfile.monthly_limit}`}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    usagePercentage >= 100 ? 'bg-red-500' :
                    usagePercentage >= 80 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${Math.min(100, usagePercentage)}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground">
                Projetos gerados este mês
              </p>
            </CardContent>
          </Card>

          {/* Remaining Projects Card */}
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Projetos Restantes</CardTitle>
              <Calendar className="w-6 h-6 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">
                {projectsRemaining === -1 ? '∞' : projectsRemaining}
              </div>
              <p className="text-xs text-muted-foreground">
                {projectsRemaining === -1 ? 'Projetos ilimitados' : 'Projetos disponíveis'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Alert Messages */}
        {hasExceededLimit && (
          <Card className="border-2 border-red-200 bg-red-50 mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-red-800">
                    Limite de projetos atingido!
                  </h3>
                  <p className="text-red-600">
                    Você atingiu seu limite de {userProfile.monthly_limit} projetos mensais. 
                    Faça upgrade para continuar gerando projetos SaaS.
                  </p>
                </div>
                <Link to="/subscription">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Crown className="w-4 h-4 mr-2" />
                    Fazer Upgrade
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        {isNearLimit && !hasExceededLimit && (
          <Card className="border-2 border-yellow-200 bg-yellow-50 mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-8 h-8 text-yellow-500" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-yellow-800">
                    Quase no limite!
                  </h3>
                  <p className="text-yellow-600">
                    Você tem apenas {projectsRemaining} projeto{projectsRemaining === 1 ? '' : 's'} restante{projectsRemaining === 1 ? '' : 's'} este mês.
                    Considere fazer upgrade para ter mais projetos.
                  </p>
                </div>
                <Link to="/subscription">
                  <Button variant="outline" className="border-yellow-300 text-yellow-700 hover:bg-yellow-100">
                    Ver Planos
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Generate Project Card */}
          <Card className={`bg-gradient-to-r ${getPlanColor()} text-white`}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-6 h-6" />
                <span>Gerar Novo Projeto</span>
              </CardTitle>
              <CardDescription className="text-white/80">
                Crie um projeto SaaS completo com frontend + backend
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Projetos disponíveis:</span>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {projectsRemaining === -1 ? 'Ilimitado' : projectsRemaining}
                  </Badge>
                </div>
                <Button 
                  onClick={() => navigate('/generator')}
                  disabled={hasExceededLimit}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  {hasExceededLimit ? 'Limite Atingido' : 'Ir para Gerador'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upgrade Card */}
          <Card className="border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Crown className="w-6 h-6 text-purple-500" />
                <span>Upgrade de Plano</span>
              </CardTitle>
              <CardDescription>
                Desbloqueie mais projetos e recursos avançados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userProfile.plan_type === 'freemium' && (
                  <div className="text-sm text-gray-600">
                    • Pro: 5 projetos/mês por R$ 29,90<br/>
                    • Business: Projetos ilimitados por R$ 79,90
                  </div>
                )}
                {userProfile.plan_type === 'pro' && (
                  <div className="text-sm text-gray-600">
                    • Business: Projetos ilimitados por R$ 79,90<br/>
                    • Recursos exclusivos e suporte 24/7
                  </div>
                )}
                {(userProfile.plan_type === 'business' || userProfile.plan_type === 'admin') && (
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span>Você já tem o melhor plano!</span>
                  </div>
                )}
                <Link to="/subscription">
                  <Button 
                    className="w-full"
                    disabled={userProfile.plan_type === 'business' || userProfile.plan_type === 'admin'}
                  >
                    Ver Planos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Estatísticas Rápidas</CardTitle>
            <CardDescription>
              Resumo da sua atividade na plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {userProfile.projects_generated}
                </div>
                <div className="text-sm text-gray-500">Total de Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {userProfile.current_month_projects}
                </div>
                <div className="text-sm text-gray-500">Este Mês</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 capitalize">
                  {userProfile.plan_type}
                </div>
                <div className="text-sm text-gray-500">Plano Atual</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {new Date(userProfile.created_at).getFullYear()}
                </div>
                <div className="text-sm text-gray-500">Membro Desde</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
