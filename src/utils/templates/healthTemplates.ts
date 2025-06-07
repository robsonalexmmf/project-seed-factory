
import { 
  Heart, 
  Activity, 
  Stethoscope, 
  Pill, 
  Calendar, 
  Users, 
  Shield, 
  FileText, 
  BarChart3, 
  Clock, 
  User, 
  CheckCircle, 
  AlertCircle, 
  Brain, 
  Eye, 
  Smile, 
  Target, 
  TrendingUp, 
  Database, 
  Cloud, 
  Smartphone, 
  Monitor, 
  Video, 
  MessageSquare, 
  Phone, 
  Mail, 
  Bell, 
  Settings, 
  Lock, 
  Key, 
  Search, 
  Filter, 
  Edit, 
  Save, 
  Upload, 
  Download, 
  Share, 
  Bookmark, 
  Star, 
  Flag, 
  Award, 
  Trophy, 
  Medal, 
  Zap, 
  Battery, 
  Wifi, 
  Bluetooth, 
  Signal, 
  Globe, 
  Map, 
  Navigation, 
  MapPin, 
  Home, 
  Building, 
  Car, 
  Plane, 
  Train, 
  Bus, 
  Bike, 
  Route, 
  Compass, 
  Sun, 
  Moon, 
  CloudRain, 
  Wind, 
  Thermometer, 
  Umbrella, 
  TreePine, 
  Flower, 
  Leaf, 
  Bug, 
  Fish, 
  Bird, 
  Dog, 
  Cat, 
  Apple, 
  Coffee, 
  Pizza, 
  Cake, 
  IceCream, 
  Wine, 
  Beer, 
  UtensilsCrossed, 
  ChefHat, 
  Baby, 
  UserPlus, 
  UserMinus, 
  UserCheck, 
  UserX, 
  UsersRound, 
  Contact, 
  IdCard, 
  Badge, 
  ShieldCheck, 
  Fingerprint, 
  Scan, 
  QrCode, 
  Barcode, 
  Tag, 
  Tags, 
  Link, 
  ExternalLink, 
  Hash, 
  AtSign, 
  Percent, 
  Info, 
  HelpCircle, 
  AlertTriangle, 
  XCircle, 
  Loader, 
  RefreshCw, 
  RotateCw, 
  RotateCcw, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ArrowRight, 
  ChevronUp, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  MoreHorizontal, 
  MoreVertical, 
  Menu, 
  Grid, 
  Layers, 
  Move, 
  Copy, 
  Trash, 
  Plus, 
  Minus, 
  X, 
  Check, 
  Archive, 
  Folder, 
  File, 
  FileImage, 
  FileVideo, 
  FileAudio, 
  Image, 
  Music, 
  Headphones, 
  Mic, 
  Speaker, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  FastForward, 
  Rewind, 
  Repeat, 
  Shuffle, 
  Radio, 
  Tv, 
  Laptop, 
  Tablet, 
  Watch, 
  Camera, 
  Webcam, 
  Printer, 
  Keyboard, 
  Mouse, 
  HardDrive, 
  Server, 
  Usb, 
  Cable, 
  Plug, 
  Power, 
  Antenna, 
  Router, 
  CircuitBoard, 
  MemoryStick, 
  Cpu, 
  MousePointer,
  Scale,
  Calculator,
  Timer,
  Microscope,
  Bot,
  FlaskConical,
  Dna,
  Atom,
  Telescope,
  Syringe,
  Bandage,
  HeartPulse,
  Lightbulb,
  Flashlight,
  Flame,
  Earth,
  Satellite,
  Rocket,
  Gamepad2,
  BookOpen,
  GraduationCap,
  PenTool,
  Palette,
  Brush,
  Type,
  Bold,
  Italic,
  Underline,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Quote,
  Code,
  Terminal,
  GitBranch,
  Github,
  Square,
  Circle,
  Triangle,
  Diamond,
  Hexagon,
  Crown,
  Gem,
  Coins,
  DollarSign,
  CreditCard,
  Wallet,
  ShoppingCart,
  Package,
  Truck,
  Wrench,
  Hammer,
  Ruler,
  Scissors,
  PaintBucket,
  Eraser,
  Crop,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Focus,
  TrendingDown,
  BarChart,
  LineChart,
  PieChart,
  AreaChart,
  ScatterChart
} from 'lucide-react';

import { ProjectTemplate } from '../projectTemplates';

export const healthTemplates: ProjectTemplate[] = [
  {
    id: 'health-tracker',
    name: 'Rastreador de Saúde',
    description: 'Monitor completo de saúde e bem-estar',
    icon: Heart,
    complexity: 'medium',
    features: [
      'Monitoramento de sinais vitais',
      'Histórico médico',
      'Lembretes de medicação',
      'Relatórios personalizados',
      'Integração com wearables',
      'Compartilhamento com médicos'
    ]
  },
  {
    id: 'fitness-app',
    name: 'Aplicativo Fitness',
    description: 'Seu personal trainer virtual',
    icon: Activity,
    complexity: 'medium',
    features: [
      'Planos de treino',
      'Contador de calorias',
      'Progresso de exercícios',
      'Desafios semanais',
      'Integração com dispositivos',
      'Comunidade fitness'
    ]
  },
  {
    id: 'telemedicine',
    name: 'Telemedicina',
    description: 'Consultas médicas online',
    icon: Stethoscope,
    complexity: 'hard',
    features: [
      'Videochamadas médicas',
      'Agendamento online',
      'Prontuário eletrônico',
      'Prescrições digitais',
      'Pagamento integrado',
      'Histórico de consultas'
    ]
  },
  {
    id: 'medication-reminder',
    name: 'Lembrete de Medicação',
    description: 'Nunca esqueça seus remédios',
    icon: Pill,
    complexity: 'easy',
    features: [
      'Alarmes personalizados',
      'Múltiplos medicamentos',
      'Histórico de doses',
      'Estoque de remédios',
      'Relatórios para médicos',
      'Modo emergência'
    ]
  },
  {
    id: 'appointment-scheduler',
    name: 'Agendador Médico',
    description: 'Sistema de agendamento para clínicas',
    icon: Calendar,
    complexity: 'medium',
    features: [
      'Calendário médico',
      'Confirmação automática',
      'Lista de espera',
      'Histórico de pacientes',
      'Notificações SMS',
      'Relatórios de ocupação'
    ]
  },
  {
    id: 'nutrition-tracker',
    name: 'Rastreador Nutricional',
    description: 'Monitore sua alimentação',
    icon: Apple,
    complexity: 'medium',
    features: [
      'Diário alimentar',
      'Contagem de calorias',
      'Macronutrientes',
      'Scanner de códigos',
      'Receitas saudáveis',
      'Metas nutricionais'
    ]
  },
  {
    id: 'mental-health',
    name: 'Saúde Mental',
    description: 'Cuidados com bem-estar emocional',
    icon: Brain,
    complexity: 'medium',
    features: [
      'Diário de humor',
      'Exercícios de mindfulness',
      'Sessões de meditação',
      'Terapia online',
      'Questionários psicológicos',
      'Rede de apoio'
    ]
  },
  {
    id: 'sleep-tracker',
    name: 'Monitor de Sono',
    description: 'Analise e melhore seu sono',
    icon: Moon,
    complexity: 'medium',
    features: [
      'Fases do sono',
      'Qualidade do sono',
      'Ronco detection',
      'Despertador inteligente',
      'Ambiente de sono',
      'Relatórios semanais'
    ]
  },
  {
    id: 'symptom-checker',
    name: 'Verificador de Sintomas',
    description: 'IA para análise de sintomas',
    icon: CheckCircle,
    complexity: 'hard',
    features: [
      'Questionário interativo',
      'Diagnóstico preliminar',
      'Recomendações médicas',
      'Histórico de sintomas',
      'Encaminhamento especialista',
      'Base de conhecimento médico'
    ]
  },
  {
    id: 'medical-records',
    name: 'Prontuário Eletrônico',
    description: 'Gestão completa de registros médicos',
    icon: FileText,
    complexity: 'hard',
    features: [
      'Histórico completo',
      'Exames médicos',
      'Prescrições',
      'Alergias e condições',
      'Compartilhamento seguro',
      'Backup na nuvem'
    ]
  },
  {
    id: 'lab-results',
    name: 'Resultados de Exames',
    description: 'Portal para resultados laboratoriais',
    icon: BarChart3,
    complexity: 'medium',
    features: [
      'Resultados online',
      'Histórico de exames',
      'Gráficos de tendência',
      'Comparação de valores',
      'Notificações de resultados',
      'Integração com médicos'
    ]
  },
  {
    id: 'pharmacy-locator',
    name: 'Localizador de Farmácias',
    description: 'Encontre farmácias próximas',
    icon: MapPin,
    complexity: 'easy',
    features: [
      'Geolocalização',
      'Farmácias 24h',
      'Disponibilidade de medicamentos',
      'Preços comparativos',
      'Reserva de medicamentos',
      'Avaliações de usuários'
    ]
  },
  {
    id: 'emergency-services',
    name: 'Serviços de Emergência',
    description: 'Acesso rápido a emergências médicas',
    icon: AlertCircle,
    complexity: 'medium',
    features: [
      'Botão de emergência',
      'Contatos de emergência',
      'Localização automática',
      'Informações médicas vitais',
      'Chat com paramédicos',
      'Histórico de emergências'
    ]
  },
  {
    id: 'physical-therapy',
    name: 'Fisioterapia Virtual',
    description: 'Exercícios de reabilitação',
    icon: Activity,
    complexity: 'medium',
    features: [
      'Exercícios guiados',
      'Vídeos demonstrativos',
      'Progresso de reabilitação',
      'Lembretes de exercícios',
      'Comunicação com fisioterapeuta',
      'Gamificação'
    ]
  },
  {
    id: 'eye-care',
    name: 'Cuidados Oculares',
    description: 'Monitoramento da saúde ocular',
    icon: Eye,
    complexity: 'medium',
    features: [
      'Testes de visão',
      'Exercícios para os olhos',
      'Lembretes de pausas',
      'Histórico oftalmológico',
      'Filtro de luz azul',
      'Agendamento consultas'
    ]
  },
  {
    id: 'dental-care',
    name: 'Cuidados Dentários',
    description: 'Saúde bucal em dia',
    icon: Smile,
    complexity: 'easy',
    features: [
      'Lembretes de escovação',
      'Histórico dental',
      'Dicas de higiene',
      'Agendamento dentista',
      'Progresso do tratamento',
      'Educação bucal'
    ]
  },
  {
    id: 'weight-management',
    name: 'Controle de Peso',
    description: 'Gerencie seu peso de forma saudável',
    icon: TrendingUp,
    complexity: 'medium',
    features: [
      'Registro de peso',
      'Metas personalizadas',
      'Análise de progresso',
      'Dicas nutricionais',
      'Calculadora IMC',
      'Motivação diária'
    ]
  },
  {
    id: 'diabetes-manager',
    name: 'Gestor de Diabetes',
    description: 'Controle completo da diabetes',
    icon: Heart,
    complexity: 'hard',
    features: [
      'Monitoramento de glicose',
      'Registro de insulina',
      'Contagem de carboidratos',
      'Relatórios médicos',
      'Alertas de emergência',
      'Integração com medidores'
    ]
  },
  {
    id: 'pregnancy-tracker',
    name: 'Acompanhamento da Gravidez',
    description: 'Monitore sua gravidez semana a semana',
    icon: Baby,
    complexity: 'medium',
    features: [
      'Calendário gestacional',
      'Desenvolvimento do bebê',
      'Registro de sintomas',
      'Consultas pré-natal',
      'Lista de enxoval',
      'Comunidade de mães'
    ]
  },
  {
    id: 'vaccine-tracker',
    name: 'Carteira de Vacinação',
    description: 'Controle suas vacinas e imunizações',
    icon: Shield,
    complexity: 'easy',
    features: [
      'Histórico de vacinas',
      'Lembretes de reforço',
      'Calendário vacinal',
      'Certificados digitais',
      'Alertas de surtos',
      'Família completa'
    ]
  },
  {
    id: 'blood-pressure-monitor',
    name: 'Monitor de Pressão',
    description: 'Acompanhe sua pressão arterial',
    icon: HeartPulse,
    complexity: 'medium',
    features: [
      'Registro de pressão',
      'Gráficos de tendência',
      'Alertas de risco',
      'Metas de controle',
      'Relatórios médicos',
      'Fatores de risco'
    ]
  },
  {
    id: 'meditation-app',
    name: 'App de Meditação',
    description: 'Práticas de mindfulness e meditação',
    icon: Brain,
    complexity: 'medium',
    features: [
      'Sessões guiadas',
      'Múltiplas técnicas',
      'Progresso pessoal',
      'Sons relaxantes',
      'Lembretes diários',
      'Comunidade zen'
    ]
  },
  {
    id: 'allergy-tracker',
    name: 'Rastreador de Alergias',
    description: 'Monitore e gerencie suas alergias',
    icon: AlertTriangle,
    complexity: 'medium',
    features: [
      'Registro de alergias',
      'Diário de sintomas',
      'Identificação de gatilhos',
      'Alertas ambientais',
      'Medicação de emergência',
      'Relatórios médicos'
    ]
  },
  {
    id: 'heart-rate-monitor',
    name: 'Monitor Cardíaco',
    description: 'Acompanhe sua frequência cardíaca',
    icon: Heart,
    complexity: 'medium',
    features: [
      'Monitoramento contínuo',
      'Zonas de treinamento',
      'Alertas de anomalias',
      'Histórico detalhado',
      'Integração com wearables',
      'Relatórios cardíacos'
    ]
  },
  {
    id: 'medical-reminder',
    name: 'Lembretes Médicos',
    description: 'Nunca perca uma consulta ou exame',
    icon: Bell,
    complexity: 'easy',
    features: [
      'Consultas agendadas',
      'Exames de rotina',
      'Medicações',
      'Notificações push',
      'Múltiplos perfis',
      'Histórico completo'
    ]
  },
  {
    id: 'wellness-coach',
    name: 'Coach de Bem-estar',
    description: 'IA personalizada para sua saúde',
    icon: Bot,
    complexity: 'hard',
    features: [
      'Recomendações personalizadas',
      'Planos de saúde adaptativos',
      'Análise de hábitos',
      'Metas inteligentes',
      'Feedback contínuo',
      'Integração total'
    ]
  },
  {
    id: 'hydration-tracker',
    name: 'Monitor de Hidratação',
    description: 'Mantenha-se sempre hidratado',
    icon: Coffee,
    complexity: 'easy',
    features: [
      'Registro de líquidos',
      'Metas personalizadas',
      'Lembretes inteligentes',
      'Tipos de bebidas',
      'Estatísticas diárias',
      'Hidratação familiar'
    ]
  },
  {
    id: 'posture-corrector',
    name: 'Corretor de Postura',
    description: 'Melhore sua postura no trabalho',
    icon: User,
    complexity: 'medium',
    features: [
      'Detecção de postura',
      'Alertas em tempo real',
      'Exercícios corretivos',
      'Pausas inteligentes',
      'Progresso postural',
      'Ergonomia no trabalho'
    ]
  },
  {
    id: 'women-health',
    name: 'Saúde da Mulher',
    description: 'Acompanhamento completo da saúde feminina',
    icon: Heart,
    complexity: 'medium',
    features: [
      'Ciclo menstrual',
      'Fertilidade',
      'Sintomas PMS',
      'Contraceptivos',
      'Menopausa',
      'Saúde reprodutiva'
    ]
  },
  {
    id: 'elderly-care',
    name: 'Cuidados com Idosos',
    description: 'Monitoramento e cuidados para terceira idade',
    icon: Heart,
    complexity: 'hard',
    features: [
      'Monitoramento remoto',
      'Medicações múltiplas',
      'Emergências automáticas',
      'Comunicação família',
      'Exercícios adaptados',
      'Acompanhamento médico'
    ]
  },
  {
    id: 'drug-interaction',
    name: 'Interações Medicamentosas',
    description: 'Verifique interações entre medicamentos',
    icon: Pill,
    complexity: 'hard',
    features: [
      'Base de dados médica',
      'Verificação automática',
      'Alertas de risco',
      'Informações detalhadas',
      'Alternativas seguras',
      'Consulta profissional'
    ]
  },
  {
    id: 'pain-tracker',
    name: 'Rastreador de Dor',
    description: 'Monitore e analise padrões de dor',
    icon: Target,
    complexity: 'medium',
    features: [
      'Escala de dor',
      'Localização anatômica',
      'Triggers identificados',
      'Medicação eficaz',
      'Padrões temporais',
      'Relatórios médicos'
    ]
  },
  {
    id: 'calorie-counter',
    name: 'Contador de Calorias',
    description: 'Controle sua ingestão calórica diária',
    icon: Calculator,
    complexity: 'medium',
    features: [
      'Base de alimentos',
      'Scanner de códigos',
      'Receitas personalizadas',
      'Metas nutricionais',
      'Macronutrientes',
      'Progresso visual'
    ]
  },
  {
    id: 'stress-monitor',
    name: 'Monitor de Estresse',
    description: 'Detecte e gerencie seus níveis de estresse',
    icon: Brain,
    complexity: 'hard',
    features: [
      'Detecção automática',
      'Exercícios de relaxamento',
      'Respiração guiada',
      'Análise de padrões',
      'Técnicas de coping',
      'Alertas preventivos'
    ]
  },
  {
    id: 'rehab-assistant',
    name: 'Assistente de Reabilitação',
    description: 'Suporte completo para reabilitação',
    icon: Activity,
    complexity: 'hard',
    features: [
      'Protocolo personalizado',
      'Exercícios adaptados',
      'Progresso mensurado',
      'Comunicação equipe',
      'Gamificação',
      'Realidade virtual'
    ]
  },
  {
    id: 'air-quality-monitor',
    name: 'Monitor de Qualidade do Ar',
    description: 'Monitore a qualidade do ar para sua saúde',
    icon: Wind,
    complexity: 'medium',
    features: [
      'Dados em tempo real',
      'Alertas de poluição',
      'Recomendações de atividades',
      'Histórico local',
      'Impacto na saúde',
      'Filtros recomendados'
    ]
  },
  {
    id: 'first-aid-guide',
    name: 'Guia de Primeiros Socorros',
    description: 'Instruções de emergência médica',
    icon: Shield,
    complexity: 'easy',
    features: [
      'Procedimentos passo-a-passo',
      'Vídeos demonstrativos',
      'Busca por sintomas',
      'Contatos de emergência',
      'Treinamento virtual',
      'Atualizações médicas'
    ]
  },
  {
    id: 'body-measurement',
    name: 'Medidas Corporais',
    description: 'Acompanhe as mudanças no seu corpo',
    icon: Ruler,
    complexity: 'easy',
    features: [
      'Múltiplas medidas',
      'Progresso visual',
      'Metas personalizadas',
      'Fotos de progresso',
      'Análise de composição',
      'Motivação constante'
    ]
  },
  {
    id: 'health-insurance',
    name: 'Gestor de Plano de Saúde',
    description: 'Gerencie seu plano de saúde',
    icon: Shield,
    complexity: 'medium',
    features: [
      'Cobertura detalhada',
      'Rede credenciada',
      'Autorizações',
      'Reembolsos',
      'Histórico de uso',
      'Comparação de planos'
    ]
  },
  {
    id: 'health-wallet',
    name: 'Carteira de Saúde Digital',
    description: 'Todos seus documentos de saúde em um lugar',
    icon: Wallet,
    complexity: 'hard',
    features: [
      'Documentos digitais',
      'Assinatura blockchain',
      'Compartilhamento seguro',
      'Backup na nuvem',
      'Acesso offline',
      'Verificação médica'
    ]
  },
  {
    id: 'lab-booking',
    name: 'Agendamento de Exames',
    description: 'Agende exames laboratoriais facilmente',
    icon: Calendar,
    complexity: 'medium',
    features: [
      'Laboratórios próximos',
      'Agendamento online',
      'Preparação para exames',
      'Lembretes automáticos',
      'Resultados digitais',
      'Histórico completo'
    ]
  },
  {
    id: 'medicine-identifier',
    name: 'Identificador de Medicamentos',
    description: 'Identifique medicamentos por foto',
    icon: Scan,
    complexity: 'hard',
    features: [
      'Reconhecimento por imagem',
      'Base de dados completa',
      'Informações detalhadas',
      'Posologia correta',
      'Contraindicações',
      'Genéricos disponíveis'
    ]
  }
];
