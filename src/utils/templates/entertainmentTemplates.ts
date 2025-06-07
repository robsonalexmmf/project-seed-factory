import { 
  Music, 
  Video, 
  Gamepad2, 
  Film, 
  Radio, 
  Tv, 
  Camera, 
  Mic, 
  Headphones, 
  Theater, 
  Star, 
  Award, 
  Trophy, 
  Crown, 
  Dice1, 
  Play, 
  Pause, 
  Volume2, 
  Share, 
  Users, 
  Calendar, 
  ShoppingCart, 
  Clock, 
  Bell, 
  MessageSquare, 
  ThumbsUp, 
  Eye, 
  Download, 
  Upload, 
  Shuffle, 
  Repeat, 
  Heart, 
  Bookmark, 
  Gift, 
  Sparkles, 
  Wand2, 
  Map, 
  Globe, 
  Zap, 
  Target, 
  Activity, 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Shield, 
  Lock, 
  Settings, 
  Database, 
  Code, 
  Smartphone, 
  Monitor, 
  Wifi, 
  Cloud, 
  Paintbrush, 
  Palette, 
  Image, 
  Layers, 
  Edit, 
  PenTool, 
  Brush, 
  Move, 
  RotateCcw, 
  Copy, 
  Save, 
  FileImage, 
  Grid, 
  Square, 
  Circle, 
  Triangle 
} from 'lucide-react';
import { ProjectTemplate } from '../projectTemplates';

export const entertainmentTemplates: ProjectTemplate[] = [
  {
    id: 'music-streaming',
    name: 'Streaming de Música',
    description: 'Plataforma de streaming de música com playlists personalizadas',
    icon: Music,
    complexity: 'hard',
    features: [
      'Biblioteca musical',
      'Playlists personalizadas',
      'Recomendações por IA',
      'Modo offline',
      'Compartilhamento social',
      'Estatísticas de escuta'
    ]
  },
  {
    id: 'video-streaming',
    name: 'Streaming de Vídeo',
    description: 'Plataforma de vídeos sob demanda estilo Netflix',
    icon: Video,
    complexity: 'hard',
    features: [
      'Catálogo de vídeos',
      'Múltiplas qualidades',
      'Legendas automáticas',
      'Perfis de usuário',
      'Continuar assistindo',
      'Recomendações inteligentes'
    ]
  },
  {
    id: 'gaming-platform',
    name: 'Plataforma de Jogos',
    description: 'Portal de jogos online com rankings e competições',
    icon: Gamepad2,
    complexity: 'hard',
    features: [
      'Biblioteca de jogos',
      'Multiplayer online',
      'Rankings globais',
      'Conquistas e troféus',
      'Chat entre jogadores',
      'Torneos e competições'
    ]
  },
  {
    id: 'podcast-platform',
    name: 'Plataforma de Podcast',
    description: 'Sistema completo para criação e distribuição de podcasts',
    icon: Mic,
    complexity: 'medium',
    features: [
      'Gravação integrada',
      'Edição básica',
      'Hospedagem automática',
      'Distribuição multi-plataforma',
      'Analytics detalhado',
      'Monetização integrada'
    ]
  },
  {
    id: 'photo-gallery',
    name: 'Galeria de Fotos',
    description: 'Plataforma para compartilhamento e organização de fotos',
    icon: Camera,
    complexity: 'medium',
    features: [
      'Upload de fotos',
      'Álbuns organizados',
      'Edição básica',
      'Compartilhamento social',
      'Backup automático',
      'Reconhecimento facial'
    ]
  },
  {
    id: 'event-platform',
    name: 'Plataforma de Eventos',
    description: 'Sistema para criação e gestão de eventos online e presenciais',
    icon: Theater,
    complexity: 'medium',
    features: [
      'Criação de eventos',
      'Venda de ingressos',
      'Check-in digital',
      'Transmissão ao vivo',
      'Networking entre participantes',
      'Relatórios de evento'
    ]
  },
  {
    id: 'radio-online',
    name: 'Rádio Online',
    description: 'Estação de rádio online com programação ao vivo',
    icon: Radio,
    complexity: 'medium',
    features: [
      'Transmissão ao vivo',
      'Programação agendada',
      'Chat dos ouvintes',
      'Arquivo de programas',
      'Estatísticas de audiência',
      'Múltiplas estações'
    ]
  },
  {
    id: 'audiobook-platform',
    name: 'Plataforma de Audiobooks',
    description: 'Biblioteca digital de audiolivros com player avançado',
    icon: Headphones,
    complexity: 'medium',
    features: [
      'Biblioteca de audiobooks',
      'Player com controles',
      'Marcadores e notas',
      'Sincronização entre dispositivos',
      'Recomendações personalizadas',
      'Modo sleep timer'
    ]
  },
  {
    id: 'movie-database',
    name: 'Base de Dados de Filmes',
    description: 'Catálogo completo de filmes com reviews e avaliações',
    icon: Film,
    complexity: 'medium',
    features: [
      'Catálogo de filmes',
      'Reviews e avaliações',
      'Listas personalizadas',
      'Recomendações por gênero',
      'Informações detalhadas',
      'Sistema de favoritos'
    ]
  },
  {
    id: 'tv-guide',
    name: 'Guia de TV',
    description: 'Guia completo de programação televisiva',
    icon: Tv,
    complexity: 'easy',
    features: [
      'Grade de programação',
      'Lembretes de programas',
      'Busca por conteúdo',
      'Favoritos personalizados',
      'Notificações push',
      'Múltiplos canais'
    ]
  },
  {
    id: 'virtual-concert-platform',
    name: 'Plataforma de Concertos Virtuais',
    description: 'Experiências musicais imersivas em realidade virtual',
    icon: Music,
    complexity: 'hard',
    features: [
      'Shows em VR',
      'Interação com artistas',
      'Múltiplas câmeras',
      'Chat ao vivo',
      'Merchandise virtual',
      'Experiência social'
    ]
  },
  {
    id: 'ai-music-composer',
    name: 'Compositor Musical IA',
    description: 'Criação automática de músicas com inteligência artificial',
    icon: Brain,
    complexity: 'hard',
    features: [
      'Composição automática',
      'Múltiplos estilos',
      'Colaboração humano-IA',
      'Instrumentação inteligente',
      'Análise harmônica',
      'Exportação profissional'
    ]
  },
  {
    id: 'interactive-storytelling',
    name: 'Narrativa Interativa',
    description: 'Histórias que se adaptam às escolhas do usuário',
    icon: BookOpen,
    complexity: 'hard',
    features: [
      'Narrativas ramificadas',
      'Personagens adaptativos',
      'IA narrativa',
      'Múltiplos finais',
      'Geração procedural',
      'Experiência personalizada'
    ]
  },
  {
    id: 'virtual-theme-park',
    name: 'Parque Temático Virtual',
    description: 'Parque de diversões em realidade virtual',
    icon: FerrisWheel,
    complexity: 'hard',
    features: [
      'Atrações virtuais',
      'Experiências imersivas',
      'Multiplayer',
      'Economia virtual',
      'Eventos sazonais',
      'Personalização de avatar'
    ]
  },
  {
    id: 'ai-video-editor',
    name: 'Editor de Vídeo IA',
    description: 'Edição automatizada de vídeos com inteligência artificial',
    icon: Video,
    complexity: 'hard',
    features: [
      'Edição automática',
      'Detecção de cenas',
      'Sincronização musical',
      'Efeitos inteligentes',
      'Colorização automática',
      'Múltiplos formatos'
    ]
  },
  {
    id: 'virtual-sports-arena',
    name: 'Arena Esportiva Virtual',
    description: 'Esportes e competições em ambiente virtual',
    icon: Trophy,
    complexity: 'hard',
    features: [
      'Esportes virtuais',
      'Competições online',
      'Transmissões ao vivo',
      'Sistema de ranking',
      'Apostas virtuais',
      'Análise de performance'
    ]
  },
  {
    id: 'holographic-entertainment',
    name: 'Entretenimento Holográfico',
    description: 'Experiências de entretenimento com hologramas',
    icon: Zap,
    complexity: 'hard',
    features: [
      'Projeções holográficas',
      'Interação gestual',
      'Performances virtuais',
      'Múltiplas perspectivas',
      'Sincronização espacial',
      'Experiência coletiva'
    ]
  },
  {
    id: 'procedural-game-generator',
    name: 'Gerador Procedural de Jogos',
    description: 'IA que cria jogos automaticamente',
    icon: Gamepad2,
    complexity: 'hard',
    features: [
      'Geração de níveis',
      'Criação de mecânicas',
      'Balanceamento automático',
      'Arte procedural',
      'Narrativa gerada',
      'Múltiplos gêneros'
    ]
  },
  {
    id: 'virtual-museum-platform',
    name: 'Plataforma de Museu Virtual',
    description: 'Experiências museológicas imersivas',
    icon: Building,
    complexity: 'hard',
    features: [
      'Exposições virtuais',
      'Tours imersivos',
      'Realidade aumentada',
      'Informações contextuais',
      'Experiências educativas',
      'Curadoria digital'
    ]
  },
  {
    id: 'ai-screenplay-writer',
    name: 'Roteirista IA',
    description: 'Criação automática de roteiros para filmes e séries',
    icon: Film,
    complexity: 'hard',
    features: [
      'Geração de roteiros',
      'Desenvolvimento de personagens',
      'Estrutura narrativa',
      'Diálogos naturais',
      'Análise de gênero',
      'Feedback criativo'
    ]
  },
  {
    id: 'virtual-fashion-show',
    name: 'Desfile de Moda Virtual',
    description: 'Plataforma para desfiles de moda digitais',
    icon: Shirt,
    complexity: 'medium',
    features: [
      'Runway virtual',
      'Modelos 3D',
      'Roupas digitais',
      'Transmissão ao vivo',
      'Interação do público',
      'E-commerce integrado'
    ]
  },
  {
    id: 'ai-dance-choreographer',
    name: 'Coreógrafo IA',
    description: 'Criação automática de coreografias de dança',
    icon: Music,
    complexity: 'hard',
    features: [
      'Geração de movimentos',
      'Sincronização musical',
      'Estilos de dança',
      'Análise de ritmo',
      'Captura de movimento',
      'Ensino de dança'
    ]
  },
  {
    id: 'virtual-comedy-club',
    name: 'Clube de Comédia Virtual',
    description: 'Plataforma para shows de stand-up virtuais',
    icon: Smile,
    complexity: 'medium',
    features: [
      'Shows ao vivo',
      'Interação com audiência',
      'Sistema de risadas',
      'Open mic virtual',
      'Networking de comediantes',
      'Monetização de shows'
    ]
  },
  {
    id: 'ai-art-generator',
    name: 'Gerador de Arte IA',
    description: 'Criação automática de obras de arte com IA',
    icon: Palette,
    complexity: 'hard',
    features: [
      'Múltiplos estilos artísticos',
      'Geração procedural',
      'Colaboração artística',
      'NFT integration',
      'Galeria virtual',
      'Monetização de arte'
    ]
  },
  {
    id: 'virtual-karaoke-platform',
    name: 'Plataforma de Karaokê Virtual',
    description: 'Karaokê social em ambiente virtual',
    icon: Mic,
    complexity: 'medium',
    features: [
      'Salas virtuais',
      'Biblioteca musical',
      'Efeitos de voz',
      'Competições',
      'Gravação de performances',
      'Ranking social'
    ]
  },
  {
    id: 'interactive-movie-platform',
    name: 'Plataforma de Filmes Interativos',
    description: 'Filmes onde o espectador influencia a narrativa',
    icon: Film,
    complexity: 'hard',
    features: [
      'Narrativa ramificada',
      'Decisões em tempo real',
      'Múltiplos finais',
      'Análise de escolhas',
      'Experiência personalizada',
      'Produção interativa'
    ]
  },
  {
    id: 'virtual-escape-room',
    name: 'Escape Room Virtual',
    description: 'Salas de fuga em realidade virtual',
    icon: Key,
    complexity: 'hard',
    features: [
      'Puzzles imersivos',
      'Cooperação multiplayer',
      'Múltiplos temas',
      'Dificuldade adaptativa',
      'Sistema de dicas',
      'Ranking de velocidade'
    ]
  },
  {
    id: 'ai-podcast-producer',
    name: 'Produtor de Podcast IA',
    description: 'Produção automática de podcasts com IA',
    icon: Radio,
    complexity: 'hard',
    features: [
      'Geração de conteúdo',
      'Síntese de voz',
      'Edição automática',
      'Múltiplos hosts virtuais',
      'Personalização de audiência',
      'Distribuição automática'
    ]
  },
  {
    id: 'virtual-magic-show',
    name: 'Show de Mágica Virtual',
    description: 'Performances de mágica em ambiente digital',
    icon: Wand,
    complexity: 'hard',
    features: [
      'Truques digitais',
      'Interação com audiência',
      'Efeitos especiais',
      'Workshops de mágica',
      'Múltiplos performers',
      'Experiência imersiva'
    ]
  },
  {
    id: 'ai-news-anchor',
    name: 'Âncora de Notícias IA',
    description: 'Apresentadores virtuais para telejornais',
    icon: Tv,
    complexity: 'hard',
    features: [
      'Apresentadores virtuais',
      'Síntese de fala natural',
      'Geração de notícias',
      'Múltiplos idiomas',
      'Personalização de conteúdo',
      'Transmissão 24/7'
    ]
  },
  {
    id: 'virtual-circus-platform',
    name: 'Plataforma de Circo Virtual',
    description: 'Espetáculos circenses em realidade virtual',
    icon: Tent,
    complexity: 'hard',
    features: [
      'Performances acrobáticas',
      'Animais virtuais',
      'Interação com artistas',
      'Múltiplas perspectivas',
      'Experiência familiar',
      'Shows personalizados'
    ]
  },
  {
    id: 'ai-improv-theater',
    name: 'Teatro de Improviso IA',
    description: 'IA que participa de improvisações teatrais',
    icon: Theater,
    complexity: 'hard',
    features: [
      'Improvisação em tempo real',
      'Personagens adaptativos',
      'Diálogos naturais',
      'Cenários dinâmicos',
      'Interação com atores',
      'Múltiplos gêneros'
    ]
  },
  {
    id: 'virtual-talent-show',
    name: 'Show de Talentos Virtual',
    description: 'Competição de talentos em plataforma digital',
    icon: Star,
    complexity: 'medium',
    features: [
      'Audições virtuais',
      'Votação da audiência',
      'Múltiplas categorias',
      'Judges virtuais',
      'Transmissão ao vivo',
      'Prêmios digitais'
    ]
  },
  {
    id: 'ai-trivia-host',
    name: 'Apresentador de Quiz IA',
    description: 'IA que conduz jogos de perguntas e respostas',
    icon: Brain,
    complexity: 'medium',
    features: [
      'Perguntas dinâmicas',
      'Múltiplas categorias',
      'Dificuldade adaptativa',
      'Personalidade do host',
      'Competições online',
      'Sistema de pontuação'
    ]
  },
  {
    id: 'virtual-book-club',
    name: 'Clube do Livro Virtual',
    description: 'Discussões literárias em ambiente virtual',
    icon: BookOpen,
    complexity: 'medium',
    features: [
      'Salas de discussão',
      'Análise de livros',
      'Autor virtual',
      'Calendário de leituras',
      'Recomendações IA',
      'Comunidade literária'
    ]
  },
  {
    id: 'ai-sports-commentator',
    name: 'Comentarista Esportivo IA',
    description: 'IA que comenta eventos esportivos em tempo real',
    icon: Mic,
    complexity: 'hard',
    features: [
      'Comentários em tempo real',
      'Análise estatística',
      'Múltiplos esportes',
      'Personalização de estilo',
      'Detecção de eventos',
      'Transmissão automática'
    ]
  },
  {
    id: 'virtual-cooking-show',
    name: 'Show de Culinária Virtual',
    description: 'Programas de culinária interativos',
    icon: ChefHat,
    complexity: 'medium',
    features: [
      'Receitas interativas',
      'Chef virtual',
      'Técnicas de cozinha',
      'Lista de ingredientes',
      'Timer automático',
      'Avaliação de pratos'
    ]
  },
  {
    id: 'ai-meme-generator',
    name: 'Gerador de Memes IA',
    description: 'Criação automática de memes com IA',
    icon: Smile,
    complexity: 'medium',
    features: [
      'Geração automática',
      'Templates populares',
      'Análise de tendências',
      'Compartilhamento social',
      'Personalização',
      'Viralização inteligente'
    ]
  },
  {
    id: 'virtual-pet-simulation',
    name: 'Simulação de Pet Virtual',
    description: 'Bichinhos virtuais com IA avançada',
    icon: Heart,
    complexity: 'medium',
    features: [
      'Pets inteligentes',
      'Personalidade única',
      'Evolução comportamental',
      'Cuidados virtuais',
      'Interação social',
      'Múltiplas espécies'
    ]
  },
  {
    id: 'ai-game-master',
    name: 'Mestre de RPG IA',
    description: 'IA que conduz sessões de RPG de mesa',
    icon: Dice6,
    complexity: 'hard',
    features: [
      'Narrativa dinâmica',
      'Criação de NPCs',
      'Combates automáticos',
      'Múltiplos sistemas',
      'Adaptação de história',
      'Experiência personalizada'
    ]
  },
  {
    id: 'virtual-dating-show',
    name: 'Reality Show de Namoro Virtual',
    description: 'Programa de relacionamentos em ambiente virtual',
    icon: Heart,
    complexity: 'medium',
    features: [
      'Participantes virtuais',
      'Desafios românticos',
      'Votação da audiência',
      'Múltiplas temporadas',
      'Personalidades IA',
      'Drama artificial'
    ]
  },
  {
    id: 'ai-film-critic',
    name: 'Crítico de Cinema IA',
    description: 'IA que analisa e critica filmes automaticamente',
    icon: Film,
    complexity: 'hard',
    features: [
      'Análise cinematográfica',
      'Resenhas automáticas',
      'Comparações inteligentes',
      'Múltiplos critérios',
      'Recomendações personalizadas',
      'Tendências de mercado'
    ]
  },
  {
    id: 'virtual-standup-ai',
    name: 'Comediante IA',
    description: 'IA que escreve e apresenta comédia stand-up',
    icon: Mic,
    complexity: 'hard',
    features: [
      'Piadas geradas',
      'Timing perfeito',
      'Adaptação de audiência',
      'Múltiplos estilos',
      'Interação com público',
      'Evolução humorística'
    ]
  },
  {
    id: 'virtual-band-platform',
    name: 'Plataforma de Banda Virtual',
    description: 'Formação de bandas com membros virtuais',
    icon: Users,
    complexity: 'hard',
    features: [
      'Músicos virtuais',
      'Composição colaborativa',
      'Múltiplos instrumentos',
      'Sincronização perfeita',
      'Performances ao vivo',
      'Gravação profissional'
    ]
  },
  {
    id: 'ai-party-planner',
    name: 'Planejador de Festas IA',
    description: 'IA que organiza eventos e festas virtuais',
    icon: PartyPopper,
    complexity: 'medium',
    features: [
      'Planejamento automático',
      'Decoração virtual',
      'Lista de convidados',
      'Atividades personalizadas',
      'Música automática',
      'Coordenação de eventos'
    ]
  },
  {
    id: 'virtual-magic-academy',
    name: 'Academia de Mágica Virtual',
    description: 'Aprenda mágica em ambiente virtual imersivo',
    icon: Hat,
    complexity: 'hard',
    features: [
      'Aulas de mágica',
      'Truques interativos',
      'Mentores virtuais',
      'Prática segura',
      'Múltiplas disciplinas',
      'Certificação mágica'
    ]
  },
  {
    id: 'ai-voice-actor',
    name: 'Dublador IA',
    description: 'IA que cria dublagens para personagens',
    icon: Volume2,
    complexity: 'hard',
    features: [
      'Síntese de voz avançada',
      'Múltiplas personalidades',
      'Sincronia labial',
      'Emoções realistas',
      'Múltiplos idiomas',
      'Adaptação de contexto'
    ]
  },
  {
    id: 'virtual-theater-platform',
    name: 'Plataforma de Teatro Virtual',
    description: 'Peças teatrais em ambiente virtual interativo',
    icon: Theater,
    complexity: 'hard',
    features: [
      'Palco virtual',
      'Atores digitais',
      'Cenários dinâmicos',
      'Interação com audiência',
      'Múltiplas perspectivas',
      'Experiência imersiva'
    ]
  },
  {
    id: 'ai-entertainment-curator',
    name: 'Curador de Entretenimento IA',
    description: 'IA que personaliza experiências de entretenimento',
    icon: Star,
    complexity: 'hard',
    features: [
      'Recomendações inteligentes',
      'Análise de preferências',
      'Conteúdo personalizado',
      'Múltiplas mídias',
      'Descoberta automática',
      'Experiência única'
    ]
  },
  {
    id: 'virtual-comedy-writer',
    name: 'Roteirista de Comédia IA',
    description: 'IA especializada em escrever comédia',
    icon: PenTool,
    complexity: 'hard',
    features: [
      'Roteiros cômicos',
      'Timing de piadas',
      'Personagens engraçados',
      'Múltiplos formatos',
      'Adaptação cultural',
      'Análise de humor'
    ]
  },
  {
    id: 'theme-park-app',
    name: 'App de Parque Temático',
    description: 'Aplicativo completo para parques de diversão',
    icon: Map,
    complexity: 'hard',
    features: [
      'Mapa interativo do parque',
      'Tempos de espera em tempo real',
      'Reserva de atrações',
      'Sistema de fast pass',
      'Localização de amigos',
      'Compra de ingressos'
    ]
  },
  {
    id: 'magic-show-platform',
    name: 'Plataforma de Shows de Magia',
    description: 'Aprenda e compartilhe truques de mágica',
    icon: Wand2,
    complexity: 'medium',
    features: [
      'Biblioteca de truques',
      'Tutoriais em vídeo',
      'Comunidade de mágicos',
      'Avaliação de performances',
      'Loja de acessórios',
      'Eventos e competições'
    ]
  },
  {
    id: 'camping-platform',
    name: 'Plataforma de Camping',
    description: 'Descubra e reserve locais para camping',
    icon: Map,
    complexity: 'medium',
    features: [
      'Mapa de locais',
      'Reservas online',
      'Avaliações de campistas',
      'Equipamentos necessários',
      'Previsão do tempo',
      'Atividades próximas'
    ]
  },
  {
    id: 'party-planning',
    name: 'Planejamento de Festas',
    description: 'Organize festas memoráveis com facilidade',
    icon: Calendar,
    complexity: 'medium',
    features: [
      'Planejamento de eventos',
      'Lista de convidados',
      'Orçamento de festa',
      'Fornecedores recomendados',
      'Cronograma de atividades',
      'Galeria de fotos'
    ]
  },
  {
    id: 'costume-designer',
    name: 'Designer de Fantasias',
    description: 'Crie e compartilhe designs de fantasias',
    icon: Paintbrush,
    complexity: 'medium',
    features: [
      'Editor de fantasias',
      'Galeria de inspirações',
      'Tutoriais de criação',
      'Comunidade de designers',
      'Marketplace de fantasias',
      'Calculadora de materiais'
    ]
  }
];
