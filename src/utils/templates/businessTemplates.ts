
import { ShoppingCart, Store, Package, CreditCard, BarChart3, Users, Calendar, FileText, MessageSquare, Heart, Briefcase, Building, Truck, MapPin, Phone } from 'lucide-react';
import { ProjectTemplate } from '../projectTemplates';

export const businessTemplates: ProjectTemplate[] = [
  {
    id: 'ecommerce',
    name: 'E-commerce Platform',
    description: 'Plataforma completa de comércio eletrônico com carrinho, pagamentos e gestão de produtos',
    icon: ShoppingCart,
    complexity: 'medium',
    features: [
      'Catálogo de produtos',
      'Carrinho de compras',
      'Sistema de pagamento',
      'Painel administrativo',
      'Gestão de pedidos',
      'Sistema de avaliações'
    ]
  },
  {
    id: 'marketplace',
    name: 'Marketplace Multi-vendor',
    description: 'Marketplace para múltiplos vendedores com comissões e gestão centralizada',
    icon: Store,
    complexity: 'hard',
    features: [
      'Multi-vendedores',
      'Sistema de comissões',
      'Gestão de produtos',
      'Painel do vendedor',
      'Sistema de disputas',
      'Analytics avançado'
    ]
  },
  {
    id: 'inventory',
    name: 'Sistema de Inventário',
    description: 'Controle completo de estoque com código de barras e relatórios',
    icon: Package,
    complexity: 'medium',
    features: [
      'Controle de estoque',
      'Código de barras',
      'Relatórios detalhados',
      'Alertas de estoque baixo',
      'Gestão de fornecedores',
      'Histórico de movimentações'
    ]
  },
  {
    id: 'pos-system',
    name: 'Sistema PDV',
    description: 'Point of Sale completo para lojas físicas',
    icon: CreditCard,
    complexity: 'medium',
    features: [
      'Vendas rápidas',
      'Múltiplas formas de pagamento',
      'Impressão de cupons',
      'Controle de caixa',
      'Relatórios de vendas',
      'Gestão de funcionários'
    ]
  },
  {
    id: 'analytics-dashboard',
    name: 'Dashboard Analytics',
    description: 'Painel de análise de dados em tempo real',
    icon: BarChart3,
    complexity: 'medium',
    features: [
      'Visualização de dados',
      'Relatórios customizáveis',
      'Métricas em tempo real',
      'Exportação de dados',
      'Alerts automáticos',
      'Integração com APIs'
    ]
  },
  {
    id: 'crm-system',
    name: 'Sistema CRM',
    description: 'Gestão completa de relacionamento com clientes',
    icon: Users,
    complexity: 'hard',
    features: [
      'Gestão de leads',
      'Pipeline de vendas',
      'Histórico de interações',
      'Automação de marketing',
      'Relatórios de performance',
      'Integração com email'
    ]
  },
  {
    id: 'booking-system',
    name: 'Sistema de Agendamento',
    description: 'Plataforma de agendamento online para serviços',
    icon: Calendar,
    complexity: 'medium',
    features: [
      'Calendário interativo',
      'Gestão de horários',
      'Notificações automáticas',
      'Pagamento online',
      'Gestão de clientes',
      'Relatórios de ocupação'
    ]
  },
  {
    id: 'invoice-generator',
    name: 'Gerador de Faturas',
    description: 'Sistema completo para criação e gestão de faturas',
    icon: FileText,
    complexity: 'easy',
    features: [
      'Criação de faturas',
      'Templates customizáveis',
      'Controle de pagamentos',
      'Relatórios financeiros',
      'Envio por email',
      'Gestão de clientes'
    ]
  },
  {
    id: 'chat-support',
    name: 'Chat de Suporte',
    description: 'Sistema de chat em tempo real para atendimento ao cliente',
    icon: MessageSquare,
    complexity: 'medium',
    features: [
      'Chat em tempo real',
      'Sistema de tickets',
      'Histórico de conversas',
      'Múltiplos operadores',
      'Notificações push',
      'Integração com CRM'
    ]
  },
  {
    id: 'donation-platform',
    name: 'Plataforma de Doações',
    description: 'Sistema para campanhas de arrecadação e doações online',
    icon: Heart,
    complexity: 'medium',
    features: [
      'Campanhas de doação',
      'Processamento de pagamentos',
      'Metas e progresso',
      'Certificados de doação',
      'Compartilhamento social',
      'Relatórios de arrecadação'
    ]
  },
  {
    id: 'freelancer-platform',
    name: 'Plataforma Freelancer',
    description: 'Marketplace para freelancers e clientes se conectarem',
    icon: Briefcase,
    complexity: 'hard',
    features: [
      'Perfis de freelancers',
      'Sistema de propostas',
      'Escrow de pagamentos',
      'Avaliações e reviews',
      'Chat integrado',
      'Gestão de projetos'
    ]
  },
  {
    id: 'real-estate',
    name: 'Imobiliária Online',
    description: 'Plataforma para listagem e venda de imóveis',
    icon: Building,
    complexity: 'medium',
    features: [
      'Listagem de imóveis',
      'Busca avançada',
      'Galeria de fotos',
      'Tour virtual',
      'Agendamento de visitas',
      'Calculadora de financiamento'
    ]
  },
  {
    id: 'delivery-app',
    name: 'App de Delivery',
    description: 'Aplicativo completo de delivery com rastreamento',
    icon: Truck,
    complexity: 'hard',
    features: [
      'Pedidos online',
      'Rastreamento em tempo real',
      'Múltiplos restaurantes',
      'Sistema de avaliação',
      'Cupons de desconto',
      'Gestão de entregadores'
    ]
  },
  {
    id: 'location-finder',
    name: 'Localizador de Serviços',
    description: 'Encontre serviços próximos com geolocalização',
    icon: MapPin,
    complexity: 'medium',
    features: [
      'Geolocalização',
      'Busca por proximidade',
      'Avaliações de usuários',
      'Informações de contato',
      'Rotas e direções',
      'Filtros avançados'
    ]
  },
  {
    id: 'voip-system',
    name: 'Sistema VoIP',
    description: 'Sistema de telefonia pela internet para empresas',
    icon: Phone,
    complexity: 'hard',
    features: [
      'Chamadas VoIP',
      'Central telefônica',
      'Gravação de chamadas',
      'Relatórios de uso',
      'Múltiplas linhas',
      'Integração com CRM'
    ]
  }
];
