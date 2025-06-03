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
  { id: 'finance', name: 'Financeiro', icon: DollarSign },
  { id: 'marketing', name: 'Marketing', icon: Megaphone },
  { id: 'communication', name: 'Comunicação', icon: MessageSquare },
];

export const projectTemplates: ProjectTemplate[] = [
  // E-commerce Templates (50 templates)
  {
    id: 'ecommerce-marketplace',
    name: 'Marketplace Multi-Vendor',
    description: 'Plataforma completa para múltiplos vendedores com sistema de comissões',
    category: 'ecommerce',
    features: ['Multi-vendor', 'Sistema de comissões', 'Pagamentos Split', 'Dashboard vendedor'],
    icon: Store,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'ecommerce-dropshipping',
    name: 'Loja Dropshipping',
    description: 'Sistema automatizado de dropshipping com integração fornecedores',
    category: 'ecommerce',
    features: ['Importação produtos', 'Automação pedidos', 'Tracking automático', 'Múltiplos fornecedores'],
    icon: Package,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'ecommerce-subscription',
    name: 'E-commerce Assinatura',
    description: 'Loja com produtos por assinatura e cobrança recorrente',
    category: 'ecommerce',
    features: ['Cobrança recorrente', 'Gestão assinaturas', 'Pausar/cancelar', 'Analytics recorrência'],
    icon: CreditCard,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'ecommerce-digital',
    name: 'Loja Digital',
    description: 'Venda de produtos digitais com download automático',
    category: 'ecommerce',
    features: ['Downloads automáticos', 'Licenças', 'Proteção DRM', 'Códigos de ativação'],
    icon: Cloud,
    difficulty: 'Médio',
    color: 'bg-indigo-600'
  },
  {
    id: 'ecommerce-mobile',
    name: 'E-commerce Mobile First',
    description: 'Loja otimizada para dispositivos móveis com PWA',
    category: 'ecommerce',
    features: ['PWA', 'Push notifications', 'Pagamento mobile', 'Câmera produto'],
    icon: Smartphone,
    difficulty: 'Médio',
    color: 'bg-pink-600'
  },
  {
    id: 'ecommerce-b2b',
    name: 'E-commerce B2B',
    description: 'Plataforma para vendas empresariais com catálogos personalizados',
    category: 'ecommerce',
    features: ['Catálogos personalizados', 'Preços por cliente', 'Pedidos em lote', 'Aprovações'],
    icon: Building,
    difficulty: 'Avançado',
    color: 'bg-orange-600'
  },
  {
    id: 'ecommerce-auction',
    name: 'Site de Leilões',
    description: 'Plataforma de leilões online com sistema de lances',
    category: 'ecommerce',
    features: ['Sistema de lances', 'Tempo real', 'Auto-bid', 'Histórico leilões'],
    icon: Hammer,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'ecommerce-rental',
    name: 'Sistema de Aluguel',
    description: 'Plataforma para aluguel de produtos e equipamentos',
    category: 'ecommerce',
    features: ['Calendário disponibilidade', 'Caução', 'Contratos digitais', 'Devolução'],
    icon: Calendar,
    difficulty: 'Médio',
    color: 'bg-teal-600'
  },
  {
    id: 'ecommerce-fashion',
    name: 'Loja de Moda',
    description: 'E-commerce especializado em moda com provador virtual',
    category: 'ecommerce',
    features: ['Provador virtual', 'Guia de tamanhos', 'Mix & match', 'Wishlist'],
    icon: Scissors,
    difficulty: 'Avançado',
    color: 'bg-pink-500'
  },
  {
    id: 'ecommerce-grocery',
    name: 'Supermercado Online',
    description: 'Delivery de supermercado com agendamento de entrega',
    category: 'ecommerce',
    features: ['Agendamento entrega', 'Produtos perecíveis', 'Lista de compras', 'Substituições'],
    icon: ShoppingCart,
    difficulty: 'Médio',
    color: 'bg-green-500'
  },
  {
    id: 'ecommerce-handmade',
    name: 'Marketplace Artesanal',
    description: 'Plataforma para produtos feitos à mão e artesanato',
    category: 'ecommerce',
    features: ['Perfil artesão', 'Produtos únicos', 'Personalização', 'História produto'],
    icon: Palette,
    difficulty: 'Médio',
    color: 'bg-yellow-600'
  },
  {
    id: 'ecommerce-books',
    name: 'Livraria Online',
    description: 'E-commerce especializado em livros físicos e digitais',
    category: 'ecommerce',
    features: ['E-books', 'Audiobooks', 'Resenhas', 'Clube do livro'],
    icon: Book,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'ecommerce-electronics',
    name: 'Loja de Eletrônicos',
    description: 'E-commerce de eletrônicos com comparador de preços',
    category: 'ecommerce',
    features: ['Comparador preços', 'Especificações técnicas', 'Garantia', 'Trade-in'],
    icon: Laptop,
    difficulty: 'Médio',
    color: 'bg-gray-600'
  },
  {
    id: 'ecommerce-furniture',
    name: 'Loja de Móveis',
    description: 'E-commerce de móveis com visualização 3D',
    category: 'ecommerce',
    features: ['Visualização 3D', 'AR furniture', 'Medidas ambiente', 'Montagem'],
    icon: Home,
    difficulty: 'Avançado',
    color: 'bg-brown-600'
  },
  {
    id: 'ecommerce-pets',
    name: 'Pet Shop Online',
    description: 'E-commerce para produtos pet com perfil do animal',
    category: 'ecommerce',
    features: ['Perfil pet', 'Recomendações por raça', 'Veterinário online', 'Assinatura ração'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-pink-600'
  },
  {
    id: 'ecommerce-auto',
    name: 'Loja Auto Peças',
    description: 'E-commerce de autopeças com busca por veículo',
    category: 'ecommerce',
    features: ['Busca por veículo', 'Compatibilidade', 'Diagramas peças', 'Oficinas parceiras'],
    icon: Car,
    difficulty: 'Médio',
    color: 'bg-red-600'
  },
  {
    id: 'ecommerce-wine',
    name: 'Loja de Vinhos',
    description: 'E-commerce especializado em vinhos com sommelier virtual',
    category: 'ecommerce',
    features: ['Sommelier virtual', 'Harmonização', 'Clube de vinhos', 'Adega virtual'],
    icon: Coffee,
    difficulty: 'Médio',
    color: 'bg-purple-700'
  },
  {
    id: 'ecommerce-sports',
    name: 'Loja de Esportes',
    description: 'E-commerce de artigos esportivos com personal trainer',
    category: 'ecommerce',
    features: ['Personal trainer', 'Treinos', 'Nutrição', 'Grupos esportivos'],
    icon: Dumbbell,
    difficulty: 'Médio',
    color: 'bg-orange-600'
  },
  {
    id: 'ecommerce-beauty',
    name: 'Loja de Beleza',
    description: 'E-commerce de cosméticos com teste virtual',
    category: 'ecommerce',
    features: ['Teste virtual makeup', 'Skin analyzer', 'Tutoriais', 'Assinatura beauty'],
    icon: Palette,
    difficulty: 'Avançado',
    color: 'bg-pink-500'
  },
  {
    id: 'ecommerce-music',
    name: 'Loja de Instrumentos',
    description: 'E-commerce de instrumentos musicais com aulas online',
    category: 'ecommerce',
    features: ['Aulas online', 'Afinador virtual', 'Partituras', 'Estúdio virtual'],
    icon: Music,
    difficulty: 'Médio',
    color: 'bg-indigo-600'
  },
  {
    id: 'ecommerce-garden',
    name: 'Garden Center Online',
    description: 'E-commerce de plantas com guia de cuidados',
    category: 'ecommerce',
    features: ['Guia cuidados', 'Identificador plantas', 'Calendário rega', 'Paisagismo'],
    icon: Home,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'ecommerce-baby',
    name: 'Loja Baby',
    description: 'E-commerce especializado em produtos para bebês',
    category: 'ecommerce',
    features: ['Por idade bebê', 'Lista nascimento', 'Pediatra online', 'Crescimento tracker'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-blue-300'
  },
  {
    id: 'ecommerce-tools',
    name: 'Loja de Ferramentas',
    description: 'E-commerce de ferramentas com tutoriais DIY',
    category: 'ecommerce',
    features: ['Tutoriais DIY', 'Projetos', 'Calculadora materiais', 'Aluguel ferramentas'],
    icon: Wrench,
    difficulty: 'Médio',
    color: 'bg-gray-700'
  },
  {
    id: 'ecommerce-pharmacy',
    name: 'Farmácia Online',
    description: 'E-commerce farmacêutico com receita digital',
    category: 'ecommerce',
    features: ['Receita digital', 'Medicamentos controlados', 'Consulta farmacêutico', 'Lembretes medicação'],
    icon: Heart,
    difficulty: 'Avançado',
    color: 'bg-red-500'
  },
  {
    id: 'ecommerce-art',
    name: 'Galeria de Arte Online',
    description: 'Marketplace de arte com artistas independentes',
    category: 'ecommerce',
    features: ['Galeria virtual', 'Perfil artista', 'Obras exclusivas', 'Investimento arte'],
    icon: Palette,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'ecommerce-games',
    name: 'Loja de Games',
    description: 'E-commerce de jogos digitais com reviews',
    category: 'ecommerce',
    features: ['Games digitais', 'Reviews', 'Streaming', 'Torneios'],
    icon: Gamepad2,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'ecommerce-tickets',
    name: 'Venda de Ingressos',
    description: 'Plataforma de venda de ingressos para eventos',
    category: 'ecommerce',
    features: ['Ingressos digitais', 'Mapa assentos', 'Check-in QR', 'Revenda segura'],
    icon: Gift,
    difficulty: 'Médio',
    color: 'bg-yellow-600'
  },
  {
    id: 'ecommerce-jewelry',
    name: 'Joalheria Online',
    description: 'E-commerce de joias com visualização 3D',
    category: 'ecommerce',
    features: ['Visualização 3D', 'Personalização joias', 'Certificados', 'Avaliação online'],
    icon: Star,
    difficulty: 'Avançado',
    color: 'bg-yellow-400'
  },
  {
    id: 'ecommerce-coffee',
    name: 'Coffee Shop Online',
    description: 'E-commerce de café especial com assinatura',
    category: 'ecommerce',
    features: ['Assinatura café', 'Perfil paladar', 'Torra personalizada', 'Curso barista'],
    icon: Coffee,
    difficulty: 'Médio',
    color: 'bg-brown-600'
  },
  {
    id: 'ecommerce-shoes',
    name: 'Loja de Calçados',
    description: 'E-commerce de calçados com medidor de pé',
    category: 'ecommerce',
    features: ['Medidor pé virtual', 'Guia numeração', 'Teste caminhada', 'Personalização'],
    icon: Scissors,
    difficulty: 'Médio',
    color: 'bg-black'
  },
  {
    id: 'ecommerce-office',
    name: 'Loja de Escritório',
    description: 'E-commerce de produtos para escritório e coworking',
    category: 'ecommerce',
    features: ['Layout escritório', 'Ergonomia', 'Produtividade', 'Sustentabilidade'],
    icon: Briefcase,
    difficulty: 'Médio',
    color: 'bg-blue-800'
  },
  {
    id: 'ecommerce-party',
    name: 'Loja de Festas',
    description: 'E-commerce para artigos de festa e decoração',
    category: 'ecommerce',
    features: ['Temas festa', 'Calculadora quantidades', 'Decoração AR', 'Checklist festa'],
    icon: Gift,
    difficulty: 'Médio',
    color: 'bg-pink-600'
  },
  {
    id: 'ecommerce-camping',
    name: 'Loja de Camping',
    description: 'E-commerce de equipamentos para camping e trilha',
    category: 'ecommerce',
    features: ['Guia trilhas', 'Clima tempo real', 'Checklist viagem', 'Grupos aventura'],
    icon: Home,
    difficulty: 'Médio',
    color: 'bg-green-700'
  },
  {
    id: 'ecommerce-vintage',
    name: 'Loja Vintage',
    description: 'Marketplace de produtos vintage e antiguidades',
    category: 'ecommerce',
    features: ['Autenticidade', 'História item', 'Colecionadores', 'Avaliação especialista'],
    icon: Clock,
    difficulty: 'Médio',
    color: 'bg-yellow-700'
  },
  {
    id: 'ecommerce-local',
    name: 'E-commerce Local',
    description: 'Plataforma para comércio local com entrega rápida',
    category: 'ecommerce',
    features: ['Entrega 1h', 'Lojas locais', 'Mapa lojas', 'Apoio local'],
    icon: MapPin,
    difficulty: 'Médio',
    color: 'bg-red-600'
  },
  {
    id: 'ecommerce-subscription-box',
    name: 'Subscription Box',
    description: 'Caixas surpresa por assinatura personalizadas',
    category: 'ecommerce',
    features: ['Caixas surpresa', 'Personalização', 'Unboxing experience', 'Comunidade'],
    icon: Package,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'ecommerce-wholesale',
    name: 'E-commerce Atacado',
    description: 'Plataforma B2B para vendas no atacado',
    category: 'ecommerce',
    features: ['Preços atacado', 'Pedido mínimo', 'Crédito empresarial', 'Representantes'],
    icon: Building,
    difficulty: 'Avançado',
    color: 'bg-blue-700'
  },
  {
    id: 'ecommerce-luxury',
    name: 'E-commerce Luxo',
    description: 'Plataforma premium para produtos de luxo',
    category: 'ecommerce',
    features: ['Produtos exclusivos', 'Personal shopper', 'Entrega VIP', 'Autenticação'],
    icon: Star,
    difficulty: 'Avançado',
    color: 'bg-yellow-600'
  },
  {
    id: 'ecommerce-refurbished',
    name: 'Loja de Seminovos',
    description: 'E-commerce especializado em produtos recondicionados',
    category: 'ecommerce',
    features: ['Certificação qualidade', 'Garantia estendida', 'Histórico produto', 'Sustentabilidade'],
    icon: Shield,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'ecommerce-crowdfunding',
    name: 'E-commerce Crowdfunding',
    description: 'Plataforma de pré-venda com financiamento coletivo',
    category: 'ecommerce',
    features: ['Campanhas financiamento', 'Metas', 'Updates backers', 'Recompensas'],
    icon: Target,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'ecommerce-nft',
    name: 'Marketplace NFT',
    description: 'Plataforma para compra e venda de NFTs',
    category: 'ecommerce',
    features: ['Blockchain integration', 'Wallet connect', 'Royalties', 'Collections'],
    icon: Code,
    difficulty: 'Avançado',
    color: 'bg-purple-800'
  },
  {
    id: 'ecommerce-services',
    name: 'Marketplace de Serviços',
    description: 'Plataforma para contratação de serviços profissionais',
    category: 'ecommerce',
    features: ['Freelancers', 'Propostas', 'Portfolio', 'Pagamento escrow'],
    icon: Briefcase,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'ecommerce-crypto',
    name: 'Loja com Crypto',
    description: 'E-commerce que aceita criptomoedas como pagamento',
    category: 'ecommerce',
    features: ['Bitcoin/Ethereum', 'Wallet integration', 'Conversão automática', 'DeFi'],
    icon: DollarSign,
    difficulty: 'Avançado',
    color: 'bg-orange-600'
  },
  {
    id: 'ecommerce-white-label',
    name: 'E-commerce White Label',
    description: 'Plataforma SaaS para criar lojas white label',
    category: 'ecommerce',
    features: ['Multi-tenant', 'Customização marca', 'Domínio próprio', 'Templates'],
    icon: Store,
    difficulty: 'Avançado',
    color: 'bg-gray-700'
  },
  {
    id: 'ecommerce-international',
    name: 'E-commerce Global',
    description: 'Loja internacional com múltiplas moedas e idiomas',
    category: 'ecommerce',
    features: ['Multi-moeda', 'Multi-idioma', 'Impostos globais', 'Frete internacional'],
    icon: Globe,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'ecommerce-social-commerce',
    name: 'Social Commerce',
    description: 'E-commerce integrado com redes sociais',
    category: 'ecommerce',
    features: ['Instagram shop', 'Facebook shop', 'Live shopping', 'Influencers'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-pink-600'
  },
  {
    id: 'ecommerce-voice',
    name: 'Voice Commerce',
    description: 'E-commerce com compras por comando de voz',
    category: 'ecommerce',
    features: ['Alexa integration', 'Google Assistant', 'Voice search', 'Audio feedback'],
    icon: Headphones,
    difficulty: 'Avançado',
    color: 'bg-blue-700'
  },
  {
    id: 'ecommerce-ar-vr',
    name: 'E-commerce AR/VR',
    description: 'Loja com realidade aumentada e virtual',
    category: 'ecommerce',
    features: ['AR try-on', 'VR showroom', '3D products', 'Virtual assistant'],
    icon: Camera,
    difficulty: 'Avançado',
    color: 'bg-purple-700'
  },
  {
    id: 'ecommerce-membership',
    name: 'E-commerce Membership',
    description: 'Loja exclusiva para membros com benefícios',
    category: 'ecommerce',
    features: ['Membership tiers', 'Descontos exclusivos', 'Early access', 'Pontos fidelidade'],
    icon: Award,
    difficulty: 'Médio',
    color: 'bg-gold-600'
  },
  {
    id: 'ecommerce-flash-sales',
    name: 'Flash Sales Platform',
    description: 'Plataforma de vendas relâmpago com countdown',
    category: 'ecommerce',
    features: ['Flash sales', 'Countdown timer', 'Stock limitado', 'Notificações urgentes'],
    icon: Clock,
    difficulty: 'Médio',
    color: 'bg-red-600'
  },
  {
    id: 'ecommerce-bundle',
    name: 'Bundle Commerce',
    description: 'E-commerce especializado em pacotes e bundles',
    category: 'ecommerce',
    features: ['Product bundles', 'Desconto progressivo', 'Mix and match', 'Bundle builder'],
    icon: Package,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'ecommerce-print-demand',
    name: 'Print on Demand',
    description: 'Loja de produtos personalizados sob demanda',
    category: 'ecommerce',
    features: ['Design personalizado', 'Print on demand', 'Mockups automáticos', 'Artwork upload'],
    icon: Palette,
    difficulty: 'Médio',
    color: 'bg-pink-600'
  },

  // Social Templates (40 templates)
  {
    id: 'social-network',
    name: 'Rede Social Completa',
    description: 'Plataforma social com feed, stories e mensagens',
    category: 'social',
    features: ['Feed personalizado', 'Stories', 'Mensagens', 'Grupos'],
    icon: Users,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'social-dating',
    name: 'App de Relacionamento',
    description: 'Plataforma de encontros com matching inteligente',
    category: 'social',
    features: ['Swipe matching', 'Chat seguro', 'Verificação perfil', 'Eventos'],
    icon: Heart,
    difficulty: 'Avançado',
    color: 'bg-pink-600'
  },
  {
    id: 'social-professional',
    name: 'Rede Profissional',
    description: 'LinkedIn para nichos específicos de profissionais',
    category: 'social',
    features: ['Networking', 'Vagas', 'Mentoria', 'Eventos networking'],
    icon: Briefcase,
    difficulty: 'Avançado',
    color: 'bg-blue-700'
  },
  {
    id: 'social-community',
    name: 'Plataforma de Comunidade',
    description: 'Forum moderno com gamificação e reputação',
    category: 'social',
    features: ['Forums', 'Gamificação', 'Reputação', 'Badges'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'social-local',
    name: 'Rede Social Local',
    description: 'Conecte pessoas da mesma região ou bairro',
    category: 'social',
    features: ['Geolocalização', 'Eventos locais', 'Vizinhança', 'Marketplace local'],
    icon: MapPin,
    difficulty: 'Médio',
    color: 'bg-red-600'
  },
  {
    id: 'social-hobby',
    name: 'Rede de Hobbies',
    description: 'Conecte pessoas com os mesmos interesses e hobbies',
    category: 'social',
    features: ['Grupos interesse', 'Encontros', 'Projetos colaborativos', 'Marketplace hobby'],
    icon: Star,
    difficulty: 'Médio',
    color: 'bg-yellow-600'
  },
  {
    id: 'social-family',
    name: 'Rede Familiar',
    description: 'Plataforma privada para famílias compartilharem momentos',
    category: 'social',
    features: ['Álbuns família', 'Calendário familiar', 'Messaging privado', 'Árvore genealógica'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-pink-500'
  },
  {
    id: 'social-creator',
    name: 'Plataforma de Criadores',
    description: 'Rede social para criadores de conteúdo monetizarem',
    category: 'social',
    features: ['Monetização conteúdo', 'Assinaturas', 'Lives', 'Analytics criador'],
    icon: Camera,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'social-seniors',
    name: 'Rede Social Melhor Idade',
    description: 'Rede social especialmente desenhada para idosos',
    category: 'social',
    features: ['Interface simples', 'Grupos idade', 'Atividades locais', 'Suporte família'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'social-students',
    name: 'Rede Social Estudantil',
    description: 'Plataforma para estudantes colaborarem e estudarem',
    category: 'social',
    features: ['Grupos estudo', 'Compartilhar notas', 'Eventos campus', 'Mentoria'],
    icon: GraduationCap,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'social-travel',
    name: 'Rede Social de Viagem',
    description: 'Conecte viajantes e compartilhe experiências',
    category: 'social',
    features: ['Diários viagem', 'Dicas locais', 'Companheiros viagem', 'Roteiros compartilhados'],
    icon: Plane,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'social-parenting',
    name: 'Rede de Pais',
    description: 'Plataforma para pais compartilharem experiências',
    category: 'social',
    features: ['Grupos por idade filho', 'Dicas parentais', 'Playdates', 'Especialistas'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-pink-600'
  },
  {
    id: 'social-pet-lovers',
    name: 'Rede Social Pet',
    description: 'Rede social para donos de pets e seus animais',
    category: 'social',
    features: ['Perfis pets', 'Encontros pets', 'Veterinário online', 'Adoção responsável'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-orange-500'
  },
  {
    id: 'social-gaming',
    name: 'Rede Social Gaming',
    description: 'Plataforma para gamers se conectarem e jogarem',
    category: 'social',
    features: ['Perfis gamer', 'Teams', 'Torneios', 'Streaming integration'],
    icon: Gamepad2,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'social-music',
    name: 'Rede Social Musical',
    description: 'Conecte músicos, bandas e fãs de música',
    category: 'social',
    features: ['Colaborações musicais', 'Upload músicas', 'Eventos musicais', 'Descoberta artistas'],
    icon: Music,
    difficulty: 'Médio',
    color: 'bg-indigo-600'
  },
  {
    id: 'social-fitness',
    name: 'Rede Social Fitness',
    description: 'Comunidade fitness para motivação e acompanhamento',
    category: 'social',
    features: ['Tracking workouts', 'Desafios fitness', 'Personal trainers', 'Progresso compartilhado'],
    icon: Dumbbell,
    difficulty: 'Médio',
    color: 'bg-orange-600'
  },
  {
    id: 'social-food',
    name: 'Rede Social Gastronômica',
    description: 'Compartilhe receitas e experiências culinárias',
    category: 'social',
    features: ['Receitas compartilhadas', 'Reviews restaurantes', 'Grupos culinários', 'Chefs amadores'],
    icon: ChefHat,
    difficulty: 'Médio',
    color: 'bg-red-600'
  },
  {
    id: 'social-book-club',
    name: 'Clube do Livro Social',
    description: 'Rede social para amantes de livros e leitura',
    category: 'social',
    features: ['Reviews livros', 'Clubes leitura', 'Desafios leitura', 'Autores indies'],
    icon: Book,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'social-artists',
    name: 'Rede de Artistas',
    description: 'Plataforma para artistas exporem e venderem arte',
    category: 'social',
    features: ['Portfolio artista', 'Colaborações', 'Exposições virtuais', 'Marketplace arte'],
    icon: Palette,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'social-entrepreneurs',
    name: 'Rede de Empreendedores',
    description: 'Conecte empreendedores para networking e mentorias',
    category: 'social',
    features: ['Pitch decks', 'Investidores', 'Mentoria', 'Eventos startup'],
    icon: Briefcase,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'social-anonymous',
    name: 'Rede Social Anônima',
    description: 'Plataforma para compartilhamento anônimo seguro',
    category: 'social',
    features: ['Anonimato garantido', 'Grupos apoio', 'Moderação IA', 'Temas sensíveis'],
    icon: Shield,
    difficulty: 'Avançado',
    color: 'bg-gray-600'
  },
  {
    id: 'social-neighborhood',
    name: 'Rede da Vizinhança',
    description: 'Conecte vizinhos para criar comunidades locais',
    category: 'social',
    features: ['Vizinhos próximos', 'Segurança bairro', 'Eventos locais', 'Marketplace vizinhança'],
    icon: Home,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'social-volunteer',
    name: 'Rede de Voluntários',
    description: 'Conecte voluntários com causas e ONGs',
    category: 'social',
    features: ['Oportunidades voluntariado', 'ONGs verificadas', 'Tracking horas', 'Impact measurement'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-red-500'
  },
  {
    id: 'social-eco-warriors',
    name: 'Rede Eco Warriors',
    description: 'Comunidade focada em sustentabilidade e meio ambiente',
    category: 'social',
    features: ['Ações ambientais', 'Carbon footprint', 'Eco challenges', 'Green tips'],
    icon: Home,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'social-language-exchange',
    name: 'Intercâmbio de Idiomas',
    description: 'Conecte pessoas para praticar idiomas',
    category: 'social',
    features: ['Language partners', 'Video calls', 'Exercises', 'Cultural exchange'],
    icon: Globe,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'social-spiritual',
    name: 'Rede Espiritual',
    description: 'Comunidade para práticas espirituais e bem-estar',
    category: 'social',
    features: ['Meditação grupos', 'Práticas espirituais', 'Workshops', 'Mentores espirituais'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-purple-500'
  },
  {
    id: 'social-makers',
    name: 'Rede de Makers',
    description: 'Comunidade para makers, DIY e projetos',
    category: 'social',
    features: ['Projetos DIY', 'Tutoriais', 'Compartilhar ferramentas', 'Workshops'],
    icon: Wrench,
    difficulty: 'Médio',
    color: 'bg-orange-600'
  },
  {
    id: 'social-remote-workers',
    name: 'Rede Remote Workers',
    description: 'Comunidade para trabalhadores remotos',
    category: 'social',
    features: ['Coworking virtual', 'Produtividade tips', 'Networking remoto', 'Workspaces'],
    icon: Laptop,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'social-mental-health',
    name: 'Rede Saúde Mental',
    description: 'Comunidade de apoio para saúde mental',
    category: 'social',
    features: ['Grupos apoio', 'Profissionais', 'Recursos', 'Check-ins diários'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-green-500'
  },
  {
    id: 'social-seniors-dating',
    name: 'Dating 50+',
    description: 'App de relacionamento para pessoas maduras',
    category: 'social',
    features: ['Matching maduro', 'Eventos locais', 'Segurança extra', 'Verificação rigorosa'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-pink-500'
  },
  {
    id: 'social-disability',
    name: 'Rede Inclusiva PCD',
    description: 'Rede social acessível para pessoas com deficiência',
    category: 'social',
    features: ['Acessibilidade total', 'Recursos adaptativos', 'Comunidade PCD', 'Advocacy'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'social-crypto-community',
    name: 'Crypto Community',
    description: 'Rede social para entusiastas de criptomoedas',
    category: 'social',
    features: ['Portfolio tracking', 'News crypto', 'Trading signals', 'DeFi integration'],
    icon: DollarSign,
    difficulty: 'Avançado',
    color: 'bg-orange-600'
  },
  {
    id: 'social-content-creators',
    name: 'Hub Criadores Conteúdo',
    description: 'Plataforma all-in-one para criadores de conteúdo',
    category: 'social',
    features: ['Multi-platform posting', 'Analytics unified', 'Collaboration tools', 'Monetization'],
    icon: Camera,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'social-alumni-network',
    name: 'Rede de Ex-Alunos',
    description: 'Conecte ex-alunos de escolas e universidades',
    category: 'social',
    features: ['Networking alumni', 'Eventos reencontro', 'Mentoria carreira', 'Job board'],
    icon: GraduationCap,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'social-niche-communities',
    name: 'Comunidades de Nicho',
    description: 'Plataforma para criar comunidades super específicas',
    category: 'social',
    features: ['Micro-communities', 'Expert moderation', 'Specialized tools', 'Monetization options'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'social-influencer-marketplace',
    name: 'Marketplace de Influencers',
    description: 'Conecte marcas com influenciadores digitais',
    category: 'social',
    features: ['Portfolio influencers', 'Campanhas', 'Analytics performance', 'Pagamentos automáticos'],
    icon: Camera,
    difficulty: 'Médio',
    color: 'bg-pink-600'
  },
  {
    id: 'social-live-streaming',
    name: 'Plataforma Live Streaming',
    description: 'Rede social focada em transmissões ao vivo',
    category: 'social',
    features: ['Live streaming', 'Monetização lives', 'Chat interativo', 'Gifts virtuais'],
    icon: Camera,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'social-forum-q-a',
    name: 'Forum Q&A Especializado',
    description: 'Plataforma de perguntas e respostas por tópicos',
    category: 'social',
    features: ['Sistema reputação', 'Moderação especializada', 'Badges expertise', 'Votação respostas'],
    icon: MessageSquare,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'social-event-networking',
    name: 'Rede de Eventos',
    description: 'Plataforma para networking em eventos',
    category: 'social',
    features: ['Check-in eventos', 'Networking match', 'Business cards digitais', 'Follow-up automático'],
    icon: Calendar,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'social-podcast-community',
    name: 'Comunidade de Podcasts',
    description: 'Rede social para podcasters e ouvintes',
    category: 'social',
    features: ['Podcast discovery', 'Comunidades episódios', 'Colaborações', 'Monetização'],
    icon: Headphones,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },

  // Business Templates (60 templates)  
  {
    id: 'business-crm-complete',
    name: 'CRM Completo',
    description: 'Sistema de CRM com pipeline de vendas e automação',
    category: 'business',
    features: ['Pipeline vendas', 'Automação marketing', 'Relatórios', 'Integração email'],
    icon: Users,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'business-erp-system',
    name: 'Sistema ERP',
    description: 'ERP completo para gestão empresarial integrada',
    category: 'business',
    features: ['Financeiro', 'Estoque', 'RH', 'Vendas', 'Compras'],
    icon: Building,
    difficulty: 'Avançado',
    color: 'bg-gray-700'
  },
  {
    id: 'business-project-management',
    name: 'Gestão de Projetos',
    description: 'Plataforma completa para gerenciamento de projetos',
    category: 'business',
    features: ['Kanban', 'Gantt', 'Time tracking', 'Relatórios', 'Colaboração'],
    icon: Briefcase,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'business-inventory-management',
    name: 'Gestão de Estoque',
    description: 'Sistema avançado de controle de estoque',
    category: 'business',
    features: ['Código barras', 'Alertas', 'Múltiplos depósitos', 'Relatórios giro'],
    icon: Package,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'business-accounting-system',
    name: 'Sistema Contábil',
    description: 'Software de contabilidade com DRE e balanços',
    category: 'business',
    features: ['Plano contas', 'DRE', 'Balanço', 'Impostos', 'Conciliação'],
    icon: Calculator,
    difficulty: 'Avançado',
    color: 'bg-green-600'
  },
  {
    id: 'business-hr-management',
    name: 'Sistema de RH',
    description: 'Gestão completa de recursos humanos',
    category: 'business',
    features: ['Folha pagamento', 'Recrutamento', 'Avaliação performance', 'Benefícios'],
    icon: Users,
    difficulty: 'Avançado',
    color: 'bg-blue-700'
  },
  {
    id: 'business-helpdesk',
    name: 'Sistema de Helpdesk',
    description: 'Plataforma de suporte ao cliente com tickets',
    category: 'business',
    features: ['Tickets', 'Base conhecimento', 'Chat ao vivo', 'SLA tracking'],
    icon: MessageSquare,
    difficulty: 'Médio',
    color: 'bg-orange-600'
  },
  {
    id: 'business-document-management',
    name: 'Gestão Documental',
    description: 'Sistema para organizar e controlar documentos',
    category: 'business',
    features: ['Upload documentos', 'Versionamento', 'Controle acesso', 'Assinatura digital'],
    icon: FileText,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'business-workflow-automation',
    name: 'Automação de Processos',
    description: 'Plataforma para automatizar workflows empresariais',
    category: 'business',
    features: ['Designer workflow', 'Aprovações', 'Integrações', 'Relatórios processo'],
    icon: Zap,
    difficulty: 'Avançado',
    color: 'bg-yellow-600'
  },
  {
    id: 'business-invoice-system',
    name: 'Sistema de Faturamento',
    description: 'Geração e controle de notas fiscais e faturas',
    category: 'business',
    features: ['NFe automática', 'Recorrência', 'Cobrança', 'Relatórios fiscais'],
    icon: FileText,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'business-asset-management',
    name: 'Gestão de Ativos',
    description: 'Controle de patrimônio e ativos da empresa',
    category: 'business',
    features: ['Cadastro ativos', 'Depreciação', 'Manutenção', 'Localização'],
    icon: Building,
    difficulty: 'Médio',
    color: 'bg-gray-600'
  },
  {
    id: 'business-supplier-management',
    name: 'Gestão de Fornecedores',
    description: 'Sistema para gerenciar relacionamento com fornecedores',
    category: 'business',
    features: ['Cadastro fornecedores', 'Avaliação performance', 'Cotações', 'Contratos'],
    icon: Truck,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'business-quality-management',
    name: 'Gestão da Qualidade',
    description: 'Sistema ISO para controle de qualidade',
    category: 'business',
    features: ['Não conformidades', 'Auditorias', 'Documentos ISO', 'KPIs qualidade'],
    icon: Award,
    difficulty: 'Avançado',
    color: 'bg-green-700'
  },
  {
    id: 'business-time-tracking',
    name: 'Controle de Ponto',
    description: 'Sistema de controle de ponto e presença',
    category: 'business',
    features: ['Ponto eletrônico', 'Relatórios presença', 'Banco horas', 'Integração folha'],
    icon: Clock,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'business-fleet-management',
    name: 'Gestão de Frota',
    description: 'Controle completo de frota de veículos',
    category: 'business',
    features: ['Tracking GPS', 'Manutenção', 'Combustível', 'Motoristas'],
    icon: Car,
    difficulty: 'Médio',
    color: 'bg-red-600'
  },
  {
    id: 'business-meeting-scheduler',
    name: 'Agendamento de Reuniões',
    description: 'Sistema para agendar e gerenciar reuniões',
    category: 'business',
    features: ['Calendário compartilhado', 'Salas', 'Convites', 'Atas reunião'],
    icon: Calendar,
    difficulty: 'Fácil',
    color: 'bg-blue-600'
  },
  {
    id: 'business-expense-management',
    name: 'Gestão de Despesas',
    description: 'Controle de despesas e reembolsos',
    category: 'business',
    features: ['Upload recibos', 'Aprovações', 'Categorias', 'Relatórios despesas'],
    icon: DollarSign,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'business-contract-management',
    name: 'Gestão de Contratos',
    description: 'Sistema para gerenciar contratos empresariais',
    category: 'business',
    features: ['Versionamento', 'Renovações', 'Alertas vencimento', 'Assinatura digital'],
    icon: FileCheck,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'business-knowledge-base',
    name: 'Base de Conhecimento',
    description: 'Sistema interno de documentação e conhecimento',
    category: 'business',
    features: ['Wiki empresarial', 'Busca avançada', 'Versionamento', 'Colaboração'],
    icon: Book,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'business-performance-dashboard',
    name: 'Dashboard Executivo',
    description: 'Painel executivo com KPIs e métricas',
    category: 'business',
    features: ['KPIs em tempo real', 'Gráficos interativos', 'Alertas', 'Drill-down'],
    icon: BarChart3,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'business-customer-portal',
    name: 'Portal do Cliente',
    description: 'Portal self-service para clientes',
    category: 'business',
    features: ['Login cliente', 'Pedidos', 'Suporte', 'Documentos'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'business-vendor-portal',
    name: 'Portal do Fornecedor',
    description: 'Portal para fornecedores acessarem informações',
    category: 'business',
    features: ['Pedidos', 'Pagamentos', 'Documentos', 'Performance'],
    icon: Truck,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'business-compliance-system',
    name: 'Sistema de Compliance',
    description: 'Gestão de compliance e conformidade',
    category: 'business',
    features: ['Regulamentações', 'Auditorias', 'Riscos', 'Treinamentos'],
    icon: Shield,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'business-budget-planning',
    name: 'Planejamento Orçamentário',
    description: 'Sistema para planejamento e controle orçamentário',
    category: 'business',
    features: ['Orçamento anual', 'Previsões', 'Variações', 'Cenários'],
    icon: PiggyBank,
    difficulty: 'Avançado',
    color: 'bg-green-600'
  },
  {
    id: 'business-sales-force',
    name: 'Força de Vendas',
    description: 'Sistema para equipes de vendas externas',
    category: 'business',
    features: ['CRM móvel', 'Check-in', 'Pedidos', 'Comissões'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'business-maintenance-system',
    name: 'Gestão de Manutenção',
    description: 'Sistema para manutenção preventiva e corretiva',
    category: 'business',
    features: ['Ordens serviço', 'Preventiva', 'Peças', 'Histórico equipamentos'],
    icon: Wrench,
    difficulty: 'Médio',
    color: 'bg-orange-600'
  },
  {
    id: 'business-audit-system',
    name: 'Sistema de Auditoria',
    description: 'Plataforma para auditorias internas e externas',
    category: 'business',
    features: ['Planos auditoria', 'Checklists', 'Não conformidades', 'Relatórios'],
    icon: Search,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'business-training-platform',
    name: 'Plataforma de Treinamento',
    description: 'Sistema de treinamento corporativo',
    category: 'business',
    features: ['Cursos', 'Certificações', 'Avaliações', 'Trilhas aprendizado'],
    icon: GraduationCap,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'business-security-system',
    name: 'Sistema de Segurança',
    description: 'Gestão de segurança e controle de acesso',
    category: 'business',
    features: ['Controle acesso', 'Câmeras', 'Incidentes', 'Visitantes'],
    icon: Shield,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'business-insurance-management',
    name: 'Gestão de Seguros',
    description: 'Sistema para gerenciar apólices de seguro',
    category: 'business',
    features: ['Apólices', 'Sinistros', 'Renovações', 'Corretores'],
    icon: Shield,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'business-location-management',
    name: 'Gestão de Localizações',
    description: 'Sistema para múltiplas filiais e localizações',
    category: 'business',
    features: ['Multi-filial', 'Estoque local', 'Relatórios local', 'Transferências'],
    icon: MapPin,
    difficulty: 'Avançado',
    color: 'bg-green-600'
  },
  {
    id: 'business-warehouse-management',
    name: 'Gestão de Armazém',
    description: 'WMS completo para gestão de armazém',
    category: 'business',
    features: ['Endereçamento', 'Picking', 'Expedição', 'Inventário'],
    icon: Package,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'business-production-planning',
    name: 'Planejamento Produção',
    description: 'Sistema PCP para planejamento e controle da produção',
    category: 'business',
    features: ['Ordens produção', 'Capacidade', 'Materiais', 'Sequenciamento'],
    icon: Settings,
    difficulty: 'Avançado',
    color: 'bg-orange-600'
  },
  {
    id: 'business-customer-feedback',
    name: 'Feedback do Cliente',
    description: 'Sistema para coletar e analisar feedback',
    category: 'business',
    features: ['Pesquisas', 'NPS', 'Reviews', 'Analytics feedback'],
    icon: MessageSquare,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'business-franchise-management',
    name: 'Gestão de Franquias',
    description: 'Sistema para gerenciar rede de franquias',
    category: 'business',
    features: ['Franqueados', 'Royalties', 'Padrões', 'Suporte'],
    icon: Building,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'business-environmental-management',
    name: 'Gestão Ambiental',
    description: 'Sistema para gestão ambiental e sustentabilidade',
    category: 'business',
    features: ['Licenças ambientais', 'Resíduos', 'Emissões', 'Relatórios sustentabilidade'],
    icon: Home,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'business-board-management',
    name: 'Gestão de Conselho',
    description: 'Sistema para gestão de conselhos administrativos',
    category: 'business',
    features: ['Reuniões conselho', 'Documentos', 'Votações', 'Atas'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'business-subscription-management',
    name: 'Gestão de Assinaturas',
    description: 'Sistema para empresas de modelo de assinatura',
    category: 'business',
    features: ['Billing recorrente', 'Churn analysis', 'Upgrades', 'Customer success'],
    icon: CreditCard,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'business-digital-transformation',
    name: 'Transformação Digital',
    description: 'Plataforma para jornada de transformação digital',
    category: 'business',
    features: ['Roadmap digital', 'KPIs transformação', 'Projetos', 'Change management'],
    icon: Zap,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'business-innovation-management',
    name: 'Gestão de Inovação',
    description: 'Sistema para gerenciar inovação corporativa',
    category: 'business',
    features: ['Ideias', 'Projetos inovação', 'Avaliação', 'Portfolio inovação'],
    icon: Zap,
    difficulty: 'Médio',
    color: 'bg-yellow-600'
  },
  {
    id: 'business-crisis-management',
    name: 'Gestão de Crises',
    description: 'Sistema para gestão de crises empresariais',
    category: 'business',
    features: ['Planos contingência', 'Comunicação crise', 'Escalation', 'Recovery'],
    icon: Shield,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'business-partnership-management',
    name: 'Gestão de Parcerias',
    description: 'Sistema para gerenciar parcerias estratégicas',
    category: 'business',
    features: ['Parceiros', 'Acordos', 'Performance', 'Joint ventures'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'business-competitive-intelligence',
    name: 'Inteligência Competitiva',
    description: 'Sistema para monitorar concorrência e mercado',
    category: 'business',
    features: ['Monitoramento concorrentes', 'Análise mercado', 'Alertas', 'Benchmarking'],
    icon: Search,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'business-lean-manufacturing',
    name: 'Lean Manufacturing',
    description: 'Sistema para implementar metodologias Lean',
    category: 'business',
    features: ['5S', 'Kaizen', 'Value stream', 'Waste reduction'],
    icon: Settings,
    difficulty: 'Avançado',
    color: 'bg-orange-600'
  },
  {
    id: 'business-change-management',
    name: 'Gestão de Mudanças',
    description: 'Sistema para gerenciar mudanças organizacionais',
    category: 'business',
    features: ['Projetos mudança', 'Resistência', 'Comunicação', 'Training'],
    icon: Zap,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'business-knowledge-transfer',
    name: 'Transferência Conhecimento',
    description: 'Sistema para capturar e transferir conhecimento',
    category: 'business',
    features: ['Conhecimento tácito', 'Mentoria', 'Best practices', 'Lessons learned'],
    icon: Book,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'business-succession-planning',
    name: 'Planejamento Sucessório',
    description: 'Sistema para planejamento de sucessão',
    category: 'business',
    features: ['Sucessores', 'Planos desenvolvimento', 'Avaliação', 'Preparação'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'business-merger-acquisition',
    name: 'Fusões e Aquisições',
    description: 'Sistema para processos de M&A',
    category: 'business',
    features: ['Due diligence', 'Integração', 'Synergies', 'PMO'],
    icon: Building,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'business-corporate-governance',
    name: 'Governança Corporativa',
    description: 'Sistema para governança empresarial',
    category: 'business',
    features: ['Políticas', 'Comitês', 'Relatórios governança', 'Transparência'],
    icon: Shield,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'business-stakeholder-management',
    name: 'Gestão de Stakeholders',
    description: 'Sistema para gerenciar relacionamento com stakeholders',
    category: 'business',
    features: ['Mapeamento stakeholders', 'Engajamento', 'Comunicação', 'Feedback'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'business-business-intelligence',
    name: 'Business Intelligence',
    description: 'Plataforma completa de BI e analytics',
    category: 'business',
    features: ['Data warehouse', 'ETL', 'Dashboards', 'Self-service BI'],
    icon: BarChart3,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'business-data-governance',
    name: 'Governança de Dados',
    description: 'Sistema para governança e qualidade de dados',
    category: 'business',
    features: ['Data quality', 'Metadados', 'Lineage', 'Data catalog'],
    icon: Database,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'business-api-management',
    name: 'Gestão de APIs',
    description: 'Plataforma para gerenciar APIs empresariais',
    category: 'business',
    features: ['API gateway', 'Documentação', 'Monetização', 'Analytics APIs'],
    icon: Code,
    difficulty: 'Avançado',
    color: 'bg-green-600'
  },
  {
    id: 'business-low-code-platform',
    name: 'Plataforma Low-Code',
    description: 'Plataforma para desenvolvimento low-code/no-code',
    category: 'business',
    features: ['Visual designer', 'Templates', 'Integrations', 'Deployment'],
    icon: Code,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'business-robotic-process',
    name: 'RPA - Automação Robótica',
    description: 'Sistema para automação de processos com bots',
    category: 'business',
    features: ['Bot designer', 'Process mining', 'Scheduling', 'Monitoring'],
    icon: Bot,
    difficulty: 'Avançado',
    color: 'bg-orange-600'
  },
  {
    id: 'business-cloud-management',
    name: 'Gestão de Cloud',
    description: 'Sistema para gerenciar recursos cloud',
    category: 'business',
    features: ['Multi-cloud', 'Cost optimization', 'Security', 'Governance'],
    icon: Cloud,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'business-devops-platform',
    name: 'Plataforma DevOps',
    description: 'Sistema completo para práticas DevOps',
    category: 'business',
    features: ['CI/CD', 'Infrastructure as code', 'Monitoring', 'Collaboration'],
    icon: Code,
    difficulty: 'Avançado',
    color: 'bg-green-600'
  },

  // Health Templates (30 templates)
  {
    id: 'health-clinic-management',
    name: 'Gestão de Clínica',
    description: 'Sistema completo para gestão de clínicas médicas',
    category: 'health',
    features: ['Agendamento', 'Prontuário eletrônico', 'Financeiro', 'Prescrições'],
    icon: Heart,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'health-telemedicine',
    name: 'Telemedicina',
    description: 'Plataforma para consultas médicas online',
    category: 'health',
    features: ['Video consultas', 'Prescrição digital', 'Prontuário online', 'Pagamentos'],
    icon: Monitor,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'health-patient-portal',
    name: 'Portal do Paciente',
    description: 'Portal para pacientes acessarem informações médicas',
    category: 'health',
    features: ['Histórico médico', 'Exames', 'Agendamentos', 'Receitas'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'health-pharmacy-system',
    name: 'Sistema de Farmácia',
    description: 'Gestão completa de farmácias e drogarias',
    category: 'health',
    features: ['Estoque medicamentos', 'Receitas', 'Vendas', 'Controle sanitário'],
    icon: Building,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'health-laboratory-lis',
    name: 'Sistema Laboratorial (LIS)',
    description: 'Sistema de informação laboratorial',
    category: 'health',
    features: ['Coleta exames', 'Resultados', 'Laudos', 'Interface equipamentos'],
    icon: Search,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'health-hospital-management',
    name: 'Gestão Hospitalar',
    description: 'Sistema completo para gestão de hospitais',
    category: 'health',
    features: ['Internações', 'Centro cirúrgico', 'UTI', 'Faturamento TISS'],
    icon: Building,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'health-mental-health',
    name: 'Saúde Mental',
    description: 'Plataforma para acompanhamento de saúde mental',
    category: 'health',
    features: ['Terapia online', 'Mood tracking', 'Exercícios mindfulness', 'Emergências'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-green-500'
  },
  {
    id: 'health-nutrition-tracking',
    name: 'Acompanhamento Nutricional',
    description: 'App para tracking nutricional e dietas',
    category: 'health',
    features: ['Diário alimentar', 'Cálculo calorias', 'Planos nutricionais', 'Metas peso'],
    icon: ChefHat,
    difficulty: 'Médio',
    color: 'bg-orange-600'
  },
  {
    id: 'health-fitness-tracking',
    name: 'Monitoramento Fitness',
    description: 'App para acompanhar atividades físicas',
    category: 'health',
    features: ['Exercícios', 'Tracking atividades', 'Metas fitness', 'Progresso'],
    icon: Dumbbell,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'health-medication-reminder',
    name: 'Lembrete de Medicamentos',
    description: 'App para gerenciar medicamentos e lembretes',
    category: 'health',
    features: ['Alarmes medicação', 'Histórico doses', 'Interações', 'Renovação receitas'],
    icon: Bell,
    difficulty: 'Fácil',
    color: 'bg-purple-600'
  },
  {
    id: 'health-emergency-system',
    name: 'Sistema de Emergência',
    description: 'Plataforma para atendimentos de emergência',
    category: 'health',
    features: ['Triagem', 'Ambulâncias', 'Localização', 'Protocolos emergência'],
    icon: Phone,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'health-dental-practice',
    name: 'Consultório Odontológico',
    description: 'Sistema para gestão de consultórios dentários',
    category: 'health',
    features: ['Odontograma', 'Orçamentos', 'Imagens', 'Planos tratamento'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'health-veterinary-clinic',
    name: 'Clínica Veterinária',
    description: 'Sistema para clínicas veterinárias',
    category: 'health',
    features: ['Prontuário animal', 'Vacinas', 'Cirurgias', 'Tutores'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'health-physiotherapy',
    name: 'Fisioterapia',
    description: 'Sistema para clínicas de fisioterapia',
    category: 'health',
    features: ['Protocolos tratamento', 'Evolução paciente', 'Exercícios', 'Equipamentos'],
    icon: Dumbbell,
    difficulty: 'Médio',
    color: 'bg-orange-600'
  },
  {
    id: 'health-radiology-pacs',
    name: 'Radiologia (PACS)',
    description: 'Sistema de arquivamento e comunicação de imagens',
    category: 'health',
    features: ['DICOM viewer', 'Laudos', 'Worklist', 'Teleradiologia'],
    icon: Camera,
    difficulty: 'Avançado',
    color: 'bg-gray-600'
  },
  {
    id: 'health-home-care',
    name: 'Home Care',
    description: 'Sistema para serviços de atendimento domiciliar',
    category: 'health',
    features: ['Visitas domiciliares', 'Cuidadores', 'Medicações', 'Familiares'],
    icon: Home,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'health-blood-bank',
    name: 'Banco de Sangue',
    description: 'Sistema para gestão de bancos de sangue',
    category: 'health',
    features: ['Doadores', 'Estoque sangue', 'Testes', 'Distribuição'],
    icon: Heart,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'health-rehabilitation',
    name: 'Reabilitação',
    description: 'Sistema para centros de reabilitação',
    category: 'health',
    features: ['Terapias', 'Evolução', 'Equipe multidisciplinar', 'Objetivos'],
    icon: Target,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'health-occupational',
    name: 'Medicina do Trabalho',
    description: 'Sistema para medicina ocupacional',
    category: 'health',
    features: ['Exames ocupacionais', 'ASO', 'Riscos ambientais', 'PCMSO'],
    icon: Briefcase,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'health-aesthetic-clinic',
    name: 'Clínica Estética',
    description: 'Sistema para clínicas de estética',
    category: 'health',
    features: ['Procedimentos estéticos', 'Fotos antes/depois', 'Agendamentos', 'Produtos'],
    icon: Star,
    difficulty: 'Médio',
    color: 'bg-pink-600'
  },
  {
    id: 'health-genetics-lab',
    name: 'Laboratório Genética',
    description: 'Sistema para laboratórios de genética',
    category: 'health',
    features: ['Testes genéticos', 'Genealogia', 'Relatórios', 'Aconselhamento'],
    icon: Code,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'health-maternal',
    name: 'Saúde Materna',
    description: 'Sistema para acompanhamento de gestantes',
    category: 'health',
    features: ['Pré-natal', 'Curva crescimento', 'Exames', 'Calendário vacinal'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-pink-500'
  },
  {
    id: 'health-pediatric',
    name: 'Pediatria',
    description: 'Sistema especializado em pediatria',
    category: 'health',
    features: ['Crescimento infantil', 'Vacinas', 'Marcos desenvolvimento', 'Pais'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'health-geriatric',
    name: 'Geriatria',
    description: 'Sistema para cuidados geriátricos',
    category: 'health',
    features: ['Avaliação geriátrica', 'Medicações', 'Cuidadores', 'Familia'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-purple-500'
  },
  {
    id: 'health-oncology',
    name: 'Oncologia',
    description: 'Sistema para tratamento oncológico',
    category: 'health',
    features: ['Protocolos quimio', 'Ciclos tratamento', 'Evolução', 'Multidisciplinar'],
    icon: Target,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'health-cardiology',
    name: 'Cardiologia',
    description: 'Sistema especializado em cardiologia',
    category: 'health',
    features: ['ECG', 'Holter', 'Risco cardiovascular', 'Procedimentos'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-red-500'
  },
  {
    id: 'health-dermatology',
    name: 'Dermatologia',
    description: 'Sistema para dermatologia',
    category: 'health',
    features: ['Dermatoscopia', 'Fotos lesões', 'Biópsias', 'Acompanhamento'],
    icon: Camera,
    difficulty: 'Médio',
    color: 'bg-orange-500'
  },
  {
    id: 'health-ophthalmology',
    name: 'Oftalmologia',
    description: 'Sistema para oftalmologia',
    category: 'health',
    features: ['Exames visuais', 'Prescrição óculos', 'Cirurgias', 'Equipamentos'],
    icon: Search,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'health-orthopedics',
    name: 'Ortopedia',
    description: 'Sistema para ortopedia',
    category: 'health',
    features: ['Exames ortopédicos', 'Cirurgias', 'Reabilitação', 'Implantes'],
    icon: Wrench,
    difficulty: 'Médio',
    color: 'bg-gray-600'
  },
  {
    id: 'health-neurology',
    name: 'Neurologia',
    description: 'Sistema para neurologia',
    category: 'health',
    features: ['Exames neurológicos', 'EEG', 'Acompanhamento', 'Medicações'],
    icon: Brain,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },

  // Education Templates (30 templates)
  {
    id: 'education-lms',
    name: 'Plataforma LMS',
    description: 'Learning Management System completo',
    category: 'education',
    features: ['Cursos online', 'Avaliações', 'Certificados', 'Progresso aluno'],
    icon: GraduationCap,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'education-school-management',
    name: 'Gestão Escolar',
    description: 'Sistema completo para gestão de escolas',
    category: 'education',
    features: ['Matrícula', 'Notas', 'Frequência', 'Financeiro', 'Comunicação pais'],
    icon: Building,
    difficulty: 'Avançado',
    color: 'bg-green-600'
  },
  {
    id: 'education-university-system',
    name: 'Sistema Universitário',
    description: 'Gestão completa de universidades',
    category: 'education',
    features: ['Matrícula online', 'Grade curricular', 'Pesquisa', 'Extensão'],
    icon: GraduationCap,
    difficulty: 'Avançado',
    color: 'bg-blue-700'
  },
  {
    id: 'education-virtual-classroom',
    name: 'Sala de Aula Virtual',
    description: 'Plataforma para ensino remoto e híbrido',
    category: 'education',
    features: ['Video aulas', 'Interação tempo real', 'Gravações', 'Ferramentas colaborativas'],
    icon: Monitor,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'education-student-portal',
    name: 'Portal do Estudante',
    description: 'Portal para estudantes acessarem informações acadêmicas',
    category: 'education',
    features: ['Notas', 'Horários', 'Biblioteca digital', 'Serviços acadêmicos'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'education-teacher-platform',
    name: 'Plataforma do Professor',
    description: 'Ferramentas para professores gerenciarem suas aulas',
    category: 'education',
    features: ['Planos aula', 'Avaliações', 'Registro notas', 'Comunicação alunos'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'education-library-system',
    name: 'Sistema de Biblioteca',
    description: 'Gestão completa de bibliotecas',
    category: 'education',
    features: ['Catálogo online', 'Empréstimos', 'Reservas', 'Multas'],
    icon: Book,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'education-attendance-system',
    name: 'Controle de Presença',
    description: 'Sistema para controle de frequência escolar',
    category: 'education',
    features: ['Chamada eletrônica', 'Relatórios frequência', 'Alertas faltas', 'Justificativas'],
    icon: Clock,
    difficulty: 'Fácil',
    color: 'bg-orange-600'
  },
  {
    id: 'education-exam-system',
    name: 'Sistema de Provas',
    description: 'Plataforma para criação e aplicação de provas',
    category: 'education',
    features: ['Banco questões', 'Provas online', 'Correção automática', 'Analytics'],
    icon: FileCheck,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'education-course-marketplace',
    name: 'Marketplace de Cursos',
    description: 'Plataforma para venda de cursos online',
    category: 'education',
    features: ['Criação cursos', 'Pagamentos', 'Certificados', 'Reviews'],
    icon: Store,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'education-tutoring-platform',
    name: 'Plataforma de Tutoria',
    description: 'Conecte alunos com tutores especializados',
    category: 'education',
    features: ['Matching aluno-tutor', 'Agendamento', 'Video chamadas', 'Pagamentos'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'education-language-learning',
    name: 'Aprendizado de Idiomas',
    description: 'App para aprender idiomas de forma interativa',
    category: 'education',
    features: ['Lições interativas', 'Reconhecimento voz', 'Gamificação', 'Progresso'],
    icon: Globe,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'education-skill-assessment',
    name: 'Avaliação de Competências',
    description: 'Sistema para avaliar habilidades e competências',
    category: 'education',
    features: ['Testes competência', 'Portfolios', 'Feedback 360º', 'Certificações'],
    icon: Award,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'education-research-platform',
    name: 'Plataforma de Pesquisa',
    description: 'Sistema para gestão de projetos de pesquisa',
    category: 'education',
    features: ['Projetos pesquisa', 'Colaboração', 'Publicações', 'Financiamento'],
    icon: Search,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'education-parent-communication',
    name: 'Comunicação Escola-Família',
    description: 'Plataforma para comunicação entre escola e pais',
    category: 'education',
    features: ['Mensagens', 'Calendário escolar', 'Boletim online', 'Reuniões'],
    icon: MessageSquare,
    difficulty: 'Fácil',
    color: 'bg-green-600'
  },
  {
    id: 'education-vocational-training',
    name: 'Ensino Profissionalizante',
    description: 'Sistema para cursos técnicos e profissionalizantes',
    category: 'education',
    features: ['Cursos técnicos', 'Estágios', 'Empresas parceiras', 'Empregabilidade'],
    icon: Wrench,
    difficulty: 'Médio',
    color: 'bg-orange-600'
  },
  {
    id: 'education-special-needs',
    name: 'Educação Especial',
    description: 'Sistema adaptado para educação especial',
    category: 'education',
    features: ['Adaptações curriculares', 'Acessibilidade', 'Planos individuais', 'Terapias'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'education-early-childhood',
    name: 'Educação Infantil',
    description: 'Sistema especializado em educação infantil',
    category: 'education',
    features: ['Atividades lúdicas', 'Desenvolvimento infantil', 'Comunicação pais', 'Saúde'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-pink-500'
  },
  {
    id: 'education-distance-learning',
    name: 'Ensino a Distância',
    description: 'Plataforma completa para EAD',
    category: 'education',
    features: ['Conteúdo adaptativo', 'Trilhas aprendizado', 'Mentoria online', 'Gamificação'],
    icon: Monitor,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'education-corporate-training',
    name: 'Treinamento Corporativo',
    description: 'Plataforma para treinamento empresarial',
    category: 'education',
    features: ['Trilhas corporativas', 'Competências', 'Avaliações', 'Certificações'],
    icon: Briefcase,
    difficulty: 'Médio',
    color: 'bg-blue-700'
  },
  {
    id: 'education-compliance-training',
    name: 'Treinamento Compliance',
    description: 'Sistema para treinamentos obrigatórios',
    category: 'education',
    features: ['Cursos obrigatórios', 'Certificações', 'Auditoria', 'Relatórios compliance'],
    icon: Shield,
    difficulty: 'Médio',
    color: 'bg-red-600'
  },
  {
    id: 'education-microlearning',
    name: 'Microlearning',
    description: 'Plataforma de aprendizado em pequenas doses',
    category: 'education',
    features: ['Conteúdo micro', 'Mobile first', 'Just-in-time learning', 'Spaced repetition'],
    icon: Zap,
    difficulty: 'Médio',
    color: 'bg-yellow-600'
  },
  {
    id: 'education-adaptive-learning',
    name: 'Aprendizado Adaptativo',
    description: 'IA para personalizar experiência de aprendizado',
    category: 'education',
    features: ['IA adaptativa', 'Personalização', 'Analytics aprendizado', 'Recomendações'],
    icon: Bot,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'education-gamified-learning',
    name: 'Aprendizado Gamificado',
    description: 'Plataforma com elementos de jogos para educação',
    category: 'education',
    features: ['Gamificação', 'Badges', 'Leaderboards', 'Missões educativas'],
    icon: Gamepad2,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'education-virtual-reality',
    name: 'Educação com VR',
    description: 'Plataforma educacional com realidade virtual',
    category: 'education',
    features: ['VR experiences', 'Simulações', 'Laboratórios virtuais', 'Imersão'],
    icon: Camera,
    difficulty: 'Avançado',
    color: 'bg-blue-700'
  },
  {
    id: 'education-peer-learning',
    name: 'Aprendizado Colaborativo',
    description: 'Plataforma para aprendizado entre pares',
    category: 'education',
    features: ['Grupos estudo', 'Peer review', 'Projetos colaborativos', 'Mentoria peer'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'education-assessment-analytics',
    name: 'Analytics Educacional',
    description: 'Plataforma de analytics para educação',
    category: 'education',
    features: ['Learning analytics', 'Predictive models', 'Dashboards educacionais', 'Insights'],
    icon: BarChart3,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'education-content-authoring',
    name: 'Criação de Conteúdo',
    description: 'Ferramenta para criar conteúdo educacional',
    category: 'education',
    features: ['Editor conteúdo', 'Templates', 'Multimedia', 'Publicação'],
    icon: FileText,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'education-certification-platform',
    name: 'Plataforma de Certificação',
    description: 'Sistema para emitir e validar certificados',
    category: 'education',
    features: ['Certificados digitais', 'Blockchain', 'Validação', 'Portfolio competências'],
    icon: Award,
    difficulty: 'Médio',
    color: 'bg-yellow-600'
  },
  {
    id: 'education-alumni-network',
    name: 'Rede de Ex-Alunos',
    description: 'Plataforma para conectar ex-alunos',
    category: 'education',
    features: ['Networking alumni', 'Eventos', 'Mentoria', 'Oportunidades carreira'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },

  // Continue with remaining templates...
  // Food Templates, Transport, Real Estate, Productivity, Analytics, Entertainment, Finance, Marketing, Communication
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
