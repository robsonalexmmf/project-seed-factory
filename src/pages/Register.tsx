
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Rocket } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const planType = new URLSearchParams(location.search).get('plan') || 'freemium';

  useEffect(() => {
    // Verificar se já está logado
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/generator');
      }
    };
    checkAuth();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            plan_type: planType
          }
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Cadastro realizado!",
        description: "Sua conta foi criada com sucesso.",
      });

      // Se for plano pago, redirecionar para checkout
      if (planType === 'pro' || planType === 'business') {
        navigate(`/checkout?plan=${planType}`);
      } else {
        navigate('/generator');
      }
    } catch (error: any) {
      toast({
        title: "Erro no cadastro",
        description: error.message || "Erro ao criar conta.",
        variant: "destructive"
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rocket className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Idealyze</h1>
          </div>
          <CardTitle>Cadastro {planType !== 'freemium' ? `- Plano ${planType}` : 'Gratuito'}</CardTitle>
          <CardDescription>
            {planType === 'freemium' ? 'Crie sua conta gratuita' : `Cadastre-se para o plano ${planType}`}
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
              {loading ? 'Cadastrando...' : 'Criar Conta'}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-sm text-blue-600 hover:underline">
              Já tem conta? Faça login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
