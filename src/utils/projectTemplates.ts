
import { 
  ShoppingCart, 
  Store, 
  Hotel, 
  Users, 
  CheckSquare, 
  Building, 
  TrendingUp, 
  FileText, 
  BookOpen, 
  Smartphone, 
  CreditCard,
  Brain,
  BarChart3,
  Zap
} from 'lucide-react';

export const projectTemplates = [
  // Delivery & E-commerce
  {
    id: 'delivery-system',
    name: 'Sistema de Delivery',
    description: 'Sistema completo de delivery com rastreamento em tempo real, cupons, avaliações e múltiplos gateways de pagamento',
    category: 'delivery',
    features: [
      'Rastreamento em tempo real com mapa',
      'Sistema de cupons e promoções',
      'Avaliação de entregadores e restaurantes',
      'Notificações por e-mail/push',
      'Integração com múltiplos gateways de pagamento',
      'Área de gerenciamento para entregadores',
      'Estatísticas de vendas e entregas',
      'Pedidos recorrentes e assinaturas',
      'Programação de pedidos futuros',
      'Sistema de gorjetas integrado'
    ],
    icon: ShoppingCart,
    color: 'bg-blue-500',
    advanced: [
      'IA para previsão de tempo de entrega',
      'Integração com WhatsApp para status',
      'Dashboards com métricas em tempo real',
      'Sistema de zona de entrega inteligente'
    ]
  },
  {
    id: 'ecommerce-complete',
    name: 'E-commerce Completo',
    description: 'Loja virtual completa com IA para recomendações, marketplace, afiliados e integração com ERP',
    category: 'delivery',
    features: [
      'Carrinho persistente (mesmo após logout)',
      'Recomendação de produtos com IA',
      'Avaliações e comentários de usuários',
      'Checkout simplificado (one-page)',
      'Sistema de afiliados e cashback',
      'Integração com ERP e emissão de NF',
      'Painel para múltiplos vendedores',
      'Teste A/B de páginas de produto',
      'Recuperação de carrinho abandonado',
      'Suporte a vendas internacionais'
    ],
    icon: Store,
    color: 'bg-green-500',
    advanced: [
      'Personalização de tema pelo painel',
      'Compra com 1 clique',
      'Multi-moeda e multi-idioma',
      'Recomendações de SEO com IA'
    ]
  },

  // Negócios & Produtividade
  {
    id: 'crm-empresarial',
    name: 'CRM Empresarial',
    description: 'CRM completo com funil de vendas, automação, lead scoring e previsão de vendas com IA',
    category: 'business',
    features: [
      'Funil de vendas customizável',
      'Tarefas automáticas e follow-ups',
      'Integração com e-mail e WhatsApp',
      'Relatórios por vendedor e campanha',
      'Previsão de vendas com IA',
      'Pontuação de leads (lead scoring)',
      'Módulo de propostas e contratos',
      'Automação de e-mails',
      'Integração com LinkedIn',
      'Painel de metas por time'
    ],
    icon: Users,
    color: 'bg-orange-500',
    advanced: [
      'Reconhecimento de voz para chamadas',
      'IA para previsão de conversão',
      'Assinatura eletrônica integrada',
      'Gestão completa de pipeline'
    ]
  },

  // Apps Mobile
  {
    id: 'delivery-app-mobile',
    name: 'App de Delivery Mobile',
    description: 'App móvel completo para delivery com GPS, notificações push e pagamentos integrados',
    category: 'mobile',
    features: [
      'Rastreamento GPS em tempo real',
      'Push notifications inteligentes',
      'Pagamento integrado (PIX, cartão)',
      'Chat com entregador',
      'Sistema de avaliações',
      'Histórico de pedidos',
      'Favoritos e listas',
      'Modo offline para visualização',
      'Compartilhamento de localização',
      'Suporte a multiple endereços'
    ],
    icon: Smartphone,
    color: 'bg-blue-600',
    advanced: [
      'Reconhecimento por voz para pedidos',
      'IA para sugestões personalizadas',
      'Integração com mapas nativos',
      'Notificações baseadas em localização'
    ]
  },

  // Mais templates seriam adicionados aqui...
];

export const categories = [
  { id: 'all', name: 'Todos', icon: Brain },
  { id: 'delivery', name: 'Delivery & E-commerce', icon: ShoppingCart },
  { id: 'business', name: 'Negócios & Produtividade', icon: Building },
  { id: 'marketing', name: 'Vendas & Marketing', icon: TrendingUp },
  { id: 'content', name: 'Conteúdo & Educação', icon: BookOpen },
  { id: 'data', name: 'Dados & Projetos', icon: BarChart3 },
  { id: 'health', name: 'Saúde & Bem-estar', icon: Users },
  { id: 'mobile', name: 'Apps Mobile', icon: Smartphone }
];
