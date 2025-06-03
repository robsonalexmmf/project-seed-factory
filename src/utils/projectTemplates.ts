import { LucideIcon, Store, Heart, GraduationCap, Briefcase, Utensils, Car, Home, Calendar, BarChart, Gamepad2, DollarSign, Megaphone, MessageCircle, Monitor, Bot, Users, ShoppingCart, Stethoscope, BookOpen, Building, Pizza, Truck, MapPin, Clock, TrendingUp, Music, Zap, Shield, Camera, Palette, Headphones, Phone, Mail, Globe, Settings, Star, Award, Target, Lightbulb, Coffee, Plane, Gift, Lock, FileText, CreditCard, Smartphone, Laptop, Tablet, Watch, Speaker, Headset, Video, Image, Film, Radio, Tv, Wifi, Bluetooth, Battery, Power, Cpu, HardDrive, Database, Cloud, Server, Code, Terminal, Bug, Wrench, Hammer, Scissors, Paintbrush, Brush, Pen, Pencil, Ruler, Calculator, Compass, Map, Navigation, Route, Flag, Bell, Timer, Archive, Folder, File, Download, Upload, Send, Inbox, Outbox, Trash, Search, Filter, Sort, List, Grid, Layout, Sidebar, Menu, MoreHorizontal, MoreVertical, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Plus, Minus, X, Check, Info, AlertTriangle, AlertCircle, HelpCircle, Eye, EyeOff, ThumbsUp, ThumbsDown, Share, Bookmark, Tag, Link, Paperclip, Copy, Undo, Redo, Repeat, Shuffle, SkipBack, SkipForward, Play, Pause, FastForward, Rewind, Volume, Volume1, Volume2, VolumeX, Shirt, Diamond, Smile, Activity, Apple, Flower } from 'lucide-react';

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  category: 'business' | 'health' | 'education' | 'food' | 'transport' | 'real-estate' | 'productivity' | 'analytics' | 'entertainment' | 'finance' | 'marketing' | 'communication';
  features: string[];
  icon: LucideIcon;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  color: string;
}

export interface TemplateCategory {
  id: string;
  name: string;
  icon: LucideIcon;
}

export const templateCategories: TemplateCategory[] = [
  { id: 'all', name: 'Todos', icon: Grid },
  { id: 'business', name: 'Negócios', icon: Briefcase },
  { id: 'health', name: 'Saúde', icon: Heart },
  { id: 'education', name: 'Educação', icon: GraduationCap },
  { id: 'food', name: 'Alimentação', icon: Utensils },
  { id: 'transport', name: 'Transporte', icon: Car },
  { id: 'real-estate', name: 'Imóveis', icon: Home },
  { id: 'productivity', name: 'Produtividade', icon: Target },
  { id: 'analytics', name: 'Analytics', icon: BarChart },
  { id: 'entertainment', name: 'Entretenimento', icon: Gamepad2 },
  { id: 'finance', name: 'Finanças', icon: DollarSign },
  { id: 'marketing', name: 'Marketing', icon: Megaphone },
  { id: 'communication', name: 'Comunicação', icon: MessageCircle }
];

export const projectTemplates: ProjectTemplate[] = [
  // BUSINESS CATEGORY (expanding to 100+ templates)
  {
    id: 'business-crm',
    name: 'CRM Completo',
    description: 'Sistema completo de gestão de relacionamento com clientes',
    category: 'business',
    features: ['Gestão clientes', 'Pipeline vendas', 'Relatórios', 'Automação'],
    icon: Users,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'business-inventory',
    name: 'Controle de Estoque',
    description: 'Sistema para gestão completa de inventário e produtos',
    category: 'business',
    features: ['Controle estoque', 'Alertas', 'Relatórios', 'Códigos de barras'],
    icon: Store,
    difficulty: 'Intermediário',
    color: 'bg-green-600'
  },
  {
    id: 'business-pos',
    name: 'Sistema PDV',
    description: 'Ponto de venda completo para estabelecimentos comerciais',
    category: 'business',
    features: ['Vendas', 'Pagamentos', 'Cupom fiscal', 'Relatórios'],
    icon: CreditCard,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'whatsapp-bot-vendas',
    name: 'Bot WhatsApp Vendas',
    description: 'Bot inteligente para vendas e atendimento via WhatsApp',
    category: 'business',
    features: ['Catálogo produtos', 'Pedidos', 'Pagamentos', 'Suporte'],
    icon: Bot,
    difficulty: 'Intermediário',
    color: 'bg-green-500'
  },
  {
    id: 'whatsapp-bot-agendamento',
    name: 'Bot WhatsApp Agendamento',
    description: 'Bot para agendamento de serviços via WhatsApp',
    category: 'business',
    features: ['Agenda online', 'Confirmações', 'Lembretes', 'Reagendamento'],
    icon: Calendar,
    difficulty: 'Intermediário',
    color: 'bg-blue-500'
  },
  {
    id: 'whatsapp-bot-imobiliaria',
    name: 'Bot WhatsApp Imobiliária',
    description: 'Bot especializado para corretores e imobiliárias',
    category: 'business',
    features: ['Filtro imóveis', 'Visitas', 'Documentos', 'Financiamento'],
    icon: Home,
    difficulty: 'Avançado',
    color: 'bg-orange-500'
  },
  {
    id: 'whatsapp-bot-restaurante',
    name: 'Bot WhatsApp Restaurante',
    description: 'Bot para pedidos e delivery de restaurantes',
    category: 'business',
    features: ['Cardápio digital', 'Pedidos', 'Delivery', 'Pagamentos'],
    icon: Pizza,
    difficulty: 'Intermediário',
    color: 'bg-red-500'
  },
  {
    id: 'whatsapp-bot-consultorio',
    name: 'Bot WhatsApp Consultório',
    description: 'Bot para agendamento médico e comunicação com pacientes',
    category: 'business',
    features: ['Agendamentos', 'Consultas', 'Receitas', 'Exames'],
    icon: Stethoscope,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'whatsapp-bot-advocacia',
    name: 'Bot WhatsApp Advocacia',
    description: 'Bot especializado para escritórios de advocacia',
    category: 'business',
    features: ['Consultas jurídicas', 'Documentos', 'Processos', 'Honorários'],
    icon: FileText,
    difficulty: 'Avançado',
    color: 'bg-gray-600'
  },
  {
    id: 'whatsapp-bot-academia',
    name: 'Bot WhatsApp Academia',
    description: 'Bot para academias e personal trainers',
    category: 'business',
    features: ['Planos treino', 'Agendamentos', 'Pagamentos', 'Orientações'],
    icon: Award,
    difficulty: 'Intermediário',
    color: 'bg-purple-500'
  },
  {
    id: 'whatsapp-bot-beleza',
    name: 'Bot WhatsApp Salão Beleza',
    description: 'Bot para salões de beleza e estética',
    category: 'business',
    features: ['Agendamentos', 'Serviços', 'Promoções', 'Feedback'],
    icon: Palette,
    difficulty: 'Intermediário',
    color: 'bg-pink-500'
  },
  {
    id: 'whatsapp-bot-pet',
    name: 'Bot WhatsApp Pet Shop',
    description: 'Bot para pet shops e clínicas veterinárias',
    category: 'business',
    features: ['Agendamentos', 'Produtos pet', 'Vacinas', 'Cuidados'],
    icon: Heart,
    difficulty: 'Intermediário',
    color: 'bg-green-600'
  },
  {
    id: 'whatsapp-bot-auto',
    name: 'Bot WhatsApp Oficina Auto',
    description: 'Bot para oficinas mecânicas e auto center',
    category: 'business',
    features: ['Orçamentos', 'Agendamentos', 'Diagnósticos', 'Peças'],
    icon: Car,
    difficulty: 'Intermediário',
    color: 'bg-blue-700'
  },
  {
    id: 'whatsapp-bot-educacao',
    name: 'Bot WhatsApp Escola',
    description: 'Bot para escolas e cursos educacionais',
    category: 'business',
    features: ['Matrículas', 'Notas', 'Comunicados', 'Eventos'],
    icon: BookOpen,
    difficulty: 'Avançado',
    color: 'bg-indigo-500'
  },
  {
    id: 'whatsapp-bot-ecommerce',
    name: 'Bot WhatsApp E-commerce',
    description: 'Bot completo para lojas online via WhatsApp',
    category: 'business',
    features: ['Catálogo', 'Carrinho', 'Checkout', 'Rastreamento'],
    icon: ShoppingCart,
    difficulty: 'Avançado',
    color: 'bg-orange-600'
  },
  {
    id: 'whatsapp-bot-contabilidade',
    name: 'Bot WhatsApp Contabilidade',
    description: 'Bot para escritórios de contabilidade',
    category: 'business',
    features: ['Documentos fiscais', 'Declarações', 'Consultas', 'Prazos'],
    icon: Calculator,
    difficulty: 'Avançado',
    color: 'bg-gray-700'
  },
  {
    id: 'whatsapp-bot-farmacia',
    name: 'Bot WhatsApp Farmácia',
    description: 'Bot para farmácias e drogarias',
    category: 'business',
    features: ['Medicamentos', 'Receitas', 'Delivery', 'Convênios'],
    icon: Plus,
    difficulty: 'Intermediário',
    color: 'bg-green-700'
  },
  {
    id: 'whatsapp-bot-dentista',
    name: 'Bot WhatsApp Dentista',
    description: 'Bot especializado para consultórios odontológicos',
    category: 'business',
    features: ['Agendamentos', 'Tratamentos', 'Lembretes', 'Orçamentos'],
    icon: Smile,
    difficulty: 'Intermediário',
    color: 'bg-blue-500'
  },
  {
    id: 'whatsapp-bot-psicologo',
    name: 'Bot WhatsApp Psicólogo',
    description: 'Bot para psicólogos e terapeutas',
    category: 'business',
    features: ['Sessões online', 'Agendamentos', 'Exercícios', 'Acompanhamento'],
    icon: Heart,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'whatsapp-bot-fisioterapia',
    name: 'Bot WhatsApp Fisioterapia',
    description: 'Bot para clínicas de fisioterapia',
    category: 'business',
    features: ['Exercícios', 'Agendamentos', 'Evolução', 'Orientações'],
    icon: Activity,
    difficulty: 'Intermediário',
    color: 'bg-green-600'
  },
  {
    id: 'whatsapp-bot-nutricao',
    name: 'Bot WhatsApp Nutrição',
    description: 'Bot para nutricionistas e consultórios',
    category: 'business',
    features: ['Dietas', 'Cardápios', 'Consultas', 'Acompanhamento'],
    icon: Apple,
    difficulty: 'Intermediário',
    color: 'bg-green-500'
  },
  {
    id: 'whatsapp-bot-eventos',
    name: 'Bot WhatsApp Eventos',
    description: 'Bot para organizadores de eventos e festas',
    category: 'business',
    features: ['Orçamentos', 'Agenda', 'Fornecedores', 'Check-list'],
    icon: Calendar,
    difficulty: 'Intermediário',
    color: 'bg-purple-500'
  },
  {
    id: 'whatsapp-bot-turismo',
    name: 'Bot WhatsApp Turismo',
    description: 'Bot para agências de viagem e turismo',
    category: 'business',
    features: ['Pacotes', 'Reservas', 'Roteiros', 'Documentação'],
    icon: Plane,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'whatsapp-bot-hotel',
    name: 'Bot WhatsApp Hotel',
    description: 'Bot para hotéis e pousadas',
    category: 'business',
    features: ['Reservas', 'Check-in', 'Serviços', 'Room service'],
    icon: Building,
    difficulty: 'Avançado',
    color: 'bg-orange-600'
  },
  {
    id: 'whatsapp-bot-delivery',
    name: 'Bot WhatsApp Delivery',
    description: 'Bot universal para qualquer tipo de delivery',
    category: 'business',
    features: ['Cardápios', 'Pedidos', 'Rastreamento', 'Avaliações'],
    icon: Truck,
    difficulty: 'Intermediário',
    color: 'bg-red-600'
  },
  {
    id: 'whatsapp-bot-assistencia',
    name: 'Bot WhatsApp Assistência Técnica',
    description: 'Bot para assistências técnicas de eletrônicos',
    category: 'business',
    features: ['Orçamentos', 'Status reparo', 'Garantia', 'Peças'],
    icon: Wrench,
    difficulty: 'Intermediário',
    color: 'bg-gray-600'
  },

  // HEALTH CATEGORY (expanding to 60+ templates)
  {
    id: 'health-telemedicine',
    name: 'Telemedicina',
    description: 'Plataforma completa para consultas médicas online',
    category: 'health',
    features: ['Videochamadas', 'Prontuário digital', 'Receitas', 'Agendamento'],
    icon: Monitor,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'health-mental-ai',
    name: 'IA Saúde Mental',
    description: 'Assistente de IA para apoio em saúde mental e bem-estar',
    category: 'health',
    features: ['Chatbot terapêutico', 'Análise humor', 'Exercícios mindfulness', 'Acompanhamento progresso'],
    icon: Monitor,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'health-fitness-tracker',
    name: 'Rastreador Fitness',
    description: 'App para monitoramento de atividades físicas e saúde',
    category: 'health',
    features: ['Contadores passos', 'Monitoramento cardíaco', 'Metas fitness', 'Análise sono'],
    icon: Activity,
    difficulty: 'Intermediário',
    color: 'bg-green-600'
  },
  {
    id: 'health-clinic-management',
    name: 'Gestão Clínica',
    description: 'Sistema completo para gestão de clínicas e consultórios',
    category: 'health',
    features: ['Agenda médica', 'Prontuários', 'Financeiro', 'Relatórios'],
    icon: Building,
    difficulty: 'Avançado',
    color: 'bg-blue-700'
  },
  {
    id: 'health-pharmacy',
    name: 'Farmácia Digital',
    description: 'Sistema para farmácias com delivery e receitas digitais',
    category: 'health',
    features: ['Receitas digitais', 'Delivery medicamentos', 'Controle estoque', 'Convênios'],
    icon: Plus,
    difficulty: 'Avançado',
    color: 'bg-green-700'
  },
  {
    id: 'health-nutrition',
    name: 'Nutrição Personalizada',
    description: 'App para acompanhamento nutricional personalizado',
    category: 'health',
    features: ['Planos alimentares', 'Contagem calorias', 'Receitas saudáveis', 'Acompanhamento peso'],
    icon: Apple,
    difficulty: 'Intermediário',
    color: 'bg-green-500'
  },
  {
    id: 'health-meditation',
    name: 'Meditação Guiada',
    description: 'Plataforma de meditação e mindfulness',
    category: 'health',
    features: ['Sessões guiadas', 'Música relaxante', 'Progresso meditação', 'Lembretes diários'],
    icon: Heart,
    difficulty: 'Intermediário',
    color: 'bg-purple-600'
  },
  {
    id: 'health-lab-results',
    name: 'Resultados Laboratoriais',
    description: 'Sistema para gestão de exames laboratoriais',
    category: 'health',
    features: ['Upload resultados', 'Histórico exames', 'Análise IA', 'Compartilhamento médicos'],
    icon: FileText,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'health-vaccine-tracker',
    name: 'Controle Vacinas',
    description: 'App para acompanhamento de cartão de vacinação',
    category: 'health',
    features: ['Cartão digital', 'Lembretes vacinas', 'Histórico familiar', 'Certificados'],
    icon: Shield,
    difficulty: 'Intermediário',
    color: 'bg-green-600'
  },
  {
    id: 'health-elderly-care',
    name: 'Cuidado Idosos',
    description: 'Plataforma para cuidado e monitoramento de idosos',
    category: 'health',
    features: ['Monitoramento saúde', 'Lembretes medicação', 'Emergências', 'Familiares conectados'],
    icon: Users,
    difficulty: 'Avançado',
    color: 'bg-orange-600'
  },

  // EDUCATION CATEGORY (expanding to 50+ templates)
  {
    id: 'education-lms',
    name: 'Plataforma EAD',
    description: 'Sistema completo de ensino à distância',
    category: 'education',
    features: ['Cursos online', 'Videoaulas', 'Avaliações', 'Certificados'],
    icon: GraduationCap,
    difficulty: 'Avançado',
    color: 'bg-indigo-600'
  },
  {
    id: 'education-school-management',
    name: 'Gestão Escolar',
    description: 'Sistema completo para administração escolar',
    category: 'education',
    features: ['Matrículas', 'Notas', 'Frequência', 'Comunicação pais'],
    icon: BookOpen,
    difficulty: 'Avançado',
    color: 'bg-blue-700'
  },
  {
    id: 'education-language-learning',
    name: 'Aprendizado Idiomas',
    description: 'Plataforma interativa para aprender idiomas',
    category: 'education',
    features: ['Lições interativas', 'Reconhecimento voz', 'Jogos educativos', 'Progresso gamificado'],
    icon: Globe,
    difficulty: 'Avançado',
    color: 'bg-green-600'
  },
  {
    id: 'education-quiz-maker',
    name: 'Criador Quiz',
    description: 'Ferramenta para criar questionários e avaliações',
    category: 'education',
    features: ['Editor quiz', 'Múltipla escolha', 'Correção automática', 'Relatórios desempenho'],
    icon: HelpCircle,
    difficulty: 'Intermediário',
    color: 'bg-purple-600'
  },
  {
    id: 'education-tutoring',
    name: 'Tutoria Online',
    description: 'Plataforma para conectar tutores e estudantes',
    category: 'education',
    features: ['Matching tutor-aluno', 'Aulas online', 'Pagamentos', 'Avaliações'],
    icon: Users,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'education-library',
    name: 'Biblioteca Digital',
    description: 'Sistema de biblioteca com acervo digital',
    category: 'education',
    features: ['Catálogo digital', 'Empréstimos online', 'E-books', 'Reservas'],
    icon: BookOpen,
    difficulty: 'Intermediário',
    color: 'bg-indigo-500'
  },
  {
    id: 'education-coding-bootcamp',
    name: 'Bootcamp Programação',
    description: 'Plataforma para bootcamps de programação',
    category: 'education',
    features: ['Projetos práticos', 'Code review', 'Mentoria', 'Portfolio'],
    icon: Code,
    difficulty: 'Avançado',
    color: 'bg-gray-700'
  },
  {
    id: 'education-kids-learning',
    name: 'Aprendizado Infantil',
    description: 'Jogos educativos para crianças',
    category: 'education',
    features: ['Jogos interativos', 'Alfabetização', 'Matemática básica', 'Cores e formas'],
    icon: Gamepad2,
    difficulty: 'Intermediário',
    color: 'bg-yellow-500'
  },

  // FOOD CATEGORY (expanding to 40+ templates)
  {
    id: 'food-delivery',
    name: 'Delivery Food',
    description: 'Plataforma completa de delivery de comida',
    category: 'food',
    features: ['Múltiplos restaurantes', 'Rastreamento tempo real', 'Pagamentos online', 'Avaliações'],
    icon: Truck,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'food-restaurant-pos',
    name: 'PDV Restaurante',
    description: 'Sistema de ponto de venda para restaurantes',
    category: 'food',
    features: ['Comandas digitais', 'Controle mesas', 'Cardápio digital', 'Relatórios vendas'],
    icon: CreditCard,
    difficulty: 'Avançado',
    color: 'bg-orange-600'
  },
  {
    id: 'food-recipe-app',
    name: 'App Receitas',
    description: 'Aplicativo de receitas culinárias',
    category: 'food',
    features: ['Banco receitas', 'Lista compras', 'Nutrição', 'Favoritos'],
    icon: BookOpen,
    difficulty: 'Intermediário',
    color: 'bg-orange-500'
  },
  {
    id: 'food-meal-planner',
    name: 'Planejador Refeições',
    description: 'App para planejamento de refeições semanais',
    category: 'food',
    features: ['Plano semanal', 'Lista compras automática', 'Calorias', 'Dietas especiais'],
    icon: Calendar,
    difficulty: 'Intermediário',
    color: 'bg-green-600'
  },
  {
    id: 'food-inventory',
    name: 'Controle Estoque Cozinha',
    description: 'Sistema para controle de estoque de restaurantes',
    category: 'food',
    features: ['Ingredientes', 'Validades', 'Fornecedores', 'Custos'],
    icon: Store,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'food-nutrition-tracker',
    name: 'Contador Calorias',
    description: 'App para contagem de calorias e nutrição',
    category: 'food',
    features: ['Base alimentos', 'Escaneamento código barras', 'Metas nutricionais', 'Gráficos progresso'],
    icon: BarChart,
    difficulty: 'Intermediário',
    color: 'bg-green-500'
  },

  // TRANSPORT CATEGORY
  {
    id: 'transport-ride-sharing',
    name: 'Compartilhamento Viagens',
    description: 'App estilo Uber para transporte urbano',
    category: 'transport',
    features: ['GPS tempo real', 'Pagamentos', 'Avaliações', 'Múltiplos veículos'],
    icon: Car,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'transport-logistics',
    name: 'Logística Transporte',
    description: 'Sistema de gestão logística e fretes',
    category: 'transport',
    features: ['Rastreamento cargas', 'Otimização rotas', 'Gestão frota', 'Documentos fiscais'],
    icon: Truck,
    difficulty: 'Avançado',
    color: 'bg-orange-600'
  },
  {
    id: 'transport-parking',
    name: 'Estacionamento Inteligente',
    description: 'Sistema para gestão de estacionamentos',
    category: 'transport',
    features: ['Vagas disponíveis', 'Reservas', 'Pagamento digital', 'Controle acesso'],
    icon: MapPin,
    difficulty: 'Intermediário',
    color: 'bg-blue-500'
  },

  // REAL ESTATE CATEGORY
  {
    id: 'real-estate-marketplace',
    name: 'Marketplace Imóveis',
    description: 'Plataforma completa para compra e venda de imóveis',
    category: 'real-estate',
    features: ['Listagem imóveis', 'Filtros avançados', 'Tour virtual', 'Financiamento'],
    icon: Home,
    difficulty: 'Avançado',
    color: 'bg-orange-600'
  },
  {
    id: 'real-estate-crm',
    name: 'CRM Imobiliário',
    description: 'Sistema CRM especializado para imobiliárias',
    category: 'real-estate',
    features: ['Gestão clientes', 'Pipeline vendas', 'Comissões', 'Relatórios'],
    icon: Building,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },

  // PRODUCTIVITY CATEGORY
  {
    id: 'productivity-task-manager',
    name: 'Gerenciador Tarefas',
    description: 'App completo para gestão de tarefas e projetos',
    category: 'productivity',
    features: ['Listas tarefas', 'Prazos', 'Colaboração', 'Relatórios produtividade'],
    icon: Check,
    difficulty: 'Intermediário',
    color: 'bg-blue-600'
  },
  {
    id: 'productivity-time-tracker',
    name: 'Controle Tempo',
    description: 'Ferramenta para rastreamento de tempo e produtividade',
    category: 'productivity',
    features: ['Timer pomodoro', 'Relatórios tempo', 'Metas diárias', 'Integração projetos'],
    icon: Clock,
    difficulty: 'Intermediário',
    color: 'bg-purple-600'
  },

  // ANALYTICS CATEGORY
  {
    id: 'analytics-dashboard',
    name: 'Dashboard Analítico',
    description: 'Painel de controle com métricas e KPIs',
    category: 'analytics',
    features: ['Gráficos interativos', 'KPIs tempo real', 'Relatórios personalizados', 'Exportação dados'],
    icon: BarChart,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'analytics-social-media',
    name: 'Analytics Redes Sociais',
    description: 'Análise de performance em redes sociais',
    category: 'analytics',
    features: ['Múltiplas redes', 'Engagement', 'Crescimento seguidores', 'Hashtags tendência'],
    icon: TrendingUp,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },

  // ENTERTAINMENT CATEGORY
  {
    id: 'entertainment-streaming',
    name: 'Plataforma Streaming',
    description: 'Serviço de streaming de vídeos',
    category: 'entertainment',
    features: ['Upload vídeos', 'Player personalizado', 'Recomendações', 'Assinaturas'],
    icon: Video,
    difficulty: 'Avançado',
    color: 'bg-red-600'
  },
  {
    id: 'entertainment-music',
    name: 'Streaming Música',
    description: 'Plataforma de streaming musical',
    category: 'entertainment',
    features: ['Player música', 'Playlists', 'Descoberta músicas', 'Artistas'],
    icon: Music,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'entertainment-gaming',
    name: 'Plataforma Gaming',
    description: 'Comunidade para gamers e jogos',
    category: 'entertainment',
    features: ['Perfis jogadores', 'Ranking', 'Tournaments', 'Chat'],
    icon: Gamepad2,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },

  // FINANCE CATEGORY
  {
    id: 'finance-personal',
    name: 'Finanças Pessoais',
    description: 'App para controle de finanças pessoais',
    category: 'finance',
    features: ['Controle gastos', 'Orçamento', 'Metas financeiras', 'Investimentos'],
    icon: DollarSign,
    difficulty: 'Intermediário',
    color: 'bg-green-600'
  },
  {
    id: 'finance-invoicing',
    name: 'Sistema Faturamento',
    description: 'Geração de faturas e controle financeiro',
    category: 'finance',
    features: ['Emissão notas', 'Cobrança', 'Relatórios financeiros', 'Integração bancos'],
    icon: FileText,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'finance-crypto',
    name: 'Carteira Crypto',
    description: 'Carteira digital para criptomoedas',
    category: 'finance',
    features: ['Multi moedas', 'Trading', 'Gráficos preços', 'Segurança'],
    icon: Zap,
    difficulty: 'Avançado',
    color: 'bg-orange-600'
  },

  // MARKETING CATEGORY
  {
    id: 'marketing-email',
    name: 'Email Marketing',
    description: 'Plataforma de email marketing automatizado',
    category: 'marketing',
    features: ['Campanhas email', 'Automação', 'Segmentação', 'Analytics'],
    icon: Mail,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'marketing-social',
    name: 'Gestão Redes Sociais',
    description: 'Ferramenta para gestão de redes sociais',
    category: 'marketing',
    features: ['Agendamento posts', 'Múltiplas redes', 'Analytics', 'Calendário conteúdo'],
    icon: Megaphone,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'marketing-landing',
    name: 'Criador Landing Pages',
    description: 'Editor para criar landing pages',
    category: 'marketing',
    features: ['Editor drag-drop', 'Templates', 'A/B testing', 'Conversões'],
    icon: Globe,
    difficulty: 'Intermediário',
    color: 'bg-green-600'
  },

  // COMMUNICATION CATEGORY
  {
    id: 'communication-chat',
    name: 'Chat Empresarial',
    description: 'Sistema de chat para empresas',
    category: 'communication',
    features: ['Chat tempo real', 'Grupos', 'Arquivos', 'Videochamadas'],
    icon: MessageCircle,
    difficulty: 'Avançado',
    color: 'bg-blue-600'
  },
  {
    id: 'communication-video',
    name: 'Videoconferência',
    description: 'Plataforma de videoconferências',
    category: 'communication',
    features: ['Salas virtuais', 'Compartilhamento tela', 'Gravação', 'Chat'],
    icon: Video,
    difficulty: 'Avançado',
    color: 'bg-purple-600'
  },
  {
    id: 'communication-newsletter',
    name: 'Newsletter System',
    description: 'Sistema para envio de newsletters',
    category: 'communication',
    features: ['Editor newsletters', 'Listas segmentadas', 'Templates', 'Analytics'],
    icon: Mail,
    difficulty: 'Intermediário',
    color: 'bg-green-600'
  },

  // Additional WhatsApp Bots for various niches
  {
    id: 'whatsapp-bot-loja-roupas',
    name: 'Bot WhatsApp Loja Roupas',
    description: 'Bot especializado para lojas de roupas e moda',
    category: 'business',
    features: ['Catálogo moda', 'Provador virtual', 'Tendências', 'Medidas'],
    icon: Shirt,
    difficulty: 'Intermediário',
    color: 'bg-pink-500'
  },
  {
    id: 'whatsapp-bot-joalheria',
    name: 'Bot WhatsApp Joalheria',
    description: 'Bot para joalherias e bijuterias',
    category: 'business',
    features: ['Catálogo joias', 'Personalização', 'Certificados', 'Avaliações'],
    icon: Diamond,
    difficulty: 'Intermediário',
    color: 'bg-yellow-500'
  },
  {
    id: 'whatsapp-bot-construcao',
    name: 'Bot WhatsApp Construção',
    description: 'Bot para empresas de construção civil',
    category: 'business',
    features: ['Orçamentos obra', 'Projetos', 'Materiais', 'Cronograma'],
    icon: Hammer,
    difficulty: 'Avançado',
    color: 'bg-orange-700'
  },
  {
    id: 'whatsapp-bot-fotografia',
    name: 'Bot WhatsApp Fotógrafo',
    description: 'Bot para fotógrafos e estúdios',
    category: 'business',
    features: ['Portfolio', 'Agendamentos', 'Pacotes', 'Galeria'],
    icon: Camera,
    difficulty: 'Intermediário',
    color: 'bg-gray-600'
  },
  {
    id: 'whatsapp-bot-musica',
    name: 'Bot WhatsApp Escola Música',
    description: 'Bot para escolas de música e professores',
    category: 'business',
    features: ['Aulas música', 'Instrumentos', 'Horários', 'Recitais'],
    icon: Music,
    difficulty: 'Intermediário',
    color: 'bg-purple-600'
  },
  {
    id: 'whatsapp-bot-flores',
    name: 'Bot WhatsApp Floricultura',
    description: 'Bot para floriculturas e arranjos',
    category: 'business',
    features: ['Catálogo flores', 'Ocasiões especiais', 'Delivery', 'Cuidados'],
    icon: Flower,
    difficulty: 'Intermediário',
    color: 'bg-pink-600'
  },
  {
    id: 'whatsapp-bot-eletronicos',
    name: 'Bot WhatsApp Eletrônicos',
    description: 'Bot para lojas de eletrônicos',
    category: 'business',
    features: ['Produtos tech', 'Especificações', 'Garantia', 'Assistência'],
    icon: Smartphone,
    difficulty: 'Intermediário',
    color: 'bg-blue-700'
  },
  {
    id: 'whatsapp-bot-livros',
    name: 'Bot WhatsApp Livraria',
    description: 'Bot para livrarias e sebos',
    category: 'business',
    features: ['Catálogo livros', 'Recomendações', 'Reservas', 'Eventos'],
    icon: BookOpen,
    difficulty: 'Intermediário',
    color: 'bg-indigo-600'
  },
  {
    id: 'whatsapp-bot-casa-decoracao',
    name: 'Bot WhatsApp Casa & Decoração',
    description: 'Bot para lojas de decoração e móveis',
    category: 'business',
    features: ['Móveis', 'Decoração', 'Medidas', 'Projetos'],
    icon: Home,
    difficulty: 'Intermediário',
    color: 'bg-orange-600'
  },
  {
    id: 'whatsapp-bot-brinquedos',
    name: 'Bot WhatsApp Loja Brinquedos',
    description: 'Bot para lojas de brinquedos infantis',
    category: 'business',
    features: ['Brinquedos por idade', 'Educativos', 'Segurança', 'Novidades'],
    icon: Gamepad2,
    difficulty: 'Intermediário',
    color: 'bg-yellow-600'
  }
];

export const getTemplatesByCategory = (category: string) => {
  return projectTemplates.filter(template => template.category === category);
};

export const getAllCategories = () => {
  return Array.from(new Set(projectTemplates.map(template => template.category)));
};

export const searchTemplates = (searchTerm: string) => {
  const term = searchTerm.toLowerCase();
  return projectTemplates.filter(template => 
    template.name.toLowerCase().includes(term) ||
    template.description.toLowerCase().includes(term) ||
    template.features.some(feature => feature.toLowerCase().includes(term))
  );
};
