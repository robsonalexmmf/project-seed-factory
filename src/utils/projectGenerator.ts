
import JSZip from 'jszip';
import { ProjectTemplate } from './projectTemplates';

interface ProjectConfig {
  template: ProjectTemplate;
  name: string;
  description: string;
  features: string;
}

export const generateAndDownloadProject = async (config: ProjectConfig): Promise<void> => {
  const zip = new JSZip();
  const files = generateProjectFiles(config);

  // Adicionar todos os arquivos ao ZIP
  Object.entries(files).forEach(([path, content]) => {
    zip.file(path, content);
  });

  // Gerar o ZIP
  const blob = await zip.generateAsync({ type: 'blob' });
  
  // Fazer download
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${config.name.toLowerCase().replace(/\s+/g, '-')}.zip`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const generateProjectFiles = (config: ProjectConfig): Record<string, string> => {
  const { template, name, description, features } = config;
  
  const packageJson = {
    name: name.toLowerCase().replace(/\s+/g, '-'),
    version: "1.0.0",
    description: description || template.description,
    type: "module",
    scripts: {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview",
      "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
    },
    dependencies: {
      "react": "^18.3.1",
      "react-dom": "^18.3.1",
      "react-router-dom": "^6.26.2",
      "@tanstack/react-query": "^5.56.2",
      "lucide-react": "^0.462.0",
      "clsx": "^2.1.1",
      "tailwind-merge": "^2.5.2",
      "class-variance-authority": "^0.7.1",
      "@radix-ui/react-slot": "^1.1.0",
      "@radix-ui/react-toast": "^1.2.1",
      "@radix-ui/react-dialog": "^1.1.2",
      "@radix-ui/react-tabs": "^1.1.0",
      "@radix-ui/react-select": "^2.1.1",
      "@radix-ui/react-accordion": "^1.2.0",
      "@radix-ui/react-alert-dialog": "^1.1.1",
      "@radix-ui/react-avatar": "^1.1.0",
      "@radix-ui/react-badge": "^1.0.4",
      "@radix-ui/react-button": "^1.1.0",
      "@radix-ui/react-card": "^1.1.0",
      "@radix-ui/react-checkbox": "^1.1.1",
      "@radix-ui/react-dropdown-menu": "^2.1.1",
      "@radix-ui/react-input": "^1.1.0",
      "@radix-ui/react-label": "^2.1.0",
      "@radix-ui/react-popover": "^1.1.1",
      "@radix-ui/react-progress": "^1.1.0",
      "@radix-ui/react-scroll-area": "^1.1.0",
      "@radix-ui/react-separator": "^1.1.0",
      "@radix-ui/react-switch": "^1.1.0",
      "@radix-ui/react-table": "^1.1.0",
      "@radix-ui/react-textarea": "^1.1.0",
      "recharts": "^2.12.7",
      "date-fns": "^3.6.0",
      "react-hook-form": "^7.53.0",
      "zod": "^3.23.8",
      "@hookform/resolvers": "^3.9.0"
    },
    devDependencies: {
      "@types/react": "^18.3.5",
      "@types/react-dom": "^18.3.0",
      "@typescript-eslint/eslint-plugin": "^8.6.0",
      "@typescript-eslint/parser": "^8.6.0",
      "@vitejs/plugin-react": "^4.3.1",
      "autoprefixer": "^10.4.20",
      "eslint": "^9.9.1",
      "eslint-plugin-react-hooks": "^4.6.2",
      "eslint-plugin-react-refresh": "^0.4.11",
      "postcss": "^8.4.45",
      "tailwindcss": "^3.4.10",
      "typescript": "^5.5.4",
      "vite": "^5.4.3"
    }
  };

  const mainTsx = generateMainComponent();
  const appTsx = generateAppComponent(template);
  const indexHtml = generateIndexHtml(name);
  const readmeContent = generateReadme(template, name, description, features);
  const tailwindConfig = generateTailwindConfig();
  const viteConfig = generateViteConfig();
  const tsConfig = generateTsConfig();
  const tsConfigNode = generateTsConfigNode();
  const indexCss = generateIndexCss();
  const eslintConfig = generateEslintConfig();
  const gitignore = generateGitignore();
  const postcssConfig = generatePostcssConfig();
  
  // Componentes específicos baseados no template
  const components = generateTemplateComponents(template);
  const pages = generateTemplatePages(template, name);
  const hooks = generateTemplateHooks(template);
  const utils = generateTemplateUtils(template);
  const services = generateTemplateServices(template);
  
  const files: Record<string, string> = {
    'package.json': JSON.stringify(packageJson, null, 2),
    'src/main.tsx': mainTsx,
    'src/App.tsx': appTsx,
    'src/index.css': indexCss,
    'index.html': indexHtml,
    'README.md': readmeContent,
    'tailwind.config.ts': tailwindConfig,
    'vite.config.ts': viteConfig,
    'tsconfig.json': tsConfig,
    'tsconfig.node.json': tsConfigNode,
    'eslint.config.js': eslintConfig,
    'postcss.config.js': postcssConfig,
    '.gitignore': gitignore,
    'src/lib/utils.ts': generateLibUtils()
  };

  // Adicionar componentes do template
  Object.entries(components).forEach(([path, content]) => {
    files[`src/components/${path}`] = content;
  });

  // Adicionar páginas do template
  Object.entries(pages).forEach(([path, content]) => {
    files[`src/pages/${path}`] = content;
  });

  // Adicionar hooks do template
  Object.entries(hooks).forEach(([path, content]) => {
    files[`src/hooks/${path}`] = content;
  });

  // Adicionar utils do template
  Object.entries(utils).forEach(([path, content]) => {
    files[`src/utils/${path}`] = content;
  });

  // Adicionar services do template
  Object.entries(services).forEach(([path, content]) => {
    files[`src/services/${path}`] = content;
  });

  return files;
};

const generateMainComponent = () => {
  return `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`;
};

const generateAppComponent = (template: ProjectTemplate) => {
  const imports = [
    `import React from 'react';`,
    `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';`,
    `import { QueryClient, QueryClientProvider } from '@tanstack/react-query';`,
    `import { Toaster } from '@/components/ui/toaster';`,
    `import HomePage from './pages/HomePage';`,
    `import Dashboard from './pages/Dashboard';`
  ];

  // Adicionar imports específicos por categoria
  if (template.category === 'delivery') {
    imports.push(`import OrderTracking from './pages/OrderTracking';`);
    imports.push(`import ProductCatalog from './pages/ProductCatalog';`);
  }
  
  if (template.category === 'business') {
    imports.push(`import Analytics from './pages/Analytics';`);
    imports.push(`import Settings from './pages/Settings';`);
  }

  if (template.category === 'health') {
    imports.push(`import Appointments from './pages/Appointments';`);
    imports.push(`import Patients from './pages/Patients';`);
  }

  const routes = [
    `<Route path="/" element={<HomePage />} />`,
    `<Route path="/dashboard" element={<Dashboard />} />`
  ];

  // Adicionar rotas específicas por categoria
  if (template.category === 'delivery') {
    routes.push(`<Route path="/orders/:orderId" element={<OrderTracking />} />`);
    routes.push(`<Route path="/catalog" element={<ProductCatalog />} />`);
  }
  
  if (template.category === 'business') {
    routes.push(`<Route path="/analytics" element={<Analytics />} />`);
    routes.push(`<Route path="/settings" element={<Settings />} />`);
  }

  if (template.category === 'health') {
    routes.push(`<Route path="/appointments" element={<Appointments />} />`);
    routes.push(`<Route path="/patients" element={<Patients />} />`);
  }

  return `${imports.join('\n')}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            ${routes.join('\n            ')}
          </Routes>
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;`;
};

const generateTemplateComponents = (template: ProjectTemplate) => {
  const components: Record<string, string> = {};

  // Componentes UI base
  components['ui/button.tsx'] = generateButtonComponent();
  components['ui/card.tsx'] = generateCardComponent();
  components['ui/input.tsx'] = generateInputComponent();
  components['ui/badge.tsx'] = generateBadgeComponent();
  components['ui/toaster.tsx'] = generateToasterComponent();
  components['ui/toast.tsx'] = generateToastComponent();
  components['ui/use-toast.ts'] = generateUseToastHook();

  // Layout components
  components['layout/Header.tsx'] = generateHeaderComponent(template);
  components['layout/Sidebar.tsx'] = generateSidebarComponent(template);
  components['layout/Footer.tsx'] = generateFooterComponent();

  // Componentes específicos baseados no template
  if (template.category === 'delivery') {
    components['OrderCard.tsx'] = generateOrderCardComponent();
    components['ProductCard.tsx'] = generateProductCardComponent();
    components['DeliveryMap.tsx'] = generateDeliveryMapComponent();
    components['OrderStatusBadge.tsx'] = generateOrderStatusBadgeComponent();
  }

  if (template.category === 'business') {
    components['TaskCard.tsx'] = generateTaskCardComponent();
    components['KanbanBoard.tsx'] = generateKanbanBoardComponent();
    components['AnalyticsChart.tsx'] = generateAnalyticsChartComponent();
    components['DataTable.tsx'] = generateDataTableComponent();
  }

  if (template.category === 'health') {
    components['AppointmentCard.tsx'] = generateAppointmentCardComponent();
    components['PatientCard.tsx'] = generatePatientCardComponent();
    components['MedicalChart.tsx'] = generateMedicalChartComponent();
  }

  if (template.category === 'content') {
    components['ArticleCard.tsx'] = generateArticleCardComponent();
    components['CourseCard.tsx'] = generateCourseCardComponent();
    components['VideoPlayer.tsx'] = generateVideoPlayerComponent();
  }

  return components;
};

const generateTemplatePages = (template: ProjectTemplate, projectName: string) => {
  const pages: Record<string, string> = {};
  
  pages['HomePage.tsx'] = generateHomePage(template, projectName);
  pages['Dashboard.tsx'] = generateDashboardPage(template);
  
  // Páginas específicas por categoria
  if (template.category === 'delivery') {
    pages['OrderTracking.tsx'] = generateOrderTrackingPage();
    pages['ProductCatalog.tsx'] = generateProductCatalogPage();
  }
  
  if (template.category === 'business') {
    pages['Analytics.tsx'] = generateAnalyticsPage();
    pages['Settings.tsx'] = generateSettingsPage();
  }

  if (template.category === 'health') {
    pages['Appointments.tsx'] = generateAppointmentsPage();
    pages['Patients.tsx'] = generatePatientsPage();
  }

  return pages;
};

const generateTemplateHooks = (template: ProjectTemplate) => {
  const hooks: Record<string, string> = {};
  
  hooks['useLocalStorage.ts'] = generateUseLocalStorageHook();
  hooks['useDebounce.ts'] = generateUseDebounceHook();
  
  if (template.category === 'delivery') {
    hooks['useOrders.ts'] = generateUseOrdersHook();
    hooks['useProducts.ts'] = generateUseProductsHook();
  }
  
  if (template.category === 'business') {
    hooks['useTasks.ts'] = generateUseTasksHook();
    hooks['useAnalytics.ts'] = generateUseAnalyticsHook();
  }

  return hooks;
};

const generateTemplateUtils = (template: ProjectTemplate) => {
  const utils: Record<string, string> = {};
  
  utils['constants.ts'] = generateConstants(template);
  utils['formatters.ts'] = generateFormatters();
  utils['validators.ts'] = generateValidators();
  
  return utils;
};

const generateTemplateServices = (template: ProjectTemplate) => {
  const services: Record<string, string> = {};
  
  services['api.ts'] = generateApiService();
  services['auth.ts'] = generateAuthService();
  
  if (template.category === 'delivery') {
    services['orders.ts'] = generateOrdersService();
    services['products.ts'] = generateProductsService();
  }
  
  if (template.category === 'business') {
    services['tasks.ts'] = generateTasksService();
    services['analytics.ts'] = generateAnalyticsService();
  }

  return services;
};

// Funções auxiliares para gerar componentes específicos
const generateButtonComponent = () => {
  return `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }`;
};

const generateCardComponent = () => {
  return `import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`;
};

const generateInputComponent = () => {
  return `import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }`;
};

const generateHomePage = (template: ProjectTemplate, projectName: string) => {
  return `import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ${template.icon.name} } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r ${template.color} to-purple-600 p-3 rounded-xl">
                <${template.icon.name} className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">${projectName}</h1>
                <p className="text-gray-600">${template.description}</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Versão 1.0.0
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Bem-vindo ao ${projectName}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            ${template.description} com todas as funcionalidades que você precisa para ter sucesso.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/dashboard">
              <Button size="lg" className="bg-gradient-to-r ${template.color} to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Acessar Dashboard
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Funcionalidades Principais
            </h3>
            <p className="text-xl text-gray-600">
              Tudo que você precisa em uma solução completa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${template.features.slice(0, 6).map((feature, index) => `
            <Card key={${index}} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <div className="w-2 h-2 ${template.color} rounded-full mr-3"></div>
                  ${feature}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Funcionalidade completa e otimizada para ${feature.toLowerCase()}, 
                  proporcionando a melhor experiência para seus usuários.
                </CardDescription>
              </CardContent>
            </Card>`).join('\n            ')}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r ${template.color} to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Pronto para começar?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Acesse o dashboard e explore todas as funcionalidades disponíveis.
          </p>
          <Link to="/dashboard">
            <Button size="lg" variant="secondary">
              Começar Agora
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 ${projectName}. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Gerado com ❤️ pelo Gerador de SaaS IA
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;`;
};

// Continuar com outras funções de geração...
const generateDashboardPage = (template: ProjectTemplate) => {
  return `import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  DollarSign,
  ${template.icon.name}
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total de Usuários', value: '1,234', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Receita Total', value: 'R$ 45,678', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Crescimento', value: '+23%', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Performance', value: '89%', icon: BarChart3, color: 'text-orange-600', bg: 'bg-orange-100' }
  ];

  const recentActivities = [
    { id: 1, action: 'Novo usuário cadastrado', time: 'Há 2 minutos', type: 'user' },
    { id: 2, action: 'Pedido finalizado', time: 'Há 5 minutos', type: 'order' },
    { id: 3, action: 'Pagamento processado', time: 'Há 8 minutos', type: 'payment' },
    { id: 4, action: 'Relatório gerado', time: 'Há 12 minutos', type: 'report' },
    { id: 5, action: 'Backup realizado', time: 'Há 15 minutos', type: 'system' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="${template.color} p-2 rounded-lg">
                <${template.icon.name} className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Visão geral do seu ${template.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">Online</Badge>
              <Button variant="outline">Configurações</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={\`p-2 rounded-md \${stat.bg}\`}>
                  <stat.icon className={\`w-4 h-4 \${stat.color}\`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  +10% em relação ao mês passado
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Features Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Funcionalidades Disponíveis</CardTitle>
                <CardDescription>
                  Recursos principais do seu ${template.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  ${template.features.map((feature, index) => `
                  <div key={${index}} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-2 h-2 ${template.color} rounded-full mr-3"></div>
                    <span className="text-sm font-medium">${feature}</span>
                  </div>`).join('\n                  ')}
                </div>
              </CardContent>
            </Card>

            {/* Analytics Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  Visualização dos dados em tempo real
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Gráfico de analytics será exibido aqui</p>
                    <p className="text-sm text-gray-400">Integre com sua fonte de dados preferida</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
                <CardDescription>
                  Últimas ações no sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="w-2 h-2 ${template.color} rounded-full mt-2"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.action}
                        </p>
                        <p className="text-xs text-gray-500">
                          {activity.time}
                        </p>
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
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Gerenciar Usuários
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Ver Relatórios
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Configurar Pagamentos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;`;
};

// Outras funções auxiliares simplificadas para o exemplo
const generateOrderCardComponent = () => `// Componente de card de pedido`;
const generateProductCardComponent = () => `// Componente de card de produto`;
const generateDeliveryMapComponent = () => `// Componente de mapa de delivery`;
const generateOrderStatusBadgeComponent = () => `// Componente de badge de status`;
const generateTaskCardComponent = () => `// Componente de card de tarefa`;
const generateKanbanBoardComponent = () => `// Componente de quadro Kanban`;
const generateAnalyticsChartComponent = () => `// Componente de gráfico de analytics`;
const generateDataTableComponent = () => `// Componente de tabela de dados`;
const generateAppointmentCardComponent = () => `// Componente de card de agendamento`;
const generatePatientCardComponent = () => `// Componente de card de paciente`;
const generateMedicalChartComponent = () => `// Componente de prontuário médico`;
const generateArticleCardComponent = () => `// Componente de card de artigo`;
const generateCourseCardComponent = () => `// Componente de card de curso`;
const generateVideoPlayerComponent = () => `// Componente de player de vídeo`;

const generateOrderTrackingPage = () => `// Página de rastreamento de pedidos`;
const generateProductCatalogPage = () => `// Página de catálogo de produtos`;
const generateAnalyticsPage = () => `// Página de analytics`;
const generateSettingsPage = () => `// Página de configurações`;
const generateAppointmentsPage = () => `// Página de agendamentos`;
const generatePatientsPage = () => `// Página de pacientes`;

const generateHeaderComponent = (template: ProjectTemplate) => `// Componente de cabeçalho`;
const generateSidebarComponent = (template: ProjectTemplate) => `// Componente de sidebar`;
const generateFooterComponent = () => `// Componente de rodapé`;

const generateUseLocalStorageHook = () => `// Hook para localStorage`;
const generateUseDebounceHook = () => `// Hook para debounce`;
const generateUseOrdersHook = () => `// Hook para pedidos`;
const generateUseProductsHook = () => `// Hook para produtos`;
const generateUseTasksHook = () => `// Hook para tarefas`;
const generateUseAnalyticsHook = () => `// Hook para analytics`;

const generateConstants = (template: ProjectTemplate) => `// Constantes do projeto`;
const generateFormatters = () => `// Funções de formatação`;
const generateValidators = () => `// Funções de validação`;

const generateApiService = () => `// Serviço de API`;
const generateAuthService = () => `// Serviço de autenticação`;
const generateOrdersService = () => `// Serviço de pedidos`;
const generateProductsService = () => `// Serviço de produtos`;
const generateTasksService = () => `// Serviço de tarefas`;
const generateAnalyticsService = () => `// Serviço de analytics`;

const generateBadgeComponent = () => `// Componente Badge`;
const generateToasterComponent = () => `// Componente Toaster`;
const generateToastComponent = () => `// Componente Toast`;
const generateUseToastHook = () => `// Hook useToast`;

// Funções auxiliares para configuração
const generateIndexHtml = (name: string) => {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${name}</title>
    <meta name="description" content="${name} - Sistema SaaS completo e funcional" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
};

const generateReadme = (template: ProjectTemplate, name: string, description: string, features: string) => {
  return `# ${name}

${description || template.description}

## 🚀 Funcionalidades Principais

${template.features.map((feature: string) => `- ✅ ${feature}`).join('\n')}

${features ? `\n## 🎯 Funcionalidades Personalizadas\n\n${features.split('\n').map((f: string) => f.trim() ? `- 🔧 ${f}` : '').filter(Boolean).join('\n')}` : ''}

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework de interface de usuário
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de estilização
- **React Router** - Roteamento
- **TanStack Query** - Gerenciamento de estado e cache
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **Vite** - Build tool rápida

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para executar

1. **Instalar dependências**
   \`\`\`bash
   npm install
   \`\`\`

2. **Executar em modo desenvolvimento**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Acessar a aplicação**
   \`\`\`
   http://localhost:5173
   \`\`\`

4. **Build para produção**
   \`\`\`bash
   npm run build
   \`\`\`

5. **Preview do build**
   \`\`\`bash
   npm run preview
   \`\`\`

## 📁 Estrutura do Projeto

\`\`\`
${name.toLowerCase().replace(/\s+/g, '-')}/
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── ui/           # Componentes base (shadcn/ui)
│   │   ├── layout/       # Componentes de layout
│   │   └── ...           # Componentes específicos
│   ├── pages/            # Páginas da aplicação
│   ├── hooks/            # Hooks personalizados
│   ├── services/         # Serviços e APIs
│   ├── utils/            # Utilitários e helpers
│   ├── lib/              # Configurações e bibliotecas
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Ponto de entrada
│   └── index.css         # Estilos globais
├── public/               # Arquivos estáticos
├── package.json          # Dependências e scripts
├── tailwind.config.ts    # Configuração Tailwind
├── vite.config.ts        # Configuração Vite
└── tsconfig.json         # Configuração TypeScript
\`\`\`

## 🎯 Próximos Passos

### 1. **Configuração do Backend**
- Escolha sua stack de backend (Node.js, Python, PHP, etc.)
- Configure banco de dados (PostgreSQL, MySQL, MongoDB)
- Implemente APIs REST ou GraphQL

### 2. **Autenticação e Autorização**
- Integre sistema de login/registro
- Configure middleware de autenticação
- Implemente controle de acesso baseado em roles

### 3. **Integrações de Terceiros**
- Configure gateways de pagamento (Stripe, PayPal, PagSeguro)
- Integre serviços de email (SendGrid, Mailgun)
- Configure notificações push

### 4. **Deploy e Infraestrutura**
- Configure CI/CD
- Deploy em plataformas como Vercel, Netlify ou AWS
- Configure monitoramento e logs

### 5. **Personalização**
- Ajuste o design conforme sua marca
- Adicione funcionalidades específicas do seu negócio
- Configure analytics e métricas

## 🔧 Scripts Disponíveis

- \`npm run dev\` - Inicia o servidor de desenvolvimento
- \`npm run build\` - Gera build para produção
- \`npm run preview\` - Preview do build de produção
- \`npm run lint\` - Executa o linter

## 📚 Documentação Adicional

- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit suas mudanças (\`git commit -m 'Add some AmazingFeature'\`)
4. Push para a branch (\`git push origin feature/AmazingFeature\`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique a documentação acima
2. Procure por issues similares no repositório
3. Crie uma nova issue com detalhes do problema

---

**Gerado com ❤️ pelo Gerador de SaaS IA**

> Este projeto foi criado para ser um ponto de partida sólido para seu SaaS. 
> Customize e expanda conforme suas necessidades específicas!
`;
};

const generateTailwindConfig = () => {
  return `import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;`;
};

const generateViteConfig = () => {
  return `import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`;
};

const generateTsConfig = () => {
  return `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* Path mapping */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`;
};

const generateTsConfigNode = () => {
  return `{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}`;
};

const generateIndexCss = () => {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 94.1%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}`;
};

const generateEslintConfig = () => {
  return `import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)`;
};

const generateGitignore = () => {
  return `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local`;
};

const generatePostcssConfig = () => {
  return `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;
};

const generateLibUtils = () => {
  return `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`;
};
