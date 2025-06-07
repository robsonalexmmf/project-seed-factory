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

  // Adicionar todos os arquivos ao ZIP
  Object.entries(files).forEach(([path, content]) => {
    zip.file(path, content);
  });

  // Gerar o ZIP
  const blob = await zip.generateAsync({ type: 'blob' });
  
  // Fazer download usando file-saver
  saveAs(blob, `${config.name.toLowerCase().replace(/\s+/g, '-')}.zip`);
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
    'src/App.tsx': generateAppComponent(template, name),
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

const generateAppComponent = (template: ProjectTemplate, name: string) => {
  return `import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ${template.icon.name} } from 'lucide-react'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center">
                <${template.icon.name} className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-2xl font-bold text-gray-900">${name}</h1>
              </div>
            </div>
          </header>
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Bem-vindo ao ${name}</h2>
              <p className="text-gray-600 mb-6">${template.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${template.features.map(feature => `
                <div className="p-4 border border-gray-200 rounded-lg" key="${feature}">
                  <h3 className="font-medium text-gray-900">${feature}</h3>
                </div>`).join('')}
              </div>
            </div>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App`;
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
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
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
    --primary-foreground: 222.2 84% 4.9%;
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

## Recursos Principais

${template.features.map(feature => `- ${feature}`).join('\n')}

${features ? `\n## Recursos Personalizados\n\n${features}` : ''}

## Tecnologias Utilizadas

- React 18 com TypeScript
- Vite para build e desenvolvimento
- Tailwind CSS para estilização
- Supabase para backend e autenticação
- Shadcn/ui para componentes
- React Router para navegação
- TanStack Query para gerenciamento de estado
- Lucide React para ícones

## Como Executar

1. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

2. Configure as variáveis de ambiente:
\`\`\`bash
cp .env.example .env
\`\`\`

3. Configure o Supabase:
- Acesse [supabase.com](https://supabase.com)
- Crie um novo projeto
- Configure as variáveis no arquivo \`.env\`

4. Execute o projeto:
\`\`\`bash
npm run dev
\`\`\`

## Deploy

Para fazer deploy do projeto:

1. Build do projeto:
\`\`\`bash
npm run build
\`\`\`

2. Deploy para Vercel, Netlify ou outra plataforma de sua escolha.

## Estrutura do Projeto

\`\`\`
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── lib/           # Utilitários e configurações
├── hooks/         # Hooks personalizados
└── types/         # Tipos TypeScript
\`\`\`

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## Licença

MIT License
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

// https://vitejs.dev/config/
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
.env.production.local

# Supabase
.supabase`;
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
