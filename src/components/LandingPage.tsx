
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Users, Shield, Star, Code, Rocket } from 'lucide-react';
import { userPlans } from '@/types/user';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register?plan=freemium');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handlePlanSelect = (planId: string) => {
    if (planId === 'freemium') {
      navigate('/register?plan=freemium');
    } else {
      navigate(`/register?plan=${planId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">SaaS Generator AI</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={handleLogin}>Login</Button>
              <Button onClick={handleGetStarted}>Começar Grátis</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
            🚀 Mais de 400 templates disponíveis
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Crie seu
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> SaaS </span>
            em minutos
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            O gerador de SaaS mais completo do Brasil. Frontend + Backend prontos, 
            com autenticação, banco de dados e deploy automático.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" onClick={handleGetStarted}>
              <Zap className="w-5 h-5 mr-2" />
              Começar Grátis
            </Button>
            <Button size="lg" variant="outline">
              Ver Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa para criar seu SaaS
            </h2>
            <p className="text-xl text-gray-600">
              Frontend, backend, autenticação e banco de dados - tudo pronto em segundos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Code className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Frontend Completo</CardTitle>
                <CardDescription>
                  React + TypeScript + Tailwind CSS com componentes prontos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <Shield className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Backend Supabase</CardTitle>
                <CardDescription>
                  PostgreSQL, autenticação e storage já configurados
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>400+ Templates</CardTitle>
                <CardDescription>
                  Soluções para todas as áreas: saúde, negócios, e-commerce e mais
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planos que crescem com você
            </h2>
            <p className="text-xl text-gray-600">
              Comece grátis e evolua conforme sua necessidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userPlans.map((plan) => (
              <Card key={plan.id} className={`relative ${plan.id === 'pro' ? 'border-blue-500 border-2 scale-105' : ''}`}>
                {plan.id === 'pro' && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold">
                    {plan.price === 0 ? 'Grátis' : `R$ ${plan.price.toFixed(2)}`}
                    {plan.price > 0 && <span className="text-lg font-normal text-gray-500">/mês</span>}
                  </div>
                  <CardDescription>
                    {plan.monthlyLimit === -1 ? 'Projetos ilimitados' : `${plan.monthlyLimit} projetos por mês`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${plan.id === 'pro' ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.id === 'pro' ? 'default' : 'outline'}
                    onClick={() => handlePlanSelect(plan.id)}
                  >
                    {plan.price === 0 ? 'Começar Grátis' : 'Assinar Agora'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">400+</div>
              <div className="text-blue-100">Templates SaaS</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Categorias</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Funcionais</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Suporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pronto para criar seu SaaS?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se a milhares de empreendedores que já criaram seus SaaS com nossa plataforma
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" onClick={handleGetStarted}>
            <Star className="w-5 h-5 mr-2" />
            Começar Agora - Grátis
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rocket className="h-6 w-6" />
            <span className="text-xl font-bold">SaaS Generator AI</span>
          </div>
          <p className="text-gray-400">
            © 2024 SaaS Generator AI. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
