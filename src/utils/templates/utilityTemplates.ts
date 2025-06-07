
import { 
  CheckCircle, 
  FileText, 
  Cloud, 
  Calculator, 
  Settings, 
  Calendar, 
  Clock, 
  Timer,
  Bell,
  Bookmark,
  Tag,
  Search,
  Filter,
  Archive,
  Folder,
  File,
  Edit,
  Copy,
  Share,
  Download,
  Upload,
  Image,
  Camera,
  Video,
  Music,
  Headphones,
  Speaker,
  Mic,
  Radio,
  Tv,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Router,
  Wifi,
  Bluetooth,
  Usb,
  HardDrive,
  Battery,
  Plug,
  Zap,
  Sun,
  Moon,
  Star,
  Heart,
  Award,
  Gift,
  Flag,
  Map,
  MapPin,
  Navigation,
  Compass,
  Globe,
  Plane,
  Car,
  Train,
  Bus,
  Bike,
  Ship,
  Truck,
  Route,
  CreditCard,
  Banknote,
  Coins,
  Wallet,
  TrendingUp,
  TrendingDown,
  BarChart,
  LineChart,
  PieChart,
  Activity,
  Thermometer,
  Scale,
  Ruler,
  Wrench,
  Hammer,
  Scissors,
  PaintBucket,
  Brush,
  Palette,
  Pen,
  Eraser,
  Highlighter,
  Paperclip,
  Lock,
  Unlock,
  Key,
  Shield,
  Eye,
  EyeOff,
  Fingerprint,
  Scan,
  QrCode,
  Barcode,
  Hash,
  AtSign,
  Percent,
  DollarSign,
  Plus,
  Minus,
  X,
  Check,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Move,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  Crop,
  Zoom,
  ZoomIn,
  ZoomOut,
  Focus,
  Aperture,
  Flashlight,
  Lightbulb,
  Snowflake,
  Droplets,
  Wind,
  Mountain,
  TreePine,
  Flower,
  Leaf,
  Sprout,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Apple,
  Cherry,
  Grape,
  Banana,
  Carrot,
  Pizza,
  Sandwich,
  Cookie,
  Cake,
  IceCream,
  Coffee,
  Beer,
  Wine,
  Martini,
  Soup,
  Salad,
  ChefHat,
  UtensilsCrossed,
  Baby,
  Users,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  UsersRound,
  UserRound,
  UserSquare,
  UserCircle,
  Contact,
  IdCard,
  Badge,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  ShieldBan,
  Microscope,
  Telescope,
  Magnet,
  Atom,
  Dna,
  Pill,
  Syringe,
  Bandage,
  Stethoscope,
  HeartPulse,
  Brain,
  Flame,
  Comet,
  Planet,
  Earth,
  Satellite,
  Alien,
  Bot,
  Terminal,
  Code,
  Code2,
  Database,
  Server,
  BookOpen,
  Book,
  Type,
  Grid,
  Volume2,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  RefreshCw,
  Power,
  Shuffle as ShuffleIcon,
  Link,
  Mail,
  MessageSquare,
  Send,
  Reply,
  Forward,
  Inbox,
  Trash,
  Trash2,
  Save,
  FolderOpen,
  FileEdit,
  FilePlus,
  FileMinus,
  FileCheck,
  FileX,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileSpreadsheet,
  FileBarChart,
  FileLineChart,
  ClipboardList,
  Clipboard,
  ClipboardCheck,
  ClipboardX,
  ClipboardCopy,
  PaintBucket as PaintIcon,
  PenTool,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Pentagon,
  Octagon,
  Diamond,
  RectangleHorizontal,
  RectangleVertical,
  Shapes,
  Layout,
  Sidebar,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  SplitSquareHorizontal,
  SplitSquareVertical,
  Columns,
  Rows,
  Table,
  Watch,
  Hourglass,
  Sunrise,
  Sunset,
  Stars,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Umbrella,
  Rainbow,
  Trees,
  Flower2,
  Squirrel,
  Building,
  Home,
  ShoppingBag,
  Receipt,
  Target,
  Smile,
  Briefcase
} from 'lucide-react';

import { ProjectTemplate } from '../projectTemplates';

export const utilityTemplates: ProjectTemplate[] = [
  {
    id: 'todo-app',
    name: 'Aplicativo de Tarefas',
    description: 'Um gerenciador de tarefas simples e eficiente para organizar sua rotina',
    icon: CheckCircle,
    complexity: 'easy',
    features: [
      'Adicionar e remover tarefas',
      'Marcar como concluído',
      'Filtros por status',
      'Armazenamento local',
      'Interface responsiva'
    ]
  },
  {
    id: 'note-taking-app',
    name: 'Aplicativo de Notas',
    description: 'Organize seus pensamentos com um sistema de notas avançado',
    icon: FileText,
    complexity: 'medium',
    features: [
      'Editor de texto rico',
      'Organização por pastas',
      'Busca avançada',
      'Sincronização na nuvem',
      'Marcação com tags',
      'Exportação em múltiplos formatos'
    ]
  },
  {
    id: 'weather-app',
    name: 'App de Clima',
    description: 'Aplicativo de previsão do tempo com dados em tempo real',
    icon: Cloud,
    complexity: 'medium',
    features: [
      'Previsão atual e semanal',
      'Múltiplas cidades',
      'Gráficos interativos',
      'Alertas meteorológicos',
      'Geolocalização automática',
      'Dados históricos'
    ]
  },
  {
    id: 'calculator',
    name: 'Calculadora Avançada',
    description: 'Calculadora científica com funções matemáticas completas',
    icon: Calculator,
    complexity: 'easy',
    features: [
      'Operações básicas',
      'Funções científicas',
      'Histórico de cálculos',
      'Conversão de unidades',
      'Modo programador',
      'Gráficos de funções'
    ]
  },
  {
    id: 'password-manager',
    name: 'Gerenciador de Senhas',
    description: 'Armazene e gerencie suas senhas com segurança',
    icon: Lock,
    complexity: 'hard',
    features: [
      'Criptografia AES-256',
      'Gerador de senhas',
      'Preenchimento automático',
      'Sincronização segura',
      'Autenticação biométrica',
      'Auditoria de segurança'
    ]
  },
  {
    id: 'file-manager',
    name: 'Gerenciador de Arquivos',
    description: 'Organize e gerencie seus arquivos de forma eficiente',
    icon: Folder,
    complexity: 'medium',
    features: [
      'Navegação por pastas',
      'Busca de arquivos',
      'Pré-visualização',
      'Compressão de arquivos',
      'Compartilhamento',
      'Backup automático'
    ]
  },
  {
    id: 'alarm-clock',
    name: 'Despertador',
    description: 'Despertador personalizável com múltiplas funcionalidades',
    icon: Clock,
    complexity: 'easy',
    features: [
      'Múltiplos alarmes',
      'Sons personalizados',
      'Soneca inteligente',
      'Timer e cronômetro',
      'Fuso horário mundial',
      'Modo noturno'
    ]
  },
  {
    id: 'unit-converter',
    name: 'Conversor de Unidades',
    description: 'Converta entre diferentes unidades de medida',
    icon: Settings,
    complexity: 'easy',
    features: [
      'Conversão de medidas',
      'Moedas em tempo real',
      'Temperatura',
      'Peso e volume',
      'Velocidade e distância',
      'Histórico de conversões'
    ]
  },
  {
    id: 'qr-code-generator',
    name: 'Gerador de QR Code',
    description: 'Crie e leia códigos QR facilmente',
    icon: QrCode,
    complexity: 'easy',
    features: [
      'Geração de QR codes',
      'Scanner de códigos',
      'Múltiplos formatos',
      'Personalização visual',
      'Histórico de códigos',
      'Compartilhamento rápido'
    ]
  },
  {
    id: 'color-picker',
    name: 'Seletor de Cores',
    description: 'Ferramenta completa para trabalhar com cores',
    icon: Palette,
    complexity: 'medium',
    features: [
      'Seletor de cores',
      'Paletas de cores',
      'Conversão entre formatos',
      'Análise de contraste',
      'Gerador de gradientes',
      'Biblioteca de cores'
    ]
  },
  {
    id: 'image-editor',
    name: 'Editor de Imagens',
    description: 'Editor de imagens com ferramentas básicas e filtros',
    icon: Image,
    complexity: 'hard',
    features: [
      'Edição básica',
      'Filtros e efeitos',
      'Ajustes de cor',
      'Redimensionamento',
      'Texto e anotações',
      'Múltiplos formatos'
    ]
  },
  {
    id: 'screen-recorder',
    name: 'Gravador de Tela',
    description: 'Grave e compartilhe sua tela facilmente',
    icon: Video,
    complexity: 'hard',
    features: [
      'Gravação de tela',
      'Gravação de áudio',
      'Anotações em tempo real',
      'Múltiplas resoluções',
      'Edição básica',
      'Compartilhamento direto'
    ]
  },
  {
    id: 'expense-tracker',
    name: 'Controle de Gastos',
    description: 'Gerencie suas finanças pessoais de forma inteligente',
    icon: BarChart,
    complexity: 'medium',
    features: [
      'Registro de receitas e despesas',
      'Categorização automática',
      'Relatórios visuais',
      'Metas de economia',
      'Lembretes de pagamento',
      'Exportação de dados'
    ]
  },
  {
    id: 'habit-tracker',
    name: 'Rastreador de Hábitos',
    description: 'Construa e mantenha hábitos saudáveis',
    icon: Target,
    complexity: 'medium',
    features: [
      'Múltiplos hábitos',
      'Streak tracking',
      'Estatísticas visuais',
      'Lembretes personalizáveis',
      'Metas mensais',
      'Análise de progresso'
    ]
  },
  {
    id: 'bookmark-manager',
    name: 'Gerenciador de Favoritos',
    description: 'Organize seus links favoritos da web',
    icon: Bookmark,
    complexity: 'medium',
    features: [
      'Organização por pastas',
      'Tags personalizadas',
      'Busca rápida',
      'Importação de navegadores',
      'Sincronização na nuvem',
      'Compartilhamento de coleções'
    ]
  },
  {
    id: 'pomodoro-timer',
    name: 'Timer Pomodoro',
    description: 'Melhore sua produtividade com a técnica Pomodoro',
    icon: Timer,
    complexity: 'easy',
    features: [
      'Ciclos Pomodoro',
      'Pausas automáticas',
      'Estatísticas de produtividade',
      'Sons personalizáveis',
      'Tarefas integradas',
      'Relatórios semanais'
    ]
  },
  {
    id: 'text-editor',
    name: 'Editor de Texto',
    description: 'Editor de texto simples e eficiente',
    icon: Edit,
    complexity: 'medium',
    features: [
      'Edição de texto',
      'Sintaxe highlighting',
      'Múltiplas abas',
      'Busca e substituição',
      'Contagem de palavras',
      'Múltiplos formatos'
    ]
  },
  {
    id: 'url-shortener',
    name: 'Encurtador de URLs',
    description: 'Encurte e gerencie seus links',
    icon: Link,
    complexity: 'medium',
    features: [
      'Encurtamento de URLs',
      'URLs personalizadas',
      'Estatísticas de cliques',
      'QR codes automáticos',
      'Data de expiração',
      'Proteção por senha'
    ]
  },
  {
    id: 'random-generator',
    name: 'Gerador Aleatório',
    description: 'Gere números, senhas e dados aleatórios',
    icon: ShuffleIcon,
    complexity: 'easy',
    features: [
      'Números aleatórios',
      'Senhas seguras',
      'Cores aleatórias',
      'Decisões sim/não',
      'Sorteio de listas',
      'UUID generator'
    ]
  },
  {
    id: 'markdown-editor',
    name: 'Editor Markdown',
    description: 'Editor Markdown com pré-visualização em tempo real',
    icon: FileText,
    complexity: 'medium',
    features: [
      'Edição Markdown',
      'Pré-visualização ao vivo',
      'Exportação HTML/PDF',
      'Tabelas e gráficos',
      'Matemática LaTeX',
      'Temas personalizáveis'
    ]
  },
  {
    id: 'clipboard-manager',
    name: 'Gerenciador de Área de Transferência',
    description: 'Gerencie seu histórico de área de transferência',
    icon: Copy,
    complexity: 'medium',
    features: [
      'Histórico de clipboard',
      'Busca em itens copiados',
      'Favoritos persistentes',
      'Sincronização entre dispositivos',
      'Filtros por tipo',
      'Limpeza automática'
    ]
  },
  {
    id: 'system-monitor',
    name: 'Monitor do Sistema',
    description: 'Monitore o desempenho do seu sistema',
    icon: Activity,
    complexity: 'hard',
    features: [
      'Uso de CPU e RAM',
      'Monitoramento de rede',
      'Temperatura do sistema',
      'Processos ativos',
      'Histórico de performance',
      'Alertas de recursos'
    ]
  },
  {
    id: 'recipe-app',
    name: 'Livro de Receitas',
    description: 'Aplicativo para descobrir e compartilhar receitas culinárias',
    icon: ChefHat,
    complexity: 'easy',
    features: [
      'Catálogo de receitas',
      'Busca por ingredientes',
      'Lista de compras automática',
      'Avaliações e comentários',
      'Modo passo-a-passo',
      'Favoritos pessoais'
    ]
  },
  {
    id: 'music-player',
    name: 'Player de Música',
    description: 'Reprodutor de música com recursos avançados',
    icon: Music,
    complexity: 'hard',
    features: [
      'Reprodução de áudio',
      'Playlists personalizadas',
      'Equalizador',
      'Visualizações',
      'Letras sincronizadas',
      'Biblioteca organizada'
    ]
  },
  {
    id: 'photo-gallery',
    name: 'Galeria de Fotos',
    description: 'Organize e visualize suas fotos',
    icon: Camera,
    complexity: 'medium',
    features: [
      'Visualização de imagens',
      'Organização por álbuns',
      'Slideshow automático',
      'Edição básica',
      'Busca por metadados',
      'Compartilhamento social'
    ]
  },
  {
    id: 'map-navigator',
    name: 'Navegador de Mapas',
    description: 'Navegação GPS com mapas offline',
    icon: Map,
    complexity: 'hard',
    features: [
      'Navegação GPS',
      'Mapas offline',
      'Pontos de interesse',
      'Cálculo de rotas',
      'Tráfego em tempo real',
      'Favoritos e histórico'
    ]
  },
  {
    id: 'drawing-app',
    name: 'Aplicativo de Desenho',
    description: 'Crie desenhos e ilustrações digitais',
    icon: Brush,
    complexity: 'hard',
    features: [
      'Ferramentas de desenho',
      'Camadas múltiplas',
      'Pincéis personalizáveis',
      'Paleta de cores',
      'Exportação de imagens',
      'Controle de pressão'
    ]
  },
  {
    id: 'language-translator',
    name: 'Tradutor de Idiomas',
    description: 'Traduza textos entre diferentes idiomas',
    icon: Globe,
    complexity: 'medium',
    features: [
      'Tradução de texto',
      'Múltiplos idiomas',
      'Detecção automática',
      'Histórico de traduções',
      'Tradução por voz',
      'Favoritos e frasebook'
    ]
  },
  {
    id: 'flashcards-app',
    name: 'Cartões de Estudo',
    description: 'Sistema de repetição espaçada para estudos',
    icon: BookOpen,
    complexity: 'medium',
    features: [
      'Criação de flashcards',
      'Algoritmo de repetição',
      'Múltiplos baralhos',
      'Estatísticas de estudo',
      'Compartilhamento de decks',
      'Modo offline'
    ]
  },
  {
    id: 'wifi-analyzer',
    name: 'Analisador WiFi',
    description: 'Analise e otimize sua rede WiFi',
    icon: Wifi,
    complexity: 'medium',
    features: [
      'Escaneamento de redes',
      'Análise de sinal',
      'Canais recomendados',
      'Teste de velocidade',
      'Histórico de conexões',
      'Mapa de cobertura'
    ]
  },
  {
    id: 'battery-monitor',
    name: 'Monitor de Bateria',
    description: 'Monitore a saúde da bateria do dispositivo',
    icon: Battery,
    complexity: 'medium',
    features: [
      'Status da bateria',
      'Histórico de carregamento',
      'Saúde da bateria',
      'Tempo estimado',
      'Alertas de bateria baixa',
      'Dicas de economia'
    ]
  },
  {
    id: 'barcode-scanner',
    name: 'Leitor de Código de Barras',
    description: 'Escaneie códigos de barras e QR codes',
    icon: Barcode,
    complexity: 'medium',
    features: [
      'Scanner de códigos',
      'Múltiplos formatos',
      'Histórico de scans',
      'Busca de produtos',
      'Comparação de preços',
      'Criação de códigos'
    ]
  },
  {
    id: 'voice-recorder',
    name: 'Gravador de Voz',
    description: 'Grave e organize suas gravações de áudio',
    icon: Mic,
    complexity: 'medium',
    features: [
      'Gravação de alta qualidade',
      'Edição básica de áudio',
      'Organização por pastas',
      'Compartilhamento rápido',
      'Transcrição automática',
      'Controle de ruído'
    ]
  },
  {
    id: 'compass-app',
    name: 'Bússola Digital',
    description: 'Bússola digital com recursos de navegação',
    icon: Compass,
    complexity: 'easy',
    features: [
      'Bússola magnética',
      'Coordenadas GPS',
      'Direção do sol',
      'Inclinômetro',
      'Calibração automática',
      'Modo noturno'
    ]
  },
  {
    id: 'flashlight-app',
    name: 'Lanterna',
    description: 'Lanterna simples e eficiente',
    icon: Flashlight,
    complexity: 'easy',
    features: [
      'Luz LED brilhante',
      'Controle de intensidade',
      'Modo estroboscópico',
      'SOS em morse',
      'Timer automático',
      'Widget de tela inicial'
    ]
  },
  {
    id: 'level-app',
    name: 'Nível Digital',
    description: 'Ferramenta de nivelamento digital',
    icon: Ruler,
    complexity: 'easy',
    features: [
      'Nível de bolha',
      'Múltiplas orientações',
      'Calibração manual',
      'Precisão em graus',
      'Som de alerta',
      'Modo de superfície'
    ]
  },
  {
    id: 'tuner-app',
    name: 'Afinador de Instrumentos',
    description: 'Afine seus instrumentos musicais',
    icon: Music,
    complexity: 'medium',
    features: [
      'Afinação cromática',
      'Múltiplos instrumentos',
      'Indicador visual preciso',
      'Calibração de frequência',
      'Modo automático',
      'Histórico de afinações'
    ]
  },
  {
    id: 'decibel-meter',
    name: 'Medidor de Decibéis',
    description: 'Meça o nível de ruído ambiente',
    icon: Volume2,
    complexity: 'medium',
    features: [
      'Medição de decibéis',
      'Gráfico em tempo real',
      'Histórico de medições',
      'Alertas de ruído',
      'Calibração do microfone',
      'Exportação de dados'
    ]
  },
  {
    id: 'mind-map',
    name: 'Mapa Mental',
    description: 'Crie mapas mentais e diagramas',
    icon: Brain,
    complexity: 'hard',
    features: [
      'Criação de mapas mentais',
      'Múltiplas formas',
      'Cores e estilos',
      'Exportação de imagens',
      'Colaboração em tempo real',
      'Templates prontos'
    ]
  },
  {
    id: 'whiteboard-app',
    name: 'Quadro Branco Digital',
    description: 'Quadro branco para brainstorming e apresentações',
    icon: Edit,
    complexity: 'hard',
    features: [
      'Desenho livre',
      'Formas geométricas',
      'Texto e anotações',
      'Múltiplas páginas',
      'Colaboração em tempo real',
      'Exportação de projetos'
    ]
  },
  {
    id: 'dictionary-app',
    name: 'Dicionário Digital',
    description: 'Dicionário completo com definições e sinônimos',
    icon: Book,
    complexity: 'medium',
    features: [
      'Busca de palavras',
      'Definições completas',
      'Sinônimos e antônimos',
      'Pronúncia em áudio',
      'Histórico de buscas',
      'Palavras favoritas'
    ]
  },
  {
    id: 'calendar-planner',
    name: 'Planejador de Calendário',
    description: 'Organize sua agenda e compromissos',
    icon: Calendar,
    complexity: 'medium',
    features: [
      'Calendário mensal/semanal',
      'Criação de eventos',
      'Lembretes e notificações',
      'Categorias coloridas',
      'Sincronização com outros calendários',
      'Visualizações personalizadas'
    ]
  },
  {
    id: 'world-clock',
    name: 'Relógio Mundial',
    description: 'Veja horários de diferentes fusos horários',
    icon: Globe,
    complexity: 'easy',
    features: [
      'Múltiplos fusos horários',
      'Busca por cidade',
      'Conversão de horários',
      'Widget de tela inicial',
      'Modo escuro/claro',
      'Alertas de reunião'
    ]
  },
  {
    id: 'contacts-manager',
    name: 'Gerenciador de Contatos',
    description: 'Organize e gerencie seus contatos',
    icon: Users,
    complexity: 'medium',
    features: [
      'Lista de contatos',
      'Grupos e categorias',
      'Busca avançada',
      'Backup e sincronização',
      'Integração com redes sociais',
      'Histórico de comunicação'
    ]
  },
  {
    id: 'budget-tracker',
    name: 'Controle Orçamentário',
    description: 'Gerencie seu orçamento pessoal',
    icon: DollarSign,
    complexity: 'medium',
    features: [
      'Planejamento orçamentário',
      'Categorias de gastos',
      'Metas financeiras',
      'Relatórios mensais',
      'Alertas de limites',
      'Análise de tendências'
    ]
  },
  {
    id: 'meditation-app',
    name: 'Aplicativo de Meditação',
    description: 'Pratique meditação e mindfulness',
    icon: Heart,
    complexity: 'medium',
    features: [
      'Sessões guiadas',
      'Timer de meditação',
      'Sons relaxantes',
      'Progresso de prática',
      'Múltiplas técnicas',
      'Lembretes diários'
    ]
  },
  {
    id: 'plant-care',
    name: 'Cuidado de Plantas',
    description: 'Cuide melhor das suas plantas',
    icon: Sprout,
    complexity: 'medium',
    features: [
      'Identificação de plantas',
      'Cronograma de rega',
      'Diário de cuidados',
      'Dicas de jardinagem',
      'Lembretes de fertilização',
      'Galeria de plantas'
    ]
  },
  {
    id: 'sleep-tracker',
    name: 'Rastreador de Sono',
    description: 'Monitore e melhore sua qualidade de sono',
    icon: Moon,
    complexity: 'medium',
    features: [
      'Monitoramento de sono',
      'Despertador inteligente',
      'Análise de padrões',
      'Sons para dormir',
      'Histórico de sono',
      'Dicas para melhor sono'
    ]
  },
  {
    id: 'water-reminder',
    name: 'Lembrete de Hidratação',
    description: 'Mantenha-se hidratado durante o dia',
    icon: Droplets,
    complexity: 'easy',
    features: [
      'Lembretes personalizáveis',
      'Registro de consumo',
      'Metas diárias',
      'Estatísticas de hidratação',
      'Diferentes tipos de bebidas',
      'Widgets úteis'
    ]
  },
  {
    id: 'mood-tracker',
    name: 'Rastreador de Humor',
    description: 'Registre e analise seu humor diário',
    icon: Smile,
    complexity: 'medium',
    features: [
      'Registro diário de humor',
      'Fatores influenciadores',
      'Gráficos de tendências',
      'Notas pessoais',
      'Lembretes de check-in',
      'Exportação de dados'
    ]
  },
  {
    id: 'workout-tracker',
    name: 'Rastreador de Exercícios',
    description: 'Acompanhe seus treinos e progresso',
    icon: Activity,
    complexity: 'medium',
    features: [
      'Registro de exercícios',
      'Cronômetro de treino',
      'Histórico de workouts',
      'Múltiplas modalidades',
      'Gráficos de progresso',
      'Planos de treino'
    ]
  },
  {
    id: 'diary-app',
    name: 'Diário Digital',
    description: 'Mantenha um diário pessoal seguro',
    icon: Book,
    complexity: 'medium',
    features: [
      'Entradas de diário',
      'Busca por data/conteúdo',
      'Anexos de mídia',
      'Backup criptografado',
      'Múltiplos temas',
      'Proteção por senha'
    ]
  },
  {
    id: 'shopping-list',
    name: 'Lista de Compras',
    description: 'Organize suas compras de forma inteligente',
    icon: ShoppingBag,
    complexity: 'easy',
    features: [
      'Criação de listas',
      'Categorização de itens',
      'Compartilhamento familiar',
      'Histórico de compras',
      'Sugestões inteligentes',
      'Modo offline'
    ]
  },
  {
    id: 'meal-planner',
    name: 'Planejador de Refeições',
    description: 'Planeje suas refeições semanais',
    icon: UtensilsCrossed,
    complexity: 'medium',
    features: [
      'Planejamento semanal',
      'Banco de receitas',
      'Lista de compras automática',
      'Cálculo nutricional',
      'Restrições alimentares',
      'Histórico de refeições'
    ]
  }
];
