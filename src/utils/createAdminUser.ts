
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export const createAdminUser = async () => {
  try {
    console.log('Criando usuário admin: robsonalexmmfata@gmail.com');
    
    // Tentar criar o usuário admin
    const { data, error } = await supabase.auth.signUp({
      email: 'robsonalexmmfata@gmail.com',
      password: '123456eu',
      options: {
        data: {
          full_name: 'Admin User',
          plan_type: 'admin'
        }
      }
    });

    if (error) {
      // Se o usuário já existir, não é um erro
      if (error.message.includes('already registered')) {
        console.log('Usuário admin já existe');
        toast({
          title: "Usuário admin já existe",
          description: "O usuário admin já está cadastrado no sistema.",
        });
        return;
      }
      throw error;
    }

    if (data.user) {
      console.log('Usuário admin criado com sucesso');
      toast({
        title: "Usuário admin criado",
        description: "Usuário admin robsonalexmmfata@gmail.com criado com sucesso.",
      });
    }
  } catch (error) {
    console.error('Erro ao criar usuário admin:', error);
    toast({
      title: "Erro",
      description: error instanceof Error ? error.message : "Erro ao criar usuário admin",
      variant: "destructive"
    });
  }
};
