import { 
  ShoppingCart, 
  Store, 
  Package, 
  CreditCard, 
  BarChart3, 
  Users, 
  Calendar, 
  FileText, 
  MessageSquare, 
  Heart, 
  Briefcase, 
  Building, 
  Truck, 
  MapPin, 
  Phone,
  GraduationCap, 
  BookOpen, 
  Video, 
  Award, 
  Calculator, 
  Globe, 
  Brain, 
  Code,
  Music, 
  Gamepad2, 
  Mic, 
  Camera, 
  Radio, 
  Headphones, 
  Film, 
  Tv,
  Lock, 
  Database, 
  Cloud, 
  Settings, 
  Zap, 
  Wrench,
  Activity,
  Stethoscope,
  Shield,
  Pill,
  Theater,
  CheckCircle
} from 'lucide-react';

import { businessTemplates } from './templates/businessTemplates';
import { educationTemplates } from './templates/educationTemplates';
import { healthTemplates } from './templates/healthTemplates';
import { entertainmentTemplates } from './templates/entertainmentTemplates';
import { utilityTemplates } from './templates/utilityTemplates';
import { advancedSaasTemplates } from './templates/advancedSaasTemplates';

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  icon: any;
  complexity: 'easy' | 'medium' | 'hard';
  features: string[];
  category?: string;
}

export interface TemplateCategory {
  id: string;
  name: string;
  description: string;
  icon?: any;
  templates: ProjectTemplate[];
}

// Templates originais mantidos
const originalTemplates: ProjectTemplate[] = [
  {
    id: 'todo-app',
    name: 'Aplicativo de Tarefas',
    description: 'Um gerenciador de tarefas simples e eficiente para organizar sua rotina',
    icon: CheckCircle,
    complexity: 'easy',
    category: 'utility',
    features: [
      'Adicionar e remover tarefas',
      'Marcar como concluído',
      'Filtros por status',
      'Armazenamento local',
      'Interface responsiva'
    ]
  },
  {
    id: 'blog-platform',
    name: 'Plataforma de Blog',
    description: 'Sistema completo para criação e gerenciamento de blogs',
    icon: FileText,
    complexity: 'medium',
    category: 'utility',
    features: [
      'Editor de posts rico',
      'Sistema de categorias',
      'Comentários dos usuários',
      'SEO otimizado',
      'Painel administrativo',
      'Sistema de tags'
    ]
  },
  {
    id: 'weather-app',
    name: 'App de Clima',
    description: 'Aplicativo de previsão do tempo com dados em tempo real',
    icon: Cloud,
    complexity: 'medium',
    category: 'utility',
    features: [
      'Previsão atual e semanal',
      'Múltiplas cidades',
      'Gráficos interativos',
      'Alertas meteorológicos',
      'Geolocalização automática',
      'Dados históricos'
    ]
  },
  {
    id: 'expense-tracker',
    name: 'Controle de Gastos',
    description: 'Gerencie suas finanças pessoais de forma inteligente',
    icon: BarChart3,
    complexity: 'medium',
    category: 'business',
    features: [
      'Registro de receitas e despesas',
      'Categorização automática',
      'Relatórios visuais',
      'Metas de economia',
      'Lembretes de pagamento',
      'Exportação de dados'
    ]
  },
  {
    id: 'recipe-app',
    name: 'Livro de Receitas',
    description: 'Aplicativo para descobrir e compartilhar receitas culinárias',
    icon: Heart,
    complexity: 'easy',
    category: 'utility',
    features: [
      'Catálogo de receitas',
      'Busca por ingredientes',
      'Lista de compras automática',
      'Avaliações e comentários',
      'Modo passo-a-passo',
      'Favoritos pessoais'
    ]
  }
];

// Adicionar categoria aos templates importados
const businessTemplatesWithCategory = businessTemplates.map(template => ({
  ...template,
  category: 'business'
}));

const educationTemplatesWithCategory = educationTemplates.map(template => ({
  ...template,
  category: 'education'
}));

const healthTemplatesWithCategory = healthTemplates.map(template => ({
  ...template,
  category: 'health'
}));

const entertainmentTemplatesWithCategory = entertainmentTemplates.map(template => ({
  ...template,
  category: 'entertainment'
}));

const utilityTemplatesWithCategory = utilityTemplates.map(template => ({
  ...template,
  category: 'utility'
}));

// Adicionar novos templates SaaS avançados
const advancedSaasTemplatesWithCategory = advancedSaasTemplates.map(template => ({
  ...template,
  category: 'business'
}));

// Combine todos os templates
const allTemplates = [
  ...originalTemplates,
  ...businessTemplatesWithCategory,
  ...educationTemplatesWithCategory,
  ...healthTemplatesWithCategory,
  ...entertainmentTemplatesWithCategory,
  ...utilityTemplatesWithCategory,
  ...advancedSaasTemplatesWithCategory
];

export const templateCategories: TemplateCategory[] = [
  {
    id: 'business',
    name: 'Negócios e E-commerce',
    description: 'Soluções para empresas, vendas online e gestão comercial',
    icon: Briefcase,
    templates: [
      ...originalTemplates.filter(t => t.category === 'business'), 
      ...businessTemplatesWithCategory,
      ...advancedSaasTemplatesWithCategory
    ]
  },
  {
    id: 'education',
    name: 'Educação e Aprendizado',
    description: 'Plataformas educacionais, cursos online e ferramentas de ensino',
    icon: GraduationCap,
    templates: educationTemplatesWithCategory
  },
  {
    id: 'health',
    name: 'Saúde e Bem-estar',
    description: 'Aplicações médicas, fitness e cuidados com a saúde',
    icon: Heart,
    templates: healthTemplatesWithCategory
  },
  {
    id: 'entertainment',
    name: 'Entretenimento e Mídia',
    description: 'Plataformas de streaming, jogos e conteúdo digital',
    icon: Music,
    templates: entertainmentTemplatesWithCategory
  },
  {
    id: 'utility',
    name: 'Utilitários e Produtividade',
    description: 'Ferramentas úteis para o dia a dia e produtividade',
    icon: Settings,
    templates: [...originalTemplates.filter(t => t.category === 'utility'), ...utilityTemplatesWithCategory]
  }
];

export const projectTemplates = allTemplates;

export const getTemplatesByCategory = (categoryId: string): ProjectTemplate[] => {
  if (categoryId === 'all') {
    return projectTemplates;
  }
  return projectTemplates.filter(template => template.category === categoryId);
};

export const searchTemplates = (searchTerm: string): ProjectTemplate[] => {
  const lowercaseSearch = searchTerm.toLowerCase();
  return projectTemplates.filter(template => 
    template.name.toLowerCase().includes(lowercaseSearch) ||
    template.description.toLowerCase().includes(lowercaseSearch) ||
    template.features.some(feature => feature.toLowerCase().includes(lowercaseSearch))
  );
};
