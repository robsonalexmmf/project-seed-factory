
import { ProjectFile, GeneratedProject } from '../projectGeneratorFactory';
import { ProjectTemplate } from '../../projectTemplates';

interface ProjectConfig {
  projectName: string;
  projectDescription: string;
  customFeatures: string;
  template: ProjectTemplate;
}

export const generateEntertainmentProject = (config: ProjectConfig): GeneratedProject => {
  const files: ProjectFile[] = [
    {
      path: 'src/components/MediaCard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Plus, Heart, Star, Clock } from 'lucide-react';

interface MediaCardProps {
  id: string;
  title: string;
  type: 'movie' | 'series' | 'music' | 'podcast';
  genre: string[];
  rating: number;
  duration: string;
  image: string;
  description: string;
  year: number;
  isInWatchlist?: boolean;
}

const MediaCard: React.FC<MediaCardProps> = ({
  id,
  title,
  type,
  genre,
  rating,
  duration,
  image,
  description,
  year,
  isInWatchlist = false
}) => {
  const typeColors = {
    movie: 'bg-blue-100 text-blue-800',
    series: 'bg-purple-100 text-purple-800',
    music: 'bg-green-100 text-green-800',
    podcast: 'bg-orange-100 text-orange-800'
  };

  const typeLabels = {
    movie: 'Filme',
    series: 'Série',
    music: 'Música',
    podcast: 'Podcast'
  };

  return (
    <Card className="hover:shadow-lg transition-shadow group">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg flex items-center justify-center">
            <Button size="lg" className="rounded-full">
              <Play className="w-6 h-6 mr-2 fill-white" />
              Reproduzir
            </Button>
          </div>
          <Badge className={\`absolute top-3 left-3 \${typeColors[type]}\`}>
            {typeLabels[type]}
          </Badge>
          <Button
            size="sm"
            variant="outline"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white"
          >
            {isInWatchlist ? <Heart className="w-4 h-4 fill-red-500 text-red-500" /> : <Heart className="w-4 h-4" />}
          </Button>
          <div className="absolute bottom-3 left-3 flex items-center space-x-2">
            <div className="flex items-center bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
              <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
            </div>
            <div className="flex items-center bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
              <Clock className="w-3 h-3 mr-1" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{year}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {genre.slice(0, 3).map((g, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {g}
            </Badge>
          ))}
        </div>

        <p className="text-sm text-gray-700 line-clamp-2 mb-4">{description}</p>

        <div className="flex space-x-2">
          <Button size="sm" className="flex-1">
            <Play className="w-4 h-4 mr-1" />
            Assistir
          </Button>
          <Button size="sm" variant="outline">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaCard;`
    },
    {
      path: 'src/components/WatchlistManager.tsx',
      content: `import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Trash2, Play, Clock } from 'lucide-react';

interface WatchlistItem {
  id: string;
  title: string;
  type: 'movie' | 'series' | 'music' | 'podcast';
  image: string;
  addedDate: string;
  progress?: number;
  status: 'to-watch' | 'watching' | 'completed';
}

const WatchlistManager = () => {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([
    {
      id: '1',
      title: 'Inception',
      type: 'movie',
      image: 'https://images.unsplash.com/photo-1489599904471-9d2b0eed4adb?w=300',
      addedDate: '2024-03-15',
      status: 'to-watch'
    },
    {
      id: '2',
      title: 'Breaking Bad',
      type: 'series',
      image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=300',
      addedDate: '2024-03-10',
      progress: 65,
      status: 'watching'
    },
    {
      id: '3',
      title: 'The Shawshank Redemption',
      type: 'movie',
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300',
      addedDate: '2024-03-08',
      status: 'completed'
    }
  ]);

  const statusLabels = {
    'to-watch': 'Para Assistir',
    'watching': 'Assistindo',
    'completed': 'Concluído'
  };

  const statusColors = {
    'to-watch': 'bg-blue-100 text-blue-800',
    'watching': 'bg-yellow-100 text-yellow-800',
    'completed': 'bg-green-100 text-green-800'
  };

  const removeFromWatchlist = (id: string) => {
    setWatchlist(watchlist.filter(item => item.id !== id));
  };

  const getItemsByStatus = (status: string) => {
    return watchlist.filter(item => item.status === status);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span>Minha Lista</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="to-watch" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="to-watch">Para Assistir ({getItemsByStatus('to-watch').length})</TabsTrigger>
              <TabsTrigger value="watching">Assistindo ({getItemsByStatus('watching').length})</TabsTrigger>
              <TabsTrigger value="completed">Concluído ({getItemsByStatus('completed').length})</TabsTrigger>
            </TabsList>
            
            {['to-watch', 'watching', 'completed'].map((status) => (
              <TabsContent key={status} value={status} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getItemsByStatus(status).map((item) => (
                    <Card key={item.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex space-x-4">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-20 h-28 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium mb-2 line-clamp-2">{item.title}</h4>
                            <Badge className={statusColors[item.status]} variant="outline">
                              {statusLabels[item.status]}
                            </Badge>
                            
                            {item.progress && (
                              <div className="mt-2">
                                <div className="flex items-center justify-between text-sm mb-1">
                                  <span>Progresso</span>
                                  <span>{item.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1">
                                  <div 
                                    className="bg-blue-500 h-1 rounded-full"
                                    style={{ width: \`\${item.progress}%\` }}
                                  ></div>
                                </div>
                              </div>
                            )}
                            
                            <div className="flex items-center text-xs text-gray-500 mt-2">
                              <Clock className="w-3 h-3 mr-1" />
                              <span>Adicionado em {new Date(item.addedDate).toLocaleDateString('pt-BR')}</span>
                            </div>
                            
                            <div className="flex space-x-2 mt-3">
                              <Button size="sm" variant="outline" className="flex-1">
                                <Play className="w-3 h-3 mr-1" />
                                {item.status === 'completed' ? 'Reassistir' : 'Assistir'}
                              </Button>
                              <Button 
                                size="sm" 
                                variant="destructive"
                                onClick={() => removeFromWatchlist(item.id)}
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {getItemsByStatus(status).length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <Heart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Nenhum item nesta categoria ainda.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default WatchlistManager;`
    },
    {
      path: 'src/App.tsx',
      content: `import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MediaCard from './components/MediaCard';
import WatchlistManager from './components/WatchlistManager';
import { Button } from '@/components/ui/button';
import { Play, Search, Heart, Trending, Star } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const featuredContent = [
    {
      id: '1',
      title: 'Stranger Things 4',
      type: 'series' as const,
      genre: ['Ficção Científica', 'Drama', 'Terror'],
      rating: 4.8,
      duration: '8 episódios',
      image: 'https://images.unsplash.com/photo-1489599904471-9d2b0eed4adb?w=400',
      description: 'Uma nova temporada cheia de mistérios e aventuras sobrenaturais.',
      year: 2024
    },
    {
      id: '2',
      title: 'Top Gun: Maverick',
      type: 'movie' as const,
      genre: ['Ação', 'Drama'],
      rating: 4.9,
      duration: '2h 10min',
      image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400',
      description: 'Pete "Maverick" Mitchell retorna para uma missão impossível.',
      year: 2024
    },
    {
      id: '3',
      title: 'Spotify Sessions',
      type: 'music' as const,
      genre: ['Pop', 'Indie', 'Rock'],
      rating: 4.7,
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
      description: 'Uma seleção especial dos melhores artistas indies da temporada.',
      year: 2024
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-red-500">${config.projectName}</h1>
              
              <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Buscar filmes, séries, música..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant={currentView === 'home' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('home')}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Início
                </Button>
                <Button
                  variant={currentView === 'trending' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('trending')}
                >
                  <Trending className="w-4 h-4 mr-2" />
                  Em Alta
                </Button>
                <Button
                  variant={currentView === 'watchlist' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('watchlist')}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Minha Lista
                </Button>
                <Button variant="outline">
                  <Star className="w-4 h-4 mr-2" />
                  Favoritos
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6">
          {currentView === 'home' && (
            <div>
              {/* Hero Section */}
              <div className="relative mb-8 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1489599904471-9d2b0eed4adb?w=1200&h=400"
                  alt="Featured"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                  <div className="absolute bottom-8 left-8">
                    <h2 className="text-4xl font-bold mb-4">Stranger Things 4</h2>
                    <p className="text-lg mb-6 max-w-2xl">Uma nova temporada cheia de mistérios sobrenaturais que vai te manter grudado na tela.</p>
                    <div className="flex space-x-4">
                      <Button size="lg" className="bg-red-600 hover:bg-red-700">
                        <Play className="w-5 h-5 mr-2 fill-white" />
                        Assistir Agora
                      </Button>
                      <Button size="lg" variant="outline">
                        <Heart className="w-5 h-5 mr-2" />
                        Adicionar à Lista
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Conteúdo em Destaque</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredContent.map((item) => (
                    <MediaCard key={item.id} {...item} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentView === 'watchlist' && <WatchlistManager />}

          {currentView === 'trending' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Conteúdo em Alta</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredContent.map((item) => (
                  <MediaCard key={item.id} {...item} />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </Router>
  );
}

export default App;`
    }
  ];

  return {
    files,
    name: config.projectName,
    description: `Plataforma completa de entretenimento com ${config.template.name}`,
    features: [
      'Streaming de mídia',
      'Lista de reprodução personalizada',
      'Sistema de recomendações',
      'Controle de progresso',
      'Interface intuitiva',
      'Busca avançada',
      ...config.template.features
    ]
  };
};
