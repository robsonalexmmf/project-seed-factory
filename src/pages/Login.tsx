
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Tentando fazer login com:', email);
      
      // Primeiro, tentar login normal
      const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (loginError) {
        console.log('Erro no login:', loginError);
        
        // Se é o admin e o erro é de email não confirmado, criar admin diretamente
        if (email === 'admin@admin.com' && password === '320809eu') {
          console.log('Criando usuário admin diretamente...');
          
          // Usar service role para criar admin sem confirmação
          const { data: adminUser, error: createError } = await supabase.auth.admin.createUser({
            email: 'admin@admin.com',
            password: '320809eu',
            user_metadata: {
              full_name: 'Administrator',
              plan_type: 'admin'
            },
            email_confirm: true // Confirma o email automaticamente
          });

          if (createError) {
            console.error('Erro ao criar admin:', createError);
            // Se deu erro, pode ser que o usuário já existe mas não está confirmado
            // Tentar confirmar o usuário existente
            if (createError.message.includes('already registered')) {
              toast({
                title: "Admin já existe",
                description: "Usuário admin já foi criado. Entre em contato com o suporte se não conseguir acessar.",
                variant: "destructive"
              });
              setLoading(false);
              return;
            }
            throw new Error('Não foi possível criar o usuário administrador');
          }

          if (adminUser.user) {
            // Criar entrada na tabela users
            const { error: upsertError } = await supabase
              .from('users')
              .upsert({
                id: adminUser.user.id,
                email: 'admin@admin.com',
                full_name: 'Administrator',
                plan_type: 'admin',
                projects_generated: 0,
                monthly_limit: -1,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
              }, {
                onConflict: 'id'
              });

            if (upsertError) {
              console.error('Erro ao criar entrada na tabela users:', upsertError);
            }

            // Agora tentar login novamente
            const { data: retryLogin, error: retryError } = await supabase.auth.signInWithPassword({
              email: 'admin@admin.com',
              password: '320809eu'
            });

            if (retryError) {
              console.error('Erro no login após criação:', retryError);
              toast({
                title: "Admin criado mas erro no login",
                description: "O usuário admin foi criado, mas houve erro no login. Tente novamente.",
                variant: "destructive"
              });
              setLoading(false);
              return;
            }

            if (retryLogin.user) {
              navigate('/admin');
              toast({
                title: "Admin criado e logado com sucesso!",
                description: "Bem-vindo ao painel administrativo.",
              });
              setLoading(false);
              return;
            }
          }
        }
        
        throw loginError;
      }

      // Login bem-sucedido
      console.log('Login realizado com sucesso:', loginData);
      
      if (loginData.user) {
        // Verificar se é admin
        if (email === 'admin@admin.com' || loginData.user.user_metadata?.plan_type === 'admin') {
          navigate('/admin');
          toast({
            title: "Login realizado com sucesso!",
            description: "Bem-vindo ao painel administrativo.",
          });
          setLoading(false);
          return;
        }

        // Para outros usuários, verificar na tabela users
        const { data: userProfile, error: profileError } = await supabase
          .from('users')
          .select('plan_type')
          .eq('id', loginData.user.id)
          .single();

        if (profileError) {
          console.error('Erro ao buscar perfil do usuário:', profileError);
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
