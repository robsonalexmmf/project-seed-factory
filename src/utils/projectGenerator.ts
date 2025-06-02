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
      "@hookform/resolvers": "^3.9.0",
      "@supabase/supabase-js": "^2.39.0"
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

  // Adicionar dependências do React Native se for um template mobile
  if (template.category === 'mobile') {
    packageJson.dependencies = {
      ...packageJson.dependencies,
      "expo": "~50.0.0",
      "react-native": "0.73.0",
      "@expo/vector-icons": "^13.0.0",
      "expo-status-bar": "~1.11.1",
      "expo-linear-gradient": "~12.7.2",
      "expo-router": "~3.4.0",
      "expo-constants": "~15.4.0",
      "expo-device": "~5.9.0",
      "expo-notifications": "~0.27.0"
    };
  }

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

  // Adicionar hooks do template
  const hooks = generateTemplateHooks(template);
  Object.entries(hooks).forEach(([path, content]) => {
    files[`src/hooks/${path}`] = content;
  });

  // Adicionar utils do template
  const utils = generateTemplateUtils(template);
  Object.entries(utils).forEach(([path, content]) => {
    files[`src/utils/${path}`] = content;
  });

  // Adicionar services do template
  const services = generateTemplateServices(template);
  Object.entries(services).forEach(([path, content]) => {
    files[`src/services/${path}`] = content;
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

-- Create a bucket for avatars
INSERT INTO storage.buckets (id, name, public) VALUES ('avatars', 'avatars', true);

-- Set up storage policy
CREATE POLICY "Avatar images are publicly accessible." ON storage.objects
  FOR SELECT USING (bucket_id = 'avatars');

CREATE POLICY "Anyone can upload an avatar." ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'avatars');

CREATE POLICY "Anyone can update their own avatar." ON storage.objects
  FOR UPDATE USING (auth.uid()::text = (storage.foldername(name))[1]);`;

  // Adicionar tabelas específicas baseadas no template
  if (template.category === 'health') {
    seedContent += `

-- Health-specific tables
CREATE TABLE public.appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  patient_name TEXT NOT NULL,
  patient_email TEXT,
  patient_phone TEXT,
  appointment_date TIMESTAMP WITH TIME ZONE NOT NULL,
  duration INTEGER DEFAULT 60,
  status TEXT DEFAULT 'scheduled',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.patients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  birth_date DATE,
  address TEXT,
  medical_history TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.patients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own appointments" ON public.appointments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own appointments" ON public.appointments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own patients" ON public.patients
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own patients" ON public.patients
  FOR INSERT WITH CHECK (auth.uid() = user_id);`;
  }

  if (template.category === 'delivery') {
    seedContent += `

-- Delivery-specific tables
CREATE TABLE public.products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category TEXT,
  image_url TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT,
  customer_address TEXT NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',
  delivery_fee DECIMAL(10,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own products" ON public.products
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own products" ON public.products
  FOR ALL USING (auth.uid() = user_id);`;
  }

  if (template.category === 'business') {
    seedContent += `

-- Business-specific tables
CREATE TABLE public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active',
  client_name TEXT,
  budget DECIMAL(15,2),
  deadline DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'todo',
  priority TEXT DEFAULT 'medium',
  assigned_to UUID REFERENCES auth.users(id),
  due_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own projects" ON public.projects
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own projects" ON public.projects
  FOR ALL USING (auth.uid() = user_id);`;
  }

  return seedContent;
};

const generateSupabaseContext = () => {
  return `import React, { createContext, useContext } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string) || '';
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const SupabaseContext = createContext<SupabaseClient | null>(null);

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
};

export const SupabaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
};`;
};

const generateAuthContext = () => {
  return `import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { useSupabase } from './SupabaseContext';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<{ error: AuthError | null }>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = useSupabase();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password });
    return { error };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};`;
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
import { SupabaseProvider } from './contexts/SupabaseContext';
import { AuthProvider } from './contexts/AuthContext';
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
      <SupabaseProvider>
        <AuthProvider>
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
        </AuthProvider>
      </SupabaseProvider>
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

  // Context providers
  components['contexts/SupabaseContext.tsx'] = generateSupabaseContext();
  components['contexts/AuthContext.tsx'] = generateAuthContext();

  // Layout components
  components['layout/Header.tsx'] = generateHeaderComponent(template);
  components['layout/Sidebar.tsx'] = generateSidebarComponent(template);
  components['layout/Footer.tsx'] = generateFooterComponent();

  return components;
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

const generateBadgeComponent = () => {
  return `import * as React from "react"
import { cn } from "@/lib/utils"

const badgeVariants = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  destructive: "bg-destructive text-destructive-foreground",
  outline: "border border-input bg-background text-foreground",
};

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof badgeVariants;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold",
          badgeVariants[variant],
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }`;
};

const generateToasterComponent = () => {
  return `import * as React from "react"
import { Toaster as RadixToaster } from "@radix-ui/react-toast"

const Toaster = () => {
  return <RadixToaster position="top-right" />
}

export { Toaster }`;
};

const generateToastComponent = () => {
  return `import * as React from "react"
import { ToastProvider, ToastViewport } from "@radix-ui/react-toast"

const Toast = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastProvider>
      {children}
      <ToastViewport />
    </ToastProvider>
  )
}

export { Toast }`;
};

const generateUseToastHook = () => {
  return `import { useToast as useRadixToast } from "@radix-ui/react-toast"

export const useToast = () => {
  const toast = useRadixToast()
  return toast
}`;
};

const generateHeaderComponent = (template: ProjectTemplate) => {
  return `import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Header - ${template.name}</h1>
      </div>
    </header>
  );
};

export default Header;`;
};

const generateSidebarComponent = (template: ProjectTemplate) => {
  return `import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <nav>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;`;
};

const generateFooterComponent = () => {
  return `import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t p-4 text-center text-sm text-gray-500">
      © 2024 Gerador de SaaS IA. Todos os direitos reservados.
    </footer>
  );
};

export default Footer;`;
};

const generateTemplateHooks = (template: ProjectTemplate) => {
  return {};
};

const generateTemplateUtils = (template: ProjectTemplate) => {
  return {};
};

const generateTemplateServices = (template: ProjectTemplate) => {
  return {};
};

const generateTemplatePages = (template: ProjectTemplate, name: string) => {
  const pages: Record<string, string> = {};
  
  pages['HomePage.tsx'] = generateHomePage(template, name);
  pages['Dashboard.tsx'] = generateDashboardPage(template);
  pages['Login.tsx'] = generateLoginPage();
  pages['Register.tsx'] = generateRegisterPage();
  
  return pages;
};

const generateHomePage = (template: ProjectTemplate, projectName: string) => {
  return `// HomePage implementation`;
};

const generateDashboardPage = (template: ProjectTemplate) => {
  return `// Dashboard implementation`;
};

const generateLoginPage = () => {
  return `import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      toast({
        title: "Erro no login",
        description: error.message,
        variant: "destructive"
      });
    } else {
      navigate('/dashboard');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Entre na sua conta</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/register" className="text-sm text-blue-600 hover:underline">
              Não tem conta? Cadastre-se
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;`;
};

const generateRegisterPage = () => {
  return `import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signUp(email, password);

    if (error) {
      toast({
        title: "Erro no cadastro",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Cadastro realizado!",
        description: "Verifique seu email para confirmar a conta.",
      });
      navigate('/login');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Cadastro</CardTitle>
          <CardDescription>Crie sua nova conta</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-sm text-blue-600 hover:underline">
              Já tem conta? Faça login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;`;
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

## Backend incluído com Supabase

Este projeto inclui configuração completa de backend com:
- Autenticação de usuários
- Banco de dados PostgreSQL
- Storage para arquivos
- APIs prontas para uso
- Row Level Security (RLS) configurado

## Instalação

1. npm install
2. Configure as variáveis de ambiente (copie .env.example para .env)
3. Configure seu projeto Supabase
4. npm run dev`;
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
