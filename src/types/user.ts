
export interface UserPlan {
  id: string;
  name: string;
  price: number;
  monthlyLimit: number;
  features: string[];
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  plan_type: 'freemium' | 'pro' | 'business' | 'admin';
  projects_generated: number;
  monthly_limit: number;
  created_at: string;
}

export const userPlans: UserPlan[] = [
  {
    id: 'freemium',
    name: 'Freemium',
    price: 0,
    monthlyLimit: 2,
    features: ['2 projetos por mês', 'Templates básicos', 'Suporte por email']
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29.90,
    monthlyLimit: 10,
    features: ['10 projetos por mês', 'Todos os templates', 'Suporte prioritário', 'Customização avançada']
  },
  {
    id: 'business',
    name: 'Business',
    price: 80.00,
    monthlyLimit: -1, // unlimited
    features: ['Projetos ilimitados', 'Templates exclusivos', 'Suporte 24/7', 'White label', 'API access']
  }
];
