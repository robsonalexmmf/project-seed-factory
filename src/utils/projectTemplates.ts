import { LucideIcon, CheckCircle, Crown, Database, Edit, Flag, FlaskConical, GitBranch, Hash, MessageSquare, Network, Rocket, Share, Shirt, Smartphone, Sofa, TestTube, Wine } from 'lucide-react';

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  icon: LucideIcon;
  color: string;
}

export interface TemplateCategory {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  templates: ProjectTemplate[];
}

const healthTemplates: ProjectTemplate[] = [
  {
    id: 'telemedicine',
    name: 'Telemedicina',
    description: 'Plataforma de consultas médicas online',
    category: 'health',
    features: ['Videochamadas', 'Prontuário Digital', 'Agendamento', 'Receitas Online'],
    icon: Smartphone,
    color: 'bg-blue-600'
  },
  {
    id: 'health-tracker',
    name: 'Monitor de Saúde',
    description: 'App para acompanhar indicadores de saúde',
    category: 'health',
    features: ['Medições', 'Gráficos', 'Lembretes', 'Relatórios'],
    icon: CheckCircle,
    color: 'bg-green-600'
  },
  {
    id: 'pharmacy-delivery',
    name: 'Farmácia Delivery',
    description: 'Entrega de medicamentos em domicílio',
    category: 'health',
    features: ['Catálogo', 'Receita Digital', 'Entrega Rápida', 'Pagamento Online'],
    icon: FlaskConical,
    color: 'bg-purple-600'
  },
  {
    id: 'mental-health',
    name: 'Saúde Mental',
    description: 'Plataforma de apoio psicológico online',
    category: 'health',
    features: ['Terapia Online', 'Diário Emocional', 'Meditação', 'Comunidade'],
    icon: CheckCircle,
    color: 'bg-teal-600'
  },
  {
    id: 'fitness-coach',
    name: 'Personal Trainer Virtual',
    description: 'Treinamento personalizado online',
    category: 'health',
    features: ['Planos de Treino', 'Vídeo Aulas', 'Acompanhamento', 'Nutrição'],
    icon: Rocket,
    color: 'bg-orange-600'
  },
  {
    id: 'nutrition-app',
    name: 'Nutrição Inteligente',
    description: 'Acompanhamento nutricional personalizado',
    category: 'health',
    features: ['Contador de Calorias', 'Receitas Saudáveis', 'Planos Alimentares', 'Análise Nutricional'],
    icon: CheckCircle,
    color: 'bg-green-600'
  },
  {
    id: 'medical-records',
    name: 'Prontuário Digital',
    description: 'Sistema de gestão de prontuários médicos',
    category: 'health',
    features: ['Histórico Médico', 'Exames', 'Prescrições', 'Relatórios'],
    icon: Database,
    color: 'bg-blue-600'
  },
  {
    id: 'elderly-care',
    name: 'Cuidados para Idosos',
    description: 'Plataforma de cuidados especializados',
    category: 'health',
    features: ['Monitoramento', 'Medicação', 'Emergência', 'Família Conectada'],
    icon: CheckCircle,
    color: 'bg-red-600'
  },
  {
    id: 'dentist-booking',
    name: 'Agendamento Odontológico',
    description: 'Sistema para clínicas dentárias',
    category: 'health',
    features: ['Agendamento Online', 'Prontuário', 'Lembretes', 'Pagamento'],
    icon: Smartphone,
    color: 'bg-cyan-600'
  },
  {
    id: 'sleep-tracker',
    name: 'Monitor do Sono',
    description: 'Análise e melhoria da qualidade do sono',
    category: 'health',
    features: ['Análise do Sono', 'Relatórios', 'Dicas', 'Alarme Inteligente'],
    icon: CheckCircle,
    color: 'bg-indigo-600'
  },
  {
    id: 'pregnancy-tracker',
    name: 'Acompanhamento da Gravidez',
    description: 'App para gestantes',
    category: 'health',
    features: ['Calendário Gestacional', 'Desenvolvimento do Bebê', 'Consultas', 'Diário'],
    icon: CheckCircle,
    color: 'bg-pink-600'
  },
  {
    id: 'vaccine-tracker',
    name: 'Carteira de Vacinação Digital',
    description: 'Controle de vacinas e imunizações',
    category: 'health',
    features: ['Histórico de Vacinas', 'Lembretes', 'Certificados', 'Família'],
    icon: FlaskConical,
    color: 'bg-green-600'
  },
  {
    id: 'therapy-platform',
    name: 'Plataforma de Terapia',
    description: 'Conectando pacientes e terapeutas',
    category: 'health',
    features: ['Busca de Terapeutas', 'Sessões Online', 'Agendamento', 'Progresso'],
    icon: MessageSquare,
    color: 'bg-purple-600'
  },
  {
    id: 'medical-emergency',
    name: 'Emergência Médica',
    description: 'App para situações de emergência',
    category: 'health',
    features: ['Botão de Pânico', 'Localização', 'Contatos de Emergência', 'Informações Médicas'],
    icon: Flag,
    color: 'bg-red-600'
  },
  {
    id: 'rehabilitation',
    name: 'Reabilitação Online',
    description: 'Exercícios de fisioterapia guiados',
    category: 'health',
    features: ['Exercícios Guiados', 'Progresso', 'Fisioterapeuta Online', 'Relatórios'],
    icon: Rocket,
    color: 'bg-orange-600'
  },
  {
    id: 'medication-reminder',
    name: 'Lembrete de Medicação',
    description: 'Nunca esqueça seus remédios',
    category: 'health',
    features: ['Alarmes Personalizados', 'Histórico', 'Interações', 'Relatórios'],
    icon: CheckCircle,
    color: 'bg-blue-600'
  },
  {
    id: 'diet-planner',
    name: 'Planejador de Dieta',
    description: 'Criação de planos alimentares personalizados',
    category: 'health',
    features: ['Planos Personalizados', 'Lista de Compras', 'Receitas', 'Acompanhamento'],
    icon: CheckCircle,
    color: 'bg-green-600'
  },
  {
    id: 'lab-results',
    name: 'Resultados de Exames',
    description: 'Acesso digital aos resultados médicos',
    category: 'health',
    features: ['Histórico de Exames', 'Gráficos de Evolução', 'Compartilhamento', 'Alertas'],
    icon: TestTube,
    color: 'bg-cyan-600'
  },
  {
    id: 'medical-ai',
    name: 'IA Médica Assistente',
    description: 'Assistente virtual para questões de saúde',
    category: 'health',
    features: ['Diagnóstico Preliminar', 'Sintomas', 'Orientações', 'Emergência'],
    icon: Network,
    color: 'bg-purple-600'
  },
  {
    id: 'wellness-coach',
    name: 'Coach de Bem-estar',
    description: 'Orientação personalizada para vida saudável',
    category: 'health',
    features: ['Planos Personalizados', 'Acompanhamento', 'Dicas Diárias', 'Comunidade'],
    icon: Crown,
    color: 'bg-gold-600'
  },
  {
    id: 'medical-interpreter',
    name: 'Intérprete Médico Digital',
    description: 'Tradução em tempo real para consultas médicas',
    category: 'health',
    features: ['Tradução Simultânea', 'Terminologia Médica', 'Múltiplos Idiomas', 'Áudio e Texto'],
    icon: MessageSquare,
    color: 'bg-blue-600'
  },
  {
    id: 'chronic-disease-manager',
    name: 'Gestor de Doenças Crônicas',
    description: 'Acompanhamento completo para pacientes crônicos',
    category: 'health',
    features: ['Monitoramento Contínuo', 'Alertas Médicos', 'Relatórios para Médicos', 'Educação do Paciente'],
    icon: Database,
    color: 'bg-red-600'
  },
  {
    id: 'dermatology-scanner',
    name: 'Scanner Dermatológico IA',
    description: 'Análise de lesões de pele com inteligência artificial',
    category: 'health',
    features: ['Análise por Foto', 'Classificação de Risco', 'Histórico de Lesões', 'Alertas de Mudanças'],
    icon: Network,
    color: 'bg-orange-600'
  },
  {
    id: 'addiction-recovery',
    name: 'Recuperação de Vícios',
    description: 'Plataforma de apoio para dependência química',
    category: 'health',
    features: ['Grupos de Apoio', 'Contador de Sobriedade', 'SOS 24h', 'Terapia Cognitiva'],
    icon: CheckCircle,
    color: 'bg-green-600'
  },
  {
    id: 'posture-monitor',
    name: 'Monitor de Postura',
    description: 'Correção de postura para trabalho remoto',
    category: 'health',
    features: ['Detecção por Câmera', 'Alertas de Postura', 'Exercícios Corretivos', 'Relatórios Semanais'],
    icon: Smartphone,
    color: 'bg-purple-600'
  },
  {
    id: 'allergy-tracker',
    name: 'Rastreador de Alergias',
    description: 'Monitoramento de alergias e reações',
    category: 'health',
    features: ['Diário de Sintomas', 'Scanner de Ingredientes', 'Alertas de Pólen', 'Emergência Alérgica'],
    icon: Flag,
    color: 'bg-red-600'
  },
  {
    id: 'cognitive-training',
    name: 'Treinamento Cognitivo',
    description: 'Exercícios para saúde mental e memória',
    category: 'health',
    features: ['Jogos Cognitivos', 'Avaliação Neuropsicológica', 'Progressão Personalizada', 'Relatórios Clínicos'],
    icon: Rocket,
    color: 'bg-cyan-600'
  },
  {
    id: 'hearing-test',
    name: 'Teste Auditivo Digital',
    description: 'Avaliação auditiva remota e acompanhamento',
    category: 'health',
    features: ['Audiometria Digital', 'Histórico Auditivo', 'Calibração de Aparelhos', 'Terapia Sonora'],
    icon: MessageSquare,
    color: 'bg-indigo-600'
  },
  {
    id: 'pain-diary',
    name: 'Diário da Dor',
    description: 'Registro e análise de dor crônica',
    category: 'health',
    features: ['Escala de Dor', 'Fatores Desencadeantes', 'Padrões Temporais', 'Relatórios Médicos'],
    icon: Edit,
    color: 'bg-orange-600'
  },
  {
    id: 'home-care-coordination',
    name: 'Coordenação de Home Care',
    description: 'Gestão de cuidados domiciliares',
    category: 'health',
    features: ['Agendamento de Cuidadores', 'Monitoramento Remoto', 'Família Conectada', 'Planos de Cuidado'],
    icon: Database,
    color: 'bg-green-600'
  }
];

const businessTemplates: ProjectTemplate[] = [
  {
    id: 'crm-system',
    name: 'Sistema CRM',
    description: 'Gestão completa de relacionamento com clientes',
    category: 'business',
    features: ['Pipeline de Vendas', 'Contatos', 'Relatórios', 'Automação'],
    icon: Database,
    color: 'bg-blue-600'
  },
  {
    id: 'project-management',
    name: 'Gestão de Projetos',
    description: 'Ferramenta completa para gerenciar projetos',
    category: 'business',
    features: ['Kanban', 'Gantt', 'Equipes', 'Relatórios'],
    icon: GitBranch,
    color: 'bg-green-600'
  },
  {
    id: 'inventory-management',
    name: 'Controle de Estoque',
    description: 'Sistema de gestão de inventário',
    category: 'business',
    features: ['Controle de Estoque', 'Alertas', 'Relatórios', 'Fornecedores'],
    icon: Database,
    color: 'bg-purple-600'
  },
  {
    id: 'hr-platform',
    name: 'Plataforma de RH',
    description: 'Gestão completa de recursos humanos',
    category: 'business',
    features: ['Recrutamento', 'Folha de Pagamento', 'Avaliações', 'Treinamentos'],
    icon: CheckCircle,
    color: 'bg-orange-600'
  },
  {
    id: 'invoice-generator',
    name: 'Gerador de Faturas',
    description: 'Criação e gestão de faturas online',
    category: 'business',
    features: ['Templates', 'Pagamento Online', 'Relatórios', 'Clientes'],
    icon: Edit,
    color: 'bg-indigo-600'
  },
  {
    id: 'time-tracking',
    name: 'Controle de Tempo',
    description: 'Monitoramento de horas trabalhadas',
    category: 'business',
    features: ['Timer', 'Projetos', 'Relatórios', 'Faturamento'],
    icon: CheckCircle,
    color: 'bg-teal-600'
  },
  {
    id: 'expense-tracker',
    name: 'Controle de Despesas',
    description: 'Gestão financeira empresarial',
    category: 'business',
    features: ['Categorização', 'Relatórios', 'Aprovações', 'Integração Bancária'],
    icon: Database,
    color: 'bg-red-600'
  },
  {
    id: 'helpdesk-system',
    name: 'Sistema de Suporte',
    description: 'Atendimento ao cliente organizado',
    category: 'business',
    features: ['Tickets', 'Chat', 'Base de Conhecimento', 'SLA'],
    icon: MessageSquare,
    color: 'bg-blue-600'
  },
  {
    id: 'booking-system',
    name: 'Sistema de Reservas',
    description: 'Agendamento online para qualquer negócio',
    category: 'business',
    features: ['Calendário', 'Pagamento', 'Notificações', 'Relatórios'],
    icon: Smartphone,
    color: 'bg-green-600'
  },
  {
    id: 'document-management',
    name: 'Gestão Documental',
    description: 'Organização digital de documentos',
    category: 'business',
    features: ['Upload', 'Categorização', 'Busca', 'Compartilhamento'],
    icon: Database,
    color: 'bg-purple-600'
  },
  {
    id: 'sales-dashboard',
    name: 'Dashboard de Vendas',
    description: 'Visualização de métricas de vendas',
    category: 'business',
    features: ['Gráficos', 'KPIs', 'Relatórios', 'Metas'],
    icon: Network,
    color: 'bg-orange-600'
  },
  {
    id: 'team-collaboration',
    name: 'Colaboração em Equipe',
    description: 'Plataforma para trabalho em equipe',
    category: 'business',
    features: ['Chat', 'Compartilhamento', 'Tarefas', 'Videochamadas'],
    icon: MessageSquare,
    color: 'bg-cyan-600'
  },
  {
    id: 'client-portal',
    name: 'Portal do Cliente',
    description: 'Acesso exclusivo para clientes',
    category: 'business',
    features: ['Login Seguro', 'Documentos', 'Comunicação', 'Histórico'],
    icon: CheckCircle,
    color: 'bg-indigo-600'
  },
  {
    id: 'workflow-automation',
    name: 'Automação de Processos',
    description: 'Automatize fluxos de trabalho',
    category: 'business',
    features: ['Triggers', 'Ações', 'Condições', 'Relatórios'],
    icon: Rocket,
    color: 'bg-purple-600'
  },
  {
    id: 'lead-generation',
    name: 'Geração de Leads',
    description: 'Captura e nurturing de leads',
    category: 'business',
    features: ['Landing Pages', 'Formulários', 'Email Marketing', 'Analytics'],
    icon: Share,
    color: 'bg-green-600'
  },
  {
    id: 'quality-management',
    name: 'Gestão da Qualidade',
    description: 'Sistema de controle de qualidade',
    category: 'business',
    features: ['Auditorias', 'Não Conformidades', 'Ações Corretivas', 'Indicadores'],
    icon: CheckCircle,
    color: 'bg-blue-600'
  },
  {
    id: 'vendor-management',
    name: 'Gestão de Fornecedores',
    description: 'Controle de relacionamento com fornecedores',
    category: 'business',
    features: ['Cadastro', 'Avaliação', 'Contratos', 'Pagamentos'],
    icon: Database,
    color: 'bg-red-600'
  },
  {
    id: 'asset-management',
    name: 'Gestão de Ativos',
    description: 'Controle de patrimônio empresarial',
    category: 'business',
    features: ['Inventário', 'Depreciação', 'Manutenção', 'Relatórios'],
    icon: Database,
    color: 'bg-orange-600'
  },
  {
    id: 'training-platform',
    name: 'Plataforma de Treinamento',
    description: 'Capacitação online para funcionários',
    category: 'business',
    features: ['Cursos', 'Avaliações', 'Certificados', 'Progresso'],
    icon: Rocket,
    color: 'bg-green-600'
  },
  {
    id: 'business-intelligence',
    name: 'Business Intelligence',
    description: 'Inteligência de negócios e analytics',
    category: 'business',
    features: ['Dashboards', 'Relatórios', 'KPIs', 'Previsões'],
    icon: Network,
    color: 'bg-purple-600'
  },
  {
    id: 'franchise-management',
    name: 'Gestão de Franquias',
    description: 'Plataforma completa para redes de franquia',
    category: 'business',
    features: ['Portal do Franqueado', 'Royalties', 'Padronização', 'Relatórios Consolidados'],
    icon: Network,
    color: 'bg-blue-600'
  },
  {
    id: 'sustainability-tracker',
    name: 'Monitor de Sustentabilidade',
    description: 'Rastreamento de metas ESG corporativas',
    category: 'business',
    features: ['Pegada de Carbono', 'Relatórios ESG', 'Certificações', 'Benchmarking'],
    icon: Flag,
    color: 'bg-green-600'
  },
  {
    id: 'innovation-lab',
    name: 'Laboratório de Inovação',
    description: 'Gestão de ideias e projetos inovadores',
    category: 'business',
    features: ['Brainstorming Colaborativo', 'Prototipagem', 'Avaliação de Viabilidade', 'Portfolio de Projetos'],
    icon: Rocket,
    color: 'bg-purple-600'
  },
  {
    id: 'compliance-manager',
    name: 'Gestor de Compliance',
    description: 'Conformidade regulatória automatizada',
    category: 'business',
    features: ['Auditoria Automática', 'Atualizações Regulamentares', 'Relatórios de Conformidade', 'Treinamentos'],
    icon: CheckCircle,
    color: 'bg-red-600'
  },
  {
    id: 'contract-lifecycle',
    name: 'Ciclo de Vida de Contratos',
    description: 'Gestão completa de contratos empresariais',
    category: 'business',
    features: ['Templates Inteligentes', 'Assinatura Digital', 'Renovações Automáticas', 'Análise de Riscos'],
    icon: Edit,
    color: 'bg-indigo-600'
  },
  {
    id: 'crisis-management',
    name: 'Gestão de Crises',
    description: 'Plataforma para gerenciar situações críticas',
    category: 'business',
    features: ['Planos de Contingência', 'Comunicação de Crise', 'Centro de Comando', 'Análise Pós-Crise'],
    icon: Flag,
    color: 'bg-red-600'
  },
  {
    id: 'board-governance',
    name: 'Governança Corporativa',
    description: 'Gestão de conselhos e governança',
    category: 'business',
    features: ['Atas Digitais', 'Votações Online', 'Biblioteca de Documentos', 'Calendário Corporativo'],
    icon: Crown,
    color: 'bg-purple-600'
  },
  {
    id: 'merger-acquisition',
    name: 'Fusões e Aquisições',
    description: 'Plataforma para M&A e due diligence',
    category: 'business',
    features: ['Due Diligence Digital', 'Valuation Tools', 'Integration Planning', 'Risk Assessment'],
    icon: GitBranch,
    color: 'bg-orange-600'
  },
  {
    id: 'workforce-analytics',
    name: 'Analytics de Força de Trabalho',
    description: 'Inteligência de dados para RH',
    category: 'business',
    features: ['Previsão de Turnover', 'Análise de Performance', 'Planejamento Sucessório', 'Diversidade e Inclusão'],
    icon: Network,
    color: 'bg-cyan-600'
  },
  {
    id: 'startup-accelerator',
    name: 'Aceleradora de Startups',
    description: 'Plataforma para acelerar novos negócios',
    category: 'business',
    features: ['Programa de Mentoria', 'Pitch Deck Builder', 'Investor Matching', 'Progress Tracking'],
    icon: Rocket,
    color: 'bg-green-600'
  }
];

const deliveryTemplates: ProjectTemplate[] = [
  {
    id: 'food-delivery',
    name: 'Delivery de Comida',
    description: 'Plataforma completa para delivery de alimentos',
    category: 'delivery',
    features: ['Cardápio Digital', 'Pedidos Online', 'Rastreamento', 'Pagamento'],
    icon: Smartphone,
    color: 'bg-red-600'
  },
  {
    id: 'grocery-delivery',
    name: 'Supermercado Online',
    description: 'Entrega de produtos de supermercado',
    category: 'delivery',
    features: ['Catálogo', 'Lista de Compras', 'Agendamento', 'Promoções'],
    icon: Database,
    color: 'bg-green-600'
  },
  {
    id: 'pharmacy-delivery',
    name: 'Farmácia Delivery',
    description: 'Entrega de medicamentos',
    category: 'delivery',
    features: ['Receita Digital', 'Estoque', 'Entrega Expressa', 'Lembretes'],
    icon: FlaskConical,
    color: 'bg-blue-600'
  },
  {
    id: 'courier-service',
    name: 'Serviço de Motoboy',
    description: 'Plataforma para serviços de entrega',
    category: 'delivery',
    features: ['Solicitação', 'Rastreamento GPS', 'Estimativa', 'Avaliações'],
    icon: Rocket,
    color: 'bg-orange-600'
  },
  {
    id: 'package-tracking',
    name: 'Rastreamento de Encomendas',
    description: 'Sistema de acompanhamento de entregas',
    category: 'delivery',
    features: ['Código de Rastreio', 'Status em Tempo Real', 'Notificações', 'Histórico'],
    icon: Network,
    color: 'bg-purple-600'
  },
  {
    id: 'logistics-platform',
    name: 'Plataforma Logística',
    description: 'Gestão completa de logística',
    category: 'delivery',
    features: ['Rotas Otimizadas', 'Gestão de Frota', 'Relatórios', 'Integração'],
    icon: GitBranch,
    color: 'bg-cyan-600'
  },
  {
    id: 'laundry-delivery',
    name: 'Lavanderia Delivery',
    description: 'Coleta e entrega de roupas',
    category: 'delivery',
    features: ['Agendamento', 'Serviços', 'Rastreamento', 'Pagamento'],
    icon: Shirt,
    color: 'bg-indigo-600'
  },
  {
    id: 'flower-delivery',
    name: 'Entrega de Flores',
    description: 'Floricultura online com delivery',
    category: 'delivery',
    features: ['Catálogo', 'Ocasiões Especiais', 'Agendamento', 'Cartões'],
    icon: CheckCircle,
    color: 'bg-pink-600'
  },
  {
    id: 'gas-delivery',
    name: 'Delivery de Gás',
    description: 'Entrega de botijões de gás',
    category: 'delivery',
    features: ['Pedido Rápido', 'Agendamento', 'Pagamento', 'Histórico'],
    icon: Rocket,
    color: 'bg-red-600'
  },
  {
    id: 'pet-delivery',
    name: 'Pet Shop Delivery',
    description: 'Entrega de produtos para pets',
    category: 'delivery',
    features: ['Ração', 'Medicamentos', 'Brinquedos', 'Agendamento'],
    icon: CheckCircle,
    color: 'bg-orange-600'
  },
  {
    id: 'alcohol-delivery',
    name: 'Bebidas Delivery',
    description: 'Entrega de bebidas alcoólicas',
    category: 'delivery',
    features: ['Verificação de Idade', 'Catálogo', 'Promoções', 'Entrega Rápida'],
    icon: Wine,
    color: 'bg-purple-600'
  },
  {
    id: 'water-delivery',
    name: 'Delivery de Água',
    description: 'Entrega de água mineral e galões',
    category: 'delivery',
    features: ['Assinatura', 'Agendamento', 'Galões Retornáveis', 'Pagamento'],
    icon: CheckCircle,
    color: 'bg-blue-600'
  },
  {
    id: 'cake-delivery',
    name: 'Confeitaria Delivery',
    description: 'Entrega de bolos e doces',
    category: 'delivery',
    features: ['Personalização', 'Ocasiões', 'Agendamento', 'Fotos'],
    icon: CheckCircle,
    color: 'bg-pink-600'
  },
  {
    id: 'book-delivery',
    name: 'Livraria Delivery',
    description: 'Entrega de livros e materiais',
    category: 'delivery',
    features: ['Catálogo', 'Busca', 'Recomendações', 'Wishlist'],
    icon: Database,
    color: 'bg-green-600'
  },
  {
    id: 'electronics-delivery',
    name: 'Eletrônicos Delivery',
    description: 'Entrega de produtos eletrônicos',
    category: 'delivery',
    features: ['Garantia', 'Comparação', 'Avaliações', 'Suporte'],
    icon: Smartphone,
    color: 'bg-cyan-600'
  },
  {
    id: 'furniture-delivery',
    name: 'Móveis Delivery',
    description: 'Entrega e montagem de móveis',
    category: 'delivery',
    features: ['Catálogo 3D', 'Agendamento', 'Montagem', 'Garantia'],
    icon: Sofa,
    color: 'bg-indigo-600'
  },
  {
    id: 'medicine-delivery',
    name: 'Remédios Expressos',
    description: 'Entrega urgente de medicamentos',
    category: 'delivery',
    features: ['24 Horas', 'Receita Digital', 'Estoque Verificado', 'Entrega Expressa'],
    icon: FlaskConical,
    color: 'bg-red-600'
  },
  {
    id: 'seafood-delivery',
    name: 'Frutos do Mar Delivery',
    description: 'Entrega de peixes e frutos do mar frescos',
    category: 'delivery',
    features: ['Frescor Garantido', 'Origem', 'Receitas', 'Conservação'],
    icon: CheckCircle,
    color: 'bg-blue-600'
  },
  {
    id: 'office-delivery',
    name: 'Material de Escritório',
    description: 'Entrega de suprimentos corporativos',
    category: 'delivery',
    features: ['B2B', 'Volume', 'Faturamento', 'Assinatura'],
    icon: Database,
    color: 'bg-orange-600'
  },
  {
    id: 'ice-cream-delivery',
    name: 'Sorveteria Delivery',
    description: 'Entrega de sorvetes e gelados',
    category: 'delivery',
    features: ['Conservação', 'Sabores', 'Promoções', 'Entrega Rápida'],
    icon: CheckCircle,
    color: 'bg-cyan-600'
  },
  {
    id: 'drone-delivery',
    name: 'Delivery por Drone',
    description: 'Entrega autônoma usando drones',
    category: 'delivery',
    features: ['Voo Autônomo', 'Mapeamento Aéreo', 'Entrega em Áreas Remotas', 'Rastreamento 3D'],
    icon: Rocket,
    color: 'bg-purple-600'
  },
  {
    id: 'scheduled-delivery',
    name: 'Delivery Programado',
    description: 'Entregas com agendamento flexível',
    category: 'delivery',
    features: ['Janelas de Entrega', 'Calendário Interativo', 'Reagendamento', 'Preferências do Cliente'],
    icon: Database,
    color: 'bg-green-600'
  },
  {
    id: 'bulk-delivery',
    name: 'Delivery Atacado',
    description: 'Entregas em grande volume para empresas',
    category: 'delivery',
    features: ['Pedidos Corporativos', 'Desconto por Volume', 'Logística Especializada', 'Faturamento B2B'],
    icon: Network,
    color: 'bg-blue-600'
  },
  {
    id: 'subscription-delivery',
    name: 'Delivery por Assinatura',
    description: 'Entregas recorrentes personalizadas',
    category: 'delivery',
    features: ['Planos Mensais', 'Curadoria Personalizada', 'Pausar/Retomar', 'Histórico de Preferências'],
    icon: CheckCircle,
    color: 'bg-indigo-600'
  },
  {
    id: 'eco-delivery',
    name: 'Delivery Sustentável',
    description: 'Entregas com foco em sustentabilidade',
    category: 'delivery',
    features: ['Veículos Elétricos', 'Embalagens Biodegradáveis', 'Compensação de Carbono', 'Pontos Verdes'],
    icon: Flag,
    color: 'bg-green-600'
  },
  {
    id: 'crowd-delivery',
    name: 'Delivery Colaborativo',
    description: 'Entrega compartilhada entre vizinhos',
    category: 'delivery',
    features: ['Entregadores Locais', 'Pontos de Coleta Comunitários', 'Economia Compartilhada', 'Cashback Social'],
    icon: Share,
    color: 'bg-orange-600'
  },
  {
    id: 'same-day-delivery',
    name: 'Entrega no Mesmo Dia',
    description: 'Logística ultra-rápida para entregas expressas',
    category: 'delivery',
    features: ['Micro-hubs', 'Previsão em Tempo Real', 'Entrega em Horas', 'Priorização Dinâmica'],
    icon: Rocket,
    color: 'bg-red-600'
  },
  {
    id: 'temperature-controlled',
    name: 'Delivery Refrigerado',
    description: 'Transporte com controle de temperatura',
    category: 'delivery',
    features: ['Monitoramento Térmico', 'Alertas de Temperatura', 'Cadeia Fria', 'Certificação HACCP'],
    icon: FlaskConical,
    color: 'bg-cyan-600'
  },
  {
    id: 'white-glove-delivery',
    name: 'Delivery Premium',
    description: 'Serviço de entrega de alto padrão',
    category: 'delivery',
    features: ['Entregador Especializado', 'Montagem Incluída', 'Agendamento VIP', 'Garantia Estendida'],
    icon: Crown,
    color: 'bg-purple-600'
  },
  {
    id: 'return-logistics',
    name: 'Logística Reversa',
    description: 'Sistema completo para devoluções',
    category: 'delivery',
    features: ['Coleta de Devoluções', 'Reprocessamento', 'Crédito Automático', 'Análise de Motivos'],
    icon: GitBranch,
    color: 'bg-indigo-600'
  }
];

const educationTemplates: ProjectTemplate[] = [
  {
    id: 'lms-platform',
    name: 'Plataforma EAD',
    description: 'Sistema completo de ensino à distância',
    category: 'education',
    features: ['Cursos Online', 'Vídeo Aulas', 'Avaliações', 'Certificados'],
    icon: Rocket,
    color: 'bg-blue-600'
  },
  {
    id: 'school-management',
    name: 'Gestão Escolar',
    description: 'Sistema administrativo para escolas',
    category: 'education',
    features: ['Matrículas', 'Notas', 'Frequência', 'Comunicação'],
    icon: Database,
    color: 'bg-green-600'
  },
  {
    id: 'language-learning',
    name: 'Aprendizado de Idiomas',
    description: 'App para aprender novos idiomas',
    category: 'education',
    features: ['Lições Interativas', 'Pronuncia', 'Gamificação', 'Progresso'],
    icon: MessageSquare,
    color: 'bg-purple-600'
  },
  {
    id: 'tutoring-platform',
    name: 'Plataforma de Tutoria',
    description: 'Conecta alunos e professores particulares',
    category: 'education',
    features: ['Busca de Tutores', 'Agendamento', 'Pagamento', 'Avaliações'],
    icon: CheckCircle,
    color: 'bg-orange-600'
  },
  {
    id: 'coding-bootcamp',
    name: 'Bootcamp de Programação',
    description: 'Curso intensivo de desenvolvimento',
    category: 'education',
    features: ['Projetos Práticos', 'Mentoria', 'Portfolio', 'Job Board'],
    icon: GitBranch,
    color: 'bg-indigo-600'
  },
  {
    id: 'exam-preparation',
    name: 'Preparação para Concursos',
    description: 'Estudos direcionados para exames',
    category: 'education',
    features: ['Simulados', 'Cronograma', 'Estatísticas', 'Dicas'],
    icon: TestTube,
    color: 'bg-red-600'
  },
  {
    id: 'quiz-platform',
    name: 'Plataforma de Quiz',
    description: 'Criação e aplicação de questionários',
    category: 'education',
    features: ['Criador de Quiz', 'Ranking', 'Relatórios', 'Gamificação'],
    icon: Flag,
    color: 'bg-cyan-600'
  },
  {
    id: 'library-system',
    name: 'Sistema de Biblioteca',
    description: 'Gestão digital de bibliotecas',
    category: 'education',
    features: ['Catálogo', 'Empréstimos', 'Reservas', 'Multas'],
    icon: Database,
    color: 'bg-green-600'
  },
  {
    id: 'homework-helper',
    name: 'Assistente de Lição',
    description: 'Ajuda com deveres escolares',
    category: 'education',
    features: ['IA Assistente', 'Explicações', 'Exemplos', 'Dúvidas'],
    icon: Network,
    color: 'bg-purple-600'
  },
  {
    id: 'virtual-classroom',
    name: 'Sala de Aula Virtual',
    description: 'Ambiente online para aulas',
    category: 'education',
    features: ['Videochamadas', 'Quadro Virtual', 'Chat', 'Gravações'],
    icon: Smartphone,
    color: 'bg-blue-600'
  },
  {
    id: 'skill-assessment',
    name: 'Avaliação de Habilidades',
    description: 'Testes de competências profissionais',
    category: 'education',
    features: ['Testes Personalizados', 'Resultados Detalhados', 'Certificações', 'Benchmarks'],
    icon: CheckCircle,
    color: 'bg-orange-600'
  },
  {
    id: 'research-platform',
    name: 'Plataforma de Pesquisa',
    description: 'Ferramenta para pesquisa acadêmica',
    category: 'education',
    features: ['Base de Dados', 'Colaboração', 'Publicações', 'Citações'],
    icon: Database,
    color: 'bg-green-600'
  },
  {
    id: 'music-learning',
    name: 'Aprendizado Musical',
    description: 'Aulas de música online',
    category: 'education',
    features: ['Instrumentos', 'Teoria Musical', 'Partituras', 'Prática'],
    icon: CheckCircle,
    color: 'bg-purple-600'
  },
  {
    id: 'art-courses',
    name: 'Cursos de Arte',
    description: 'Ensino de artes visuais',
    category: 'education',
    features: ['Técnicas', 'Galeria', 'Feedback', 'Materiais'],
    icon: Edit,
    color: 'bg-pink-600'
  },
  {
    id: 'math-solver',
    name: 'Solucionador de Matemática',
    description: 'Resolução de problemas matemáticos',
    category: 'education',
    features: ['Passo a Passo', 'Gráficos', 'Exercícios', 'Níveis'],
    icon: Hash,
    color: 'bg-cyan-600'
  },
  {
    id: 'science-lab',
    name: 'Laboratório Virtual',
    description: 'Experimentos científicos online',
    category: 'education',
    features: ['Simulações', 'Experimentos', 'Relatórios', 'Segurança'],
    icon: FlaskConical,
    color: 'bg-green-600'
  },
  {
    id: 'career-guidance',
    name: 'Orientação Profissional',
    description: 'Guia para escolha de carreira',
    category: 'education',
    features: ['Testes Vocacionais', 'Profissões', 'Mercado', 'Networking'],
    icon: Rocket,
    color: 'bg-indigo-600'
  },
  {
    id: 'parent-portal',
    name: 'Portal dos Pais',
    description: 'Acompanhamento escolar dos filhos',
    category: 'education',
    features: ['Notas', 'Frequência', 'Comunicação', 'Eventos'],
    icon: MessageSquare,
    color: 'bg-blue-600'
  },
  {
    id: 'workshop-booking',
    name: 'Reserva de Workshops',
    description: 'Agendamento de oficinas e workshops',
    category: 'education',
    features: ['Calendário', 'Instrutores', 'Materiais', 'Certificados'],
    icon: Smartphone,
    color: 'bg-orange-600'
  },
  {
    id: 'study-planner',
    name: 'Planejador de Estudos',
    description: 'Organização de cronograma de estudos',
    category: 'education',
    features: ['Cronograma', 'Metas', 'Pomodoro', 'Progresso'],
    icon: Flag,
    color: 'bg-red-600'
  },
  {
    id: 'adaptive-learning',
    name: 'Aprendizado Adaptativo',
    description: 'IA que personaliza o ensino para cada aluno',
    category: 'education',
    features: ['Algoritmos Adaptativos', 'Trilhas Personalizadas', 'Análise de Aprendizado', 'Recomendações Inteligentes'],
    icon: Network,
    color: 'bg-purple-600'
  },
  {
    id: 'micro-learning',
    name: 'Micro Aprendizado',
    description: 'Conteúdo educacional em pequenas doses',
    category: 'education',
    features: ['Lições de 5 Minutos', 'Notificações Inteligentes', 'Spaced Repetition', 'Gamificação'],
    icon: Smartphone,
    color: 'bg-green-600'
  },
  {
    id: 'peer-tutoring',
    name: 'Tutoria Entre Pares',
    description: 'Estudantes ensinando outros estudantes',
    category: 'education',
    features: ['Matching Inteligente', 'Sistema de Pontos', 'Avaliação Mútua', 'Grupos de Estudo'],
    icon: Share,
    color: 'bg-blue-600'
  },
  {
    id: 'ar-education',
    name: 'Educação em Realidade Aumentada',
    description: 'Aprendizado imersivo com AR',
    category: 'education',
    features: ['Modelos 3D Interativos', 'Simulações Realistas', 'Laboratórios Virtuais', 'Experiências Imersivas'],
    icon: Rocket,
    color: 'bg-orange-600'
  },
  {
    id: 'digital-literacy',
    name: 'Alfabetização Digital',
    description: 'Ensino de competências digitais',
    category: 'education',
    features: ['Básico de Computador', 'Segurança Digital', 'Pensamento Computacional', 'Cidadania Digital'],
    icon: Database,
    color: 'bg-cyan-600'
  },
  {
    id: 'corporate-university',
    name: 'Universidade Corporativa',
    description: 'Plataforma de educação empresarial',
    category: 'education',
    features: ['Trilhas de Carreira', 'Certificações Internas', 'Mentoria Corporativa', 'ROI de Treinamento'],
    icon: Crown,
    color: 'bg-indigo-600'
  },
  {
    id: 'special-needs-education',
    name: 'Educação Especial',
    description: 'Plataforma adaptada para necessidades especiais',
    category: 'education',
    features: ['Interface Acessível', 'Comunicação Alternativa', 'Adaptações Pedagógicas', 'Família Conectada'],
    icon: CheckCircle,
    color: 'bg-green-600'
  },
  {
    id: 'teacher-marketplace',
    name: 'Marketplace de Professores',
    description: 'Conecta educadores independentes com alunos',
    category: 'education',
    features: ['Perfil de Educador', 'Aulas Particulares', 'Sistema de Avaliação', 'Pagamentos Seguros'],
    icon: Share,
    color: 'bg-purple-600'
  },
  {
    id: 'learning-analytics',
    name: 'Analytics de Aprendizado',
    description: 'Dados inteligentes sobre educação',
    category: 'education',
    features: ['Dashboard de Progresso', 'Predição de Performance', 'Insights Pedagógicos', 'Relatórios Automatizados'],
    icon: Network,
    color: 'bg-red-600'
  },
  {
    id: 'international-exchange',
    name: 'Intercâmbio Virtual',
    description: 'Conexões educacionais globais',
    category: 'education',
    features: ['Parcerias Globais', 'Projetos Colaborativos', 'Troca Cultural', 'Certificação Internacional'],
    icon: Flag,
    color: 'bg-blue-600'
  }
];

const socialMediaTemplates: ProjectTemplate[] = [
  {
    id: 'social-network',
    name: 'Rede Social',
    description: 'Plataforma de rede social completa',
    category: 'social',
    features: ['Feed', 'Amigos', 'Mensagens', 'Grupos'],
    icon: MessageSquare,
    color: 'bg-blue-600'
  },
  {
    id: 'dating-app',
    name: 'App de Relacionamento',
    description: 'Plataforma para encontros',
    category: 'social',
    features: ['Perfis', 'Match', 'Chat', 'Localização'],
    icon: CheckCircle,
    color: 'bg-pink-600'
  },
  {
    id: 'forum-platform',
    name: 'Fórum de Discussão',
    description: 'Comunidade online para discussões',
    category: 'social',
    features: ['Tópicos', 'Categorias', 'Moderação', 'Reputação'],
    icon: MessageSquare,
    color: 'bg-purple-600'
  },
  {
    id: 'event-platform',
    name: 'Plataforma de Eventos',
    description: 'Criação e gestão de eventos sociais',
    category: 'social',
    features: ['Criação de Eventos', 'RSVP', 'Check-in', 'Networking'],
    icon: Flag,
    color: 'bg-orange-600'
  },
  {
    id: 'photo-sharing',
    name: 'Compartilhamento de Fotos',
    description: 'Rede social focada em imagens',
    category: 'social',
    features: ['Upload', 'Filtros', 'Stories', 'Hashtags'],
    icon: Share,
    color: 'bg-cyan-600'
  },
  {
    id: 'video-platform',
    name: 'Plataforma de Vídeos',
    description: 'Compartilhamento de conteúdo em vídeo',
    category: 'social',
    features: ['Upload', 'Streaming', 'Comentários', 'Monetização'],
    icon: Smartphone,
    color: 'bg-red-600'
  },
  {
    id: 'community-platform',
    name: 'Plataforma Comunitária',
    description: 'Criação de comunidades online',
    category: 'social',
    features: ['Grupos', 'Moderação', 'Eventos', 'Recursos'],
    icon: CheckCircle,
    color: 'bg-green-600'
  },
  {
    id: 'influencer-platform',
    name: 'Plataforma de Influenciadores',
    description: 'Conecta marcas e influenciadores',
    category: 'social',
    features: ['Portfólio', 'Campanhas', 'Analytics', 'Pagamentos'],
    icon: Crown,
    color: 'bg-purple-600'
  },
  {
    id: 'live-streaming',
    name: 'Streaming ao Vivo',
    description: 'Plataforma de transmissões ao vivo',
    category: 'social',
    features: ['Live', 'Chat em Tempo Real', 'Doações', 'Gravações'],
    icon: Rocket,
    color: 'bg-red-600'
  },
  {
    id: 'book-club',
    name: 'Clube do Livro',
    description: 'Rede social para amantes de livros',
    category: 'social',
    features: ['Resenhas', 'Listas de Leitura', 'Discussões', 'Recomendações'],
    icon: Database,
    color: 'bg-indigo-600'
  },
  {
    id: 'fitness-social',
    name: 'Rede Social Fitness',
    description: 'Comunidade para entusiastas do fitness',
    category: 'social',
    features: ['Treinos', 'Progresso', 'Desafios', 'Motivação'],
    icon: Rocket,
    color: 'bg-orange-600'
  },
  {
    id: 'professional-network',
    name: 'Rede Profissional',
    description: 'LinkedIn-like para networking profissional',
    category: 'social',
    features: ['Perfil Profissional', 'Conexões', 'Jobs', 'Endossos'],
    icon: Network,
    color: 'bg-blue-600'
  },
  {
    id: 'hobby-community',
    name: 'Comunidade de Hobbies',
    description: 'Plataforma para compartilhar hobbies',
    category: 'social',
    features: ['Projetos', 'Tutoriais', 'Grupos', 'Marketplace'],
    icon: CheckCircle,
    color: 'bg-green-600'
  },
  {
    id: 'travel-social',
    name: 'Rede Social de Viagem',
    description: 'Compartilhamento de experiências de viagem',
    category: 'social',
    features: ['Diários de Viagem', 'Fotos', 'Dicas', 'Roteiros'],
    icon: Share,
    color: 'bg-cyan-600'
  },
  {
    id: 'gaming-community',
    name: 'Comunidade Gamer',
    description: 'Rede social para gamers',
    category: 'social',
    features: ['Perfis de Jogador', 'Clãs', 'Torneios', 'Streaming'],
    icon: Smartphone,
    color: 'bg-purple-600'
  },
  {
    id: 'music-social',
    name: 'Rede Social Musical',
    description: 'Plataforma para músicos e fãs',
    category: 'social',
    features: ['Perfis de Artista', 'Streaming', 'Colaborações', 'Shows'],
    icon: CheckCircle,
    color: 'bg-pink-600'
  },
  {
    id: 'food-social',
    name: 'Rede Social Gastronômica',
    description: 'Compartilhamento de experiências culinárias',
    category: 'social',
    features: ['Receitas', 'Restaurantes', 'Reviews', 'Fotos'],
    icon: Share,
    color: 'bg-orange-600'
  },
  {
    id: 'art-community',
    name: 'Comunidade Artística',
    description: 'Plataforma para artistas e arte',
    category: 'social',
    features: ['Portfolio', 'Exposições', 'Vendas', 'Colaborações'],
    icon: Edit,
    color: 'bg-purple-600'
  },
  {
    id: 'pet-social',
    name: 'Rede Social Pet',
    description: 'Rede social para donos de pets',
    category: 'social',
    features: ['Perfis de Pets', 'Playdate', 'Cuidados', 'Fotos'],
    icon: CheckCircle,
    color: 'bg-green-600'
  },
  {
    id: 'neighborhood-app',
    name: 'App da Vizinhança',
    description: 'Rede social local para vizinhos',
    category: 'social',
    features: ['Avisos Locais', 'Serviços', 'Segurança', 'Eventos'],
    icon: MessageSquare,
    color: 'bg-blue-600'
  },
  {
    id: 'mental-wellness-community',
    name: 'Comunidade de Bem-estar Mental',
    description: 'Rede de apoio para saúde mental',
    category: 'social',
    features: ['Grupos de Apoio', 'Anonimato Opcional', 'Recursos Terapêuticos', 'Check-ins Diários'],
    icon: CheckCircle,
    color: 'bg-green-600'
  },
  {
    id: 'senior-social-network',
    name: 'Rede Social Sênior',
    description: 'Plataforma social adaptada para idosos',
    category: 'social',
    features: ['Interface Simplificada', 'Videochamadas Fáceis', 'Compartilhamento Familiar', 'Atividades Locais'],
    icon: MessageSquare,
    color: 'bg-blue-600'
  },
  {
    id: 'activism-platform',
    name: 'Plataforma de Ativismo',
    description: 'Organização de movimentos sociais',
    category: 'social',
    features: ['Campanhas', 'Petições Online', 'Eventos de Protesto', 'Doações para Causas'],
    icon: Flag,
    color: 'bg-red-600'
  },
  {
    id: 'parenting-network',
    name: 'Rede de Pais',
    description: 'Comunidade para pais e responsáveis',
    category: 'social',
    features: ['Dicas de Criação', 'Grupos por Idade', 'Trocas de Experiência', 'Especialistas Online'],
    icon: Share,
    color: 'bg-pink-600'
  },
  {
    id: 'volunteer-matching',
    name: 'Match de Voluntários',
    description: 'Conecta voluntários com organizações',
    category: 'social',
    features: ['Busca por Causa', 'Agendamento de Atividades', 'Horas de Voluntariado', 'Impacto Social'],
    icon: CheckCircle,
    color: 'bg-green-600'
  },
  {
    id: 'creator-economy',
    name: 'Economia de Criadores',
    description: 'Monetização para criadores de conteúdo',
    category: 'social',
    features: ['Assinaturas Pagas', 'Conteúdo Exclusivo', 'Tips Digitais', 'Analytics de Criador'],
    icon: Crown,
    color: 'bg-purple-600'
  },
  {
    id: 'virtual-coworking',
    name: 'Coworking Virtual',
    description: 'Espaço de trabalho social online',
    category: 'social',
    features: ['Salas Virtuais', 'Focus Time', 'Networking Profissional', 'Produtividade Social'],
    icon: Network,
    color: 'bg-cyan-600'
  },
  {
    id: 'cultural-exchange',
    name: 'Intercâmbio Cultural',
    description: 'Troca cultural entre pessoas de diferentes países',
    category: 'social',
    features: ['Pareamento por País', 'Aulas de Idioma', 'Tradições Culturais', 'Amizades Globais'],
    icon: Share,
    color: 'bg-orange-600'
  },
  {
    id: 'skill-sharing',
    name: 'Compartilhamento de Habilidades',
    description: 'Troca de conhecimentos entre usuários',
    category: 'social',
    features: ['Banco de Talentos', 'Escambo de Serviços', 'Avaliações de Qualidade', 'Moeda Virtual'],
    icon: GitBranch,
    color: 'bg-indigo-600'
  },
  {
    id: 'anonymous-support',
    name: 'Suporte Anônimo',
    description: 'Rede de apoio com privacidade total',
    category: 'social',
    features: ['Chat Anônimo', 'Moderação IA', 'Recursos de Crise', 'Verificação de Segurança'],
    icon: Flag,
    color: 'bg-green-600'
  }
];

const ecommerceTemplates: ProjectTemplate[] = [
  {
    id: 'online-store',
    name: 'Loja Virtual',
    description: 'E-commerce completo para vendas online',
    category: 'ecommerce',
    features: ['Catálogo', 'Carrinho', 'Pagamento', 'Gestão'],
    icon: Database,
    color: 'bg-green-600'
  },
  {
    id: 'marketplace',
    name: 'Marketplace',
    description: 'Plataforma multi-vendor',
    category: 'ecommerce',
    features: ['Múltiplos Vendedores', 'Comissões', 'Reviews', 'Analytics'],
    icon: Network,
    color: 'bg-purple-600'
  },
  {
    id: 'auction-platform',
    name: 'Plataforma de Leilões',
    description: 'Sistema de leilões online',
    category: 'ecommerce',
    features: ['Lances', 'Timer', 'Histórico', 'Pagamento Seguro'],
    icon: Crown,
    color: 'bg-orange-600'
  },
  {
    id: 'subscription-box',
    name: 'Box de Assinatura',
    description: 'Vendas por assinatura mensal',
    category: 'ecommerce',
    features: ['Assinaturas', 'Curadoria', 'Recorrência', 'Personalização'],
    icon: CheckCircle,
    color: 'bg-indigo-600'
  },
  {
    id: 'digital-products',
    name: 'Produtos Digitais',
    description: 'Venda de downloads e cursos',
    category: 'ecommerce',
    features: ['Downloads', 'Licenças', 'Proteção', 'Analytics'],
    icon: Database,
    color: 'bg-cyan-600'
  },
  {
    id: 'fashion-store',
    name: 'Loja de Moda',
    description: 'E-commerce especializado em moda',
    category: 'ecommerce',
    features: ['Look Book', 'Tamanhos', 'Tendências', 'Wishlist'],
    icon: Shirt,
    color: 'bg-pink-600'
  },
  {
    id: 'electronics-store',
    name: 'Loja de Eletrônicos',
    description: 'Venda de produtos eletrônicos',
    category: 'ecommerce',
    features: ['Especificações', 'Comparação', 'Garantia', 'Suporte'],
    icon: Smartphone,
    color: 'bg-blue-600'
  },
  {
    id: 'handmade-marketplace',
    name: 'Marketplace Artesanal',
    description: 'Plataforma para produtos artesanais',
    category: 'ecommerce',
    features: ['Artesãos', 'Personalização', 'História do Produto', 'Sustentabilidade'],
    icon: Edit,
    color: 'bg-green-600'
  },
  {
    id: 'b2b-platform',
    name: 'Plataforma B2B',
    description: 'E-commerce para empresas',
    category: 'ecommerce',
    features: ['Atacado', 'Orçamentos', 'Crédito', 'Faturamento'],
    icon: Database,
    color: 'bg-indigo-600'
  },
  {
    id: 'rental-platform',
    name: 'Plataforma de Aluguel',
    description: 'Aluguel de produtos e equipamentos',
    category: 'ecommerce',
    features: ['Calendário', 'Disponibilidade', 'Seguro', 'Devolução'],
    icon: Smartphone,
    color: 'bg-orange-600'
  },
  {
    id: 'jewelry-store',
    name: 'Joalheria Online',
    description: 'Venda de joias e acessórios',
    category: 'ecommerce',
    features: ['Visualização 3D', 'Certificados', 'Personalização', 'Segurança'],
    icon: Crown,
    color: 'bg-purple-600'
  },
  {
    id: 'furniture-store',
    name: 'Loja de Móveis',
    description: 'E-commerce de móveis e decoração',
    category: 'ecommerce',
    features: ['Realidade Aumentada', 'Ambientes', 'Medidas', 'Montagem'],
    icon: Sofa,
    color: 'bg-cyan-600'
  },
  {
    id: 'book-store',
    name: 'Livraria Online',
    description: 'Venda de livros físicos e digitais',
    category: 'ecommerce',
    features: ['Catálogo', 'E-books', 'Recomendações', 'Reviews'],
    icon: Database,
    color: 'bg-green-600'
  },
  {
    id: 'wine-store',
    name: 'Loja de Vinhos',
    description: 'E-commerce especializado em vinhos',
    category: 'ecommerce',
    features: ['Safras', 'Harmonização', 'Degustação', 'Clube do Vinho'],
    icon: Wine,
    color: 'bg-red-600'
  },
  {
    id: 'health-store',
    name: 'Loja de Suplementos',
    description: 'Venda de produtos de saúde',
    category: 'ecommerce',
    features: ['Prescrições', 'Informações Nutricionais', 'Consultoria', 'Assinatura'],
    icon: FlaskConical,
    color: 'bg-green-600'
  },
  {
    id: 'toy-store',
    name: 'Loja de Brinquedos',
    description: 'E-commerce de brinquedos infantis',
    category: 'ecommerce',
    features: ['Faixa Etária', 'Segurança', 'Educativo', 'Lista de Desejos'],
    icon: CheckCircle,
    color: 'bg-orange-600'
  },
  {
    id: 'sports-store',
    name: 'Loja de Esportes',
    description: 'Equipamentos e roupas esportivas',
    category: 'ecommerce',
    features: ['Modalidades', 'Tamanhos', 'Performance', 'Atletas'],
    icon: Rocket,
    color: 'bg-blue-600'
  },
  {
    id: 'pet-store',
    name: 'Pet Shop Online',
    description: 'Produtos para animais de estimação',
    category: 'ecommerce',
    features: ['Espécies', 'Ração', 'Medicamentos', 'Brinquedos'],
    icon: CheckCircle,
    color: 'bg-orange-600'
  },
  {
    id: 'cosmetics-store',
    name: 'Loja de Cosméticos',
    description: 'Produtos de beleza e cuidados',
    category: 'ecommerce',
    features: ['Tons de Pele', 'Ingredientes', 'Tutoriais', 'Virtual Try-On'],
    icon: CheckCircle,
    color: 'bg-pink-600'
  },
  {
    id: 'outdoor-store',
    name: 'Loja de Aventura',
    description: 'Equipamentos para atividades outdoor',
    category: 'ecommerce',
    features: ['Atividades', 'Clima', 'Guias', 'Expedições'],
    icon: Flag,
    color: 'bg-green-600'
  },
  {
    id: 'nft-marketplace',
    name: 'Marketplace de NFTs',
    description: 'Compra e venda de tokens não fungíveis',
    category: 'ecommerce',
    features: ['Blockchain Integration', 'Wallet Connection', 'Royalties', 'Coleções Verificadas'],
    icon: Network,
    color: 'bg-purple-600'
  },
  {
    id: 'virtual-showroom',
    name: 'Showroom Virtual',
    description: 'Experiência de compra em realidade virtual',
    category: 'ecommerce',
    features: ['VR Shopping', 'Avatar Customization', 'Virtual Try-On', 'Social Shopping'],
    icon: Rocket,
    color: 'bg-cyan-600'
  },
  {
    id: 'carbon-neutral-store',
    name: 'Loja Carbono Neutro',
    description: 'E-commerce focado em sustentabilidade',
    category: 'ecommerce',
    features: ['Pegada de Carbono', 'Produtos Sustentáveis', 'Offsetting', 'Certificações Verdes'],
    icon: Flag,
    color: 'bg-green-600'
  },
  {
    id: 'ai-stylist',
    name: 'Stylist com IA',
    description: 'Personal stylist virtual para moda',
    category: 'ecommerce',
    features: ['Análise de Estilo', 'Recomendações IA', 'Mix and Match', 'Tendências Personalizadas'],
    icon: Network,
    color: 'bg-pink-600'
  },
  {
    id: 'social-commerce',
    name: 'Comércio Social',
    description: 'Vendas integradas com redes sociais',
    category: 'ecommerce',
    features: ['Live Shopping', 'Influencer Integration', 'Social Proof', 'Viral Marketing'],
    icon: Share,
    color: 'bg-orange-600'
  },
  {
    id: 'voice-commerce',
    name: 'Comércio por Voz',
    description: 'Compras através de comandos de voz',
    category: 'ecommerce',
    features: ['Voice Assistant', 'Comandos Naturais', 'Lista de Compras', 'Reordenação Inteligente'],
    icon: MessageSquare,
    color: 'bg-blue-600'
  },
  {
    id: 'local-marketplace',
    name: 'Marketplace Local',
    description: 'Comércio hiperlocal por proximidade',
    category: 'ecommerce',
    features: ['Geolocalização', 'Vendedores Locais', 'Entrega Rápida', 'Comunidade Local'],
    icon: Flag,
    color: 'bg-green-600'
  },
  {
    id: 'collaborative-buying',
    name: 'Compras Colaborativas',
    description: 'Poder de compra em grupo',
    category: 'ecommerce',
    features: ['Group Buying', 'Descontos por Volume', 'Cronômetro de Oferta', 'Split Shipping'],
    icon: Share,
    color: 'bg-purple-600'
  },
  {
    id: 'zero-waste-store',
    name: 'Loja Zero Desperdício',
    description: 'Produtos sem embalagem e sustentáveis',
    category: 'ecommerce',
    features: ['Produtos a Granel', 'Embalagens Retornáveis', 'Ciclo de Vida', 'Impacto Ambiental'],
    icon: CheckCircle,
    color: 'bg-green-600'
  },
  {
    id: 'micro-brand-platform',
    name: 'Plataforma de Micro Marcas',
    description: 'Marketplace para pequenas marcas autorais',
    category: 'ecommerce',
    features: ['Criadores Independentes', 'Storytelling', 'Comunidade de Marca', 'Produção Limitada'],
    icon: Crown,
    color: 'bg-indigo-600'
  }
];

const marketingTemplates: ProjectTemplate[] = [
  {
    id: 'email-marketing',
    name: 'Email Marketing',
    description: 'Plataforma de campanhas por email',
    category: 'marketing',
    features: ['Templates', 'Automação', 'Segmentação', 'Analytics'],
    icon: MessageSquare,
    color: 'bg-blue-600'
  },
  {
    id: 'social-media-manager',
    name: 'Gerenciador de Redes Sociais',
    description: 'Gestão unificada de redes sociais',
    category: 'marketing',
    features: ['Agendamento', 'Analytics', 'Múltiplas Contas', 'Relatórios'],
    icon: Share,
    color: 'bg-purple-600'
  },
  {
    id: 'landing-page-builder',
    name: 'Criador de Landing Pages',
    description: 'Construtor de páginas de conversão',
    category: 'marketing',
    features: ['Drag & Drop', 'Templates', 'A/B Testing', 'Conversões'],
    icon: Edit,
    color: 'bg-orange-600'
  },
  {
    id: 'affiliate-platform',
    name: 'Plataforma de Afiliados',
    description: 'Sistema de marketing de afiliação',
    category: 'marketing',
    features: ['Links de Afiliado', 'Comissões', 'Tracking', 'Pagamentos'],
    icon: Share,
    color: 'bg-green-600'
  },
  {
    id: 'influencer-marketplace',
    name: 'Marketplace de Influenciadores',
    description: 'Conecta marcas com influenciadores',
    category: 'marketing',
    features: ['Busca de Influenciadores', 'Campanhas', 'ROI', 'Contratos'],
    icon: Crown,
    color: 'bg-pink-600'
  },
  {
    id: 'seo-tools',
    name: 'Ferramentas SEO',
    description: 'Suite de otimização para buscadores',
    category: 'marketing',
    features: ['Análise de Palavras-chave', 'Backlinks', 'Auditoria', 'Ranking'],
    icon: Network,
    color: 'bg-indigo-600'
  },
  {
    id: 'content-calendar',
    name: 'Calendário de Conteúdo',
    description: 'Planejamento de conteúdo estratégico',
    category: 'marketing',
    features: ['Calendário Visual', 'Colaboração', 'Aprovações', 'Publicação'],
    icon: Flag,
    color: 'bg-cyan-600'
  },
  {
    id: 'customer-survey',
    name: 'Pesquisas com Clientes',
    description: 'Criação e análise de pesquisas',
    category: 'marketing',
    features: ['Criador de Pesquisas', 'Análise de Dados', 'NPS', 'Insights'],
    icon: CheckCircle,
    color: 'bg-red-600'
  },
  {
    id: 'marketing-automation',
    name: 'Automação de Marketing',
    description: 'Fluxos automatizados de marketing',
    category: 'marketing',
    features: ['Workflows', 'Triggers', 'Segmentação', 'Nurturing'],
    icon: Rocket,
    color: 'bg-purple-600'
  },
  {
    id: 'referral-system',
    name: 'Sistema de Indicações',
    description: 'Programa de indicação de clientes',
    category: 'marketing',
    features: ['Códigos de Indicação', 'Recompensas', 'Tracking', 'Gamificação'],
    icon: Share,
    color: 'bg-green-600'
  },
  {
    id: 'loyalty-program',
    name: 'Programa de Fidelidade',
    description: 'Sistema de pontos e recompensas',
    category: 'marketing',
    features: ['Pontos', 'Níveis', 'Recompensas', 'Engajamento'],
    icon: Crown,
    color: 'bg-orange-600'
  },
  {
    id: 'review-management',
    name: 'Gestão de Avaliações',
    description: 'Monitoramento de reviews online',
    category: 'marketing',
    features: ['Coleta de Reviews', 'Resposta Automática', 'Analytics', 'Reputação'],
    icon: CheckCircle,
    color: 'bg-blue-600'
  },
  {
    id: 'chatbot-platform',
    name: 'Plataforma de Chatbot',
    description: 'Criador de chatbots para atendimento',
    category: 'marketing',
    features: ['Fluxos de Conversa', 'IA', 'Integrações', 'Analytics'],
    icon: MessageSquare,
    color: 'bg-purple-600'
  },
  {
    id: 'webinar-platform',
    name: 'Plataforma de Webinars',
    description: 'Transmissão de seminários online',
    category: 'marketing',
    features: ['Streaming', 'Registro', 'Interação', 'Gravações'],
    icon: Smartphone,
    color: 'bg-red-600'
  },
  {
    id: 'popup-builder',
    name: 'Criador de Pop-ups',
    description: 'Pop-ups inteligentes para conversão',
    category: 'marketing',
    features: ['Templates', 'Targeting', 'A/B Testing', 'Exit Intent'],
    icon: Edit,
    color: 'bg-cyan-600'
  },
  {
    id: 'heat-map-analytics',
    name: 'Analytics de Heat Map',
    description: 'Análise de comportamento no site',
    category: 'marketing',
    features: ['Heat Maps', 'Click Tracking', 'Scroll Maps', 'Insights'],
    icon: Network,
    color: 'bg-indigo-600'
  },
  {
    id: 'competitor-analysis',
    name: 'Análise de Concorrentes',
    description: 'Monitoramento da concorrência',
    category: 'marketing',
    features: ['Preços', 'Keywords', 'Ads', 'Social Media'],
    icon: TestTube,
    color: 'bg-orange-600'
  },
  {
    id: 'conversion-funnel',
    name: 'Funil de Conversão',
    description: 'Análise e otimização de funis',
    category: 'marketing',
    features: ['Tracking', 'Etapas', 'Conversões', 'Otimização'],
    icon: GitBranch,
    color: 'bg-green-600'
  },
  {
    id: 'marketing-dashboard',
    name: 'Dashboard de Marketing',
    description: 'Painel unificado de métricas',
    category: 'marketing',
    features: ['KPIs', 'Relatórios', 'Integração', 'Tempo Real'],
    icon: Network,
    color: 'bg-blue-600'
  },
  {
    id: 'brand-monitoring',
    name: 'Monitoramento de Marca',
    description: 'Acompanhamento de menções da marca',
    category: 'marketing',
    features: ['Menções', 'Sentimento', 'Alertas', 'Influenciadores'],
    icon: Flag,
    color: 'bg-purple-600'
  },
  {
    id: 'growth-hacking-suite',
    name: 'Suite de Growth Hacking',
    description: 'Ferramentas para crescimento acelerado',
    category: 'marketing',
    features: ['Viral Loops', 'Product-Led Growth', 'Retention Cohorts', 'Growth Experiments'],
    icon: Rocket,
    color: 'bg-green-600'
  },
  {
    id: 'customer-journey-mapper',
    name: 'Mapeador de Jornada do Cliente',
    description: 'Visualização completa da experiência do cliente',
    category: 'marketing',
    features: ['Touchpoint Mapping', 'Emotion Tracking', 'Pain Point Analysis', 'Optimization Suggestions'],
    icon: GitBranch,
    color: 'bg-blue-600'
  },
  {
    id: 'micro-influencer-platform',
    name: 'Plataforma de Micro Influenciadores',
    description: 'Foco em influenciadores de nicho',
    category: 'marketing',
    features: ['Nano Influencers', 'Engagement Rates', 'Niche Markets', 'Authentic Content'],
    icon: Share,
    color: 'bg-pink-600'
  },
  {
    id: 'marketing-attribution',
    name: 'Atribuição de Marketing',
    description: 'Rastreamento de ROI por canal',
    category: 'marketing',
    features: ['Multi-touch Attribution', 'Channel Performance', 'Customer Lifetime Value', 'Budget Optimization'],
    icon: Network,
    color: 'bg-purple-600'
  },
  {
    id: 'personalization-engine',
    name: 'Motor de Personalização',
    description: 'Experiências personalizadas em tempo real',
    category: 'marketing',
    features: ['Dynamic Content', 'Behavioral Targeting', 'AI Recommendations', 'Real-time Optimization'],
    icon: Rocket,
    color: 'bg-orange-600'
  },
  {
    id: 'community-marketing',
    name: 'Marketing Comunitário',
    description: 'Construção e engajamento de comunidades',
    category: 'marketing',
    features: ['Community Building', 'User-Generated Content', 'Brand Advocates', 'Forum Integration'],
    icon: Share,
    color: 'bg-cyan-600'
  },
  {
    id: 'predictive-analytics',
    name: 'Analytics Preditivo',
    description: 'Previsões baseadas em dados de marketing',
    category: 'marketing',
    features: ['Churn Prediction', 'Sales Forecasting', 'Trend Analysis', 'Risk Assessment'],
    icon: Network,
    color: 'bg-indigo-600'
  },
  {
    id: 'omnichannel-orchestration',
    name: 'Orquestração Omnichannel',
    description: 'Coordenação de campanhas cross-channel',
    category: 'marketing',
    features: ['Channel Coordination', 'Message Consistency', 'Cross-device Tracking', 'Unified Customer View'],
    icon: GitBranch,
    color: 'bg-red-600'
  },
  {
    id: 'marketing-compliance',
    name: 'Compliance de Marketing',
    description: 'Conformidade com regulamentações de dados',
    category: 'marketing',
    features: ['GDPR Compliance', 'Cookie Management', 'Data Consent', 'Privacy Controls'],
    icon: Flag,
    color: 'bg-green-600'
  },
  {
    id: 'neuromarketing-platform',
    name: 'Plataforma de Neuromarketing',
    description: 'Análise de resposta emocional do consumidor',
    category: 'marketing',
    features: ['Emotion Recognition', 'Eye Tracking', 'Biometric Analysis', 'Subconscious Insights'],
    icon: Network,
    color: 'bg-purple-600'
  }
];

const financeTemplates: ProjectTemplate[] = [
  {
    id: 'personal-finance',
    name: 'Finanças Pessoais',
    description: 'Controle completo das finanças pessoais',
    category: 'finance',
    features: ['Orçamento', 'Categorização', 'Metas', 'Relatórios'],
    icon: Database,
    color: 'bg-green-600'
  },
  {
    id: 'investment-platform',
    name: 'Plataforma de Investimentos',
    description: 'Gestão de carteira de investimentos',
    category: 'finance',
    features: ['Portfolio', 'Análise', 'Rebalanceamento', 'Rentabilidade'],
    icon: Crown,
    color: 'bg-purple-600'
  },
  {
    id: 'expense-tracker',
    name: 'Rastreador de Gastos',
    description: 'Acompanhamento detalhado de despesas',
    category: 'finance',
    features: ['Câmera de Recibos', 'Categorias', 'Limite de Gastos', 'Alertas'],
    icon: CheckCircle,
    color: 'bg-red-600'
  },
  {
    id: 'crypto-tracker',
    name: 'Rastreador de Criptomoedas',
    description: 'Acompanhamento de investimentos crypto',
    category: 'finance',
    features: ['Portfolio Crypto', 'Preços em Tempo Real', 'Alertas', 'DeFi'],
    icon: Network,
    color: 'bg-orange-600'
  },
  {
    id: 'lending-platform',
    name: 'Plataforma de Empréstimos',
    description: 'Sistema de empréstimos P2P',
    category: 'finance',
    features: ['Score de Crédito', 'Matching', 'Garantias', 'Pagamentos'],
    icon: Database,
    color: 'bg-blue-600'
  },
  {
    id: 'accounting-software',
    name: 'Software de Contabilidade',
    description: 'Gestão contábil para empresas',
    category: 'finance',
    features: ['Livro Caixa', 'DRE', 'Balanço', 'Impostos'],
    icon: Database,
    color: 'bg-indigo-600'
  },
  {
    id: 'invoice-management',
    name: 'Gestão de Faturas',
    description: 'Criação e controle de cobranças',
    category: 'finance',
    features: ['Templates', 'Recorrência', 'Cobrança', 'Integração Bancária'],
    icon: Edit,
    color: 'bg-cyan-600'
  },
  {
    id: 'budget-planner',
    name: 'Planejador Orçamentário',
    description: 'Planejamento financeiro familiar',
    category: 'finance',
    features: ['Orçamento Mensal', 'Metas', 'Economia', 'Família'],
    icon: Flag,
    color: 'bg-green-600'
  },
  {
    id: 'tax-calculator',
    name: 'Calculadora de Impostos',
    description: 'Cálculo e planejamento tributário',
    category: 'finance',
    features: ['IR', 'Deduções', 'Simulações', 'Calendário Fiscal'],
    icon: Hash,
    color: 'bg-red-600'
  },
  {
    id: 'payment-gateway',
    name: 'Gateway de Pagamento',
    description: 'Processamento de pagamentos online',
    category: 'finance',
    features: ['PIX', 'Cartões', 'Boleto', 'Split de Pagamento'],
    icon: CheckCircle,
    color: 'bg-purple-600'
  },
  {
    id: 'financial-education',
    name: 'Educação Financeira',
    description: 'Plataforma de ensino financeiro',
    category: 'finance',
    features: ['Cursos', 'Simuladores', 'Certificação', 'Comunidade'],
    icon: Rocket,
    color: 'bg-blue-600'
  },
  {
    id: 'credit-score',
    name: 'Score de Crédito',
    description: 'Monitoramento de score e CPF',
    category: 'finance',
    features: ['Consulta Score', 'Negativação', 'Dicas', 'Histórico'],
    icon: CheckCircle,
    color: 'bg-orange-600'
  },
  {
    id: 'retirement-planner',
    name: 'Planejador de Aposentadoria',
    description: 'Planejamento para aposentadoria',
    category: 'finance',
    features: ['Simulações', 'INSS', 'Previdência Privada', 'Projeções'],
    icon: Crown,
    color: 'bg-indigo-600'
  },
  {
    id: 'insurance-platform',
    name: 'Plataforma de Seguros',
    description: 'Comparação e contratação de seguros',
    category: 'finance',
    features: ['Cotação', 'Comparação', 'Sinistros', 'Renovação'],
    icon: CheckCircle,
    color: 'bg-cyan-600'
  },
  {
    id: 'financial-advisor',
    name: 'Consultor Financeiro IA',
    description: 'Assistente virtual para finanças',
    category: 'finance',
    features: ['Análise de Gastos', 'Recomendações', 'Metas', 'Chatbot'],
    icon: Network,
    color: 'bg-purple-600'
  },
  {
    id: 'cashflow-management',
    name: 'Gestão de Fluxo de Caixa',
    description: 'Controle de entradas e saídas',
    category: 'finance',
    features: ['Previsão', 'Cenários', 'Alertas', 'Integração'],
    icon: GitBranch,
    color: 'bg-green-600'
  },
  {
    id: 'pos-system',
    name: 'Sistema PDV',
    description: 'Ponto de venda completo',
    category: 'finance',
    features: ['Vendas', 'Estoque', 'Fiscal', 'Relatórios'],
    icon: Smartphone,
    color: 'bg-blue-600'
  },
  {
    id: 'debt-tracker',
    name: 'Controle de Dívidas',
    description: 'Gestão e quitação de dívidas',
    category: 'finance',
    features: ['Negociação', 'Parcelamento', 'Estratégias', 'Progresso'],
    icon: Flag,
    color: 'bg-red-600'
  },
  {
    id: 'financial-dashboard',
    name: 'Dashboard Financeiro',
    description: 'Visão completa das finanças',
    category: 'finance',
    features: ['KPIs', 'Gráficos', 'Tempo Real', 'Múltiplas Contas'],
    icon: Network,
    color: 'bg-indigo-600'
  },
  {
    id: 'micro-investment',
    name: 'Micro Investimentos',
    description: 'Investimento com valores pequenos',
    category: 'finance',
    features: ['Troco', 'Carteira Diversificada', 'Baixo Risco', 'Educação'],
    icon: Crown,
    color: 'bg-green-600'
  },
  {
    id: 'defi-protocol',
    name: 'Protocolo DeFi',
    description: 'Finanças descentralizadas na blockchain',
    category: 'finance',
    features: ['Smart Contracts', 'Yield Farming', 'Liquidity Pools', 'Governance Token'],
    icon: Network,
    color: 'bg-purple-600'
  },
  {
    id: 'neobank-platform',
    name: 'Neobanco Digital',
    description: 'Banco 100% digital sem agências',
    category: 'finance',
    features: ['Conta Digital', 'Cartão Virtual', 'Open Banking', 'API First'],
    icon: Smartphone,
    color: 'bg-blue-600'
  },
  {
    id: 'algorithmic-trading',
    name: 'Trading Algorítmico',
    description: 'Automação de estratégias de investimento',
    category: 'finance',
    features: ['Bots de Trading', 'Backtesting', 'Risk Management', 'Strategy Builder'],
    icon: Rocket,
    color: 'bg-orange-600'
  },
  {
    id: 'carbon-credits',
    name: 'Mercado de Créditos de Carbono',
    description: 'Compra e venda de créditos ambientais',
    category: 'finance',
    features: ['Certificação Ambiental', 'Marketplace Verde', 'Impact Measurement', 'ESG Reporting'],
    icon: Flag,
    color: 'bg-green-600'
  },
  {
    id: 'financial-wellness',
    name: 'Bem-estar Financeiro',
    description: 'Saúde financeira e redução de stress',
    category: 'finance',
    features: ['Stress Score', 'Mindfulness Finance', 'Goal Psychology', 'Financial Therapy'],
    icon: CheckCircle,
    color: 'bg-green-600'
  },
  {
    id: 'invoice-factoring',
    name: 'Antecipação de Recebíveis',
    description: 'Adiantamento de valores a receber',
    category: 'finance',
    features: ['Due Diligence', 'Risk Assessment', 'Instant Funding', 'Credit Analysis'],
    icon: Database,
    color: 'bg-indigo-600'
  },
  {
    id: 'financial-planning-ai',
    name: 'Planejamento Financeiro IA',
    description: 'Inteligência artificial para finanças pessoais',
    category: 'finance',
    features: ['Predictive Analytics', 'Smart Budgeting', 'Goal Optimization', 'Risk Profiling'],
    icon: Network,
    color: 'bg-purple-600'
  },
  {
    id: 'expense-splitting',
    name: 'Divisão de Gastos',
    description: 'Split de despesas entre grupos',
    category: 'finance',
    features: ['Group Expenses', 'Fair Split Algorithms', 'Payment Requests', 'Debt Settlement'],
    icon: Share,
    color: 'bg-cyan-600'
  },
  {
    id: 'financial-therapy',
    name: 'Terapia Financeira',
    description: 'Apoio psicológico para questões financeiras',
    category: 'finance',
    features: ['Money Mindset', 'Behavioral Finance', 'Emotional Spending', 'Financial Coaching'],
    icon: MessageSquare,
    color: 'bg-green-600'
  },
  {
    id: 'blockchain-payments',
    name: 'Pagamentos Blockchain',
    description: 'Sistema de pagamentos descentralizado',
    category: 'finance',
    features: ['Cross-border Payments', 'Low Fees', 'Smart Contracts', 'Multi-currency'],
    icon: Network,
    color: 'bg-orange-600'
  }
];

const technologyTemplates: ProjectTemplate[] = [
  {
    id: 'api-gateway',
    name: 'Gateway de APIs',
    description: 'Gestão centralizada de APIs',
    category: 'technology',
    features: ['Rate Limiting', 'Autenticação', 'Monitoramento', 'Documentação'],
    icon: Network,
    color: 'bg-blue-600'
  },
  {
    id: 'monitoring-platform',
    name: 'Plataforma de Monitoramento',
    description: 'Monitoramento de infraestrutura e aplicações',
    category: 'technology',
    features: ['Métricas', 'Alertas', 'Logs', 'Dashboards'],
    icon: Network,
    color: 'bg-green-600'
  },
  {
    id: 'ci-cd-pipeline',
    name: 'Pipeline CI/CD',
    description: 'Integração e entrega contínua',
    category: 'technology',
    features: ['Build Automático', 'Testes', 'Deploy', 'Rollback'],
    icon: GitBranch,
    color: 'bg-purple-600'
  },
  {
    id: 'cloud-storage',
    name: 'Armazenamento em Nuvem',
    description: 'Solução de storage escalável',
    category: 'technology',
    features: ['Backup', 'Sincronização', 'Compartilhamento', 'Versionamento'],
    icon: Database,
    color: 'bg-cyan-600'
  },
  {
    id: 'containerization',
    name: 'Plataforma de Containers',
    description: 'Orquestração de containers',
    category: 'technology',
    features: ['Docker', 'Kubernetes', 'Auto-scaling', 'Load Balancing'],
    icon: Network,
    color: 'bg-orange-600'
  },
  {
    id: 'database-manager',
    name: 'Gerenciador de Banco de Dados',
    description: 'Interface para administração de DBs',
    category: 'technology',
    features: ['Query Builder', 'Backup', 'Performance', 'Segurança'],
    icon: Database,
    color: 'bg-indigo-600'
  },
  {
    id: 'log-analyzer',
    name: 'Analisador de Logs',
    description: 'Análise inteligente de logs de sistema',
    category: 'technology',
    features: ['Parsing', 'Busca', 'Alertas', 'Visualização'],
    icon: TestTube,
    color: 'bg-red-600'
  },
  {
    id: 'code-quality',
    name: 'Análise de Qualidade de Código',
    description: 'Ferramentas para qualidade de software',
    category: 'technology',
    features: ['Code Review', 'Métricas', 'Vulnerabilidades', 'Best Practices'],
    icon: CheckCircle,
    color: 'bg-green-600'
  },
  {
    id: 'microservices',
    name: 'Arquitetura de Microserviços',
    description: 'Framework para microserviços',
    category: 'technology',
    features: ['Service Mesh', 'Discovery', 'Circuit Breaker', 'Tracing'],
    icon: Network,
    color: 'bg-purple-600'
  },
  {
    id: 'serverless-platform',
    name: 'Plataforma Serverless',
    description: 'Execução de funções sem servidor',
    category: 'technology',
    features: ['Functions', 'Event-driven', 'Auto-scaling', 'Pay-per-use'],
    icon: Rocket,
    color: 'bg-cyan-600'
  },
  {
    id: 'security-scanner',
    name: 'Scanner de Segurança',
    description: 'Análise de vulnerabilidades',
    category: 'technology',
    features: ['Scan Automático', 'Vulnerabilidades', 'Compliance', 'Relatórios'],
    icon: Flag,
    color: 'bg-red-600'
  },
  {
    id: 'backup-solution',
    name: 'Solução de Backup',
    description: 'Sistema de backup automatizado',
    category: 'technology',
    features: ['Incremental', 'Agendamento', 'Recuperação', 'Compressão'],
    icon: Database,
    color: 'bg-blue-600'
  },
  {
    id: 'load-balancer',
    name: 'Balanceador de Carga',
    description: 'Distribuição de tráfego inteligente',
    category: 'technology',
    features: ['Health Check', 'SSL Termination', 'Sticky Sessions', 'Metrics'],
    icon: Network,
    color: 'bg-orange-600'
  },
  {
    id: 'cache-manager',
    name: 'Gerenciador de Cache',
    description: 'Sistema de cache distribuído',
    category: 'technology',
    features: ['Redis', 'Memcached', 'TTL', 'Invalidação'],
    icon: Rocket,
    color: 'bg-green-600'
  },
  {
    id: 'message-queue',
    name: 'Fila de Mensagens',
    description: 'Sistema de mensageria assíncrona',
    category: 'technology',
    features: ['Queue', 'Topics', 'Dead Letter', 'Retry Logic'],
    icon: GitBranch,
    color: 'bg-purple-600'
  },
  {
    id: 'cdn-platform',
    name: 'Rede de Distribuição de Conteúdo',
    description: 'CDN para otimização de entrega',
    category: 'technology',
    features: ['Edge Locations', 'Compression', 'Caching', 'Analytics'],
    icon: Network,
    color: 'bg-cyan-600'
  },
  {
    id: 'testing-framework',
    name: 'Framework de Testes',
    description: 'Automação de testes de software',
    category: 'technology',
    features: ['Unit Tests', 'Integration', 'E2E', 'Coverage'],
    icon: TestTube,
    color: 'bg-indigo-600'
  },
  {
    id: 'performance-monitor',
    name: 'Monitor de Performance',
    description: 'APM para aplicações',
    category: 'technology',
    features: ['Response Time', 'Throughput', 'Error Rate', 'Profiling'],
    icon: Rocket,
    color: 'bg-red-600'
  },
  {
    id: 'version-control',
    name: 'Controle de Versão',
    description: 'Sistema de versionamento de código',
    category: 'technology',
    features: ['Git', 'Branching', 'Merge Requests', 'History'],
    icon: GitBranch,
    color: 'bg-green-600'
  },
  {
    id: 'documentation-platform',
    name: 'Plataforma de Documentação',
    description: 'Geração automática de documentação',
    category: 'technology',
    features: ['Auto-generation', 'Search', 'Versioning', 'Collaboration'],
    icon: Database,
    color: 'bg-blue-600'
  },
  {
    id: 'ml-ops-platform',
    name: 'Plataforma MLOps',
    description: 'Operações de Machine Learning em produção',
    category: 'technology',
    features: ['Model Deployment', 'A/B Testing', 'Model Monitoring', 'Feature Store'],
    icon: Network,
    color: 'bg-purple-600'
  },
  {
    id: 'edge-computing',
    name: 'Computação na Borda',
    description: 'Processamento distribuído próximo aos usuários',
    category: 'technology',
    features: ['Edge Nodes', 'Low Latency', 'Local Processing', 'Sync Strategies'],
    icon: Rocket,
    color: 'bg-orange-600'
  },
  {
    id: 'quantum-simulator',
    name: 'Simulador Quântico',
    description: 'Desenvolvimento de algoritmos quânticos',
    category: 'technology',
    features: ['Quantum Circuits', 'Qubit Simulation', 'Algorithm Testing', 'Quantum Gates'],
    icon: Network,
    color: 'bg-cyan-600'
  },
  {
    id: 'iot-management',
    name: 'Gestão de IoT',
    description: 'Plataforma para dispositivos conectados',
    category: 'technology',
    features: ['Device Management', 'Data Collection', 'Remote Control', 'Firmware Updates'],
    icon: Smartphone,
    color: 'bg-green-600'
  },
  {
    id: 'digital-twin',
    name: 'Gêmeo Digital',
    description: 'Simulação digital de sistemas físicos',
    category: 'technology',
    features: ['3D Modeling', 'Real-time Sync', 'Predictive Analytics', 'Simulation Engine'],
    icon: Network,
    color: 'bg-blue-600'
  },
  {
    id: 'blockchain-validator',
    name: 'Validador Blockchain',
    description: 'Nó validador para redes blockchain',
    category: 'technology',
    features: ['Consensus Participation', 'Transaction Validation', 'Staking Rewards', 'Network Security'],
    icon: Flag,
    color: 'bg-purple-600'
  },
  {
    id: 'data-lake-platform',
    name: 'Plataforma Data Lake',
    description: 'Armazenamento e processamento de big data',
    category: 'technology',
    features: ['Schema-on-Read', 'Data Catalog', 'ETL Pipelines', 'Analytics Engine'],
    icon: Database,
    color: 'bg-indigo-600'
  },
  {
    id: 'ai-model-marketplace',
    name: 'Marketplace de Modelos IA',
    description: 'Compra e venda de modelos de IA pré-treinados',
    category: 'technology',
    features: ['Model Repository', 'Performance Metrics', 'Easy Integration', 'Version Control'],
    icon: Crown,
    color: 'bg-orange-600'
  },
  {
    id: 'zero-trust-security',
    name: 'Segurança Zero Trust',
    description: 'Arquitetura de segurança baseada em confiança zero',
    category: 'technology',
    features: ['Identity Verification', 'Device Authentication', 'Network Segmentation', 'Continuous Monitoring'],
    icon: Flag,
    color: 'bg-red-600'
  },
  {
    id: 'chaos-engineering',
    name: 'Engenharia do Caos',
    description: 'Testes de resiliência em sistemas distribuídos',
    category: 'technology',
    features: ['Fault Injection', 'Resilience Testing', 'System Monitoring', 'Recovery Validation'],
    icon: TestTube,
    color: 'bg-red-600'
  }
];

const productivityTemplates: ProjectTemplate[] = [
  {
    id: 'focus-timer',
    name: 'Timer de Foco',
    description: 'Pomodoro technique e gestão de tempo',
    category: 'productivity',
    features: ['Técnica Pomodoro', 'Bloqueio de Distrações', 'Estatísticas de Foco', 'Metas Diárias'],
    icon: Rocket,
    color: 'bg-red-600'
  },
  {
    id: 'habit-tracker',
    name: 'Rastreador de Hábitos',
    description: 'Construção e monitoramento de hábitos',
    category: 'productivity',
    features: ['Streaks', 'Lembretes Inteligentes', 'Análise de Padrões', 'Gamificação'],
    icon: CheckCircle,
    color: 'bg-green-600'
  },
  {
    id: 'mind-mapping',
    name: 'Mapas Mentais',
    description: 'Ferramenta colaborativa para brainstorming',
    category: 'productivity',
    features: ['Colaboração em Tempo Real', 'Templates', 'Exportação', 'Integração com Tarefas'],
    icon: GitBranch,
    color: 'bg-purple-600'
  },
  {
    id: 'digital-whiteboard',
    name: 'Quadro Digital',
    description: 'Espaço infinito para criatividade',
    category: 'productivity',
    features: ['Canvas Infinito', 'Ferramentas de Desenho', 'Colaboração', 'Templates Visuais'],
    icon: Edit,
    color: 'bg-blue-600'
  },
  {
    id: 'meeting-scheduler',
    name: 'Agendador de Reuniões',
    description: 'Coordenação inteligente de horários',
    category: 'productivity',
    features: ['Disponibilidade Automática', 'Fusos Horários', 'Integração Calendário', 'Salas Virtuais'],
    icon: Database,
    color: 'bg-cyan-600'
  },
  {
    id: 'password-manager',
    name: 'Gerenciador de Senhas',
    description: 'Segurança e conveniência para credenciais',
    category: 'productivity',
    features: ['Criptografia End-to-End', 'Gerador de Senhas', 'Autofill', 'Auditoria de Segurança'],
    icon: Flag,
    color: 'bg-red-600'
  },
  {
    id: 'voice-notes',
    name: 'Notas por Voz',
    description: 'Transcrição automática de áudio para texto',
    category: 'productivity',
    features: ['Transcrição IA', 'Múltiplos Idiomas', 'Busca por Conteúdo', 'Organização Automática'],
    icon: MessageSquare,
    color: 'bg-orange-600'
  },
  {
    id: 'goal-tracker',
    name: 'Rastreador de Metas',
    description: 'Acompanhamento de objetivos pessoais e profissionais',
    category: 'productivity',
    features: ['SMART Goals', 'Marcos Intermediários', 'Progresso Visual', 'Accountability Partners'],
    icon: Crown,
    color: 'bg-indigo-600'
  },
  {
    id: 'digital-detox',
    name: 'Detox Digital',
    description: 'Controle de uso de dispositivos e apps',
    category: 'productivity',
    features: ['Bloqueio de Apps', 'Tempo de Tela', 'Pausas Programadas', 'Relatórios de Uso'],
    icon: Smartphone,
    color: 'bg-green-600'
  },
  {
    id: 'workflow-optimizer',
    name: 'Otimizador de Workflow',
    description: 'Análise e melhoria de processos pessoais',
    category: 'productivity',
    features: ['Mapeamento de Processos', 'Identificação de Gargalos', 'Automação de Tarefas', 'Métricas de Eficiência'],
    icon: Network,
    color: 'bg-purple-600'
  }
];

const entertainmentTemplates: ProjectTemplate[] = [
  {
    id: 'trivia-game',
    name: 'Jogo de Trivia',
    description: 'Quiz multiplayer em tempo real',
    category: 'entertainment',
    features: ['Multiplayer Online', 'Categorias Diversas', 'Ranking Global', 'Criação de Quiz'],
    icon: Rocket,
    color: 'bg-purple-600'
  },
  {
    id: 'virtual-karaoke',
    name: 'Karaokê Virtual',
    description: 'Cante com amigos online',
    category: 'entertainment',
    features: ['Biblioteca Musical', 'Salas Privadas', 'Gravação', 'Duetos Virtuais'],
    icon: MessageSquare,
    color: 'bg-pink-600'
  },
  {
    id: 'story-generator',
    name: 'Gerador de Histórias',
    description: 'IA para criação colaborativa de narrativas',
    category: 'entertainment',
    features: ['IA Criativa', 'Histórias Colaborativas', 'Múltiplos Gêneros', 'Ilustrações Automáticas'],
    icon: Edit,
    color: 'bg-orange-600'
  },
  {
    id: 'virtual-museum',
    name: 'Museu Virtual',
    description: 'Experiências culturais imersivas',
    category: 'entertainment',
    features: ['Tours 3D', 'Realidade Aumentada', 'Curadoria Digital', 'Experiências Interativas'],
    icon: Crown,
    color: 'bg-blue-600'
  },
  {
    id: 'escape-room-online',
    name: 'Escape Room Online',
    description: 'Quebra-cabeças em equipe virtual',
    category: 'entertainment',
    features: ['Salas Temáticas', 'Colaboração em Tempo Real', 'Pistas Dinâmicas', 'Diferentes Dificuldades'],
    icon: Flag,
    color: 'bg-red-600'
  },
  {
    id: 'virtual-concert',
    name: 'Concerto Virtual',
    description: 'Experiências musicais imersivas',
    category: 'entertainment',
    features: ['Streaming 3D', 'Interação com Artistas', 'Merchandise Virtual', 'Social Viewing'],
    icon: Smartphone,
    color: 'bg-cyan-600'
  },
  {
    id: 'meme-generator',
    name: 'Gerador de Memes',
    description: 'Criação viral de conteúdo humorístico',
    category: 'entertainment',
    features: ['Templates Populares', 'IA de Humor', 'Sharing Social', 'Trending Topics'],
    icon: Share,
    color: 'bg-green-600'
  },
  {
    id: 'virtual-board-games',
    name: 'Jogos de Tabuleiro Virtual',
    description: 'Clássicos modernizados para o digital',
    category: 'entertainment',
    features: ['Múltiplos Jogos', 'Vídeo Chat Integrado', 'Regras Automáticas', 'Torneios Online'],
    icon: CheckCircle,
    color: 'bg-indigo-600'
  },
  {
    id: 'podcast-creation',
    name: 'Criação de Podcast',
    description: 'Ferramenta completa para podcasters',
    category: 'entertainment',
    features: ['Gravação Multi-track', 'Edição Automática', 'Distribuição Automática', 'Analytics'],
    icon: MessageSquare,
    color: 'bg-purple-600'
  },
  {
    id: 'interactive-fiction',
    name: 'Ficção Interativa',
    description: 'Histórias onde o leitor escolhe o rumo',
    category: 'entertainment',
    features: ['Narrativa Ramificada', 'Múltiplos Finais', 'Elementos RPG', 'Criação de Histórias'],
    icon: Edit,
    color: 'bg-orange-600'
  }
];

export const templateCategories: TemplateCategory[] = [
  {
    id: 'health',
    name: 'Saúde e Bem-estar',
    description: 'Soluções para cuidados com a saúde',
    icon: CheckCircle,
    color: 'bg-green-600',
    templates: healthTemplates
  },
  {
    id: 'business',
    name: 'Negócios',
    description: 'Ferramentas para gestão empresarial',
    icon: Database,
    color: 'bg-blue-600',
    templates: businessTemplates
  },
  {
    id: 'delivery',
    name: 'Delivery e Logística',
    description: 'Plataformas de entrega e distribuição',
    icon: Rocket,
    color: 'bg-orange-600',
    templates: deliveryTemplates
  },
  {
    id: 'education',
    name: 'Educação',
    description: 'Plataformas de ensino e aprendizagem',
    icon: Rocket,
    color: 'bg-purple-600',
    templates: educationTemplates
  },
  {
    id: 'social',
    name: 'Redes Sociais',
    description: 'Plataformas de interação social',
    icon: MessageSquare,
    color: 'bg-pink-600',
    templates: socialMediaTemplates
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Lojas virtuais e marketplaces',
    icon: Database,
    color: 'bg-green-600',
    templates: ecommerceTemplates
  },
  {
    id: 'marketing',
    name: 'Marketing Digital',
    description: 'Ferramentas de marketing e automação',
    icon: Share,
    color: 'bg-cyan-600',
    templates: marketingTemplates
  },
  {
    id: 'finance',
    name: 'Finanças',
    description: 'Soluções financeiras e fintechs',
    icon: Crown,
    color: 'bg-green-600',
    templates: financeTemplates
  },
  {
    id: 'technology',
    name: 'Tecnologia',
    description: 'Ferramentas para desenvolvedores',
    icon: Network,
    color: 'bg-indigo-600',
    templates: technologyTemplates
  },
  {
    id: 'productivity',
    name: 'Produtividade',
    description: 'Ferramentas para otimizar seu tempo',
    icon: Rocket,
    color: 'bg-blue-600',
    templates: productivityTemplates
  },
  {
    id: 'entertainment',
    name: 'Entretenimento',
    description: 'Diversão e conteúdo digital',
    icon: Smartphone,
    color: 'bg-purple-600',
    templates: entertainmentTemplates
  }
];

export const getAllTemplates = (): ProjectTemplate[] => {
  return templateCategories.flatMap(category => category.templates);
};

export const getTemplateById = (id: string): ProjectTemplate | undefined => {
  return getAllTemplates().find(template => template.id === id);
};

export const getTemplatesByCategory = (categoryId: string): ProjectTemplate[] => {
  const category = templateCategories.find(cat => cat.id === categoryId);
  return category ? category.templates : [];
};

export const getCategoryById = (id: string): TemplateCategory | undefined => {
  return templateCategories.find(category => category.id === id);
};

export const getTotalTemplatesCount = (): number => {
  return getAllTemplates().length;
};

export const projectTemplates = getAllTemplates();

export const categories = [
  { id: 'all', name: 'Todos', icon: Database },
  ...templateCategories
];

export const searchTemplates = (searchTerm: string): ProjectTemplate[] => {
  const allTemplates = getAllTemplates();
  return allTemplates.filter(template => 
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
  );
};
