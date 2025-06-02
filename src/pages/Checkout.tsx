
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('stripe');

  const planType = new URLSearchParams(location.search).get('plan');
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    if (!user.id || !planType) {
      navigate('/register');
    }
  }, [user, planType, navigate]);

  const planDetails = {
    pro: {
      name: 'Pro',
      price: 29.90,
      features: ['10 projetos por mês', 'Todos os templates', 'Suporte prioritário', 'Customização avançada']
    },
    business: {
      name: 'Business',
      price: 80.00,
      features: ['Projetos ilimitados', 'Templates exclusivos', 'Suporte 24/7', 'White label', 'API access']
    }
  };

  const currentPlan = planDetails[planType as keyof typeof planDetails];

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Simular processamento de pagamento
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Atualizar usuário com novo plano
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex((u: any) => u.id === user.id);
      
      if (userIndex !== -1) {
        users[userIndex].plan_type = planType;
        users[userIndex].monthly_limit = planType === 'pro' ? 10 : -1;
        users[userIndex].subscription_active = true;
        users[userIndex].subscription_date = new Date().toISOString();
        
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('user', JSON.stringify(users[userIndex]));
      }

      toast({
        title: "Pagamento aprovado!",
        description: `Bem-vindo ao plano ${currentPlan?.name}! Sua assinatura está ativa.`,
      });

      navigate('/generator');
    } catch (error) {
      toast({
        title: "Erro no pagamento",
        description: "Tente novamente ou entre em contato com o suporte.",
        variant: "destructive"
      });
    }

    setLoading(false);
  };

  if (!currentPlan) {
    return <div>Plano não encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Finalizar Assinatura</h1>
          <p className="text-gray-600">Complete seu pagamento para ativar o plano {currentPlan.name}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Resumo do Plano */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Plano {currentPlan.name}
                <Badge variant="default">Escolhido</Badge>
              </CardTitle>
              <CardDescription>
                R$ {currentPlan.price.toFixed(2)}/mês
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {currentPlan.features.map((feature, index) => (
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
                    R$ {currentPlan.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pagamento */}
          <Card>
            <CardHeader>
              <CardTitle>Método de Pagamento</CardTitle>
              <CardDescription>Escolha como deseja pagar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <label className="flex items-center p-4 border rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="stripe"
                    checked={paymentMethod === 'stripe'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <CreditCard className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">Cartão de Crédito</div>
                    <div className="text-sm text-gray-500">Via Stripe - Seguro e confiável</div>
                  </div>
                </label>
                
                <label className="flex items-center p-4 border rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="mercadopago"
                    checked={paymentMethod === 'mercadopago'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <CreditCard className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">Mercado Pago</div>
                    <div className="text-sm text-gray-500">PIX, Cartão, Boleto</div>
                  </div>
                </label>
              </div>

              <Button 
                onClick={handlePayment} 
                className="w-full" 
                size="lg"
                disabled={loading}
              >
                {loading ? 'Processando...' : `Pagar R$ ${currentPlan.price.toFixed(2)}`}
              </Button>

              <div className="text-xs text-gray-500 text-center">
                Pagamento seguro. Cancele a qualquer momento.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
