
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Star, Zap } from 'lucide-react';

const Subscription = () => {
  const navigate = useNavigate();

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
      price: 80.00,
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
    // Verificar se o usuário está logado
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (!user.id) {
      // Se não estiver logado, vai para cadastro
      navigate(`/register?plan=${planId}`);
    } else {
      // Se já estiver logado, vai direto para o checkout
      navigate(`/checkout?plan=${planId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black text-white mb-6">
            Escolha Seu Plano
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Desbloqueie todo o potencial do gerador de SaaS
          </p>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={plan.id}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-4 ring-blue-500 shadow-2xl' : 'shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-2 font-bold">
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                <CardHeader className={`${plan.popular ? 'pt-16' : 'pt-8'} text-center`}>
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
                  >
                    Escolher {plan.name}
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

        {/* Back Link */}
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
