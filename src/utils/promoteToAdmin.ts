
import { makeUserAdmin } from './makeUserAdmin';
import { createAdminUser } from './createAdminUser';

// Promover email específico para admin
export const promoteSpecificEmailToAdmin = async () => {
  try {
    // Primeiro, tentar criar o usuário admin se não existir
    await createAdminUser();
    
    // Depois, promover para admin
    await makeUserAdmin('robsonalexmmfata@gmail.com');
    console.log('Email robsonalexmmfata@gmail.com processado para admin');
  } catch (error) {
    console.error('Erro ao processar usuário admin:', error);
  }
};

// Não executar automaticamente quando o módulo for importado
// A execução será feita apenas quando chamada explicitamente
