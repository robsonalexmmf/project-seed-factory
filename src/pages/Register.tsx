import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Pegar o plano da URL se vier do botão de assinatura
  const planType = new URLSearchParams(location.search).get('plan') || 'freemium';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Verificar se email já existe
      if (users.find((u: any) => u.email === email)) {
        toast({
          title: "Erro no cadastro",
          description: "Este email já está cadastrado.",
          variant: "destructive"
        });
        setLoading(false);
        return;
      }

      const newUser = {
        id: Date.now().toString(),
        email,
        password,
        full_name: fullName,
        plan_type: planType,
        projects_generated: 0,
        monthly_limit: planType === 'freemium' ? 2 : planType === 'pro' ? 10 : -1,
        created_at: new Date().toISOString()
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('user', JSON.stringify(newUser));

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
    } catch (error) {
      toast({
        title: "Erro no cadastro",
        description: "Erro interno do servidor.",
        variant: "destructive"
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
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
