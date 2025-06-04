
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, CreditCard, ArrowLeft, Rocket } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user, userProfile, loading: authLoading } = useAuth();

  const planType = new URLSearchParams(location.search).get('plan');

  useEffect(() => {
    if (!planType) {
      console.log('No plan specified, redirecting to subscription');
      navigate('/subscription');
    }
  }, [planType, navigate]);

  // Redirect to login if not authenticated after loading is complete
  useEffect(() => {
    if (!authLoading && !user) {
      console.log('User not authenticated, redirecting to login with plan:', planType);
      navigate(`/login?plan=${planType}`);
    }
  }, [user, authLoading, navigate, planType]);

  const planDetails = {
    pro: {
      name: 'Pro',
      price: 29.90,
      features: ['10 projetos por mês', 'Todos os templates', 'Suporte prioritário', 'Customização avançada']
    },
    business: {
      name: 'Business',
      price: 79.90,
      features: ['Projetos ilimitados', 'Templates exclusivos', 'Suporte 24/7', 'White label', 'API access']
    }
  };

  const currentPlan = planDetails[planType as keyof typeof planDetails];

  const handlePayment = async () => {
    if (!user) {
      toast({
        title: "Login necessário",
        description: "Você precisa estar logado para fazer o checkout.",
        variant: "destructive"
      });
      navigate(`/login?plan=${planType}`);
      return;
    }

    setLoading(true);

    try {
      console.log('Iniciando processo de checkout para plano:', planType);
      console.log('Usuário:', user);

      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        console.error('Erro ao obter sessão:', sessionError);
        throw new Error('Erro ao verificar sessão de autenticação');
      }

      if (!session || !session.access_token) {
        console.error('Nenhuma sessão ativa encontrada');
        toast({
          title: "Sessão expirada",
          description: "Por favor, faça login novamente para continuar.",
          variant: "destructive"
        });
        navigate(`/login?plan=${planType}`);
        return;
      }

      console.log('Sessão encontrada, chamando edge function...');

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { planType },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error('Erro no checkout:', error);
        
        let errorMessage = "Erro desconhecido no checkout";
        if (error.message?.includes("Authentication error")) {
          errorMessage = "Erro de autenticação. Faça login novamente.";
          navigate(`/login?plan=${planType}`);
          return;
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        throw new Error(errorMessage);
      }

      if (data?.url) {
        console.log('Redirecionando para Stripe checkout:', data.url);
        
        toast({
          title: "Redirecionando para pagamento",
          description: "Você será redirecionado para o Stripe para completar o pagamento.",
        });
        
        // Abrir Stripe checkout em nova aba
        window.open(data.url, '_blank');
        
        // Opcional: redirecionar de volta para subscription após alguns segundos
        setTimeout(() => {
          navigate('/subscription');
        }, 2000);
      } else {
        throw new Error('URL de checkout não foi retornada');
      }
    } catch (error) {
      console.error('Erro no processo de checkout:', error);
      toast({
        title: "Erro no checkout",
        description: error instanceof Error ? error.message : "Tente novamente ou entre em contato com o suporte.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  // Show loading while authentication is being checked
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rocket className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Idealyze</h1>
          </div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-center">Verificando autenticação...</div>
        </div>
      </div>
    );
  }

  // If user is not authenticated, this will be handled by the useEffect above
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rocket className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Idealyze</h1>
          </div>
          <div className="text-center">Redirecionando para login...</div>
        </div>
      </div>
    );
  }

  if (!currentPlan) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rocket className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Idealyze</h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plano não encontrado</h2>
          <Button onClick={() => navigate('/subscription')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para planos
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rocket className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Idealyze</h1>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Finalizar Assinatura</h1>
          <p className="text-gray-600">Complete seu pagamento para ativar o plano {currentPlan?.name}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Plano {currentPlan?.name}
                <Badge variant="default">Escolhido</Badge>
              </CardTitle>
              <CardDescription>
                R$ {currentPlan?.price.toFixed(2)}/mês
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {currentPlan?.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total mensal:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    R$ {currentPlan?.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Método de Pagamento</CardTitle>
              <CardDescription>Pagamento seguro via Stripe</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center p-4 border rounded-lg bg-blue-50 border-blue-200">
                  <CreditCard className="w-5 h-5 mr-3 text-blue-600" />
                  <div>
                    <div className="font-medium text-blue-900">Stripe Checkout</div>
                    <div className="text-sm text-blue-700">Cartão de crédito, PIX, boleto</div>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handlePayment} 
                className="w-full" 
                size="lg"
                disabled={loading || !user}
              >
                {loading ? 'Processando...' : `Pagar R$ ${currentPlan?.price.toFixed(2)}`}
              </Button>

              {user && (
                <div className="text-center text-sm text-green-600">
                  Logado como: {user.email}
                </div>
              )}

              <div className="text-xs text-gray-500 text-center">
                Pagamento seguro processado pelo Stripe. Cancele a qualquer momento.
              </div>

              <Button 
                variant="outline"
                onClick={() => navigate('/subscription')}
                className="w-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para planos
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
