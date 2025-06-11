import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Eye, 
  Monitor, 
  Smartphone, 
  Tablet,
  Play,
  Pause,
  RotateCcw,
  Download,
  FileText,
  Settings,
  Database,
  Zap,
  Layout,
  Image
} from 'lucide-react';
import { ProjectTemplate } from '@/utils/projectTemplates';

interface ProjectPreviewProps {
  template: ProjectTemplate;
  projectName: string;
  projectDescription: string;
  customFeatures: string;
  isVisible: boolean;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  template,
  projectName,
  projectDescription,
  customFeatures,
  isVisible
}) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      name: 'Sistema',
      description: 'Interface principal do sistema funcionando',
      content: 'system'
    },
    {
      name: 'Dashboard',
      description: 'Tela principal com métricas e visão geral',
      content: 'dashboard'
    },
    {
      name: 'Funcionalidades',
      description: 'Lista de recursos incluídos no sistema',
      content: 'features'
    },
    {
      name: 'Configurações',
      description: 'Painel de configurações do sistema',
      content: 'settings'
    }
  ];

  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAnimating, screens.length]);

  const getViewportClasses = () => {
    switch (viewMode) {
      case 'mobile':
        return 'w-80 h-96';
      case 'tablet':
        return 'w-96 h-72';
      default:
        return 'w-full h-96';
    }
  };

  const mockSystemView = () => (
    <div className="p-6 space-y-6 bg-gray-50 h-full overflow-y-auto">
      {/* System Screenshot */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <template.icon className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">{projectName}</h1>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Sistema Ativo
          </Badge>
        </div>
        
        {/* System Interface Preview */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-dashed border-blue-200 min-h-[200px] flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
              alt="Sistema em funcionamento"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-600/20 rounded-lg flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2 text-blue-800">
                  <Layout className="w-5 h-5" />
                  <span className="font-semibold">Interface {template.name}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 mb-2">Sistema {projectName} em funcionamento</p>
            <p className="text-xs text-gray-500">Interface responsiva e moderna com React + Supabase</p>
          </div>
        </div>
        
        {/* System Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <div className="text-green-600 text-sm font-medium">Frontend</div>
            <div className="text-green-800 font-bold">React + TS</div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <div className="text-blue-600 text-sm font-medium">Backend</div>
            <div className="text-blue-800 font-bold">Supabase</div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <div className="text-purple-600 text-sm font-medium">Database</div>
            <div className="text-purple-800 font-bold">PostgreSQL</div>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
            <div className="text-orange-600 text-sm font-medium">Auth</div>
            <div className="text-orange-800 font-bold">JWT + RLS</div>
          </div>
        </div>
      </div>

      {/* Live System Features */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <Image className="w-5 h-5 mr-2 text-purple-600" />
          Sistema {projectName} - Funcionalidades Ativas
        </h2>
        
        <div className="space-y-3">
          {template.features.slice(0, 6).map((feature, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-800">{feature}</span>
              </div>
              <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                Ativo
              </Badge>
            </div>
          ))}
        </div>
        
        {customFeatures && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h3 className="font-medium text-gray-900 mb-3">Recursos Personalizados:</h3>
            <div className="space-y-2">
              {customFeatures.split('\n').filter(f => f.trim()).slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-700">{feature.trim()}</span>
                  <Badge variant="outline" className="text-purple-600 border-purple-600 text-xs ml-auto">
                    Personalizado
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const mockDashboard = () => (
    <div className="p-6 space-y-6 bg-gray-50 h-full overflow-y-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <template.icon className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">{projectName}</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">V1.0</Badge>
            <Button size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Config
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Usuários', value: '2,543', icon: '👥' },
          { label: 'Receita', value: 'R$ 45K', icon: '💰' },
          { label: 'Conversão', value: '89.2%', icon: '📊' },
          { label: 'Vendas', value: '156', icon: '🚀' },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-xl font-bold">{stat.value}</p>
              </div>
              <span className="text-2xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Sistema {template.name}</h2>
        <p className="text-gray-600 mb-4">{projectDescription || template.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">Funcionalidades Principais:</h3>
            {template.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          {customFeatures && (
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Recursos Personalizados:</h3>
              {customFeatures.split('\n').filter(f => f.trim()).slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">{feature.trim()}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const mockFeatures = () => (
    <div className="p-6 space-y-6 bg-gray-50 h-full overflow-y-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-6">Funcionalidades do Sistema</h2>
        
        <div className="grid gap-4">
          {template.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{feature}</h3>
                <p className="text-sm text-gray-600">Funcionalidade integrada e pronta para uso</p>
              </div>
              <Badge variant="outline" className="text-green-600 border-green-600">
                Incluído
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const mockSettings = () => (
    <div className="p-6 space-y-6 bg-gray-50 h-full overflow-y-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-6">Configurações do Sistema</h2>
        
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="font-medium text-gray-900 mb-3">Configuração Geral</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Nome do Sistema</label>
                <div className="mt-1 p-2 bg-gray-100 rounded text-sm">{projectName}</div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Versão</label>
                <div className="mt-1 p-2 bg-gray-100 rounded text-sm">1.0.0</div>
              </div>
            </div>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="font-medium text-gray-900 mb-3">Integração Supabase</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <Database className="w-5 h-5 text-green-600" />
                <span className="text-sm text-green-800">PostgreSQL Database - Configurado</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <Zap className="w-5 h-5 text-green-600" />
                <span className="text-sm text-green-800">Autenticação JWT - Ativa</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Recursos Avançados</h3>
            <div className="grid gap-2">
              {['Row Level Security (RLS)', 'API REST Automática', 'Storage de Arquivos', 'Edge Functions'].map((resource, index) => (
                <div key={index} className="flex items-center space-x-3 p-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">{resource}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (!isVisible) return null;

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="w-5 h-5 text-blue-600" />
              <span>Preview do Sistema</span>
            </CardTitle>
            <CardDescription>
              Visualização em tempo real do {projectName}
            </CardDescription>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Viewport Controls */}
            <div className="flex rounded-lg border border-gray-200 p-1">
              <Button
                variant={viewMode === 'desktop' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('desktop')}
              >
                <Monitor className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'tablet' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('tablet')}
              >
                <Tablet className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'mobile' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('mobile')}
              >
                <Smartphone className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Animation Controls */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAnimating(!isAnimating)}
            >
              {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentScreen(0)}
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <Tabs value={screens[currentScreen].name.toLowerCase()} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {screens.map((screen, index) => (
              <TabsTrigger
                key={index}
                value={screen.name.toLowerCase()}
                onClick={() => {
                  setCurrentScreen(index);
                  setIsAnimating(false);
                }}
                className="text-sm"
              >
                {screen.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="mt-6">
            <div className="mb-4 text-center">
              <Badge variant="outline" className="text-xs">
                {screens[currentScreen].description}
              </Badge>
            </div>
            
            <div className={`mx-auto border-2 border-gray-300 rounded-lg overflow-hidden bg-white shadow-lg transition-all duration-300 ${getViewportClasses()}`}>
              <TabsContent value="sistema" className="m-0 h-full">
                {mockSystemView()}
              </TabsContent>
              
              <TabsContent value="dashboard" className="m-0 h-full">
                {mockDashboard()}
              </TabsContent>
              
              <TabsContent value="funcionalidades" className="m-0 h-full">
                {mockFeatures()}
              </TabsContent>
              
              <TabsContent value="configurações" className="m-0 h-full">
                {mockSettings()}
              </TabsContent>
            </div>
          </div>
        </Tabs>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <Code2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Arquivos Incluídos:</span>
          </div>
          <div className="text-xs text-blue-700 space-y-1">
            <div>📁 Frontend completo (React + TypeScript + Tailwind)</div>
            <div>🗄️ Backend Supabase (PostgreSQL + Auth + APIs)</div>
            <div>🎨 Componentes UI profissionais (Shadcn/ui)</div>
            <div>📱 Design totalmente responsivo</div>
            <div>🔒 Autenticação e segurança configuradas</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectPreview;
