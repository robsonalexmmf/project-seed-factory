
import { makeUserAdmin } from './makeUserAdmin';
import { createAdminUser } from './createAdminUser';

// Função para promover email específico para admin (removida execução automática)
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
