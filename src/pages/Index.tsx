import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
  Shield,
  Globe,
  Code,
  Layers,
  Crown,
  Lock,
  LogOut,
  Settings,
  Users
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { projectTemplates, templateCategories, getTemplatesByCategory, searchTemplates } from '@/utils/projectTemplates';
import { generateAndDownloadProject } from '@/utils/projectGenerator';
import TemplateCard from '@/components/TemplateCard';
import ProjectGeneratorModal from '@/components/ProjectGeneratorModal';
import UserTooltip from '@/components/UserTooltip';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const { user, userProfile, signOut, canGenerate, incrementProjectCount } = useAuth();
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [customFeatures, setCustomFeatures] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTemplateSelect = (template: any) => {
    if (!userProfile) {
      toast({
        title: "Login necessário",
        description: "Faça login para gerar projetos",
        variant: "destructive"
      });
      return;
    }

    if (!canGenerate()) {
      toast({
        title: "Limite de projetos atingido! 🚀",
        description: "Você atingiu seu limite mensal. Faça upgrade para continuar gerando!",
        variant: "destructive"
      });
      return;
    }
    
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const generateProject = async () => {
    if (!selectedTemplate || !projectName) {
      toast({
        title: "Erro de Validação",
        description: "Por favor, selecione um template e digite o nome do projeto",
        variant: "destructive"
      });
      return;
    }

    if (!canGenerate()) {
      toast({
        title: "Limite de projetos atingido! 🚀",
        description: "Você atingiu seu limite mensal. Faça upgrade para continuar gerando!",
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

      // Incrementa contador de projetos
      await incrementProjectCount();

      toast({
        title: "🎉 Projeto Gerado com Sucesso!",
        description: `${projectName} foi gerado com frontend + backend Supabase completo! Execute 'npm install' e configure as variáveis de ambiente.`
      });

      // Reset form and close modal
      setSelectedTemplate(null);
      setProjectName('');
      setProjectDescription('');
      setCustomFeatures('');
      setIsModalOpen(false);
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

  // Filtrar templates
  const filteredTemplates = selectedCategory === 'all' 
    ? searchTerm 
      ? searchTemplates(searchTerm)
      : projectTemplates
    : searchTerm
      ? searchTemplates(searchTerm).filter(t => t.category === selectedCategory)
      : getTemplatesByCategory(selectedCategory);

  const totalTemplates = projectTemplates.length;
  const categoryCounts = templateCategories.map(cat => ({
    ...cat,
    count: cat.id === 'all' ? totalTemplates : getTemplatesByCategory(cat.id).length
  }));

  const getProjectsRemaining = () => {
    if (!userProfile) return 0;
    if (userProfile.plan_type === 'admin' || userProfile.plan_type === 'business') return -1; // Ilimitado
    return Math.max(0, userProfile.monthly_limit - userProfile.current_month_projects);
  };

  const projectsRemaining = getProjectsRemaining();

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Logout realizado",
        description: "Você foi desconectado com sucesso."
      });
    } catch (error) {
      toast({
        title: "Erro no logout",
        description: "Erro ao fazer logout. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 shadow-2xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* User Status and Navigation */}
          {userProfile && (
            <div className="absolute top-4 right-4">
              <div className="flex items-center space-x-4">
                {/* Admin Dashboard Access */}
                {userProfile.plan_type === 'admin' && (
                  <Link to="/admin">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Admin Dashboard
                    </Button>
                  </Link>
                )}
                
                {/* User Status Card com Tooltip */}
                <UserTooltip userProfile={userProfile}>
                  <div className="bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
                    <div className="flex items-center space-x-2 text-white text-sm">
                      {userProfile.plan_type === 'admin' ? (
                        <Crown className="w-4 h-4 text-yellow-300" />
                      ) : userProfile.plan_type === 'business' ? (
                        <Star className="w-4 h-4 text-purple-300" />
                      ) : userProfile.plan_type === 'pro' ? (
                        <Zap className="w-4 h-4 text-blue-300" />
                      ) : (
                        <Timer className="w-4 h-4 text-green-300" />
                      )}
                      <span className="font-semibold capitalize">{userProfile.plan_type}</span>
                      <div className="h-4 w-px bg-white/30 mx-2"></div>
                      <span className="text-xs">
                        {userProfile.current_month_projects} / {userProfile.monthly_limit === -1 ? '∞' : userProfile.monthly_limit}
                      </span>
                    </div>
                  </div>
                </UserTooltip>
                
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sair
                </Button>
              </div>
            </div>
          )}

          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-2xl border border-white/20">
                <Bot className="w-16 h-16 text-white drop-shadow-lg" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
              Gerador de SaaS
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                com IA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto font-light">
              Crie projetos SaaS completos com <span className="font-bold text-yellow-300">Frontend + Backend</span> em segundos. Mais de 
              <span className="font-bold text-yellow-300 mx-2">{totalTemplates} templates</span> 
              profissionais com Supabase integrado.
            </p>

            {/* Status do usuário e limite de projetos */}
            {userProfile && (
              <div className="flex justify-center mb-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-6 text-white">
                    <div className="flex items-center space-x-2">
                      {userProfile.plan_type === 'admin' ? (
                        <Crown className="w-6 h-6 text-yellow-300" />
                      ) : userProfile.plan_type === 'business' ? (
                        <Star className="w-6 h-6 text-purple-300" />
                      ) : userProfile.plan_type === 'pro' ? (
                        <Zap className="w-6 h-6 text-blue-300" />
                      ) : (
                        <Timer className="w-6 h-6 text-green-300" />
                      )}
                      <span className="font-bold text-lg capitalize">Plano {userProfile.plan_type}</span>
                    </div>
                    
                    <div className="h-6 w-px bg-white/30"></div>
                    
                    <div className="text-center">
                      <div className="text-sm text-blue-100">Projetos Usados</div>
                      <div className="text-xl font-bold">
                        {userProfile.current_month_projects}
                        {userProfile.plan_type === 'freemium' && ' / 2'}
                        {userProfile.plan_type === 'pro' && ' / 10'}
                        {(userProfile.plan_type === 'business' || userProfile.plan_type === 'admin') && ' / ∞'}
                      </div>
                    </div>
                    
                    <div className="h-6 w-px bg-white/30"></div>
                    
                    <div className="text-lg">
                      {projectsRemaining === -1 ? (
                        <span className="text-green-300 font-bold">Projetos Ilimitados</span>
                      ) : (
                        <span className={`font-bold ${projectsRemaining === 0 ? 'text-red-300' : 'text-green-300'}`}>
                          {projectsRemaining} projetos restantes
                        </span>
                      )}
                    </div>
                    
                    {((userProfile.plan_type === 'freemium' && projectsRemaining <= 1) || 
                      (userProfile.plan_type === 'pro' && projectsRemaining <= 2)) && (
                      <Link to="/subscription">
                        <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                          <Crown className="w-4 h-4 mr-2" />
                          Fazer Upgrade
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 text-lg font-bold shadow-lg">
                <CheckCircle className="w-5 h-5 mr-2" />
                Frontend + Backend
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-6 py-3 text-lg font-bold shadow-lg">
                <Zap className="w-5 h-5 mr-2" />
                Supabase Incluído
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 text-lg font-bold shadow-lg">
                <Timer className="w-5 h-5 mr-2" />
                Pronto em Segundos
              </Badge>
              <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 text-lg font-bold shadow-lg">
                <Shield className="w-5 h-5 mr-2" />
                Código Limpo
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filters */}
        <div className="mb-16 space-y-8">
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
              <Input
                placeholder="Buscar templates... (ex: delivery, crm, blog)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-16 h-16 text-xl border-3 border-gray-200 focus:border-purple-500 rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm transition-all duration-300 focus:shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity -z-10"></div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="text-center">
            <Label className="text-2xl font-bold text-gray-800 mb-6 block">
              Categorias de Templates
            </Label>
            <div className="flex flex-wrap justify-center gap-4">
              {categoryCounts.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="lg"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300 font-bold text-lg shadow-lg ${
                    selectedCategory === category.id 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl transform scale-110 text-white' 
                      : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105 border-2 border-gray-200 hover:border-purple-300 bg-white/80 backdrop-blur-sm'
                  }`}
                >
                  <category.icon className="w-6 h-6" />
                  <span>{category.name}</span>
                  <Badge variant="secondary" className={`ml-2 ${selectedCategory === category.id ? 'bg-white/20 text-white' : ''}`}>
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-blue-200">
            <p className="text-2xl text-gray-700 font-semibold">
              {searchTerm ? (
                <>Encontrados <span className="font-black text-blue-600 text-3xl">{filteredTemplates.length}</span> templates para <span className="text-purple-600 font-bold">"{searchTerm}"</span></>
              ) : (
                <>Exibindo <span className="font-black text-blue-600 text-3xl">{filteredTemplates.length}</span> templates da categoria <span className="font-bold text-purple-600">{templateCategories.find(c => c.id === selectedCategory)?.name}</span></>
              )}
            </p>
          </div>
        </div>

        {/* Templates Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                isSelected={false}
                onSelect={() => handleTemplateSelect(template)}
                categoryName={templateCategories.find(c => c.id === template.category)?.name || ''}
                isBlocked={userProfile ? !canGenerate() : false}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Search className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nenhum template encontrado
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              Tente buscar por outros termos ou selecione uma categoria diferente
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-bold rounded-2xl shadow-xl"
            >
              Ver Todos os Templates
            </Button>
          </div>
        )}

        {/* Feature Highlights */}
        <div className="mt-24 py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
          <div className="relative">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black mb-6">
                Por que escolher nosso gerador?
              </h3>
              <p className="text-2xl text-purple-100 font-light">
                A maneira mais rápida de criar SaaS profissionais completos
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 px-8">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Frontend + Backend</h4>
                <p className="text-purple-100 text-lg">
                  Projetos completos com interface React e backend Supabase integrado
                </p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform">
                  <Timer className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Banco de Dados Incluído</h4>
                <p className="text-purple-100 text-lg">
                  PostgreSQL, autenticação, storage e APIs prontas para uso
                </p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Segurança Avançada</h4>
                <p className="text-purple-100 text-lg">
                  Row Level Security (RLS) e autenticação JWT configurados
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center py-16 border-t-2 border-gradient-to-r from-blue-200 to-purple-200">
          <div className="flex justify-center items-center space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 text-2xl mb-4 font-bold">
            Gerador de SaaS com IA - Frontend + Backend Completo
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todos os projetos incluem código funcional, banco de dados, autenticação e estão prontos para produção
          </p>
        </div>
      </div>

      {/* Project Generator Modal */}
      <ProjectGeneratorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTemplate={selectedTemplate}
        projectName={projectName}
        projectDescription={projectDescription}
        customFeatures={customFeatures}
        isGenerating={isGenerating}
        onProjectNameChange={setProjectName}
        onProjectDescriptionChange={setProjectDescription}
        onCustomFeaturesChange={setCustomFeatures}
        onGenerate={generateProject}
      />
    </div>
  );
};

export default Index;
