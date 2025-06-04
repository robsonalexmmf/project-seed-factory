
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export const makeUserAdmin = async (email: string) => {
  try {
    console.log('Tornando usuário admin:', email);
    
    // Primeiro, verificar se o usuário já existe na tabela users
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .maybeSingle();

    if (fetchError && fetchError.code !== 'PGRST116') {
      console.error('Erro ao buscar usuário:', fetchError);
      throw fetchError;
    }

    if (existingUser) {
      // Usuário existe, atualizar para admin
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
        console.error('Erro ao atualizar usuário para admin:', error);
        
        // Se falhar devido a RLS, tentar via função do banco
        const { error: rpcError } = await supabase.rpc('promote_user_to_admin', {
          user_email: email
        });
        
        if (rpcError) {
          console.error('Erro na função RPC:', rpcError);
          throw rpcError;
        }
        
        console.log('Usuário promovido via RPC');
        toast({
          title: "Usuário promovido a admin",
          description: `${email} agora é um administrador do sistema.`,
        });
        return;
      }

      console.log('Usuário atualizado para admin:', data[0]);
      toast({
        title: "Usuário promovido a admin",
        description: `${email} agora é um administrador do sistema.`,
      });
      return data[0];
    } else {
      // Usuário não existe
      console.log('Usuário não encontrado na tabela users. Pode ser necessário fazer login primeiro.');
      
      toast({
        title: "Usuário não encontrado",
        description: `${email} precisa fazer login primeiro para ser promovido a admin.`,
        variant: "destructive"
      });
      
      return null;
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
