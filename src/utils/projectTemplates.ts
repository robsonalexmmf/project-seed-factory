
import { 
  ShoppingCart, 
  Users, 
  Building, 
  Heart, 
  GraduationCap, 
  Utensils, 
  Car, 
  Home, 
  Zap, 
  TrendingUp, 
  Monitor, 
  Gamepad2, 
  MessageSquare, 
  Globe,
  Bell,
  Bot,
  Store,
  Package,
  DollarSign,
  ChefHat,
  UserPlus,
  Briefcase,
  FileText,
  Wrench,
  Scissors,
  Camera,
  Dumbbell,
  Truck,
  PiggyBank,
  BarChart3,
  Calendar,
  Mail,
  CreditCard,
  Settings,
  Shield,
  Laptop,
  Music,
  Coffee,
  Plane,
  Book,
  Gift,
  Clock,
  Target,
  Star,
  Phone,
  MapPin,
  Smartphone,
  Headphones,
  Palette,
  Hammer,
  Calculator,
  FileCheck,
  Megaphone,
  Award,
  Lock,
  Search,
  ChartLine,
  Code,
  Database,
  Cloud,
  Wifi,
  type LucideIcon
} from 'lucide-react';

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  icon: LucideIcon;
  difficulty: 'Fácil' | 'Médio' | 'Avançado';
  color: string;
}

export interface TemplateCategory {
  id: string;
  name: string;
  icon: LucideIcon;
}

export const templateCategories: TemplateCategory[] = [
  { id: 'all', name: 'Todos', icon: Globe },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
  { id: 'social', name: 'Social', icon: Users },
  { id: 'business', name: 'Negócios', icon: Building },
  { id: 'health', name: 'Saúde', icon: Heart },
  { id: 'education', name: 'Educação', icon: GraduationCap },
  { id: 'food', name: 'Alimentação', icon: Utensils },
  { id: 'transport', name: 'Transporte', icon: Car },
  { id: 'real-estate', name: 'Imóveis', icon: Home },
  { id: 'productivity', name: 'Produtividade', icon: Zap },
  { id: 'analytics', name: 'Analytics', icon: TrendingUp },
  { id: 'entertainment', name: 'Entretenimento', icon: Monitor },
];

export const projectTemplates: ProjectTemplate[] = [
  // Templates existentes
  {
    id: 'blog-platform',
    name: 'Plataforma de Blog',
    description: 'Sistema completo de blog com editor WYSIWYG, comentários e SEO',
    category: 'social',
    features: ['Editor de texto rico', 'Sistema de comentários', 'SEO otimizado', 'Tags e categorias'],
    icon: FileText,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'task-manager',
    name: 'Gerenciador de Tarefas',
    description: 'App de produtividade com quadros Kanban e colaboração em equipe',
    category: 'productivity',
    features: ['Quadros Kanban', 'Colaboração em tempo real', 'Notificações', 'Relatórios'],
    icon: FileCheck,
    difficulty: 'Médio',
    color: 'bg-green-500'
  },
  {
    id: 'ecommerce-store',
    name: 'Loja Virtual',
    description: 'E-commerce completo com carrinho, pagamentos e gestão de produtos',
    category: 'ecommerce',
    features: ['Carrinho de compras', 'Gateway de pagamento', 'Gestão de produtos', 'Painel admin'],
    icon: ShoppingCart,
    difficulty: 'Avançado',
    color: 'bg-purple-500'
  },
  {
    id: 'social-network',
    name: 'Rede Social',
    description: 'Plataforma social com feed, mensagens e sistema de amigos',
    category: 'social',
    features: ['Feed de notícias', 'Mensagens privadas', 'Sistema de amigos', 'Stories'],
    icon: Users,
    difficulty: 'Avançado',
    color: 'bg-pink-500'
  },
  {
    id: 'dashboard-analytics',
    name: 'Dashboard Analytics',
    description: 'Painel de controle com gráficos e métricas em tempo real',
    category: 'analytics',
    features: ['Gráficos interativos', 'Métricas em tempo real', 'Filtros avançados', 'Exportação'],
    icon: BarChart3,
    difficulty: 'Médio',
    color: 'bg-indigo-500'
  },

  // Novos templates - Vendas e PDV
  {
    id: 'pdv-cloud',
    name: 'PDV em Nuvem',
    description: 'Sistema de ponto de venda completo com sincronização em tempo real',
    category: 'business',
    features: ['Vendas offline/online', 'Sincronização automática', 'Múltiplos terminais', 'Relatórios'],
    icon: Monitor,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'qr-sales',
    name: 'Vendas por QR Code',
    description: 'Sistema de vendas usando QR codes para pagamentos rápidos',
    category: 'business',
    features: ['QR Code dinâmico', 'Pagamento instantâneo', 'Histórico de vendas', 'Mobile first'],
    icon: Smartphone,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'nf-integration',
    name: 'Integração Nota Fiscal',
    description: 'Sistema de emissão automática de notas fiscais integrado',
    category: 'business',
    features: ['Emissão automática NFe', 'Integração SEFAZ', 'XML/DANFE', 'Contingência'],
    icon: FileText,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'card-integration',
    name: 'Integração Maquininhas',
    description: 'Integração com terminais de pagamento por cartão',
    category: 'business',
    features: ['TEF integrado', 'Múltiplas bandeiras', 'Parcelamento', 'Conciliação'],
    icon: CreditCard,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'mobile-checkout',
    name: 'Checkout Móvel',
    description: 'Sistema de checkout otimizado para tablets e smartphones',
    category: 'business',
    features: ['Interface touch', 'Modo offline', 'Catálogo produtos', 'Impressão móvel'],
    icon: Smartphone,
    difficulty: 'Médio',
    color: 'bg-orange-600'
  },

  // Gestão de Estoque
  {
    id: 'inventory-control',
    name: 'Controle de Estoque',
    description: 'Sistema completo de gestão de estoque com alertas inteligentes',
    category: 'business',
    features: ['Entrada/saída produtos', 'Alertas estoque mínimo', 'Relatórios giro', 'Código barras'],
    icon: Package,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'barcode-inventory',
    name: 'Inventário Código Barras',
    description: 'Sistema de inventário com leitura por código de barras',
    category: 'business',
    features: ['Leitor código barras', 'Inventário mobile', 'Divergências automáticas', 'Relatórios'],
    icon: Search,
    difficulty: 'Médio',
    color: 'bg-green-500'
  },
  {
    id: 'supplier-management',
    name: 'Gestão Fornecedores',
    description: 'Sistema de cadastro e gestão de fornecedores com prazos',
    category: 'business',
    features: ['Cadastro fornecedores', 'Prazos médios', 'Histórico compras', 'Avaliações'],
    icon: Truck,
    difficulty: 'Médio',
    color: 'bg-purple-500'
  },
  {
    id: 'purchase-automation',
    name: 'Compras Automáticas',
    description: 'Sistema de requisição automática de compras baseado em estoque',
    category: 'business',
    features: ['Requisição automática', 'Ponto de pedido', 'Cotações múltiplas', 'Aprovações'],
    icon: Bot,
    difficulty: 'Avançado',
    color: 'bg-indigo-500'
  },

  // Financeiro e Cobrança
  {
    id: 'cash-flow',
    name: 'Fluxo de Caixa',
    description: 'Sistema automatizado de controle de fluxo de caixa',
    category: 'business',
    features: ['Entradas/saídas automáticas', 'Projeções', 'Categorização', 'Relatórios'],
    icon: DollarSign,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'bank-reconciliation',
    name: 'Conciliação Bancária',
    description: 'Sistema de conciliação bancária automática com OFX',
    category: 'business',
    features: ['Import OFX/CSV', 'Conciliação automática', 'Múltiplas contas', 'Divergências'],
    icon: PiggyBank,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'recurring-billing',
    name: 'Cobrança Recorrente',
    description: 'Sistema de boletos e cobranças recorrentes automáticas',
    category: 'business',
    features: ['Boletos automáticos', 'Recorrência', 'Retorno bancário', 'Baixa automática'],
    icon: Calendar,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'pix-billing',
    name: 'Cobrança PIX',
    description: 'Sistema de cobrança com QR Code PIX dinâmico',
    category: 'business',
    features: ['QR Code PIX', 'Cobrança instantânea', 'Webhook notificações', 'Conciliação'],
    icon: Smartphone,
    difficulty: 'Médio',
    color: 'bg-green-500'
  },

  // Bares, Restaurantes e Delivery
  {
    id: 'qr-menu',
    name: 'Menu QR Code',
    description: 'Cardápio digital com pedidos por QR Code na mesa',
    category: 'food',
    features: ['QR Code mesa', 'Cardápio digital', 'Pedidos diretos', 'Pagamento integrado'],
    icon: Utensils,
    difficulty: 'Médio',
    color: 'bg-orange-500'
  },
  {
    id: 'digital-menu',
    name: 'Cardápio Digital',
    description: 'Cardápio online com fotos e descrições detalhadas',
    category: 'food',
    features: ['Fotos produtos', 'Categorias', 'Ingredientes', 'Preços dinâmicos'],
    icon: Camera,
    difficulty: 'Fácil',
    color: 'bg-yellow-500'
  },
  {
    id: 'electronic-order',
    name: 'Comanda Eletrônica',
    description: 'Sistema de comandas eletrônicas para restaurantes',
    category: 'food',
    features: ['Comandas digitais', 'Controle mesas', 'Divisão conta', 'Histórico pedidos'],
    icon: FileText,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'delivery-integration',
    name: 'Integração Delivery',
    description: 'Integração com plataformas de delivery como iFood e Rappi',
    category: 'food',
    features: ['API iFood/Rappi', 'Cardápio sincronizado', 'Pedidos unificados', 'Relatórios'],
    icon: Truck,
    difficulty: 'Avançado',
    color: 'bg-red-500'
  },

  // CRM e Relacionamento
  {
    id: 'customer-crm',
    name: 'CRM Clientes',
    description: 'Sistema de relacionamento com clientes e histórico completo',
    category: 'business',
    features: ['Cadastro clientes', 'Histórico interações', 'Aniversários', 'Segmentação'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-purple-500'
  },
  {
    id: 'email-campaigns',
    name: 'Campanhas Email',
    description: 'Sistema de envio automático de campanhas de email marketing',
    category: 'business',
    features: ['Templates email', 'Listas segmentadas', 'Agendamento', 'Métricas abertura'],
    icon: Mail,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'whatsapp-crm',
    name: 'CRM WhatsApp',
    description: 'CRM integrado com WhatsApp para atendimento e vendas',
    category: 'business',
    features: ['API WhatsApp', 'Chat unificado', 'Bot automático', 'Histórico conversas'],
    icon: MessageSquare,
    difficulty: 'Avançado',
    color: 'bg-green-500'
  },

  // Gestão de Funcionários
  {
    id: 'work-schedule',
    name: 'Escala de Trabalho',
    description: 'Sistema online de escalas de trabalho e gestão de turnos',
    category: 'business',
    features: ['Escalas automáticas', 'Turnos rotativos', 'Substituições', 'Mobile app'],
    icon: Calendar,
    difficulty: 'Médio',
    color: 'bg-indigo-500'
  },
  {
    id: 'time-clock',
    name: 'Controle de Ponto',
    description: 'Controle de ponto por geolocalização e reconhecimento facial',
    category: 'business',
    features: ['Geolocalização', 'Reconhecimento facial', 'Horas extras', 'Relatórios'],
    icon: Clock,
    difficulty: 'Avançado',
    color: 'bg-red-500'
  },
  {
    id: 'performance-review',
    name: 'Avaliação Desempenho',
    description: 'Sistema de avaliação de desempenho e metas dos funcionários',
    category: 'business',
    features: ['Avaliações 360°', 'Metas individuais', 'Feedback contínuo', 'Relatórios'],
    icon: Award,
    difficulty: 'Médio',
    color: 'bg-yellow-500'
  },

  // Salões, Barbearias, Clínicas
  {
    id: 'online-booking',
    name: 'Agenda Online',
    description: 'Sistema de agendamento online com confirmação automática',
    category: 'health',
    features: ['Agenda online', 'Confirmação SMS', 'Lista espera', 'Lembretes'],
    icon: Calendar,
    difficulty: 'Médio',
    color: 'bg-pink-500'
  },
  {
    id: 'beauty-packages',
    name: 'Pacotes Beleza',
    description: 'Gestão de pacotes de sessões e controle de uso',
    category: 'health',
    features: ['Pacotes sessões', 'Controle uso', 'Validade', 'Transferências'],
    icon: Gift,
    difficulty: 'Médio',
    color: 'bg-purple-500'
  },
  {
    id: 'digital-records',
    name: 'Prontuário Digital',
    description: 'Sistema de prontuários digitais para clínicas e salões',
    category: 'health',
    features: ['Prontuários seguros', 'Histórico tratamentos', 'Fotos antes/depois', 'LGPD'],
    icon: FileText,
    difficulty: 'Avançado',
    color: 'bg-blue-500'
  },

  // Imobiliárias
  {
    id: 'property-management',
    name: 'Gestão Imóveis',
    description: 'Sistema completo de gestão de imóveis e aluguéis',
    category: 'real-estate',
    features: ['Cadastro imóveis', 'Contratos digitais', 'Boletos automáticos', 'Relatórios'],
    icon: Home,
    difficulty: 'Avançado',
    color: 'bg-green-600'
  },
  {
    id: 'virtual-tour',
    name: 'Visita Virtual',
    description: 'Plataforma de visitas virtuais e agendamento presencial',
    category: 'real-estate',
    features: ['Tours 360°', 'Agendamento visitas', 'Interesse clientes', 'Analytics'],
    icon: Camera,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },

  // Academias
  {
    id: 'gym-management',
    name: 'Gestão Academia',
    description: 'Sistema completo para gestão de academias e estúdios',
    category: 'health',
    features: ['Controle acesso', 'Planos treino', 'Avaliação física', 'App aluno'],
    icon: Dumbbell,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'workout-app',
    name: 'App Treino',
    description: 'Aplicativo de treinos com fichas personalizadas',
    category: 'health',
    features: ['Fichas treino', 'Progressão exercícios', 'Cronômetros', 'Histórico'],
    icon: Target,
    difficulty: 'Médio',
    color: 'bg-orange-600'
  },

  // E-commerce
  {
    id: 'marketplace-saas',
    name: 'Marketplace SaaS',
    description: 'Plataforma SaaS para criação de lojas virtuais',
    category: 'ecommerce',
    features: ['Multi-loja', 'Templates', 'Pagamentos', 'Analytics'],
    icon: Store,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'shipping-calculator',
    name: 'Calculadora Frete',
    description: 'Sistema de cálculo de frete integrado com Correios',
    category: 'ecommerce',
    features: ['API Correios', 'Múltiplas transportadoras', 'Frete grátis', 'Prazo entrega'],
    icon: Truck,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },

  // Marketing
  {
    id: 'social-scheduler',
    name: 'Agendador Social',
    description: 'Sistema de agendamento de postagens em redes sociais',
    category: 'business',
    features: ['Multi-plataforma', 'Agendamento', 'Analytics', 'Templates'],
    icon: Calendar,
    difficulty: 'Médio',
    color: 'bg-pink-500'
  },
  {
    id: 'loyalty-program',
    name: 'Programa Fidelidade',
    description: 'Sistema de pontos e cashback para fidelização',
    category: 'business',
    features: ['Sistema pontos', 'Cashback', 'Recompensas', 'Gamificação'],
    icon: Star,
    difficulty: 'Médio',
    color: 'bg-yellow-500'
  },

  // Produtividade
  {
    id: 'digital-signature',
    name: 'Assinatura Digital',
    description: 'Plataforma de assinatura digital de documentos',
    category: 'productivity',
    features: ['Assinatura válida', 'Certificado ICP', 'Workflow aprovação', 'Rastreabilidade'],
    icon: FileCheck,
    difficulty: 'Avançado',
    color: 'bg-green-600'
  },
  {
    id: 'document-generator',
    name: 'Gerador Documentos',
    description: 'Sistema de geração automática de contratos e documentos',
    category: 'productivity',
    features: ['Templates documentos', 'Variáveis dinâmicas', 'PDF automático', 'Assinatura'],
    icon: FileText,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },

  // Outros SaaS
  {
    id: 'support-tickets',
    name: 'Tickets Suporte',
    description: 'Sistema de tickets de suporte com chat integrado',
    category: 'business',
    features: ['Tickets organizados', 'Chat tempo real', 'Base conhecimento', 'SLA'],
    icon: Headphones,
    difficulty: 'Médio',
    color: 'bg-indigo-500'
  },
  {
    id: 'bi-dashboard',
    name: 'Dashboard BI',
    description: 'Business Intelligence simples com dashboards interativos',
    category: 'analytics',
    features: ['Dashboards interativos', 'Múltiplas fontes', 'Relatórios automáticos', 'KPIs'],
    icon: BarChart3,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'budget-quotes',
    name: 'Orçamentos Online',
    description: 'Plataforma de orçamentos com histórico e aprovações',
    category: 'business',
    features: ['Orçamentos rápidos', 'Histórico preços', 'Aprovação digital', 'Conversão vendas'],
    icon: Calculator,
    difficulty: 'Médio',
    color: 'bg-green-500'
  }
];

export const getTemplatesByCategory = (categoryId: string) => {
  if (categoryId === 'all') return projectTemplates;
  return projectTemplates.filter(template => template.category === categoryId);
};

export const searchTemplates = (searchTerm: string) => {
  const term = searchTerm.toLowerCase();
  return projectTemplates.filter(template => 
    template.name.toLowerCase().includes(term) ||
    template.description.toLowerCase().includes(term) ||
    template.features.some(feature => feature.toLowerCase().includes(term))
  );
};
