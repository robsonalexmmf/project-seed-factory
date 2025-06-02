import {
  Activity, Archive, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Award, Baby, Badge, Bell, Bold, Book, Bug, Building,
  Check, Circle, Cloud, Code, Container, Download, Eye, Feather, File, Film, Gift, Grid, Heart, Home, Image,
  Inbox, Key, List, Lock, Map, Medal, Moon, Mountain, Package, Pause, Phone, Play, Plus, Power, Repeat, Save,
  Search, Send, Shield, Star, Store, Sun, Tag, Target, Trash, Trophy, Upload, Video, Wallet, Wind, Clock,
  Calendar, Brain, User, TrendingUp, HardHat, Users, Leaf, Calculator, DollarSign, Palette, Layers, Globe,
  Camera, FileText, Mic, Music, Scissors, Sparkles, Car, AlertTriangle, Handshake, Scale
} from 'lucide-react';

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: any;
  features: string[];
  stack: string[];
}

// SaaS para Saúde e Bem-Estar
export const healthTemplates: ProjectTemplate[] = [
  {
    id: 'health-appointment-system',
    name: 'Sistema de Agendamento para Psicólogos',
    description: 'Plataforma completa para agendamento de consultas psicológicas com lembretes automáticos',
    category: 'health',
    icon: Heart,
    features: ['Agendamento online', 'Lembretes SMS/Email', 'Prontuário digital', 'Videoconferência'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'physiotherapy-management',
    name: 'Gestão para Clínicas de Fisioterapia',
    description: 'Sistema completo para gestão de pacientes e sessões de fisioterapia',
    category: 'health',
    icon: Activity,
    features: ['Controle de pacientes', 'Planos de tratamento', 'Evolução médica', 'Faturamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'vaccine-control-saas',
    name: 'Controle de Vacinas para Clínicas',
    description: 'Sistema para controle e monitoramento de vacinação em clínicas',
    category: 'health',
    icon: Shield,
    features: ['Cartão de vacina digital', 'Lembretes de doses', 'Relatórios', 'Estoque de vacinas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'dental-reminders',
    name: 'Lembretes para Dentistas',
    description: 'Sistema de lembretes de consultas e tratamentos dentários',
    category: 'health',
    icon: Bell,
    features: ['Agendamento inteligente', 'Lembretes automáticos', 'Histórico dental', 'Orçamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'nutrition-records',
    name: 'Prontuário Eletrônico para Nutricionistas',
    description: 'Plataforma para gestão de pacientes e planos alimentares',
    category: 'health',
    icon: File,
    features: ['Avaliação nutricional', 'Planos alimentares', 'Acompanhamento', 'Receitas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'patient-tracking-physio',
    name: 'Acompanhamento de Pacientes - Fisioterapia',
    description: 'SaaS para fisioterapeutas acompanharem evolução dos pacientes',
    category: 'health',
    icon: Target,
    features: ['Exercícios prescritos', 'Evolução do tratamento', 'Relatórios de progresso', 'Comunicação'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'holistic-therapy-management',
    name: 'Gestão para Terapeutas Holísticos',
    description: 'Painel completo para gestão de atendimentos holísticos',
    category: 'health',
    icon: Sun,
    features: ['Agendamento', 'Fichas de anamnese', 'Terapias aplicadas', 'Pagamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'occupational-therapy-booking',
    name: 'Marcação para Terapeutas Ocupacionais',
    description: 'Plataforma de marcação de sessões de terapia ocupacional',
    category: 'health',
    icon: Calendar,
    features: ['Sessões personalizadas', 'Relatórios de desenvolvimento', 'Comunicação com famílias'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'digital-anamnesis',
    name: 'Anamnese Digital para Consultórios',
    description: 'App de anamnese digital para consultórios médicos',
    category: 'health',
    icon: File,
    features: ['Formulários dinâmicos', 'Assinatura digital', 'Histórico médico', 'Integração LGPD'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'health-insurance-management',
    name: 'Gestão de Planos de Saúde',
    description: 'Sistema para gestão de planos e convênios médicos',
    category: 'health',
    icon: Shield,
    features: ['Autorização de procedimentos', 'Controle de carências', 'Rede credenciada'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'aesthetic-treatments',
    name: 'Controle de Tratamentos Estéticos',
    description: 'Aplicativo para controle de tratamentos estéticos',
    category: 'health',
    icon: Star,
    features: ['Protocolos de tratamento', 'Antes e depois', 'Agendamento', 'Produtos utilizados'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'podiatry-clinic-system',
    name: 'Sistema para Clínicas de Podologia',
    description: 'Sistema especializado para clínicas de podologia',
    category: 'health',
    icon: Activity,
    features: ['Diagnósticos específicos', 'Tratamentos podológicos', 'Imagens dos pés'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'telemedicine-saas',
    name: 'Telemedicina com Chat Seguro',
    description: 'SaaS de telemedicina com chat seguro e criptografado',
    category: 'health',
    icon: Video,
    features: ['Consultas por vídeo', 'Chat criptografado', 'Prescrições digitais', 'Pagamento online'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'personal-trainer-subscription',
    name: 'Assinatura de Treinos Personalizados',
    description: 'Plataforma de assinatura para treinos de personal trainer',
    category: 'health',
    icon: Trophy,
    features: ['Treinos personalizados', 'Acompanhamento de evolução', 'Vídeos explicativos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'ai-nutrition-plans',
    name: 'Planos Alimentares com IA',
    description: 'App para nutricionistas criarem planos alimentares com IA',
    category: 'health',
    icon: Brain,
    features: ['IA para sugestões', 'Cálculos nutricionais', 'Lista de compras', 'Receitas saudáveis'],
    stack: ['React', 'Supabase', 'OpenAI', 'Tailwind CSS']
  },
  {
    id: 'mental-health-tracking',
    name: 'Acompanhamento de Saúde Mental',
    description: 'Plataforma para acompanhar saúde mental de pacientes',
    category: 'health',
    icon: Heart,
    features: ['Questionários de humor', 'Gráficos de evolução', 'Alertas de crise', 'Meditação guiada'],
    stack: ['React', 'Supabase', 'Chart.js', 'Tailwind CSS']
  },
  {
    id: 'elderly-care-management',
    name: 'Gestão de Cuidados para Idosos',
    description: 'Sistema para gestão de cuidados e medicamentos para idosos',
    category: 'health',
    icon: User,
    features: ['Controle de medicamentos', 'Agendamento de cuidadores', 'Emergências', 'Familiares'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'rehabilitation-tracking',
    name: 'Acompanhamento de Reabilitação',
    description: 'Sistema para acompanhar progresso de reabilitação física',
    category: 'health',
    icon: TrendingUp,
    features: ['Exercícios de reabilitação', 'Medição de progresso', 'Relatórios médicos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'pharmacy-management',
    name: 'Gestão de Farmácias',
    description: 'Sistema completo para gestão de farmácias e medicamentos',
    category: 'health',
    icon: Package,
    features: ['Controle de estoque', 'Vendas', 'Receitas médicas', 'Validade de medicamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'medical-laboratory-saas',
    name: 'Gestão de Laboratórios Médicos',
    description: 'Sistema para gestão de exames e laboratórios médicos',
    category: 'health',
    icon: Search,
    features: ['Agendamento de exames', 'Resultados online', 'Faturamento', 'Controle de qualidade'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  // Adicionar mais 80 templates de saúde
  {
    id: 'veterinary-clinic-system',
    name: 'Sistema para Clínicas Veterinárias',
    description: 'Gestão completa de clínicas veterinárias',
    category: 'health',
    icon: Heart,
    features: ['Prontuário animal', 'Vacinas', 'Cirurgias', 'Agendamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'home-care-management',
    name: 'Gestão de Home Care',
    description: 'Sistema para empresas de atendimento domiciliar',
    category: 'health',
    icon: Home,
    features: ['Escala de profissionais', 'Medicamentos', 'Relatórios', 'Familiares'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'speech-therapy-tracking',
    name: 'Acompanhamento de Fonoaudiologia',
    description: 'Sistema para fonoaudiólogos acompanharem pacientes',
    category: 'health',
    icon: Mic,
    features: ['Exercícios de fala', 'Evolução', 'Relatórios', 'Materiais'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'acupuncture-scheduling',
    name: 'Agendamento para Acupunturistas',
    description: 'Sistema de agendamento e controle para acupunturistas',
    category: 'health',
    icon: Target,
    features: ['Pontos de acupuntura', 'Sessões', 'Evolução', 'Meridiano'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'medical-record-digitization',
    name: 'Digitalização de Prontuários',
    description: 'Plataforma para digitalizar prontuários médicos',
    category: 'health',
    icon: File,
    features: ['Digitalização', 'OCR', 'Busca inteligente', 'Backup seguro'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  }
];

// SaaS para Negócios e Profissionais Liberais
export const businessTemplates: ProjectTemplate[] = [
  {
    id: 'real-estate-crm',
    name: 'CRM para Corretores de Imóveis',
    description: 'Sistema completo de CRM para corretores de imóveis',
    category: 'business',
    icon: Building,
    features: ['Gestão de leads', 'Portfólio de imóveis', 'Agendamento de visitas', 'Comissões'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'architect-project-management',
    name: 'Gestão de Projetos para Arquitetos',
    description: 'Plataforma de gestão de projetos arquitetônicos',
    category: 'business',
    icon: Building,
    features: ['Cronograma de obras', 'Orçamentos', 'Plantas e projetos', 'Cliente portal'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'construction-timeline',
    name: 'Painel de Obras com Timelines',
    description: 'Painel para acompanhamento de obras com timelines e tarefas',
    category: 'business',
    icon: Clock,
    features: ['Timeline de obra', 'Gestão de tarefas', 'Fotos de progresso', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'lawyer-contract-control',
    name: 'Controle de Contratos para Advogados',
    description: 'SaaS para controle de contratos jurídicos',
    category: 'business',
    icon: File,
    features: ['Gestão de contratos', 'Prazos processuais', 'Cliente dashboard', 'Documentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'locksmith-budget-panel',
    name: 'Orçamentos para Serralheiros',
    description: 'Painel de orçamento e clientes para serralheiros',
    category: 'business',
    icon: Key,
    features: ['Orçamentos rápidos', 'Catálogo de serviços', 'Agendamento', 'Histórico de clientes'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'financial-consultant-proposals',
    name: 'Propostas para Consultores Financeiros',
    description: 'Plataforma de envio de propostas para consultores financeiros',
    category: 'business',
    icon: TrendingUp,
    features: ['Criação de propostas', 'Assinatura digital', 'Acompanhamento', 'Templates'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'career-coach-scheduling',
    name: 'Agendamento para Coach de Carreira',
    description: 'Sistema de agendamento para coaches de carreira',
    category: 'business',
    icon: Target,
    features: ['Sessões de coaching', 'Planos de desenvolvimento', 'Metas', 'Progresso'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'online-legal-service',
    name: 'Atendimento Jurídico Online',
    description: 'Plataforma de atendimento jurídico online',
    category: 'business',
    icon: Shield,
    features: ['Consultas online', 'Documentos jurídicos', 'Chat seguro', 'Pagamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'translator-client-management',
    name: 'Gestão de Clientes para Tradutores',
    description: 'Gestão de clientes para tradutores freelancers',
    category: 'business',
    icon: Globe,
    features: ['Projetos de tradução', 'Orçamentos', 'Prazos', 'Faturamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'insurance-visit-control',
    name: 'Controle de Visitas - Seguros',
    description: 'App de controle de visitas para corretores de seguros',
    category: 'business',
    icon: Car,
    features: ['Agendamento de visitas', 'Propostas de seguro', 'Follow-up', 'Comissões'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  // Adicionar mais 90 templates de business
  {
    id: 'legal-case-management',
    name: 'Gestão de Processos Jurídicos',
    description: 'Sistema completo para escritórios de advocacia',
    category: 'business',
    icon: Scale,
    features: ['Controle de processos', 'Prazos', 'Audiências', 'Honorários'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'notary-office-system',
    name: 'Sistema para Cartórios',
    description: 'Gestão completa para cartórios e tabelionatos',
    category: 'business',
    icon: FileText,
    features: ['Escrituras', 'Certidões', 'Autenticações', 'Protocolo'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'court-process-tracking',
    name: 'Acompanhamento de Processos Judiciais',
    description: 'Sistema para acompanhar processos em tribunais',
    category: 'business',
    icon: Search,
    features: ['Busca por número', 'Movimentações', 'Alertas', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'lawyer-billing-system',
    name: 'Faturamento para Advogados',
    description: 'Sistema de cobrança e faturamento jurídico',
    category: 'business',
    icon: DollarSign,
    features: ['Honorários', 'Despesas', 'Contratos', 'Recibos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'legal-document-generator',
    name: 'Gerador de Documentos Jurídicos',
    description: 'Plataforma para gerar documentos jurídicos automaticamente',
    category: 'business',
    icon: FileText,
    features: ['Templates legais', 'Personalização', 'Assinatura digital', 'Banco de dados'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  }
];

// SaaS para Delivery e Logística
export const deliveryTemplates: ProjectTemplate[] = [
  {
    id: 'restaurant-delivery-platform',
    name: 'Plataforma de Delivery para Restaurantes',
    description: 'Sistema completo de delivery com cardápio digital',
    category: 'delivery',
    icon: Store,
    features: ['Cardápio online', 'Pedidos', 'Entregadores', 'Pagamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'pharmacy-delivery-saas',
    name: 'Delivery para Farmácias',
    description: 'Sistema de delivery especializado em farmácias',
    category: 'delivery',
    icon: Package,
    features: ['Receitas médicas', 'Medicamentos controlados', 'Entrega rápida', 'Convênios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'grocery-delivery-system',
    name: 'Delivery de Supermercados',
    description: 'Plataforma para delivery de produtos de supermercado',
    category: 'delivery',
    icon: Store,
    features: ['Catálogo de produtos', 'Lista de compras', 'Horário de entrega', 'Promoções'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'bakery-delivery-platform',
    name: 'Delivery para Padarias',
    description: 'Sistema de delivery para padarias e confeitarias',
    category: 'delivery',
    icon: Gift,
    features: ['Produtos frescos', 'Encomendas', 'Bolos personalizados', 'Agenda de entregas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'flower-delivery-saas',
    name: 'Delivery de Flores e Presentes',
    description: 'Plataforma especializada em entrega de flores',
    category: 'delivery',
    icon: Heart,
    features: ['Arranjos florais', 'Ocasiões especiais', 'Agendamento', 'Cartões'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'pet-supply-delivery',
    name: 'Delivery de Pet Shop',
    description: 'Sistema de delivery para produtos pet',
    category: 'delivery',
    icon: Heart,
    features: ['Ração e medicamentos', 'Brinquedos', 'Serviços pet', 'Assinatura mensal'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'laundry-pickup-delivery',
    name: 'Coleta e Entrega de Lavanderia',
    description: 'Sistema para lavanderias com coleta e entrega',
    category: 'delivery',
    icon: Repeat,
    features: ['Agendamento de coleta', 'Tipos de peça', 'Prazo de entrega', 'Rastreamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'gas-delivery-system',
    name: 'Delivery de Gás de Cozinha',
    description: 'Sistema para delivery de botijões de gás',
    category: 'delivery',
    icon: Circle,
    features: ['Tipos de botijão', 'Emergência', 'Agendamento', 'Pagamento na entrega'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'water-delivery-saas',
    name: 'Delivery de Água Mineral',
    description: 'Plataforma para entrega de água mineral',
    category: 'delivery',
    icon: Package,
    features: ['Galões e garrafas', 'Assinatura', 'Troca de vasilhame', 'Rota otimizada'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'auto-parts-delivery',
    name: 'Delivery de Peças Automotivas',
    description: 'Sistema para entrega de peças de carro',
    category: 'delivery',
    icon: Car,
    features: ['Catálogo de peças', 'Compatibilidade', 'Entrega expressa', 'Instalação'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  }
];

// SaaS para Educação
export const educationTemplates: ProjectTemplate[] = [
  {
    id: 'online-course-platform',
    name: 'Plataforma de Cursos Online',
    description: 'Sistema completo para criação e venda de cursos',
    category: 'education',
    icon: Book,
    features: ['Vídeo aulas', 'Exercícios', 'Certificados', 'Pagamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'tutoring-booking-system',
    name: 'Agendamento de Aulas Particulares',
    description: 'Plataforma para agendar aulas particulares',
    category: 'education',
    icon: User,
    features: ['Professores', 'Disciplinas', 'Horários', 'Avaliações'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'school-management-system',
    name: 'Gestão Escolar Completa',
    description: 'Sistema de gestão para escolas e colégios',
    category: 'education',
    icon: Building,
    features: ['Alunos', 'Professores', 'Notas', 'Frequência', 'Boletim'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'language-learning-saas',
    name: 'Plataforma de Ensino de Idiomas',
    description: 'Sistema para escolas de idiomas',
    category: 'education',
    icon: Globe,
    features: ['Níveis de idioma', 'Conversação', 'Exercícios', 'Progresso'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'music-lesson-booking',
    name: 'Agendamento de Aulas de Música',
    description: 'Sistema para professores de música',
    category: 'education',
    icon: Music,
    features: ['Instrumentos', 'Método pedagógico', 'Apresentações', 'Repertório'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'kindergarten-management',
    name: 'Gestão de Creches e Berçários',
    description: 'Sistema completo para creches',
    category: 'education',
    icon: Baby,
    features: ['Crianças', 'Alimentação', 'Sono', 'Atividades', 'Comunicação com pais'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'training-center-saas',
    name: 'Centro de Treinamentos Corporativos',
    description: 'Plataforma para treinamentos empresariais',
    category: 'education',
    icon: Target,
    features: ['Cursos corporativos', 'Competências', 'Avaliações', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'driving-school-system',
    name: 'Gestão de Auto Escolas',
    description: 'Sistema completo para auto escolas',
    category: 'education',
    icon: Car,
    features: ['Alunos', 'Instrutores', 'Veículos', 'Aulas práticas', 'Exames'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'exam-preparation-platform',
    name: 'Preparação para Concursos',
    description: 'Plataforma de estudos para concursos',
    category: 'education',
    icon: Award,
    features: ['Simulados', 'Questões', 'Estatísticas', 'Cronograma de estudos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'sports-training-saas',
    name: 'Treinamento Esportivo',
    description: 'Sistema para academias de esportes',
    category: 'education',
    icon: Trophy,
    features: ['Modalidades', 'Treinos', 'Competições', 'Atletas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  }
];

// SaaS para Redes Sociais
export const socialTemplates: ProjectTemplate[] = [
  {
    id: 'tiktok-content-scheduler',
    name: 'Agendador de Conteúdo TikTok',
    description: 'Plataforma para agendar e gerenciar posts no TikTok',
    category: 'social',
    icon: Video,
    features: ['Agendamento de vídeos', 'Hashtags sugeridas', 'Métricas', 'Múltiplas contas'],
    stack: ['React', 'Supabase', 'TikTok API', 'Tailwind CSS']
  },
  {
    id: 'youtube-analytics-dashboard',
    name: 'Dashboard de Analytics YouTube',
    description: 'Painel completo de análise para YouTubers',
    category: 'social',
    icon: Video,
    features: ['Métricas detalhadas', 'Comparação de vídeos', 'Crescimento do canal', 'Receita'],
    stack: ['React', 'Supabase', 'YouTube API', 'Tailwind CSS']
  },
  {
    id: 'instagram-growth-tool',
    name: 'Ferramenta de Crescimento Instagram',
    description: 'Suite completa para crescimento no Instagram',
    category: 'social',
    icon: Image,
    features: ['Análise de hashtags', 'Melhores horários', 'Engajamento', 'Concorrentes'],
    stack: ['React', 'Supabase', 'Instagram API', 'Tailwind CSS']
  },
  {
    id: 'social-media-calendar',
    name: 'Calendário de Mídias Sociais',
    description: 'Calendário editorial para redes sociais',
    category: 'social',
    icon: Calendar,
    features: ['Planejamento mensal', 'Múltiplas redes', 'Aprovação de conteúdo', 'Templates'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'influencer-campaign-manager',
    name: 'Gestão de Campanhas de Influencers',
    description: 'Plataforma para gerenciar campanhas com influenciadores',
    category: 'social',
    icon: Star,
    features: ['Database de influencers', 'Campanhas', 'Contratos', 'ROI'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'content-creation-saas',
    name: 'Criação de Conteúdo Automatizada',
    description: 'IA para criar conteúdo para redes sociais',
    category: 'social',
    icon: Sparkles,
    features: ['Geração de texto', 'Sugestão de imagens', 'Hashtags automáticas', 'Templates'],
    stack: ['React', 'Supabase', 'OpenAI', 'Tailwind CSS']
  },
  {
    id: 'livestream-scheduler',
    name: 'Agendador de Lives',
    description: 'Sistema para agendar transmissões ao vivo',
    category: 'social',
    icon: Video,
    features: ['Múltiplas plataformas', 'Lembretes', 'Replay automático', 'Chat moderado'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'social-listening-tool',
    name: 'Monitoramento de Menções',
    description: 'Ferramenta de social listening',
    category: 'social',
    icon: Search,
    features: ['Monitoramento de marca', 'Sentimentos', 'Trends', 'Alertas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'ugc-platform',
    name: 'Plataforma de Conteúdo Gerado por Usuários',
    description: 'Sistema para gerenciar UGC campaigns',
    category: 'social',
    icon: Users,
    features: ['Submissão de conteúdo', 'Moderação', 'Prêmios', 'Galeria'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'brand-collaboration-hub',
    name: 'Hub de Colaboração com Marcas',
    description: 'Plataforma conectando influencers e marcas',
    category: 'social',
    icon: Handshake,
    features: ['Matching', 'Propostas', 'Portfólio', 'Pagamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  }
];

// Categories with proper icons
export const categories = [
  { id: 'all', name: 'Todos', icon: Grid },
  { id: 'health', name: 'Saúde', icon: Heart },
  { id: 'business', name: 'Negócios', icon: Building },
  { id: 'delivery', name: 'Delivery', icon: Package },
  { id: 'education', name: 'Educação', icon: Book },
  { id: 'social', name: 'Redes Sociais', icon: Users },
  { id: 'creative', name: 'Criativo', icon: Palette }
];

// Combine all templates
export const projectTemplates: ProjectTemplate[] = [
  ...healthTemplates,
  ...businessTemplates,
  ...deliveryTemplates,
  ...educationTemplates,
  ...socialTemplates
];

// Utility functions
export const getTemplatesByCategory = (category: string): ProjectTemplate[] => {
  if (category === 'all') return projectTemplates;
  return projectTemplates.filter(template => template.category === category);
};

export const searchTemplates = (searchTerm: string): ProjectTemplate[] => {
  const term = searchTerm.toLowerCase();
  return projectTemplates.filter(template => 
    template.name.toLowerCase().includes(term) ||
    template.description.toLowerCase().includes(term) ||
    template.features.some(feature => feature.toLowerCase().includes(term))
  );
};
