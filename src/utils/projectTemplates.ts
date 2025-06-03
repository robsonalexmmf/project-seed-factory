import { 
  Store, 
  Users, 
  Calendar, 
  MessageSquare, 
  FileText, 
  BarChart3, 
  ShoppingCart, 
  User, 
  MapPin, 
  Heart, 
  Briefcase, 
  GraduationCap, 
  Car, 
  Home, 
  Gamepad2, 
  Music, 
  Camera, 
  Utensils, 
  Plane, 
  Dumbbell, 
  Stethoscope, 
  PiggyBank, 
  Wrench, 
  Shirt, 
  Coffee, 
  BookOpen, 
  Zap, 
  Shield, 
  Globe, 
  Smartphone, 
  Monitor, 
  Database, 
  Cloud, 
  Lock, 
  Bell, 
  Search, 
  Mail, 
  Share2, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Target, 
  Award, 
  Star, 
  ThumbsUp, 
  MessageCircle, 
  Video, 
  Image, 
  Download, 
  Upload, 
  Edit, 
  Trash2, 
  Plus, 
  Settings, 
  Filter, 
  Sort, 
  Grid, 
  List, 
  Eye, 
  EyeOff, 
  Check, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  ChevronUp, 
  ChevronDown,
  Building,
  Truck,
  Pizza,
  IceCream,
  Sandwich,
  CheckCircle
} from 'lucide-react';

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  icon: any;
  category: string;
  features: string[];
  complexity: 'easy' | 'medium' | 'hard';
  estimatedTime: string;
  tags: string[];
}

export const projectTemplates: ProjectTemplate[] = [
  // E-commerce / Lojas Virtuais
  {
    id: 'ecommerce-fashion',
    name: 'Loja de Roupas Online',
    description: 'E-commerce completo para venda de roupas e acessórios',
    icon: Shirt,
    category: 'ecommerce',
    features: ['Catálogo de produtos', 'Carrinho de compras', 'Pagamentos', 'Gestão de estoque', 'Cupons de desconto', 'Avaliações'],
    complexity: 'medium',
    estimatedTime: '3-5 dias',
    tags: ['ecommerce', 'moda', 'pagamentos', 'stripe']
  },
  {
    id: 'ecommerce-electronics',
    name: 'Loja de Eletrônicos',
    description: 'Marketplace para venda de eletrônicos e gadgets',
    icon: Smartphone,
    category: 'ecommerce',
    features: ['Comparação de produtos', 'Filtros avançados', 'Reviews', 'Wishlist', 'Chat ao vivo', 'Garantia'],
    complexity: 'medium',
    estimatedTime: '4-6 dias',
    tags: ['eletrônicos', 'marketplace', 'reviews']
  },
  {
    id: 'ecommerce-books',
    name: 'Livraria Virtual',
    description: 'E-commerce especializado em livros físicos e digitais',
    icon: BookOpen,
    category: 'ecommerce',
    features: ['E-books', 'Preview de livros', 'Categorias', 'Recomendações', 'Lista de desejos', 'Clube do livro'],
    complexity: 'medium',
    estimatedTime: '3-5 dias',
    tags: ['livros', 'ebooks', 'leitura']
  },
  {
    id: 'ecommerce-beauty',
    name: 'Loja de Cosméticos',
    description: 'E-commerce para produtos de beleza e cuidados pessoais',
    icon: Star,
    category: 'ecommerce',
    features: ['Tutoriais de maquiagem', 'Teste virtual', 'Assinatura mensal', 'Blog de beleza', 'Programa de fidelidade'],
    complexity: 'hard',
    estimatedTime: '5-7 dias',
    tags: ['cosméticos', 'beleza', 'assinatura']
  },
  {
    id: 'ecommerce-pets',
    name: 'Pet Shop Online',
    description: 'Loja virtual para produtos e serviços para pets',
    icon: Heart,
    category: 'ecommerce',
    features: ['Produtos para pets', 'Agendamento veterinário', 'Perfil do pet', 'Receitas veterinárias', 'Delivery'],
    complexity: 'medium',
    estimatedTime: '4-6 dias',
    tags: ['pets', 'veterinário', 'agendamento']
  },

  // Blogs e Conteúdo
  {
    id: 'blog-tech',
    name: 'Blog de Tecnologia',
    description: 'Blog moderno para conteúdo sobre tecnologia e programação',
    icon: Monitor,
    category: 'blog',
    features: ['Editor rich text', 'Comentários', 'Tags', 'SEO otimizado', 'Newsletter', 'Modo escuro'],
    complexity: 'easy',
    estimatedTime: '2-3 dias',
    tags: ['blog', 'tecnologia', 'seo']
  },
  {
    id: 'blog-travel',
    name: 'Blog de Viagens',
    description: 'Plataforma para compartilhar experiências de viagem',
    icon: Plane,
    category: 'blog',
    features: ['Galeria de fotos', 'Mapas interativos', 'Guias de viagem', 'Reviews de hotéis', 'Itinerários'],
    complexity: 'medium',
    estimatedTime: '3-4 dias',
    tags: ['viagens', 'fotos', 'mapas']
  },
  {
    id: 'blog-food',
    name: 'Blog de Culinária',
    description: 'Blog para receitas e dicas culinárias',
    icon: Utensils,
    category: 'blog',
    features: ['Receitas', 'Timer de cozimento', 'Lista de compras', 'Calculadora nutricional', 'Vídeos'],
    complexity: 'medium',
    estimatedTime: '3-5 dias',
    tags: ['culinária', 'receitas', 'vídeos']
  },
  {
    id: 'blog-lifestyle',
    name: 'Blog de Lifestyle',
    description: 'Blog pessoal sobre estilo de vida e bem-estar',
    icon: Star,
    category: 'blog',
    features: ['Posts multimídia', 'Categorias', 'Instagram feed', 'Newsletter', 'Comentários sociais'],
    complexity: 'easy',
    estimatedTime: '2-3 dias',
    tags: ['lifestyle', 'bem-estar', 'pessoal']
  },

  // Delivery / Food
  {
    id: 'delivery-acai',
    name: 'Delivery de Açaí',
    description: 'App de delivery especializado em açaí e sobremesas geladas',
    icon: IceCream,
    category: 'delivery',
    features: ['Cardápio digital', 'Personalização de açaí', 'Rastreamento pedido', 'Programa fidelidade', 'Cupons', 'Avaliações'],
    complexity: 'medium',
    estimatedTime: '4-6 dias',
    tags: ['açaí', 'delivery', 'fidelidade', 'mobile']
  },
  {
    id: 'delivery-lanchonete',
    name: 'Sistema de Lanchonete',
    description: 'Plataforma completa para lanchonetes e fast food',
    icon: Sandwich,
    category: 'delivery',
    features: ['Menu digital', 'Combos personalizados', 'Pagamento online', 'Controle de estoque', 'Relatórios de vendas', 'Delivery'],
    complexity: 'medium',
    estimatedTime: '4-5 dias',
    tags: ['lanchonete', 'fast-food', 'combos', 'estoque']
  },
  {
    id: 'delivery-pizzaria',
    name: 'Sistema de Pizzaria',
    description: 'Solução completa para pizzarias com delivery',
    icon: Pizza,
    category: 'delivery',
    features: ['Montador de pizza', 'Tamanhos e bordas', 'Tempo de entrega', 'Área de cobertura', 'Promoções', 'Histórico de pedidos'],
    complexity: 'hard',
    estimatedTime: '5-7 dias',
    tags: ['pizzaria', 'montador', 'delivery', 'promoções']
  },
  {
    id: 'delivery-restaurant',
    name: 'Delivery de Restaurante',
    description: 'Sistema de delivery para restaurantes',
    icon: Utensils,
    category: 'delivery',
    features: ['Cardápio digital', 'Pedidos online', 'Rastreamento', 'Múltiplas formas de pagamento', 'Reviews'],
    complexity: 'medium',
    estimatedTime: '3-5 dias',
    tags: ['restaurante', 'delivery', 'pagamentos']
  },
  {
    id: 'delivery-coffee',
    name: 'Delivery de Cafeteria',
    description: 'App para delivery de café e lanches rápidos',
    icon: Coffee,
    category: 'delivery',
    features: ['Menu de bebidas', 'Personalização', 'Programa de pontos', 'Pré-pedidos', 'Assinatura mensal'],
    complexity: 'medium',
    estimatedTime: '3-4 dias',
    tags: ['café', 'bebidas', 'assinatura']
  },

  // SaaS / Business
  {
    id: 'crm-sales',
    name: 'CRM de Vendas',
    description: 'Sistema completo de gestão de relacionamento com clientes',
    icon: Users,
    category: 'saas',
    features: ['Pipeline de vendas', 'Gestão de leads', 'Relatórios', 'Integração email', 'Dashboard analytics'],
    complexity: 'hard',
    estimatedTime: '7-10 dias',
    tags: ['crm', 'vendas', 'leads', 'analytics']
  },
  {
    id: 'project-management',
    name: 'Gestão de Projetos',
    description: 'Ferramenta para gerenciamento de projetos e equipes',
    icon: Briefcase,
    category: 'saas',
    features: ['Kanban board', 'Timeline', 'Colaboração em tempo real', 'Time tracking', 'Relatórios'],
    complexity: 'hard',
    estimatedTime: '8-12 dias',
    tags: ['projetos', 'kanban', 'colaboração']
  },
  {
    id: 'inventory-system',
    name: 'Sistema de Estoque',
    description: 'Controle completo de inventário e estoque',
    icon: Database,
    category: 'saas',
    features: ['Controle de entrada/saída', 'Códigos de barras', 'Alertas de estoque baixo', 'Relatórios', 'Múltiplos depósitos'],
    complexity: 'medium',
    estimatedTime: '5-7 dias',
    tags: ['estoque', 'inventário', 'códigos']
  },
  {
    id: 'hr-system',
    name: 'Sistema de RH',
    description: 'Plataforma para gestão de recursos humanos',
    icon: Users,
    category: 'saas',
    features: ['Cadastro funcionários', 'Ponto eletrônico', 'Folha de pagamento', 'Avaliações', 'Documentos'],
    complexity: 'hard',
    estimatedTime: '8-10 dias',
    tags: ['rh', 'funcionários', 'ponto']
  },
  {
    id: 'accounting-system',
    name: 'Sistema Contábil',
    description: 'Software para gestão financeira e contábil',
    icon: DollarSign,
    category: 'saas',
    features: ['Fluxo de caixa', 'Contas a pagar/receber', 'Relatórios fiscais', 'Conciliação bancária', 'NFe'],
    complexity: 'hard',
    estimatedTime: '10-15 dias',
    tags: ['contábil', 'financeiro', 'nfe']
  },

  // Healthcare
  {
    id: 'clinic-management',
    name: 'Gestão de Clínica',
    description: 'Sistema completo para clínicas médicas',
    icon: Stethoscope,
    category: 'healthcare',
    features: ['Agendamento consultas', 'Prontuário eletrônico', 'Prescrições', 'Faturamento', 'Relatórios médicos'],
    complexity: 'hard',
    estimatedTime: '10-12 dias',
    tags: ['clínica', 'prontuário', 'médico']
  },
  {
    id: 'telemedicine',
    name: 'Telemedicina',
    description: 'Plataforma para consultas médicas online',
    icon: Video,
    category: 'healthcare',
    features: ['Videochamadas', 'Agendamento online', 'Receitas digitais', 'Histórico médico', 'Pagamentos'],
    complexity: 'hard',
    estimatedTime: '8-10 dias',
    tags: ['telemedicina', 'vídeo', 'receitas']
  },
  {
    id: 'pharmacy-system',
    name: 'Sistema de Farmácia',
    description: 'Gestão completa para farmácias',
    icon: Shield,
    category: 'healthcare',
    features: ['Controle de medicamentos', 'Receitas', 'Estoque', 'Vendas', 'Convênios', 'Validade'],
    complexity: 'medium',
    estimatedTime: '6-8 dias',
    tags: ['farmácia', 'medicamentos', 'receitas']
  },

  // Education
  {
    id: 'lms-platform',
    name: 'Plataforma de Ensino',
    description: 'Sistema de gestão de aprendizagem (LMS)',
    icon: GraduationCap,
    category: 'education',
    features: ['Cursos online', 'Vídeo aulas', 'Quizzes', 'Certificados', 'Progresso do aluno', 'Fórum'],
    complexity: 'hard',
    estimatedTime: '8-12 dias',
    tags: ['ensino', 'cursos', 'certificados']
  },
  {
    id: 'school-management',
    name: 'Gestão Escolar',
    description: 'Sistema completo para gestão de escolas',
    icon: BookOpen,
    category: 'education',
    features: ['Matrículas', 'Notas', 'Frequência', 'Boletins', 'Comunicados', 'Biblioteca'],
    complexity: 'hard',
    estimatedTime: '10-15 dias',
    tags: ['escola', 'notas', 'frequência']
  },
  {
    id: 'language-learning',
    name: 'App de Idiomas',
    description: 'Aplicativo para aprendizado de idiomas',
    icon: Globe,
    category: 'education',
    features: ['Lições interativas', 'Pronúncia', 'Gamificação', 'Progresso', 'Conversação', 'Certificação'],
    complexity: 'hard',
    estimatedTime: '8-10 dias',
    tags: ['idiomas', 'gamificação', 'conversação']
  },

  // Real Estate
  {
    id: 'real-estate-platform',
    name: 'Imobiliária Online',
    description: 'Plataforma para compra e venda de imóveis',
    icon: Home,
    category: 'realestate',
    features: ['Busca de imóveis', 'Filtros avançados', 'Tour virtual', 'Calculadora financiamento', 'Favoritos'],
    complexity: 'medium',
    estimatedTime: '5-7 dias',
    tags: ['imóveis', 'busca', 'financiamento']
  },
  {
    id: 'property-management',
    name: 'Gestão de Propriedades',
    description: 'Sistema para administração de imóveis',
    icon: Building,
    category: 'realestate',
    features: ['Contratos de aluguel', 'Manutenção', 'Pagamentos', 'Inquilinos', 'Relatórios financeiros'],
    complexity: 'medium',
    estimatedTime: '6-8 dias',
    tags: ['propriedades', 'aluguel', 'inquilinos']
  },

  // Automotive
  {
    id: 'car-marketplace',
    name: 'Marketplace de Carros',
    description: 'Plataforma para compra e venda de veículos',
    icon: Car,
    category: 'automotive',
    features: ['Anúncios de carros', 'Filtros detalhados', 'Financiamento', 'Histórico do veículo', 'Chat'],
    complexity: 'medium',
    estimatedTime: '5-7 dias',
    tags: ['carros', 'marketplace', 'financiamento']
  },
  {
    id: 'auto-service',
    name: 'Oficina Automotiva',
    description: 'Sistema para gestão de oficinas mecânicas',
    icon: Wrench,
    category: 'automotive',
    features: ['Ordens de serviço', 'Estoque de peças', 'Agendamento', 'Orçamentos', 'Histórico do veículo'],
    complexity: 'medium',
    estimatedTime: '5-7 dias',
    tags: ['oficina', 'serviços', 'peças']
  },

  // Finance
  {
    id: 'fintech-wallet',
    name: 'Carteira Digital',
    description: 'Aplicativo de carteira digital e pagamentos',
    icon: PiggyBank,
    category: 'finance',
    features: ['Transferências', 'PIX', 'Cartão virtual', 'Investimentos', 'Cashback', 'Relatórios'],
    complexity: 'hard',
    estimatedTime: '10-15 dias',
    tags: ['fintech', 'pagamentos', 'pix']
  },
  {
    id: 'expense-tracker',
    name: 'Controle de Gastos',
    description: 'App para controle de gastos pessoais',
    icon: BarChart3,
    category: 'finance',
    features: ['Categorias de gastos', 'Metas financeiras', 'Relatórios', 'Sincronização bancária', 'Alertas'],
    complexity: 'medium',
    estimatedTime: '4-6 dias',
    tags: ['gastos', 'finanças', 'metas']
  },
  {
    id: 'investment-platform',
    name: 'Plataforma de Investimentos',
    description: 'Sistema para investimentos e análises',
    icon: TrendingUp,
    category: 'finance',
    features: ['Portfolio', 'Análise de ativos', 'Simulador', 'News financeiras', 'Alertas de preço'],
    complexity: 'hard',
    estimatedTime: '8-12 dias',
    tags: ['investimentos', 'portfolio', 'análise']
  },

  // Fitness & Health
  {
    id: 'gym-management',
    name: 'Gestão de Academia',
    description: 'Sistema completo para academias',
    icon: Dumbbell,
    category: 'fitness',
    features: ['Matrículas', 'Planos de treino', 'Controle de acesso', 'Pagamentos', 'Avaliações físicas'],
    complexity: 'medium',
    estimatedTime: '6-8 dias',
    tags: ['academia', 'treino', 'matrículas']
  },
  {
    id: 'fitness-app',
    name: 'App de Fitness',
    description: 'Aplicativo para exercícios e treinos',
    icon: Target,
    category: 'fitness',
    features: ['Treinos personalizados', 'Vídeos exercícios', 'Progress tracking', 'Nutrição', 'Desafios'],
    complexity: 'medium',
    estimatedTime: '5-7 dias',
    tags: ['fitness', 'treinos', 'nutrição']
  },

  // Entertainment
  {
    id: 'music-streaming',
    name: 'Streaming de Música',
    description: 'Plataforma para streaming de música',
    icon: Music,
    category: 'entertainment',
    features: ['Player de música', 'Playlists', 'Recomendações', 'Offline mode', 'Podcast', 'Social'],
    complexity: 'hard',
    estimatedTime: '10-15 dias',
    tags: ['música', 'streaming', 'playlists']
  },
  {
    id: 'gaming-platform',
    name: 'Plataforma de Games',
    description: 'Marketplace para jogos digitais',
    icon: Gamepad2,
    category: 'entertainment',
    features: ['Loja de jogos', 'Reviews', 'Ranking', 'Achievements', 'Chat', 'Streaming'],
    complexity: 'hard',
    estimatedTime: '12-15 dias',
    tags: ['games', 'marketplace', 'ranking']
  },
  {
    id: 'photo-sharing',
    name: 'Rede Social de Fotos',
    description: 'Plataforma para compartilhamento de fotos',
    icon: Camera,
    category: 'entertainment',
    features: ['Upload de fotos', 'Filtros', 'Stories', 'Likes', 'Comentários', 'Hashtags'],
    complexity: 'medium',
    estimatedTime: '6-8 dias',
    tags: ['fotos', 'social', 'filtros']
  },

  // Social & Communication
  {
    id: 'social-network',
    name: 'Rede Social',
    description: 'Plataforma de rede social completa',
    icon: Users,
    category: 'social',
    features: ['Timeline', 'Posts', 'Amigos', 'Grupos', 'Chat', 'Notificações'],
    complexity: 'hard',
    estimatedTime: '12-20 dias',
    tags: ['social', 'timeline', 'chat']
  },
  {
    id: 'chat-app',
    name: 'App de Mensagens',
    description: 'Aplicativo de mensagens instantâneas',
    icon: MessageSquare,
    category: 'social',
    features: ['Chat em tempo real', 'Grupos', 'Mídia', 'Chamadas', 'Status', 'Criptografia'],
    complexity: 'hard',
    estimatedTime: '8-12 dias',
    tags: ['chat', 'mensagens', 'grupos']
  },
  {
    id: 'forum-platform',
    name: 'Fórum de Discussão',
    description: 'Plataforma de fórum e discussões',
    icon: MessageCircle,
    category: 'social',
    features: ['Tópicos', 'Categorias', 'Moderação', 'Ranking', 'Busca avançada', 'Notificações'],
    complexity: 'medium',
    estimatedTime: '5-7 dias',
    tags: ['fórum', 'discussão', 'moderação']
  },

  // Travel & Tourism
  {
    id: 'travel-booking',
    name: 'Reservas de Viagem',
    description: 'Plataforma para reservas de hotéis e voos',
    icon: Plane,
    category: 'travel',
    features: ['Busca de hotéis', 'Comparação de preços', 'Reviews', 'Mapas', 'Itinerários', 'Check-in'],
    complexity: 'hard',
    estimatedTime: '8-12 dias',
    tags: ['viagem', 'hotéis', 'reservas']
  },
  {
    id: 'tour-guide',
    name: 'Guia Turístico',
    description: 'App para guias turísticos e tours',
    icon: MapPin,
    category: 'travel',
    features: ['Tours guiados', 'Áudio tours', 'Mapas offline', 'Pontos de interesse', 'Realidade aumentada'],
    complexity: 'hard',
    estimatedTime: '8-10 dias',
    tags: ['turismo', 'tours', 'mapas']
  },

  // Marketplace & Services
  {
    id: 'service-marketplace',
    name: 'Marketplace de Serviços',
    description: 'Plataforma para prestadores de serviços',
    icon: Wrench,
    category: 'marketplace',
    features: ['Busca de profissionais', 'Agendamento', 'Avaliações', 'Pagamentos', 'Chat', 'Geolocalização'],
    complexity: 'hard',
    estimatedTime: '8-10 dias',
    tags: ['serviços', 'profissionais', 'agendamento']
  },
  {
    id: 'freelancer-platform',
    name: 'Plataforma de Freelancers',
    description: 'Marketplace para freelancers e projetos',
    icon: Briefcase,
    category: 'marketplace',
    features: ['Projetos', 'Propostas', 'Portfolio', 'Pagamentos escrow', 'Reviews', 'Mensagens'],
    complexity: 'hard',
    estimatedTime: '10-12 dias',
    tags: ['freelancer', 'projetos', 'portfolio']
  },

  // Logistics & Delivery
  {
    id: 'logistics-system',
    name: 'Sistema Logístico',
    description: 'Plataforma para gestão logística',
    icon: Truck,
    category: 'logistics',
    features: ['Rastreamento em tempo real', 'Roteirização', 'Gestão de frota', 'Relatórios', 'API integração'],
    complexity: 'hard',
    estimatedTime: '10-15 dias',
    tags: ['logística', 'rastreamento', 'frota']
  },
  {
    id: 'delivery-platform',
    name: 'Plataforma de Delivery',
    description: 'Sistema multi-restaurante de delivery',
    icon: Truck,
    category: 'logistics',
    features: ['Multi-restaurantes', 'Entregadores', 'Rastreamento', 'Comissões', 'Analytics', 'App mobile'],
    complexity: 'hard',
    estimatedTime: '12-18 dias',
    tags: ['delivery', 'multi-restaurante', 'entregadores']
  },

  // Security & Privacy
  {
    id: 'password-manager',
    name: 'Gerenciador de Senhas',
    description: 'App para gerenciamento seguro de senhas',
    icon: Lock,
    category: 'security',
    features: ['Vault criptografado', 'Gerador de senhas', 'Autofill', '2FA', 'Compartilhamento seguro'],
    complexity: 'hard',
    estimatedTime: '8-10 dias',
    tags: ['senhas', 'segurança', '2fa']
  },
  {
    id: 'vpn-service',
    name: 'Serviço VPN',
    description: 'Aplicativo de VPN e privacidade',
    icon: Shield,
    category: 'security',
    features: ['Conexão VPN', 'Servidores globais', 'Kill switch', 'DNS seguro', 'Logs zero'],
    complexity: 'hard',
    estimatedTime: '12-15 dias',
    tags: ['vpn', 'privacidade', 'segurança']
  },

  // News & Media
  {
    id: 'news-platform',
    name: 'Portal de Notícias',
    description: 'Plataforma de notícias e jornalismo',
    icon: FileText,
    category: 'media',
    features: ['CMS avançado', 'Categorias', 'Newsletter', 'Comentários', 'SEO', 'AMP'],
    complexity: 'medium',
    estimatedTime: '5-7 dias',
    tags: ['notícias', 'jornalismo', 'cms']
  },
  {
    id: 'podcast-platform',
    name: 'Plataforma de Podcast',
    description: 'Sistema para criação e distribuição de podcasts',
    icon: Music,
    category: 'media',
    features: ['Upload de episódios', 'Player customizado', 'Analytics', 'RSS feeds', 'Monetização'],
    complexity: 'medium',
    estimatedTime: '6-8 dias',
    tags: ['podcast', 'áudio', 'monetização']
  },

  // Analytics & Tools
  {
    id: 'analytics-dashboard',
    name: 'Dashboard Analytics',
    description: 'Plataforma de analytics e métricas',
    icon: BarChart3,
    category: 'analytics',
    features: ['Coleta de dados', 'Dashboards customizáveis', 'Relatórios', 'APIs', 'Alertas'],
    complexity: 'hard',
    estimatedTime: '8-12 dias',
    tags: ['analytics', 'métricas', 'dashboards']
  },
  {
    id: 'form-builder',
    name: 'Construtor de Formulários',
    description: 'Ferramenta para criar formulários dinâmicos',
    icon: Edit,
    category: 'tools',
    features: ['Drag & drop', 'Validações', 'Integrações', 'Analytics', 'Temas customizáveis'],
    complexity: 'medium',
    estimatedTime: '5-7 dias',
    tags: ['formulários', 'drag-drop', 'validações']
  },
  {
    id: 'url-shortener',
    name: 'Encurtador de URL',
    description: 'Serviço para encurtar e rastrear links',
    icon: Share2,
    category: 'tools',
    features: ['Encurtamento de links', 'Analytics de cliques', 'Links customizados', 'QR codes', 'API'],
    complexity: 'easy',
    estimatedTime: '2-3 dias',
    tags: ['url', 'links', 'analytics']
  },

  // IoT & Smart Home
  {
    id: 'smart-home',
    name: 'Casa Inteligente',
    description: 'Sistema de automação residencial',
    icon: Home,
    category: 'iot',
    features: ['Controle de dispositivos', 'Automações', 'Sensores', 'Energia', 'Segurança'],
    complexity: 'hard',
    estimatedTime: '12-18 dias',
    tags: ['iot', 'automação', 'sensores']
  },
  {
    id: 'weather-station',
    name: 'Estação Meteorológica',
    description: 'Dashboard para dados meteorológicos',
    icon: Cloud,
    category: 'iot',
    features: ['Dados em tempo real', 'Previsões', 'Alertas', 'Histórico', 'Mapas climáticos'],
    complexity: 'medium',
    estimatedTime: '4-6 dias',
    tags: ['clima', 'meteorologia', 'sensores']
  },

  // API & Development
  {
    id: 'api-gateway',
    name: 'Gateway de API',
    description: 'Sistema de gerenciamento de APIs',
    icon: Zap,
    category: 'developer',
    features: ['Roteamento de APIs', 'Rate limiting', 'Autenticação', 'Analytics', 'Documentação'],
    complexity: 'hard',
    estimatedTime: '10-15 dias',
    tags: ['api', 'gateway', 'rate-limiting']
  },
  {
    id: 'code-sharing',
    name: 'Compartilhamento de Código',
    description: 'Plataforma para snippets de código',
    icon: FileText,
    category: 'developer',
    features: ['Syntax highlighting', 'Versioning', 'Colaboração', 'Comentários', 'Tags'],
    complexity: 'medium',
    estimatedTime: '4-6 dias',
    tags: ['código', 'snippets', 'colaboração']
  },

  // Event Management
  {
    id: 'event-platform',
    name: 'Gestão de Eventos',
    description: 'Plataforma completa para eventos',
    icon: Calendar,
    category: 'events',
    features: ['Criação de eventos', 'Venda de ingressos', 'Check-in', 'Networking', 'Relatórios'],
    complexity: 'hard',
    estimatedTime: '8-12 dias',
    tags: ['eventos', 'ingressos', 'networking']
  },
  {
    id: 'conference-app',
    name: 'App de Conferência',
    description: 'Aplicativo para conferências e palestras',
    icon: Users,
    category: 'events',
    features: ['Agenda', 'Palestrantes', 'Networking', 'Notificações', 'Feedback'],
    complexity: 'medium',
    estimatedTime: '5-7 dias',
    tags: ['conferência', 'palestras', 'agenda']
  },

  // Non-profit & NGO
  {
    id: 'donation-platform',
    name: 'Plataforma de Doações',
    description: 'Sistema para captação de recursos',
    icon: Heart,
    category: 'nonprofit',
    features: ['Campanhas', 'Doações recorrentes', 'Relatórios de impacto', 'Voluntários', 'Transparência'],
    complexity: 'medium',
    estimatedTime: '6-8 dias',
    tags: ['doações', 'campanhas', 'voluntários']
  },
  {
    id: 'volunteer-management',
    name: 'Gestão de Voluntários',
    description: 'Sistema para organizações voluntárias',
    icon: Users,
    category: 'nonprofit',
    features: ['Cadastro voluntários', 'Agendamento', 'Comunicação', 'Certificados', 'Relatórios'],
    complexity: 'medium',
    estimatedTime: '5-7 dias',
    tags: ['voluntários', 'ong', 'certificados']
  },

  // Sports & Recreation
  {
    id: 'sports-league',
    name: 'Liga Esportiva',
    description: 'Sistema para gestão de ligas esportivas',
    icon: Award,
    category: 'sports',
    features: ['Tabelas', 'Jogos', 'Estatísticas', 'Ranking', 'Transmissões', 'Fantasy'],
    complexity: 'medium',
    estimatedTime: '6-8 dias',
    tags: ['esportes', 'liga', 'ranking']
  },
  {
    id: 'booking-sports',
    name: 'Reserva de Quadras',
    description: 'Sistema para reserva de espaços esportivos',
    icon: Calendar,
    category: 'sports',
    features: ['Agendamento', 'Pagamentos', 'Recorrência', 'Cancelamentos', 'Avaliações'],
    complexity: 'medium',
    estimatedTime: '4-6 dias',
    tags: ['quadras', 'reserva', 'esportes']
  },

  // Agriculture & Environment
  {
    id: 'farm-management',
    name: 'Gestão Agrícola',
    description: 'Sistema para gestão de fazendas',
    icon: Globe,
    category: 'agriculture',
    features: ['Plantio', 'Irrigação', 'Clima', 'Pragas', 'Colheita', 'Financeiro'],
    complexity: 'hard',
    estimatedTime: '10-15 dias',
    tags: ['agricultura', 'fazenda', 'irrigação']
  },
  {
    id: 'environmental-monitoring',
    name: 'Monitoramento Ambiental',
    description: 'Sistema de monitoramento ecológico',
    icon: Globe,
    category: 'environment',
    features: ['Sensores ambientais', 'Alertas', 'Relatórios', 'Mapas', 'Sustentabilidade'],
    complexity: 'hard',
    estimatedTime: '8-12 dias',
    tags: ['meio-ambiente', 'sustentabilidade', 'sensores']
  },

  // Legal & Compliance
  {
    id: 'legal-practice',
    name: 'Gestão Jurídica',
    description: 'Sistema para escritórios de advocacia',
    icon: Shield,
    category: 'legal',
    features: ['Processos', 'Prazos', 'Clientes', 'Documentos', 'Timesheet', 'Faturamento'],
    complexity: 'hard',
    estimatedTime: '10-15 dias',
    tags: ['jurídico', 'advocacia', 'processos']
  },
  {
    id: 'compliance-system',
    name: 'Sistema de Compliance',
    description: 'Plataforma para gestão de compliance',
    icon: CheckCircle,
    category: 'legal',
    features: ['Auditorias', 'Políticas', 'Treinamentos', 'Riscos', 'Relatórios'],
    complexity: 'hard',
    estimatedTime: '8-12 dias',
    tags: ['compliance', 'auditoria', 'riscos']
  },

  // Manufacturing & Industrial
  {
    id: 'manufacturing-erp',
    name: 'ERP Industrial',
    description: 'Sistema ERP para indústrias',
    icon: Settings,
    category: 'manufacturing',
    features: ['Produção', 'Qualidade', 'Manutenção', 'Estoque', 'Custos', 'Relatórios'],
    complexity: 'hard',
    estimatedTime: '15-20 dias',
    tags: ['erp', 'indústria', 'produção']
  },
  {
    id: 'quality-control',
    name: 'Controle de Qualidade',
    description: 'Sistema para controle de qualidade',
    icon: CheckCircle,
    category: 'manufacturing',
    features: ['Inspeções', 'Não conformidades', 'Certificações', 'Rastreabilidade', 'KPIs'],
    complexity: 'medium',
    estimatedTime: '6-8 dias',
    tags: ['qualidade', 'inspeções', 'certificações']
  },

  // Transportation
  {
    id: 'fleet-management',
    name: 'Gestão de Frota',
    description: 'Sistema para gestão de frotas',
    icon: Truck,
    category: 'transportation',
    features: ['Rastreamento GPS', 'Manutenção', 'Combustível', 'Motoristas', 'Relatórios'],
    complexity: 'hard',
    estimatedTime: '8-12 dias',
    tags: ['frota', 'gps', 'manutenção']
  },
  {
    id: 'rideshare-app',
    name: 'App de Corridas',
    description: 'Aplicativo tipo Uber',
    icon: Car,
    category: 'transportation',
    features: ['Solicitação de corridas', 'GPS', 'Pagamentos', 'Avaliações', 'Histórico'],
    complexity: 'hard',
    estimatedTime: '12-18 dias',
    tags: ['corridas', 'uber', 'gps']
  },

  // Government & Public
  {
    id: 'citizen-portal',
    name: 'Portal do Cidadão',
    description: 'Portal de serviços públicos',
    icon: Users,
    category: 'government',
    features: ['Serviços online', 'Documentos', 'Atendimento', 'Transparência', 'Ouvidoria'],
    complexity: 'hard',
    estimatedTime: '10-15 dias',
    tags: ['governo', 'serviços', 'transparência']
  },
  {
    id: 'voting-system',
    name: 'Sistema de Votação',
    description: 'Plataforma para votações eletrônicas',
    icon: CheckCircle,
    category: 'government',
    features: ['Urna eletrônica', 'Autenticação', 'Auditoria', 'Resultados', 'Segurança'],
    complexity: 'hard',
    estimatedTime: '15-20 dias',
    tags: ['votação', 'eleições', 'segurança']
  },

  // Templates específicos de negócios locais
  {
    id: 'barbershop-system',
    name: 'Sistema de Barbearia',
    description: 'Gestão completa para barbearias',
    icon: User,
    category: 'local',
    features: ['Agendamento online', 'Catálogo de serviços', 'Histórico do cliente', 'Programa fidelidade', 'Pagamentos'],
    complexity: 'medium',
    estimatedTime: '4-6 dias',
    tags: ['barbearia', 'agendamento', 'fidelidade']
  },
  {
    id: 'beauty-salon',
    name: 'Salão de Beleza',
    description: 'Sistema para salões de beleza',
    icon: Star,
    category: 'local',
    features: ['Agendamento multi-serviços', 'Profissionais', 'Produtos', 'Comissões', 'Relatórios'],
    complexity: 'medium',
    estimatedTime: '5-7 dias',
    tags: ['salão', 'beleza', 'multi-serviços']
  },
  {
    id: 'laundry-service',
    name: 'Lavanderia',
    description: 'Sistema para serviços de lavanderia',
    icon: Shirt,
    category: 'local',
    features: ['Coleta e entrega', 'Tipos de lavagem', 'Rastreamento', 'Pagamentos', 'Relatórios'],
    complexity: 'medium',
    estimatedTime: '4-5 dias',
    tags: ['lavanderia', 'coleta', 'entrega']
  },
];

export const templateCategories = [
  { id: 'all', name: 'Todos os Templates', icon: Grid, count: 0 },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart, count: 0 },
  { id: 'blog', name: 'Blog & Conteúdo', icon: FileText, count: 0 },
  { id: 'delivery', name: 'Delivery & Food', icon: Utensils, count: 0 },
  { id: 'saas', name: 'SaaS & Business', icon: Briefcase, count: 0 },
  { id: 'healthcare', name: 'Saúde', icon: Stethoscope, count: 0 },
  { id: 'education', name: 'Educação', icon: GraduationCap, count: 0 },
  { id: 'realestate', name: 'Imobiliário', icon: Home, count: 0 },
  { id: 'automotive', name: 'Automotivo', icon: Car, count: 0 },
  { id: 'finance', name: 'Financeiro', icon: DollarSign, count: 0 },
  { id: 'fitness', name: 'Fitness', icon: Dumbbell, count: 0 },
  { id: 'entertainment', name: 'Entretenimento', icon: Music, count: 0 },
  { id: 'social', name: 'Social', icon: Users, count: 0 },
  { id: 'travel', name: 'Viagem', icon: Plane, count: 0 },
  { id: 'marketplace', name: 'Marketplace', icon: Store, count: 0 },
  { id: 'logistics', name: 'Logística', icon: Truck, count: 0 },
  { id: 'security', name: 'Segurança', icon: Shield, count: 0 },
  { id: 'media', name: 'Mídia', icon: Camera, count: 0 },
  { id: 'analytics', name: 'Analytics', icon: BarChart3, count: 0 },
  { id: 'tools', name: 'Ferramentas', icon: Settings, count: 0 },
  { id: 'iot', name: 'IoT', icon: Zap, count: 0 },
  { id: 'developer', name: 'Desenvolvedor', icon: Monitor, count: 0 },
  { id: 'events', name: 'Eventos', icon: Calendar, count: 0 },
  { id: 'nonprofit', name: 'ONG', icon: Heart, count: 0 },
  { id: 'sports', name: 'Esportes', icon: Award, count: 0 },
  { id: 'agriculture', name: 'Agricultura', icon: Globe, count: 0 },
  { id: 'environment', name: 'Meio Ambiente', icon: Globe, count: 0 },
  { id: 'legal', name: 'Jurídico', icon: Shield, count: 0 },
  { id: 'manufacturing', name: 'Industrial', icon: Settings, count: 0 },
  { id: 'transportation', name: 'Transporte', icon: Truck, count: 0 },
  { id: 'government', name: 'Governo', icon: Building, count: 0 },
  { id: 'local', name: 'Negócios Locais', icon: MapPin, count: 0 }
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
    template.tags.some(tag => tag.toLowerCase().includes(term)) ||
    template.features.some(feature => feature.toLowerCase().includes(term))
  );
};

export const getTemplateById = (id: string): ProjectTemplate | undefined => {
  return projectTemplates.find(template => template.id === id);
};

export const getFeaturedTemplates = (): ProjectTemplate[] => {
  return projectTemplates.filter(template => 
    ['ecommerce-fashion', 'delivery-acai', 'blog-tech', 'crm-sales', 'delivery-pizzaria'].includes(template.id)
  );
};

export const getPopularTemplates = (): ProjectTemplate[] => {
  return projectTemplates.slice(0, 12);
};
