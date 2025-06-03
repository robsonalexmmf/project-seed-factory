
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Rocket } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createAdminUser = async () => {
    try {
      // Tentar criar o usuário admin no Supabase Auth
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: 'admin@admin.com',
        password: '320809eu',
        options: {
          data: {
            full_name: 'Administrator',
            plan_type: 'admin'
          },
          emailRedirectTo: undefined // Não precisa de confirmação de email para admin
        }
      });

      if (signUpError && !signUpError.message.includes('already registered')) {
        throw signUpError;
      }

      // Se o usuário foi criado ou já existe, criar/atualizar a entrada na tabela users
      if (signUpData.user) {
        const { error: upsertError } = await supabase
          .from('users')
          .upsert({
            id: signUpData.user.id,
            email: 'admin@admin.com',
            full_name: 'Administrator',
            plan_type: 'admin',
            projects_generated: 0,
            monthly_limit: -1, // Ilimitado para admin
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }, {
            onConflict: 'id'
          });

        if (upsertError) {
          console.error('Erro ao criar entrada na tabela users:', upsertError);
        }
      }

      return true;
    } catch (error) {
      console.error('Erro ao criar usuário admin:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Verificar se é admin
      if (email === 'admin@admin.com' && password === '320809eu') {
        // Tentar login primeiro
        const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (loginError) {
          // Se erro de login, tentar criar o usuário admin
          console.log('Usuário admin não encontrado, criando...');
          const adminCreated = await createAdminUser();
          
          if (adminCreated) {
            // Tentar login novamente após criar
            const { data: retryLoginData, error: retryLoginError } = await supabase.auth.signInWithPassword({
              email,
              password
            });

            if (retryLoginError) {
              throw retryLoginError;
            }
          } else {
            throw new Error('Erro ao criar usuário administrador');
          }
        }

        // Redirecionar para dashboard admin
        navigate('/admin');
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo ao painel administrativo.",
        });
      } else {
        // Login normal para outros usuários
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (error) {
          throw error;
        }

        // Verificar o tipo de usuário após login bem-sucedido
        const { data: userProfile, error: profileError } = await supabase
          .from('users')
          .select('plan_type')
          .eq('id', data.user.id)
          .single();

        if (profileError) {
          console.error('Erro ao buscar perfil do usuário:', profileError);
          // Redirecionar para generator por padrão se houver erro
          navigate('/generator');
        } else if (userProfile?.plan_type === 'admin') {
          navigate('/admin');
        } else {
          navigate('/generator');
        }

        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo de volta!",
        });
      }
    } catch (error: any) {
      console.error('Erro no login:', error);
      toast({
        title: "Erro no login",
        description: error.message || "Email ou senha incorretos.",
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
          <CardTitle>Login</CardTitle>
          <CardDescription>Entre na sua conta</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Sua senha"
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/register" className="text-sm text-blue-600 hover:underline">
              Não tem conta? Cadastre-se grátis
            </Link>
          </div>
          <div className="mt-2 text-center">
            <p className="text-xs text-gray-500">
              Admin: admin@admin.com / 320809eu
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
