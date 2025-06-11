
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
  Database,
  Zap,
  Layout
} from 'lucide-react';
import { ProjectTemplate } from '@/utils/projectTemplates';
import { generateTemplatePreview } from './preview/TemplatePreviewGenerator';

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

  // Gerar preview específico para o template
  const previewData = generateTemplatePreview(template, projectName, customFeatures);
  const screens = previewData.screens;

  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 4000);

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

  if (!isVisible) return null;

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="w-5 h-5 text-blue-600" />
              <span>Preview do Sistema: {template.name}</span>
            </CardTitle>
            <CardDescription>
              Visualização em tempo real do {projectName || template.name}
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
        <Tabs value={screens[currentScreen].name.toLowerCase().replace(/\s+/g, '-')} className="w-full">
          <TabsList className={`grid w-full ${screens.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
            {screens.map((screen, index) => (
              <TabsTrigger
                key={index}
                value={screen.name.toLowerCase().replace(/\s+/g, '-')}
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
              {screens.map((screen, index) => (
                <TabsContent 
                  key={index}
                  value={screen.name.toLowerCase().replace(/\s+/g, '-')} 
                  className="m-0 h-full"
                >
                  {screen.content}
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
        
        {/* Template Info */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <Code2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">
              Template: {template.name} - {template.category}
            </span>
          </div>
          <div className="text-xs text-blue-700 space-y-1">
            <div className="flex items-center space-x-2">
              <Layout className="w-3 h-3" />
              <span>Frontend completo (React + TypeScript + Tailwind)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Database className="w-3 h-3" />
              <span>Backend Supabase (PostgreSQL + Auth + APIs)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-3 h-3" />
              <span>Design responsivo com {template.features.length} funcionalidades incluídas</span>
            </div>
          </div>
          
          {customFeatures && (
            <div className="mt-3 pt-3 border-t border-blue-200">
              <span className="text-sm font-medium text-blue-900">Recursos Personalizados:</span>
              <div className="mt-1 text-xs text-blue-700">
                {customFeatures.split('\n').filter(f => f.trim()).slice(0, 3).map((feature, idx) => (
                  <div key={idx}>• {feature.trim()}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectPreview;
