
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Star, Zap, ArrowLeft, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { userPlans } from '@/types/user';

const Subscription = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, userProfile, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(false);
  
  const searchParams = new URLSearchParams(location.search);
  const selectedPlanFromUrl = searchParams.get('plan') || 'pro';
  
  useEffect(() => {
    if (!authLoading && !user) {
      navigate(`/login?plan=${selectedPlanFromUrl}`);
    }
  }, [user, authLoading, navigate, selectedPlanFromUrl]);

  const handleSubscribe = async (planType: string) => {
    if (!user) {
      toast({
        title: "Login necessário",
        description: "Faça login para continuar com a assinatura",
        variant: "destructive"
      });
      navigate(`/login?plan=${planType}`);
      return;
    }

    if (planType === 'freemium') {
      navigate('/generator');
      return;
    }

    setLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { planType }
      });

      if (error) {
        console.error('Checkout error:', error);
        toast({
          title: "Erro ao criar checkout",
          description: "Tente novamente em alguns instantes",
          variant: "destructive"
        });
        return;
      }

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Erro na assinatura",
        description: "Tente novamente mais tarde",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Escolha seu plano
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comece grátis e evolua conforme sua necessidade. Todos os planos incluem 
            frontend + backend Supabase completo.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {userPlans.map((plan) => {
            const isSelected = plan.id === selectedPlanFromUrl;
            const isPopular = plan.id === 'pro';
            
            return (
              <Card 
                key={plan.id} 
                className={`relative transition-all duration-300 ${
                  isSelected 
                    ? 'border-2 border-blue-500 scale-105 shadow-xl' 
                    : isPopular 
                      ? 'border-2 border-purple-300 shadow-lg' 
                      : 'border border-gray-200 hover:shadow-lg'
                }`}
              >
                {isPopular && !isSelected && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500">
                    Mais Popular
                  </Badge>
                )}
                {isSelected && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    Plano Selecionado
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className="flex items-center justify-center mb-4">
                    {plan.id === 'freemium' && <Zap className="w-8 h-8 text-green-500" />}
                    {plan.id === 'pro' && <Star className="w-8 h-8 text-blue-500" />}
                    {plan.id === 'business' && <Crown className="w-8 h-8 text-purple-500" />}
                  </div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold mb-2">
                    {plan.price === 0 ? (
                      <span className="text-green-600">Grátis</span>
                    ) : (
                      <>
                        <span className="text-gray-900">R$ {plan.price.toFixed(2)}</span>
                        <span className="text-lg font-normal text-gray-500">/mês</span>
                      </>
                    )}
                  </div>
                  <CardDescription className="text-base">
                    {plan.monthlyLimit === -1 ? 'Projetos ilimitados' : `${plan.monthlyLimit} projetos por mês`}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-3 text-lg font-semibold ${
                      isSelected
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : plan.id === 'pro'
                          ? 'bg-purple-600 hover:bg-purple-700 text-white'
                          : plan.id === 'business'
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                    onClick={() => handleSubscribe(plan.id)}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processando...
                      </>
                    ) : (
                      <>
                        {plan.price === 0 ? 'Começar Grátis' : 'Assinar Agora'}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Todos os planos incluem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Frontend + Backend</h4>
              <p className="text-gray-600">React + TypeScript + Supabase completo</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">400+ Templates</h4>
              <p className="text-gray-600">Soluções prontas para todas as áreas</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Suporte 24/7</h4>
              <p className="text-gray-600">Ajuda sempre que precisar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
