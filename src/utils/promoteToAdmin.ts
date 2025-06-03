
import { makeUserAdmin } from './makeUserAdmin';

// Promover email específico para admin
export const promoteSpecificEmailToAdmin = async () => {
  try {
    await makeUserAdmin('robsonalexmmfata@gmail.com');
    console.log('Email robsonalexmmfata@gmail.com promovido a admin com sucesso');
  } catch (error) {
    console.error('Erro ao promover email para admin:', error);
  }
};

// Executar automaticamente quando o módulo for importado
promoteSpecificEmailToAdmin();
