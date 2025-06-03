import { 
  Download, 
  Rocket, 
  Bot, 
  Search,
  Zap,
  Star,
  CheckCircle,
  Sparkles,
  Timer,
  Shield,
  Globe,
  Code,
  Layers,
  Crown,
  Lock
} from 'lucide-react';

export const projectTemplates = [
  {
    id: 'saas-app',
    name: 'SaaS App',
    description: 'A complete SaaS application template with user authentication, subscription management, and more.',
    category: 'saas',
    icon: Rocket,
    features: [
      'User Authentication',
      'Subscription Management',
      'Team Collaboration',
      'Task Management',
      'Payment Integration',
      'Admin Dashboard',
      'Customer Support',
      'Analytics'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Supabase'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'e-commerce-platform',
    name: 'E-commerce Platform',
    description: 'A fully functional e-commerce platform with product catalog, shopping cart, checkout, and payment gateway integration.',
    category: 'e-commerce',
    icon: Download,
    features: [
      'Product Catalog',
      'Shopping Cart',
      'Checkout Process',
      'Payment Gateway Integration',
      'Order Management',
      'Customer Accounts',
      'Product Reviews',
      'Discounts and Promotions'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Next.js'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'blog-platform',
    name: 'Blog Platform',
    description: 'A modern blog platform with content management, user authentication, and social media integration.',
    category: 'blogging',
    icon: Globe,
    features: [
      'Content Management',
      'User Authentication',
      'Social Media Integration',
      'Commenting System',
      'SEO Optimization',
      'Responsive Design',
      'Customizable Themes',
      'Analytics'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Next.js'],
    complexity: 'intermediate',
    estimatedTime: '2-4 weeks'
  },
  {
    id: 'task-management-app',
    name: 'Task Management App',
    description: 'A simple task management application with user authentication, task lists, and collaboration features.',
    category: 'productivity',
    icon: Layers,
    features: [
      'User Authentication',
      'Task Lists',
      'Task Assignment',
      'Due Dates',
      'Collaboration Features',
      'Notifications',
      'Progress Tracking',
      'Reporting'
    ],
    tech: ['React', 'Node.js', 'MongoDB'],
    complexity: 'intermediate',
    estimatedTime: '2-4 weeks'
  },
  {
    id: 'portfolio-website',
    name: 'Portfolio Website',
    description: 'A professional portfolio website to showcase your work and skills.',
    category: 'portfolio',
    icon: Code,
    features: [
      'Project Showcase',
      'Skills Section',
      'About Me Section',
      'Contact Form',
      'Responsive Design',
      'Customizable Themes',
      'Blog Integration',
      'SEO Optimization'
    ],
    tech: ['React', 'HTML', 'CSS', 'JavaScript'],
    complexity: 'beginner',
    estimatedTime: '1-2 weeks'
  },
  {
    id: 'crm-system',
    name: 'CRM System',
    description: 'A customer relationship management system to manage leads, contacts, and sales opportunities.',
    category: 'crm',
    icon: Crown,
    features: [
      'Lead Management',
      'Contact Management',
      'Sales Opportunity Management',
      'Task Management',
      'Email Integration',
      'Reporting',
      'Analytics',
      'User Roles and Permissions'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'social-media-platform',
    name: 'Social Media Platform',
    description: 'A social media platform to connect with friends, share updates, and join communities.',
    category: 'social-media',
    icon: Globe,
    features: [
      'User Profiles',
      'News Feed',
      'Post Sharing',
      'Commenting System',
      'Friend Requests',
      'Groups and Communities',
      'Notifications',
      'Messaging'
    ],
    tech: ['React', 'Node.js', 'MongoDB'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'job-board',
    name: 'Job Board',
    description: 'A job board to connect employers with job seekers.',
    category: 'job-board',
    icon: Search,
    features: [
      'Job Listings',
      'Resume Upload',
      'Job Search',
      'Application Tracking',
      'Employer Profiles',
      'User Authentication',
      'Notifications',
      'Reporting'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'event-management-platform',
    name: 'Event Management Platform',
    description: 'An event management platform to create, manage, and promote events.',
    category: 'event-management',
    icon: Star,
    features: [
      'Event Creation',
      'Event Management',
      'Ticketing',
      'Attendee Management',
      'Payment Integration',
      'Marketing Tools',
      'Reporting',
      'Analytics'
    ],
    tech: ['React', 'Node.js', 'MongoDB'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'online-learning-platform',
    name: 'Online Learning Platform',
    description: 'An online learning platform to create and sell courses.',
    category: 'online-learning',
    icon: Layers,
    features: [
      'Course Creation',
      'Course Management',
      'Video Hosting',
      'Student Management',
      'Payment Integration',
      'Progress Tracking',
      'Quizzes and Assessments',
      'Certificates'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'real-time-chat-application',
    name: 'Real-Time Chat Application',
    description: 'A real-time chat application with user authentication, messaging, and group chat features.',
    category: 'communication',
    icon: Zap,
    features: [
      'User Authentication',
      'Messaging',
      'Group Chat',
      'Real-Time Updates',
      'File Sharing',
      'Notifications',
      'User Presence',
      'Search'
    ],
    tech: ['React', 'Node.js', 'WebSocket'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'health-and-fitness-app',
    name: 'Health and Fitness App',
    description: 'A health and fitness app to track workouts, nutrition, and progress.',
    category: 'health-fitness',
    icon: Shield,
    features: [
      'Workout Tracking',
      'Nutrition Tracking',
      'Progress Tracking',
      'Goal Setting',
      'Social Sharing',
      'Wearable Integration',
      'Personalized Recommendations',
      'Community Features'
    ],
    tech: ['React', 'Node.js', 'MongoDB'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'file-sharing-platform',
    name: 'File Sharing Platform',
    description: 'A file sharing platform to upload, share, and collaborate on files.',
    category: 'productivity',
    icon: Layers,
    features: [
      'File Upload',
      'File Sharing',
      'Collaboration Features',
      'Version Control',
      'Access Control',
      'Notifications',
      'Search',
      'Integration with Cloud Storage'
    ],
    tech: ['React', 'Node.js', 'AWS S3'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'e-learning-platform',
    name: 'E-Learning Platform',
    description: 'Create and sell online courses with user progress tracking and interactive lessons.',
    category: 'education',
    icon: Layers,
    features: [
      'Course Creation',
      'User Authentication',
      'Progress Tracking',
      'Interactive Lessons',
      'Payment Integration',
      'Admin Dashboard',
      'Discussion Forums',
      'Certificate Generation'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'food-delivery-app',
    name: 'Food Delivery App',
    description: 'Order food from local restaurants with real-time tracking and secure payments.',
    category: 'e-commerce',
    icon: Download,
    features: [
      'Restaurant Listings',
      'Menu Management',
      'Shopping Cart',
      'Real-Time Tracking',
      'Secure Payments',
      'Order Management',
      'Customer Reviews',
      'Discounts and Promotions'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'hotel-booking-platform',
    name: 'Hotel Booking Platform',
    description: 'Book hotels and accommodations with detailed descriptions and customer reviews.',
    category: 'travel',
    icon: Globe,
    features: [
      'Hotel Listings',
      'Room Availability',
      'Booking Management',
      'Payment Integration',
      'Customer Reviews',
      'Discounts and Promotions',
      'Loyalty Programs',
      'Admin Dashboard'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'music-streaming-service',
    name: 'Music Streaming Service',
    description: 'Stream music online with personalized playlists and social sharing features.',
    category: 'entertainment',
    icon: Star,
    features: [
      'Music Streaming',
      'Personalized Playlists',
      'Social Sharing',
      'User Authentication',
      'Artist Profiles',
      'Album Listings',
      'Search',
      'Recommendations'
    ],
    tech: ['React', 'Node.js', 'AWS S3'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'video-conferencing-app',
    name: 'Video Conferencing App',
    description: 'Conduct video conferences with screen sharing and recording capabilities.',
    category: 'communication',
    icon: Zap,
    features: [
      'Video Conferencing',
      'Screen Sharing',
      'Recording',
      'User Authentication',
      'Chat',
      'Whiteboarding',
      'Breakout Rooms',
      'Admin Controls'
    ],
    tech: ['React', 'Node.js', 'WebSocket'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'online-marketplace',
    name: 'Online Marketplace',
    description: 'Buy and sell products online with secure payments and user reviews.',
    category: 'e-commerce',
    icon: Download,
    features: [
      'Product Listings',
      'Shopping Cart',
      'Secure Payments',
      'User Reviews',
      'Seller Profiles',
      'Order Management',
      'Dispute Resolution',
      'Admin Dashboard'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'personal-finance-tracker',
    name: 'Personal Finance Tracker',
    description: 'Track your income, expenses, and investments with detailed reports and budgeting tools.',
    category: 'finance',
    icon: Shield,
    features: [
      'Income Tracking',
      'Expense Tracking',
      'Investment Tracking',
      'Budgeting Tools',
      'Detailed Reports',
      'Goal Setting',
      'User Authentication',
      'Notifications'
    ],
    tech: ['React', 'Node.js', 'MongoDB'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'delivery-app',
    name: 'Delivery App',
    description: 'A delivery application template with real-time tracking and driver management.',
    category: 'e-commerce',
    icon: Download,
    features: [
      'Real-Time Tracking',
      'Driver Management',
      'Order Management',
      'Payment Integration',
      'Customer Notifications',
      'Route Optimization',
      'Analytics',
      'Admin Dashboard'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'appointment-scheduling-app',
    name: 'Appointment Scheduling App',
    description: 'Schedule appointments with clients and manage your calendar.',
    category: 'productivity',
    icon: Timer,
    features: [
      'Calendar Integration',
      'Client Management',
      'Appointment Reminders',
      'Online Payments',
      'Reporting',
      'User Authentication',
      'Notifications',
      'Admin Dashboard'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'online-code-editor',
    name: 'Online Code Editor',
    description: 'Write and run code online with syntax highlighting and collaboration features.',
    category: 'development',
    icon: Code,
    features: [
      'Syntax Highlighting',
      'Code Completion',
      'Real-Time Collaboration',
      'Version Control',
      'Debugging Tools',
      'Multiple Languages',
      'User Authentication',
      'Code Sharing'
    ],
    tech: ['React', 'Node.js', 'WebSocket'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'online-survey-platform',
    name: 'Online Survey Platform',
    description: 'Create and distribute surveys with detailed analytics and reporting.',
    category: 'productivity',
    icon: Layers,
    features: [
      'Survey Creation',
      'Survey Distribution',
      'Data Collection',
      'Analytics',
      'Reporting',
      'User Authentication',
      'Customizable Themes',
      'Integration with Third-Party Tools'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'crypto-tracker',
    name: 'Crypto Tracker',
    description: 'Track cryptocurrency prices and portfolio performance.',
    category: 'finance',
    icon: Shield,
    features: [
      'Real-Time Prices',
      'Portfolio Tracking',
      'Alerts',
      'News',
      'Charts',
      'User Authentication',
      'Notifications',
      'Integration with Exchanges'
    ],
    tech: ['React', 'Node.js', 'MongoDB'],
    complexity: 'advanced',
    estimatedTime: '4-6 weeks'
  },
  {
    id: 'whatsapp-ecommerce-bot',
    name: 'Bot WhatsApp E-commerce',
    description: 'Bot de atendimento para lojas online com catálogo de produtos, carrinho e checkout',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Catálogo de produtos interativo',
      'Carrinho de compras por WhatsApp',
      'Processamento de pedidos',
      'Status de entrega',
      'Suporte ao cliente automatizado',
      'Integração com gateways de pagamento',
      'Análise de vendas',
      'Remarketing automático'
    ],
    tech: ['React', 'Node.js', 'WhatsApp Business API', 'Supabase', 'Stripe'],
    complexity: 'advanced',
    estimatedTime: '3-4 semanas'
  },
  {
    id: 'whatsapp-restaurant-bot',
    name: 'Bot WhatsApp Restaurante',
    description: 'Sistema de pedidos para restaurantes via WhatsApp com cardápio digital',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Cardápio digital interativo',
      'Sistema de pedidos',
      'Cálculo de taxa de entrega',
      'Integração com delivery',
      'Horário de funcionamento',
      'Promoções automáticas',
      'Feedback de clientes',
      'Relatórios de vendas'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase'],
    complexity: 'intermediate',
    estimatedTime: '2-3 semanas'
  },
  {
    id: 'whatsapp-medical-bot',
    name: 'Bot WhatsApp Clínica Médica',
    description: 'Agendamento de consultas e atendimento médico via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Agendamento de consultas',
      'Lembretes automáticos',
      'Histórico de pacientes',
      'Prescrições digitais',
      'Triagem inicial',
      'Integração com prontuário',
      'Telemedicina básica',
      'Faturamento automático'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase', 'HIPAA Compliance'],
    complexity: 'advanced',
    estimatedTime: '4-5 semanas'
  },
  {
    id: 'whatsapp-education-bot',
    name: 'Bot WhatsApp Educacional',
    description: 'Plataforma de ensino e suporte estudantil via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Distribuição de conteúdo',
      'Quiz e avaliações',
      'Cronograma de estudos',
      'Suporte acadêmico',
      'Biblioteca digital',
      'Grupos de estudo',
      'Certificados digitais',
      'Progresso do aluno'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase'],
    complexity: 'intermediate',
    estimatedTime: '2-3 semanas'
  },
  {
    id: 'whatsapp-real-estate-bot',
    name: 'Bot WhatsApp Imobiliária',
    description: 'Atendimento imobiliário com tours virtuais e agendamentos',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Catálogo de imóveis',
      'Tours virtuais 360°',
      'Agendamento de visitas',
      'Calculadora de financiamento',
      'Documentação digital',
      'CRM integrado',
      'Lead scoring',
      'Relatórios de performance'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase', '360° viewer'],
    complexity: 'advanced',
    estimatedTime: '3-4 semanas'
  },
  {
    id: 'whatsapp-bank-bot',
    name: 'Bot WhatsApp Bancário',
    description: 'Atendimento bancário seguro com transações e consultas',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Consulta de saldo',
      'Extrato bancário',
      'Transferências PIX',
      'Pagamento de boletos',
      'Cartão de crédito',
      'Investimentos',
      'Seguros',
      'Autenticação biométrica'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase', 'OpenBanking'],
    complexity: 'expert',
    estimatedTime: '5-6 semanas'
  },
  {
    id: 'whatsapp-travel-bot',
    name: 'Bot WhatsApp Agência de Viagem',
    description: 'Planejamento e reservas de viagem via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Busca de voos e hotéis',
      'Pacotes personalizados',
      'Roteiros inteligentes',
      'Check-in automático',
      'Seguro viagem',
      'Câmbio de moedas',
      'Guia de destinos',
      'Suporte 24/7'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase', 'Travel APIs'],
    complexity: 'advanced',
    estimatedTime: '3-4 semanas'
  },
  {
    id: 'whatsapp-insurance-bot',
    name: 'Bot WhatsApp Seguradora',
    description: 'Cotações, sinistros e atendimento de seguros via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Cotação automática',
      'Abertura de sinistros',
      'Vistoria digital',
      'Renovação automática',
      'Central de ajuda',
      'Documentos digitais',
      'Pagamento de prêmios',
      'Rede credenciada'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase', 'ML'],
    complexity: 'advanced',
    estimatedTime: '3-4 semanas'
  },
  {
    id: 'whatsapp-logistics-bot',
    name: 'Bot WhatsApp Logística',
    description: 'Rastreamento e gestão de entregas via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Rastreamento em tempo real',
      'Agendamento de coletas',
      'Cálculo de fretes',
      'Proof of delivery',
      'Otimização de rotas',
      'Notificações automáticas',
      'Integração transportadoras',
      'Analytics logísticos'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase', 'Maps API'],
    complexity: 'advanced',
    estimatedTime: '3-4 semanas'
  },
  {
    id: 'whatsapp-hr-bot',
    name: 'Bot WhatsApp Recursos Humanos',
    description: 'Gestão de funcionários e processos de RH via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Onboarding digital',
      'Solicitação de férias',
      'Holerites digitais',
      'Avaliação de desempenho',
      'Treinamentos online',
      'Pesquisas de clima',
      'Benefícios corporativos',
      'Canal de denúncias'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase'],
    complexity: 'intermediate',
    estimatedTime: '2-3 semanas'
  },
  {
    id: 'whatsapp-automotive-bot',
    name: 'Bot WhatsApp Concessionária',
    description: 'Vendas de veículos e agendamento de serviços via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Catálogo de veículos',
      'Test drive virtual',
      'Financiamento simulado',
      'Agendamento revisões',
      'Peças e acessórios',
      'Garantia estendida',
      'Recall automático',
      'Avaliação trade-in'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase', 'VR'],
    complexity: 'advanced',
    estimatedTime: '3-4 semanas'
  },
  {
    id: 'whatsapp-beauty-bot',
    name: 'Bot WhatsApp Salão de Beleza',
    description: 'Agendamentos e vendas para salões de beleza via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Agendamento online',
      'Catálogo de serviços',
      'Lembretes automáticos',
      'Programa fidelidade',
      'Avaliação de serviços',
      'Produtos de beleza',
      'Antes e depois',
      'Promoções personalizadas'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase'],
    complexity: 'intermediate',
    estimatedTime: '2-3 semanas'
  },
  {
    id: 'whatsapp-fitness-bot',
    name: 'Bot WhatsApp Academia',
    description: 'Personal trainer virtual e gestão de academia via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Planos de treino',
      'Acompanhamento nutricional',
      'Check-in academia',
      'Aulas agendadas',
      'Medidas corporais',
      'Motivação diária',
      'Desafios fitness',
      'Comunidade fitness'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase', 'Wearables'],
    complexity: 'intermediate',
    estimatedTime: '2-3 semanas'
  },
  {
    id: 'whatsapp-legal-bot',
    name: 'Bot WhatsApp Escritório Jurídico',
    description: 'Consultoria jurídica e gestão de processos via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Consulta jurídica inicial',
      'Acompanhamento processos',
      'Documentos jurídicos',
      'Agenda de audiências',
      'Honorários transparentes',
      'Jurisprudência',
      'Contratos inteligentes',
      'Mediação online'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase', 'Legal APIs'],
    complexity: 'advanced',
    estimatedTime: '3-4 semanas'
  },
  {
    id: 'whatsapp-veterinary-bot',
    name: 'Bot WhatsApp Veterinária',
    description: 'Cuidados veterinários e agendamentos via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Agendamento consultas',
      'Cartão de vacinas',
      'Emergências 24h',
      'Telemedicina vet',
      'Loja pet online',
      'Lembretes medicação',
      'Histórico médico',
      'Dicas de cuidados'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase'],
    complexity: 'intermediate',
    estimatedTime: '2-3 semanas'
  },
  {
    id: 'whatsapp-construction-bot',
    name: 'Bot WhatsApp Construção Civil',
    description: 'Gestão de obras e orçamentos via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Orçamentos automáticos',
      'Acompanhamento obra',
      'Fornecedores integrados',
      'Cronograma projeto',
      'Relatórios progresso',
      'Documentação técnica',
      'Controle qualidade',
      'Gestão equipes'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase', 'IoT'],
    complexity: 'advanced',
    estimatedTime: '3-4 semanas'
  },
  {
    id: 'whatsapp-pharmacy-bot',
    name: 'Bot WhatsApp Farmácia',
    description: 'Delivery de medicamentos e consultas farmacêuticas via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Catálogo medicamentos',
      'Receita digital',
      'Delivery rápido',
      'Consulta farmacêutica',
      'Programa fidelidade',
      'Lembretes medicação',
      'Interações medicamentosas',
      'Controle estoque'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase', 'ANVISA API'],
    complexity: 'advanced',
    estimatedTime: '3-4 semanas'
  },
  {
    id: 'whatsapp-accounting-bot',
    name: 'Bot WhatsApp Contabilidade',
    description: 'Serviços contábeis e fiscais automatizados via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Declaração imposto renda',
      'Emissão de notas fiscais',
      'Folha de pagamento',
      'Abertura de empresas',
      'Consultoria fiscal',
      'Relatórios contábeis',
      'Compliance automático',
      'Planejamento tributário'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase', 'ERP Integration'],
    complexity: 'expert',
    estimatedTime: '4-5 semanas'
  },
  {
    id: 'whatsapp-therapy-bot',
    name: 'Bot WhatsApp Terapia Online',
    description: 'Suporte psicológico e agendamento de terapias via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Triagem psicológica',
      'Agendamento sessões',
      'Diário emocional',
      'Exercícios terapêuticos',
      'Meditação guiada',
      'Rede de apoio',
      'Emergências psicológicas',
      'Teleconsulta segura'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase', 'HIPAA'],
    complexity: 'advanced',
    estimatedTime: '3-4 semanas'
  },
  {
    id: 'whatsapp-event-bot',
    name: 'Bot WhatsApp Eventos',
    description: 'Organização e gestão de eventos via WhatsApp',
    category: 'customer-service',
    icon: Bot,
    features: [
      'Criação de eventos',
      'Venda de ingressos',
      'Check-in digital',
      'Networking participantes',
      'Agenda personalizada',
      'Transmissão ao vivo',
      'Feedback eventos',
      'Certificados participação'
    ],
    tech: ['React', 'Node.js', 'WhatsApp API', 'Supabase', 'Streaming'],
    complexity: 'advanced',
    estimatedTime: '3-4 semanas'
  }
];

export const categories = [
  {
    id: 'all',
    name: 'Todos',
    icon: Globe
  },
  {
    id: 'saas',
    name: 'SaaS',
    icon: Rocket
  },
  {
    id: 'e-commerce',
    name: 'E-commerce',
    icon: Download
  },
  {
    id: 'blogging',
    name: 'Blogging',
    icon: Globe
  },
  {
    id: 'productivity',
    name: 'Produtividade',
    icon: Layers
  },
  {
    id: 'portfolio',
    name: 'Portfólio',
    icon: Code
  },
  {
    id: 'crm',
    name: 'CRM',
    icon: Crown
  },
  {
    id: 'social-media',
    name: 'Social Media',
    icon: Globe
  },
  {
    id: 'job-board',
    name: 'Job Board',
    icon: Search
  },
  {
    id: 'event-management',
    name: 'Event Management',
    icon: Star
  },
  {
    id: 'online-learning',
    name: 'Online Learning',
    icon: Layers
  },
  {
    id: 'communication',
    name: 'Communication',
    icon: Zap
  },
  {
    id: 'health-fitness',
    name: 'Health & Fitness',
    icon: Shield
  },
  {
    id: 'finance',
    name: 'Finanças',
    icon: Shield
  },
  {
   id: 'travel',
   name: 'Viagens',
   icon: Globe
  },
  {
    id: 'entertainment',
    name: 'Entretenimento',
    icon: Star
  },
  {
    id: 'development',
    name: 'Desenvolvimento',
    icon: Code
  },
  {
    id: 'customer-service',
    name: 'Atendimento',
    icon: Bot
  }
];

export const getTemplatesByCategory = (category: string) => {
  if (category === 'all') {
    return projectTemplates;
  }
  return projectTemplates.filter(template => template.category === category);
};

export const searchTemplates = (searchTerm: string) => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return projectTemplates.filter(template => {
    return (
      template.name.toLowerCase().includes(lowerSearchTerm) ||
      template.description.toLowerCase().includes(lowerSearchTerm) ||
      template.features.some(feature => feature.toLowerCase().includes(lowerSearchTerm))
    );
  });
};
