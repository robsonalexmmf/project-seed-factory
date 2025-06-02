import { 
  ShoppingCart, Store, Hotel, Users, FileText, CheckSquare, Building, TrendingUp, 
  BookOpen, BarChart3, Smartphone, CreditCard, Brain, Zap, Calendar, 
  MessageSquare, Phone, Mail, Camera, Music, Video, Globe, Shield,
  Heart, Stethoscope, Car, Wrench, Scissors, PaintBucket, Coffee,
  Calculator, ClipboardList, Target, Award, Gift, Star, Settings,
  Database, Cloud, Lock, Key, Search, Filter, Share, Download,
  Upload, Edit, Save, Trash, Plus, Minus, Play, Pause,
  Volume2, Wifi, Battery, Signal, Map, Navigation, Compass,
  Thermometer, Sun, Moon, Eye, EyeOff, Bell, BellOff, Flag,
  Tag, Bookmark, Archive, Folder, File, Image, Link, Copy,
  Clipboard, Printer, Monitor, Laptop, Tablet,
  Watch, Gamepad2, Headphones, Mic, Speaker, Radio, Tv,
  Lightbulb, Flame, Snowflake, Droplet, Wind, CloudRain,
  Truck, Receipt, GraduationCap, ClipboardCheck, Home, Scale,
  Clock, HardHat, Share2, PieChart, MousePointer, User,
  HelpCircle, RotateCcw, Route, Activity, Smile, Lotus,
  CheckCircle, Apple, Dumbbell, Vote, Scan, MapPin,
  ChefHat, UserPlus, Package, Wallet, Bitcoin, PiggyBank,
  Megaphone, Palette, Gavel
} from 'lucide-react';

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  icon: any;
  color: string;
  premium?: boolean;
}

export const categories = [
  { id: 'all', name: 'Todos os Templates', icon: Globe },
  { id: 'delivery', name: 'Delivery & E-commerce', icon: ShoppingCart },
  { id: 'business', name: 'Negócios & Produtividade', icon: Building },
  { id: 'marketing', name: 'Vendas & Marketing', icon: TrendingUp },
  { id: 'content', name: 'Conteúdo & Educação', icon: BookOpen },
  { id: 'data', name: 'Dados & Análises', icon: BarChart3 },
  { id: 'health', name: 'Saúde & Bem-estar', icon: Heart },
  { id: 'mobile', name: 'Apps Mobile', icon: Smartphone },
  { id: 'automation', name: 'Automação & IA', icon: Brain },
  { id: 'finance', name: 'Financeiro & Pagamentos', icon: CreditCard },
  { id: 'communication', name: 'Comunicação & Chat', icon: MessageSquare },
  { id: 'creative', name: 'Criativo & Design', icon: PaintBucket }
];

export const projectTemplates: ProjectTemplate[] = [
  // DELIVERY & E-COMMERCE (15 templates)
  {
    id: 'delivery-system',
    name: 'Sistema de Delivery Completo',
    description: 'Sistema completo de delivery com rastreamento em tempo real, cupons, avaliações e múltiplos pagamentos',
    category: 'delivery',
    features: ['Rastreamento GPS em tempo real', 'Sistema de cupons e promoções', 'Avaliações de entregadores', 'Múltiplos pagamentos', 'Dashboard para entregadores', 'Notificações push', 'Chat com entregador'],
    icon: ShoppingCart,
    color: 'bg-blue-500'
  },
  {
    id: 'ecommerce-complete',
    name: 'E-commerce Completo',
    description: 'Loja virtual completa com IA para recomendações, marketplace, afiliados e integração com ERP',
    category: 'delivery',
    features: ['Carrinho persistente', 'IA para recomendações', 'Marketplace multi-vendedor', 'Sistema de afiliados', 'Integração ERP', 'Checkout one-page', 'Recuperação carrinho abandonado'],
    icon: Store,
    color: 'bg-green-500'
  },
  {
    id: 'hotel-system',
    name: 'Sistema de Hotel',
    description: 'Gestão hoteleira completa com check-in digital, integração com Booking.com e controle de ocupação',
    category: 'delivery',
    features: ['Check-in digital QR Code', 'Integração Booking.com', 'Controle de limpeza', 'Dashboard ocupação', 'Chat com recepção', 'Gestão de eventos'],
    icon: Hotel,
    color: 'bg-purple-500'
  },
  {
    id: 'digital-products-store',
    name: 'Loja de Produtos Digitais',
    description: 'Plataforma especializada em venda de produtos digitais com download automático e licenciamento',
    category: 'delivery',
    features: ['Download automático', 'Sistema de licenças', 'Proteção anti-pirataria', 'Versionamento de produtos', 'Affiliate program'],
    icon: Download,
    color: 'bg-indigo-500'
  },
  {
    id: 'subscription-ecommerce',
    name: 'E-commerce de Assinaturas',
    description: 'Sistema de vendas recorrentes com gestão de assinaturas e cobranças automáticas',
    category: 'delivery',
    features: ['Cobranças recorrentes', 'Gestão de assinaturas', 'Pausar/cancelar planos', 'Upgrades automáticos', 'Métricas de retenção'],
    icon: Calendar,
    color: 'bg-orange-500'
  },
  {
    id: 'whatsapp-sales',
    name: 'Vendas por WhatsApp',
    description: 'Plataforma integrada para vendas via WhatsApp com catálogo e automação',
    category: 'delivery',
    features: ['Catálogo interativo', 'Automação de vendas', 'Gestão de pedidos', 'Integração WhatsApp API', 'Dashboard de conversões'],
    icon: MessageSquare,
    color: 'bg-green-600'
  },
  {
    id: 'pos-system',
    name: 'PDV (Ponto de Venda) Online',
    description: 'Sistema de ponto de venda completo com gestão de estoque e vendas',
    category: 'delivery',
    features: ['Interface touch', 'Gestão de estoque', 'Relatórios de vendas', 'Múltiplas formas de pagamento', 'Impressão de cupons'],
    icon: Calculator,
    color: 'bg-red-500'
  },
  {
    id: 'b2b-ecommerce',
    name: 'E-commerce B2B',
    description: 'Plataforma B2B com catálogos personalizados por representante e preços diferenciados',
    category: 'delivery',
    features: ['Catálogos por representante', 'Preços diferenciados', 'Pedidos em lote', 'Aprovação de pedidos', 'Integração ERP'],
    icon: Building,
    color: 'bg-blue-600'
  },
  {
    id: 'price-comparator',
    name: 'Comparador de Preços',
    description: 'Sistema de comparação de preços com web scraping e alertas de preço',
    category: 'delivery',
    features: ['Web scraping automático', 'Alertas de preço', 'Histórico de preços', 'Comparação multi-loja', 'API de integração'],
    icon: BarChart3,
    color: 'bg-yellow-500'
  },
  {
    id: 'cashback-system',
    name: 'Sistema de Cashback e Fidelidade',
    description: 'Plataforma de cashback e programa de fidelidade com gamificação',
    category: 'delivery',
    features: ['Sistema de pontos', 'Cashback automático', 'Gamificação', 'Níveis de fidelidade', 'Resgate de prêmios'],
    icon: Gift,
    color: 'bg-pink-500'
  },
  {
    id: 'dropshipping-system',
    name: 'Sistema de Dropshipping',
    description: 'Plataforma integrada para dropshipping com automação de pedidos e fornecedores',
    category: 'delivery',
    features: ['Automação de pedidos', 'Gestão de fornecedores', 'Sincronização de estoque', 'Calculadora de margem', 'Rastreamento automático'],
    icon: Truck,
    color: 'bg-teal-500'
  },
  {
    id: 'local-services-marketplace',
    name: 'Marketplace de Serviços Locais',
    description: 'Plataforma para conectar prestadores de serviços locais com clientes',
    category: 'delivery',
    features: ['Geolocalização', 'Agendamento online', 'Sistema de avaliações', 'Pagamentos integrados', 'Chat entre usuários'],
    icon: Map,
    color: 'bg-emerald-500'
  },
  {
    id: 'freight-calculator',
    name: 'Simulador de Frete',
    description: 'Sistema de cálculo de frete integrado com Correios e transportadoras',
    category: 'delivery',
    features: ['Múltiplas transportadoras', 'Cálculo em tempo real', 'Rastreamento integrado', 'Gestão de contratos', 'API de integração'],
    icon: Truck,
    color: 'bg-gray-500'
  },
  {
    id: 'auction-system',
    name: 'Sistema de Leilões Online',
    description: 'Plataforma de leilões com lances em tempo real e sistema de pagamentos',
    category: 'delivery',
    features: ['Lances em tempo real', 'Sistema de lance automático', 'Verificação de usuários', 'Pagamentos seguros', 'Histórico de leilões'],
    icon: Gavel,
    color: 'bg-amber-500'
  },
  {
    id: 'rental-system',
    name: 'Sistema de Aluguel de Produtos',
    description: 'Plataforma para aluguel de produtos com calendário de disponibilidade',
    category: 'delivery',
    features: ['Calendário de disponibilidade', 'Cálculo de aluguel', 'Sistema de caução', 'Contrato digital', 'Gestão de devoluções'],
    icon: Calendar,
    color: 'bg-violet-500'
  },

  // NEGÓCIOS & PRODUTIVIDADE (20 templates)
  {
    id: 'crm-empresarial',
    name: 'CRM Empresarial Completo',
    description: 'CRM completo com funil de vendas, automação, lead scoring e previsão de vendas com IA',
    category: 'business',
    features: ['Funil customizável', 'Automação de tarefas', 'Lead scoring', 'Previsão com IA', 'Propostas e contratos', 'Integração e-mail/WhatsApp'],
    icon: Users,
    color: 'bg-orange-500'
  },
  {
    id: 'task-management',
    name: 'Sistema de Gestão de Tarefas',
    description: 'Gerenciador de tarefas e projetos com Kanban, time tracking e relatórios de produtividade',
    category: 'business',
    features: ['Kanban drag-drop', 'Time tracking', 'Notificações inteligentes', 'Relatórios produtividade', 'Integração Calendar', 'Técnica Pomodoro'],
    icon: CheckSquare,
    color: 'bg-red-500'
  },
  {
    id: 'erp-basico',
    name: 'ERP para Pequenas Empresas',
    description: 'Sistema ERP completo com financeiro, estoque, vendas e relatórios gerenciais',
    category: 'business',
    features: ['Módulo financeiro', 'Controle de estoque', 'Gestão de vendas', 'Relatórios gerenciais', 'Emissão de NF', 'Fluxo de caixa'],
    icon: Building,
    color: 'bg-indigo-500'
  },
  {
    id: 'appointment-system',
    name: 'Sistema de Agendamento',
    description: 'Plataforma para agendamento de consultas com confirmação automática e lembretes',
    category: 'business',
    features: ['Agenda online', 'Confirmação automática', 'Lembretes email/SMS', 'Pagamento online', 'Histórico de consultas', 'Sala de espera virtual'],
    icon: Calendar,
    color: 'bg-teal-500'
  },
  {
    id: 'contract-management',
    name: 'Gestão de Contratos com Assinatura Digital',
    description: 'Sistema completo para gestão de contratos com assinatura eletrônica',
    category: 'business',
    features: ['Assinatura eletrônica', 'Templates de contratos', 'Versionamento', 'Alertas de vencimento', 'Renovação automática'],
    icon: FileText,
    color: 'bg-blue-500'
  },
  {
    id: 'inventory-control',
    name: 'Sistema de Controle de Estoque',
    description: 'Gestão completa de estoque com alertas, relatórios e integração com vendas',
    category: 'business',
    features: ['Controle de entrada/saída', 'Alertas de estoque baixo', 'Relatórios de movimentação', 'Códigos de barras', 'Inventário automático'],
    icon: Archive,
    color: 'bg-green-500'
  },
  {
    id: 'invoice-system',
    name: 'Sistema de Faturas e Cobranças',
    description: 'Plataforma para emissão de faturas e gestão de cobranças recorrentes',
    category: 'business',
    features: ['Emissão automática', 'Cobranças recorrentes', 'Múltiplas moedas', 'Relatórios financeiros', 'Integração bancária'],
    icon: Receipt,
    color: 'bg-purple-500'
  },
  {
    id: 'corporate-training',
    name: 'Plataforma de Treinamento Corporativo',
    description: 'Sistema de treinamento online para empresas com certificações',
    category: 'business',
    features: ['Cursos interativos', 'Certificações', 'Avaliações online', 'Trilhas de aprendizado', 'Gamificação'],
    icon: GraduationCap,
    color: 'bg-orange-600'
  },
  {
    id: 'proposal-generator',
    name: 'Gerador de Propostas Comerciais',
    description: 'Sistema para criação e gestão de propostas comerciais profissionais',
    category: 'business',
    features: ['Templates profissionais', 'Cálculos automáticos', 'Assinatura digital', 'Acompanhamento de propostas', 'Análise de conversão'],
    icon: FileText,
    color: 'bg-cyan-500'
  },
  {
    id: 'logistics-management',
    name: 'Sistema para Transportadoras',
    description: 'Gestão completa para empresas de transporte e logística',
    category: 'business',
    features: ['Rastreamento de cargas', 'Gestão de motoristas', 'Roteirização', 'Controle de combustível', 'Manutenção preventiva'],
    icon: Truck,
    color: 'bg-gray-600'
  },
  {
    id: 'recruitment-platform',
    name: 'Plataforma de Recrutamento',
    description: 'Sistema completo para recrutamento e seleção de candidatos',
    category: 'business',
    features: ['Banco de currículos', 'Triagem automática', 'Entrevistas online', 'Testes vocacionais', 'Pipeline de candidatos'],
    icon: Users,
    color: 'bg-indigo-600'
  },
  {
    id: 'audit-checklist',
    name: 'Sistema de Checklists e Auditorias',
    description: 'Plataforma para criação e execução de checklists e auditorias',
    category: 'business',
    features: ['Checklists customizáveis', 'Fotos e evidências', 'Relatórios automáticos', 'Não conformidades', 'Planos de ação'],
    icon: ClipboardCheck,
    color: 'bg-emerald-600'
  },
  {
    id: 'real-estate-crm',
    name: 'CRM para Corretor de Imóveis',
    description: 'CRM especializado para corretores com gestão de imóveis e clientes',
    category: 'business',
    features: ['Cadastro de imóveis', 'Gestão de visitas', 'Pipeline de vendas', 'Documentação digital', 'Portal do cliente'],
    icon: Home,
    color: 'bg-blue-700'
  },
  {
    id: 'lawyer-crm',
    name: 'CRM para Advogados',
    description: 'Sistema jurídico com gestão de processos, clientes e prazos',
    category: 'business',
    features: ['Gestão de processos', 'Controle de prazos', 'Documentos jurídicos', 'Agenda de audiências', 'Cobrança de honorários'],
    icon: Scale,
    color: 'bg-yellow-700'
  },
  {
    id: 'time-tracking',
    name: 'Sistema de Timesheet',
    description: 'Controle de horas trabalhadas com relatórios e aprovações',
    category: 'business',
    features: ['Controle de ponto', 'Relatórios por projeto', 'Aprovação de horas', 'Integração folha pagamento', 'Dashboard gerencial'],
    icon: Clock,
    color: 'bg-gray-700'
  },
  {
    id: 'performance-evaluation',
    name: 'Avaliação de Desempenho',
    description: 'Sistema de avaliação 360° para gestão de performance',
    category: 'business',
    features: ['Avaliação 360°', 'Metas e indicadores', 'Feedback contínuo', 'PDI automático', 'Relatórios gerenciais'],
    icon: Target,
    color: 'bg-rose-600'
  },
  {
    id: 'okr-system',
    name: 'Sistema de OKRs',
    description: 'Gestão de objetivos e resultados-chave para equipes',
    category: 'business',
    features: ['Definição de OKRs', 'Acompanhamento trimestral', 'Alinhamento estratégico', 'Check-ins regulares', 'Dashboard executivo'],
    icon: Target,
    color: 'bg-purple-600'
  },
  {
    id: 'project-collaboration',
    name: 'Projetos Colaborativos',
    description: 'Plataforma para gestão de projetos com colaboração em tempo real',
    category: 'business',
    features: ['Gestão de recursos', 'Cronograma Gantt', 'Colaboração em tempo real', 'Gestão de riscos', 'Relatórios executivos'],
    icon: Users,
    color: 'bg-teal-600'
  },
  {
    id: 'workshop-management',
    name: 'Gestão para Oficinas Mecânicas',
    description: 'Sistema completo para gestão de oficinas com ordens de serviço',
    category: 'business',
    features: ['Ordens de serviço', 'Gestão de peças', 'Agendamento', 'Orçamentos', 'Histórico de veículos'],
    icon: Wrench,
    color: 'bg-orange-700'
  },
  {
    id: 'construction-management',
    name: 'Gestor de Obras para Engenheiros',
    description: 'Sistema para gestão de obras com orçamentos e cronogramas',
    category: 'business',
    features: ['Gestão de orçamentos', 'Cronograma de obras', 'Controle de materiais', 'Medições', 'Diário de obras'],
    icon: HardHat,
    color: 'bg-yellow-600'
  },

  // VENDAS & MARKETING (15 templates)
  {
    id: 'landing-page-generator',
    name: 'Gerador de Landing Pages',
    description: 'Ferramenta para criar landing pages com editor drag-and-drop e testes A/B',
    category: 'marketing',
    features: ['Editor drag-drop', 'Testes A/B', 'Analytics integrado', 'Formulários personalizados', 'SEO otimizado', 'Templates responsivos'],
    icon: TrendingUp,
    color: 'bg-pink-500'
  },
  {
    id: 'email-marketing',
    name: 'Plataforma de E-mail Marketing',
    description: 'Sistema completo de email marketing com automação, segmentação e analytics',
    category: 'marketing',
    features: ['Automação de emails', 'Segmentação avançada', 'Templates responsivos', 'A/B testing', 'Analytics detalhado', 'Deliverability otimizada'],
    icon: Mail,
    color: 'bg-yellow-500'
  },
  {
    id: 'copywriting-ai',
    name: 'Copywriting com IA',
    description: 'Gerador de textos publicitários com IA, templates e otimização para conversão',
    category: 'marketing',
    features: ['Geração com IA', 'Templates diversos', 'Otimização conversão', 'Análise de sentimento', 'Múltiplos idiomas', 'Tom de voz personalizado'],
    icon: Brain,
    color: 'bg-cyan-500'
  },
  {
    id: 'sales-funnel',
    name: 'Funil de Vendas Automatizado',
    description: 'Sistema de vendas com funil automatizado e página de captura',
    category: 'marketing',
    features: ['Funil automatizado', 'Páginas de captura', 'Upsell/downsell', 'Integração pagamentos', 'Analytics de conversão'],
    icon: TrendingUp,
    color: 'bg-blue-600'
  },
  {
    id: 'lead-management',
    name: 'Gestão de Leads',
    description: 'Sistema especializado em captura, qualificação e nutrição de leads',
    category: 'marketing',
    features: ['Captura multi-canal', 'Lead scoring', 'Nutrição automática', 'Distribuição de leads', 'ROI por canal'],
    icon: Users,
    color: 'bg-green-600'
  },
  {
    id: 'social-media-scheduler',
    name: 'Agendador de Redes Sociais',
    description: 'Plataforma para agendamento e gestão de conteúdo em redes sociais',
    category: 'marketing',
    features: ['Agendamento multi-plataforma', 'Banco de conteúdo', 'Analytics social', 'Aprovação de posts', 'Monitoramento de menções'],
    icon: Calendar,
    color: 'bg-purple-600'
  },
  {
    id: 'paid-traffic-manager',
    name: 'Gestor de Tráfego Pago',
    description: 'Sistema para gestão de campanhas de ADS com otimização automática',
    category: 'marketing',
    features: ['Gestão multi-plataforma', 'Otimização automática', 'Relatórios consolidados', 'Alertas de performance', 'Budget automático'],
    icon: Target,
    color: 'bg-red-600'
  },
  {
    id: 'affiliate-platform',
    name: 'Programa de Afiliados',
    description: 'Plataforma completa para gestão de programas de afiliados',
    category: 'marketing',
    features: ['Gestão de afiliados', 'Comissões automáticas', 'Links rastreáveis', 'Material promocional', 'Pagamentos automáticos'],
    icon: Share,
    color: 'bg-emerald-600'
  },
  {
    id: 'seo-analyzer',
    name: 'Analisador de SEO com IA',
    description: 'Ferramenta de análise SEO com recomendações baseadas em IA',
    category: 'marketing',
    features: ['Auditoria completa', 'Recomendações IA', 'Monitoramento rankings', 'Análise competitors', 'Relatórios automáticos'],
    icon: Search,
    color: 'bg-indigo-600'
  },
  {
    id: 'influencer-platform',
    name: 'Plataforma de Influenciadores',
    description: 'Sistema para conectar marcas com influenciadores digitais',
    category: 'marketing',
    features: ['Banco de influenciadores', 'Análise de audiência', 'Campanhas automáticas', 'Pagamentos integrados', 'ROI tracking'],
    icon: Star,
    color: 'bg-yellow-600'
  },
  {
    id: 'referral-system',
    name: 'Sistema de Indicações',
    description: 'Plataforma de marketing de indicação com gamificação',
    category: 'marketing',
    features: ['Links de indicação', 'Recompensas automáticas', 'Gamificação', 'Tracking de conversões', 'Dashboard de performance'],
    icon: Share2,
    color: 'bg-teal-700'
  },
  {
    id: 'loyalty-program',
    name: 'Programa de Fidelidade',
    description: 'Sistema de fidelidade com pontos, níveis e recompensas',
    category: 'marketing',
    features: ['Sistema de pontos', 'Níveis de fidelidade', 'Recompensas personalizadas', 'Gamificação', 'App mobile'],
    icon: Award,
    color: 'bg-purple-700'
  },
  {
    id: 'survey-platform',
    name: 'Plataforma de Pesquisas',
    description: 'Sistema para criação e análise de pesquisas e enquetes',
    category: 'marketing',
    features: ['Criador de enquetes', 'Análise estatística', 'Relatórios visuais', 'Integração CRM', 'Multi-canal'],
    icon: PieChart,
    color: 'bg-rose-600'
  },
  {
    id: 'webinar-platform',
    name: 'Plataforma de Webinars',
    description: 'Sistema completo para webinars com registro e automação',
    category: 'marketing',
    features: ['Streaming ao vivo', 'Registro automático', 'Chat interativo', 'Gravações automáticas', 'Analytics de engajamento'],
    icon: Video,
    color: 'bg-blue-700'
  },
  {
    id: 'popup-builder',
    name: 'Construtor de Pop-ups',
    description: 'Ferramenta para criar pop-ups inteligentes com targeting',
    category: 'marketing',
    features: ['Editor visual', 'Targeting inteligente', 'A/B testing', 'Triggers avançados', 'Analytics detalhado'],
    icon: MousePointer,
    color: 'bg-orange-600'
  },

  // CONTEÚDO & EDUCAÇÃO (12 templates)
  {
    id: 'blog-cms',
    name: 'Blog com CMS Avançado',
    description: 'Sistema de blog com editor avançado, SEO automático e monetização integrada',
    category: 'content',
    features: ['Editor drag-drop', 'SEO automático com IA', 'Agendamento', 'Analytics por post', 'Newsletter integrada', 'Monetização'],
    icon: FileText,
    color: 'bg-emerald-500'
  },
  {
    id: 'lms-platform',
    name: 'Plataforma de Cursos Online (LMS)',
    description: 'Sistema completo para cursos online com vídeos, quizzes, certificados e gamificação',
    category: 'content',
    features: ['Player de vídeo', 'Sistema de quizzes', 'Certificados automáticos', 'Gamificação', 'Relatórios de progresso', 'Fórum de discussão'],
    icon: BookOpen,
    color: 'bg-violet-500'
  },
  {
    id: 'portfolio-generator',
    name: 'Gerador de Portfólios',
    description: 'Criador de sites pessoais e portfólios com templates profissionais',
    category: 'content',
    features: ['Templates profissionais', 'Galeria de projetos', 'Blog integrado', 'SEO otimizado', 'Domínio personalizado', 'Analytics'],
    icon: User,
    color: 'bg-slate-500'
  },
  {
    id: 'mentoring-platform',
    name: 'Plataforma de Mentorias',
    description: 'Sistema para conectar mentores e mentorados com agendamento',
    category: 'content',
    features: ['Matching inteligente', 'Agendamento online', 'Sala virtual', 'Pagamentos integrados', 'Avaliações'],
    icon: Users,
    color: 'bg-blue-600'
  },
  {
    id: 'quiz-generator',
    name: 'Gerador de Quizzes e Provas',
    description: 'Plataforma para criação de quizzes interativos e provas online',
    category: 'content',
    features: ['Banco de questões', 'Tipos variados', 'Correção automática', 'Relatórios detalhados', 'Anti-cola'],
    icon: HelpCircle,
    color: 'bg-green-600'
  },
  {
    id: 'newsletter-platform',
    name: 'Newsletter com Paywall',
    description: 'Plataforma de newsletter premium com sistema de assinaturas',
    category: 'content',
    features: ['Editor avançado', 'Paywall flexível', 'Segmentação', 'Analytics detalhado', 'Monetização'],
    icon: Mail,
    color: 'bg-yellow-600'
  },
  {
    id: 'content-planner',
    name: 'Planejador de Conteúdo',
    description: 'Ferramenta para planejamento e organização de conteúdo digital',
    category: 'content',
    features: ['Calendário editorial', 'Banco de ideias', 'Colaboração', 'Aprovações', 'Analytics de performance'],
    icon: Calendar,
    color: 'bg-purple-600'
  },
  {
    id: 'podcast-platform',
    name: 'Plataforma de Podcasting',
    description: 'Sistema completo para criação e distribuição de podcasts',
    category: 'content',
    features: ['Gravação online', 'Editor de áudio', 'Distribuição automática', 'Analytics', 'Monetização'],
    icon: Mic,
    color: 'bg-red-600'
  },
  {
    id: 'ebook-generator',
    name: 'Gerador de E-books com IA',
    description: 'Ferramenta para criação de e-books com auxílio de IA',
    category: 'content',
    features: ['Geração com IA', 'Templates profissionais', 'Export múltiplos formatos', 'Loja integrada', 'DRM'],
    icon: BookOpen,
    color: 'bg-indigo-600'
  },
  {
    id: 'community-platform',
    name: 'Comunidade com Fórum',
    description: 'Plataforma de comunidade privada com fórum e discussões',
    category: 'content',
    features: ['Fórum avançado', 'Grupos privados', 'Gamificação', 'Moderação', 'App mobile'],
    icon: Users,
    color: 'bg-emerald-600'
  },
  {
    id: 'documentation-system',
    name: 'Sistema de Documentação',
    description: 'Plataforma para criação e gestão de documentação técnica',
    category: 'content',
    features: ['Editor colaborativo', 'Versionamento', 'Busca avançada', 'API docs', 'Múltiplos idiomas'],
    icon: FileText,
    color: 'bg-gray-600'
  },
  {
    id: 'crowdfunding-platform',
    name: 'Plataforma de Crowdfunding',
    description: 'Sistema para campanhas de financiamento coletivo',
    category: 'content',
    features: ['Criação de campanhas', 'Múltiplas moedas', 'Recompensas', 'Updates automáticos', 'Analytics'],
    icon: Target,
    color: 'bg-green-700'
  },

  // DADOS & ANÁLISES (8 templates)
  {
    id: 'bi-dashboard',
    name: 'BI com Dashboards Personalizados',
    description: 'Sistema de Business Intelligence com dashboards interativos',
    category: 'data',
    features: ['Dashboards customizáveis', 'Múltiplas fontes', 'Alertas automáticos', 'Export de relatórios', 'Drill-down'],
    icon: BarChart3,
    color: 'bg-blue-600'
  },
  {
    id: 'feedback-360',
    name: 'Feedback 360° para Equipes',
    description: 'Sistema de feedback 360 graus com análises e relatórios',
    category: 'data',
    features: ['Avaliação 360°', 'Relatórios automáticos', 'Análise de gaps', 'Planos de desenvolvimento', 'Anonimato'],
    icon: RotateCcw,
    color: 'bg-purple-600'
  },
  {
    id: 'product-roadmap',
    name: 'Roadmap Público para SaaS',
    description: 'Plataforma para roadmap público com votação da comunidade',
    category: 'data',
    features: ['Roadmap visual', 'Votação comunidade', 'Feedback público', 'Atualizações automáticas', 'Integração desenvolvimento'],
    icon: Route,
    color: 'bg-green-600'
  },
  {
    id: 'support-system',
    name: 'Sistema de Suporte e Tickets',
    description: 'Plataforma completa de suporte com tickets e chat',
    category: 'data',
    features: ['Sistema de tickets', 'Chat ao vivo', 'Base de conhecimento', 'SLA automático', 'Relatórios de performance'],
    icon: Headphones,
    color: 'bg-orange-600'
  },
  {
    id: 'heatmap-tracker',
    name: 'Heatmap para Sites',
    description: 'Ferramenta de tracking com mapas de calor e analytics',
    category: 'data',
    features: ['Mapas de calor', 'Gravação de sessões', 'Funis de conversão', 'A/B testing', 'GDPR compliance'],
    icon: Activity,
    color: 'bg-red-600'
  },
  {
    id: 'survey-analytics',
    name: 'Análise Avançada de Pesquisas',
    description: 'Plataforma para análise estatística avançada de pesquisas',
    category: 'data',
    features: ['Análise estatística', 'Correlações automáticas', 'Segmentação avançada', 'Visualizações interativas', 'Export científico'],
    icon: TrendingUp,
    color: 'bg-indigo-600'
  },
  {
    id: 'competitor-analysis',
    name: 'Análise de Concorrentes',
    description: 'Sistema para monitoramento e análise da concorrência',
    category: 'data',
    features: ['Monitoramento automático', 'Análise de preços', 'Social listening', 'Alertas de mudanças', 'Relatórios comparativos'],
    icon: Eye,
    color: 'bg-yellow-600'
  },
  {
    id: 'data-visualization',
    name: 'Visualização de Dados',
    description: 'Ferramenta para criação de visualizações interativas de dados',
    category: 'data',
    features: ['Gráficos interativos', 'Múltiplas fontes', 'Compartilhamento público', 'Atualização tempo real', 'Export alta resolução'],
    icon: PieChart,
    color: 'bg-teal-600'
  },

  // SAÚDE & BEM-ESTAR (10 templates)
  {
    id: 'medical-clinic',
    name: 'Sistema para Clínicas Médicas',
    description: 'Gestão completa para clínicas com prontuário eletrônico',
    category: 'health',
    features: ['Prontuário eletrônico', 'Agendamento online', 'Receituário digital', 'Telemedicina', 'Faturamento TISS'],
    icon: Stethoscope,
    color: 'bg-blue-600'
  },
  {
    id: 'dental-clinic',
    name: 'Sistema para Consultórios Odontológicos',
    description: 'Gestão especializada para dentistas com odontograma',
    category: 'health',
    features: ['Odontograma digital', 'Agendamento', 'Planos de tratamento', 'Financeiro', 'Radiografias digitais'],
    icon: Smile,
    color: 'bg-green-600'
  },
  {
    id: 'psychology-platform',
    name: 'Agenda de Psicólogos com Chat Seguro',
    description: 'Plataforma para psicólogos com consultas online seguras',
    category: 'health',
    features: ['Consultas online', 'Chat seguro E2E', 'Prontuário digital', 'Testes psicológicos', 'Videoconferência'],
    icon: Brain,
    color: 'bg-purple-600'
  },
  {
    id: 'physiotherapy-management',
    name: 'Gestão de Pacientes para Fisioterapeutas',
    description: 'Sistema especializado para fisioterapeutas com evolução',
    category: 'health',
    features: ['Fichas de evolução', 'Exercícios prescritos', 'Agendamento', 'Prontuário', 'Relatórios de progresso'],
    icon: Activity,
    color: 'bg-orange-600'
  },
  {
    id: 'electronic-medical-record',
    name: 'Prontuário Eletrônico Completo',
    description: 'Sistema completo de prontuário eletrônico multi-especialidade',
    category: 'health',
    features: ['Multi-especialidade', 'Prescrições digitais', 'Laudos integrados', 'CID-10', 'Backup automático'],
    icon: FileText,
    color: 'bg-red-600'
  },
  {
    id: 'meditation-app',
    name: 'App de Meditação',
    description: 'Aplicativo de meditação com trilhas personalizadas',
    category: 'health',
    features: ['Meditações guiadas', 'Trilhas personalizadas', 'Timer customizável', 'Progresso pessoal', 'Lembretes inteligentes'],
    icon: Lotus,
    color: 'bg-indigo-600'
  },
  {
    id: 'habit-tracker',
    name: 'Diário de Hábitos Saudáveis',
    description: 'Aplicativo para acompanhamento de hábitos com gamificação',
    category: 'health',
    features: ['Tracking de hábitos', 'Gamificação', 'Streaks', 'Relatórios de progresso', 'Comunidade motivacional'],
    icon: CheckCircle,
    color: 'bg-green-700'
  },
  {
    id: 'nutrition-tracker',
    name: 'App de Nutrição',
    description: 'Aplicativo para acompanhamento nutricional e dietas',
    category: 'health',
    features: ['Diário alimentar', 'Contador de calorias', 'Planos nutricionais', 'Scanner de código de barras', 'Receitas saudáveis'],
    icon: Apple,
    color: 'bg-red-500'
  },
  {
    id: 'fitness-tracker',
    name: 'App de Fitness',
    description: 'Aplicativo para treinos e acompanhamento fitness',
    category: 'health',
    features: ['Planos de treino', 'Vídeos exercícios', 'Progresso pessoal', 'Social fitness', 'Wearables integration'],
    icon: Dumbbell,
    color: 'bg-orange-700'
  },
  {
    id: 'mental-health-platform',
    name: 'Plataforma de Saúde Mental',
    description: 'Sistema completo para cuidados de saúde mental',
    category: 'health',
    features: ['Terapia online', 'Diário emocional', 'Exercícios mindfulness', 'Rede de apoio', 'Monitoramento humor'],
    icon: Heart,
    color: 'bg-pink-600'
  },

  // APLICATIVOS MOBILE (20 templates)
  {
    id: 'delivery-app-mobile',
    name: 'App de Delivery Mobile',
    description: 'Aplicativo móvel de delivery com rastreamento GPS e notificações',
    category: 'mobile',
    features: ['Rastreamento GPS', 'Push notifications', 'Pagamento in-app', 'Chat com entregador', 'Avaliações', 'Modo offline'],
    icon: Smartphone,
    color: 'bg-blue-600'
  },
  {
    id: 'task-mobile-app',
    name: 'App de Gestão de Tarefas Mobile',
    description: 'App móvel para gestão de tarefas com sincronização offline',
    category: 'mobile',
    features: ['Modo offline', 'Sincronização automática', 'Colaboração em equipe', 'Notificações inteligentes', 'Widget nativo'],
    icon: CheckSquare,
    color: 'bg-green-600'
  },
  {
    id: 'financial-app-mobile',
    name: 'App de Controle Financeiro',
    description: 'Aplicativo para controle financeiro pessoal com IA',
    category: 'mobile',
    features: ['Categorização automática', 'Metas financeiras', 'Gráficos e relatórios', 'Sincronização bancária', 'Lembretes'],
    icon: CreditCard,
    color: 'bg-emerald-600'
  },
  {
    id: 'appointment-app-mobile',
    name: 'App de Agendamento',
    description: 'Aplicativo de agendamento com push notifications',
    category: 'mobile',
    features: ['Agendamento fácil', 'Push notifications', 'Lembretes automáticos', 'Cancelamento simples', 'Avaliações'],
    icon: Calendar,
    color: 'bg-purple-600'
  },
  {
    id: 'crm-mobile-app',
    name: 'App CRM Mobile',
    description: 'CRM mobile com funis de venda otimizados para dispositivos móveis',
    category: 'mobile',
    features: ['Funis mobile', 'Offline support', 'Quick actions', 'Voice notes', 'Location tracking'],
    icon: Users,
    color: 'bg-orange-600'
  },
  {
    id: 'cashback-mobile-app',
    name: 'App de Cashback',
    description: 'Aplicativo de cashback e recompensas com gamificação',
    category: 'mobile',
    features: ['Cashback automático', 'Sistema de pontos', 'Ofertas personalizadas', 'Gamificação', 'Carteira digital'],
    icon: Gift,
    color: 'bg-red-600'
  },
  {
    id: 'poll-app-mobile',
    name: 'App de Enquetes e Votações',
    description: 'Aplicativo para criação e participação em enquetes',
    category: 'mobile',
    features: ['Enquetes rápidas', 'Votação anônima', 'Resultados tempo real', 'Compartilhamento social', 'Analytics'],
    icon: Vote,
    color: 'bg-indigo-600'
  },
  {
    id: 'face-recognition-app',
    name: 'App com Reconhecimento Facial',
    description: 'Aplicativo com login por reconhecimento facial',
    category: 'mobile',
    features: ['Login facial', 'Biometria', 'Segurança avançada', 'Anti-spoofing', 'Backup PIN'],
    icon: Scan,
    color: 'bg-yellow-600'
  },
  {
    id: 'resume-builder-app',
    name: 'App Criador de Currículos',
    description: 'Aplicativo para criação de currículos e portfólios profissionais',
    category: 'mobile',
    features: ['Templates profissionais', 'Export PDF', 'Sincronização LinkedIn', 'QR code pessoal', 'ATS optimization'],
    icon: FileText,
    color: 'bg-teal-600'
  },
  {
    id: 'offline-learning-app',
    name: 'App de Ensino Offline',
    description: 'Aplicativo educacional com conteúdo offline',
    category: 'mobile',
    features: ['Conteúdo offline', 'Sincronização inteligente', 'Progresso offline', 'Vídeos baixáveis', 'Quizzes offline'],
    icon: BookOpen,
    color: 'bg-green-700'
  },
  {
    id: 'shopping-list-app',
    name: 'App de Lista de Compras',
    description: 'Lista de compras compartilhada com a família',
    category: 'mobile',
    features: ['Compartilhamento família', 'Sincronização tempo real', 'Categorização automática', 'Histórico de compras', 'Lembretes localizados'],
    icon: ShoppingCart,
    color: 'bg-blue-700'
  },
  {
    id: 'study-routine-app',
    name: 'App de Rotina de Estudos',
    description: 'Aplicativo para organização de rotina de estudos',
    category: 'mobile',
    features: ['Cronograma personalizado', 'Técnica Pomodoro', 'Tracking de horas', 'Metas de estudo', 'Relatórios de progresso'],
    icon: GraduationCap,
    color: 'bg-purple-700'
  },
  {
    id: 'pet-shop-app',
    name: 'App para Pet Shops',
    description: 'Aplicativo de agendamento e gestão para pet shops',
    category: 'mobile',
    features: ['Agendamento serviços', 'Ficha do pet', 'Lembretes vacinas', 'Galeria fotos', 'Pagamentos integrados'],
    icon: Heart,
    color: 'bg-pink-700'
  },
  {
    id: 'hairdresser-app',
    name: 'App para Cabeleireiros',
    description: 'Aplicativo de agendamento especializado para salões',
    category: 'mobile',
    features: ['Agendamento por profissional', 'Catálogo de serviços', 'Galeria de trabalhos', 'Avaliações', 'Programa fidelidade'],
    icon: Scissors,
    color: 'bg-orange-700'
  },
  {
    id: 'field-team-app',
    name: 'App para Equipes de Campo',
    description: 'Aplicativo para gestão de tarefas de equipes externas',
    category: 'mobile',
    features: ['GPS tracking', 'Check-in localizado', 'Relatórios de campo', 'Fotos georeferenciadas', 'Modo offline'],
    icon: MapPin,
    color: 'bg-green-800'
  },
  {
    id: 'recipe-app',
    name: 'App de Receitas',
    description: 'Aplicativo de receitas com lista de ingredientes automática',
    category: 'mobile',
    features: ['Banco de receitas', 'Lista de compras automática', 'Timer de cozimento', 'Conversão de medidas', 'Favoritos'],
    icon: ChefHat,
    color: 'bg-red-700'
  },
  {
    id: 'customer-registration-app',
    name: 'App de Cadastro de Clientes',
    description: 'Aplicativo para cadastro de clientes com geolocalização',
    category: 'mobile',
    features: ['Cadastro offline', 'Geolocalização', 'Fotos integradas', 'Sincronização automática', 'Validação de dados'],
    icon: UserPlus,
    color: 'bg-indigo-700'
  },
  {
    id: 'team-chat-app',
    name: 'App de Chat para Equipes',
    description: 'Chat interno para equipes com recursos corporativos',
    category: 'mobile',
    features: ['Chat em tempo real', 'Grupos por projeto', 'Compartilhamento arquivos', 'Videochamadas', 'Integração ferramentas'],
    icon: MessageSquare,
    color: 'bg-blue-800'
  },
  {
    id: 'expense-tracker-app',
    name: 'App de Controle de Gastos',
    description: 'Aplicativo para tracking de despesas com relatórios',
    category: 'mobile',
    features: ['Scanning de recibos', 'Categorização IA', 'Relatórios visuais', 'Metas de gastos', 'Export para contabilidade'],
    icon: Receipt,
    color: 'bg-emerald-700'
  },
  {
    id: 'inventory-app',
    name: 'App de Inventário',
    description: 'Aplicativo para controle de estoque mobile',
    category: 'mobile',
    features: ['Scanner código barras', 'Inventário por localização', 'Alertas de estoque', 'Relatórios móveis', 'Sincronização ERP'],
    icon: Package,
    color: 'bg-gray-700'
  },

  // AUTOMAÇÃO & IA (15 templates)
  {
    id: 'whatsapp-bot-ai',
    name: 'Bot de WhatsApp com IA',
    description: 'Chatbot inteligente para WhatsApp com processamento de linguagem natural',
    category: 'automation',
    features: ['NLP avançado', 'Respostas contextuais', 'Integração CRM', 'Multi-idiomas', 'Aprendizado contínuo'],
    icon: MessageSquare,
    color: 'bg-green-600'
  },
  {
    id: 'appointment-bot',
    name: 'Bot de Agendamento Automático',
    description: 'Bot inteligente para agendamento com confirmação automática',
    category: 'automation',
    features: ['Agendamento inteligente', 'Confirmação automática', 'Reagendamento', 'Lembretes SMS', 'Integração agenda'],
    icon: Calendar,
    color: 'bg-blue-600'
  },
  {
    id: 'sales-bot',
    name: 'Bot de Vendas com Catálogo',
    description: 'Bot de vendas interativo com catálogo de produtos',
    category: 'automation',
    features: ['Catálogo interativo', 'Recomendações IA', 'Processo de compra', 'Pagamentos integrados', 'Follow-up automático'],
    icon: ShoppingCart,
    color: 'bg-purple-600'
  },
  {
    id: 'faq-bot',
    name: 'Bot de FAQ Inteligente',
    description: 'Chatbot para atendimento ao cliente com base de conhecimento',
    category: 'automation',
    features: ['Base de conhecimento', 'Busca semântica', 'Escalação humana', 'Múltiplos canais', 'Analytics de conversas'],
    icon: HelpCircle,
    color: 'bg-orange-600'
  },
  {
    id: 'reminder-bot',
    name: 'Bot de Lembrete de Serviços',
    description: 'Sistema de lembretes automáticos para consultas e serviços',
    category: 'automation',
    features: ['Lembretes personalizados', 'Multi-canal', 'Reagendamento fácil', 'Confirmação presença', 'Feedback automático'],
    icon: Bell,
    color: 'bg-red-600'
  },
  {
    id: 'lead-capture-bot',
    name: 'Bot de Captura de Leads',
    description: 'Chatbot especializado em qualificação e captura de leads',
    category: 'automation',
    features: ['Qualificação automática', 'Formulários dinâmicos', 'Score de leads', 'Integração CRM', 'Nurturing automático'],
    icon: Target,
    color: 'bg-indigo-600'
  },
  {
    id: 'billing-bot',
    name: 'Bot de Cobrança Automática',
    description: 'Sistema automático de cobrança com boletos e PIX',
    category: 'automation',
    features: ['Cobrança automática', 'Boletos e PIX', 'Negociação débitos', 'Parcelamento', 'Relatórios cobrança'],
    icon: CreditCard,
    color: 'bg-yellow-600'
  },
  {
    id: 'birthday-automation',
    name: 'Automação de Aniversários',
    description: 'Sistema de mensagens automáticas de aniversário e fidelização',
    category: 'automation',
    features: ['Mensagens personalizadas', 'Ofertas especiais', 'Multi-canal', 'Segmentação clientes', 'ROI tracking'],
    icon: Gift,
    color: 'bg-pink-600'
  },
  {
    id: 'manychar-whatsapp',
    name: 'Plataforma tipo ManyChat',
    description: 'Criador de fluxos de automação para WhatsApp',
    category: 'automation',
    features: ['Editor visual fluxos', 'Triggers avançados', 'Integração APIs', 'A/B testing', 'Analytics detalhado'],
    icon: Workflow,
    color: 'bg-teal-600'
  },
  {
    id: 'conversation-analytics',
    name: 'Analytics de Conversas',
    description: 'Painel de estatísticas e análise de conversas de chatbots',
    category: 'automation',
    features: ['Análise sentimento', 'Taxa conversão', 'Palavras-chave', 'Funis conversação', 'Otimização IA'],
    icon: BarChart3,
    color: 'bg-emerald-600'
  },
  {
    id: 'content-generator-ai',
    name: 'Gerador de Conteúdo com IA',
    description: 'Ferramenta de geração automática de conteúdo para blogs e redes sociais',
    category: 'automation',
    features: ['Geração multi-formato', 'SEO otimizado', 'Múltiplos idiomas', 'Personalização tom', 'Agendamento automático'],
    icon: Edit,
    color: 'bg-blue-700'
  },
  {
    id: 'email-automation',
    name: 'Automação de E-mails',
    description: 'Sistema avançado de automação de e-mail marketing',
    category: 'automation',
    features: ['Fluxos automáticos', 'Segmentação dinâmica', 'Personalização IA', 'A/B testing', 'Deliverability otimizada'],
    icon: Mail,
    color: 'bg-purple-700'
  },
  {
    id: 'social-automation',
    name: 'Automação Redes Sociais',
    description: 'Plataforma de automação completa para redes sociais',
    category: 'automation',
    features: ['Post automático', 'Resposta comentários', 'DM automation', 'Hashtags IA', 'Cross-platform'],
    icon: Share2,
    color: 'bg-orange-700'
  },
  {
    id: 'ai-assistant',
    name: 'Assistente Virtual IA',
    description: 'Assistente virtual inteligente para empresas',
    category: 'automation',
    features: ['Processamento voz', 'Integração sistemas', 'Agenda inteligente', 'Relatórios automáticos', 'Multilingual'],
    icon: Brain,
    color: 'bg-cyan-700'
  },
  {
    id: 'data-automation',
    name: 'Automação de Dados',
    description: 'Sistema de automação para coleta e processamento de dados',
    category: 'automation',
    features: ['Web scraping', 'ETL automático', 'Data cleaning', 'Integração APIs', 'Dashboards automáticos'],
    icon: Database,
    color: 'bg-gray-700'
  },

  // FINANCEIRO & PAGAMENTOS (8 templates)
  {
    id: 'digital-wallet',
    name: 'Carteira Digital',
    description: 'Sistema de carteira digital com múltiplas funcionalidades',
    category: 'finance',
    features: ['Múltiplas moedas', 'P2P transfers', 'QR code payments', 'Cashback', 'Investment integration'],
    icon: Wallet,
    color: 'bg-green-600'
  },
  {
    id: 'invoice-automation',
    name: 'Automação de Faturas',
    description: 'Sistema automatizado de faturamento e cobrança',
    category: 'finance',
    features: ['Faturamento automático', 'Múltiplos gateways', 'Relatórios fiscais', 'API integração', 'Dunning management'],
    icon: Receipt,
    color: 'bg-blue-600'
  },
  {
    id: 'expense-management',
    name: 'Gestão de Despesas',
    description: 'Plataforma corporativa para gestão de despesas',
    category: 'finance',
    features: ['Scanning recibos', 'Aprovação workflow', 'Integração cartões', 'Relatórios gerenciais', 'Mobile app'],
    icon: CreditCard,
    color: 'bg-purple-600'
  },
  {
    id: 'payment-gateway',
    name: 'Gateway de Pagamentos',
    description: 'Solução completa de gateway de pagamentos',
    category: 'finance',
    features: ['Múltiplos métodos', 'Anti-fraude', 'Checkout customizável', 'Recurring billing', 'International payments'],
    icon: CreditCard,
    color: 'bg-orange-600'
  },
  {
    id: 'crypto-exchange',
    name: 'Exchange de Criptomoedas',
    description: 'Plataforma de negociação de criptomoedas',
    category: 'finance',
    features: ['Trading engine', 'KYC automático', 'Cold storage', 'API trading', 'P2P marketplace'],
    icon: Bitcoin,
    color: 'bg-yellow-600'
  },
  {
    id: 'loan-platform',
    name: 'Plataforma de Empréstimos',
    description: 'Sistema P2P de empréstimos com análise de risco',
    category: 'finance',
    features: ['Credit scoring', 'P2P lending', 'Risk analysis', 'Automated decisions', 'Collection system'],
    icon: TrendingUp,
    color: 'bg-red-600'
  },
  {
    id: 'budgeting-app',
    name: 'App de Orçamento Pessoal',
    description: 'Aplicativo completo para gestão de orçamento pessoal',
    category: 'finance',
    features: ['Budget tracking', 'Goal setting', 'Expense categorization', 'Bill reminders', 'Financial insights'],
    icon: PiggyBank,
    color: 'bg-indigo-600'
  },
  {
    id: 'investment-platform',
    name: 'Plataforma de Investimentos',
    description: 'Sistema para gestão de investimentos e portfólio',
    category: 'finance',
    features: ['Portfolio management', 'Risk assessment', 'Automated investing', 'Tax optimization', 'Performance tracking'],
    icon: TrendingUp,
    color: 'bg-teal-600'
  },

  // COMUNICAÇÃO & CHAT (5 templates)
  {
    id: 'team-communication',
    name: 'Plataforma de Comunicação',
    description: 'Sistema completo de comunicação interna para empresas',
    category: 'communication',
    features: ['Chat em tempo real', 'Videochamadas', 'Compartilhamento arquivos', 'Canais organizados', 'Integração ferramentas'],
    icon: MessageSquare,
    color: 'bg-blue-600'
  },
  {
    id: 'video-conference',
    name: 'Sistema de Videoconferência',
    description: 'Plataforma de videoconferência com recursos corporativos',
    category: 'communication',
    features: ['HD video calls', 'Screen sharing', 'Recording', 'Breakout rooms', 'API integration'],
    icon: Video,
    color: 'bg-purple-600'
  },
  {
    id: 'live-chat-support',
    name: 'Chat de Suporte ao Vivo',
    description: 'Sistema de chat para suporte ao cliente em tempo real',
    category: 'communication',
    features: ['Live chat widget', 'Agent dashboard', 'Visitor tracking', 'Canned responses', 'Integration CRM'],
    icon: Headphones,
    color: 'bg-green-600'
  },
  {
    id: 'forum-platform',
    name: 'Plataforma de Fórum',
    description: 'Sistema de fórum com moderação e gamificação',
    category: 'communication',
    features: ['Thread management', 'Reputation system', 'Moderation tools', 'Real-time notifications', 'Mobile responsive'],
    icon: Users,
    color: 'bg-orange-600'
  },
  {
    id: 'announcement-system',
    name: 'Sistema de Comunicados',
    description: 'Plataforma para comunicados internos e externos',
    category: 'communication',
    features: ['Broadcast messages', 'Targeted communications', 'Read receipts', 'Schedule delivery', 'Multi-channel'],
    icon: Megaphone,
    color: 'bg-red-600'
  },

  // CRIATIVO & DESIGN (5 templates)
  {
    id: 'design-collaboration',
    name: 'Plataforma de Design Colaborativo',
    description: 'Sistema para colaboração em projetos de design',
    category: 'creative',
    features: ['Real-time collaboration', 'Version control', 'Feedback system', 'Asset management', 'Client portal'],
    icon: Palette,
    color: 'bg-pink-600'
  },
  {
    id: 'photo-editor',
    name: 'Editor de Fotos Online',
    description: 'Editor de imagens online com IA para melhoramento',
    category: 'creative',
    features: ['AI enhancement', 'Filters and effects', 'Batch processing', 'Cloud storage', 'Social sharing'],
    icon: Image,
    color: 'bg-purple-600'
  },
  {
    id: 'logo-generator',
    name: 'Gerador de Logos com IA',
    description: 'Ferramenta de criação de logos usando inteligência artificial',
    category: 'creative',
    features: ['AI logo generation', 'Brand kit creation', 'Vector export', 'Color palette', 'Multiple variations'],
    icon: Zap,
    color: 'bg-blue-600'
  },
  {
    id: 'stock-photos',
    name: 'Banco de Imagens',
    description: 'Plataforma de licenciamento de fotos e imagens',
    category: 'creative',
    features: ['Advanced search', 'License management', 'Bulk downloads', 'API access', 'Contributor system'],
    icon: Camera,
    color: 'bg-green-600'
  },
  {
    id: 'video-editor',
    name: 'Editor de Vídeos Online',
    description: 'Editor de vídeo baseado na web com recursos profissionais',
    category: 'creative',
    features: ['Timeline editing', 'Effects library', 'Audio mixing', 'Export options', 'Collaboration tools'],
    icon: Video,
    color: 'bg-red-600'
  }
];

export const getTemplatesByCategory = (categoryId: string): ProjectTemplate[] => {
  if (categoryId === 'all') {
    return projectTemplates;
  }
  return projectTemplates.filter(template => template.category === categoryId);
};

export const searchTemplates = (query: string): ProjectTemplate[] => {
  const lowercaseQuery = query.toLowerCase();
  return projectTemplates.filter(template =>
    template.name.toLowerCase().includes(lowercaseQuery) ||
    template.description.toLowerCase().includes(lowercaseQuery) ||
    template.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
};

export const getTemplateById = (id: string): ProjectTemplate | undefined => {
  return projectTemplates.find(template => template.id === id);
};
