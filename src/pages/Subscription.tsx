import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Star, Zap, RefreshCw, Settings, Rocket } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const Subscription = () => {
  const navigate = useNavigate();
  const { user, userProfile, loading: authLoading } = useAuth();
  const [subscriptionData, setSubscriptionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const initializeSubscription = async () => {
      if (authLoading) return;

      if (user) {
        await checkSubscription();
      } else {
        setSubscriptionData({ subscribed: false, subscription_tier: null });
        setLoading(false);
      }
    };

    initializeSubscription();
  }, [user, authLoading]);

  const checkSubscription = async () => {
    if (!user) return;
    
    setRefreshing(true);
    try {
      const { data, error } = await supabase.functions.invoke('check-subscription');
      
      if (error) {
        console.error('Erro ao verificar assinatura:', error);
        return;
      }

      setSubscriptionData(data);
      console.log('Status da assinatura:', data);
    } catch (error) {
      console.error('Erro ao verificar assinatura:', error);
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  };

  const handleManageSubscription = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal');
      
      if (error) {
        throw new Error(error.message);
      }

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Erro ao abrir portal:', error);
      toast({
        title: "Erro",
        description: "Não foi possível abrir o portal de gerenciamento.",
        variant: "destructive"
      });
    }
  };

  const plans = [
    {
      id: 'pro',
      name: 'Pro',
      price: 29.90,
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      features: [
        '10 projetos por mês',
        'Todos os templates',
        'Suporte prioritário',
        'Customização avançada',
        'Frontend + Backend completo',
        'Supabase incluído'
      ],
      popular: true
    },
    {
      id: 'business',
      name: 'Business',
      price: 79.90,
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Projetos ilimitados',
        'Templates exclusivos',
        'Suporte 24/7',
        'White label',
        'API access',
        'Consultoria técnica',
        'Deploy automático'
      ],
      popular: false
    }
  ];

  const handlePlanSelect = (planId: string) => {
    if (!user) {
      navigate(`/register?plan=${planId}`);
      return;
    }

    navigate(`/checkout?plan=${planId}`);
  };

  const isCurrentPlan = (planId: string) => {
    return subscriptionData?.subscribed && subscriptionData?.subscription_tier === planId;
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rocket className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Idealyze</h1>
          </div>
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Carregando informações...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Rocket className="h-10 w-10 text-white" />
            <h1 className="text-3xl font-bold text-white">Idealyze</h1>
          </div>
          <h1 className="text-5xl font-black text-white mb-6">
            Escolha Seu Plano
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Desbloqueie todo o potencial do gerador de SaaS
          </p>

          {/* Status da Assinatura */}
          {user && userProfile && subscriptionData && (
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
              <div className="flex items-center justify-center space-x-4 text-white">
                <div className="text-center">
                  <div className="text-sm text-blue-100">Status atual:</div>
                  <div className="font-bold text-lg">
                    {subscriptionData.subscribed ? (
                      <span className="text-green-300">
                        Plano {subscriptionData.subscription_tier === 'pro' ? 'Pro' : 'Business'} Ativo
                      </span>
                    ) : (
                      <span className="text-yellow-300">
                        {userProfile.plan_type === 'freemium' ? 'Plano Freemium' : 'Sem assinatura ativa'}
                      </span>
                    )}
                  </div>
                  {subscriptionData.subscription_end && (
                    <div className="text-sm text-blue-100 mt-1">
                      Renova em: {new Date(subscriptionData.subscription_end).toLocaleDateString('pt-BR')}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  {user && (
                    <Button
                      onClick={() => checkSubscription()}
                      disabled={refreshing}
                      variant="outline"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                    >
                      <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                      Atualizar
                    </Button>
                  )}
                  {subscriptionData.subscribed && (
                    <Button
                      onClick={handleManageSubscription}
                      variant="outline"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Gerenciar
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            const isCurrentUserPlan = isCurrentPlan(plan.id);
            
            return (
              <Card 
                key={plan.id}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  isCurrentUserPlan 
                    ? 'ring-4 ring-green-500 shadow-2xl' 
                    : plan.popular 
                      ? 'ring-4 ring-blue-500 shadow-2xl' 
                      : 'shadow-xl'
                }`}
              >
                {isCurrentUserPlan && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-center py-2 font-bold">
                      SEU PLANO ATUAL
                    </div>
                  </div>
                )}
                
                {!isCurrentUserPlan && plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-2 font-bold">
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                <CardHeader className={`${isCurrentUserPlan || plan.popular ? 'pt-16' : 'pt-8'} text-center`}>
                  <div className={`bg-gradient-to-r ${plan.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <CardTitle className="text-3xl font-black">
                    {plan.name}
                  </CardTitle>
                  
                  <CardDescription className="text-lg">
                    <span className="text-4xl font-black text-gray-900">
                      R$ {plan.price.toFixed(2)}
                    </span>
                    <span className="text-gray-600">/mês</span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full py-4 text-lg font-bold bg-gradient-to-r ${plan.color} hover:opacity-90 transition-all duration-300`}
                    size="lg"
                    disabled={isCurrentUserPlan}
                  >
                    {isCurrentUserPlan ? 'Plano Atual' : `Escolher ${plan.name}`}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Comparison */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Por que fazer upgrade?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Mais Projetos</h4>
              <p className="text-gray-600">
                Gere até 10 projetos por mês no Pro ou ilimitados no Business
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Templates Premium</h4>
              <p className="text-gray-600">
                Acesso a todos os templates profissionais e exclusivos
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Suporte Prioritário</h4>
              <p className="text-gray-600">
                Suporte técnico especializado e resposta prioritária
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/generator" className="text-blue-600 hover:underline text-lg">
            ← Voltar ao Gerador
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
