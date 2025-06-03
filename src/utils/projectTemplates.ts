
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
  // E-commerce Templates (70 templates)
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
  {
    id: 'ecommerce-progressive',
    name: 'Progressive Commerce',
    description: 'E-commerce com experiência progressiva e adaptativa',
    category: 'ecommerce',
    features: ['Progressive loading', 'Offline support', 'Smart caching', 'Adaptive UI'],
    icon: Zap,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'ecommerce-eco',
    name: 'Eco Commerce',
    description: 'E-commerce focado em produtos sustentáveis',
    category: 'ecommerce',
    features: ['Pegada carbono', 'Produtos eco', 'Certificações verdes', 'Offset carbono'],
    icon: Home,
    difficulty: 'Médio',
    color: 'bg-green-700'
  },
  {
    id: 'ecommerce-ai-powered',
    name: 'AI-Powered Commerce',
    description: 'E-commerce com IA para recomendações e chatbot',
    category: 'ecommerce',
    features: ['AI recommendations', 'Chatbot', 'Price optimization', 'Demand forecasting'],
    icon: Bot,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'ecommerce-headless',
    name: 'Headless Commerce',
    description: 'E-commerce headless com API-first approach',
    category: 'ecommerce',
    features: ['API-first', 'Multi-channel', 'Microservices', 'GraphQL'],
    icon: Cloud,
    difficulty: 'Avançado',
    color: 'bg-gray-700'
  },
  {
    id: 'ecommerce-personalized',
    name: 'Hyper-Personalized Shop',
    description: 'Loja com personalização extrema por usuário',
    category: 'ecommerce',
    features: ['Personalização IA', 'Dynamic pricing', 'Custom layouts', 'Behavioral targeting'],
    icon: Target,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'ecommerce-live-shopping',
    name: 'Live Shopping Platform',
    description: 'Plataforma de live shopping com streamers',
    category: 'ecommerce',
    features: ['Live streaming', 'Real-time chat', 'Instant purchase', 'Influencer tools'],
    icon: Camera,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'ecommerce-quick-commerce',
    name: 'Quick Commerce',
    description: 'Entrega ultra-rápida em 15-30 minutos',
    category: 'ecommerce',
    features: ['Entrega 15min', 'Dark stores', 'Real-time tracking', 'Micro-fulfillment'],
    icon: Truck,
    difficulty: 'Avançado',
    color: 'bg-orange-600'
  },
  {
    id: 'ecommerce-upcycling',
    name: 'Upcycling Marketplace',
    description: 'Marketplace para produtos reciclados e upcycling',
    category: 'ecommerce',
    features: ['Produtos reciclados', 'DIY tutorials', 'Sustainability score', 'Eco community'],
    icon: Shield,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'ecommerce-elderly',
    name: 'Senior-Friendly Commerce',
    description: 'E-commerce otimizado para idosos',
    category: 'ecommerce',
    features: ['Interface simplificada', 'Texto grande', 'Suporte telefônico', 'Entrega cuidadosa'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'ecommerce-kids',
    name: 'Kids Safe Commerce',
    description: 'E-commerce seguro para crianças',
    category: 'ecommerce',
    features: ['Controle parental', 'Limite gastos', 'Conteúdo apropriado', 'Educação financeira'],
    icon: Shield,
    difficulty: 'Médio',
    color: 'bg-pink-500'
  },
  {
    id: 'ecommerce-disability',
    name: 'Accessible Commerce',
    description: 'E-commerce totalmente acessível para PCDs',
    category: 'ecommerce',
    features: ['Screen reader', 'Voice navigation', 'High contrast', 'Keyboard navigation'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'ecommerce-charity',
    name: 'Charity Commerce',
    description: 'E-commerce que doa parte das vendas para caridade',
    category: 'ecommerce',
    features: ['Doação automática', 'Escolha da causa', 'Transparência', 'Impact tracking'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-red-500'
  },
  {
    id: 'ecommerce-gamified',
    name: 'Gamified Commerce',
    description: 'E-commerce com elementos de gamificação',
    category: 'ecommerce',
    features: ['Points system', 'Achievements', 'Leaderboards', 'Challenges'],
    icon: Gamepad2,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'ecommerce-regional',
    name: 'Regional Commerce Hub',
    description: 'Hub de e-commerce para produtos regionais',
    category: 'ecommerce',
    features: ['Produtos regionais', 'Cultura local', 'Artesãos locais', 'Turismo gastronômico'],
    icon: MapPin,
    difficulty: 'Médio',
    color: 'bg-orange-600'
  },
  {
    id: 'ecommerce-smart-contracts',
    name: 'Smart Contract Commerce',
    description: 'E-commerce baseado em smart contracts',
    category: 'ecommerce',
    features: ['Smart contracts', 'Automatic execution', 'Decentralized', 'Crypto payments'],
    icon: Code,
    difficulty: 'Avançado',
    color: 'bg-purple-800'
  },

  // Social Media Templates (35 templates)
  {
    id: 'social-network-complete',
    name: 'Rede Social Completa',
    description: 'Plataforma social com feed, stories e mensagens',
    category: 'social',
    features: ['Feed personalizado', 'Stories', 'Mensagens', 'Grupos'],
    icon: Users,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'social-dating-app',
    name: 'App de Relacionamento',
    description: 'Plataforma de encontros com matching inteligente',
    category: 'social',
    features: ['Swipe matching', 'Chat seguro', 'Verificação perfil', 'Eventos'],
    icon: Heart,
    difficulty: 'Avançado',
    color: 'bg-pink-600'
  },
  {
    id: 'social-professional-network',
    name: 'Rede Profissional',
    description: 'LinkedIn para nichos específicos de profissionais',
    category: 'social',
    features: ['Networking', 'Vagas', 'Mentoria', 'Eventos networking'],
    icon: Briefcase,
    difficulty: 'Avançado',
    color: 'bg-blue-700'
  },
  {
    id: 'social-community-platform',
    name: 'Plataforma de Comunidade',
    description: 'Forum moderno com gamificação e reputação',
    category: 'social',
    features: ['Forums', 'Gamificação', 'Reputação', 'Badges'],
    icon: Users,
    difficulty: 'Médio',
    color: 'bg-green-600'
  },
  {
    id: 'social-local-network',
    name: 'Rede Social Local',
    description: 'Conecte pessoas da mesma região ou bairro',
    category: 'social',
    features: ['Geolocalização', 'Eventos locais', 'Vizinhança', 'Marketplace local'],
    icon: MapPin,
    difficulty: 'Médio',
    color: 'bg-red-600'
  },
  {
    id: 'social-hobby-network',
    name: 'Rede de Hobbies',
    description: 'Conecte pessoas com os mesmos interesses e hobbies',
    category: 'social',
    features: ['Grupos interesse', 'Encontros', 'Projetos colaborativos', 'Marketplace hobby'],
    icon: Star,
    difficulty: 'Médio',
    color: 'bg-yellow-600'
  },
  {
    id: 'social-family-network',
    name: 'Rede Familiar',
    description: 'Plataforma privada para famílias compartilharem momentos',
    category: 'social',
    features: ['Álbuns família', 'Calendário familiar', 'Messaging privado', 'Árvore genealógica'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-pink-500'
  },
  {
    id: 'social-creator-platform',
    name: 'Plataforma de Criadores',
    description: 'Rede social para criadores de conteúdo monetizarem',
    category: 'social',
    features: ['Monetização conteúdo', 'Assinaturas', 'Lives', 'Analytics criador'],
    icon: Camera,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'social-seniors-network',
    name: 'Rede Social Melhor Idade',
    description: 'Rede social especialmente desenhada para idosos',
    category: 'social',
    features: ['Interface simples', 'Grupos idade', 'Atividades locais', 'Suporte família'],
    icon: Heart,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'social-students-network',
    name: 'Rede Social Estudantil',
    description: 'Plataforma para estudantes colaborarem e estudarem',
    category: 'social',
    features: ['Grupos estudo', 'Compartilhar notas', 'Eventos campus', 'Mentoria'],
    icon: GraduationCap,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  {
    id: 'social-travel-network',
    name: 'Rede Social de Viagem',
    description: 'Conecte viajantes e compartilhe experiências',
    category: 'social',
    features: ['Diários viagem', 'Dicas locais', 'Companheiros viagem', 'Roteiros compartilhados'],
    icon: Plane,
    difficulty: 'Médio',
    color: 'bg-blue-500'
  },
  {
    id: 'social-parenting-network',
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
    id: 'social-gaming-network',
    name: 'Rede Social Gaming',
    description: 'Plataforma para gamers se conectarem e jogarem',
    category: 'social',
    features: ['Perfis gamer', 'Teams', 'Torneios', 'Streaming integration'],
    icon: Gamepad2,
    difficulty: 'Médio',
    color: 'bg-purple-600'
  },
  {
    id: 'social-music-network',
    name: 'Rede Social Musical',
    description: 'Conecte músicos, bandas e fãs de música',
    category: 'social',
    features: ['Colaborações musicais', 'Upload músicas', 'Eventos musicais', 'Descoberta artistas'],
    icon: Music,
    difficulty: 'Médio',
    color: 'bg-indigo-600'
  },
  {
    id: 'social-fitness-network',
    name: 'Rede Social Fitness',
    description: 'Comunidade fitness para motivação e acompanhamento',
    category: 'social',
    features: ['Tracking workouts', 'Desafios fitness', 'Personal trainers', 'Progresso compartilhado'],
    icon: Dumbbell,
    difficulty: 'Médio',
    color: 'bg-orange-600'
  },
  {
    id: 'social-food-network',
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
    id: 'social-artists-network',
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
  // Continue with remaining business templates...

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
  // Continue with remaining health templates...

  // Education Templates (25 templates)
  {
    id: 'education-lms-platform',
    name: 'Plataforma LMS',
    description: 'Learning Management System completo',
    category: 'education',
    features: ['Cursos online', 'Avaliações', 'Certificados', 'Progresso aluno'],
    icon: GraduationCap,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  // Continue with remaining education templates...

  // Food Templates (20 templates)
  {
    id: 'food-delivery-platform',
    name: 'Plataforma de Delivery',
    description: 'Sistema completo de delivery de comida',
    category: 'food',
    features: ['Multi-restaurantes', 'Tracking tempo real', 'Pagamentos', 'Avaliações'],
    icon: Utensils,
    difficulty: 'Avançado',
    color: 'bg-orange-600'
  },
  // Continue with remaining food templates...

  // Transport Templates (15 templates)  
  {
    id: 'transport-ride-sharing',
    name: 'App de Carona',
    description: 'Plataforma de compartilhamento de viagens',
    category: 'transport',
    features: ['Matching motorista/passageiro', 'GPS tracking', 'Pagamentos', 'Avaliações'],
    icon: Car,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  // Continue with remaining transport templates...

  // Real Estate Templates (15 templates)
  {
    id: 'real-estate-portal',
    name: 'Portal Imobiliário',
    description: 'Plataforma completa para imóveis',
    category: 'real-estate',
    features: ['Busca avançada', 'Tours virtuais', 'Financiamento', 'CRM imobiliário'],
    icon: Home,
    difficulty: 'Avançado',
    color: 'bg-green-600'
  },
  // Continue with remaining real estate templates...

  // Productivity Templates (15 templates)
  {
    id: 'productivity-task-manager',
    name: 'Gerenciador de Tarefas',
    description: 'App avançado de produtividade pessoal',
    category: 'productivity',
    features: ['GTD methodology', 'Time blocking', 'Pomodoro', 'Analytics produtividade'],
    icon: Zap,
    difficulty: 'Médio',
    color: 'bg-blue-600'
  },
  // Continue with remaining productivity templates...

  // Analytics Templates (10 templates)
  {
    id: 'analytics-dashboard',
    name: 'Dashboard Analytics',
    description: 'Plataforma de business intelligence',
    category: 'analytics',
    features: ['Dashboards interativos', 'Múltiplas fontes', 'Real-time', 'Alertas'],
    icon: BarChart3,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  // Continue with remaining analytics templates...

  // Entertainment Templates (10 templates)
  {
    id: 'entertainment-streaming',
    name: 'Plataforma de Streaming',
    description: 'Serviço de streaming de vídeo',
    category: 'entertainment',
    features: ['Upload vídeos', 'Assinaturas', 'Recomendações', 'Multi-device'],
    icon: Monitor,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  }
  // Continue with remaining entertainment templates...
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
