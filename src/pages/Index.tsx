
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Download, 
  Rocket, 
  Bot, 
  ShoppingCart, 
  Hotel, 
  Users, 
  FileText, 
  CheckSquare,
  Store,
  CreditCard,
  Building,
  TrendingUp,
  BookOpen,
  BarChart3,
  Smartphone,
  Search,
  Zap,
  Brain
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [customFeatures, setCustomFeatures] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', icon: Bot },
    { id: 'delivery', name: 'Delivery & E-commerce', icon: ShoppingCart },
    { id: 'business', name: 'Negócios & Produtividade', icon: Building },
    { id: 'marketing', name: 'Vendas & Marketing', icon: TrendingUp },
    { id: 'content', name: 'Conteúdo & Educação', icon: BookOpen },
    { id: 'data', name: 'Dados & Projetos', icon: BarChart3 },
    { id: 'health', name: 'Saúde & Bem-estar', icon: Users },
    { id: 'mobile', name: 'Apps Mobile', icon: Smartphone }
  ];

  const templates = [
    // Delivery & E-commerce
    {
      id: 'delivery-system',
      name: 'Sistema de Delivery',
      description: 'Sistema completo de delivery com rastreamento em tempo real, cupons, avaliações e múltiplos gateways de pagamento',
      category: 'delivery',
      features: ['Rastreamento em tempo real', 'Sistema de cupons', 'Avaliações', 'Múltiplos pagamentos', 'Dashboard para entregadores'],
      icon: ShoppingCart,
      color: 'bg-blue-500'
    },
    {
      id: 'ecommerce-complete',
      name: 'E-commerce Completo',
      description: 'Loja virtual completa com IA para recomendações, marketplace, afiliados e integração com ERP',
      category: 'delivery',
      features: ['Carrinho persistente', 'IA para recomendações', 'Marketplace', 'Sistema de afiliados', 'Integração ERP'],
      icon: Store,
      color: 'bg-green-500'
    },
    {
      id: 'hotel-system',
      name: 'Sistema de Hotel',
      description: 'Gestão hoteleira completa com check-in digital, integração com Booking.com e controle de ocupação',
      category: 'delivery',
      features: ['Check-in digital QR Code', 'Integração Booking.com', 'Controle de limpeza', 'Dashboard ocupação'],
      icon: Hotel,
      color: 'bg-purple-500'
    },

    // Negócios & Produtividade
    {
      id: 'crm-empresarial',
      name: 'CRM Empresarial',
      description: 'CRM completo com funil de vendas, automação, lead scoring e previsão de vendas com IA',
      category: 'business',
      features: ['Funil customizável', 'Automação de tarefas', 'Lead scoring', 'Previsão com IA', 'Propostas e contratos'],
      icon: Users,
      color: 'bg-orange-500'
    },
    {
      id: 'task-system',
      name: 'Sistema de Tarefas',
      description: 'Gerenciador de tarefas e projetos com Kanban, time tracking e relatórios de produtividade',
      category: 'business',
      features: ['Kanban drag-drop', 'Time tracking', 'Notificações', 'Relatórios produtividade', 'Integração Calendar'],
      icon: CheckSquare,
      color: 'bg-red-500'
    },
    {
      id: 'erp-basico',
      name: 'ERP Básico para Pequenas Empresas',
      description: 'Sistema ERP completo com financeiro, estoque, vendas e relatórios gerenciais',
      category: 'business',
      features: ['Módulo financeiro', 'Controle de estoque', 'Gestão de vendas', 'Relatórios gerenciais', 'Emissão de NF'],
      icon: Building,
      color: 'bg-indigo-500'
    },
    {
      id: 'agendamento-consultas',
      name: 'Sistema de Agendamento de Consultas',
      description: 'Plataforma para agendamento de consultas com confirmação automática e lembretes',
      category: 'business',
      features: ['Agenda online', 'Confirmação automática', 'Lembretes por email/SMS', 'Pagamento online', 'Histórico de consultas'],
      icon: Users,
      color: 'bg-teal-500'
    },

    // Vendas & Marketing
    {
      id: 'landing-page-generator',
      name: 'Gerador de Landing Pages',
      description: 'Ferramenta para criar landing pages com editor drag-and-drop e testes A/B',
      category: 'marketing',
      features: ['Editor drag-drop', 'Testes A/B', 'Analytics integrado', 'Formulários personalizados', 'SEO otimizado'],
      icon: TrendingUp,
      color: 'bg-pink-500'
    },
    {
      id: 'email-marketing',
      name: 'Plataforma de E-mail Marketing',
      description: 'Sistema completo de email marketing com automação, segmentação e analytics',
      category: 'marketing',
      features: ['Automação de emails', 'Segmentação avançada', 'Templates responsivos', 'A/B testing', 'Analytics detalhado'],
      icon: TrendingUp,
      color: 'bg-yellow-500'
    },
    {
      id: 'copywriting-ai',
      name: 'Ferramenta de Copywriting com IA',
      description: 'Gerador de textos publicitários com IA, templates e otimização para conversão',
      category: 'marketing',
      features: ['Geração com IA', 'Templates diversos', 'Otimização conversão', 'Análise de sentimento', 'Múltiplos idiomas'],
      icon: Brain,
      color: 'bg-cyan-500'
    },

    // Conteúdo & Educação
    {
      id: 'blog-cms',
      name: 'Blog com CMS',
      description: 'Sistema de blog com editor avançado, SEO automático e monetização integrada',
      category: 'content',
      features: ['Editor drag-drop', 'SEO automático com IA', 'Agendamento', 'Analytics por post', 'Newsletter integrada'],
      icon: FileText,
      color: 'bg-emerald-500'
    },
    {
      id: 'lms-cursos',
      name: 'Plataforma de Cursos Online (LMS)',
      description: 'Sistema completo para cursos online com vídeos, quizzes, certificados e gamificação',
      category: 'content',
      features: ['Player de vídeo', 'Sistema de quizzes', 'Certificados automáticos', 'Gamificação', 'Relatórios de progresso'],
      icon: BookOpen,
      color: 'bg-violet-500'
    },
    {
      id: 'portfolio-generator',
      name: 'Gerador de Portfólios',
      description: 'Criador de sites pessoais e portfólios com templates profissionais',
      category: 'content',
      features: ['Templates profissionais', 'Galeria de projetos', 'Blog integrado', 'SEO otimizado', 'Domínio personalizado'],
      icon: FileText,
      color: 'bg-slate-500'
    },

    // Apps Mobile (React Native)
    {
      id: 'delivery-app',
      name: 'App de Delivery',
      description: 'Aplicativo móvel de delivery com rastreamento GPS, push notifications e pagamento integrado',
      category: 'mobile',
      features: ['Rastreamento GPS', 'Push notifications', 'Pagamento in-app', 'Chat com entregador', 'Avaliações'],
      icon: Smartphone,
      color: 'bg-blue-600'
    },
    {
      id: 'task-mobile-app',
      name: 'App de Gestão de Tarefas',
      description: 'App móvel para gestão de tarefas com sincronização offline e colaboração em equipe',
      category: 'mobile',
      features: ['Modo offline', 'Sincronização automática', 'Colaboração em equipe', 'Notificações inteligentes', 'Widget nativo'],
      icon: CheckSquare,
      color: 'bg-green-600'
    },
    {
      id: 'financial-app',
      name: 'App de Controle Financeiro',
      description: 'Aplicativo para controle financeiro pessoal com categorização automática e metas',
      category: 'mobile',
      features: ['Categorização automática', 'Metas financeiras', 'Gráficos e relatórios', 'Sincronização bancária', 'Lembretes'],
      icon: CreditCard,
      color: 'bg-emerald-600'
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const generateProject = async () => {
    if (!selectedTemplate || !projectName) {
      toast({
        title: "Erro",
        description: "Por favor, selecione um template e digite o nome do projeto",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      // Simula processo de geração
      console.log('Gerando projeto:', {
        template: selectedTemplate,
        name: projectName,
        description: projectDescription,
        features: customFeatures
      });

      // Simula tempo de geração
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Cria arquivo ZIP simulado (em produção, aqui seria a lógica real de geração)
      const projectFiles = generateProjectFiles(selectedTemplate, projectName, projectDescription, customFeatures);
      downloadProject(projectFiles, projectName);

      toast({
        title: "Projeto Gerado!",
        description: `${projectName} foi gerado com sucesso e está sendo baixado.`
      });

      // Reset form
      setSelectedTemplate(null);
      setProjectName('');
      setProjectDescription('');
      setCustomFeatures('');
    } catch (error) {
      toast({
        title: "Erro na Geração",
        description: "Ocorreu um erro ao gerar o projeto. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const generateProjectFiles = (template: any, name: string, description: string, features: string) => {
    const packageJson = {
      name: name.toLowerCase().replace(/\s+/g, '-'),
      version: "1.0.0",
      description: description || template.description,
      dependencies: {
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-router-dom": "^6.26.2",
        "@tanstack/react-query": "^5.56.2",
        "tailwindcss": "^3.4.0",
        "lucide-react": "^0.462.0",
        "clsx": "^2.1.1",
        "tailwind-merge": "^2.5.2"
      },
      scripts: {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
      }
    };

    const mainComponent = generateMainComponent(template, name, features);
    const indexHtml = generateIndexHtml(name);
    const readmeContent = generateReadme(template, name, description, features);

    return {
      'package.json': JSON.stringify(packageJson, null, 2),
      'src/App.tsx': mainComponent,
      'index.html': indexHtml,
      'README.md': readmeContent,
      'tailwind.config.js': generateTailwindConfig(),
      'vite.config.ts': generateViteConfig()
    };
  };

  const generateMainComponent = (template: any, name: string, features: string) => {
    return `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;`;
  };

  const generateIndexHtml = (name: string) => {
    return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${name}</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;
  };

  const generateReadme = (template: any, name: string, description: string, features: string) => {
    return `# ${name}

${description || template.description}

## Funcionalidades

${template.features.map((feature: string) => `- ${feature}`).join('\n')}

${features ? `\n## Funcionalidades Personalizadas\n\n${features}` : ''}

## Instalação

\`\`\`bash
npm install
npm run dev
\`\`\`

## Tecnologias

- React 18
- TypeScript
- Tailwind CSS
- React Router
- TanStack Query
- Vite

## Estrutura do Projeto

\`\`\`
src/
  components/     # Componentes reutilizáveis
  pages/         # Páginas da aplicação
  hooks/         # Hooks personalizados
  services/      # Serviços e APIs
  utils/         # Utilitários
\`\`\`

Gerado com ❤️ pelo Gerador de SaaS IA
`;
  };

  const generateTailwindConfig = () => {
    return `module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}`;
  };

  const generateViteConfig = () => {
    return `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})`;
  };

  const downloadProject = (files: any, projectName: string) => {
    // Simula download do ZIP
    const blob = new Blob([JSON.stringify(files, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${projectName.toLowerCase().replace(/\s+/g, '-')}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Gerador de SaaS com IA</h1>
                <p className="text-gray-600">Crie projetos SaaS completos em segundos</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {templates.length} Templates
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                100% Funcional
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-64">
                <SelectValue placeholder="Selecionar categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    <div className="flex items-center space-x-2">
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredTemplates.map((template) => (
            <Card 
              key={template.id} 
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                selectedTemplate?.id === template.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
              }`}
              onClick={() => setSelectedTemplate(template)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${template.color} bg-opacity-10`}>
                    <template.icon className={`w-6 h-6 ${template.color.replace('bg-', 'text-')}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {categories.find(c => c.id === template.category)?.name}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{template.name}</CardTitle>
                <CardDescription className="text-sm">
                  {template.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Funcionalidades:</p>
                  <div className="flex flex-wrap gap-1">
                    {template.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {template.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{template.features.length - 3} mais
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Generation Panel */}
        {selectedTemplate && (
          <Card className="border-t-4 border-t-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-blue-500" />
                <span>Configurar e Gerar Projeto</span>
              </CardTitle>
              <CardDescription>
                Configure os detalhes do seu projeto {selectedTemplate.name}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="projectName">Nome do Projeto *</Label>
                    <Input
                      id="projectName"
                      placeholder="Ex: Meu Sistema de Delivery"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="projectDescription">Descrição do Projeto</Label>
                    <Textarea
                      id="projectDescription"
                      placeholder="Descreva brevemente o que seu projeto fará..."
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="customFeatures">Funcionalidades Personalizadas</Label>
                    <Textarea
                      id="customFeatures"
                      placeholder="Adicione funcionalidades extras que deseja incluir..."
                      value={customFeatures}
                      onChange={(e) => setCustomFeatures(e.target.value)}
                      rows={5}
                    />
                  </div>
                </div>
              </div>

              {/* Template Features Preview */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Funcionalidades Incluídas:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {selectedTemplate.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setSelectedTemplate(null)}
                >
                  Cancelar
                </Button>
                <Button
                  onClick={generateProject}
                  disabled={!projectName || isGenerating}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Gerando...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Gerar e Baixar
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <div className="mt-12 text-center py-8 border-t">
          <p className="text-gray-600">
            Gerador de SaaS com IA - Crie projetos completos e funcionais em segundos
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Todos os projetos gerados incluem código funcional, dependências e documentação completa
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
