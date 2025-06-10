import JSZip from 'jszip';
import { saveAs } from 'file-saver';
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

  console.log('Gerando projeto:', config.name);
  console.log('Arquivos a serem criados:', Object.keys(files).length);

  // Adicionar todos os arquivos ao ZIP
  Object.entries(files).forEach(([path, content]) => {
    zip.file(path, content);
  });

  // Gerar o ZIP
  console.log('Criando arquivo ZIP...');
  const blob = await zip.generateAsync({ 
    type: 'blob',
    compression: "DEFLATE",
    compressionOptions: {
      level: 6
    }
  });
  
  // Fazer download usando file-saver
  const fileName = `${config.name.toLowerCase().replace(/\s+/g, '-')}-saas-project.zip`;
  console.log('Fazendo download:', fileName);
  saveAs(blob, fileName);
};

const generateProjectFiles = (config: ProjectConfig): Record<string, string> => {
  const { template, name, description, features } = config;
  
  const baseDependencies = {
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
    "@radix-ui/react-button": "^1.1.0",
    "@radix-ui/react-card": "^1.1.0",
    "@radix-ui/react-input": "^1.1.0",
    "@radix-ui/react-label": "^2.1.0",
    "@supabase/supabase-js": "^2.39.0",
    "recharts": "^2.12.7",
    "date-fns": "^3.6.0",
    "react-hook-form": "^7.53.0",
    "zod": "^3.23.8",
    "@hookform/resolvers": "^3.9.0"
  };

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
    dependencies: baseDependencies,
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

  const files: Record<string, string> = {
    'package.json': JSON.stringify(packageJson, null, 2),
    'src/main.tsx': generateMainComponent(),
    'src/App.tsx': generateAppComponent(template, name, description),
    'src/index.css': generateIndexCss(),
    'index.html': generateIndexHtml(name),
    'README.md': generateReadme(template, name, description, features),
    'tailwind.config.ts': generateTailwindConfig(),
    'vite.config.ts': generateViteConfig(),
    'tsconfig.json': generateTsConfig(),
    'tsconfig.node.json': generateTsConfigNode(),
    'eslint.config.js': generateEslintConfig(),
    'postcss.config.js': generatePostcssConfig(),
    '.gitignore': generateGitignore(),
    'src/lib/utils.ts': generateLibUtils(),
    '.env.example': generateEnvExample(),
    'src/components/ui/button.tsx': generateButtonComponent(),
    'src/components/ui/card.tsx': generateCardComponent(),
    'src/components/ui/input.tsx': generateInputComponent(),
    'src/components/ui/label.tsx': generateLabelComponent(),
    'src/components/Header.tsx': generateHeaderComponent(template, name),
    'src/components/Dashboard.tsx': generateDashboardComponent(template),
    'src/components/Sidebar.tsx': generateSidebarComponent(template),
    'src/hooks/useSupabase.ts': generateSupabaseHook(),
    'src/types/index.ts': generateTypes()
  };

  return files;
};

// Helper functions for generating different parts of the project
const generateMainComponent = () => {
  return `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`;
};

const generateAppComponent = (template: ProjectTemplate, name: string, description: string) => {
  const iconName = template.icon.name || 'Rocket';
  
  return `import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ${iconName} } from 'lucide-react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App`;
};

const generateHeaderComponent = (template: ProjectTemplate, name: string) => {
  const iconName = template.icon.name || 'Rocket';
  
  return `import React from 'react'
import { ${iconName} } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <${iconName} className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">${name}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Configurações
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header`;
};

const generateDashboardComponent = (template: ProjectTemplate) => {
  return `import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { BarChart3, Users, DollarSign, TrendingUp } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    { title: 'Total de Usuários', value: '2,543', icon: Users, change: '+12%' },
    { title: 'Receita Mensal', value: 'R$ 45,231', icon: DollarSign, change: '+20%' },
    { title: 'Conversões', value: '89.2%', icon: TrendingUp, change: '+5%' },
    { title: 'Vendas Hoje', value: '156', icon: BarChart3, change: '+8%' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600 mt-2">Visão geral do seu ${template.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600 mt-1">
                {stat.change} em relação ao mês passado
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Funcionalidades Principais</CardTitle>
            <CardDescription>
              Recursos incluídos neste ${template.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              ${template.features.map(feature => `
              <div className="flex items-center space-x-3" key="${feature}">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">${feature}</span>
              </div>`).join('')}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Próximos Passos</CardTitle>
            <CardDescription>
              Configure seu sistema para começar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900">1. Configure o Supabase</h4>
                <p className="text-sm text-blue-700 mt-1">
                  Adicione suas credenciais no arquivo .env
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900">2. Personalize o Design</h4>
                <p className="text-sm text-green-700 mt-1">
                  Ajuste cores e layout conforme sua marca
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900">3. Adicione Funcionalidades</h4>
                <p className="text-sm text-purple-700 mt-1">
                  Expanda com recursos específicos do seu negócio
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard`;
};

const generateSidebarComponent = (template: ProjectTemplate) => {
  return `import React from 'react'
import { Home, Settings, Users, BarChart3, FileText } from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: BarChart3, label: 'Relatórios', href: '/reports' },
    { icon: Users, label: 'Usuários', href: '/users' },
    { icon: FileText, label: 'Documentos', href: '/docs' },
    { icon: Settings, label: 'Configurações', href: '/settings' },
  ]

  return (
    <aside className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <item.icon className="h-5 w-5 text-gray-500 group-hover:text-blue-600" />
                <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar`;
};

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
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
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
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
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

const generateLabelComponent = () => {
  return `import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }`;
};

const generateSupabaseHook = () => {
  return `import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

export const useSupabase = () => {
  return { supabase }
}`;
};

const generateTypes = () => {
  return `export interface User {
  id: string
  email: string
  name: string
  created_at: string
}

export interface Project {
  id: string
  name: string
  description: string
  user_id: string
  created_at: string
  updated_at: string
}`;
};

const generateIndexHtml = (name: string) => {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${name}</title>
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

${template.features.map(feature => `- ✅ ${feature}`).join('\n')}

${features ? `\n## 🎯 Funcionalidades Personalizadas\n\n${features.split('\n').map(f => f.trim() ? `- 🎨 ${f.trim()}` : '').filter(Boolean).join('\n')}` : ''}

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS + Shadcn/ui
- **Backend:** Supabase (PostgreSQL + Auth + Storage)
- **Roteamento:** React Router DOM
- **Estado:** TanStack Query
- **Ícones:** Lucide React
- **Forms:** React Hook Form + Zod

## 📦 Como Executar

1. **Instale as dependências:**
\`\`\`bash
npm install
\`\`\`

2. **Configure as variáveis de ambiente:**
\`\`\`bash
cp .env.example .env
\`\`\`

3. **Configure o Supabase:**
   - Acesse [supabase.com](https://supabase.com)
   - Crie um novo projeto
   - Copie a URL e a chave anônima para o arquivo \`.env\`

4. **Execute o projeto:**
\`\`\`bash
npm run dev
\`\`\`

## 🌐 Deploy

**Vercel:**
\`\`\`bash
npm run build
vercel --prod
\`\`\`

**Netlify:**
\`\`\`bash
npm run build
# Upload da pasta dist
\`\`\`

## 📁 Estrutura do Projeto

\`\`\`
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── Header.tsx      # Cabeçalho da aplicação
│   ├── Sidebar.tsx     # Menu lateral
│   └── Dashboard.tsx   # Dashboard principal
├── hooks/              # Hooks personalizados
│   └── useSupabase.ts  # Hook do Supabase
├── lib/                # Utilitários
│   └── utils.ts        # Funções auxiliares
├── types/              # Tipos TypeScript
│   └── index.ts        # Definições de tipos
├── App.tsx             # Componente principal
└── main.tsx            # Ponto de entrada
\`\`\`

## 🔧 Configuração do Supabase

1. **Crie as tabelas necessárias:**
\`\`\`sql
-- Tabela de usuários
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- RLS (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles are viewable by owner" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);
\`\`\`

2. **Configure a autenticação:**
   - Ative o provedor de email no painel do Supabase
   - Configure as URLs de redirecionamento

## 🎨 Personalização

### Cores e Tema
Edite o arquivo \`tailwind.config.ts\` para personalizar as cores:

\`\`\`typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      // Adicione suas cores personalizadas
    },
  },
},
\`\`\`

### Componentes
Todos os componentes estão na pasta \`src/components\` e podem ser facilmente modificados.

## 📚 Recursos Úteis

- [Documentação do React](https://react.dev)
- [Documentação do Supabase](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/ui](https://ui.shadcn.com)
- [TanStack Query](https://tanstack.com/query)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (\`git checkout -b feature/nova-feature\`)
3. Commit suas mudanças (\`git commit -m 'Add nova feature'\`)
4. Push para a branch (\`git push origin feature/nova-feature\`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ usando o Gerador de SaaS com IA**
`;
};

const generateTailwindConfig = () => {
  return `import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
} satisfies Config

export default config`;
};

const generateViteConfig = () => {
  return `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

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

const generateEslintConfig = () => {
  return `import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'

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

const generatePostcssConfig = () => {
  return `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;
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

const generateLibUtils = () => {
  return `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`;
};

const generateEnvExample = () => {
  return `# Supabase Configuration
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Optional API Keys
VITE_STRIPE_PUBLISHABLE_KEY=your-stripe-key
VITE_GOOGLE_MAPS_API_KEY=your-google-maps-key`;
};

const generateSupabaseConfig = () => {
  return `[api]
enabled = true
port = 54321
schemas = ["public", "graphql_public"]
extra_search_path = ["public", "extensions"]
max_rows = 1000

[auth]
enabled = true
site_url = "http://localhost:3000"
additional_redirect_urls = ["https://localhost:3000"]
jwt_expiry = 3600
enable_signup = true
enable_confirmations = false

[auth.email]
enable_signup = true
double_confirm_changes = true
enable_confirmations = false

[db]
shadow_database_url = ""
major_version = 15

[storage]
enabled = true
file_size_limit = "50MiB"
image_transformation = {
  enabled = true
}

[functions]
verify_jwt = false`;
};

const generateSupabaseSeed = (template: ProjectTemplate) => {
  return `-- Seed data for ${template.name}
-- Enable RLS (Row Level Security)
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create example tables
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  avatar_url text,
  updated_at timestamp with time zone DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile." ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile." ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Create a trigger to automatically create a profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();`;
};
