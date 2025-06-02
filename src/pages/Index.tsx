
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Download, 
  Rocket, 
  Bot, 
  Search,
  Zap,
  Star,
  CheckCircle,
  Sparkles,
  Timer,
  Shield
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { projectTemplates, categories, getTemplatesByCategory, searchTemplates } from '@/utils/projectTemplates';
import { generateAndDownloadProject } from '@/utils/projectGenerator';
import TemplateCard from '@/components/TemplateCard';
import ProjectGenerator from '@/components/ProjectGenerator';

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [customFeatures, setCustomFeatures] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filtrar templates
  const filteredTemplates = selectedCategory === 'all' 
    ? searchTerm 
      ? searchTemplates(searchTerm)
      : projectTemplates
    : searchTerm
      ? searchTemplates(searchTerm).filter(t => t.category === selectedCategory)
      : getTemplatesByCategory(selectedCategory);

  const generateProject = async () => {
    if (!selectedTemplate || !projectName) {
      toast({
        title: "Erro de Validação",
        description: "Por favor, selecione um template e digite o nome do projeto",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      console.log('Iniciando geração do projeto:', {
        template: selectedTemplate,
        name: projectName,
        description: projectDescription,
        features: customFeatures
      });

      // Simula tempo de geração
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Gera e baixa o projeto
      await generateAndDownloadProject({
        template: selectedTemplate,
        name: projectName,
        description: projectDescription,
        features: customFeatures
      });

      toast({
        title: "🎉 Projeto Gerado com Sucesso!",
        description: `${projectName} foi gerado e está sendo baixado. Execute 'npm install' e depois 'npm run dev' para rodar o projeto.`
      });

      // Reset form
      setSelectedTemplate(null);
      setProjectName('');
      setProjectDescription('');
      setCustomFeatures('');
    } catch (error) {
      console.error('Erro na geração:', error);
      toast({
        title: "Erro na Geração",
        description: "Ocorreu um erro ao gerar o projeto. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const totalTemplates = projectTemplates.length;
  const categoryCounts = categories.map(cat => ({
    ...cat,
    count: cat.id === 'all' ? totalTemplates : getTemplatesByCategory(cat.id).length
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg">
                <Bot className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Gerador de SaaS com IA
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Crie projetos SaaS completos e funcionais em segundos. Mais de <span className="font-bold text-blue-600">{totalTemplates} templates</span> profissionais prontos para uso.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                {totalTemplates}+ Templates
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                100% Funcional
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
                <Timer className="w-4 h-4 mr-2" />
                Pronto em Segundos
              </Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Código Limpo
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Buscar templates... (ex: delivery, crm, blog)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="text-center">
            <Label className="text-lg font-semibold text-gray-700 mb-4 block">
              Categorias de Templates
            </Label>
            <div className="flex flex-wrap justify-center gap-3">
              {categoryCounts.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="lg"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                    selectedCategory === category.id 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg transform scale-105' 
                      : 'hover:bg-gray-50 hover:scale-105'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8 text-center">
          <p className="text-lg text-gray-600">
            {searchTerm ? (
              <>Encontrados <span className="font-bold text-blue-600">{filteredTemplates.length}</span> templates para "{searchTerm}"</>
            ) : (
              <>Exibindo <span className="font-bold text-blue-600">{filteredTemplates.length}</span> templates da categoria <span className="font-bold">{categories.find(c => c.id === selectedCategory)?.name}</span></>
            )}
          </p>
        </div>

        {/* Templates Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                isSelected={selectedTemplate?.id === template.id}
                onSelect={() => setSelectedTemplate(template)}
                categoryName={categories.find(c => c.id === template.category)?.name || ''}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum template encontrado
            </h3>
            <p className="text-gray-600 mb-6">
              Tente buscar por outros termos ou selecione uma categoria diferente
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              variant="outline"
            >
              Ver Todos os Templates
            </Button>
          </div>
        )}

        {/* Project Generator */}
        <ProjectGenerator
          selectedTemplate={selectedTemplate}
          projectName={projectName}
          projectDescription={projectDescription}
          customFeatures={customFeatures}
          isGenerating={isGenerating}
          onProjectNameChange={setProjectName}
          onProjectDescriptionChange={setProjectDescription}
          onCustomFeaturesChange={setCustomFeatures}
          onGenerate={generateProject}
          onCancel={() => setSelectedTemplate(null)}
        />

        {/* Feature Highlights */}
        <div className="mt-20 py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Por que escolher nosso gerador?
            </h3>
            <p className="text-xl text-blue-100">
              A maneira mais rápida de criar SaaS profissionais
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 px-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Código Profissional</h4>
              <p className="text-blue-100">
                Código limpo, organizado e seguindo as melhores práticas do mercado
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Timer className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Pronto para Produção</h4>
              <p className="text-blue-100">
                Projetos completos com todas as dependências e configurações necessárias
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Sempre Atualizado</h4>
              <p className="text-blue-100">
                Tecnologias modernas: React 18, TypeScript, Tailwind CSS e muito mais
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center py-12 border-t border-gray-200">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
          </div>
          <p className="text-gray-600 text-lg mb-2">
            Gerador de SaaS com IA - Transforme suas ideias em realidade
          </p>
          <p className="text-sm text-gray-500">
            Todos os projetos incluem código funcional, documentação completa e estão prontos para execução
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
