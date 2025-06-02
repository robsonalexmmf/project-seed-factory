
interface ProjectConfig {
  template: any;
  name: string;
  description: string;
  features: string;
}

export const generateProjectFiles = (config: ProjectConfig) => {
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
      "@radix-ui/react-select": "^2.1.1"
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

  const mainTsx = generateMainComponent(template, name);
  const appTsx = generateAppComponent(template);
  const indexHtml = generateIndexHtml(name);
  const readmeContent = generateReadme(template, name, description, features);
  const tailwindConfig = generateTailwindConfig();
  const viteConfig = generateViteConfig();
  const tsConfig = generateTsConfig();
  const indexCss = generateIndexCss();
  
  // Componentes específicos baseados no template
  const components = generateTemplateComponents(template);
  const pages = generateTemplatePages(template);
  
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
    'postcss.config.js': 'module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } }',
    '.gitignore': `node_modules\ndist\n.env\n.env.local\n*.log`
  };

  // Adicionar componentes do template
  Object.entries(components).forEach(([path, content]) => {
    files[`src/components/${path}`] = content;
  });

  // Adicionar páginas do template
  Object.entries(pages).forEach(([path, content]) => {
    files[`src/pages/${path}`] = content;
  });

  return files;
};

const generateMainComponent = (template: any, name: string) => {
  return `import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);`;
};

const generateAppComponent = (template: any) => {
  const imports = [
    `import React from 'react';`,
    `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';`,
    `import { QueryClient, QueryClientProvider } from '@tanstack/react-query';`,
    `import { Toaster } from '@/components/ui/toaster';`,
    `import HomePage from './pages/HomePage';`,
    `import Dashboard from './pages/Dashboard';`
  ];

  if (template.category === 'delivery') {
    imports.push(`import OrderTracking from './pages/OrderTracking';`);
    imports.push(`import RestaurantManagement from './pages/RestaurantManagement';`);
  }

  const routes = [
    `<Route path="/" element={<HomePage />} />`,
    `<Route path="/dashboard" element={<Dashboard />} />`
  ];

  if (template.category === 'delivery') {
    routes.push(`<Route path="/tracking/:orderId" element={<OrderTracking />} />`);
    routes.push(`<Route path="/restaurant" element={<RestaurantManagement />} />`);
  }

  return `${imports.join('\n')}

const queryClient = new QueryClient();

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

const generateTemplateComponents = (template: any) => {
  const components: Record<string, string> = {};

  // Componentes base para todos os templates
  components['ui/button.tsx'] = generateButtonComponent();
  components['ui/card.tsx'] = generateCardComponent();
  components['ui/input.tsx'] = generateInputComponent();
  
  // Componentes específicos baseados no template
  if (template.category === 'delivery') {
    components['OrderCard.tsx'] = generateOrderCardComponent();
    components['DeliveryMap.tsx'] = generateDeliveryMapComponent();
    components['RestaurantCard.tsx'] = generateRestaurantCardComponent();
  }

  if (template.category === 'business') {
    components['LeadCard.tsx'] = generateLeadCardComponent();
    components['SalesChart.tsx'] = generateSalesChartComponent();
    components['TaskBoard.tsx'] = generateTaskBoardComponent();
  }

  return components;
};

const generateTemplatePages = (template: any) => {
  const pages: Record<string, string> = {};
  
  pages['HomePage.tsx'] = generateHomePage(template);
  pages['Dashboard.tsx'] = generateDashboardPage(template);
  
  if (template.category === 'delivery') {
    pages['OrderTracking.tsx'] = generateOrderTrackingPage();
    pages['RestaurantManagement.tsx'] = generateRestaurantManagementPage();
  }

  return pages;
};

// Funções auxiliares para gerar componentes específicos
const generateButtonComponent = () => {
  return `import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'default', 
  size = 'md',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
  };
  
  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8 text-lg'
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    />
  );
};

export default Button;`;
};

const generateCardComponent = () => {
  return `import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<CardProps> = ({ className, ...props }) => (
  <div
    className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}
    {...props}
  />
);

const CardHeader: React.FC<CardProps> = ({ className, ...props }) => (
  <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
);

const CardTitle: React.FC<CardProps> = ({ className, ...props }) => (
  <h3 className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
);

const CardContent: React.FC<CardProps> = ({ className, ...props }) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
);

export { Card, CardHeader, CardTitle, CardContent };`;
};

const generateHomePage = (template: any) => {
  return `import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Button from '@/components/ui/button';
import { ${template.icon.name} } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600 rounded-full">
              <${template.icon.name} className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ${template.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ${template.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          ${template.features.slice(0, 6).map((feature: string, index: number) => `
          <Card key={${index}}>
            <CardHeader>
              <CardTitle className="text-lg">${feature}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Funcionalidade completa e otimizada para ${feature.toLowerCase()}.
              </p>
            </CardContent>
          </Card>`).join('\n          ')}
        </div>

        <div className="text-center">
          <Link to="/dashboard">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Acessar Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;`;
};

const generateDashboardPage = (template: any) => {
  return `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Users, TrendingUp, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total de Usuários', value: '1,234', icon: Users, color: 'text-blue-600' },
    { title: 'Receita Total', value: 'R$ 45,678', icon: DollarSign, color: 'text-green-600' },
    { title: 'Crescimento', value: '+23%', icon: TrendingUp, color: 'text-purple-600' },
    { title: 'Conversões', value: '89%', icon: BarChart3, color: 'text-orange-600' }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Visão geral do seu ${template.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={\`w-4 h-4 \${stat.color}\`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Atividade {i + 1}</p>
                    <p className="text-xs text-gray-500">Há {i + 1} minuto(s)</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estatísticas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Performance</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Satisfação</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;`;
};

// Outras funções auxiliares...
const generateIndexHtml = (name: string) => {
  return `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${name}</title>
    <meta name="description" content="${name} - Sistema SaaS completo" />
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

## 🚀 Funcionalidades

${template.features.map((feature: string) => `- ✅ ${feature}`).join('\n')}

${features ? `\n## 🔧 Funcionalidades Personalizadas\n\n${features.split('\n').map((f: string) => `- 🎯 ${f}`).join('\n')}` : ''}

## 🛠️ Tecnologias

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **React Router** - Roteamento
- **TanStack Query** - Gerenciamento de estado
- **Vite** - Build tool
- **Lucide React** - Ícones

## 📦 Instalação

\`\`\`bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
\`\`\`

## 📁 Estrutura do Projeto

\`\`\`
src/
├── components/        # Componentes reutilizáveis
│   ├── ui/           # Componentes base
│   └── ...           # Componentes específicos
├── pages/            # Páginas da aplicação
├── hooks/            # Hooks personalizados
├── services/         # Serviços e APIs
├── utils/            # Utilitários
└── lib/              # Configurações
\`\`\`

## 🎯 Próximos Passos

1. **Configurar Banco de Dados**
   - Configure seu banco preferido (PostgreSQL, MySQL, etc.)
   - Execute as migrations necessárias

2. **Configurar Autenticação**
   - Implemente sistema de login/registro
   - Configure middleware de autenticação

3. **APIs e Integrações**
   - Configure as APIs necessárias
   - Implemente integrações externas

4. **Deploy**
   - Configure variáveis de ambiente
   - Deploy em sua plataforma preferida

## 📚 Documentação

Para mais informações sobre cada funcionalidade, consulte a documentação específica de cada módulo.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Gerado com ❤️ pelo Gerador de SaaS IA**
`;
};

const generateTailwindConfig = () => {
  return `import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;`;
};

const generateViteConfig = () => {
  return `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
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
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
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
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
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

// Função auxiliar para utils
export const cn = (...inputs: any[]) => {
  return inputs.filter(Boolean).join(' ');
};

// Componentes auxiliares específicos (simplificados para exemplo)
const generateOrderCardComponent = () => {
  return `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin } from 'lucide-react';

interface OrderCardProps {
  order: {
    id: string;
    restaurant: string;
    status: string;
    estimatedTime: string;
    address: string;
  };
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span>Pedido #{order.id}</span>
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {order.status}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="font-medium">{order.restaurant}</p>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            {order.estimatedTime}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            {order.address}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderCard;`;
};

const generateInputComponent = () => {
  return `import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
};

export default Input;`;
};

// Funções adicionais simplificadas
const generateDeliveryMapComponent = () => `// Componente de mapa para delivery`;
const generateRestaurantCardComponent = () => `// Componente de card de restaurante`;
const generateLeadCardComponent = () => `// Componente de card de lead`;
const generateSalesChartComponent = () => `// Componente de gráfico de vendas`;
const generateTaskBoardComponent = () => `// Componente de quadro de tarefas`;
const generateOrderTrackingPage = () => `// Página de rastreamento de pedido`;
const generateRestaurantManagementPage = () => `// Página de gestão de restaurante`;
