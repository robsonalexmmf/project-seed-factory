
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
  Zap,
  Shield,
  Truck,
  Plane,
  MapPin,
  Clock,
  Star,
  Target,
  Trophy,
  Gift,
  Scissors,
  Palette,
  Headphones,
  Video,
  Globe,
  Smartphone,
  Laptop,
  Database,
  Cloud,
  Lock,
  Key,
  Bell,
  Mail,
  Phone,
  Search,
  Filter,
  Settings,
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  Monitor,
  Wifi,
  CreditCard,
  Wallet,
  Calculator,
  FileSpreadsheet,
  Printer,
  Scanner,
  Microphone,
  Speaker,
  Tv,
  Radio,
  Compass,
  Map,
  Route,
  Navigation,
  Anchor,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  TreePine,
  Mountain,
  Sun,
  Moon,
  CloudRain,
  Snowflake,
  Flower,
  Leaf,
  Apple,
  Coffee,
  Pizza,
  IceCream,
  Cake,
  Wine,
  Beer,
  Martini,
  Baby,
  Dog,
  Cat,
  Fish,
  Bird,
  Rabbit,
  Horse,
  Cow,
  Pig,
  Shirt,
  Crown,
  Gem,
  Watch,
  Glasses,
  Umbrella,
  Backpack,
  Suitcase,
  Tent,
  Hammer,
  Wrench,
  Paintbrush,
  Ruler,
  Pencil,
  Pen,
  Bookmark,
  Tag,
  Flag,
  Award,
  Medal,
  Ribbon,
  Ticket,
  QrCode,
  Barcode,
  Package,
  Box,
  Archive,
  Folder,
  File,
  Image,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCw,
  RotateCcw,
  Refresh,
  Download,
  Upload,
  Share,
  Link,
  Unlink,
  Eye,
  EyeOff,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Reply,
  Forward,
  Edit,
  Copy,
  Cut,
  Paste,
  Save,
  Trash,
  Plus,
  Minus,
  X,
  Check,
  AlertTriangle,
  Info,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  CornerDownLeft,
  CornerDownRight,
  CornerUpLeft,
  CornerUpRight,
  Move,
  Grid,
  List,
  Layers,
  Layout,
  Sidebar,
  PanelLeft,
  PanelRight,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Dots,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Pentagon,
  Star as StarIcon,
  Heart as HeartIcon,
  Spade,
  Club
} from 'lucide-react';

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  complexity: 'easy' | 'medium' | 'hard';
  features: string[];
  icon: any;
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
  { id: 'productivity', name: 'Produtividade', icon: Briefcase },
  { id: 'finance', name: 'Financeiro', icon: DollarSign },
  { id: 'travel', name: 'Viagem', icon: Plane },
  { id: 'food', name: 'Alimentação', icon: Utensils },
  { id: 'real-estate', name: 'Imobiliário', icon: Home },
  { id: 'automotive', name: 'Automotivo', icon: Car },
  { id: 'fashion', name: 'Moda', icon: Shirt },
  { id: 'sports', name: 'Esportes', icon: Trophy },
  { id: 'music', name: 'Música', icon: Music },
  { id: 'photography', name: 'Fotografia', icon: Camera },
  { id: 'security', name: 'Segurança', icon: Shield },
  { id: 'analytics', name: 'Analytics', icon: BarChart3 }
];

export const projectTemplates: ProjectTemplate[] = [
  // E-commerce
  {
    id: 'ecommerce-store',
    name: 'Loja Virtual Completa',
    description: 'Plataforma de e-commerce com carrinho, pagamentos e gestão de produtos',
    category: 'ecommerce',
    complexity: 'medium',
    icon: ShoppingCart,
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
    icon: Building,
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
    icon: Truck,
    features: [
      'Catálogo de restaurantes',
      'Rastreamento em tempo real',
      'Sistema de pagamento',
      'Avaliações e comentários',
      'Programa de fidelidade',
      'Dashboard para entregadores'
    ]
  },
  {
    id: 'subscription-box',
    name: 'Caixas de Assinatura',
    description: 'Plataforma para vendas de produtos por assinatura mensal',
    category: 'ecommerce',
    complexity: 'medium',
    icon: Package,
    features: [
      'Assinaturas recorrentes',
      'Customização de caixas',
      'Gestão de inventário',
      'Portal do assinante',
      'Analytics de retenção',
      'Sistema de cupons'
    ]
  },
  {
    id: 'digital-products',
    name: 'Loja de Produtos Digitais',
    description: 'Marketplace para venda de ebooks, cursos, softwares',
    category: 'ecommerce',
    complexity: 'easy',
    icon: Download,
    features: [
      'Downloads seguros',
      'Proteção DRM',
      'Sistema de afiliados',
      'Reviews e ratings',
      'Versionamento de produtos',
      'Analytics de vendas'
    ]
  },
  {
    id: 'dropshipping',
    name: 'Loja Dropshipping',
    description: 'Sistema automatizado de dropshipping com fornecedores',
    category: 'ecommerce',
    complexity: 'medium',
    icon: Globe,
    features: [
      'Integração com fornecedores',
      'Importação automática de produtos',
      'Sincronização de estoque',
      'Cálculo automático de frete',
      'Gestão de pedidos',
      'Dashboard de lucros'
    ]
  },

  // Social
  {
    id: 'social-network',
    name: 'Rede Social',
    description: 'Plataforma de rede social com posts, amigos e chat',
    category: 'social',
    complexity: 'hard',
    icon: Users,
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
    icon: Heart,
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
    icon: MessageSquare,
    features: [
      'Categorias de tópicos',
      'Sistema de votação',
      'Moderação de conteúdo',
      'Perfis de usuário',
      'Busca avançada',
      'Notificações'
    ]
  },
  {
    id: 'community-platform',
    name: 'Plataforma de Comunidade',
    description: 'Espaço para criar e gerenciar comunidades online',
    category: 'social',
    complexity: 'medium',
    icon: Users,
    features: [
      'Criação de grupos',
      'Eventos da comunidade',
      'Sistema de badges',
      'Ranking de membros',
      'Fóruns privados',
      'Monetização de comunidade'
    ]
  },
  {
    id: 'influencer-platform',
    name: 'Plataforma de Influenciadores',
    description: 'Conecta marcas com influenciadores digitais',
    category: 'social',
    complexity: 'medium',
    icon: Star,
    features: [
      'Perfil de influenciadores',
      'Sistema de campanhas',
      'Analytics de engajamento',
      'Pagamentos automáticos',
      'Contratos digitais',
      'Portfolio de trabalhos'
    ]
  },

  // Business
  {
    id: 'crm-system',
    name: 'Sistema CRM',
    description: 'CRM completo para gestão de clientes e vendas',
    category: 'business',
    complexity: 'medium',
    icon: Briefcase,
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
    icon: Building,
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
    icon: FileText,
    features: [
      'Emissão de NFe',
      'Controle de cobrança',
      'Relatórios fiscais',
      'Integração bancária',
      'Dashboard financeiro',
      'Clientes e produtos'
    ]
  },
  {
    id: 'hr-management',
    name: 'Gestão de RH',
    description: 'Sistema completo para recursos humanos',
    category: 'business',
    complexity: 'medium',
    icon: Users,
    features: [
      'Cadastro de funcionários',
      'Controle de ponto',
      'Folha de pagamento',
      'Avaliações de desempenho',
      'Recrutamento',
      'Treinamentos'
    ]
  },
  {
    id: 'inventory-management',
    name: 'Controle de Estoque',
    description: 'Sistema de gestão de inventário e logística',
    category: 'business',
    complexity: 'medium',
    icon: Package,
    features: [
      'Controle de entrada/saída',
      'Alertas de estoque baixo',
      'Relatórios de movimentação',
      'Códigos de barras',
      'Múltiplos depósitos',
      'Integração com vendas'
    ]
  },
  {
    id: 'project-management',
    name: 'Gestão de Projetos',
    description: 'Ferramenta completa para gerenciamento de projetos',
    category: 'business',
    complexity: 'medium',
    icon: Target,
    features: [
      'Cronograma de projetos',
      'Gestão de tarefas',
      'Controle de recursos',
      'Relatórios de progresso',
      'Colaboração em equipe',
      'Orçamentos'
    ]
  },

  // Content
  {
    id: 'blog-platform',
    name: 'Plataforma de Blog',
    description: 'CMS para blogs com múltiplos autores',
    category: 'content',
    complexity: 'easy',
    icon: FileText,
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
    icon: Microphone,
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
    icon: Globe,
    features: [
      'Sistema editorial',
      'Categorias de notícias',
      'Breaking news',
      'Newsletter automática',
      'SEO avançado',
      'Comentários moderados'
    ]
  },
  {
    id: 'content-management',
    name: 'CMS Empresarial',
    description: 'Sistema de gestão de conteúdo para empresas',
    category: 'content',
    complexity: 'medium',
    icon: Database,
    features: [
      'Editor WYSIWYG',
      'Workflow de aprovação',
      'Versionamento',
      'Multi-idioma',
      'Templates personalizados',
      'API headless'
    ]
  },
  {
    id: 'digital-magazine',
    name: 'Revista Digital',
    description: 'Plataforma para publicação de revistas online',
    category: 'content',
    complexity: 'medium',
    icon: BookOpen,
    features: [
      'Layout responsivo',
      'Assinaturas digitais',
      'Edições interativas',
      'Comentários dos leitores',
      'Analytics de leitura',
      'Monetização por ads'
    ]
  },

  // Health
  {
    id: 'telemedicine',
    name: 'Plataforma de Telemedicina',
    description: 'Sistema para consultas médicas online',
    category: 'health',
    complexity: 'hard',
    icon: Heart,
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
    icon: Activity,
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
    icon: Heart,
    features: [
      'Meditações guiadas',
      'Diário de humor',
      'Exercícios de respiração',
      'Terapia online',
      'Acompanhamento de progresso',
      'Conteúdo educativo'
    ]
  },
  {
    id: 'nutrition-tracker',
    name: 'Rastreador Nutricional',
    description: 'App para acompanhamento de dieta e nutrição',
    category: 'health',
    complexity: 'medium',
    icon: Apple,
    features: [
      'Banco de alimentos',
      'Cálculo de macros',
      'Planejamento de refeições',
      'Scanner de códigos',
      'Relatórios nutricionais',
      'Integração com wearables'
    ]
  },
  {
    id: 'clinic-management',
    name: 'Gestão de Clínicas',
    description: 'Sistema completo para administração de clínicas médicas',
    category: 'health',
    complexity: 'hard',
    icon: Building,
    features: [
      'Agenda médica',
      'Prontuário eletrônico',
      'Faturamento TISS',
      'Estoque de medicamentos',
      'Relatórios médicos',
      'Portal do paciente'
    ]
  },

  // Education
  {
    id: 'lms-platform',
    name: 'Plataforma LMS',
    description: 'Sistema de gestão de aprendizagem completo',
    category: 'education',
    complexity: 'hard',
    icon: GraduationCap,
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
    icon: BookOpen,
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
    icon: Building,
    features: [
      'Gestão de alunos',
      'Boletim eletrônico',
      'Agenda escolar',
      'Comunicação com pais',
      'Financeiro escolar',
      'Biblioteca digital'
    ]
  },
  {
    id: 'language-learning',
    name: 'App de Idiomas',
    description: 'Plataforma gamificada para aprendizado de idiomas',
    category: 'education',
    complexity: 'medium',
    icon: Globe,
    features: [
      'Lições interativas',
      'Sistema de pontuação',
      'Reconhecimento de voz',
      'Chat com nativos',
      'Certificações',
      'Progresso adaptativo'
    ]
  },
  {
    id: 'tutoring-platform',
    name: 'Plataforma de Tutoria',
    description: 'Conecta estudantes com tutores particulares',
    category: 'education',
    complexity: 'medium',
    icon: Users,
    features: [
      'Busca de tutores',
      'Agendamento de aulas',
      'Videochamadas',
      'Sistema de pagamento',
      'Avaliações',
      'Material didático'
    ]
  },

  // Entertainment
  {
    id: 'streaming-platform',
    name: 'Plataforma de Streaming',
    description: 'Netflix-like para vídeos e filmes',
    category: 'entertainment',
    complexity: 'hard',
    icon: PlayCircle,
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
    icon: Gamepad2,
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
    icon: Ticket,
    features: [
      'Criação de eventos',
      'Venda de ingressos',
      'Check-in por QR Code',
      'Networking entre participantes',
      'Streaming de eventos',
      'Analytics de evento'
    ]
  },
  {
    id: 'music-streaming',
    name: 'Streaming de Música',
    description: 'Plataforma de música estilo Spotify',
    category: 'entertainment',
    complexity: 'hard',
    icon: Music,
    features: [
      'Biblioteca musical',
      'Playlists personalizadas',
      'Player offline',
      'Descoberta musical',
      'Podcasts integrados',
      'Social sharing'
    ]
  },
  {
    id: 'live-streaming',
    name: 'Live Streaming',
    description: 'Plataforma para transmissões ao vivo',
    category: 'entertainment',
    complexity: 'hard',
    icon: Video,
    features: [
      'Transmissão HD',
      'Chat em tempo real',
      'Doações/Tips',
      'Sistema de moderação',
      'VOD automático',
      'Multi-streaming'
    ]
  },

  // Productivity
  {
    id: 'task-manager',
    name: 'Gerenciador de Tarefas',
    description: 'Asana-like para gestão de projetos e tarefas',
    category: 'productivity',
    complexity: 'medium',
    icon: CheckCircle,
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
    icon: FileText,
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
    icon: Clock,
    features: [
      'Timer de atividades',
      'Relatórios de tempo',
      'Faturamento por horas',
      'Múltiplos projetos',
      'Dashboard de produtividade',
      'Integração com calendário'
    ]
  },
  {
    id: 'document-management',
    name: 'Gestão de Documentos',
    description: 'Sistema para organização e controle de documentos',
    category: 'productivity',
    complexity: 'medium',
    icon: Archive,
    features: [
      'Upload e organização',
      'Controle de versões',
      'Assinatura digital',
      'Busca por conteúdo',
      'Workflow de aprovação',
      'Backup automático'
    ]
  },
  {
    id: 'calendar-scheduling',
    name: 'Agendamento Inteligente',
    description: 'Sistema avançado de agendamento e calendários',
    category: 'productivity',
    complexity: 'medium',
    icon: Calendar,
    features: [
      'Múltiplos calendários',
      'Agendamento automático',
      'Integração com email',
      'Lembretes inteligentes',
      'Sincronização multi-device',
      'Analytics de tempo'
    ]
  },

  // Finance
  {
    id: 'accounting-software',
    name: 'Software Contábil',
    description: 'Sistema completo de contabilidade empresarial',
    category: 'finance',
    complexity: 'hard',
    icon: Calculator,
    features: [
      'Plano de contas',
      'Lançamentos contábeis',
      'Balancetes e balanços',
      'DRE automático',
      'Obrigações fiscais',
      'Conciliação bancária'
    ]
  },
  {
    id: 'expense-tracker',
    name: 'Controle de Gastos',
    description: 'App para controle de despesas pessoais',
    category: 'finance',
    complexity: 'easy',
    icon: Wallet,
    features: [
      'Categorização automática',
      'Metas de gastos',
      'Relatórios visuais',
      'Sincronização bancária',
      'Alertas de orçamento',
      'Múltiplas moedas'
    ]
  },
  {
    id: 'investment-platform',
    name: 'Plataforma de Investimentos',
    description: 'Sistema para gestão de carteira de investimentos',
    category: 'finance',
    complexity: 'hard',
    icon: TrendingUp,
    features: [
      'Portfolio tracking',
      'Análise de performance',
      'Alertas de preços',
      'Research de ativos',
      'Simuladores',
      'Relatórios fiscais'
    ]
  },
  {
    id: 'payment-gateway',
    name: 'Gateway de Pagamento',
    description: 'Sistema de processamento de pagamentos online',
    category: 'finance',
    complexity: 'hard',
    icon: CreditCard,
    features: [
      'Múltiplos métodos',
      'Antifraude',
      'Checkout transparente',
      'Assinaturas recorrentes',
      'Split de pagamentos',
      'Dashboard financeiro'
    ]
  },
  {
    id: 'loan-management',
    name: 'Gestão de Empréstimos',
    description: 'Sistema para controle de empréstimos e financiamentos',
    category: 'finance',
    complexity: 'medium',
    icon: DollarSign,
    features: [
      'Cálculo de juros',
      'Amortização',
      'Controle de parcelas',
      'Relatórios de inadimplência',
      'Negociação de dívidas',
      'Score de crédito'
    ]
  },

  // Travel
  {
    id: 'booking-platform',
    name: 'Plataforma de Reservas',
    description: 'Sistema para reservas de hotéis e viagens',
    category: 'travel',
    complexity: 'hard',
    icon: Plane,
    features: [
      'Busca de acomodações',
      'Sistema de reservas',
      'Pagamentos online',
      'Avaliações de usuários',
      'Mapas integrados',
      'Gestão de disponibilidade'
    ]
  },
  {
    id: 'travel-planner',
    name: 'Planejador de Viagens',
    description: 'App para planejamento completo de viagens',
    category: 'travel',
    complexity: 'medium',
    icon: MapPin,
    features: [
      'Roteiros personalizados',
      'Orçamento de viagem',
      'Documentos necessários',
      'Clima e fuso horário',
      'Compartilhamento',
      'Offline maps'
    ]
  },
  {
    id: 'car-rental',
    name: 'Aluguel de Carros',
    description: 'Plataforma para aluguel de veículos',
    category: 'travel',
    complexity: 'medium',
    icon: Car,
    features: [
      'Frota de veículos',
      'Reservas online',
      'Check-in digital',
      'Seguro integrado',
      'GPS tracking',
      'Faturamento automático'
    ]
  },
  {
    id: 'tour-guide',
    name: 'Guia Turístico Digital',
    description: 'App de tours e experiências locais',
    category: 'travel',
    complexity: 'medium',
    icon: Compass,
    features: [
      'Tours guiados',
      'Áudio guias',
      'Realidade aumentada',
      'Pontos de interesse',
      'Reviews e fotos',
      'Reservas de experiências'
    ]
  },
  {
    id: 'airline-booking',
    name: 'Reservas Aéreas',
    description: 'Sistema de reservas para companhias aéreas',
    category: 'travel',
    complexity: 'hard',
    icon: Plane,
    features: [
      'Busca de voos',
      'Check-in online',
      'Seleção de assentos',
      'Bagagem extra',
      'Programa de milhas',
      'Notificações de voo'
    ]
  },

  // Food
  {
    id: 'restaurant-pos',
    name: 'Sistema POS Restaurante',
    description: 'PDV completo para restaurantes e bares',
    category: 'food',
    complexity: 'medium',
    icon: Utensils,
    features: [
      'Cardápio digital',
      'Pedidos mesa',
      'Controle de cozinha',
      'Gestão de mesas',
      'Relatórios de vendas',
      'Integração delivery'
    ]
  },
  {
    id: 'recipe-platform',
    name: 'Plataforma de Receitas',
    description: 'Rede social de culinária e receitas',
    category: 'food',
    complexity: 'medium',
    icon: Coffee,
    features: [
      'Banco de receitas',
      'Lista de compras',
      'Timer de cozinha',
      'Conversão de medidas',
      'Avaliações',
      'Comunidade culinária'
    ]
  },
  {
    id: 'food-delivery',
    name: 'Delivery de Comida',
    description: 'Aplicativo completo de delivery gastronômico',
    category: 'food',
    complexity: 'hard',
    icon: Truck,
    features: [
      'Multi-restaurantes',
      'Rastreamento GPS',
      'Pagamento integrado',
      'Programa fidelidade',
      'Chat suporte',
      'Analytics delivery'
    ]
  },
  {
    id: 'meal-planning',
    name: 'Planejamento de Refeições',
    description: 'App para planejar refeições semanais',
    category: 'food',
    complexity: 'easy',
    icon: Calendar,
    features: [
      'Cardápio semanal',
      'Lista automática compras',
      'Controle nutricional',
      'Receitas sugeridas',
      'Orçamento alimentar',
      'Desperdício zero'
    ]
  },
  {
    id: 'kitchen-inventory',
    name: 'Estoque de Cozinha',
    description: 'Controle de estoque para cozinhas profissionais',
    category: 'food',
    complexity: 'medium',
    icon: Package,
    features: [
      'Controle de validade',
      'Alertas de reposição',
      'Cálculo de custos',
      'Fornecedores',
      'Receitas padronizadas',
      'Relatórios desperdício'
    ]
  },

  // Real Estate
  {
    id: 'real-estate-crm',
    name: 'CRM Imobiliário',
    description: 'Sistema completo para imobiliárias',
    category: 'real-estate',
    complexity: 'hard',
    icon: Home,
    features: [
      'Cadastro de imóveis',
      'Gestão de clientes',
      'Tours virtuais',
      'Contratos digitais',
      'Comissões automáticas',
      'Site integrado'
    ]
  },
  {
    id: 'property-management',
    name: 'Gestão de Propriedades',
    description: 'Sistema para administração de imóveis',
    category: 'real-estate',
    complexity: 'medium',
    icon: Building,
    features: [
      'Controle de aluguéis',
      'Manutenções',
      'Portal do inquilino',
      'Relatórios financeiros',
      'Documentos digitais',
      'Avisos e comunicados'
    ]
  },
  {
    id: 'real-estate-marketplace',
    name: 'Marketplace Imobiliário',
    description: 'Portal de compra e venda de imóveis',
    category: 'real-estate',
    complexity: 'hard',
    icon: Globe,
    features: [
      'Busca avançada',
      'Mapas interativos',
      'Calculadora financiamento',
      'Visitas agendadas',
      'Comparador imóveis',
      'Alertas personalizados'
    ]
  },
  {
    id: 'construction-management',
    name: 'Gestão de Obras',
    description: 'Sistema para gerenciamento de construções',
    category: 'real-estate',
    complexity: 'hard',
    icon: Hammer,
    features: [
      'Cronograma de obras',
      'Controle de materiais',
      'Gestão de equipes',
      'Orçamentos detalhados',
      'Fotos de progresso',
      'Documentação técnica'
    ]
  },
  {
    id: 'home-services',
    name: 'Serviços Residenciais',
    description: 'Plataforma para contratação de serviços domésticos',
    category: 'real-estate',
    complexity: 'medium',
    icon: Wrench,
    features: [
      'Busca de profissionais',
      'Agendamento online',
      'Avaliações e reviews',
      'Pagamento seguro',
      'Chat integrado',
      'Garantia de serviços'
    ]
  },

  // Automotive
  {
    id: 'car-dealership',
    name: 'Concessionária Digital',
    description: 'Sistema completo para vendas de veículos',
    category: 'automotive',
    complexity: 'hard',
    icon: Car,
    features: [
      'Catálogo de veículos',
      'Financiamento online',
      'Test drive agendado',
      'Avaliação usados',
      'CRM integrado',
      'Pós-venda'
    ]
  },
  {
    id: 'car-maintenance',
    name: 'Manutenção Veicular',
    description: 'App para controle de manutenção de frotas',
    category: 'automotive',
    complexity: 'medium',
    icon: Wrench,
    features: [
      'Agenda de revisões',
      'Histórico veicular',
      'Rede credenciada',
      'Orçamentos online',
      'Alertas vencimento',
      'Relatórios de custos'
    ]
  },
  {
    id: 'car-sharing',
    name: 'Compartilhamento de Carros',
    description: 'Plataforma de car sharing urbano',
    category: 'automotive',
    complexity: 'hard',
    icon: Users,
    features: [
      'Localização GPS',
      'Desbloqueio por app',
      'Pagamento por uso',
      'Verificação usuários',
      'Manutenção preventiva',
      'Analytics de uso'
    ]
  },
  {
    id: 'driving-school',
    name: 'Auto Escola Digital',
    description: 'Sistema para gestão de auto escolas',
    category: 'automotive',
    complexity: 'medium',
    icon: GraduationCap,
    features: [
      'Agendamento de aulas',
      'Simulados online',
      'Controle de frota',
      'Portal do aluno',
      'Relatórios DETRAN',
      'Pagamentos online'
    ]
  },
  {
    id: 'fuel-tracking',
    name: 'Controle de Combustível',
    description: 'Sistema para gestão de abastecimento',
    category: 'automotive',
    complexity: 'easy',
    icon: Target,
    features: [
      'Registro abastecimentos',
      'Cálculo consumo',
      'Relatórios de gastos',
      'Alertas manutenção',
      'Comparativo preços',
      'Múltiplos veículos'
    ]
  },

  // Fashion
  {
    id: 'fashion-ecommerce',
    name: 'Loja de Moda Online',
    description: 'E-commerce especializado em moda e acessórios',
    category: 'fashion',
    complexity: 'medium',
    icon: Shirt,
    features: [
      'Catálogo de produtos',
      'Provador virtual',
      'Guia de tamanhos',
      'Wishlist',
      'Recomendações IA',
      'Programa fidelidade'
    ]
  },
  {
    id: 'fashion-rental',
    name: 'Aluguel de Roupas',
    description: 'Plataforma para aluguel de vestuário',
    category: 'fashion',
    complexity: 'medium',
    icon: Crown,
    features: [
      'Catálogo premium',
      'Agendamento entrega',
      'Controle de devoluções',
      'Limpeza rastreada',
      'Assinatura mensal',
      'Seguro produtos'
    ]
  },
  {
    id: 'personal-stylist',
    name: 'Personal Stylist Digital',
    description: 'App de consultoria de moda personalizada',
    category: 'fashion',
    complexity: 'medium',
    icon: Palette,
    features: [
      'Quiz de estilo',
      'Consultoria virtual',
      'Montagem de looks',
      'Shopping list',
      'Análise de guarda-roupa',
      'Tendências fashion'
    ]
  },
  {
    id: 'fashion-marketplace',
    name: 'Marketplace de Moda',
    description: 'Plataforma para marcas independentes',
    category: 'fashion',
    complexity: 'hard',
    icon: ShoppingCart,
    features: [
      'Multi-brand',
      'Designer showcase',
      'Customização produtos',
      'Sustentabilidade tracking',
      'Influencer partnerships',
      'AR try-on'
    ]
  },
  {
    id: 'wardrobe-manager',
    name: 'Organizador de Guarda-roupa',
    description: 'App para organização de vestuário pessoal',
    category: 'fashion',
    complexity: 'easy',
    icon: Archive,
    features: [
      'Catálogo pessoal',
      'Combinações automáticas',
      'Clima integrado',
      'Estatísticas de uso',
      'Doação sugerida',
      'Planejamento outfits'
    ]
  },

  // Sports
  {
    id: 'sports-betting',
    name: 'Apostas Esportivas',
    description: 'Plataforma de apostas esportivas online',
    category: 'sports',
    complexity: 'hard',
    icon: Trophy,
    features: [
      'Odds dinâmicas',
      'Live betting',
      'Streaming integrado',
      'Cash out',
      'Estatísticas detalhadas',
      'Gestão de bankroll'
    ]
  },
  {
    id: 'fitness-tracker',
    name: 'Rastreador de Exercícios',
    description: 'App completo para acompanhamento fitness',
    category: 'sports',
    complexity: 'medium',
    icon: Activity,
    features: [
      'Workout tracking',
      'Planos personalizados',
      'Integração wearables',
      'Nutrição integrada',
      'Social challenges',
      'Personal trainer'
    ]
  },
  {
    id: 'sports-league',
    name: 'Gestão de Ligas',
    description: 'Sistema para organização de campeonatos',
    category: 'sports',
    complexity: 'medium',
    icon: Medal,
    features: [
      'Tabelas e classificações',
      'Agendamento jogos',
      'Estatísticas jogadores',
      'Transmissão ao vivo',
      'Arbitragem digital',
      'Premiações automáticas'
    ]
  },
  {
    id: 'gym-management',
    name: 'Gestão de Academia',
    description: 'Sistema completo para administração de academias',
    category: 'sports',
    complexity: 'medium',
    icon: Building,
    features: [
      'Controle de acesso',
      'Planos de treino',
      'Agendamento equipamentos',
      'Gestão financeira',
      'App do aluno',
      'Avaliação física'
    ]
  },
  {
    id: 'sports-analytics',
    name: 'Analytics Esportivo',
    description: 'Plataforma de análise de performance esportiva',
    category: 'sports',
    complexity: 'hard',
    icon: BarChart3,
    features: [
      'Métricas avançadas',
      'Video analysis',
      'Comparativo atletas',
      'Previsão performance',
      'Relatórios técnicos',
      'Scout digital'
    ]
  },

  // Music
  {
    id: 'music-production',
    name: 'Estúdio Musical Digital',
    description: 'DAW online para produção musical',
    category: 'music',
    complexity: 'hard',
    icon: Music,
    features: [
      'Multi-track recording',
      'VST plugins',
      'Collaboration tools',
      'Sample library',
      'Mixing console',
      'Export formatos'
    ]
  },
  {
    id: 'band-management',
    name: 'Gestão de Bandas',
    description: 'Sistema para administração de grupos musicais',
    category: 'music',
    complexity: 'medium',
    icon: Users,
    features: [
      'Agenda de shows',
      'Repertório compartilhado',
      'Gestão financeira',
      'Contratos digitais',
      'Promocional kit',
      'Fan engagement'
    ]
  },
  {
    id: 'music-lessons',
    name: 'Aulas de Música Online',
    description: 'Plataforma para ensino musical digital',
    category: 'music',
    complexity: 'medium',
    icon: GraduationCap,
    features: [
      'Video lessons',
      'Exercícios interativos',
      'Metrônomo integrado',
      'Avaliação automática',
      'Múltiplos instrumentos',
      'Certificação musical'
    ]
  },
  {
    id: 'concert-booking',
    name: 'Booking de Shows',
    description: 'Plataforma para contratação de artistas',
    category: 'music',
    complexity: 'medium',
    icon: Ticket,
    features: [
      'Portfólio artistas',
      'Calendário disponibilidade',
      'Negociação de cachê',
      'Contratos automáticos',
      'Reviews eventos',
      'Logística integrada'
    ]
  },
  {
    id: 'music-discovery',
    name: 'Descoberta Musical',
    description: 'App para descobrir nova música',
    category: 'music',
    complexity: 'medium',
    icon: Search,
    features: [
      'Algoritmo recomendação',
      'Social playlists',
      'Mood detection',
      'Artist discovery',
      'Concert finder',
      'Music trends'
    ]
  },

  // Photography
  {
    id: 'photo-studio',
    name: 'Estúdio Fotográfico',
    description: 'Sistema para gestão de estúdios de fotografia',
    category: 'photography',
    complexity: 'medium',
    icon: Camera,
    features: [
      'Agendamento sessões',
      'Galeria cliente',
      'Edição colaborativa',
      'Orçamentos automáticos',
      'Contratos digitais',
      'Entrega digital'
    ]
  },
  {
    id: 'stock-photos',
    name: 'Banco de Imagens',
    description: 'Marketplace de fotografias stock',
    category: 'photography',
    complexity: 'hard',
    icon: Image,
    features: [
      'Upload em massa',
      'Sistema de tags',
      'Busca por IA',
      'Licenciamento automático',
      'Royalties contributors',
      'API integração'
    ]
  },
  {
    id: 'wedding-photography',
    name: 'Fotografia de Casamento',
    description: 'Plataforma especializada em casamentos',
    category: 'photography',
    complexity: 'medium',
    icon: Heart,
    features: [
      'Portfolio especializado',
      'Timeline evento',
      'Lista de convidados',
      'Sharing automático',
      'Álbum colaborativo',
      'Momento especiais'
    ]
  },
  {
    id: 'photo-editing',
    name: 'Editor de Fotos Online',
    description: 'Ferramenta de edição fotográfica web',
    category: 'photography',
    complexity: 'hard',
    icon: Palette,
    features: [
      'Filtros profissionais',
      'Retoque automático',
      'Batch processing',
      'Cloud storage',
      'Template designs',
      'Export high-res'
    ]
  },
  {
    id: 'photo-contest',
    name: 'Concurso de Fotografia',
    description: 'Plataforma para competições fotográficas',
    category: 'photography',
    complexity: 'medium',
    icon: Trophy,
    features: [
      'Submissão de fotos',
      'Sistema de votação',
      'Júri especializado',
      'Categorias múltiplas',
      'Premiação automática',
      'Galeria vencedores'
    ]
  },

  // Security
  {
    id: 'cybersecurity-platform',
    name: 'Plataforma de Cibersegurança',
    description: 'Sistema completo de monitoramento de segurança',
    category: 'security',
    complexity: 'hard',
    icon: Shield,
    features: [
      'Threat detection',
      'Real-time monitoring',
      'Incident response',
      'Vulnerability scanning',
      'Compliance reporting',
      'SOC dashboard'
    ]
  },
  {
    id: 'password-manager',
    name: 'Gerenciador de Senhas',
    description: 'Cofre digital para senhas e dados sensíveis',
    category: 'security',
    complexity: 'medium',
    icon: Key,
    features: [
      'Criptografia end-to-end',
      'Gerador de senhas',
      'Auto-fill seguro',
      'Compartilhamento controlado',
      'Auditoria de segurança',
      'Autenticação biométrica'
    ]
  },
  {
    id: 'access-control',
    name: 'Controle de Acesso',
    description: 'Sistema de gestão de acessos físicos e digitais',
    category: 'security',
    complexity: 'hard',
    icon: Lock,
    features: [
      'Biometria integrada',
      'Cartões de acesso',
      'Logs detalhados',
      'Zonas de segurança',
      'Alertas tempo real',
      'Integração câmeras'
    ]
  },
  {
    id: 'surveillance-system',
    name: 'Sistema de Vigilância',
    description: 'Plataforma de monitoramento por câmeras',
    category: 'security',
    complexity: 'hard',
    icon: Eye,
    features: [
      'Multi-câmeras',
      'Detecção movimento',
      'Reconhecimento facial',
      'Gravação em nuvem',
      'Alertas inteligentes',
      'App mobile viewing'
    ]
  },
  {
    id: 'fraud-detection',
    name: 'Detecção de Fraudes',
    description: 'Sistema de prevenção e detecção de fraudes',
    category: 'security',
    complexity: 'hard',
    icon: AlertTriangle,
    features: [
      'Machine learning',
      'Análise comportamental',
      'Score de risco',
      'Alertas automáticos',
      'Investigação digital',
      'Compliance automático'
    ]
  },

  // Analytics
  {
    id: 'business-intelligence',
    name: 'Business Intelligence',
    description: 'Plataforma completa de BI e analytics',
    category: 'analytics',
    complexity: 'hard',
    icon: BarChart3,
    features: [
      'Dashboards interativos',
      'Data warehousing',
      'Relatórios automáticos',
      'Previsões IA',
      'KPIs personalizados',
      'Data visualization'
    ]
  },
  {
    id: 'web-analytics',
    name: 'Analytics Web',
    description: 'Sistema de análise de tráfego web',
    category: 'analytics',
    complexity: 'medium',
    icon: Monitor,
    features: [
      'Tracking de usuários',
      'Conversion funnels',
      'Heat maps',
      'A/B testing',
      'SEO insights',
      'Real-time data'
    ]
  },
  {
    id: 'social-analytics',
    name: 'Analytics de Redes Sociais',
    description: 'Monitoramento de performance em redes sociais',
    category: 'analytics',
    complexity: 'medium',
    icon: TrendingUp,
    features: [
      'Multi-platform tracking',
      'Engagement metrics',
      'Sentiment analysis',
      'Competitor analysis',
      'Content optimization',
      'Influencer tracking'
    ]
  },
  {
    id: 'sales-analytics',
    name: 'Analytics de Vendas',
    description: 'Análise avançada de performance de vendas',
    category: 'analytics',
    complexity: 'medium',
    icon: PieChart,
    features: [
      'Sales pipeline',
      'Performance tracking',
      'Forecasting automático',
      'Territory management',
      'Commission tracking',
      'ROI analysis'
    ]
  },
  {
    id: 'marketing-analytics',
    name: 'Analytics de Marketing',
    description: 'Plataforma de análise de campanhas de marketing',
    category: 'analytics',
    complexity: 'medium',
    icon: Target,
    features: [
      'Campaign tracking',
      'Attribution modeling',
      'Customer journey',
      'Marketing mix',
      'Budget optimization',
      'Cross-channel analytics'
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
