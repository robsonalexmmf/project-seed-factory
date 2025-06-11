
import { ProjectFile, GeneratedProject } from '../projectGeneratorFactory';
import { ProjectTemplate } from '../../projectTemplates';

interface ProjectConfig {
  projectName: string;
  projectDescription: string;
  customFeatures: string;
  template: ProjectTemplate;
}

export const generateUtilityProject = (config: ProjectConfig): GeneratedProject => {
  const files: ProjectFile[] = [
    {
      path: 'src/components/FeatureCard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Clock, Users, Star } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  usage: number;
  rating: number;
  isNew?: boolean;
  onUse: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  category,
  usage,
  rating,
  isNew = false,
  onUse
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
              {icon}
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
            </div>
          </div>
          {isNew && (
            <Badge className="bg-green-500">
              Novo
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
          
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{usage.toLocaleString()} usos</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
            </div>
          </div>

          <Button onClick={onUse} className="w-full group-hover:bg-blue-600">
            <ExternalLink className="w-4 h-4 mr-2" />
            Usar Ferramenta
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;`
    },
    {
      path: 'src/components/ToolsDashboard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  FileText, 
  Calendar,
  Clock,
  Users,
  BarChart3,
  Settings,
  Zap,
  TrendingUp
} from 'lucide-react';

const ToolsDashboard = () => {
  const recentTools = [
    { name: 'Calculadora de ROI', lastUsed: '2 horas atrás', category: 'Financeiro' },
    { name: 'Gerador de QR Code', lastUsed: '1 dia atrás', category: 'Utilidades' },
    { name: 'Conversor de Unidades', lastUsed: '2 dias atrás', category: 'Conversores' },
    { name: 'Validador de CPF', lastUsed: '3 dias atrás', category: 'Validadores' }
  ];

  const popularTools = [
    { name: 'Gerador de Senha', uses: 15420, rating: 4.8 },
    { name: 'Calculadora de Desconto', uses: 12380, rating: 4.7 },
    { name: 'Conversor de Moeda', uses: 9650, rating: 4.6 },
    { name: 'Gerador de Lorem Ipsum', uses: 8900, rating: 4.5 }
  ];

  const categories = [
    { name: 'Calculadoras', count: 25, icon: Calculator },
    { name: 'Conversores', count: 18, icon: FileText },
    { name: 'Geradores', count: 22, icon: Zap },
    { name: 'Validadores', count: 15, icon: Settings },
    { name: 'Data e Hora', count: 12, icon: Calendar },
    { name: 'Produtividade', count: 20, icon: TrendingUp }
  ];

  const stats = [
    { title: 'Total de Ferramentas', value: '112', icon: Settings },
    { title: 'Usos Hoje', value: '1.2K', icon: Clock },
    { title: 'Usuários Ativos', value: '8.5K', icon: Users },
    { title: 'Avaliação Média', value: '4.7', icon: BarChart3 }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Categorias de Ferramentas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                    <category.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">{category.name}</p>
                    <p className="text-sm text-gray-600">{category.count} ferramentas</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Tools */}
        <Card>
          <CardHeader>
            <CardTitle>Ferramentas Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTools.map((tool, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">{tool.name}</p>
                    <p className="text-sm text-gray-600">{tool.lastUsed}</p>
                  </div>
                  <Badge variant="outline">{tool.category}</Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                Ver Histórico Completo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Popular Tools */}
      <Card>
        <CardHeader>
          <CardTitle>Ferramentas Mais Populares</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularTools.map((tool, index) => (
              <div key={index} className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer">
                <h4 className="font-medium mb-2">{tool.name}</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>{tool.uses.toLocaleString()} usos</p>
                  <div className="flex items-center justify-center space-x-1">
                    <span>⭐</span>
                    <span>{tool.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-16 flex-col space-y-2">
              <Zap className="w-6 h-6" />
              <span>Nova Ferramenta</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <BarChart3 className="w-6 h-6" />
              <span>Ver Estatísticas</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <Settings className="w-6 h-6" />
              <span>Configurações</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ToolsDashboard;`
    },
    {
      path: 'src/App.tsx',
      content: `import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeatureCard from './components/FeatureCard';
import ToolsDashboard from './components/ToolsDashboard';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Calculator, 
  FileText, 
  Zap, 
  Settings, 
  BarChart3,
  Search,
  Star,
  Clock
} from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const features = [
    {
      title: 'Calculadora Científica',
      description: 'Calculadora avançada com funções científicas, trigonométricas e estatísticas.',
      icon: <Calculator className="w-5 h-5" />,
      category: 'Calculadoras',
      usage: 15420,
      rating: 4.8,
      isNew: false,
      onUse: () => console.log('Usando Calculadora')
    },
    {
      title: 'Gerador de QR Code',
      description: 'Crie códigos QR personalizados para URLs, textos, números de telefone e mais.',
      icon: <Zap className="w-5 h-5" />,
      category: 'Geradores',
      usage: 12380,
      rating: 4.7,
      isNew: true,
      onUse: () => console.log('Usando Gerador QR')
    },
    {
      title: 'Conversor de Unidades',
      description: 'Converta entre diferentes unidades de medida: peso, distância, temperatura, etc.',
      icon: <FileText className="w-5 h-5" />,
      category: 'Conversores',
      usage: 9650,
      rating: 4.6,
      onUse: () => console.log('Usando Conversor')
    },
    {
      title: 'Validador de Documentos',
      description: 'Valide CPF, CNPJ, cartões de crédito e outros documentos brasileiros.',
      icon: <Settings className="w-5 h-5" />,
      category: 'Validadores',
      usage: 8900,
      rating: 4.5,
      onUse: () => console.log('Usando Validador')
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-blue-600">${config.projectName}</h1>
              
              <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Buscar ferramentas..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant={currentView === 'dashboard' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('dashboard')}
                >
                  <Home className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button
                  variant={currentView === 'tools' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('tools')}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Ferramentas
                </Button>
                <Button
                  variant={currentView === 'favorites' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('favorites')}
                >
                  <Star className="w-4 h-4 mr-2" />
                  Favoritos
                </Button>
                <Button
                  variant={currentView === 'recent' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('recent')}
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Recentes
                </Button>
                <Button variant="outline">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Estatísticas
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6">
          {currentView === 'dashboard' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Central de Utilidades</h2>
                <p className="text-gray-600">Acesse suas ferramentas favoritas e descubra novas utilidades</p>
              </div>
              <ToolsDashboard />
            </div>
          )}

          {currentView === 'tools' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Todas as Ferramentas</h2>
                <p className="text-gray-600">{features.length} ferramentas disponíveis</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          )}

          {currentView === 'favorites' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Ferramentas Favoritas</h2>
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <Star className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Nenhum favorito ainda</h3>
                <p className="text-gray-600">Marque suas ferramentas favoritas para acesso rápido.</p>
              </div>
            </div>
          )}

          {currentView === 'recent' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Ferramentas Recentes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.slice(0, 3).map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
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
    description: `Plataforma de utilidades com ${config.template.name}`,
    features: [
      'Ferramentas online variadas',
      'Interface intuitiva',
      'Categorização inteligente',
      'Histórico de uso',
      'Sistema de favoritos',
      'Busca avançada',
      ...config.template.features
    ]
  };
};
