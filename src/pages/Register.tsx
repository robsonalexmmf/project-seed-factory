
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Rocket } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading: authLoading } = useAuth();

  const planType = new URLSearchParams(location.search).get('plan') || 'freemium';

  // Redirecionar usuários já logados
  useEffect(() => {
    if (!authLoading && user) {
      if (planType !== 'freemium') {
        navigate(`/subscription?plan=${planType}`);
      } else {
        navigate('/generator');
      }
    }
  }, [user, authLoading, navigate, planType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Registering user with plan:', planType);
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            plan_type: planType
          },
          emailRedirectTo: `${window.location.origin}/`
        }
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        toast({
          title: "Cadastro realizado!",
          description: "Sua conta foi criada com sucesso.",
        });

        // Fazer login automático após o cadastro bem-sucedido
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (signInError) {
          console.error('Auto-login error:', signInError);
          // Se falhar o login automático, redireciona para login
          navigate(`/login?plan=${planType}`);
          return;
        }

        // Se não é freemium, redireciona para assinatura
        if (planType !== 'freemium') {
          console.log('Redirecting to subscription page for plan:', planType);
          navigate(`/subscription?plan=${planType}`);
        } else {
          console.log('Redirecting to generator for freemium user');
          navigate('/generator');
        }
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "Erro no cadastro",
        description: error.message || "Erro ao criar conta.",
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

  const getPlanDisplayName = (plan: string) => {
    switch (plan) {
      case 'freemium': return 'Freemium';
      case 'pro': return 'Pro';
      case 'business': return 'Business';
      default: return 'Freemium';
    }
  };

  const getPlanDescription = (plan: string) => {
    switch (plan) {
      case 'freemium': return '2 projetos por mês - Gratuito';
      case 'pro': return '10 projetos por mês - R$ 29,90/mês';
      case 'business': return 'Projetos ilimitados - R$ 79,90/mês';
      default: return '2 projetos por mês - Gratuito';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rocket className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Idealyze</h1>
          </div>
          <CardTitle>
            Cadastro - Plano {getPlanDisplayName(planType)}
          </CardTitle>
          <CardDescription>
            {getPlanDescription(planType)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Nome Completo</Label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Mínimo 6 caracteres"
                minLength={6}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Cadastrando...' : 'Criar Conta e Continuar'}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link 
              to={`/login${planType ? `?plan=${planType}` : ''}`} 
              className="text-sm text-blue-600 hover:underline"
            >
              Já tem conta? Faça login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
