
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export const makeUserAdmin = async (email: string) => {
  try {
    console.log('Tornando usuário admin:', email);
    
    // Atualizar o usuário na tabela users para ser admin
    const { data, error } = await supabase
      .from('users')
      .update({ 
        plan_type: 'admin',
        monthly_limit: -1,
        updated_at: new Date().toISOString()
      })
      .eq('email', email)
      .select();

    if (error) {
      console.error('Erro ao tornar usuário admin:', error);
      throw error;
    }

    if (data && data.length > 0) {
      console.log('Usuário atualizado para admin:', data[0]);
      toast({
        title: "Usuário promovido a admin",
        description: `${email} agora é um administrador do sistema.`,
      });
      return data[0];
    } else {
      // Se o usuário não existe na tabela users, criar entrada diretamente
      const { data: newUser, error: createError } = await supabase
        .from('users')
        .insert({
          email: email,
          full_name: '',
          plan_type: 'admin',
          projects_generated: 0,
          monthly_limit: -1
        })
        .select();

      if (createError) {
        console.error('Erro ao criar usuário admin:', createError);
        throw createError;
      }

      console.log('Usuário criado como admin:', newUser[0]);
      toast({
        title: "Usuário promovido a admin",
        description: `${email} agora é um administrador do sistema.`,
      });
      return newUser[0];
    }
  } catch (error) {
    console.error('Erro ao tornar usuário admin:', error);
    toast({
      title: "Erro",
      description: error instanceof Error ? error.message : "Erro ao promover usuário a admin",
      variant: "destructive"
    });
    throw error;
  }
};
