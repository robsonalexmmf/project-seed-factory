
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export const createNewAdmin = async (email: string, password: string, fullName: string = 'Admin User') => {
  try {
    console.log('Criando novo usuário administrador:', email);
    
    // Criar o usuário no Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          plan_type: 'admin'
        }
      }
    });

    if (error) {
      // Se o usuário já existir, não é um erro crítico
      if (error.message.includes('already registered') || error.message.includes('User already registered')) {
        console.log('Usuário já existe, tentando promover para admin');
        toast({
          title: "Usuário já existe",
          description: "O usuário já está cadastrado. Tentando promover para admin...",
        });
        
        // Tentar promover para admin se já existir
        return await promoteExistingUserToAdmin(email);
      }
      throw error;
    }

    if (data.user) {
      console.log('Usuário admin criado com sucesso:', data.user.id);
      toast({
        title: "Usuário admin criado",
        description: `Usuário administrador ${email} criado com sucesso.`,
      });
      
      return data.user;
    }
  } catch (error) {
    console.error('Erro ao criar usuário admin:', error);
    toast({
      title: "Erro",
      description: error instanceof Error ? error.message : "Erro ao criar usuário admin",
      variant: "destructive"
    });
    throw error;
  }
};

const promoteExistingUserToAdmin = async (email: string) => {
  try {
    // Buscar o usuário existente
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .maybeSingle();

    if (fetchError) {
      console.error('Erro ao buscar usuário existente:', fetchError);
      throw fetchError;
    }

    if (existingUser) {
      // Atualizar para admin
      const { data, error } = await supabase
        .from('users')
        .update({ 
          plan_type: 'admin',
          monthly_limit: -1,
          updated_at: new Date().toISOString()
        })
        .eq('email', email)
        .select()
        .single();

      if (error) {
        console.error('Erro ao promover usuário para admin:', error);
        throw error;
      }

      console.log('Usuário promovido para admin:', data);
      toast({
        title: "Usuário promovido",
        description: `${email} foi promovido a administrador.`,
      });
      
      return data;
    } else {
      throw new Error('Usuário não encontrado na base de dados');
    }
  } catch (error) {
    console.error('Erro ao promover usuário:', error);
    throw error;
  }
};
