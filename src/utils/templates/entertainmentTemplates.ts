
import { 
  Music, 
  Video, 
  Film, 
  Tv, 
  Radio, 
  Headphones, 
  Mic, 
  Camera, 
  Image, 
  Palette, 
  Brush, 
  PenTool, 
  Gamepad2, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  VolumeX, 
  Shuffle, 
  Repeat, 
  Star, 
  Heart, 
  ThumbsUp, 
  Eye, 
  Users, 
  MessageSquare, 
  Share, 
  Download, 
  Upload, 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Award, 
  Trophy, 
  Medal, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Settings, 
  Globe, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Wifi, 
  Bluetooth, 
  Battery, 
  Signal, 
  Home, 
  MapPin, 
  Navigation, 
  Car, 
  Plane, 
  Ship, 
  Train, 
  Bike, 
  Route, 
  Compass, 
  Map, 
  Sun, 
  Moon, 
  Stars, 
  CloudRain, 
  Umbrella, 
  Wind, 
  Thermometer, 
  TreePine, 
  Flower, 
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
  ShoppingCart, 
  Package, 
  DollarSign, 
  CreditCard, 
  Wallet, 
  Coins, 
  Gem, 
  Gift, 
  Ticket, 
  Tag, 
  Bookmark, 
  Flag, 
  Bell, 
  Mail, 
  Phone, 
  MessageCircle, 
  Send, 
  Reply, 
  Forward, 
  Archive, 
  Folder, 
  File, 
  FileText, 
  FileImage, 
  FileVideo, 
  FileAudio, 
  Edit, 
  Copy, 
  Save, 
  Trash, 
  Plus, 
  Minus, 
  X, 
  Check, 
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
  Crop, 
  RotateCw, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Maximize, 
  Minimize, 
  Activity, 
  TrendingDown, 
  PieChart, 
  LineChart, 
  BarChart, 
  ScatterChart, 
  Database, 
  Server, 
  Cloud, 
  HardDrive, 
  Usb, 
  Plug, 
  Power, 
  Zap, 
  Lock, 
  Key, 
  Shield, 
  ShieldCheck, 
  User, 
  UserPlus, 
  UserMinus, 
  UserCheck, 
  UserX, 
  UsersRound, 
  Contact, 
  IdCard, 
  Badge, 
  Fingerprint, 
  Scan, 
  QrCode, 
  Barcode, 
  Link, 
  ExternalLink, 
  Share2, 
  Hash, 
  AtSign, 
  Percent, 
  Info, 
  HelpCircle, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Loader, 
  RefreshCw, 
  SkipBack as PreviousTrack, 
  FastForward, 
  Rewind, 
  Disc, 
  Volume1,
  Brain,
  BookOpen,
  ChefHat,
  Smile,
  Building,
  Lightbulb,
  TreePine as Tree,
  Dice6,
  Rocket
} from 'lucide-react';

import { ProjectTemplate } from '../projectTemplates';

export const entertainmentTemplates: ProjectTemplate[] = [
  {
    id: 'streaming-platform',
    name: 'Plataforma de Streaming',
    description: 'Plataforma completa de streaming de vídeo',
    icon: Video,
    complexity: 'hard',
    features: [
      'Biblioteca de vídeos',
      'Streaming adaptativo',
      'Recomendações IA',
      'Perfis de usuário',
      'Download offline',
      'Múltiplos dispositivos'
    ]
  },
  {
    id: 'music-streaming',
    name: 'Streaming Musical',
    description: 'Serviço de streaming de música',
    icon: Music,
    complexity: 'hard',
    features: [
      'Biblioteca musical',
      'Playlists personalizadas',
      'Qualidade lossless',
      'Modo offline',
      'Descoberta musical',
      'Podcasts integrados'
    ]
  },
  {
    id: 'podcast-platform',
    name: 'Plataforma de Podcast',
    description: 'Plataforma para criação e distribuição de podcasts',
    icon: Mic,
    complexity: 'medium',
    features: [
      'Gravação de episódios',
      'Edição de áudio',
      'Distribuição automática',
      'Analytics de audiência',
      'Monetização',
      'Transcrição automática'
    ]
  },
  {
    id: 'radio-online',
    name: 'Rádio Online',
    description: 'Estação de rádio digital',
    icon: Radio,
    complexity: 'medium',
    features: [
      'Transmissão ao vivo',
      'Programação automática',
      'Chat de ouvintes',
      'Pedidos musicais',
      'Publicidade direcionada',
      'Aplicativo mobile'
    ]
  },
  {
    id: 'karaoke-app',
    name: 'Aplicativo Karaokê',
    description: 'Karaokê virtual com milhares de músicas',
    icon: Mic,
    complexity: 'hard',
    features: [
      'Biblioteca de karaokê',
      'Gravação de performances',
      'Competições online',
      'Efeitos de voz',
      'Compartilhamento social',
      'Modo dueto'
    ]
  },
  {
    id: 'photo-gallery',
    name: 'Galeria de Fotos',
    description: 'Galeria inteligente para organizar fotos',
    icon: Image,
    complexity: 'medium',
    features: [
      'Organização automática',
      'Reconhecimento facial',
      'Backup na nuvem',
      'Edição básica',
      'Álbuns compartilhados',
      'Busca por conteúdo'
    ]
  },
  {
    id: 'video-editor',
    name: 'Editor de Vídeo',
    description: 'Editor de vídeo para criadores de conteúdo',
    icon: Film,
    complexity: 'hard',
    features: [
      'Timeline multipista',
      'Efeitos e transições',
      'Chroma key',
      'Correção de cor',
      'Áudio multipista',
      'Exportação 4K'
    ]
  },
  {
    id: 'art-gallery',
    name: 'Galeria de Arte Virtual',
    description: 'Galeria virtual para exposições de arte',
    icon: Palette,
    complexity: 'medium',
    features: [
      'Exposições 3D',
      'Tours virtuais',
      'Catálogo de obras',
      'Biografia de artistas',
      'Vendas online',
      'Realidade aumentada'
    ]
  },
  {
    id: 'gaming-platform',
    name: 'Plataforma de Jogos',
    description: 'Plataforma de jogos online',
    icon: Gamepad2,
    complexity: 'hard',
    features: [
      'Biblioteca de jogos',
      'Multiplayer online',
      'Sistema de achievements',
      'Chat integrado',
      'Streaming de jogos',
      'Marketplace'
    ]
  },
  {
    id: 'ai-music-generator',
    name: 'Gerador Musical IA',
    description: 'Gere música usando inteligência artificial',
    icon: Music,
    complexity: 'hard',
    features: [
      'Composição automática',
      'Múltiplos gêneros',
      'Personalização de estilo',
      'Exportação MIDI',
      'Colaboração IA-humano',
      'Biblioteca de samples'
    ]
  },
  {
    id: 'virtual-concert',
    name: 'Concerto Virtual',
    description: 'Plataforma para shows virtuais',
    icon: Music,
    complexity: 'hard',
    features: [
      'Palcos virtuais 3D',
      'Interação com artista',
      'Multi-camera views',
      'Chat ao vivo',
      'Venda de ingressos',
      'Replays exclusivos'
    ]
  },
  {
    id: 'brain-training',
    name: 'Treino Cerebral',
    description: 'Jogos para exercitar o cérebro',
    icon: Brain,
    complexity: 'medium',
    features: [
      'Jogos cognitivos',
      'Progresso personalizado',
      'Estatísticas detalhadas',
      'Desafios diários',
      'Múltiplas habilidades',
      'Competições globais'
    ]
  },
  {
    id: 'digital-library',
    name: 'Biblioteca Digital',
    description: 'Acesso a livros e audiobooks',
    icon: BookOpen,
    complexity: 'medium',
    features: [
      'Catálogo extenso',
      'Leitor integrado',
      'Notas e marcações',
      'Sincronização multi-device',
      'Recomendações',
      'Modo noturno'
    ]
  },
  {
    id: 'theme-park-virtual',
    name: 'Parque Temático Virtual',
    description: 'Experiência de parque de diversões virtual',
    icon: Heart,
    complexity: 'hard',
    features: [
      'Montanhas-russas VR',
      'Jogos interativos',
      'Avatar customizável',
      'Encontros sociais',
      'Mini-games',
      'Eventos especiais'
    ]
  },
  {
    id: 'film-production',
    name: 'Produção Cinematográfica',
    description: 'Ferramenta para produção de filmes',
    icon: Film,
    complexity: 'hard',
    features: [
      'Planejamento de roteiro',
      'Cronograma de filmagem',
      'Gestão de equipe',
      'Orçamento e custos',
      'Storyboards',
      'Pós-produção'
    ]
  },
  {
    id: 'venue-booking',
    name: 'Reserva de Locais',
    description: 'Sistema para reserva de espaços para eventos',
    icon: Building,
    complexity: 'medium',
    features: [
      'Catálogo de locais',
      'Calendário de disponibilidade',
      'Orçamentos automáticos',
      'Tour virtual 360°',
      'Sistema de pagamento',
      'Avaliações de clientes'
    ]
  },
  {
    id: 'fashion-show',
    name: 'Desfile de Moda Virtual',
    description: 'Plataforma para desfiles de moda online',
    icon: Star,
    complexity: 'hard',
    features: [
      'Passarela virtual 3D',
      'Catálogo de roupas',
      'Try-on virtual',
      'Transmissão ao vivo',
      'E-commerce integrado',
      'Feedback de audiência'
    ]
  },
  {
    id: 'comedy-club',
    name: 'Clube de Comédia Online',
    description: 'Plataforma para stand-up comedy virtual',
    icon: Smile,
    complexity: 'medium',
    features: [
      'Shows ao vivo',
      'Open mic nights',
      'Sistema de votação',
      'Chat de audiência',
      'Perfis de comediantes',
      'Agenda de eventos'
    ]
  },
  {
    id: 'escape-room',
    name: 'Sala de Escape Virtual',
    description: 'Jogos de escape room online',
    icon: Key,
    complexity: 'hard',
    features: [
      'Salas temáticas',
      'Puzzles interativos',
      'Multiplayer cooperativo',
      'Dicas progressivas',
      'Ranking global',
      'Criador de salas'
    ]
  },
  {
    id: 'magic-show',
    name: 'Show de Mágica Virtual',
    description: 'Espetáculos de mágica interativos online',
    icon: Star,
    complexity: 'medium',
    features: [
      'Truques interativos',
      'Participação da audiência',
      'Multiple camera angles',
      'Chat mágico',
      'Loja de truques',
      'Aulas de mágica'
    ]
  },
  {
    id: 'camping-experience',
    name: 'Experiência de Camping',
    description: 'Simulador de camping e natureza',
    icon: Tree,
    complexity: 'medium',
    features: [
      'Ambientes naturais',
      'Atividades ao ar livre',
      'Vida selvagem',
      'Minigames de sobrevivência',
      'Fotografia da natureza',
      'Educação ambiental'
    ]
  },
  {
    id: 'quiz-trivia',
    name: 'Quiz e Trivia',
    description: 'Jogos de perguntas e respostas',
    icon: Brain,
    complexity: 'easy',
    features: [
      'Múltiplas categorias',
      'Multiplayer online',
      'Criação de quizzes',
      'Ranking global',
      'Perguntas personalizadas',
      'Modo torneio'
    ]
  },
  {
    id: 'digital-cookbook',
    name: 'Livro de Receitas Digital',
    description: 'Plataforma interativa de culinária',
    icon: BookOpen,
    complexity: 'medium',
    features: [
      'Receitas passo-a-passo',
      'Vídeos tutoriais',
      'Lista de compras',
      'Timer de cozinha',
      'Conversão de medidas',
      'Nutrição calculada'
    ]
  },
  {
    id: 'cooking-show',
    name: 'Show de Culinária',
    description: 'Plataforma para aulas de culinária ao vivo',
    icon: ChefHat,
    complexity: 'medium',
    features: [
      'Aulas ao vivo',
      'Interação com chef',
      'Receitas downloadáveis',
      'Lista de ingredientes',
      'Replay das aulas',
      'Certificados'
    ]
  },
  {
    id: 'mood-lighting',
    name: 'Iluminação Ambiente',
    description: 'Sistema de iluminação sincronizada com música',
    icon: Lightbulb,
    complexity: 'medium',
    features: [
      'Sincronização musical',
      'Múltiplas cores',
      'Presets de ambiente',
      'Controle por voz',
      'Agendamento automático',
      'Integração IoT'
    ]
  },
  {
    id: 'casino-games',
    name: 'Jogos de Cassino',
    description: 'Plataforma de jogos de cassino online',
    icon: Heart,
    complexity: 'hard',
    features: [
      'Múltiplos jogos',
      'Dealers ao vivo',
      'Sistema de fichas',
      'Torneios regulares',
      'Chat social',
      'Programa VIP'
    ]
  },
  {
    id: 'party-planning',
    name: 'Planejamento de Festas',
    description: 'Ferramenta para organizar eventos e festas',
    icon: Star,
    complexity: 'medium',
    features: [
      'Templates de eventos',
      'Lista de convidados',
      'Orçamento automático',
      'Fornecedores locais',
      'Cronograma detalhado',
      'RSVP digital'
    ]
  },
  {
    id: 'costume-designer',
    name: 'Designer de Fantasias',
    description: 'Criador virtual de fantasias e cosplays',
    icon: Palette,
    complexity: 'hard',
    features: [
      'Designer 3D',
      'Biblioteca de materiais',
      'Customização total',
      'Realidade aumentada',
      'Compartilhamento social',
      'Marketplace'
    ]
  },
  {
    id: 'lottery-simulator',
    name: 'Simulador de Loteria',
    description: 'Simule jogos de loteria e aprenda probabilidades',
    icon: Dice6,
    complexity: 'easy',
    features: [
      'Múltiplos tipos de jogos',
      'Simulação de sorteios',
      'Estatísticas de probabilidade',
      'Histórico de resultados',
      'Análise de padrões',
      'Educação financeira'
    ]
  },
  {
    id: 'space-exploration',
    name: 'Exploração Espacial',
    description: 'Simulador de exploração do espaço',
    icon: Rocket,
    complexity: 'hard',
    features: [
      'Sistema solar 3D',
      'Missões espaciais',
      'Construção de naves',
      'Física realista',
      'Descoberta de planetas',
      'Educação astronômica'
    ]
  },
  {
    id: 'music-visualizer',
    name: 'Visualizador Musical',
    description: 'Crie visualizações incríveis para música',
    icon: Music,
    complexity: 'medium',
    features: [
      'Análise de áudio em tempo real',
      'Múltiplos estilos visuais',
      'Customização de cores',
      'Exportação de vídeos',
      'Sincronização perfeita',
      'VJ mode'
    ]
  },
  {
    id: 'virtual-zoo',
    name: 'Zoológico Virtual',
    description: 'Explore animais em ambiente virtual',
    icon: Bird,
    complexity: 'medium',
    features: [
      'Animais 3D realistas',
      'Habitats naturais',
      'Informações educativas',
      'Feeding simulator',
      'Sons da natureza',
      'Modo fotografia'
    ]
  }
];
