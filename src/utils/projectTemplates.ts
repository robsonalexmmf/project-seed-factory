
import { 
  ShoppingCart, 
  Users, 
  FileText, 
  Building, 
  Calendar, 
  MessageSquare,
  BookOpen,
  Heart,
  Music,
  Camera,
  Car,
  Home,
  Utensils,
  Gamepad2,
  DollarSign,
  Briefcase,
  GraduationCap,
  Code,
  Zap
} from 'lucide-react';

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  complexity: 'easy' | 'medium' | 'hard';
  features: string[];
}

export interface TemplateCategory {
  id: string;
  name: string;
  icon: any;
}

export const templateCategories: TemplateCategory[] = [
  { id: 'all', name: 'Todos', icon: Zap },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
  { id: 'social', name: 'Social', icon: Users },
  { id: 'business', name: 'Negócios', icon: Building },
  { id: 'content', name: 'Conteúdo', icon: FileText },
  { id: 'health', name: 'Saúde', icon: Heart },
  { id: 'education', name: 'Educação', icon: GraduationCap },
  { id: 'entertainment', name: 'Entretenimento', icon: Gamepad2 },
  { id: 'productivity', name: 'Produtividade', icon: Briefcase }
];

export const projectTemplates: ProjectTemplate[] = [
  // E-commerce
  {
    id: 'ecommerce-store',
    name: 'Loja Virtual Completa',
    description: 'Plataforma de e-commerce com carrinho, pagamentos e gestão de produtos',
    category: 'ecommerce',
    complexity: 'medium',
    features: [
      'Catálogo de produtos',
      'Carrinho de compras',
      'Sistema de pagamento',
      'Painel administrativo',
      'Gestão de estoque',
      'Relatórios de vendas'
    ]
  },
  {
    id: 'marketplace',
    name: 'Marketplace Multi-vendor',
    description: 'Marketplace onde múltiplos vendedores podem vender seus produtos',
    category: 'ecommerce',
    complexity: 'hard',
    features: [
      'Sistema multi-vendor',
      'Comissões automáticas',
      'Chat entre compradores e vendedores',
      'Sistema de avaliações',
      'Dashboard para vendedores',
      'Gestão de disputas'
    ]
  },
  {
    id: 'delivery-app',
    name: 'App de Delivery',
    description: 'Aplicação completa para delivery de comida e produtos',
    category: 'ecommerce',
    complexity: 'medium',
    features: [
      'Catálogo de restaurantes',
      'Rastreamento em tempo real',
      'Sistema de pagamento',
      'Avaliações e comentários',
      'Programa de fidelidade',
      'Dashboard para entregadores'
    ]
  },

  // Social
  {
    id: 'social-network',
    name: 'Rede Social',
    description: 'Plataforma de rede social com posts, amigos e chat',
    category: 'social',
    complexity: 'hard',
    features: [
      'Sistema de posts',
      'Amizades e seguidores',
      'Chat em tempo real',
      'Stories temporários',
      'Sistema de curtidas',
      'Feed personalizado'
    ]
  },
  {
    id: 'dating-app',
    name: 'App de Relacionamentos',
    description: 'Aplicativo de encontros com sistema de matches',
    category: 'social',
    complexity: 'medium',
    features: [
      'Sistema de swipe',
      'Algoritmo de matching',
      'Chat privado',
      'Verificação de perfil',
      'Filtros de busca',
      'Super likes'
    ]
  },
  {
    id: 'forum',
    name: 'Fórum de Discussões',
    description: 'Plataforma de fórum com categorias e moderação',
    category: 'social',
    complexity: 'easy',
    features: [
      'Categorias de tópicos',
      'Sistema de votação',
      'Moderação de conteúdo',
      'Perfis de usuário',
      'Busca avançada',
      'Notificações'
    ]
  },

  // Business
  {
    id: 'crm-system',
    name: 'Sistema CRM',
    description: 'CRM completo para gestão de clientes e vendas',
    category: 'business',
    complexity: 'medium',
    features: [
      'Gestão de leads',
      'Pipeline de vendas',
      'Histórico de contatos',
      'Relatórios de performance',
      'Integração com email',
      'Dashboard executivo'
    ]
  },
  {
    id: 'erp-system',
    name: 'Sistema ERP',
    description: 'ERP empresarial com múltiplos módulos',
    category: 'business',
    complexity: 'hard',
    features: [
      'Gestão financeira',
      'Controle de estoque',
      'Recursos humanos',
      'Relatórios gerenciais',
      'Workflow automático',
      'Multi-empresa'
    ]
  },
  {
    id: 'invoice-system',
    name: 'Sistema de Faturamento',
    description: 'Sistema para emissão de notas fiscais e cobrança',
    category: 'business',
    complexity: 'easy',
    features: [
      'Emissão de NFe',
      'Controle de cobrança',
      'Relatórios fiscais',
      'Integração bancária',
      'Dashboard financeiro',
      'Clientes e produtos'
    ]
  },

  // Content
  {
    id: 'blog-platform',
    name: 'Plataforma de Blog',
    description: 'CMS para blogs com múltiplos autores',
    category: 'content',
    complexity: 'easy',
    features: [
      'Editor de texto rico',
      'Sistema de categorias',
      'Comentários',
      'SEO otimizado',
      'Newsletter',
      'Analytics integrado'
    ]
  },
  {
    id: 'podcast-platform',
    name: 'Plataforma de Podcast',
    description: 'Sistema para hospedar e distribuir podcasts',
    category: 'content',
    complexity: 'medium',
    features: [
      'Upload de episódios',
      'Player customizado',
      'RSS feed automático',
      'Analytics de audiência',
      'Transcrições automáticas',
      'Monetização'
    ]
  },
  {
    id: 'news-portal',
    name: 'Portal de Notícias',
    description: 'Portal de notícias com sistema editorial',
    category: 'content',
    complexity: 'medium',
    features: [
      'Sistema editorial',
      'Categorias de notícias',
      'Breaking news',
      'Newsletter automática',
      'SEO avançado',
      'Comentários moderados'
    ]
  },

  // Health
  {
    id: 'telemedicine',
    name: 'Plataforma de Telemedicina',
    description: 'Sistema para consultas médicas online',
    category: 'health',
    complexity: 'hard',
    features: [
      'Agendamento online',
      'Videochamadas',
      'Prescrições digitais',
      'Prontuário eletrônico',
      'Sistema de pagamento',
      'Integração com laboratórios'
    ]
  },
  {
    id: 'fitness-app',
    name: 'App de Fitness',
    description: 'Aplicativo para acompanhamento de exercícios e dieta',
    category: 'health',
    complexity: 'medium',
    features: [
      'Planos de treino',
      'Contador de calorias',
      'Progresso de peso',
      'Lembretes de exercício',
      'Comunidade fitness',
      'Personal trainer virtual'
    ]
  },
  {
    id: 'mental-health',
    name: 'App de Saúde Mental',
    description: 'Plataforma para bem-estar mental e meditação',
    category: 'health',
    complexity: 'easy',
    features: [
      'Meditações guiadas',
      'Diário de humor',
      'Exercícios de respiração',
      'Terapia online',
      'Acompanhamento de progresso',
      'Conteúdo educativo'
    ]
  },

  // Education
  {
    id: 'lms-platform',
    name: 'Plataforma LMS',
    description: 'Sistema de gestão de aprendizagem completo',
    category: 'education',
    complexity: 'hard',
    features: [
      'Criação de cursos',
      'Video aulas',
      'Quiz e avaliações',
      'Certificados',
      'Fórum de dúvidas',
      'Relatórios de progresso'
    ]
  },
  {
    id: 'online-courses',
    name: 'Cursos Online',
    description: 'Plataforma de venda de cursos online',
    category: 'education',
    complexity: 'medium',
    features: [
      'Marketplace de cursos',
      'Sistema de pagamento',
      'Área do aluno',
      'Chat com instrutores',
      'Certificação',
      'Mobile friendly'
    ]
  },
  {
    id: 'school-management',
    name: 'Gestão Escolar',
    description: 'Sistema completo para gestão de escolas',
    category: 'education',
    complexity: 'hard',
    features: [
      'Gestão de alunos',
      'Boletim eletrônico',
      'Agenda escolar',
      'Comunicação com pais',
      'Financeiro escolar',
      'Biblioteca digital'
    ]
  },

  // Entertainment
  {
    id: 'streaming-platform',
    name: 'Plataforma de Streaming',
    description: 'Netflix-like para vídeos e filmes',
    category: 'entertainment',
    complexity: 'hard',
    features: [
      'Catálogo de vídeos',
      'Player customizado',
      'Recomendações por IA',
      'Perfis familiares',
      'Download offline',
      'Sistema de assinatura'
    ]
  },
  {
    id: 'gaming-platform',
    name: 'Plataforma de Jogos',
    description: 'Steam-like para distribuição de jogos',
    category: 'entertainment',
    complexity: 'hard',
    features: [
      'Loja de jogos',
      'Sistema de DRM',
      'Chat de jogadores',
      'Achievements',
      'Reviews e ratings',
      'Comunidade de modding'
    ]
  },
  {
    id: 'event-platform',
    name: 'Plataforma de Eventos',
    description: 'Eventbrite-like para criação e venda de ingressos',
    category: 'entertainment',
    complexity: 'medium',
    features: [
      'Criação de eventos',
      'Venda de ingressos',
      'Check-in por QR Code',
      'Networking entre participantes',
      'Streaming de eventos',
      'Analytics de evento'
    ]
  },

  // Productivity
  {
    id: 'task-manager',
    name: 'Gerenciador de Tarefas',
    description: 'Asana-like para gestão de projetos e tarefas',
    category: 'productivity',
    complexity: 'medium',
    features: [
      'Gestão de projetos',
      'Kanban boards',
      'Timeline de projetos',
      'Colaboração em equipe',
      'Relatórios de produtividade',
      'Integração com calendário'
    ]
  },
  {
    id: 'note-taking',
    name: 'App de Anotações',
    description: 'Notion-like para anotações e documentação',
    category: 'productivity',
    complexity: 'easy',
    features: [
      'Editor markdown',
      'Organização em pastas',
      'Busca avançada',
      'Compartilhamento',
      'Sincronização multi-device',
      'Templates personalizados'
    ]
  },
  {
    id: 'time-tracking',
    name: 'Controle de Tempo',
    description: 'Sistema para controle de horas e produtividade',
    category: 'productivity',
    complexity: 'easy',
    features: [
      'Timer de atividades',
      'Relatórios de tempo',
      'Faturamento por horas',
      'Múltiplos projetos',
      'Dashboard de produtividade',
      'Integração com calendário'
    ]
  }
];

export const getTemplatesByCategory = (categoryId: string): ProjectTemplate[] => {
  if (categoryId === 'all') {
    return projectTemplates;
  }
  return projectTemplates.filter(template => template.category === categoryId);
};

export const searchTemplates = (searchTerm: string): ProjectTemplate[] => {
  const lowercaseSearch = searchTerm.toLowerCase();
  return projectTemplates.filter(template => 
    template.name.toLowerCase().includes(lowercaseSearch) ||
    template.description.toLowerCase().includes(lowercaseSearch) ||
    template.features.some(feature => feature.toLowerCase().includes(lowercaseSearch))
  );
};
