import { LucideIcon, MessageSquare, ShoppingCart, Users, Building, Stethoscope, GraduationCap, Utensils, Car, Home, Briefcase, Headphones, Bot, Phone, Calendar, CreditCard, FileText, BarChart, Globe, Shield, Zap, Camera, Music, Video, Gamepad2, Gift, Heart, Truck, Wrench, FlaskConical, BookOpen, PlaneTakeoff, MapPin, Coffee, Dumbbell } from 'lucide-react';

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  icon: LucideIcon;
  color: string;
  tech?: string[];
  complexity?: string;
  estimatedTime?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

export const categories: Category[] = [
  { id: 'all', name: 'Todos', icon: Globe },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
  { id: 'social', name: 'Social & Comunicação', icon: MessageSquare },
  { id: 'business', name: 'Negócios & Gestão', icon: Briefcase },
  { id: 'health', name: 'Saúde & Bem-estar', icon: Stethoscope },
  { id: 'education', name: 'Educação', icon: GraduationCap },
  { id: 'food', name: 'Alimentação', icon: Utensils },
  { id: 'transport', name: 'Transporte', icon: Car },
  { id: 'realestate', name: 'Imóveis', icon: Home },
  { id: 'productivity', name: 'Produtividade', icon: Zap },
  { id: 'entertainment', name: 'Entretenimento', icon: Gamepad2 }
];

export const projectTemplates: ProjectTemplate[] = [
  // E-commerce Templates
  {
    id: 'marketplace-multivendor',
    name: 'Marketplace Multi-vendor',
    description: 'Plataforma completa para múltiplos vendedores com gestão de produtos, pagamentos e logística',
    category: 'ecommerce',
    features: ['Painel de vendedores', 'Gestão de comissões', 'Sistema de avaliações', 'Chat integrado', 'Gestão de fretes'],
    icon: ShoppingCart,
    color: 'bg-blue-600'
  },
  {
    id: 'dropshipping-platform',
    name: 'Plataforma de Dropshipping',
    description: 'Sistema automatizado para dropshipping com integração de fornecedores e gestão de pedidos',
    category: 'ecommerce',
    features: ['Importação automática de produtos', 'Sincronização de estoque', 'Automação de pedidos', 'Análise de margem'],
    icon: Package,
    color: 'bg-green-600'
  },
  {
    id: 'subscription-box',
    name: 'Sistema de Subscription Box',
    description: 'Plataforma para venda de assinaturas mensais com curadoria de produtos',
    category: 'ecommerce',
    features: ['Assinaturas recorrentes', 'Curadoria de produtos', 'Gestão de inventário', 'Portal do assinante'],
    icon: Box,
    color: 'bg-purple-600'
  },

  // Social & Communication Templates
  {
    id: 'community-platform',
    name: 'Plataforma de Comunidade',
    description: 'Rede social focada em comunidades com fóruns, eventos e gamificação',
    category: 'social',
    features: ['Fóruns temáticos', 'Sistema de eventos', 'Gamificação', 'Moderação avançada', 'Chat em tempo real'],
    icon: Users,
    color: 'bg-indigo-600'
  },
  {
    id: 'dating-app',
    name: 'App de Relacionamentos',
    description: 'Plataforma de relacionamentos com matching inteligente e chat seguro',
    category: 'social',
    features: ['Algoritmo de matching', 'Chat com criptografia', 'Verificação de perfil', 'Filtros avançados'],
    icon: Heart,
    color: 'bg-pink-600'
  },
  {
    id: 'professional-network',
    name: 'Rede Profissional',
    description: 'LinkedIn para nichos específicos com foco em networking profissional',
    category: 'social',
    features: ['Perfis profissionais', 'Sistema de vagas', 'Networking direcionado', 'Grupos profissionais'],
    icon: Briefcase,
    color: 'bg-slate-600'
  },

  // Business & Management Templates
  {
    id: 'crm-advanced',
    name: 'CRM Avançado',
    description: 'Sistema completo de gestão de relacionamento com clientes e automação de vendas',
    category: 'business',
    features: ['Pipeline de vendas', 'Automação de marketing', 'Relatórios avançados', 'Integração com telefonia'],
    icon: Users,
    color: 'bg-blue-600'
  },
  {
    id: 'project-management-ai',
    name: 'Gestão de Projetos com IA',
    description: 'Ferramenta de gestão de projetos com inteligência artificial para otimização de recursos',
    category: 'business',
    features: ['IA para estimativas', 'Gestão de recursos', 'Análise preditiva', 'Automação de tarefas'],
    icon: BarChart,
    color: 'bg-green-600'
  },
  {
    id: 'invoice-automation',
    name: 'Automação de Faturamento',
    description: 'Sistema completo de faturamento com automação fiscal e integração bancária',
    category: 'business',
    features: ['Emissão automática de NF', 'Integração bancária', 'Cobrança automática', 'Relatórios fiscais'],
    icon: FileText,
    color: 'bg-yellow-600'
  },

  // Health & Wellness Templates
  {
    id: 'telemedicine-platform',
    name: 'Plataforma de Telemedicina',
    description: 'Sistema completo para consultas médicas online com prontuário eletrônico',
    category: 'health',
    features: ['Consultas por vídeo', 'Prontuário eletrônico', 'Prescrição digital', 'Agendamento inteligente'],
    icon: Stethoscope,
    color: 'bg-red-600'
  },
  {
    id: 'fitness-tracking',
    name: 'App de Monitoramento Fitness',
    description: 'Aplicativo completo para acompanhamento de atividades físicas e nutrição',
    category: 'health',
    features: ['Tracking de exercícios', 'Planos nutricionais', 'Gamificação', 'Comunidade fitness'],
    icon: Dumbbell,
    color: 'bg-orange-600'
  },
  {
    id: 'mental-health-platform',
    name: 'Plataforma de Saúde Mental',
    description: 'Sistema para terapia online e acompanhamento psicológico',
    category: 'health',
    features: ['Terapia por vídeo', 'Diário emocional', 'Exercícios de mindfulness', 'Chat de emergência'],
    icon: Heart,
    color: 'bg-teal-600'
  },

  // Education Templates
  {
    id: 'lms-advanced',
    name: 'LMS Avançado',
    description: 'Plataforma completa de ensino online com IA para personalização de aprendizado',
    category: 'education',
    features: ['IA para aprendizado', 'Aulas ao vivo', 'Gamificação', 'Certificações', 'Análise de progresso'],
    icon: GraduationCap,
    color: 'bg-blue-600'
  },
  {
    id: 'language-learning',
    name: 'App de Idiomas',
    description: 'Plataforma gamificada para aprendizado de idiomas com IA conversacional',
    category: 'education',
    features: ['IA conversacional', 'Gamificação', 'Reconhecimento de voz', 'Aulas personalizadas'],
    icon: Globe,
    color: 'bg-green-600'
  },
  {
    id: 'skill-assessment',
    name: 'Plataforma de Avaliação de Habilidades',
    description: 'Sistema para testes e certificações profissionais com proctoring online',
    category: 'education',
    features: ['Proctoring online', 'Banco de questões', 'Relatórios detalhados', 'Certificações digitais'],
    icon: Award,
    color: 'bg-purple-600'
  },

  // Food & Restaurant Templates
  {
    id: 'ghost-kitchen-platform',
    name: 'Plataforma Ghost Kitchen',
    description: 'Sistema completo para gestão de cozinhas virtuais e delivery',
    category: 'food',
    features: ['Múltiplas marcas', 'Gestão de cardápio', 'Otimização de entrega', 'Análise de demanda'],
    icon: Utensils,
    color: 'bg-orange-600'
  },
  {
    id: 'restaurant-table-booking',
    name: 'Sistema de Reservas de Mesa',
    description: 'Plataforma para reservas de restaurantes com gestão de capacidade',
    category: 'food',
    features: ['Reservas online', 'Gestão de capacidade', 'Lista de espera', 'Programa de fidelidade'],
    icon: Calendar,
    color: 'bg-red-600'
  },
  {
    id: 'food-waste-reduction',
    name: 'Redução de Desperdício Alimentar',
    description: 'Plataforma para conectar restaurantes com excesso de comida a consumidores',
    category: 'food',
    features: ['Ofertas em tempo real', 'Geolocalização', 'Pagamentos integrados', 'Impacto ambiental'],
    icon: Recycle,
    color: 'bg-green-600'
  },

  // Transport Templates
  {
    id: 'fleet-management',
    name: 'Gestão de Frota',
    description: 'Sistema completo para gerenciamento de frotas com telemetria e manutenção preditiva',
    category: 'transport',
    features: ['Telemetria veicular', 'Manutenção preditiva', 'Otimização de rotas', 'Gestão de combustível'],
    icon: Truck,
    color: 'bg-blue-600'
  },
  {
    id: 'ride-sharing-cargo',
    name: 'Compartilhamento de Carga',
    description: 'Plataforma para compartilhamento de espaço em cargas e otimização logística',
    category: 'transport',
    features: ['Matching de cargas', 'Otimização de rotas', 'Tracking em tempo real', 'Gestão de pagamentos'],
    icon: Package,
    color: 'bg-yellow-600'
  },
  {
    id: 'parking-management',
    name: 'Gestão de Estacionamentos',
    description: 'Sistema inteligente para gestão de vagas com IoT e pagamentos automáticos',
    category: 'transport',
    features: ['Sensores IoT', 'Pagamento automático', 'Reserva de vagas', 'Análise de ocupação'],
    icon: Car,
    color: 'bg-purple-600'
  },

  // Real Estate Templates
  {
    id: 'property-management',
    name: 'Gestão de Propriedades',
    description: 'Sistema completo para gestão de imóveis, inquilinos e manutenção',
    category: 'realestate',
    features: ['Portal do inquilino', 'Gestão de manutenção', 'Relatórios financeiros', 'Contratos digitais'],
    icon: Home,
    color: 'bg-blue-600'
  },
  {
    id: 'real-estate-investment',
    name: 'Investimento Imobiliário',
    description: 'Plataforma para investimento colaborativo em imóveis com tokenização',
    category: 'realestate',
    features: ['Tokenização de imóveis', 'Investimento fracionado', 'Rendimentos automáticos', 'Análise de ROI'],
    icon: TrendingUp,
    color: 'bg-green-600'
  },
  {
    id: 'virtual-property-tours',
    name: 'Tours Virtuais de Imóveis',
    description: 'Plataforma para visitas virtuais 360° e realidade aumentada',
    category: 'realestate',
    features: ['Tours 360°', 'Realidade aumentada', 'Agendamento virtual', 'Análise de engajamento'],
    icon: Camera,
    color: 'bg-purple-600'
  },

  // Productivity Templates
  {
    id: 'ai-personal-assistant',
    name: 'Assistente Pessoal com IA',
    description: 'Assistente virtual inteligente para gestão de tarefas e produtividade',
    category: 'productivity',
    features: ['IA conversacional', 'Agendamento inteligente', 'Análise de produtividade', 'Integração com apps'],
    icon: Bot,
    color: 'bg-blue-600'
  },
  {
    id: 'team-collaboration',
    name: 'Colaboração em Equipe',
    description: 'Plataforma completa para colaboração remota com whiteboard e video calls',
    category: 'productivity',
    features: ['Whiteboard colaborativo', 'Video calls HD', 'Gestão de documentos', 'Workflows automatizados'],
    icon: Users,
    color: 'bg-green-600'
  },
  {
    id: 'time-tracking-ai',
    name: 'Controle de Tempo com IA',
    description: 'Sistema inteligente de controle de tempo com análise automática de produtividade',
    category: 'productivity',
    features: ['Tracking automático', 'Análise de produtividade', 'Relatórios inteligentes', 'Integração com calendário'],
    icon: Clock,
    color: 'bg-purple-600'
  },

  // Entertainment Templates
  {
    id: 'streaming-platform',
    name: 'Plataforma de Streaming',
    description: 'Serviço de streaming de vídeo com recomendações por IA e conteúdo interativo',
    category: 'entertainment',
    features: ['Streaming adaptativo', 'IA de recomendação', 'Conteúdo interativo', 'Múltiplas telas'],
    icon: Video,
    color: 'bg-red-600'
  },
  {
    id: 'gaming-tournament',
    name: 'Plataforma de Torneios Gaming',
    description: 'Sistema para organização de torneios de games com brackets e transmissões',
    category: 'entertainment',
    features: ['Sistema de brackets', 'Transmissões ao vivo', 'Ranking global', 'Premiações automáticas'],
    icon: Gamepad2,
    color: 'bg-orange-600'
  },
  {
    id: 'virtual-events',
    name: 'Eventos Virtuais',
    description: 'Plataforma para eventos online com networking e experiências imersivas',
    category: 'entertainment',
    features: ['Ambientes 3D', 'Networking AI', 'Stands virtuais', 'Análise de engajamento'],
    icon: Calendar,
    color: 'bg-purple-600'
  },

  // WhatsApp Bot Templates
  {
    id: 'whatsapp-ecommerce-bot',
    name: 'Bot E-commerce WhatsApp',
    description: 'Bot inteligente para vendas via WhatsApp com catálogo integrado e pagamentos',
    category: 'social',
    features: ['Catálogo de produtos', 'Carrinho de compras', 'Pagamentos PIX', 'Gestão de pedidos', 'Atendimento 24/7'],
    icon: Bot,
    color: 'bg-green-600'
  },
  {
    id: 'whatsapp-restaurant-bot',
    name: 'Bot Restaurante WhatsApp',
    description: 'Assistente virtual para restaurantes com cardápio digital e pedidos automatizados',
    category: 'food',
    features: ['Cardápio interativo', 'Pedidos automatizados', 'Delivery tracking', 'Promoções personalizadas'],
    icon: Utensils,
    color: 'bg-orange-600'
  },
  {
    id: 'whatsapp-appointment-bot',
    name: 'Bot Agendamento WhatsApp',
    description: 'Bot para agendamento de consultas e serviços com calendário integrado',
    category: 'business',
    features: ['Agendamento inteligente', 'Lembretes automáticos', 'Reagendamento fácil', 'Integração com calendário'],
    icon: Calendar,
    color: 'bg-blue-600'
  },
  {
    id: 'whatsapp-support-bot',
    name: 'Bot Suporte WhatsApp',
    description: 'Bot de atendimento ao cliente com IA para respostas inteligentes e escalação',
    category: 'business',
    features: ['IA conversacional', 'Base de conhecimento', 'Escalação para humanos', 'Análise de sentimento'],
    icon: Headphones,
    color: 'bg-purple-600'
  },
  {
    id: 'whatsapp-education-bot',
    name: 'Bot Educacional WhatsApp',
    description: 'Assistente educacional para cursos online com quizzes e acompanhamento de progresso',
    category: 'education',
    features: ['Conteúdo interativo', 'Quizzes automáticos', 'Progresso personalizado', 'Lembretes de estudo'],
    icon: BookOpen,
    color: 'bg-indigo-600'
  },
  {
    id: 'whatsapp-health-bot',
    name: 'Bot Saúde WhatsApp',
    description: 'Assistente de saúde para lembretes de medicamentos e triagem inicial',
    category: 'health',
    features: ['Lembretes de medicação', 'Triagem de sintomas', 'Agendamento médico', 'Histórico de saúde'],
    icon: Stethoscope,
    color: 'bg-red-600'
  },
  {
    id: 'whatsapp-real-estate-bot',
    name: 'Bot Imóveis WhatsApp',
    description: 'Bot para imobiliárias com busca inteligente de imóveis e agendamento de visitas',
    category: 'realestate',
    features: ['Busca por critérios', 'Galeria de fotos', 'Agendamento de visitas', 'Calculadora de financiamento'],
    icon: Home,
    color: 'bg-cyan-600'
  },
  {
    id: 'whatsapp-finance-bot',
    name: 'Bot Financeiro WhatsApp',
    description: 'Assistente financeiro para controle de gastos e investimentos via WhatsApp',
    category: 'business',
    features: ['Controle de gastos', 'Análise financeira', 'Dicas de investimento', 'Alertas de gastos'],
    icon: CreditCard,
    color: 'bg-green-600'
  },
  {
    id: 'whatsapp-hr-bot',
    name: 'Bot RH WhatsApp',
    description: 'Bot para recursos humanos com gestão de colaboradores e processos internos',
    category: 'business',
    features: ['Gestão de folha de ponto', 'Solicitações de férias', 'Onboarding digital', 'FAQ corporativo'],
    icon: Users,
    color: 'bg-slate-600'
  },
  {
    id: 'whatsapp-delivery-bot',
    name: 'Bot Delivery WhatsApp',
    description: 'Bot para serviços de delivery com tracking em tempo real e otimização de rotas',
    category: 'transport',
    features: ['Tracking em tempo real', 'Otimização de rotas', 'Notificações automáticas', 'Avaliação de entrega'],
    icon: Truck,
    color: 'bg-yellow-600'
  },
  {
    id: 'whatsapp-pharmacy-bot',
    name: 'Bot Farmácia WhatsApp',
    description: 'Assistente para farmácias com consulta de medicamentos e delivery',
    category: 'health',
    features: ['Consulta de medicamentos', 'Receitas digitais', 'Delivery farmácia', 'Programa de fidelidade'],
    icon: FlaskConical,
    color: 'bg-teal-600'
  },
  {
    id: 'whatsapp-automotive-bot',
    name: 'Bot Automotivo WhatsApp',
    description: 'Bot para concessionárias e oficinas com agendamento e orçamentos',
    category: 'transport',
    features: ['Agendamento de serviços', 'Orçamentos automáticos', 'Histórico do veículo', 'Lembretes de manutenção'],
    icon: Car,
    color: 'bg-blue-600'
  },
  {
    id: 'whatsapp-beauty-bot',
    name: 'Bot Beleza WhatsApp',
    description: 'Assistente para salões de beleza com agendamento e consultas de tratamentos',
    category: 'business',
    features: ['Agendamento de serviços', 'Consulta de tratamentos', 'Programa de fidelidade', 'Galeria de trabalhos'],
    icon: Star,
    color: 'bg-pink-600'
  },
  {
    id: 'whatsapp-travel-bot',
    name: 'Bot Viagem WhatsApp',
    description: 'Assistente de viagens com pesquisa de destinos e reservas automatizadas',
    category: 'business',
    features: ['Pesquisa de destinos', 'Reservas automáticas', 'Itinerários personalizados', 'Clima e dicas locais'],
    icon: PlaneTakeoff,
    color: 'bg-indigo-600'
  },
  {
    id: 'whatsapp-pet-bot',
    name: 'Bot Pet Care WhatsApp',
    description: 'Assistente para pet shops e veterinárias com agendamento e cuidados',
    category: 'health',
    features: ['Agendamento veterinário', 'Lembretes de vacina', 'Dicas de cuidados', 'Emergências 24h'],
    icon: Heart,
    color: 'bg-orange-600'
  },
  {
    id: 'whatsapp-legal-bot',
    name: 'Bot Jurídico WhatsApp',
    description: 'Assistente jurídico com consultas automatizadas e agendamento de advogados',
    category: 'business',
    features: ['Consultas jurídicas', 'Documentos automáticos', 'Agendamento de advogados', 'Acompanhamento de processos'],
    icon: Shield,
    color: 'bg-slate-600'
  },
  {
    id: 'whatsapp-fitness-bot',
    name: 'Bot Fitness WhatsApp',
    description: 'Personal trainer virtual com treinos personalizados e acompanhamento nutricional',
    category: 'health',
    features: ['Treinos personalizados', 'Acompanhamento nutricional', 'Motivação diária', 'Progresso visual'],
    icon: Dumbbell,
    color: 'bg-red-600'
  },
  {
    id: 'whatsapp-insurance-bot',
    name: 'Bot Seguros WhatsApp',
    description: 'Assistente para seguradoras com cotações automáticas e sinistros',
    category: 'business',
    features: ['Cotações automáticas', 'Abertura de sinistros', 'Acompanhamento de processos', 'Renovação automática'],
    icon: Shield,
    color: 'bg-blue-600'
  },
  {
    id: 'whatsapp-bank-bot',
    name: 'Bot Bancário WhatsApp',
    description: 'Assistente bancário com consultas de saldo, transferências e investimentos',
    category: 'business',
    features: ['Consulta de saldo', 'Transferências seguras', 'Investimentos automáticos', 'Análise de gastos'],
    icon: CreditCard,
    color: 'bg-green-600'
  },
  {
    id: 'whatsapp-agriculture-bot',
    name: 'Bot Agricultura WhatsApp',
    description: 'Assistente para produtores rurais com monitoramento de cultivos e clima',
    category: 'business',
    features: ['Monitoramento de cultivos', 'Previsão do tempo', 'Dicas de plantio', 'Mercado agrícola'],
    icon: Sprout,
    color: 'bg-green-600'
  }
];

export const getTemplatesByCategory = (categoryId: string): ProjectTemplate[] => {
  if (categoryId === 'all') {
    return projectTemplates;
  }
  return projectTemplates.filter(template => template.category === categoryId);
};

export const searchTemplates = (searchTerm: string): ProjectTemplate[] => {
  const term = searchTerm.toLowerCase();
  return projectTemplates.filter(template => 
    template.name.toLowerCase().includes(term) ||
    template.description.toLowerCase().includes(term) ||
    template.features.some(feature => feature.toLowerCase().includes(term))
  );
};
