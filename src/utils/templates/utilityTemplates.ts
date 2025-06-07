
import { Calculator, Calendar, FileText, MessageSquare, Lock, Database, Cloud, Settings, Zap, Wrench } from 'lucide-react';
import { ProjectTemplate } from '../projectTemplates';

export const utilityTemplates: ProjectTemplate[] = [
  {
    id: 'task-manager',
    name: 'Gerenciador de Tarefas',
    description: 'Organize suas tarefas e projetos de forma eficiente',
    icon: Calendar,
    complexity: 'easy',
    features: [
      'Criação de tarefas',
      'Organização por projetos',
      'Definição de prioridades',
      'Lembretes automáticos',
      'Colaboração em equipe',
      'Relatórios de produtividade'
    ]
  },
  {
    id: 'note-taking',
    name: 'Bloco de Notas',
    description: 'Sistema avançado para criação e organização de notas',
    icon: FileText,
    complexity: 'easy',
    features: [
      'Editor rico em texto',
      'Organização por pastas',
      'Busca avançada',
      'Sincronização na nuvem',
      'Compartilhamento de notas',
      'Tags e categorias'
    ]
  },
  {
    id: 'password-manager',
    name: 'Gerenciador de Senhas',
    description: 'Armazene e gerencie suas senhas com segurança',
    icon: Lock,
    complexity: 'hard',
    features: [
      'Armazenamento criptografado',
      'Gerador de senhas',
      'Autenticação biométrica',
      'Sincronização segura',
      'Auditoria de segurança',
      'Preenchimento automático'
    ]
  },
  {
    id: 'url-shortener',
    name: 'Encurtador de URL',
    description: 'Encurte URLs e acompanhe estatísticas de cliques',
    icon: Zap,
    complexity: 'easy',
    features: [
      'Encurtamento de URLs',
      'URLs personalizadas',
      'Estatísticas de cliques',
      'QR Code automático',
      'Expiração de links',
      'Proteção por senha'
    ]
  },
  {
    id: 'backup-system',
    name: 'Sistema de Backup',
    description: 'Backup automático e seguro de arquivos importantes',
    icon: Database,
    complexity: 'hard',
    features: [
      'Backup automático',
      'Versionamento de arquivos',
      'Criptografia de dados',
      'Backup incremental',
      'Restauração rápida',
      'Múltiplos destinos'
    ]
  },
  {
    id: 'cloud-storage',
    name: 'Armazenamento na Nuvem',
    description: 'Sistema de armazenamento de arquivos na nuvem',
    icon: Cloud,
    complexity: 'hard',
    features: [
      'Upload de arquivos',
      'Sincronização automática',
      'Compartilhamento seguro',
      'Controle de versões',
      'Acesso mobile',
      'Gestão de permissões'
    ]
  },
  {
    id: 'system-monitor',
    name: 'Monitor de Sistema',
    description: 'Monitore performance e recursos do sistema',
    icon: Settings,
    complexity: 'medium',
    features: [
      'Monitoramento em tempo real',
      'Alertas automáticos',
      'Histórico de performance',
      'Dashboard personalizado',
      'Relatórios detalhados',
      'Integração com APIs'
    ]
  },
  {
    id: 'api-testing',
    name: 'Testador de API',
    description: 'Ferramenta para testar e documentar APIs',
    icon: Wrench,
    complexity: 'medium',
    features: [
      'Teste de endpoints',
      'Documentação automática',
      'Coleções de testes',
      'Ambientes configuráveis',
      'Histórico de requisições',
      'Geração de código'
    ]
  },
  {
    id: 'qr-generator',
    name: 'Gerador de QR Code',
    description: 'Crie QR codes personalizados para diversos usos',
    icon: Calculator,
    complexity: 'easy',
    features: [
      'Múltiplos tipos de QR',
      'Personalização visual',
      'Download em alta qualidade',
      'Rastreamento de escaneamentos',
      'QR codes dinâmicos',
      'API para integração'
    ]
  },
  {
    id: 'team-chat',
    name: 'Chat em Equipe',
    description: 'Sistema de comunicação para equipes de trabalho',
    icon: MessageSquare,
    complexity: 'medium',
    features: [
      'Salas de chat',
      'Mensagens diretas',
      'Compartilhamento de arquivos',
      'Integração com ferramentas',
      'Histórico de mensagens',
      'Notificações personalizadas'
    ]
  }
];
