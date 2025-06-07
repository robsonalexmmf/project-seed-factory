
import { Music, Video, Gamepad2, Mic, Camera, Theater, Radio, Headphones, Film, Tv } from 'lucide-react';
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
  }
];
