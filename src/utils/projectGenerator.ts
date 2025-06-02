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
    "@hookform/resolvers": "^3.9.0",
    "@supabase/supabase-js": "^2.39.0"
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
    'src/App.tsx': generateAppComponent(template),
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
    'supabase/config.toml': generateSupabaseConfig(),
    'supabase/seed.sql': generateSupabaseSeed(template)
  };

  // Adicionar componentes do template
  const components = generateTemplateComponents(template);
  Object.entries(components).forEach(([path, content]) => {
    files[`src/components/${path}`] = content;
  });

  // Adicionar páginas do template
  const pages = generateTemplatePages(template, name);
  Object.entries(pages).forEach(([path, content]) => {
    files[`src/pages/${path}`] = content;
  });

  return files;
};

const generateEnvExample = () => {
  return `# Supabase Configuration
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Other API Keys (if needed)
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
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string || '';
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string || '';
  const supabaseServiceKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY as string || '';
  
  let seedContent = `-- Seed data for ${template.name}
-- Enable RLS (Row Level Security)
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  website TEXT,
  plan_type TEXT DEFAULT 'freemium',
  projects_generated INTEGER DEFAULT 0,
  monthly_limit INTEGER DEFAULT 2,
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

-- Create generated_projects table
CREATE TABLE public.generated_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  template_id TEXT NOT NULL,
  project_name TEXT NOT NULL,
  project_description TEXT,
  download_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.generated_projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own projects" ON public.generated_projects
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create projects" ON public.generated_projects
  FOR INSERT WITH CHECK (auth.uid() = user_id);`;

  return seedContent;
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
  return `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

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
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
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

  components['ui/button.tsx'] = `import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }`;

  return components;
};

const generateTemplatePages = (template: ProjectTemplate, name: string) => {
  const pages: Record<string, string> = {};
  
  pages['HomePage.tsx'] = `import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">${name}</h1>
          <p className="mt-2 text-gray-600">${template.description}</p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Funcionalidades</h2>
          <ul className="space-y-2">
            ${template.features.map(feature => `<li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>${feature}</span>
            </li>`).join('\n            ')}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default HomePage;`;

  pages['Dashboard.tsx'] = `import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p>Bem-vindo ao seu dashboard!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;`;

  pages['Login.tsx'] = `import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;`;

  pages['Register.tsx'] = `import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Cadastrar</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;`;
  
  return pages;
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

## 🚀 Como Instalar e Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Extraia o projeto baixado**
   \`\`\`bash
   unzip ${name.toLowerCase().replace(/\s+/g, '-')}.zip
   cd ${name.toLowerCase().replace(/\s+/g, '-')}
   \`\`\`

2. **Instale as dependências**
   \`\`\`bash
   npm install
   \`\`\`

3. **Configure as variáveis de ambiente**
   \`\`\`bash
   cp .env.example .env
   \`\`\`
   
   Edite o arquivo \`.env\` com suas configurações do Supabase:
   - \`VITE_SUPABASE_URL\`: URL do seu projeto Supabase
   - \`VITE_SUPABASE_ANON_KEY\`: Chave anônima do Supabase

4. **Execute o projeto**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Acesse no navegador**
   \`\`\`
   http://localhost:5173
   \`\`\`

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Shadcn/ui
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Formulários**: React Hook Form + Zod
- **Estado**: TanStack Query
- **Ícones**: Lucide React

## 📦 Funcionalidades Incluídas

${template.features.map(feature => `- ✅ ${feature}`).join('\n')}

${features ? `\n## 🎯 Funcionalidades Personalizadas\n\n${features}` : ''}

## 🗄️ Configuração do Banco de Dados

O projeto inclui scripts SQL prontos no arquivo \`supabase/seed.sql\`. Execute-os no seu painel do Supabase para criar as tabelas necessárias.

## 📝 Scripts Disponíveis

- \`npm run dev\` - Inicia o servidor de desenvolvimento
- \`npm run build\` - Gera a build de produção
- \`npm run preview\` - Visualiza a build de produção
- \`npm run lint\` - Executa o linter

## 🔧 Personalização

Este projeto foi gerado com uma estrutura modular. Você pode:

1. **Modificar componentes** em \`src/components/\`
2. **Adicionar páginas** em \`src/pages/\`
3. **Configurar rotas** em \`src/App.tsx\`
4. **Personalizar estilos** em \`src/index.css\`

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique a documentação do Supabase: https://supabase.com/docs
2. Consulte a documentação do React: https://react.dev
3. Revise os logs do console para erros específicos

---

**Projeto gerado pelo Gerador SaaS IA** 🤖`;
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
