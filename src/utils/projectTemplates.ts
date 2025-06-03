
import {
  Code, Database, Globe, Smartphone, Users, ShoppingCart, Calendar, 
  CreditCard, BarChart, MessageSquare, Mail, Lock, Settings, Search,
  FileText, Image, Video, Music, Book, Newspaper, Camera, Mic,
  MapPin, Car, Plane, Train, Home, Building, Store, Factory,
  Heart, Activity, Pill, Stethoscope, Brain, Eye, Ear, Hand,
  Gamepad2, Trophy, Target, Dice1, Puzzle, Sword, Shield, Crown,
  Palette, Brush, Scissors, Ruler, PenTool, Layers, Grid, Move,
  Sun, Moon, Cloud, Umbrella, Snowflake, Thermometer, Wind, Zap,
  Leaf, TreePine, Flower, Bug, Fish, Bird, Cat, Dog, Rabbit, Star,
  Coins, TrendingDown, Calculator, Receipt, Banknote, Wallet,
  GraduationCap, BookOpen, Pencil, Backpack, Apple, Coffee, Pizza,
  Utensils, Wine, IceCream, Cake, Donut, Cookie, Sandwich, Salad,
  Dumbbell, Bike, Check, Award, Medal, Flag,
  Shirt, Watch, Glasses, Baby, Users2, UserPlus, UserMinus, UserCheck, UserX, Group,
  Truck, Package2, Boxes, Warehouse, Package, Box, Clipboard,
  Badge, Ribbon, Recycle, Trash, Archive, Folder, File, Upload, Download,
  TrendingUp, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, RotateCw,
  Play, Pause, SkipForward, SkipBack, Volume2, VolumeX,
  Monitor, Tablet, Mouse, Keyboard, Printer, Wifi, Bluetooth,
  Clock, Timer, AlarmClock, Hourglass, Calendar as CalendarIcon,
  Phone, MessageCircle, AtSign, Send, Inbox, Archive as ArchiveIcon,
  Share, ThumbsUp, ThumbsDown, Heart as HeartIcon,
  Sprout, Cherry, Grape, Banana,
  Wrench, Hammer, Drill, Pickaxe, Shovel,
  Paintbrush, PaintBucket, Eraser, Highlighter
} from 'lucide-react';

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  icon: any;
  color: string;
  features: string[];
  techStack: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  popular?: boolean;
}

export const templateCategories = [
  { id: 'all', name: 'Todos', icon: Grid },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
  { id: 'social', name: 'Redes Sociais', icon: Users },
  { id: 'productivity', name: 'Produtividade', icon: Check },
  { id: 'education', name: 'Educação', icon: BookOpen },
  { id: 'health', name: 'Saúde', icon: Heart },
  { id: 'finance', name: 'Finanças', icon: Coins },
  { id: 'entertainment', name: 'Entretenimento', icon: Gamepad2 },
  { id: 'travel', name: 'Viagens', icon: MapPin },
  { id: 'business', name: 'Negócios', icon: Building },
  { id: 'other', name: 'Outros', icon: Star }
];

export const templates: ProjectTemplate[] = [
  // E-commerce & Vendas
  {
    id: 'ecommerce-basic',
    name: 'Loja Online Básica',
    description: 'Plataforma completa de e-commerce com carrinho, pagamentos e gestão de produtos',
    category: 'ecommerce',
    subcategory: 'Loja Virtual',
    icon: ShoppingCart,
    color: 'from-green-500 to-emerald-600',
    features: ['Catálogo de produtos', 'Carrinho de compras', 'Sistema de pagamento', 'Painel administrativo'],
    techStack: ['React', 'Supabase', 'Stripe', 'Tailwind'],
    difficulty: 'intermediate',
    estimatedTime: '2-3 dias'
  },
  {
    id: 'ecommerce-advanced',
    name: 'Marketplace Avançado',
    description: 'Marketplace multi-vendedores com avaliações, chat e sistema de comissões',
    category: 'ecommerce',
    subcategory: 'Marketplace',
    icon: Store,
    color: 'from-purple-500 to-pink-600',
    features: ['Multi-vendedores', 'Avaliações e comentários', 'Chat interno', 'Sistema de comissões'],
    techStack: ['Next.js', 'Supabase', 'Stripe', 'Tailwind'],
    difficulty: 'advanced',
    estimatedTime: '5-7 dias',
    popular: true
  },
  // Redes Sociais
  {
    id: 'social-network',
    name: 'Rede Social Básica',
    description: 'Rede social com feed, perfis, seguidores e curtidas',
    category: 'social',
    subcategory: 'Rede Social',
    icon: Users,
    color: 'from-blue-500 to-cyan-600',
    features: ['Feed de posts', 'Perfis de usuário', 'Sistema de seguidores', 'Curtidas e comentários'],
    techStack: ['React', 'Supabase', 'Tailwind'],
    difficulty: 'intermediate',
    estimatedTime: '3-4 dias'
  },
  {
    id: 'social-chat',
    name: 'App de Chat',
    description: 'Aplicativo de mensagens em tempo real com grupos e notificações',
    category: 'social',
    subcategory: 'Chat',
    icon: MessageSquare,
    color: 'from-indigo-500 to-purple-600',
    features: ['Mensagens em tempo real', 'Grupos de chat', 'Notificações push', 'Status online'],
    techStack: ['React', 'Supabase', 'Pusher', 'Tailwind'],
    difficulty: 'advanced',
    estimatedTime: '4-6 dias'
  },
  // Produtividade
  {
    id: 'task-manager',
    name: 'Gerenciador de Tarefas',
    description: 'Aplicativo para criar, editar e organizar tarefas com prazos e prioridades',
    category: 'productivity',
    subcategory: 'Tarefas',
    icon: Check,
    color: 'from-yellow-500 to-orange-600',
    features: ['Listas de tarefas', 'Prazos e lembretes', 'Prioridades', 'Filtros e categorias'],
    techStack: ['React', 'Supabase', 'Tailwind'],
    difficulty: 'beginner',
    estimatedTime: '1-2 dias'
  },
  {
    id: 'calendar-app',
    name: 'Calendário e Agenda',
    description: 'Calendário interativo com eventos, lembretes e integração com Google Calendar',
    category: 'productivity',
    subcategory: 'Calendário',
    icon: CalendarIcon,
    color: 'from-red-500 to-pink-600',
    features: ['Eventos e lembretes', 'Visualização mensal/semanal', 'Integração Google Calendar'],
    techStack: ['React', 'Supabase', 'Tailwind'],
    difficulty: 'intermediate',
    estimatedTime: '3-4 dias'
  },
  // Educação
  {
    id: 'online-course',
    name: 'Plataforma de Cursos Online',
    description: 'Sistema para criar e vender cursos com vídeos, quizzes e certificados',
    category: 'education',
    subcategory: 'Cursos Online',
    icon: BookOpen,
    color: 'from-indigo-500 to-blue-600',
    features: ['Upload de vídeos', 'Quizzes interativos', 'Certificados digitais', 'Área do aluno'],
    techStack: ['Next.js', 'Supabase', 'Stripe', 'Tailwind'],
    difficulty: 'advanced',
    estimatedTime: '5-7 dias',
    popular: true
  },
  {
    id: 'language-learning',
    name: 'App de Aprendizado de Idiomas',
    description: 'Aplicativo para aprender idiomas com lições, flashcards e testes',
    category: 'education',
    subcategory: 'Aprendizado',
    icon: Globe,
    color: 'from-green-500 to-teal-600',
    features: ['Lições interativas', 'Flashcards', 'Testes e avaliações', 'Progresso do usuário'],
    techStack: ['React Native', 'Supabase', 'Tailwind'],
    difficulty: 'advanced',
    estimatedTime: '6-8 dias'
  },
  // Saúde
  {
    id: 'health-tracker',
    name: 'Monitor de Saúde',
    description: 'App para acompanhar atividades físicas, alimentação e sono',
    category: 'health',
    subcategory: 'Monitoramento',
    icon: Heart,
    color: 'from-red-500 to-pink-600',
    features: ['Registro de atividades', 'Controle alimentar', 'Monitoramento do sono', 'Relatórios semanais'],
    techStack: ['React Native', 'Supabase', 'Tailwind'],
    difficulty: 'intermediate',
    estimatedTime: '3-5 dias'
  },
  {
    id: 'telemedicine',
    name: 'Plataforma de Telemedicina',
    description: 'Consulta médica online com agendamento, videochamada e histórico',
    category: 'health',
    subcategory: 'Telemedicina',
    icon: Video,
    color: 'from-blue-500 to-cyan-600',
    features: ['Agendamento', 'Videochamada', 'Histórico de consultas', 'Prescrições digitais'],
    techStack: ['Next.js', 'Supabase', 'WebRTC', 'Tailwind'],
    difficulty: 'advanced',
    estimatedTime: '7-10 dias'
  },
  // Finanças
  {
    id: 'budget-app',
    name: 'App de Orçamento Pessoal',
    description: 'Controle de gastos, receitas e metas financeiras pessoais',
    category: 'finance',
    subcategory: 'Orçamento',
    icon: Wallet,
    color: 'from-yellow-500 to-amber-600',
    features: ['Registro de despesas', 'Categorias personalizadas', 'Metas financeiras', 'Relatórios gráficos'],
    techStack: ['React', 'Supabase', 'Tailwind'],
    difficulty: 'intermediate',
    estimatedTime: '3-4 dias'
  },
  {
    id: 'invoice-system',
    name: 'Sistema de Faturamento',
    description: 'Gerar e enviar faturas para clientes com controle de pagamentos',
    category: 'finance',
    subcategory: 'Faturamento',
    icon: Receipt,
    color: 'from-purple-500 to-indigo-600',
    features: ['Criação de faturas', 'Envio por email', 'Controle de pagamentos', 'Relatórios'],
    techStack: ['Next.js', 'Supabase', 'Tailwind'],
    difficulty: 'advanced',
    estimatedTime: '5-6 dias'
  },
  // Entretenimento
  {
    id: 'music-player',
    name: 'Player de Música',
    description: 'Aplicativo para ouvir músicas, criar playlists e compartilhar',
    category: 'entertainment',
    subcategory: 'Música',
    icon: Music,
    color: 'from-pink-500 to-red-600',
    features: ['Reprodução de músicas', 'Playlists', 'Compartilhamento', 'Favoritos'],
    techStack: ['React Native', 'Supabase', 'Tailwind'],
    difficulty: 'intermediate',
    estimatedTime: '3-5 dias'
  },
  {
    id: 'video-streaming',
    name: 'Streaming de Vídeo',
    description: 'Plataforma para transmitir vídeos ao vivo e sob demanda',
    category: 'entertainment',
    subcategory: 'Vídeo',
    icon: Video,
    color: 'from-red-500 to-orange-600',
    features: ['Transmissão ao vivo', 'Vídeos sob demanda', 'Chat ao vivo', 'Assinaturas'],
    techStack: ['Next.js', 'Supabase', 'Tailwind'],
    difficulty: 'advanced',
    estimatedTime: '7-9 dias'
  },
  // Viagens
  {
    id: 'travel-planner',
    name: 'Planejador de Viagens',
    description: 'Organize roteiros, reservas e orçamentos para suas viagens',
    category: 'travel',
    subcategory: 'Planejamento',
    icon: MapPin,
    color: 'from-teal-500 to-cyan-600',
    features: ['Roteiros personalizados', 'Reservas integradas', 'Orçamento de viagem', 'Compartilhamento'],
    techStack: ['React', 'Supabase', 'Tailwind'],
    difficulty: 'intermediate',
    estimatedTime: '4-5 dias'
  },
  {
    id: 'hotel-booking',
    name: 'Reserva de Hotéis',
    description: 'Sistema para buscar, reservar e gerenciar hospedagens',
    category: 'travel',
    subcategory: 'Reserva',
    icon: Building,
    color: 'from-blue-500 to-indigo-600',
    features: ['Busca de hotéis', 'Reservas online', 'Avaliações', 'Gestão de reservas'],
    techStack: ['Next.js', 'Supabase', 'Tailwind'],
    difficulty: 'advanced',
    estimatedTime: '6-7 dias'
  },
  // Negócios
  {
    id: 'crm-basic',
    name: 'CRM Básico',
    description: 'Gerencie clientes, vendas e contatos em um só lugar',
    category: 'business',
    subcategory: 'CRM',
    icon: Users,
    color: 'from-green-600 to-emerald-700',
    features: ['Cadastro de clientes', 'Funil de vendas', 'Notas e tarefas', 'Relatórios'],
    techStack: ['React', 'Supabase', 'Tailwind'],
    difficulty: 'intermediate',
    estimatedTime: '3-4 dias'
  },
  {
    id: 'project-management',
    name: 'Gestão de Projetos',
    description: 'Organize equipes, tarefas e prazos com painéis e gráficos',
    category: 'business',
    subcategory: 'Gestão',
    icon: Clipboard,
    color: 'from-blue-600 to-cyan-700',
    features: ['Quadros Kanban', 'Calendário', 'Gráficos de progresso', 'Colaboração em equipe'],
    techStack: ['Next.js', 'Supabase', 'Tailwind'],
    difficulty: 'advanced',
    estimatedTime: '6-8 dias'
  }
];

// Funções de busca e filtro
export const getTemplatesByCategory = (categoryId: string): ProjectTemplate[] => {
  if (categoryId === 'all') return templates;
  return templates.filter(template => template.category === categoryId);
};

export const searchTemplates = (searchTerm: string): ProjectTemplate[] => {
  const term = searchTerm.toLowerCase();
  return templates.filter(template =>
    template.name.toLowerCase().includes(term) ||
    template.description.toLowerCase().includes(term) ||
    template.features.some(feature => feature.toLowerCase().includes(term)) ||
    template.techStack.some(tech => tech.toLowerCase().includes(term))
  );
};

// Exportar aliases para compatibilidade
export const categories = templateCategories;
export { templates as projectTemplates };
