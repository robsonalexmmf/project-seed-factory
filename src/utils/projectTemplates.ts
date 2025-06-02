
import { 
  LucideIcon, 
  Activity, 
  BarChart3, 
  Building, 
  Camera, 
  Car, 
  Coffee, 
  Cpu, 
  CreditCard, 
  FileText, 
  Globe, 
  GraduationCap, 
  Heart, 
  Home, 
  MapPin, 
  Monitor, 
  Music, 
  Palette, 
  Phone, 
  PlayCircle, 
  Rocket, 
  Search, 
  Settings, 
  ShoppingBag, 
  Smartphone, 
  Star, 
  TrendingUp, 
  Users, 
  Video, 
  Zap,
  Calendar,
  MessageCircle,
  Shield,
  Truck,
  Utensils,
  Briefcase,
  Stethoscope,
  PaintBucket,
  ShoppingCart,
  BookOpen,
  DollarSign,
  Target,
  Mail,
  Megaphone,
  Camera as CameraIcon,
  Scissors,
  Wrench,
  Package,
  Store,
  GraduationCap as Education,
  Laptop,
  Calculator,
  ChefHat,
  Dumbbell,
  Plane,
  GamepadIcon,
  Headphones,
  Flower,
  Key,
  Shirt,
  Dog,
  Gift
} from 'lucide-react';

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  icon: LucideIcon;
  color: string;
}

export const projectTemplates: ProjectTemplate[] = [
  // Saúde e Bem-Estar
  {
    id: 'health-appointment-system',
    name: 'Sistema de Agendamento para Psicólogos',
    description: 'Plataforma completa para agendamento de consultas psicológicas com gestão de pacientes',
    category: 'health',
    features: ['Agendamento online', 'Gestão de pacientes', 'Prontuário digital', 'Lembretes automáticos', 'Pagamentos', 'Relatórios'],
    icon: Calendar,
    color: 'bg-blue-600'
  },
  {
    id: 'physiotherapy-clinic',
    name: 'Gestão para Clínicas de Fisioterapia',
    description: 'Sistema completo para gerenciar clínicas de fisioterapia e acompanhar tratamentos',
    category: 'health',
    features: ['Agendamento', 'Evolução do paciente', 'Exercícios prescritos', 'Controle financeiro', 'Relatórios médicos'],
    icon: Activity,
    color: 'bg-green-600'
  },
  {
    id: 'vaccine-control',
    name: 'Controle de Vacinas em Clínicas',
    description: 'Sistema para controle e agendamento de vacinas com cartão digital',
    category: 'health',
    features: ['Cartão de vacina digital', 'Agendamento', 'Controle de estoque', 'Lembretes', 'Histórico completo'],
    icon: Shield,
    color: 'bg-purple-600'
  },
  {
    id: 'dental-reminders',
    name: 'Sistema de Lembretes para Dentistas',
    description: 'Plataforma para agendamento e lembretes automáticos de consultas odontológicas',
    category: 'health',
    features: ['Agendamento online', 'Lembretes automáticos', 'Prontuário odontológico', 'Orçamentos', 'Controle financeiro'],
    icon: Calendar,
    color: 'bg-teal-600'
  },
  {
    id: 'nutrition-records',
    name: 'Prontuário Eletrônico para Nutricionistas',
    description: 'Sistema de prontuário digital com planos alimentares e acompanhamento nutricional',
    category: 'health',
    features: ['Prontuário digital', 'Planos alimentares', 'Acompanhamento', 'Receitas', 'Evolução do paciente'],
    icon: Heart,
    color: 'bg-pink-600'
  },
  {
    id: 'physiotherapy-tracking',
    name: 'Acompanhamento de Pacientes - Fisioterapia',
    description: 'Sistema para fisioterapeutas acompanharem evolução dos pacientes',
    category: 'health',
    features: ['Evolução do paciente', 'Exercícios', 'Fotos comparativas', 'Relatórios', 'Comunicação'],
    icon: TrendingUp,
    color: 'bg-indigo-600'
  },
  {
    id: 'holistic-therapy',
    name: 'Gestão para Terapeutas Holísticos',
    description: 'Painel completo para gestão de atendimentos de terapias alternativas',
    category: 'health',
    features: ['Agendamento', 'Múltiplas terapias', 'Histórico do cliente', 'Pagamentos', 'Relatórios'],
    icon: Star,
    color: 'bg-yellow-600'
  },
  {
    id: 'occupational-therapy',
    name: 'Marcação de Sessões - Terapia Ocupacional',
    description: 'Plataforma especializada para terapeutas ocupacionais',
    category: 'health',
    features: ['Agendamento especializado', 'Avaliações', 'Planos terapêuticos', 'Evolução', 'Relatórios'],
    icon: Settings,
    color: 'bg-orange-600'
  },
  {
    id: 'digital-anamnese',
    name: 'Anamnese Digital para Consultórios',
    description: 'Aplicativo para coleta digital de informações dos pacientes',
    category: 'health',
    features: ['Formulários digitais', 'Histórico médico', 'Assinatura digital', 'Integração com prontuário'],
    icon: FileText,
    color: 'bg-cyan-600'
  },
  {
    id: 'medical-insurance',
    name: 'Gestão de Planos e Convênios Médicos',
    description: 'Sistema para gerenciar convênios e planos de saúde',
    category: 'health',
    features: ['Controle de convênios', 'Autorização de procedimentos', 'Faturamento', 'Relatórios', 'Integração'],
    icon: CreditCard,
    color: 'bg-emerald-600'
  },
  {
    id: 'aesthetic-treatments',
    name: 'Controle de Tratamentos Estéticos',
    description: 'Aplicativo para clínicas de estética gerenciarem tratamentos',
    category: 'health',
    features: ['Agendamento', 'Fotos antes/depois', 'Protocolos', 'Evolução', 'Orçamentos'],
    icon: Star,
    color: 'bg-rose-600'
  },
  {
    id: 'podiatry-clinic',
    name: 'Sistema para Clínicas de Podologia',
    description: 'Gestão completa para clínicas especializadas em podologia',
    category: 'health',
    features: ['Agendamento', 'Diagnósticos', 'Tratamentos', 'Fotos', 'Evolução'],
    icon: Activity,
    color: 'bg-violet-600'
  },
  {
    id: 'telemedicine',
    name: 'Telemedicina com Chat Seguro',
    description: 'SaaS de telemedicina com videochamadas e chat criptografado',
    category: 'health',
    features: ['Videochamadas', 'Chat seguro', 'Receitas digitais', 'Prontuário', 'Pagamentos'],
    icon: Video,
    color: 'bg-blue-600'
  },
  {
    id: 'personal-trainer-plans',
    name: 'Treinos Personalizados - Personal Trainer',
    description: 'Plataforma de assinatura para personal trainers criarem treinos',
    category: 'health',
    features: ['Treinos personalizados', 'Vídeos', 'Acompanhamento', 'Assinaturas', 'Evolução'],
    icon: Dumbbell,
    color: 'bg-orange-600'
  },
  {
    id: 'ai-nutrition-plans',
    name: 'Planos Alimentares com IA - Nutricionistas',
    description: 'App para nutricionistas criarem planos alimentares com inteligência artificial',
    category: 'health',
    features: ['IA para cardápios', 'Planos personalizados', 'Lista de compras', 'Acompanhamento', 'Receitas'],
    icon: ChefHat,
    color: 'bg-green-600'
  },

  // Negócios e Profissionais Liberais
  {
    id: 'real-estate-crm',
    name: 'CRM para Corretores de Imóveis',
    description: 'Sistema completo de gestão de clientes e imóveis para corretores',
    category: 'business',
    features: ['Gestão de clientes', 'Catálogo de imóveis', 'Visitas agendadas', 'Propostas', 'Relatórios'],
    icon: Home,
    color: 'bg-blue-600'
  },
  {
    id: 'architect-projects',
    name: 'Gestão de Projetos para Arquitetos',
    description: 'Plataforma para arquitetos gerenciarem projetos e clientes',
    category: 'business',
    features: ['Gestão de projetos', 'Timeline', 'Orçamentos', 'Aprovações', 'Portfólio'],
    icon: Building,
    color: 'bg-purple-600'
  },
  {
    id: 'construction-timeline',
    name: 'Painel de Obras com Timelines',
    description: 'Sistema para acompanhar obras com cronogramas e tarefas',
    category: 'business',
    features: ['Timeline de obras', 'Tarefas', 'Fotos de progresso', 'Orçamento', 'Equipes'],
    icon: Settings,
    color: 'bg-orange-600'
  },
  {
    id: 'lawyer-contracts',
    name: 'Controle de Contratos para Advogados',
    description: 'SaaS para advogados gerenciarem contratos e processos',
    category: 'business',
    features: ['Gestão de contratos', 'Processos', 'Prazos', 'Clientes', 'Documentos'],
    icon: FileText,
    color: 'bg-gray-600'
  },
  {
    id: 'metalworker-budget',
    name: 'Orçamento e Cliente para Serralheiros',
    description: 'Painel para serralheiros gerenciarem orçamentos e clientes',
    category: 'business',
    features: ['Orçamentos', 'Catálogo de serviços', 'Clientes', 'Materiais', 'Projetos'],
    icon: Wrench,
    color: 'bg-slate-600'
  },
  {
    id: 'financial-proposals',
    name: 'Propostas para Consultores Financeiros',
    description: 'Plataforma para envio de propostas financeiras personalizadas',
    category: 'business',
    features: ['Propostas personalizadas', 'Assinatura digital', 'CRM', 'Relatórios', 'Dashboard'],
    icon: DollarSign,
    color: 'bg-green-600'
  },
  {
    id: 'career-coaching',
    name: 'Agendamento para Coach de Carreira',
    description: 'Sistema de agendamento especializado para coaches',
    category: 'business',
    features: ['Agendamento', 'Sessões online', 'Materiais', 'Evolução', 'Pagamentos'],
    icon: TrendingUp,
    color: 'bg-indigo-600'
  },
  {
    id: 'online-legal',
    name: 'Atendimento Jurídico Online',
    description: 'Plataforma para atendimento jurídico digital',
    category: 'business',
    features: ['Consultas online', 'Documentos', 'Assinatura digital', 'Processos', 'Pagamentos'],
    icon: MessageCircle,
    color: 'bg-blue-600'
  },
  {
    id: 'translator-clients',
    name: 'Gestão de Clientes para Tradutores',
    description: 'Sistema para tradutores freelancers gerenciarem projetos',
    category: 'business',
    features: ['Projetos de tradução', 'Clientes', 'Prazos', 'Orçamentos', 'Entrega'],
    icon: Globe,
    color: 'bg-cyan-600'
  },
  {
    id: 'insurance-visits',
    name: 'Controle de Visitas - Corretores de Seguros',
    description: 'App para corretores controlarem visitas e propostas',
    category: 'business',
    features: ['Controle de visitas', 'Propostas', 'Clientes', 'Comissões', 'Relatórios'],
    icon: MapPin,
    color: 'bg-emerald-600'
  },
  {
    id: 'civil-engineering',
    name: 'Planejamento de Obras - Engenheiros Civis',
    description: 'SaaS para engenheiros planejarem obras e projetos',
    category: 'business',
    features: ['Planejamento', 'Cronogramas', 'Orçamentos', 'Materiais', 'Equipes'],
    icon: Building,
    color: 'bg-orange-600'
  },
  {
    id: 'safety-checklists',
    name: 'Checklists de Segurança do Trabalho',
    description: 'Plataforma para checklists de segurança em obras',
    category: 'business',
    features: ['Checklists digitais', 'Inspeções', 'Relatórios', 'Fotos', 'Conformidade'],
    icon: Shield,
    color: 'bg-red-600'
  },
  {
    id: 'consortium-tracking',
    name: 'Acompanhamento de Consórcios',
    description: 'Sistema para consultores acompanharem consórcios',
    category: 'business',
    features: ['Acompanhamento', 'Clientes', 'Grupos', 'Contemplações', 'Relatórios'],
    icon: Users,
    color: 'bg-purple-600'
  },
  {
    id: 'mei-financial',
    name: 'Painel Financeiro com Boletos para MEIs',
    description: 'Sistema financeiro completo para microempreendedores',
    category: 'business',
    features: ['Controle financeiro', 'Emissão de boletos', 'Relatórios', 'Clientes', 'Impostos'],
    icon: Calculator,
    color: 'bg-green-600'
  },
  {
    id: 'environmental-consulting',
    name: 'SaaS para Consultores Ambientais',
    description: 'Sistema para consultores ambientais gerenciarem projetos',
    category: 'business',
    features: ['Projetos ambientais', 'Licenças', 'Relatórios', 'Clientes', 'Documentação'],
    icon: Globe,
    color: 'bg-green-600'
  },

  // Criadores e Artistas
  {
    id: 'tattoo-appointment',
    name: 'Agendamento para Tatuadores',
    description: 'Plataforma de agendamento especializada para estúdios de tatuagem',
    category: 'creative',
    features: ['Agendamento', 'Portfólio', 'Orçamentos', 'Cuidados pós-tatuagem', 'Galeria'],
    icon: PaintBucket,
    color: 'bg-purple-600'
  },
  {
    id: 'piercing-studio',
    name: 'Estúdios de Piercing com Ficha Digital',
    description: 'SaaS para estúdios de piercing com ficha digital e agendamento',
    category: 'creative',
    features: ['Ficha digital', 'Agendamento', 'Cuidados', 'Catálogo', 'Histórico'],
    icon: Star,
    color: 'bg-pink-600'
  },
  {
    id: 'artist-commissions',
    name: 'Painel de Comissões para Artistas',
    description: 'Sistema para artistas plásticos gerenciarem comissões',
    category: 'creative',
    features: ['Gestão de comissões', 'Portfólio', 'Orçamentos', 'Entregas', 'Clientes'],
    icon: Palette,
    color: 'bg-orange-600'
  },
  {
    id: 'designer-orders',
    name: 'Pedidos sob Demanda para Designers',
    description: 'Plataforma para designers receberem pedidos personalizados',
    category: 'creative',
    features: ['Pedidos customizados', 'Briefing', 'Aprovações', 'Revisões', 'Entrega'],
    icon: Monitor,
    color: 'bg-blue-600'
  },
  {
    id: 'portfolio-generator',
    name: 'Gerador de Portfólio Online',
    description: 'Criador de portfólio com temas personalizáveis',
    category: 'creative',
    features: ['Temas personalizáveis', 'Galeria', 'Contato', 'SEO', 'Responsivo'],
    icon: Globe,
    color: 'bg-indigo-600'
  },
  {
    id: 'photo-studio-booking',
    name: 'Agendamento de Estúdios Fotográficos',
    description: 'SaaS para agendamento de sessões em estúdios fotográficos',
    category: 'creative',
    features: ['Agendamento de estúdio', 'Equipamentos', 'Pacotes', 'Galeria', 'Orçamentos'],
    icon: CameraIcon,
    color: 'bg-cyan-600'
  },
  {
    id: 'photographer-contracts',
    name: 'Gerador de Contratos para Fotógrafos',
    description: 'Sistema para fotógrafos gerarem contratos automaticamente',
    category: 'creative',
    features: ['Contratos automáticos', 'Assinatura digital', 'Pacotes', 'Clientes', 'Orçamentos'],
    icon: FileText,
    color: 'bg-gray-600'
  },
  {
    id: 'recording-studio',
    name: 'Reservas para Estúdios de Gravação',
    description: 'Sistema de reservas para estúdios de gravação musical',
    category: 'creative',
    features: ['Reservas', 'Equipamentos', 'Salas', 'Horários', 'Produtores'],
    icon: Music,
    color: 'bg-red-600'
  },
  {
    id: 'makeup-artist',
    name: 'Gestão de Clientes para Maquiadoras',
    description: 'App para maquiadoras gerenciarem clientes e agendamentos',
    category: 'creative',
    features: ['Agendamento', 'Looks', 'Produtos', 'Clientes', 'Galeria'],
    icon: Palette,
    color: 'bg-pink-600'
  },
  {
    id: 'dj-budget',
    name: 'Painel de Orçamento para DJs',
    description: 'Sistema para DJs gerenciarem eventos e orçamentos',
    category: 'creative',
    features: ['Orçamentos', 'Eventos', 'Playlist', 'Equipamentos', 'Contratos'],
    icon: Headphones,
    color: 'bg-purple-600'
  },
  {
    id: 'musician-booking',
    name: 'Reservas de Shows para Músicos',
    description: 'App para músicos freelancers agendarem apresentações',
    category: 'creative',
    features: ['Agendamento de shows', 'Repertório', 'Cachê', 'Locais', 'Contratos'],
    icon: Music,
    color: 'bg-indigo-600'
  },
  {
    id: 'barbershop-system',
    name: 'Agendamento e Portfólio para Barbearias',
    description: 'Sistema completo para barbearias com agendamento e portfólio',
    category: 'creative',
    features: ['Agendamento', 'Portfólio de cortes', 'Barbeiros', 'Serviços', 'Fidelidade'],
    icon: Scissors,
    color: 'bg-orange-600'
  },
  {
    id: 'nail-salon',
    name: 'Agendamento para Manicures e Pedicures',
    description: 'Sistema de agendamento para profissionais de unhas',
    category: 'creative',
    features: ['Agendamento', 'Esmaltes', 'Nail art', 'Clientes', 'Galeria'],
    icon: Star,
    color: 'bg-pink-600'
  },
  {
    id: 'micropigmentation',
    name: 'Agendamento de Micropigmentação',
    description: 'SaaS especializado para profissionais de micropigmentação',
    category: 'creative',
    features: ['Agendamento especializado', 'Fotos antes/depois', 'Cuidados', 'Retoque', 'Evolução'],
    icon: PaintBucket,
    color: 'bg-purple-600'
  },
  {
    id: 'beauty-salon',
    name: 'Reservas e Pagamentos para Salões',
    description: 'Plataforma completa para salões de beleza',
    category: 'creative',
    features: ['Agendamento', 'Múltiplos serviços', 'Profissionais', 'Pagamentos', 'Fidelidade'],
    icon: Star,
    color: 'bg-pink-600'
  },

  // Restaurantes, Delivery e Alimentação
  {
    id: 'qr-menu-orders',
    name: 'Pedidos com QR Code para Restaurantes',
    description: 'Sistema de pedidos através de QR code nas mesas',
    category: 'delivery',
    features: ['QR code', 'Cardápio digital', 'Pedidos diretos', 'Pagamento', 'Cozinha'],
    icon: ShoppingCart,
    color: 'bg-orange-600'
  },
  {
    id: 'restaurant-reservations',
    name: 'Reservas e Lista de Espera',
    description: 'App para reservas de mesa e controle de lista de espera',
    category: 'delivery',
    features: ['Reservas', 'Lista de espera', 'Mesas', 'Notificações', 'Histórico'],
    icon: Calendar,
    color: 'bg-blue-600'
  },
  {
    id: 'digital-ordering',
    name: 'Comandas Digital para Garçons',
    description: 'Painel digital para garçons gerenciarem pedidos',
    category: 'delivery',
    features: ['Comandas digitais', 'Pedidos', 'Status', 'Mesas', 'Impressão'],
    icon: Smartphone,
    color: 'bg-green-600'
  },
  {
    id: 'food-truck-system',
    name: 'SaaS para Food Trucks',
    description: 'Sistema completo para food trucks com controle de estoque',
    category: 'delivery',
    features: ['Pedidos', 'Estoque', 'Localização', 'Cardápio', 'Vendas'],
    icon: Truck,
    color: 'bg-yellow-600'
  },
  {
    id: 'fitness-meal-subscription',
    name: 'Assinaturas para Marmitas Fitness',
    description: 'Sistema de assinaturas para marmitas saudáveis',
    category: 'delivery',
    features: ['Assinaturas', 'Cardápio fitness', 'Delivery', 'Nutrição', 'Pagamentos'],
    icon: Heart,
    color: 'bg-green-600'
  },
  {
    id: 'delivery-geolocation',
    name: 'Delivery com Geolocalização',
    description: 'Plataforma de delivery com rastreamento em tempo real',
    category: 'delivery',
    features: ['Geolocalização', 'Rastreamento', 'Delivery', 'Múltiplos restaurantes', 'Pagamentos'],
    icon: MapPin,
    color: 'bg-red-600'
  },
  {
    id: 'ai-digital-menu',
    name: 'Cardápios Digitais com IA',
    description: 'SaaS para cardápios digitais com recomendações por IA',
    category: 'delivery',
    features: ['Cardápio inteligente', 'Recomendações IA', 'Personalizações', 'Analytics', 'Otimização'],
    icon: Cpu,
    color: 'bg-purple-600'
  },
  {
    id: 'dish-rating',
    name: 'Avaliação de Pratos por Clientes',
    description: 'Painel para clientes avaliarem pratos e restaurantes',
    category: 'delivery',
    features: ['Avaliações', 'Comentários', 'Fotos', 'Ranking', 'Feedback'],
    icon: Star,
    color: 'bg-yellow-600'
  },
  {
    id: 'whatsapp-orders',
    name: 'Pedidos por WhatsApp',
    description: 'Plataforma para receber pedidos via WhatsApp',
    category: 'delivery',
    features: ['Integração WhatsApp', 'Catálogo', 'Pedidos automáticos', 'Pagamentos', 'Entrega'],
    icon: MessageCircle,
    color: 'bg-green-600'
  },
  {
    id: 'ifood-integration',
    name: 'Gestão com Integração ao iFood',
    description: 'Sistema que integra com iFood e outras plataformas',
    category: 'delivery',
    features: ['Integração iFood', 'Multi-plataforma', 'Gestão centralizada', 'Pedidos', 'Relatórios'],
    icon: Smartphone,
    color: 'bg-orange-600'
  },
  {
    id: 'table-management',
    name: 'Controle de Mesas e Ocupação',
    description: 'Sistema para controlar ocupação de mesas em restaurantes',
    category: 'delivery',
    features: ['Mesas', 'Ocupação', 'Rotatividade', 'Reservas', 'Tempo médio'],
    icon: Settings,
    color: 'bg-blue-600'
  },
  {
    id: 'ai-dish-suggestions',
    name: 'Sugestões de Pratos com IA',
    description: 'Painel com sugestões inteligentes de pratos baseadas em IA',
    category: 'delivery',
    features: ['Sugestões IA', 'Tendências', 'Sazonalidade', 'Preferências', 'Otimização'],
    icon: Cpu,
    color: 'bg-purple-600'
  },
  {
    id: 'kitchen-timing',
    name: 'Gestão de Cozinha e Tempo',
    description: 'Sistema para controlar tempo de preparo na cozinha',
    category: 'delivery',
    features: ['Tempo de preparo', 'Fila de pedidos', 'Cozinha', 'Eficiência', 'Relatórios'],
    icon: Timer,
    color: 'bg-red-600'
  },
  {
    id: 'food-events',
    name: 'Reservas de Eventos Gastronômicos',
    description: 'SaaS para reservas de eventos e experiências gastronômicas',
    category: 'delivery',
    features: ['Eventos gastronômicos', 'Reservas', 'Experiências', 'Chef', 'Pagamentos'],
    icon: Calendar,
    color: 'bg-indigo-600'
  },
  {
    id: 'cafe-pos',
    name: 'Controle de Vendas para Cafeterias',
    description: 'Sistema de vendas e fluxo de caixa para cafeterias',
    category: 'delivery',
    features: ['Ponto de venda', 'Fluxo de caixa', 'Produtos', 'Funcionários', 'Relatórios'],
    icon: Coffee,
    color: 'bg-orange-600'
  },

  // Comércio e Serviços Locais
  {
    id: 'car-wash-booking',
    name: 'Agendamento para Lava-jatos',
    description: 'Sistema de agendamento para serviços de lava-jato',
    category: 'commerce',
    features: ['Agendamento', 'Tipos de lavagem', 'Fila de carros', 'Pagamentos', 'Fidelidade'],
    icon: Car,
    color: 'bg-blue-600'
  },
  {
    id: 'stationery-pos',
    name: 'Controle de Caixa para Papelarias',
    description: 'Plataforma de controle de caixa e estoque para papelarias',
    category: 'commerce',
    features: ['Ponto de venda', 'Estoque', 'Fornecedores', 'Vendas', 'Relatórios'],
    icon: Package,
    color: 'bg-purple-600'
  },
  {
    id: 'auto-repair-quotes',
    name: 'Orçamentos para Oficinas Mecânicas',
    description: 'SaaS para emissão de orçamentos em oficinas mecânicas',
    category: 'commerce',
    features: ['Orçamentos', 'Peças', 'Serviços', 'Diagnósticos', 'Clientes'],
    icon: Wrench,
    color: 'bg-orange-600'
  },
  {
    id: 'clothing-store-orders',
    name: 'Pedidos para Lojas de Roupas',
    description: 'App de pedidos online para lojas de roupas',
    category: 'commerce',
    features: ['Catálogo online', 'Pedidos', 'Tamanhos', 'Cores', 'Entrega'],
    icon: Shirt,
    color: 'bg-pink-600'
  },
  {
    id: 'local-market-delivery',
    name: 'Delivery para Mercados de Bairro',
    description: 'Plataforma de delivery para mercados locais',
    category: 'commerce',
    features: ['Delivery local', 'Produtos', 'Estoque', 'Pedidos', 'Entregadores'],
    icon: Store,
    color: 'bg-green-600'
  },
  {
    id: 'pharmacy-loyalty',
    name: 'Fidelidade e Cashback para Farmácias',
    description: 'Sistema de fidelidade com cashback para farmácias',
    category: 'commerce',
    features: ['Programa de fidelidade', 'Cashback', 'Medicamentos', 'Receitas', 'Pontos'],
    icon: Heart,
    color: 'bg-red-600'
  },
  {
    id: 'pet-shop-orders',
    name: 'Pedidos e Estoque para Pet Shops',
    description: 'Painel de pedidos e controle de estoque para pet shops',
    category: 'commerce',
    features: ['Produtos pet', 'Estoque', 'Pedidos', 'Raças', 'Serviços'],
    icon: Dog,
    color: 'bg-orange-600'
  },
  {
    id: 'equipment-rental',
    name: 'Aluguel de Equipamentos',
    description: 'SaaS para aluguel de equipamentos com contrato digital',
    category: 'commerce',
    features: ['Aluguel', 'Equipamentos', 'Contratos digitais', 'Disponibilidade', 'Manutenção'],
    icon: Settings,
    color: 'bg-gray-600'
  },
  {
    id: 'clothing-rental',
    name: 'Gestão de Aluguel de Roupas',
    description: 'Sistema para aluguel de roupas e trajes',
    category: 'commerce',
    features: ['Aluguel de roupas', 'Eventos', 'Tamanhos', 'Limpeza', 'Reservas'],
    icon: Shirt,
    color: 'bg-purple-600'
  },
  {
    id: 'flower-shop',
    name: 'Gestão para Floriculturas',
    description: 'Plataforma de gestão completa para floriculturas',
    category: 'commerce',
    features: ['Flores', 'Arranjos', 'Eventos', 'Delivery', 'Sazonalidade'],
    icon: Flower,
    color: 'bg-pink-600'
  },
  {
    id: 'locksmith-booking',
    name: 'Agendamento para Chaveiros',
    description: 'Sistema de agendamento para serviços de chaveiro',
    category: 'commerce',
    features: ['Agendamento urgente', 'Tipos de serviço', 'Localização', 'Emergência', 'Orçamentos'],
    icon: Key,
    color: 'bg-yellow-600'
  },
  {
    id: 'laundry-pickup',
    name: 'Lavanderias com Agendamento',
    description: 'SaaS para lavanderias com agendamento e retirada',
    category: 'commerce',
    features: ['Agendamento', 'Coleta e entrega', 'Tipos de roupa', 'Status', 'Pagamentos'],
    icon: Shirt,
    color: 'bg-blue-600'
  },
  {
    id: 'butcher-delivery',
    name: 'Delivery para Açougues e Peixarias',
    description: 'Sistema de delivery especializado para açougues',
    category: 'commerce',
    features: ['Carnes frescas', 'Delivery', 'Cortes', 'Qualidade', 'Pedidos'],
    icon: Utensils,
    color: 'bg-red-600'
  },
  {
    id: 'electronics-store',
    name: 'Gestão para Lojas de Eletrônicos',
    description: 'Painel de gestão para lojas de eletrônicos',
    category: 'commerce',
    features: ['Produtos eletrônicos', 'Garantias', 'Assistência', 'Estoque', 'Vendas'],
    icon: Smartphone,
    color: 'bg-blue-600'
  },
  {
    id: 'repair-shop-queue',
    name: 'Lista de Espera para Oficinas',
    description: 'Plataforma de lista de espera para oficinas diversas',
    category: 'commerce',
    features: ['Lista de espera', 'Agendamento', 'Status do serviço', 'Orçamentos', 'Notificações'],
    icon: Wrench,
    color: 'bg-orange-600'
  },

  // Educação e Cursos
  {
    id: 'private-lessons',
    name: 'Agendamento para Aulas Particulares',
    description: 'Plataforma para professores agendarem aulas particulares',
    category: 'education',
    features: ['Agendamento', 'Matérias', 'Professores', 'Online/Presencial', 'Pagamentos'],
    icon: BookOpen,
    color: 'bg-blue-600'
  },
  {
    id: 'ai-exam-system',
    name: 'Provas Automáticas com IA',
    description: 'Sistema de provas automáticas com correção por inteligência artificial',
    category: 'education',
    features: ['Provas automáticas', 'Correção IA', 'Banco de questões', 'Relatórios', 'Analytics'],
    icon: Cpu,
    color: 'bg-purple-600'
  },
  {
    id: 'classroom-management',
    name: 'Gestão de Cursos Presenciais',
    description: 'SaaS para gestão de cursos com lista de presença',
    category: 'education',
    features: ['Lista de presença', 'Turmas', 'Cronograma', 'Materiais', 'Notas'],
    icon: Users,
    color: 'bg-green-600'
  },
  {
    id: 'language-school',
    name: 'Agendamento para Escolas de Idiomas',
    description: 'Painel de agendamento especializado para escolas de idiomas',
    category: 'education',
    features: ['Aulas de idiomas', 'Níveis', 'Professores nativos', 'Materiais', 'Avaliações'],
    icon: Globe,
    color: 'bg-indigo-600'
  },
  {
    id: 'custom-exams',
    name: 'Criação de Simulados Personalizados',
    description: 'Plataforma para criação de simulados e testes personalizados',
    category: 'education',
    features: ['Simulados personalizados', 'Banco de questões', 'Relatórios', 'Performance', 'Ranking'],
    icon: FileText,
    color: 'bg-orange-600'
  },
  {
    id: 'dance-studio',
    name: 'Controle de Alunos - Estúdios de Dança',
    description: 'App para controle de alunos em estúdios de dança',
    category: 'education',
    features: ['Modalidades de dança', 'Turmas', 'Frequência', 'Eventos', 'Apresentações'],
    icon: Music,
    color: 'bg-pink-600'
  },
  {
    id: 'music-school',
    name: 'Gestão para Escolas de Música',
    description: 'Sistema para gerenciar aulas e horários em escolas de música',
    category: 'education',
    features: ['Instrumentos', 'Professores', 'Salas', 'Horários', 'Recitais'],
    icon: Music,
    color: 'bg-purple-600'
  },
  {
    id: 'mentoring-platform',
    name: 'Mentorias com Videochamadas',
    description: 'Plataforma de mentorias com sistema de videochamadas',
    category: 'education',
    features: ['Videochamadas', 'Agendamento', 'Materiais', 'Evolução', 'Feedback'],
    icon: Video,
    color: 'bg-blue-600'
  },
  {
    id: 'technical-courses',
    name: 'Cursos Técnicos com Certificados',
    description: 'SaaS para cursos técnicos com emissão de certificados',
    category: 'education',
    features: ['Cursos técnicos', 'Certificados digitais', 'Avaliações', 'Competências', 'Portfólio'],
    icon: GraduationCap,
    color: 'bg-indigo-600'
  },
  {
    id: 'adaptive-exams',
    name: 'Provas Adaptativas com IA',
    description: 'Sistema de provas que se adaptam ao nível do aluno',
    category: 'education',
    features: ['Provas adaptativas', 'IA personalizada', 'Níveis dinâmicos', 'Analytics', 'Aprendizado'],
    icon: Cpu,
    color: 'bg-purple-600'
  },
  {
    id: 'tutoring-school',
    name: 'Ensino para Escolas de Reforço',
    description: 'Plataforma de ensino para escolas de reforço escolar',
    category: 'education',
    features: ['Reforço escolar', 'Matérias', 'Dificuldades', 'Professores', 'Acompanhamento'],
    icon: BookOpen,
    color: 'bg-green-600'
  },
  {
    id: 'study-planner',
    name: 'Plano de Estudos Personalizado',
    description: 'Aplicativo para criar planos de estudos personalizados',
    category: 'education',
    features: ['Planos personalizados', 'Cronograma', 'Metas', 'Progresso', 'Disciplinas'],
    icon: Calendar,
    color: 'bg-blue-600'
  },
  {
    id: 'recurring-payments-courses',
    name: 'Pagamentos Recorrentes para Cursos',
    description: 'Sistema de pagamentos recorrentes para cursos online',
    category: 'education',
    features: ['Pagamentos recorrentes', 'Assinaturas', 'Planos', 'Renovação', 'Gestão financeira'],
    icon: CreditCard,
    color: 'bg-green-600'
  },
  {
    id: 'cooking-classes',
    name: 'Ensino de Culinária com Assinatura',
    description: 'Plataforma de ensino de culinária com modelo de assinatura',
    category: 'education',
    features: ['Aulas de culinária', 'Receitas', 'Vídeos', 'Ingredientes', 'Assinatura'],
    icon: ChefHat,
    color: 'bg-orange-600'
  },
  {
    id: 'gamified-learning',
    name: 'Desafios Gamificados para Alunos',
    description: 'App com desafios gamificados para engajar alunos',
    category: 'education',
    features: ['Gamificação', 'Desafios', 'Pontuação', 'Rankings', 'Recompensas'],
    icon: GamepadIcon,
    color: 'bg-purple-600'
  },

  // Finanças, Vendas e Marketing
  {
    id: 'landing-page-builder',
    name: 'Landing Pages com Funil Automatizado',
    description: 'Plataforma para criar landing pages com funis de conversão',
    category: 'marketing',
    features: ['Landing pages', 'Funis automatizados', 'A/B testing', 'Analytics', 'Conversões'],
    icon: TrendingUp,
    color: 'bg-blue-600'
  },
  {
    id: 'ai-copywriting',
    name: 'Copywriting com IA para Instagram',
    description: 'SaaS de copywriting com inteligência artificial para redes sociais',
    category: 'marketing',
    features: ['Copy com IA', 'Instagram', 'Templates', 'Hashtags', 'Engagement'],
    icon: Cpu,
    color: 'bg-purple-600'
  },
  {
    id: 'email-campaigns',
    name: 'Campanhas de E-mail Marketing',
    description: 'Sistema de e-mail marketing com segmentação avançada',
    category: 'marketing',
    features: ['E-mail marketing', 'Segmentação', 'Automação', 'Templates', 'Analytics'],
    icon: Mail,
    color: 'bg-blue-600'
  },
  {
    id: 'sales-crm',
    name: 'CRM para Representantes Comerciais',
    description: 'Sistema CRM especializado para representantes comerciais',
    category: 'marketing',
    features: ['CRM de vendas', 'Pipeline', 'Clientes', 'Propostas', 'Comissões'],
    icon: Users,
    color: 'bg-green-600'
  },
  {
    id: 'affiliate-platform',
    name: 'Plataforma de Afiliados',
    description: 'Sistema de afiliados com painel de desempenho completo',
    category: 'marketing',
    features: ['Programa de afiliados', 'Comissões', 'Links', 'Relatórios', 'Pagamentos'],
    icon: TrendingUp,
    color: 'bg-orange-600'
  },
  {
    id: 'sales-goals',
    name: 'Metas e Bonificações para Vendedores',
    description: 'Painel de metas e sistema de bonificações para equipes de vendas',
    category: 'marketing',
    features: ['Metas de vendas', 'Bonificações', 'Ranking', 'Performance', 'Gamificação'],
    icon: Target,
    color: 'bg-purple-600'
  },
  {
    id: 'overdue-recovery',
    name: 'Recuperação de Boletos Vencidos',
    description: 'SaaS para recuperação automática de boletos vencidos',
    category: 'marketing',
    features: ['Recuperação automática', 'Boletos vencidos', 'Notificações', 'Acordos', 'Relatórios'],
    icon: CreditCard,
    color: 'bg-red-600'
  },
  {
    id: 'paid-traffic-analyzer',
    name: 'Analisador de Tráfego Pago com IA',
    description: 'Ferramenta de análise de tráfego pago com inteligência artificial',
    category: 'marketing',
    features: ['Análise de tráfego', 'IA para otimização', 'ROI', 'Campanhas', 'Insights'],
    icon: Cpu,
    color: 'bg-blue-600'
  },
  {
    id: 'recurring-billing',
    name: 'Emissão de Boletos com Recorrência',
    description: 'SaaS para emissão automática de boletos recorrentes',
    category: 'marketing',
    features: ['Boletos recorrentes', 'Cobrança automática', 'Assinaturas', 'Pagamentos', 'Gestão'],
    icon: CreditCard,
    color: 'bg-green-600'
  },
  {
    id: 'whatsapp-remarketing',
    name: 'Remarketing por WhatsApp',
    description: 'Painel de remarketing automatizado via WhatsApp',
    category: 'marketing',
    features: ['WhatsApp automático', 'Remarketing', 'Segmentação', 'Campanhas', 'Conversões'],
    icon: MessageCircle,
    color: 'bg-green-600'
  }
];

export const categories = [
  { id: 'all', name: 'Todos', icon: Globe },
  { id: 'health', name: 'Saúde', icon: Heart },
  { id: 'business', name: 'Negócios', icon: Briefcase },
  { id: 'creative', name: 'Criadores', icon: Palette },
  { id: 'delivery', name: 'Alimentação', icon: Utensils },
  { id: 'commerce', name: 'Comércio', icon: ShoppingBag },
  { id: 'education', name: 'Educação', icon: BookOpen },
  { id: 'marketing', name: 'Marketing', icon: Megaphone }
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
