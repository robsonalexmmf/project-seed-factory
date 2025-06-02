
import {
  Activity, Archive, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Award, Baby, Badge, Bell, Bold, Book, Bug, Building,
  Check, Circle, Cloud, Code, Container, Download, Eye, Feather, File, Film, Gift, Grid, Heart, Home, Image,
  Inbox, Key, List, Lock, Map, Medal, Moon, Mountain, Package, Pause, Phone, Play, Plus, Power, Repeat, Save,
  Search, Send, Shield, Star, Store, Sun, Tag, Target, Trash, Trophy, Upload, Video, Wallet, Wind, Clock,
  Calendar, Brain, User, TrendingUp, HardHat, Users, Leaf, Calculator, DollarSign, Palette, Layers, Globe,
  Camera, FileText, Mic, Music, Scissors, Sparkles, Car, AlertTriangle, Handshake, Scale, Zap, Settings,
  MessageCircle, ShoppingCart, CreditCard, BarChart, PieChart, LineChart, Briefcase, Coffee, Utensils
} from 'lucide-react';

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: any;
  color: string;
  features: string[];
  stack: string[];
}

// SaaS para Saúde e Bem-Estar (50 templates)
export const healthTemplates: ProjectTemplate[] = [
  {
    id: 'health-appointment-system',
    name: 'Sistema de Agendamento para Psicólogos',
    description: 'Plataforma completa para agendamento de consultas psicológicas com lembretes automáticos',
    category: 'health',
    icon: Heart,
    color: 'bg-red-500',
    features: ['Agendamento online', 'Lembretes SMS/Email', 'Prontuário digital', 'Videoconferência'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'physiotherapy-management',
    name: 'Gestão para Clínicas de Fisioterapia',
    description: 'Sistema completo para gestão de pacientes e sessões de fisioterapia',
    category: 'health',
    icon: Activity,
    color: 'bg-green-500',
    features: ['Controle de pacientes', 'Planos de tratamento', 'Evolução médica', 'Faturamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'vaccine-control-saas',
    name: 'Controle de Vacinas para Clínicas',
    description: 'Sistema para controle e monitoramento de vacinação em clínicas',
    category: 'health',
    icon: Shield,
    color: 'bg-blue-500',
    features: ['Cartão de vacina digital', 'Lembretes de doses', 'Relatórios', 'Estoque de vacinas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'dental-reminders',
    name: 'Lembretes para Dentistas',
    description: 'Sistema de lembretes de consultas e tratamentos dentários',
    category: 'health',
    icon: Bell,
    color: 'bg-yellow-500',
    features: ['Agendamento inteligente', 'Lembretes automáticos', 'Histórico dental', 'Orçamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'nutrition-records',
    name: 'Prontuário Eletrônico para Nutricionistas',
    description: 'Plataforma para gestão de pacientes e planos alimentares',
    category: 'health',
    icon: File,
    color: 'bg-green-600',
    features: ['Avaliação nutricional', 'Planos alimentares', 'Acompanhamento', 'Receitas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'patient-tracking-physio',
    name: 'Acompanhamento de Pacientes - Fisioterapia',
    description: 'SaaS para fisioterapeutas acompanharem evolução dos pacientes',
    category: 'health',
    icon: Target,
    color: 'bg-blue-600',
    features: ['Exercícios prescritos', 'Evolução do tratamento', 'Relatórios de progresso', 'Comunicação'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'holistic-therapy-management',
    name: 'Gestão para Terapeutas Holísticos',
    description: 'Painel completo para gestão de atendimentos holísticos',
    category: 'health',
    icon: Sun,
    color: 'bg-orange-500',
    features: ['Agendamento', 'Fichas de anamnese', 'Terapias aplicadas', 'Pagamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'occupational-therapy-booking',
    name: 'Marcação para Terapeutas Ocupacionais',
    description: 'Plataforma de marcação de sessões de terapia ocupacional',
    category: 'health',
    icon: Calendar,
    color: 'bg-purple-500',
    features: ['Sessões personalizadas', 'Relatórios de desenvolvimento', 'Comunicação com famílias'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'digital-anamnesis',
    name: 'Anamnese Digital para Consultórios',
    description: 'App de anamnese digital para consultórios médicos',
    category: 'health',
    icon: File,
    color: 'bg-indigo-500',
    features: ['Formulários dinâmicos', 'Assinatura digital', 'Histórico médico', 'Integração LGPD'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'health-insurance-management',
    name: 'Gestão de Planos de Saúde',
    description: 'Sistema para gestão de planos e convênios médicos',
    category: 'health',
    icon: Shield,
    color: 'bg-blue-700',
    features: ['Autorização de procedimentos', 'Controle de carências', 'Rede credenciada'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'aesthetic-treatments',
    name: 'Controle de Tratamentos Estéticos',
    description: 'Aplicativo para controle de tratamentos estéticos',
    category: 'health',
    icon: Star,
    color: 'bg-pink-500',
    features: ['Protocolos de tratamento', 'Antes e depois', 'Agendamento', 'Produtos utilizados'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'podiatry-clinic-system',
    name: 'Sistema para Clínicas de Podologia',
    description: 'Sistema especializado para clínicas de podologia',
    category: 'health',
    icon: Activity,
    color: 'bg-green-700',
    features: ['Diagnósticos específicos', 'Tratamentos podológicos', 'Imagens dos pés'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'telemedicine-saas',
    name: 'Telemedicina com Chat Seguro',
    description: 'SaaS de telemedicina com chat seguro e criptografado',
    category: 'health',
    icon: Video,
    color: 'bg-purple-600',
    features: ['Consultas por vídeo', 'Chat criptografado', 'Prescrições digitais', 'Pagamento online'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'personal-trainer-subscription',
    name: 'Assinatura de Treinos Personalizados',
    description: 'Plataforma de assinatura para treinos de personal trainer',
    category: 'health',
    icon: Trophy,
    color: 'bg-yellow-600',
    features: ['Treinos personalizados', 'Acompanhamento de evolução', 'Vídeos explicativos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'ai-nutrition-plans',
    name: 'Planos Alimentares com IA',
    description: 'App para nutricionistas criarem planos alimentares com IA',
    category: 'health',
    icon: Brain,
    color: 'bg-blue-500',
    features: ['IA para sugestões', 'Cálculos nutricionais', 'Lista de compras', 'Receitas saudáveis'],
    stack: ['React', 'Supabase', 'OpenAI', 'Tailwind CSS']
  },
  {
    id: 'mental-health-tracking',
    name: 'Acompanhamento de Saúde Mental',
    description: 'Plataforma para acompanhar saúde mental de pacientes',
    category: 'health',
    icon: Heart,
    color: 'bg-red-600',
    features: ['Questionários de humor', 'Gráficos de evolução', 'Alertas de crise', 'Meditação guiada'],
    stack: ['React', 'Supabase', 'Chart.js', 'Tailwind CSS']
  },
  {
    id: 'elderly-care-management',
    name: 'Gestão de Cuidados para Idosos',
    description: 'Sistema para gestão de cuidados e medicamentos para idosos',
    category: 'health',
    icon: User,
    color: 'bg-gray-600',
    features: ['Controle de medicamentos', 'Agendamento de cuidadores', 'Emergências', 'Familiares'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'rehabilitation-tracking',
    name: 'Acompanhamento de Reabilitação',
    description: 'Sistema para acompanhar progresso de reabilitação física',
    category: 'health',
    icon: TrendingUp,
    color: 'bg-green-500',
    features: ['Exercícios de reabilitação', 'Medição de progresso', 'Relatórios médicos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'pharmacy-management',
    name: 'Gestão de Farmácias',
    description: 'Sistema completo para gestão de farmácias e medicamentos',
    category: 'health',
    icon: Package,
    color: 'bg-blue-500',
    features: ['Controle de estoque', 'Vendas', 'Receitas médicas', 'Validade de medicamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'medical-laboratory-saas',
    name: 'Gestão de Laboratórios Médicos',
    description: 'Sistema para gestão de exames e laboratórios médicos',
    category: 'health',
    icon: Search,
    color: 'bg-indigo-600',
    features: ['Agendamento de exames', 'Resultados online', 'Faturamento', 'Controle de qualidade'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'veterinary-clinic-system',
    name: 'Sistema para Clínicas Veterinárias',
    description: 'Gestão completa de clínicas veterinárias',
    category: 'health',
    icon: Heart,
    color: 'bg-orange-500',
    features: ['Prontuário animal', 'Vacinas', 'Cirurgias', 'Agendamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'home-care-management',
    name: 'Gestão de Home Care',
    description: 'Sistema para empresas de atendimento domiciliar',
    category: 'health',
    icon: Home,
    color: 'bg-blue-600',
    features: ['Escala de profissionais', 'Medicamentos', 'Relatórios', 'Familiares'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'speech-therapy-tracking',
    name: 'Acompanhamento de Fonoaudiologia',
    description: 'Sistema para fonoaudiólogos acompanharem pacientes',
    category: 'health',
    icon: Mic,
    color: 'bg-purple-500',
    features: ['Exercícios de fala', 'Evolução', 'Relatórios', 'Materiais'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'acupuncture-scheduling',
    name: 'Agendamento para Acupunturistas',
    description: 'Sistema de agendamento e controle para acupunturistas',
    category: 'health',
    icon: Target,
    color: 'bg-red-500',
    features: ['Pontos de acupuntura', 'Sessões', 'Evolução', 'Meridiano'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'medical-record-digitization',
    name: 'Digitalização de Prontuários',
    description: 'Plataforma para digitalizar prontuários médicos',
    category: 'health',
    icon: File,
    color: 'bg-blue-500',
    features: ['Digitalização', 'OCR', 'Busca inteligente', 'Backup seguro'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'telemedicine-platform',
    name: 'Plataforma de Telemedicina',
    description: 'Sistema completo de consultas médicas online',
    category: 'health',
    icon: Video,
    color: 'bg-purple-500',
    features: ['Consultas por vídeo', 'Prescrição digital', 'Histórico médico', 'Pagamentos'],
    stack: ['React', 'Supabase', 'WebRTC', 'Tailwind CSS']
  },
  {
    id: 'pharmacy-delivery',
    name: 'Delivery de Farmácia',
    description: 'Sistema de delivery para farmácias com controle de medicamentos',
    category: 'health',
    icon: Package,
    color: 'bg-indigo-500',
    features: ['Catálogo de medicamentos', 'Receitas digitais', 'Entrega rápida', 'Estoque'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'dental-clinic-management',
    name: 'Gestão Completa de Clínicas Odontológicas',
    description: 'Sistema completo para gestão de clínicas dentárias',
    category: 'health',
    icon: User,
    color: 'bg-blue-400',
    features: ['Prontuário odontológico', 'Radiografias', 'Orçamentos', 'Procedimentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'medical-equipment-rental',
    name: 'Aluguel de Equipamentos Médicos',
    description: 'Plataforma para aluguel de equipamentos médicos',
    category: 'health',
    icon: Settings,
    color: 'bg-gray-500',
    features: ['Catálogo de equipamentos', 'Contratos', 'Manutenção', 'Entrega'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'clinical-research-platform',
    name: 'Plataforma de Pesquisa Clínica',
    description: 'Sistema para gestão de pesquisas clínicas',
    category: 'health',
    icon: Search,
    color: 'bg-purple-400',
    features: ['Protocolos de pesquisa', 'Randomização', 'Dados clínicos', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'blood-bank-management',
    name: 'Gestão de Banco de Sangue',
    description: 'Sistema para gestão de bancos de sangue',
    category: 'health',
    icon: Heart,
    color: 'bg-red-700',
    features: ['Doadores', 'Tipagem sanguínea', 'Estoque', 'Validade'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'medical-imaging-saas',
    name: 'Sistema de Imagens Médicas',
    description: 'Plataforma para gestão de exames de imagem',
    category: 'health',
    icon: Image,
    color: 'bg-blue-300',
    features: ['DICOM viewer', 'Laudos', 'Armazenamento', 'Compartilhamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'oncology-treatment-tracker',
    name: 'Acompanhamento de Tratamento Oncológico',
    description: 'Sistema para acompanhar tratamentos de câncer',
    category: 'health',
    icon: Target,
    color: 'bg-pink-600',
    features: ['Protocolos de quimio', 'Efeitos colaterais', 'Evolução', 'Suporte'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'fertility-clinic-management',
    name: 'Gestão de Clínicas de Fertilidade',
    description: 'Sistema especializado para clínicas de reprodução assistida',
    category: 'health',
    icon: Heart,
    color: 'bg-pink-400',
    features: ['Tratamentos FIV', 'Ciclos', 'Embriões', 'Estatísticas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'cardiology-monitoring',
    name: 'Monitoramento Cardiológico',
    description: 'Sistema para monitoramento de pacientes cardíacos',
    category: 'health',
    icon: Heart,
    color: 'bg-red-400',
    features: ['ECG', 'Pressão arterial', 'Medicamentos', 'Alertas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'dialysis-center-management',
    name: 'Gestão de Centros de Diálise',
    description: 'Sistema para centros de hemodiálise',
    category: 'health',
    icon: Activity,
    color: 'bg-blue-800',
    features: ['Sessões de diálise', 'Máquinas', 'Pacientes', 'Qualidade da água'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'orthopedic-clinic-saas',
    name: 'Sistema para Clínicas Ortopédicas',
    description: 'Gestão especializada para ortopedistas',
    category: 'health',
    icon: Activity,
    color: 'bg-gray-700',
    features: ['Raio-X', 'Cirurgias', 'Próteses', 'Recuperação'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'pediatric-growth-tracker',
    name: 'Acompanhamento do Crescimento Infantil',
    description: 'Sistema para pediatras acompanharem crescimento',
    category: 'health',
    icon: Baby,
    color: 'bg-yellow-400',
    features: ['Curvas de crescimento', 'Vacinas', 'Desenvolvimento', 'Marcos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'geriatric-care-platform',
    name: 'Plataforma de Cuidados Geriátricos',
    description: 'Sistema especializado em cuidados para idosos',
    category: 'health',
    icon: User,
    color: 'bg-gray-400',
    features: ['Avaliação geriátrica', 'Medicamentos', 'Quedas', 'Cognitivo'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'wound-care-management',
    name: 'Gestão de Cuidados com Feridas',
    description: 'Sistema para acompanhar tratamento de feridas',
    category: 'health',
    icon: Shield,
    color: 'bg-red-300',
    features: ['Tipos de ferida', 'Curativos', 'Evolução', 'Fotos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'respiratory-therapy-saas',
    name: 'Terapia Respiratória',
    description: 'Sistema para fisioterapeutas respiratórios',
    category: 'health',
    icon: Wind,
    color: 'bg-blue-200',
    features: ['Espirometria', 'Exercícios', 'Ventilação', 'Oxigenoterapia'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'addiction-treatment-platform',
    name: 'Plataforma de Tratamento de Dependência',
    description: 'Sistema para clínicas de reabilitação',
    category: 'health',
    icon: Heart,
    color: 'bg-purple-700',
    features: ['Protocolos', 'Grupos de apoio', 'Recaídas', 'Família'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'medical-device-tracking',
    name: 'Rastreamento de Dispositivos Médicos',
    description: 'Sistema para rastrear dispositivos médicos implantáveis',
    category: 'health',
    icon: Settings,
    color: 'bg-gray-800',
    features: ['Implantes', 'Lotes', 'Recalls', 'Pacientes'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'emergency-medical-system',
    name: 'Sistema de Emergências Médicas',
    description: 'Plataforma para serviços de emergência',
    category: 'health',
    icon: AlertTriangle,
    color: 'bg-red-800',
    features: ['Ambulâncias', 'Triagem', 'Hospitais', 'GPS'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'surgical-scheduling',
    name: 'Agendamento de Cirurgias',
    description: 'Sistema para agendamento e gestão de cirurgias',
    category: 'health',
    icon: Calendar,
    color: 'bg-green-800',
    features: ['Salas cirúrgicas', 'Equipes', 'Materiais', 'Pré-operatório'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'medical-billing-platform',
    name: 'Faturamento Médico',
    description: 'Sistema de faturamento para clínicas e hospitais',
    category: 'health',
    icon: DollarSign,
    color: 'bg-green-400',
    features: ['Procedimentos', 'Convênios', 'Glosas', 'Cobrança'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'medical-inventory-management',
    name: 'Gestão de Estoque Médico',
    description: 'Sistema para gestão de estoque hospitalar',
    category: 'health',
    icon: Package,
    color: 'bg-brown-500',
    features: ['Medicamentos', 'Materiais', 'Validade', 'Consumo'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  }
];

// SaaS para Negócios e Profissionais Liberais (60 templates)
export const businessTemplates: ProjectTemplate[] = [
  {
    id: 'real-estate-crm',
    name: 'CRM para Corretores de Imóveis',
    description: 'Sistema completo de CRM para corretores de imóveis',
    category: 'business',
    icon: Building,
    color: 'bg-blue-600',
    features: ['Gestão de leads', 'Portfólio de imóveis', 'Agendamento de visitas', 'Comissões'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'architect-project-management',
    name: 'Gestão de Projetos para Arquitetos',
    description: 'Plataforma de gestão de projetos arquitetônicos',
    category: 'business',
    icon: Building,
    color: 'bg-gray-600',
    features: ['Cronograma de obras', 'Orçamentos', 'Plantas e projetos', 'Cliente portal'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'construction-timeline',
    name: 'Painel de Obras com Timelines',
    description: 'Painel para acompanhamento de obras com timelines e tarefas',
    category: 'business',
    icon: Clock,
    color: 'bg-yellow-600',
    features: ['Timeline de obra', 'Gestão de tarefas', 'Fotos de progresso', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'lawyer-contract-control',
    name: 'Controle de Contratos para Advogados',
    description: 'SaaS para controle de contratos jurídicos',
    category: 'business',
    icon: File,
    color: 'bg-red-600',
    features: ['Gestão de contratos', 'Prazos processuais', 'Cliente dashboard', 'Documentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'locksmith-budget-panel',
    name: 'Orçamentos para Serralheiros',
    description: 'Painel de orçamento e clientes para serralheiros',
    category: 'business',
    icon: Key,
    color: 'bg-gray-700',
    features: ['Orçamentos rápidos', 'Catálogo de serviços', 'Agendamento', 'Histórico de clientes'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'financial-consultant-proposals',
    name: 'Propostas para Consultores Financeiros',
    description: 'Plataforma de envio de propostas para consultores financeiros',
    category: 'business',
    icon: TrendingUp,
    color: 'bg-green-600',
    features: ['Criação de propostas', 'Assinatura digital', 'Acompanhamento', 'Templates'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'career-coach-scheduling',
    name: 'Agendamento para Coach de Carreira',
    description: 'Sistema de agendamento para coaches de carreira',
    category: 'business',
    icon: Target,
    color: 'bg-purple-600',
    features: ['Sessões de coaching', 'Planos de desenvolvimento', 'Metas', 'Progresso'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'online-legal-service',
    name: 'Atendimento Jurídico Online',
    description: 'Plataforma de atendimento jurídico online',
    category: 'business',
    icon: Shield,
    color: 'bg-blue-700',
    features: ['Consultas online', 'Documentos jurídicos', 'Chat seguro', 'Pagamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'translator-client-management',
    name: 'Gestão de Clientes para Tradutores',
    description: 'Gestão de clientes para tradutores freelancers',
    category: 'business',
    icon: Globe,
    color: 'bg-indigo-500',
    features: ['Projetos de tradução', 'Orçamentos', 'Prazos', 'Faturamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'insurance-visit-control',
    name: 'Controle de Visitas - Seguros',
    description: 'App de controle de visitas para corretores de seguros',
    category: 'business',
    icon: Car,
    color: 'bg-blue-500',
    features: ['Agendamento de visitas', 'Propostas de seguro', 'Follow-up', 'Comissões'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'legal-case-management',
    name: 'Gestão de Processos Jurídicos',
    description: 'Sistema completo para escritórios de advocacia',
    category: 'business',
    icon: Scale,
    color: 'bg-red-700',
    features: ['Controle de processos', 'Prazos', 'Audiências', 'Honorários'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'notary-office-system',
    name: 'Sistema para Cartórios',
    description: 'Gestão completa para cartórios e tabelionatos',
    category: 'business',
    icon: FileText,
    color: 'bg-gray-600',
    features: ['Escrituras', 'Certidões', 'Autenticações', 'Protocolo'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'court-process-tracking',
    name: 'Acompanhamento de Processos Judiciais',
    description: 'Sistema para acompanhar processos em tribunais',
    category: 'business',
    icon: Search,
    color: 'bg-blue-600',
    features: ['Busca por número', 'Movimentações', 'Alertas', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'lawyer-billing-system',
    name: 'Faturamento para Advogados',
    description: 'Sistema de cobrança e faturamento jurídico',
    category: 'business',
    icon: DollarSign,
    color: 'bg-green-700',
    features: ['Honorários', 'Despesas', 'Contratos', 'Recibos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'legal-document-generator',
    name: 'Gerador de Documentos Jurídicos',
    description: 'Plataforma para gerar documentos jurídicos automaticamente',
    category: 'business',
    icon: FileText,
    color: 'bg-indigo-600',
    features: ['Templates legais', 'Personalização', 'Assinatura digital', 'Banco de dados'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'crm-sales-management',
    name: 'CRM para Gestão de Vendas',
    description: 'Sistema completo de CRM para equipes de vendas',
    category: 'business',
    icon: Users,
    color: 'bg-blue-600',
    features: ['Pipeline de vendas', 'Gestão de leads', 'Relatórios', 'Automação'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'invoice-generator',
    name: 'Gerador de Faturas',
    description: 'Sistema para geração e gestão de faturas e cobranças',
    category: 'business',
    icon: FileText,
    color: 'bg-green-600',
    features: ['Geração de faturas', 'Cobrança automática', 'Relatórios financeiros', 'Integração bancária'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'project-management-tool',
    name: 'Ferramenta de Gestão de Projetos',
    description: 'Plataforma completa para gestão de projetos e equipes',
    category: 'business',
    icon: Briefcase,
    color: 'bg-purple-600',
    features: ['Kanban board', 'Cronogramas', 'Gestão de recursos', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'expense-tracker',
    name: 'Controle de Despesas',
    description: 'Sistema para controle e análise de despesas empresariais',
    category: 'business',
    icon: DollarSign,
    color: 'bg-yellow-600',
    features: ['Categorização automática', 'Relatórios detalhados', 'Aprovação de despesas', 'Integração bancária'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'freelancer-time-tracking',
    name: 'Controle de Horas para Freelancers',
    description: 'Sistema de controle de tempo para freelancers',
    category: 'business',
    icon: Clock,
    color: 'bg-blue-400',
    features: ['Timer de projetos', 'Relatórios de horas', 'Faturamento', 'Clientes'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'consulting-proposal-generator',
    name: 'Gerador de Propostas de Consultoria',
    description: 'Plataforma para criar propostas comerciais',
    category: 'business',
    icon: FileText,
    color: 'bg-purple-500',
    features: ['Templates', 'Precificação', 'Assinatura digital', 'Acompanhamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'tax-consultant-platform',
    name: 'Plataforma para Contadores',
    description: 'Sistema completo para escritórios contábeis',
    category: 'business',
    icon: Calculator,
    color: 'bg-green-500',
    features: ['Obrigações fiscais', 'Clientes', 'Documentos', 'Prazos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'business-coach-platform',
    name: 'Plataforma para Business Coach',
    description: 'Sistema para coaches empresariais',
    category: 'business',
    icon: Target,
    color: 'bg-orange-600',
    features: ['Diagnósticos', 'Planos de ação', 'Métricas', 'Clientes'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'marketing-agency-dashboard',
    name: 'Dashboard para Agências de Marketing',
    description: 'Painel completo para agências de marketing digital',
    category: 'business',
    icon: TrendingUp,
    color: 'bg-pink-600',
    features: ['Campanhas', 'Métricas', 'Clientes', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'event-planning-saas',
    name: 'Planejamento de Eventos',
    description: 'Sistema para organizadores de eventos',
    category: 'business',
    icon: Calendar,
    color: 'bg-purple-400',
    features: ['Cronograma', 'Fornecedores', 'Orçamento', 'Convidados'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'recruitment-platform',
    name: 'Plataforma de Recrutamento',
    description: 'Sistema para empresas de RH e recrutamento',
    category: 'business',
    icon: Users,
    color: 'bg-blue-700',
    features: ['Vagas', 'Candidatos', 'Entrevistas', 'Avaliações'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'property-management-system',
    name: 'Gestão de Propriedades',
    description: 'Sistema para administradoras de imóveis',
    category: 'business',
    icon: Building,
    color: 'bg-gray-500',
    features: ['Aluguéis', 'Inquilinos', 'Manutenção', 'Contratos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'debt-collection-platform',
    name: 'Plataforma de Cobrança',
    description: 'Sistema para empresas de cobrança',
    category: 'business',
    icon: DollarSign,
    color: 'bg-red-500',
    features: ['Devedores', 'Acordos', 'Negociação', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'franchise-management',
    name: 'Gestão de Franquias',
    description: 'Sistema para redes de franquias',
    category: 'business',
    icon: Store,
    color: 'bg-orange-500',
    features: ['Franqueados', 'Royalties', 'Padrões', 'Treinamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'inventory-management-saas',
    name: 'Gestão de Estoque',
    description: 'Sistema completo de controle de estoque',
    category: 'business',
    icon: Package,
    color: 'bg-brown-600',
    features: ['Produtos', 'Movimentação', 'Relatórios', 'Alertas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'business-valuation-tool',
    name: 'Avaliação de Empresas',
    description: 'Ferramenta para avaliar valor de empresas',
    category: 'business',
    icon: TrendingUp,
    color: 'bg-green-800',
    features: ['Múltiplos', 'Fluxo de caixa', 'Comparáveis', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'quality-management-system',
    name: 'Sistema de Gestão da Qualidade',
    description: 'Plataforma para certificações ISO',
    category: 'business',
    icon: Award,
    color: 'bg-yellow-700',
    features: ['Processos', 'Documentos', 'Auditorias', 'Não conformidades'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'customer-support-platform',
    name: 'Plataforma de Atendimento ao Cliente',
    description: 'Sistema completo de help desk',
    category: 'business',
    icon: MessageCircle,
    color: 'bg-blue-300',
    features: ['Tickets', 'Chat', 'Base de conhecimento', 'SLA'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'vendor-management-system',
    name: 'Gestão de Fornecedores',
    description: 'Sistema para gestão de fornecedores',
    category: 'business',
    icon: Handshake,
    color: 'bg-green-300',
    features: ['Cadastro', 'Avaliação', 'Contratos', 'Pagamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'compliance-management',
    name: 'Gestão de Compliance',
    description: 'Sistema para gestão de conformidade',
    category: 'business',
    icon: Shield,
    color: 'bg-red-400',
    features: ['Regulamentações', 'Auditorias', 'Riscos', 'Treinamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'business-intelligence-dashboard',
    name: 'Dashboard de Business Intelligence',
    description: 'Painel de BI para tomada de decisões',
    category: 'business',
    icon: BarChart,
    color: 'bg-indigo-700',
    features: ['KPIs', 'Dashboards', 'Relatórios', 'Análises'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'contract-lifecycle-management',
    name: 'Gestão do Ciclo de Vida de Contratos',
    description: 'Sistema completo para gestão de contratos',
    category: 'business',
    icon: File,
    color: 'bg-gray-800',
    features: ['Criação', 'Aprovação', 'Assinatura', 'Renovação'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'risk-management-platform',
    name: 'Plataforma de Gestão de Riscos',
    description: 'Sistema para identificação e gestão de riscos',
    category: 'business',
    icon: AlertTriangle,
    color: 'bg-orange-700',
    features: ['Matriz de risco', 'Controles', 'Monitoramento', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'asset-management-system',
    name: 'Gestão de Ativos',
    description: 'Sistema para controle de ativos empresariais',
    category: 'business',
    icon: Package,
    color: 'bg-blue-800',
    features: ['Inventário', 'Depreciação', 'Manutenção', 'Localização'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'document-management-system',
    name: 'Gestão Eletrônica de Documentos',
    description: 'Sistema para digitalização e gestão de documentos',
    category: 'business',
    icon: FileText,
    color: 'bg-purple-800',
    features: ['Digitalização', 'Indexação', 'Workflow', 'Busca'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'knowledge-management-platform',
    name: 'Plataforma de Gestão do Conhecimento',
    description: 'Sistema para compartilhamento de conhecimento',
    category: 'business',
    icon: Book,
    color: 'bg-teal-600',
    features: ['Wiki', 'Documentação', 'Colaboração', 'Busca'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'performance-management-system',
    name: 'Gestão de Performance',
    description: 'Sistema para avaliação de desempenho',
    category: 'business',
    icon: Target,
    color: 'bg-cyan-600',
    features: ['Metas', 'Avaliações', 'Feedback', 'Desenvolvimento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'training-management-platform',
    name: 'Plataforma de Gestão de Treinamentos',
    description: 'Sistema para gestão de capacitação',
    category: 'business',
    icon: Book,
    color: 'bg-lime-600',
    features: ['Cursos', 'Certificações', 'Cronograma', 'Avaliações'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'facility-management-system',
    name: 'Gestão de Facilities',
    description: 'Sistema para gestão de instalações',
    category: 'business',
    icon: Building,
    color: 'bg-amber-600',
    features: ['Manutenção', 'Reservas', 'Segurança', 'Limpeza'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'fleet-management-system',
    name: 'Gestão de Frota',
    description: 'Sistema para controle de veículos',
    category: 'business',
    icon: Car,
    color: 'bg-slate-600',
    features: ['Veículos', 'Motoristas', 'Combustível', 'Manutenção'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'safety-management-system',
    name: 'Gestão de Segurança do Trabalho',
    description: 'Sistema para gestão de SST',
    category: 'business',
    icon: Shield,
    color: 'bg-emerald-600',
    features: ['Acidentes', 'EPI', 'Treinamentos', 'Inspeções'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'environmental-management',
    name: 'Gestão Ambiental',
    description: 'Sistema para gestão ambiental corporativa',
    category: 'business',
    icon: Leaf,
    color: 'bg-green-700',
    features: ['Licenças', 'Monitoramento', 'Resíduos', 'Emissões'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'energy-management-system',
    name: 'Gestão de Energia',
    description: 'Sistema para monitoramento de consumo energético',
    category: 'business',
    icon: Zap,
    color: 'bg-yellow-500',
    features: ['Consumo', 'Eficiência', 'Custos', 'Sustentabilidade'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'visitor-management-system',
    name: 'Gestão de Visitantes',
    description: 'Sistema para controle de acesso de visitantes',
    category: 'business',
    icon: Users,
    color: 'bg-indigo-400',
    features: ['Check-in', 'Crachás', 'Segurança', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'meeting-room-booking',
    name: 'Reserva de Salas de Reunião',
    description: 'Sistema para agendamento de salas',
    category: 'business',
    icon: Calendar,
    color: 'bg-violet-600',
    features: ['Reservas', 'Equipamentos', 'Recursos', 'Calendário'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'expense-reimbursement',
    name: 'Reembolso de Despesas',
    description: 'Sistema para solicitação de reembolsos',
    category: 'business',
    icon: DollarSign,
    color: 'bg-rose-600',
    features: ['Solicitações', 'Aprovações', 'Comprovantes', 'Pagamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'corporate-travel-management',
    name: 'Gestão de Viagens Corporativas',
    description: 'Sistema para gestão de viagens de negócios',
    category: 'business',
    icon: Map,
    color: 'bg-sky-600',
    features: ['Reservas', 'Política', 'Despesas', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'procurement-platform',
    name: 'Plataforma de Compras',
    description: 'Sistema para gestão de compras corporativas',
    category: 'business',
    icon: ShoppingCart,
    color: 'bg-orange-400',
    features: ['Cotações', 'Aprovações', 'Pedidos', 'Fornecedores'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'budget-planning-tool',
    name: 'Ferramenta de Planejamento Orçamentário',
    description: 'Sistema para planejamento e controle orçamentário',
    category: 'business',
    icon: Calculator,
    color: 'bg-teal-700',
    features: ['Orçamentos', 'Previsões', 'Controle', 'Análises'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'audit-management-system',
    name: 'Gestão de Auditorias',
    description: 'Sistema para gestão de auditorias internas',
    category: 'business',
    icon: Search,
    color: 'bg-neutral-600',
    features: ['Planejamento', 'Execução', 'Achados', 'Planos de ação'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  }
];

// SaaS para Delivery e Logística (40 templates)
export const deliveryTemplates: ProjectTemplate[] = [
  {
    id: 'restaurant-delivery-platform',
    name: 'Plataforma de Delivery para Restaurantes',
    description: 'Sistema completo de delivery com cardápio digital',
    category: 'delivery',
    icon: Store,
    color: 'bg-red-600',
    features: ['Cardápio online', 'Pedidos', 'Entregadores', 'Pagamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'pharmacy-delivery-saas',
    name: 'Delivery para Farmácias',
    description: 'Sistema de delivery especializado em farmácias',
    category: 'delivery',
    icon: Package,
    color: 'bg-blue-500',
    features: ['Receitas médicas', 'Medicamentos controlados', 'Entrega rápida', 'Convênios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'grocery-delivery-system',
    name: 'Delivery de Supermercados',
    description: 'Plataforma para delivery de produtos de supermercado',
    category: 'delivery',
    icon: Store,
    color: 'bg-green-600',
    features: ['Catálogo de produtos', 'Lista de compras', 'Horário de entrega', 'Promoções'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'bakery-delivery-platform',
    name: 'Delivery para Padarias',
    description: 'Sistema de delivery para padarias e confeitarias',
    category: 'delivery',
    icon: Gift,
    color: 'bg-yellow-600',
    features: ['Produtos frescos', 'Encomendas', 'Bolos personalizados', 'Agenda de entregas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'flower-delivery-saas',
    name: 'Delivery de Flores e Presentes',
    description: 'Plataforma especializada em entrega de flores',
    category: 'delivery',
    icon: Heart,
    color: 'bg-pink-500',
    features: ['Arranjos florais', 'Ocasiões especiais', 'Agendamento', 'Cartões'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'pet-supply-delivery',
    name: 'Delivery de Pet Shop',
    description: 'Sistema de delivery para produtos pet',
    category: 'delivery',
    icon: Heart,
    color: 'bg-orange-500',
    features: ['Ração e medicamentos', 'Brinquedos', 'Serviços pet', 'Assinatura mensal'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'laundry-pickup-delivery',
    name: 'Coleta e Entrega de Lavanderia',
    description: 'Sistema para lavanderias com coleta e entrega',
    category: 'delivery',
    icon: Repeat,
    color: 'bg-blue-600',
    features: ['Agendamento de coleta', 'Tipos de peça', 'Prazo de entrega', 'Rastreamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'gas-delivery-system',
    name: 'Delivery de Gás de Cozinha',
    description: 'Sistema para delivery de botijões de gás',
    category: 'delivery',
    icon: Circle,
    color: 'bg-gray-600',
    features: ['Tipos de botijão', 'Emergência', 'Agendamento', 'Pagamento na entrega'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'water-delivery-saas',
    name: 'Delivery de Água Mineral',
    description: 'Plataforma para entrega de água mineral',
    category: 'delivery',
    icon: Package,
    color: 'bg-blue-500',
    features: ['Galões e garrafas', 'Assinatura', 'Troca de vasilhame', 'Rota otimizada'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'auto-parts-delivery',
    name: 'Delivery de Peças Automotivas',
    description: 'Sistema para entrega de peças de carro',
    category: 'delivery',
    icon: Car,
    color: 'bg-red-700',
    features: ['Catálogo de peças', 'Compatibilidade', 'Entrega expressa', 'Instalação'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'electronics-delivery',
    name: 'Delivery de Eletrônicos',
    description: 'Plataforma especializada em entrega de eletrônicos',
    category: 'delivery',
    icon: Zap,
    color: 'bg-purple-600',
    features: ['Produtos tech', 'Garantia', 'Instalação', 'Suporte técnico'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'furniture-delivery-platform',
    name: 'Delivery de Móveis',
    description: 'Sistema para entrega e montagem de móveis',
    category: 'delivery',
    icon: Package,
    color: 'bg-brown-600',
    features: ['Móveis', 'Montagem', 'Agendamento', 'Medidas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'book-delivery-service',
    name: 'Delivery de Livros',
    description: 'Plataforma para entrega de livros e materiais educativos',
    category: 'delivery',
    icon: Book,
    color: 'bg-indigo-600',
    features: ['Catálogo', 'Recomendações', 'Entrega rápida', 'Eventos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'meal-kit-delivery',
    name: 'Delivery de Kits de Refeição',
    description: 'Sistema para entrega de kits de ingredientes',
    category: 'delivery',
    icon: Utensils,
    color: 'bg-green-500',
    features: ['Receitas', 'Ingredientes', 'Planejamento', 'Nutrição'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'wine-delivery-platform',
    name: 'Delivery de Vinhos',
    description: 'Plataforma especializada em entrega de vinhos',
    category: 'delivery',
    icon: Wine,
    color: 'bg-red-800',
    features: ['Catálogo', 'Harmonização', 'Sommelier', 'Temperatura'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'sports-equipment-delivery',
    name: 'Delivery de Equipamentos Esportivos',
    description: 'Sistema para entrega de artigos esportivos',
    category: 'delivery',
    icon: Trophy,
    color: 'bg-blue-700',
    features: ['Esportes', 'Equipamentos', 'Tamanhos', 'Personalização'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'baby-products-delivery',
    name: 'Delivery de Produtos Infantis',
    description: 'Plataforma para entrega de produtos para bebês',
    category: 'delivery',
    icon: Baby,
    color: 'bg-pink-400',
    features: ['Fraldas', 'Alimentação', 'Brinquedos', 'Roupas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'cosmetics-delivery-platform',
    name: 'Delivery de Cosméticos',
    description: 'Sistema para entrega de produtos de beleza',
    category: 'delivery',
    icon: Sparkles,
    color: 'bg-pink-600',
    features: ['Maquiagem', 'Skincare', 'Consultoria', 'Teste virtual'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'plant-delivery-service',
    name: 'Delivery de Plantas',
    description: 'Plataforma para entrega de plantas e jardinagem',
    category: 'delivery',
    icon: Leaf,
    color: 'bg-green-700',
    features: ['Plantas', 'Vasos', 'Cuidados', 'Consultoria'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'art-supplies-delivery',
    name: 'Delivery de Material Artístico',
    description: 'Sistema para entrega de materiais de arte',
    category: 'delivery',
    icon: Palette,
    color: 'bg-rainbow',
    features: ['Tintas', 'Pincéis', 'Telas', 'Projetos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'office-supplies-delivery',
    name: 'Delivery de Material de Escritório',
    description: 'Plataforma para entrega de suprimentos corporativos',
    category: 'delivery',
    icon: Briefcase,
    color: 'bg-gray-700',
    features: ['Papelaria', 'Móveis', 'Tecnologia', 'Empresas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'cleaning-supplies-delivery',
    name: 'Delivery de Produtos de Limpeza',
    description: 'Sistema para entrega de materiais de limpeza',
    category: 'delivery',
    icon: Sparkles,
    color: 'bg-blue-400',
    features: ['Produtos', 'Equipamentos', 'Eco-friendly', 'Empresas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'tool-rental-delivery',
    name: 'Aluguel e Delivery de Ferramentas',
    description: 'Plataforma para aluguel de ferramentas com entrega',
    category: 'delivery',
    icon: Settings,
    color: 'bg-yellow-700',
    features: ['Ferramentas', 'Aluguel', 'Entrega', 'Devolução'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'medical-equipment-delivery',
    name: 'Delivery de Equipamentos Médicos',
    description: 'Sistema para entrega de equipamentos hospitalares',
    category: 'delivery',
    icon: Heart,
    color: 'bg-red-500',
    features: ['Equipamentos', 'Urgência', 'Calibração', 'Manutenção'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'party-supplies-delivery',
    name: 'Delivery de Artigos para Festa',
    description: 'Plataforma para entrega de decorações e suprimentos',
    category: 'delivery',
    icon: Gift,
    color: 'bg-purple-500',
    features: ['Decoração', 'Balões', 'Doces', 'Temáticas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'construction-materials-delivery',
    name: 'Delivery de Material de Construção',
    description: 'Sistema para entrega de materiais de obra',
    category: 'delivery',
    icon: HardHat,
    color: 'bg-orange-800',
    features: ['Materiais', 'Cimento', 'Ferragens', 'Cronograma'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'frozen-food-delivery',
    name: 'Delivery de Alimentos Congelados',
    description: 'Plataforma especializada em produtos congelados',
    category: 'delivery',
    icon: Package,
    color: 'bg-blue-800',
    features: ['Congelados', 'Temperatura', 'Logística fria', 'Qualidade'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'organic-food-delivery',
    name: 'Delivery de Alimentos Orgânicos',
    description: 'Sistema para entrega de produtos orgânicos',
    category: 'delivery',
    icon: Leaf,
    color: 'bg-green-600',
    features: ['Orgânicos', 'Produtores', 'Certificação', 'Sustentável'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'international-shipping-platform',
    name: 'Plataforma de Envios Internacionais',
    description: 'Sistema para gestão de entregas internacionais',
    category: 'delivery',
    icon: Globe,
    color: 'bg-blue-900',
    features: ['Aduanas', 'Rastreamento', 'Documentos', 'Taxas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'same-day-delivery-platform',
    name: 'Plataforma de Entrega no Mesmo Dia',
    description: 'Sistema para entregas ultra-rápidas',
    category: 'delivery',
    icon: Zap,
    color: 'bg-yellow-500',
    features: ['Urgência', 'Rastreamento real-time', 'Múltiplos modais', 'Otimização'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'bulk-delivery-system',
    name: 'Sistema de Entrega em Massa',
    description: 'Plataforma para entregas corporativas e atacado',
    category: 'delivery',
    icon: Package,
    color: 'bg-gray-800',
    features: ['Volume', 'B2B', 'Cronograma', 'Descarga'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'subscription-box-platform',
    name: 'Plataforma de Caixas de Assinatura',
    description: 'Sistema para assinaturas mensais de produtos',
    category: 'delivery',
    icon: Gift,
    color: 'bg-purple-700',
    features: ['Assinatura', 'Curadoria', 'Personalização', 'Recorrência'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'reverse-logistics-platform',
    name: 'Plataforma de Logística Reversa',
    description: 'Sistema para coleta e reciclagem',
    category: 'delivery',
    icon: Repeat,
    color: 'bg-green-800',
    features: ['Coleta', 'Reciclagem', 'Sustentabilidade', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'drone-delivery-management',
    name: 'Gestão de Delivery por Drones',
    description: 'Sistema para operações de entrega com drones',
    category: 'delivery',
    icon: Zap,
    color: 'bg-cyan-600',
    features: ['Drones', 'Rotas aéreas', 'Autonomia', 'Regulamentação'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'crowdsourced-delivery',
    name: 'Delivery Colaborativo',
    description: 'Plataforma de entregadores independentes',
    category: 'delivery',
    icon: Users,
    color: 'bg-indigo-500',
    features: ['Entregadores', 'Gamificação', 'Pagamentos', 'Avaliações'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'white-label-delivery',
    name: 'Plataforma White Label de Delivery',
    description: 'Sistema personalizável para empresas',
    category: 'delivery',
    icon: Layers,
    color: 'bg-slate-700',
    features: ['White label', 'Personalização', 'Multi-tenant', 'API'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'smart-locker-network',
    name: 'Rede de Armários Inteligentes',
    description: 'Sistema para pontos de coleta automatizados',
    category: 'delivery',
    icon: Lock,
    color: 'bg-gray-600',
    features: ['Armários', 'Código', 'Rede', 'Conveniência'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'temperature-controlled-delivery',
    name: 'Delivery com Controle de Temperatura',
    description: 'Sistema para produtos termossensíveis',
    category: 'delivery',
    icon: Thermometer,
    color: 'bg-blue-600',
    features: ['Temperatura', 'Monitoramento', 'Farmacêuticos', 'Alimentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'cross-border-delivery',
    name: 'Delivery Transfronteiriço',
    description: 'Sistema para entregas entre países',
    category: 'delivery',
    icon: Globe,
    color: 'bg-emerald-700',
    features: ['Fronteiras', 'Documentação', 'Aduanas', 'Moedas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  }
];

// SaaS para Educação (40 templates)
export const educationTemplates: ProjectTemplate[] = [
  {
    id: 'online-course-platform',
    name: 'Plataforma de Cursos Online',
    description: 'Sistema completo para criação e venda de cursos',
    category: 'education',
    icon: Book,
    color: 'bg-indigo-500',
    features: ['Vídeo aulas', 'Exercícios', 'Certificados', 'Pagamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'tutoring-booking-system',
    name: 'Agendamento de Aulas Particulares',
    description: 'Plataforma para agendar aulas particulares',
    category: 'education',
    icon: User,
    color: 'bg-blue-600',
    features: ['Professores', 'Disciplinas', 'Horários', 'Avaliações'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'school-management-system',
    name: 'Gestão Escolar Completa',
    description: 'Sistema de gestão para escolas e colégios',
    category: 'education',
    icon: Building,
    color: 'bg-blue-700',
    features: ['Alunos', 'Professores', 'Notas', 'Frequência', 'Boletim'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'language-learning-saas',
    name: 'Plataforma de Ensino de Idiomas',
    description: 'Sistema para escolas de idiomas',
    category: 'education',
    icon: Globe,
    color: 'bg-green-600',
    features: ['Níveis de idioma', 'Conversação', 'Exercícios', 'Progresso'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'music-lesson-booking',
    name: 'Agendamento de Aulas de Música',
    description: 'Sistema para professores de música',
    category: 'education',
    icon: Music,
    color: 'bg-purple-600',
    features: ['Instrumentos', 'Método pedagógico', 'Apresentações', 'Repertório'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'kindergarten-management',
    name: 'Gestão de Creches e Berçários',
    description: 'Sistema completo para creches',
    category: 'education',
    icon: Baby,
    color: 'bg-pink-500',
    features: ['Crianças', 'Alimentação', 'Sono', 'Atividades', 'Comunicação com pais'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'training-center-saas',
    name: 'Centro de Treinamentos Corporativos',
    description: 'Plataforma para treinamentos empresariais',
    category: 'education',
    icon: Target,
    color: 'bg-blue-600',
    features: ['Cursos corporativos', 'Competências', 'Avaliações', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'driving-school-system',
    name: 'Gestão de Auto Escolas',
    description: 'Sistema completo para auto escolas',
    category: 'education',
    icon: Car,
    color: 'bg-red-600',
    features: ['Alunos', 'Instrutores', 'Veículos', 'Aulas práticas', 'Exames'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'exam-preparation-platform',
    name: 'Preparação para Concursos',
    description: 'Plataforma de estudos para concursos',
    category: 'education',
    icon: Award,
    color: 'bg-yellow-600',
    features: ['Simulados', 'Questões', 'Estatísticas', 'Cronograma de estudos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'sports-training-saas',
    name: 'Treinamento Esportivo',
    description: 'Sistema para academias de esportes',
    category: 'education',
    icon: Trophy,
    color: 'bg-green-600',
    features: ['Modalidades', 'Treinos', 'Competições', 'Atletas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'university-management',
    name: 'Gestão Universitária',
    description: 'Sistema completo para universidades',
    category: 'education',
    icon: Building,
    color: 'bg-indigo-700',
    features: ['Cursos', 'Matrículas', 'Pesquisa', 'Extensão'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'library-management-system',
    name: 'Sistema de Gestão de Bibliotecas',
    description: 'Plataforma para gestão de acervos',
    category: 'education',
    icon: Book,
    color: 'bg-brown-600',
    features: ['Acervo', 'Empréstimos', 'Reservas', 'Multas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'student-attendance-tracker',
    name: 'Controle de Frequência Estudantil',
    description: 'Sistema para monitorar presença de alunos',
    category: 'education',
    icon: CheckCircle,
    color: 'bg-green-500',
    features: ['Presença', 'Biometria', 'Relatórios', 'Pais'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'virtual-classroom-platform',
    name: 'Sala de Aula Virtual',
    description: 'Plataforma para ensino à distância',
    category: 'education',
    icon: Video,
    color: 'bg-blue-500',
    features: ['Videoconferência', 'Whiteboard', 'Chat', 'Gravação'],
    stack: ['React', 'Supabase', 'WebRTC', 'Tailwind CSS']
  },
  {
    id: 'educational-game-platform',
    name: 'Plataforma de Jogos Educativos',
    description: 'Sistema de gamificação para aprendizado',
    category: 'education',
    icon: Trophy,
    color: 'bg-orange-500',
    features: ['Jogos', 'Pontuação', 'Níveis', 'Ranking'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'parent-teacher-communication',
    name: 'Comunicação Pais-Escola',
    description: 'Sistema para comunicação escola-família',
    category: 'education',
    icon: MessageCircle,
    color: 'bg-purple-500',
    features: ['Mensagens', 'Agenda', 'Boletim', 'Eventos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'homework-management-system',
    name: 'Gestão de Tarefas Escolares',
    description: 'Sistema para controle de lições de casa',
    category: 'education',
    icon: FileText,
    color: 'bg-yellow-500',
    features: ['Tarefas', 'Prazos', 'Correção', 'Feedback'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'skill-assessment-platform',
    name: 'Plataforma de Avaliação de Competências',
    description: 'Sistema para avaliar habilidades dos alunos',
    category: 'education',
    icon: Target,
    color: 'bg-red-500',
    features: ['Competências', 'Avaliações', 'Portfólio', 'Desenvolvimento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'scholarship-management',
    name: 'Gestão de Bolsas de Estudo',
    description: 'Sistema para administrar programas de bolsas',
    category: 'education',
    icon: Award,
    color: 'bg-gold-500',
    features: ['Candidaturas', 'Seleção', 'Acompanhamento', 'Renovação'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'research-project-platform',
    name: 'Plataforma de Projetos de Pesquisa',
    description: 'Sistema para gestão de pesquisas acadêmicas',
    category: 'education',
    icon: Search,
    color: 'bg-teal-600',
    features: ['Projetos', 'Orientadores', 'Cronograma', 'Publicações'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'internship-management',
    name: 'Gestão de Estágios',
    description: 'Sistema para programas de estágio',
    category: 'education',
    icon: Briefcase,
    color: 'bg-gray-600',
    features: ['Vagas', 'Candidatos', 'Empresas', 'Avaliações'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'curriculum-planning-tool',
    name: 'Ferramenta de Planejamento Curricular',
    description: 'Sistema para desenvolvimento de currículos',
    category: 'education',
    icon: Map,
    color: 'bg-blue-700',
    features: ['Currículos', 'Competências', 'Sequenciamento', 'Alinhamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'special-needs-education',
    name: 'Educação para Necessidades Especiais',
    description: 'Sistema especializado em educação inclusiva',
    category: 'education',
    icon: Heart,
    color: 'bg-pink-600',
    features: ['Adaptações', 'IEP', 'Recursos', 'Acompanhamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'teacher-professional-development',
    name: 'Desenvolvimento Profissional Docente',
    description: 'Plataforma para capacitação de professores',
    category: 'education',
    icon: User,
    color: 'bg-green-700',
    features: ['Cursos', 'Certificações', 'Mentoria', 'Portfolios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'educational-resource-sharing',
    name: 'Compartilhamento de Recursos Educacionais',
    description: 'Plataforma para troca de materiais didáticos',
    category: 'education',
    icon: Share,
    color: 'bg-orange-600',
    features: ['Recursos', 'Avaliações', 'Colaboração', 'Repositório'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'alumni-network-platform',
    name: 'Rede de Ex-Alunos',
    description: 'Sistema para conectar ex-alunos',
    category: 'education',
    icon: Users,
    color: 'bg-navy-600',
    features: ['Networking', 'Eventos', 'Mentoria', 'Doações'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'academic-calendar-system',
    name: 'Sistema de Calendário Acadêmico',
    description: 'Plataforma para gestão de calendários escolares',
    category: 'education',
    icon: Calendar,
    color: 'bg-purple-700',
    features: ['Calendário', 'Eventos', 'Feriados', 'Sincronização'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'educational-analytics-dashboard',
    name: 'Dashboard de Analytics Educacional',
    description: 'Painel para análise de dados educacionais',
    category: 'education',
    icon: BarChart,
    color: 'bg-blue-800',
    features: ['Métricas', 'Performance', 'Predições', 'Insights'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'peer-tutoring-platform',
    name: 'Plataforma de Tutoria entre Pares',
    description: 'Sistema para alunos ajudarem outros alunos',
    category: 'education',
    icon: Users,
    color: 'bg-cyan-600',
    features: ['Tutores', 'Matching', 'Agendamento', 'Avaliações'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'educational-content-authoring',
    name: 'Criação de Conteúdo Educacional',
    description: 'Ferramenta para criar materiais didáticos',
    category: 'education',
    icon: Edit,
    color: 'bg-green-600',
    features: ['Editor', 'Templates', 'Mídia', 'Colaboração'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'campus-facility-booking',
    name: 'Reserva de Instalações Universitárias',
    description: 'Sistema para agendamento de espaços acadêmicos',
    category: 'education',
    icon: Building,
    color: 'bg-gray-700',
    features: ['Salas', 'Laboratórios', 'Auditórios', 'Equipamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'student-counseling-system',
    name: 'Sistema de Orientação Estudantil',
    description: 'Plataforma para apoio psicopedagógico',
    category: 'education',
    icon: Heart,
    color: 'bg-pink-500',
    features: ['Aconselhamento', 'Agendamentos', 'Relatórios', 'Encaminhamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'educational-survey-platform',
    name: 'Plataforma de Pesquisas Educacionais',
    description: 'Sistema para coleta de feedback educacional',
    category: 'education',
    icon: Survey,
    color: 'bg-yellow-700',
    features: ['Pesquisas', 'Análises', 'Relatórios', 'Dashboards'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'mobile-learning-platform',
    name: 'Plataforma de Aprendizado Mobile',
    description: 'Sistema otimizado para dispositivos móveis',
    category: 'education',
    icon: Phone,
    color: 'bg-blue-600',
    features: ['Mobile-first', 'Offline', 'Notificações', 'Microlearning'],
    stack: ['React', 'Supabase', 'PWA', 'Tailwind CSS']
  },
  {
    id: 'educational-marketplace',
    name: 'Marketplace Educacional',
    description: 'Plataforma para venda de cursos e materiais',
    category: 'education',
    icon: Store,
    color: 'bg-emerald-600',
    features: ['Marketplace', 'Pagamentos', 'Avaliações', 'Comissões'],
    stack: ['React', 'Supabase', 'Stripe', 'Tailwind CSS']
  },
  {
    id: 'virtual-science-lab',
    name: 'Laboratório Virtual de Ciências',
    description: 'Simulador para experimentos científicos',
    category: 'education',
    icon: Flask,
    color: 'bg-teal-700',
    features: ['Simulações', 'Experimentos', 'Relatórios', 'Segurança'],
    stack: ['React', 'Supabase', '3D', 'Tailwind CSS']
  },
  {
    id: 'study-group-organizer',
    name: 'Organizador de Grupos de Estudo',
    description: 'Sistema para formar e gerenciar grupos de estudo',
    category: 'education',
    icon: Users,
    color: 'bg-indigo-600',
    features: ['Grupos', 'Matching', 'Chat', 'Calendário'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'educational-compliance-tracker',
    name: 'Rastreador de Compliance Educacional',
    description: 'Sistema para conformidade com regulamentações',
    category: 'education',
    icon: Shield,
    color: 'bg-red-700',
    features: ['Regulamentações', 'Auditorias', 'Relatórios', 'Alertas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'adaptive-learning-platform',
    name: 'Plataforma de Aprendizado Adaptativo',
    description: 'Sistema que se adapta ao ritmo do aluno',
    category: 'education',
    icon: Brain,
    color: 'bg-purple-600',
    features: ['IA Adaptativa', 'Personalização', 'Analytics', 'Recomendações'],
    stack: ['React', 'Supabase', 'AI', 'Tailwind CSS']
  },
  {
    id: 'educational-video-platform',
    name: 'Plataforma de Vídeos Educacionais',
    description: 'Sistema especializado em conteúdo em vídeo',
    category: 'education',
    icon: Video,
    color: 'bg-red-600',
    features: ['Streaming', 'Legendas', 'Interatividade', 'Analytics'],
    stack: ['React', 'Supabase', 'Video.js', 'Tailwind CSS']
  }
];

// SaaS para Redes Sociais (30 templates)
export const socialTemplates: ProjectTemplate[] = [
  {
    id: 'tiktok-content-scheduler',
    name: 'Agendador de Conteúdo TikTok',
    description: 'Plataforma para agendar e gerenciar posts no TikTok',
    category: 'social',
    icon: Video,
    color: 'bg-black',
    features: ['Agendamento de vídeos', 'Hashtags sugeridas', 'Métricas', 'Múltiplas contas'],
    stack: ['React', 'Supabase', 'TikTok API', 'Tailwind CSS']
  },
  {
    id: 'youtube-analytics-dashboard',
    name: 'Dashboard de Analytics YouTube',
    description: 'Painel completo de análise para YouTubers',
    category: 'social',
    icon: Video,
    color: 'bg-red-600',
    features: ['Métricas detalhadas', 'Comparação de vídeos', 'Crescimento do canal', 'Receita'],
    stack: ['React', 'Supabase', 'YouTube API', 'Tailwind CSS']
  },
  {
    id: 'instagram-growth-tool',
    name: 'Ferramenta de Crescimento Instagram',
    description: 'Suite completa para crescimento no Instagram',
    category: 'social',
    icon: Image,
    color: 'bg-pink-500',
    features: ['Análise de hashtags', 'Melhores horários', 'Engajamento', 'Concorrentes'],
    stack: ['React', 'Supabase', 'Instagram API', 'Tailwind CSS']
  },
  {
    id: 'social-media-calendar',
    name: 'Calendário de Mídias Sociais',
    description: 'Calendário editorial para redes sociais',
    category: 'social',
    icon: Calendar,
    color: 'bg-blue-600',
    features: ['Planejamento mensal', 'Múltiplas redes', 'Aprovação de conteúdo', 'Templates'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'influencer-campaign-manager',
    name: 'Gestão de Campanhas de Influencers',
    description: 'Plataforma para gerenciar campanhas com influenciadores',
    category: 'social',
    icon: Star,
    color: 'bg-yellow-500',
    features: ['Database de influencers', 'Campanhas', 'Contratos', 'ROI'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'content-creation-saas',
    name: 'Criação de Conteúdo Automatizada',
    description: 'IA para criar conteúdo para redes sociais',
    category: 'social',
    icon: Sparkles,
    color: 'bg-purple-500',
    features: ['Geração de texto', 'Sugestão de imagens', 'Hashtags automáticas', 'Templates'],
    stack: ['React', 'Supabase', 'OpenAI', 'Tailwind CSS']
  },
  {
    id: 'livestream-scheduler',
    name: 'Agendador de Lives',
    description: 'Sistema para agendar transmissões ao vivo',
    category: 'social',
    icon: Video,
    color: 'bg-red-500',
    features: ['Múltiplas plataformas', 'Lembretes', 'Replay automático', 'Chat moderado'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'social-listening-tool',
    name: 'Monitoramento de Menções',
    description: 'Ferramenta de social listening',
    category: 'social',
    icon: Search,
    color: 'bg-blue-700',
    features: ['Monitoramento de marca', 'Sentimentos', 'Trends', 'Alertas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'ugc-platform',
    name: 'Plataforma de Conteúdo Gerado por Usuários',
    description: 'Sistema para gerenciar UGC campaigns',
    category: 'social',
    icon: Users,
    color: 'bg-green-600',
    features: ['Submissão de conteúdo', 'Moderação', 'Prêmios', 'Galeria'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'brand-collaboration-hub',
    name: 'Hub de Colaboração com Marcas',
    description: 'Plataforma conectando influencers e marcas',
    category: 'social',
    icon: Handshake,
    color: 'bg-indigo-600',
    features: ['Matching', 'Propostas', 'Portfólio', 'Pagamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'social-media-contest-platform',
    name: 'Plataforma de Concursos Sociais',
    description: 'Sistema para criar e gerenciar concursos',
    category: 'social',
    icon: Trophy,
    color: 'bg-gold-500',
    features: ['Concursos', 'Participantes', 'Prêmios', 'Viralização'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'hashtag-research-tool',
    name: 'Ferramenta de Pesquisa de Hashtags',
    description: 'Análise avançada de hashtags',
    category: 'social',
    icon: Hash,
    color: 'bg-blue-500',
    features: ['Trending hashtags', 'Análise de volume', 'Sugestões', 'Performance'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'social-media-automation',
    name: 'Automação de Redes Sociais',
    description: 'Sistema para automação de posts e engajamento',
    category: 'social',
    icon: Bot,
    color: 'bg-purple-600',
    features: ['Auto-posting', 'Respostas automáticas', 'Follow/Unfollow', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'competitor-analysis-tool',
    name: 'Análise de Concorrentes Sociais',
    description: 'Ferramenta para analisar competidores',
    category: 'social',
    icon: Eye,
    color: 'bg-gray-600',
    features: ['Monitoramento', 'Comparações', 'Estratégias', 'Benchmarks'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'social-media-roi-tracker',
    name: 'Rastreador de ROI Social',
    description: 'Sistema para medir retorno de investimento',
    category: 'social',
    icon: TrendingUp,
    color: 'bg-green-500',
    features: ['ROI', 'Conversões', 'Attribution', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'crisis-management-platform',
    name: 'Plataforma de Gestão de Crises',
    description: 'Sistema para gerenciar crises nas redes sociais',
    category: 'social',
    icon: AlertTriangle,
    color: 'bg-red-600',
    features: ['Monitoramento', 'Alertas', 'Resposta rápida', 'Escalação'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'employee-advocacy-platform',
    name: 'Plataforma de Advocacia de Funcionários',
    description: 'Sistema para funcionários promoverem a empresa',
    category: 'social',
    icon: Users,
    color: 'bg-blue-700',
    features: ['Conteúdo aprovado', 'Gamificação', 'Alcance', 'Engajamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'social-commerce-platform',
    name: 'Plataforma de Social Commerce',
    description: 'Sistema para venda através das redes sociais',
    category: 'social',
    icon: ShoppingCart,
    color: 'bg-green-600',
    features: ['Catalogo social', 'Checkout', 'Influencers', 'Analytics'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'community-management-tool',
    name: 'Ferramenta de Gestão de Comunidades',
    description: 'Sistema para gerenciar comunidades online',
    category: 'social',
    icon: Users,
    color: 'bg-purple-700',
    features: ['Moderação', 'Engajamento', 'Eventos', 'Crescimento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'social-media-compliance',
    name: 'Compliance para Redes Sociais',
    description: 'Sistema para conformidade regulatória',
    category: 'social',
    icon: Shield,
    color: 'bg-red-700',
    features: ['Regulamentações', 'Aprovações', 'Arquivamento', 'Auditoria'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'viral-content-predictor',
    name: 'Preditor de Conteúdo Viral',
    description: 'IA para prever potencial viral do conteúdo',
    category: 'social',
    icon: Brain,
    color: 'bg-pink-600',
    features: ['IA preditiva', 'Score viral', 'Otimizações', 'Tendências'],
    stack: ['React', 'Supabase', 'AI', 'Tailwind CSS']
  },
  {
    id: 'social-media-asset-library',
    name: 'Biblioteca de Assets Sociais',
    description: 'Sistema para organizar conteúdo visual',
    category: 'social',
    icon: Image,
    color: 'bg-blue-600',
    features: ['Biblioteca', 'Tags', 'Busca', 'Compartilhamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'influencer-discovery-platform',
    name: 'Plataforma de Descoberta de Influencers',
    description: 'Sistema para encontrar influenciadores relevantes',
    category: 'social',
    icon: Search,
    color: 'bg-yellow-600',
    features: ['Busca avançada', 'Filtros', 'Métricas', 'Contato'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'social-media-training-platform',
    name: 'Plataforma de Treinamento Social',
    description: 'Sistema para capacitação em redes sociais',
    category: 'social',
    icon: Book,
    color: 'bg-indigo-500',
    features: ['Cursos', 'Certificações', 'Práticas', 'Avaliações'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'social-media-white-label',
    name: 'Plataforma White Label Social',
    description: 'Sistema personalizável para agências',
    category: 'social',
    icon: Layers,
    color: 'bg-gray-700',
    features: ['White label', 'Multi-cliente', 'Personalização', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'social-media-backup-tool',
    name: 'Ferramenta de Backup Social',
    description: 'Sistema para backup de conteúdo social',
    category: 'social',
    icon: Archive,
    color: 'bg-blue-800',
    features: ['Backup automático', 'Arquivamento', 'Recuperação', 'Compliance'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'social-media-approval-workflow',
    name: 'Workflow de Aprovação Social',
    description: 'Sistema para aprovação de conteúdo',
    category: 'social',
    icon: CheckCircle,
    color: 'bg-green-700',
    features: ['Workflow', 'Aprovações', 'Comentários', 'Versionamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'social-media-budget-tracker',
    name: 'Rastreador de Orçamento Social',
    description: 'Sistema para controle de gastos sociais',
    category: 'social',
    icon: DollarSign,
    color: 'bg-green-600',
    features: ['Orçamentos', 'Gastos', 'ROI', 'Alertas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'social-media-team-collaboration',
    name: 'Colaboração de Equipes Sociais',
    description: 'Sistema para trabalho em equipe',
    category: 'social',
    icon: Users,
    color: 'bg-purple-600',
    features: ['Colaboração', 'Tarefas', 'Chat', 'Permissões'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  }
];

// SaaS para E-commerce (30 templates)  
export const ecommerceTemplates: ProjectTemplate[] = [
  {
    id: 'online-store-builder',
    name: 'Construtor de Loja Online',
    description: 'Plataforma para criar lojas online completas',
    category: 'ecommerce',
    icon: Store,
    color: 'bg-orange-500',
    features: ['Builder drag-and-drop', 'Pagamentos', 'Gestão de estoque', 'SEO otimizado'],
    stack: ['React', 'Supabase', 'Stripe', 'Tailwind CSS']
  },
  {
    id: 'marketplace-platform',
    name: 'Plataforma de Marketplace',
    description: 'Sistema completo para criar marketplaces multi-vendor',
    category: 'ecommerce',
    icon: ShoppingCart,
    color: 'bg-red-600',
    features: ['Multi-vendedores', 'Comissões automáticas', 'Sistema de avaliações', 'Chat integrado'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'subscription-ecommerce',
    name: 'E-commerce de Assinaturas',
    description: 'Plataforma para vendas recorrentes',
    category: 'ecommerce',
    icon: Repeat,
    color: 'bg-purple-600',
    features: ['Assinaturas', 'Cobrança recorrente', 'Gestão de planos', 'Analytics'],
    stack: ['React', 'Supabase', 'Stripe', 'Tailwind CSS']
  },
  {
    id: 'dropshipping-platform',
    name: 'Plataforma de Dropshipping',
    description: 'Sistema para vendas sem estoque',
    category: 'ecommerce',
    icon: Package,
    color: 'bg-blue-600',
    features: ['Fornecedores', 'Importação de produtos', 'Automação de pedidos', 'Margens'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'digital-products-store',
    name: 'Loja de Produtos Digitais',
    description: 'Plataforma especializada em downloads',
    category: 'ecommerce',
    icon: Download,
    color: 'bg-green-600',
    features: ['Downloads seguros', 'DRM', 'Licenças', 'Entrega automática'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'fashion-ecommerce-platform',
    name: 'E-commerce de Moda',
    description: 'Plataforma especializada em roupas',
    category: 'ecommerce',
    icon: Shirt,
    color: 'bg-pink-600',
    features: ['Catálogo visual', 'Tamanhos', 'Cores', 'Lookbook'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'food-delivery-ecommerce',
    name: 'E-commerce de Delivery de Comida',
    description: 'Plataforma para pedidos de comida',
    category: 'ecommerce',
    icon: Utensils,
    color: 'bg-yellow-600',
    features: ['Cardápios', 'Restaurantes', 'Entregadores', 'Rastreamento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'electronics-ecommerce',
    name: 'E-commerce de Eletrônicos',
    description: 'Loja especializada em tecnologia',
    category: 'ecommerce',
    icon: Smartphone,
    color: 'bg-gray-600',
    features: ['Especificações técnicas', 'Comparações', 'Garantia', 'Suporte'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'handmade-marketplace',
    name: 'Marketplace de Artesanato',
    description: 'Plataforma para produtos artesanais',
    category: 'ecommerce',
    icon: Scissors,
    color: 'bg-brown-600',
    features: ['Artesãos', 'Produtos únicos', 'Histórias', 'Personalização'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'b2b-ecommerce-platform',
    name: 'E-commerce B2B',
    description: 'Plataforma para vendas corporativas',
    category: 'ecommerce',
    icon: Building,
    color: 'bg-blue-700',
    features: ['Catálogos B2B', 'Preços por volume', 'Aprovações', 'Crédito'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'automotive-parts-store',
    name: 'Loja de Peças Automotivas',
    description: 'E-commerce especializado em auto peças',
    category: 'ecommerce',
    icon: Car,
    color: 'bg-red-700',
    features: ['Compatibilidade veicular', 'Peças OEM', 'Instalação', 'Garantia'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'sports-equipment-store',
    name: 'Loja de Equipamentos Esportivos',
    description: 'E-commerce para artigos esportivos',
    category: 'ecommerce',
    icon: Trophy,
    color: 'bg-green-700',
    features: ['Modalidades', 'Tamanhos', 'Marcas', 'Performance'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'beauty-ecommerce-platform',
    name: 'E-commerce de Beleza',
    description: 'Plataforma para cosméticos e beleza',
    category: 'ecommerce',
    icon: Sparkles,
    color: 'bg-pink-500',
    features: ['Try-on virtual', 'Tons de pele', 'Tutoriais', 'Ingredientes'],
    stack: ['React', 'Supabase', 'AR', 'Tailwind CSS']
  },
  {
    id: 'book-ecommerce-platform',
    name: 'Livraria Online',
    description: 'E-commerce especializado em livros',
    category: 'ecommerce',
    icon: Book,
    color: 'bg-brown-500',
    features: ['Catálogo', 'Resenhas', 'Recomendações', 'E-books'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'pet-products-store',
    name: 'Loja de Produtos Pet',
    description: 'E-commerce para produtos de animais',
    category: 'ecommerce',
    icon: Heart,
    color: 'bg-orange-600',
    features: ['Espécies', 'Idades', 'Ração', 'Veterinário'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'jewelry-ecommerce',
    name: 'E-commerce de Joias',
    description: 'Plataforma para joias e acessórios',
    category: 'ecommerce',
    icon: Gem,
    color: 'bg-yellow-500',
    features: ['Materiais preciosos', '360°', 'Certificados', 'Personalização'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'furniture-ecommerce',
    name: 'E-commerce de Móveis',
    description: 'Loja online de móveis e decoração',
    category: 'ecommerce',
    icon: Sofa,
    color: 'bg-brown-700',
    features: ['Realidade aumentada', 'Medidas', 'Ambientes', 'Montagem'],
    stack: ['React', 'Supabase', 'AR', 'Tailwind CSS']
  },
  {
    id: 'gaming-ecommerce',
    name: 'E-commerce de Games',
    description: 'Loja especializada em jogos',
    category: 'ecommerce',
    icon: Gamepad,
    color: 'bg-purple-700',
    features: ['Jogos digitais', 'Plataformas', 'DLCs', 'Reviews'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'health-supplements-store',
    name: 'Loja de Suplementos',
    description: 'E-commerce para suplementos alimentares',
    category: 'ecommerce',
    icon: Pill,
    color: 'bg-green-500',
    features: ['Suplementos', 'Composição', 'Prescrições', 'Consultoria'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'wine-ecommerce-platform',
    name: 'E-commerce de Vinhos',
    description: 'Loja especializada em vinhos',
    category: 'ecommerce',
    icon: Wine,
    color: 'bg-red-800',
    features: ['Vinícolas', 'Safras', 'Harmonização', 'Adega virtual'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'plants-ecommerce',
    name: 'E-commerce de Plantas',
    description: 'Loja online de plantas e jardinagem',
    category: 'ecommerce',
    icon: Leaf,
    color: 'bg-green-600',
    features: ['Plantas', 'Cuidados', 'Vasos', 'Consultoria'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'vintage-marketplace',
    name: 'Marketplace Vintage',
    description: 'Plataforma para itens vintage e antiguidades',
    category: 'ecommerce',
    icon: Clock,
    color: 'bg-amber-600',
    features: ['Autenticidade', 'História', 'Colecionadores', 'Leilões'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'kids-toys-store',
    name: 'Loja de Brinquedos',
    description: 'E-commerce especializado em brinquedos infantis',
    category: 'ecommerce',
    icon: Baby,
    color: 'bg-yellow-400',
    features: ['Idades', 'Desenvolvimento', 'Segurança', 'Educativo'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'art-supplies-store',
    name: 'Loja de Material Artístico',
    description: 'E-commerce para materiais de arte',
    category: 'ecommerce',
    icon: Palette,
    color: 'bg-rainbow',
    features: ['Técnicas', 'Qualidade', 'Projetos', 'Tutoriais'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'eco-friendly-store',
    name: 'Loja Sustentável',
    description: 'E-commerce de produtos ecológicos',
    category: 'ecommerce',
    icon: Leaf,
    color: 'bg-green-700',
    features: ['Sustentabilidade', 'Certificações', 'Impacto', 'Educação'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'luxury-goods-platform',
    name: 'Plataforma de Artigos de Luxo',
    description: 'E-commerce para produtos premium',
    category: 'ecommerce',
    icon: Crown,
    color: 'bg-gold-600',
    features: ['Exclusividade', 'Autenticação', 'Concierge', 'VIP'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'local-marketplace',
    name: 'Marketplace Local',
    description: 'Plataforma para comércio local',
    category: 'ecommerce',
    icon: Map,
    color: 'bg-blue-500',
    features: ['Geolocalização', 'Comerciantes locais', 'Entrega próxima', 'Comunidade'],
    stack: ['React', 'Supabase', 'Maps', 'Tailwind CSS']
  },
  {
    id: 'rental-marketplace',
    name: 'Marketplace de Aluguel',
    description: 'Plataforma para aluguel de produtos',
    category: 'ecommerce',
    icon: Calendar,
    color: 'bg-purple-500',
    features: ['Aluguel temporário', 'Disponibilidade', 'Seguro', 'Devolução'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'wholesale-platform',
    name: 'Plataforma de Atacado',
    description: 'E-commerce para vendas no atacado',
    category: 'ecommerce',
    icon: Package,
    color: 'bg-orange-700',
    features: ['Volumes mínimos', 'Preços escalonados', 'B2B', 'Logística'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'flash-sales-platform',
    name: 'Plataforma de Ofertas Relâmpago',
    description: 'E-commerce focado em vendas rápidas',
    category: 'ecommerce',
    icon: Zap,
    color: 'bg-yellow-600',
    features: ['Ofertas limitadas', 'Countdown', 'Estoque limitado', 'Notificações'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  }
];

// SaaS para Marketing (30 templates)
export const marketingTemplates: ProjectTemplate[] = [
  {
    id: 'email-marketing-tool',
    name: 'Ferramenta de Email Marketing',
    description: 'Plataforma completa para campanhas de email marketing',
    category: 'marketing',
    icon: Send,
    color: 'bg-pink-500',
    features: ['Editor de emails', 'Automação', 'Segmentação', 'Analytics'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'social-media-scheduler',
    name: 'Agendador de Redes Sociais',
    description: 'Sistema para agendar posts em múltiplas redes sociais',
    category: 'marketing',
    icon: Calendar,
    color: 'bg-blue-500',
    features: ['Múltiplas redes', 'Editor de conteúdo', 'Analytics', 'Calendário visual'],
    stack: ['React', 'Supabase', 'Social APIs', 'Tailwind CSS']
  },
  {
    id: 'landing-page-builder',
    name: 'Construtor de Landing Pages',
    description: 'Ferramenta para criar páginas de conversão',
    category: 'marketing',
    icon: Globe,
    color: 'bg-green-600',
    features: ['Drag & drop', 'Templates', 'A/B testing', 'Conversões'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'marketing-automation-platform',
    name: 'Plataforma de Automação de Marketing',
    description: 'Sistema completo de automação',
    category: 'marketing',
    icon: Zap,
    color: 'bg-purple-600',
    features: ['Workflows', 'Lead scoring', 'Nurturing', 'Attribution'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'affiliate-marketing-system',
    name: 'Sistema de Marketing de Afiliados',
    description: 'Plataforma para gerenciar programas de afiliados',
    category: 'marketing',
    icon: Users,
    color: 'bg-orange-600',
    features: ['Afiliados', 'Comissões', 'Tracking', 'Pagamentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'content-marketing-platform',
    name: 'Plataforma de Marketing de Conteúdo',
    description: 'Sistema para gestão de conteúdo marketing',
    category: 'marketing',
    icon: FileText,
    color: 'bg-blue-700',
    features: ['Calendário editorial', 'SEO', 'Distribuição', 'Performance'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'influencer-marketing-platform',
    name: 'Plataforma de Marketing de Influencers',
    description: 'Sistema para campanhas com influenciadores',
    category: 'marketing',
    icon: Star,
    color: 'bg-yellow-500',
    features: ['Discovery', 'Campanhas', 'Contratos', 'ROI'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'sms-marketing-tool',
    name: 'Ferramenta de SMS Marketing',
    description: 'Plataforma para campanhas por SMS',
    category: 'marketing',
    icon: MessageSquare,
    color: 'bg-green-500',
    features: ['Campanhas SMS', 'Automação', 'Segmentação', 'Delivery reports'],
    stack: ['React', 'Supabase', 'SMS API', 'Tailwind CSS']
  },
  {
    id: 'webinar-marketing-platform',
    name: 'Plataforma de Marketing com Webinars',
    description: 'Sistema para webinars de marketing',
    category: 'marketing',
    icon: Video,
    color: 'bg-red-600',
    features: ['Webinars ao vivo', 'Inscrições', 'Follow-up', 'Conversões'],
    stack: ['React', 'Supabase', 'WebRTC', 'Tailwind CSS']
  },
  {
    id: 'referral-marketing-system',
    name: 'Sistema de Marketing de Indicação',
    description: 'Plataforma para programas de indicação',
    category: 'marketing',
    icon: Share,
    color: 'bg-indigo-600',
    features: ['Referrals', 'Recompensas', 'Tracking', 'Viral loops'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'loyalty-program-platform',
    name: 'Plataforma de Programa de Fidelidade',
    description: 'Sistema para programas de lealdade',
    category: 'marketing',
    icon: Gift,
    color: 'bg-pink-600',
    features: ['Pontos', 'Recompensas', 'Níveis', 'Gamificação'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'survey-marketing-tool',
    name: 'Ferramenta de Pesquisa de Marketing',
    description: 'Sistema para pesquisas e feedback',
    category: 'marketing',
    icon: CheckSquare,
    color: 'bg-blue-600',
    features: ['Pesquisas', 'NPS', 'Feedback', 'Insights'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'video-marketing-platform',
    name: 'Plataforma de Video Marketing',
    description: 'Sistema para marketing com vídeos',
    category: 'marketing',
    icon: PlayCircle,
    color: 'bg-red-500',
    features: ['Video hosting', 'Analytics', 'CTAs', 'Personalização'],
    stack: ['React', 'Supabase', 'Video.js', 'Tailwind CSS']
  },
  {
    id: 'chatbot-marketing-platform',
    name: 'Plataforma de Chatbot Marketing',
    description: 'Sistema de chatbots para marketing',
    category: 'marketing',
    icon: MessageCircle,
    color: 'bg-purple-500',
    features: ['Chatbots', 'Automação', 'Conversas', 'Lead capture'],
    stack: ['React', 'Supabase', 'AI', 'Tailwind CSS']
  },
  {
    id: 'event-marketing-platform',
    name: 'Plataforma de Marketing de Eventos',
    description: 'Sistema para promoção de eventos',
    category: 'marketing',
    icon: Calendar,
    color: 'bg-green-700',
    features: ['Eventos', 'Inscrições', 'Networking', 'Follow-up'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'podcast-marketing-tool',
    name: 'Ferramenta de Marketing para Podcasts',
    description: 'Sistema para promocionar podcasts',
    category: 'marketing',
    icon: Mic,
    color: 'bg-orange-500',
    features: ['Episódios', 'Distribuição', 'Analytics', 'Monetização'],
    stack: ['React', 'Supabase', 'Audio', 'Tailwind CSS']
  },
  {
    id: 'growth-hacking-platform',
    name: 'Plataforma de Growth Hacking',
    description: 'Sistema para experimentos de crescimento',
    category: 'marketing',
    icon: TrendingUp,
    color: 'bg-green-600',
    features: ['Experimentos', 'A/B tests', 'Métricas', 'Insights'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'conversion-optimization-tool',
    name: 'Ferramenta de Otimização de Conversão',
    description: 'Sistema para melhorar conversões',
    category: 'marketing',
    icon: Target,
    color: 'bg-red-600',
    features: ['Heatmaps', 'A/B testing', 'Funnels', 'Otimização'],
    stack: ['React', 'Supabase', 'Analytics', 'Tailwind CSS']
  },
  {
    id: 'customer-journey-mapper',
    name: 'Mapeador de Jornada do Cliente',
    description: 'Sistema para mapear jornadas de clientes',
    category: 'marketing',
    icon: Map,
    color: 'bg-blue-800',
    features: ['Jornadas', 'Touchpoints', 'Personas', 'Otimização'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'marketing-attribution-platform',
    name: 'Plataforma de Atribuição de Marketing',
    description: 'Sistema para atribuição de conversões',
    category: 'marketing',
    icon: BarChart,
    color: 'bg-purple-700',
    features: ['Attribution models', 'ROI', 'Canais', 'Analytics'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'personalization-engine',
    name: 'Motor de Personalização',
    description: 'Sistema para personalização de experiências',
    category: 'marketing',
    icon: User,
    color: 'bg-indigo-700',
    features: ['Personalização', 'Segmentação', 'Recommendations', 'AI'],
    stack: ['React', 'Supabase', 'AI', 'Tailwind CSS']
  },
  {
    id: 'competitive-intelligence-tool',
    name: 'Ferramenta de Inteligência Competitiva',
    description: 'Sistema para monitorar concorrentes',
    category: 'marketing',
    icon: Eye,
    color: 'bg-gray-700',
    features: ['Monitoramento', 'Preços', 'Campanhas', 'Insights'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'marketing-budget-optimizer',
    name: 'Otimizador de Orçamento de Marketing',
    description: 'Sistema para otimizar gastos de marketing',
    category: 'marketing',
    icon: DollarSign,
    color: 'bg-green-500',
    features: ['Orçamentos', 'ROI', 'Otimização', 'Previsões'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'brand-monitoring-platform',
    name: 'Plataforma de Monitoramento de Marca',
    description: 'Sistema para monitorar menções da marca',
    category: 'marketing',
    icon: Shield,
    color: 'bg-blue-700',
    features: ['Monitoramento', 'Sentimentos', 'Alertas', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'marketing-workflow-automation',
    name: 'Automação de Workflows de Marketing',
    description: 'Sistema para automatizar processos',
    category: 'marketing',
    icon: Settings,
    color: 'bg-gray-600',
    features: ['Workflows', 'Automação', 'Triggers', 'Integrations'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'customer-feedback-platform',
    name: 'Plataforma de Feedback de Clientes',
    description: 'Sistema para coletar feedback',
    category: 'marketing',
    icon: MessageSquare,
    color: 'bg-yellow-600',
    features: ['Feedback', 'Reviews', 'NPS', 'Insights'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'marketing-resource-library',
    name: 'Biblioteca de Recursos de Marketing',
    description: 'Sistema para organizar assets de marketing',
    category: 'marketing',
    icon: Archive,
    color: 'bg-brown-600',
    features: ['Assets', 'Templates', 'Brand guidelines', 'Sharing'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'lead-generation-platform',
    name: 'Plataforma de Geração de Leads',
    description: 'Sistema para capturar e qualificar leads',
    category: 'marketing',
    icon: Target,
    color: 'bg-red-700',
    features: ['Lead capture', 'Qualification', 'Scoring', 'Nurturing'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'marketing-calendar-platform',
    name: 'Calendário de Marketing',
    description: 'Sistema para planejamento de campanhas',
    category: 'marketing',
    icon: Calendar,
    color: 'bg-purple-600',
    features: ['Calendário', 'Campanhas', 'Colaboração', 'Timeline'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'customer-segmentation-tool',
    name: 'Ferramenta de Segmentação de Clientes',
    description: 'Sistema para segmentar audiências',
    category: 'marketing',
    icon: Users,
    color: 'bg-teal-600',
    features: ['Segmentação', 'Personas', 'Behaviors', 'Targeting'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  }
];

// SaaS para Finanças (60 templates)
export const financeTemplates: ProjectTemplate[] = [
  {
    id: 'personal-finance-tracker',
    name: 'Controle Financeiro Pessoal',
    description: 'App para controle de finanças pessoais',
    category: 'finance',
    icon: DollarSign,
    color: 'bg-green-600',
    features: ['Despesas', 'Receitas', 'Metas', 'Investimentos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'business-accounting-software',
    name: 'Software de Contabilidade Empresarial',
    description: 'Sistema completo de contabilidade',
    category: 'finance',
    icon: Calculator,
    color: 'bg-blue-600',
    features: ['Livro caixa', 'DRE', 'Balanço', 'Impostos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'invoice-management-system',
    name: 'Sistema de Gestão de Faturas',
    description: 'Plataforma para criar e gerenciar faturas',
    category: 'finance',
    icon: FileText,
    color: 'bg-purple-600',
    features: ['Criação de faturas', 'Cobrança', 'Relatórios', 'Integração bancária'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'expense-management-platform',
    name: 'Plataforma de Gestão de Despesas',
    description: 'Sistema para controle de despesas corporativas',
    category: 'finance',
    icon: Receipt,
    color: 'bg-orange-600',
    features: ['Reembolsos', 'Aprovações', 'Categorização', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'investment-portfolio-tracker',
    name: 'Rastreador de Portfólio de Investimentos',
    description: 'Sistema para acompanhar investimentos',
    category: 'finance',
    icon: TrendingUp,
    color: 'bg-green-700',
    features: ['Carteira', 'Performance', 'Dividendos', 'Rebalanceamento'],
    stack: ['React', 'Supabase', 'Financial APIs', 'Tailwind CSS']
  },
  {
    id: 'budgeting-app',
    name: 'Aplicativo de Orçamento',
    description: 'App para planejamento orçamentário',
    category: 'finance',
    icon: PieChart,
    color: 'bg-blue-500',
    features: ['Orçamentos', 'Categorias', 'Alertas', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'payroll-management-system',
    name: 'Sistema de Gestão de Folha de Pagamento',
    description: 'Plataforma para folha de pagamento',
    category: 'finance',
    icon: Users,
    color: 'bg-gray-600',
    features: ['Salários', 'Benefícios', 'Impostos', 'Holerites'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'tax-preparation-software',
    name: 'Software de Preparação de Impostos',
    description: 'Sistema para cálculo de impostos',
    category: 'finance',
    icon: Calculator,
    color: 'bg-red-600',
    features: ['IR', 'IRPJ', 'Simples Nacional', 'Declarações'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'financial-planning-tool',
    name: 'Ferramenta de Planejamento Financeiro',
    description: 'Sistema para planejamento financeiro',
    category: 'finance',
    icon: Target,
    color: 'bg-purple-500',
    features: ['Metas', 'Simulações', 'Aposentadoria', 'Cenários'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'cashflow-management',
    name: 'Gestão de Fluxo de Caixa',
    description: 'Sistema para controle de fluxo de caixa',
    category: 'finance',
    icon: TrendingUp,
    color: 'bg-green-500',
    features: ['Entradas', 'Saídas', 'Projeções', 'DFC'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'debt-management-platform',
    name: 'Plataforma de Gestão de Dívidas',
    description: 'Sistema para controle de dívidas',
    category: 'finance',
    icon: CreditCard,
    color: 'bg-red-500',
    features: ['Dívidas', 'Pagamentos', 'Juros', 'Quitação'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'cryptocurrency-tracker',
    name: 'Rastreador de Criptomoedas',
    description: 'Sistema para acompanhar criptomoedas',
    category: 'finance',
    icon: Bitcoin,
    color: 'bg-yellow-500',
    features: ['Portfolio crypto', 'Preços', 'Alerts', 'Trading'],
    stack: ['React', 'Supabase', 'Crypto APIs', 'Tailwind CSS']
  },
  {
    id: 'financial-dashboard',
    name: 'Dashboard Financeiro',
    description: 'Painel de controle financeiro',
    category: 'finance',
    icon: BarChart,
    color: 'bg-blue-700',
    features: ['KPIs', 'Gráficos', 'Relatórios', 'Insights'],
    stack: ['React', 'Supabase', 'Charts', 'Tailwind CSS']
  },
  {
    id: 'loan-management-system',
    name: 'Sistema de Gestão de Empréstimos',
    description: 'Plataforma para gestão de empréstimos',
    category: 'finance',
    icon: HandCoins,
    color: 'bg-orange-500',
    features: ['Empréstimos', 'Parcelas', 'Juros', 'Amortização'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'insurance-management',
    name: 'Gestão de Seguros',
    description: 'Sistema para gestão de apólices',
    category: 'finance',
    icon: Shield,
    color: 'bg-blue-600',
    features: ['Apólices', 'Prêmios', 'Sinistros', 'Renovações'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'financial-advisory-platform',
    name: 'Plataforma de Consultoria Financeira',
    description: 'Sistema para consultores financeiros',
    category: 'finance',
    icon: Users,
    color: 'bg-indigo-600',
    features: ['Clientes', 'Portfólios', 'Recomendações', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'mortgage-calculator',
    name: 'Calculadora de Financiamento',
    description: 'Sistema para cálculo de financiamentos',
    category: 'finance',
    icon: Home,
    color: 'bg-green-600',
    features: ['Simulações', 'Tabela Price', 'SAC', 'Amortização'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'retirement-planning-tool',
    name: 'Ferramenta de Planejamento de Aposentadoria',
    description: 'Sistema para planejar aposentadoria',
    category: 'finance',
    icon: Calendar,
    color: 'bg-purple-700',
    features: ['Previdência', 'Simulações', 'Contribuições', 'Benefícios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'financial-literacy-platform',
    name: 'Plataforma de Educação Financeira',
    description: 'Sistema para ensino de finanças',
    category: 'finance',
    icon: Book,
    color: 'bg-blue-500',
    features: ['Cursos', 'Simuladores', 'Quizzes', 'Certificados'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'bank-reconciliation-tool',
    name: 'Ferramenta de Conciliação Bancária',
    description: 'Sistema para conciliação de extratos',
    category: 'finance',
    icon: CheckSquare,
    color: 'bg-green-500',
    features: ['Extratos', 'Conciliação', 'Diferenças', 'Automação'],
    stack: ['React', 'Supabase', 'Banking APIs', 'Tailwind CSS']
  }
];

// SaaS para Tecnologia (40 templates)
export const technologyTemplates: ProjectTemplate[] = [
  {
    id: 'api-management-platform',
    name: 'Plataforma de Gestão de APIs',
    description: 'Sistema para gerenciar e monitorar APIs',
    category: 'technology',
    icon: Code,
    color: 'bg-blue-600',
    features: ['API Gateway', 'Monitoramento', 'Documentação', 'Rate limiting'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'cloud-monitoring-dashboard',
    name: 'Dashboard de Monitoramento de Nuvem',
    description: 'Painel para monitorar infraestrutura',
    category: 'technology',
    icon: Cloud,
    color: 'bg-sky-600',
    features: ['Métricas', 'Alertas', 'Logs', 'Performance'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'database-backup-manager',
    name: 'Gerenciador de Backup de Banco',
    description: 'Sistema para backup automatizado',
    category: 'technology',
    icon: Database,
    color: 'bg-green-600',
    features: ['Backups automáticos', 'Restore', 'Agendamento', 'Monitoramento'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'server-monitoring-tool',
    name: 'Ferramenta de Monitoramento de Servidores',
    description: 'Sistema para monitorar servidores',
    category: 'technology',
    icon: Server,
    color: 'bg-gray-600',
    features: ['CPU', 'Memória', 'Disco', 'Rede'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'log-analysis-platform',
    name: 'Plataforma de Análise de Logs',
    description: 'Sistema para análise de logs',
    category: 'technology',
    icon: FileText,
    color: 'bg-yellow-600',
    features: ['Coleta de logs', 'Busca', 'Alertas', 'Dashboards'],
    stack: ['React', 'Supabase', 'Elasticsearch', 'Tailwind CSS']
  },
  {
    id: 'devops-pipeline-manager',
    name: 'Gerenciador de Pipeline DevOps',
    description: 'Sistema para CI/CD pipelines',
    category: 'technology',
    icon: GitBranch,
    color: 'bg-orange-600',
    features: ['CI/CD', 'Deploy', 'Testing', 'Monitoring'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'code-review-platform',
    name: 'Plataforma de Code Review',
    description: 'Sistema para revisão de código',
    category: 'technology',
    icon: Code,
    color: 'bg-purple-600',
    features: ['Pull requests', 'Comments', 'Approval', 'Metrics'],
    stack: ['React', 'Supabase', 'Git APIs', 'Tailwind CSS']
  },
  {
    id: 'vulnerability-scanner',
    name: 'Scanner de Vulnerabilidades',
    description: 'Sistema para análise de segurança',
    category: 'technology',
    icon: Shield,
    color: 'bg-red-600',
    features: ['Scan automático', 'Vulnerabilidades', 'Relatórios', 'Remediation'],
    stack: ['React', 'Supabase', 'Security APIs', 'Tailwind CSS']
  },
  {
    id: 'container-orchestration-dashboard',
    name: 'Dashboard de Orquestração de Containers',
    description: 'Painel para gerenciar containers',
    category: 'technology',
    icon: Package,
    color: 'bg-blue-700',
    features: ['Kubernetes', 'Docker', 'Pods', 'Services'],
    stack: ['React', 'Supabase', 'K8s APIs', 'Tailwind CSS']
  },
  {
    id: 'microservices-manager',
    name: 'Gerenciador de Microserviços',
    description: 'Sistema para gestão de microserviços',
    category: 'technology',
    icon: Layers,
    color: 'bg-indigo-600',
    features: ['Service mesh', 'Discovery', 'Load balancing', 'Monitoring'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'performance-testing-platform',
    name: 'Plataforma de Teste de Performance',
    description: 'Sistema para testes de carga',
    category: 'technology',
    icon: Zap,
    color: 'bg-yellow-500',
    features: ['Load testing', 'Stress testing', 'Métricas', 'Relatórios'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'infrastructure-as-code-manager',
    name: 'Gerenciador de Infraestrutura como Código',
    description: 'Sistema para IaC',
    category: 'technology',
    icon: Settings,
    color: 'bg-green-700',
    features: ['Terraform', 'CloudFormation', 'Versioning', 'Deploy'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'network-monitoring-tool',
    name: 'Ferramenta de Monitoramento de Rede',
    description: 'Sistema para monitorar redes',
    category: 'technology',
    icon: Wifi,
    color: 'bg-blue-500',
    features: ['Latência', 'Throughput', 'Topologia', 'Alertas'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'ssl-certificate-manager',
    name: 'Gerenciador de Certificados SSL',
    description: 'Sistema para gestão de certificados',
    category: 'technology',
    icon: Lock,
    color: 'bg-green-600',
    features: ['Certificados', 'Renovação', 'Alertas', 'Monitoring'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'dns-management-platform',
    name: 'Plataforma de Gestão de DNS',
    description: 'Sistema para gerenciar DNS',
    category: 'technology',
    icon: Globe,
    color: 'bg-blue-600',
    features: ['Registros DNS', 'Zones', 'Health checks', 'Analytics'],
    stack: ['React', 'Supabase', 'DNS APIs', 'Tailwind CSS']
  },
  {
    id: 'incident-management-system',
    name: 'Sistema de Gestão de Incidentes',
    description: 'Plataforma para gestão de incidentes',
    category: 'technology',
    icon: AlertTriangle,
    color: 'bg-red-500',
    features: ['Incidentes', 'Escalation', 'Timeline', 'Post-mortem'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'capacity-planning-tool',
    name: 'Ferramenta de Planejamento de Capacidade',
    description: 'Sistema para planejamento de recursos',
    category: 'technology',
    icon: BarChart,
    color: 'bg-purple-500',
    features: ['Previsões', 'Utilização', 'Scaling', 'Custos'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'configuration-management-platform',
    name: 'Plataforma de Gestão de Configuração',
    description: 'Sistema para CMDB',
    category: 'technology',
    icon: Settings,
    color: 'bg-gray-600',
    features: ['CMDB', 'Assets', 'Dependencies', 'Change tracking'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'automated-testing-platform',
    name: 'Plataforma de Testes Automatizados',
    description: 'Sistema para automação de testes',
    category: 'technology',
    icon: CheckCircle,
    color: 'bg-green-500',
    features: ['Test automation', 'Selenium', 'Reports', 'Scheduling'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'cloud-cost-optimizer',
    name: 'Otimizador de Custos de Nuvem',
    description: 'Sistema para otimizar custos cloud',
    category: 'technology',
    icon: DollarSign,
    color: 'bg-green-600',
    features: ['Cost analysis', 'Recommendations', 'Budgets', 'Alerts'],
    stack: ['React', 'Supabase', 'Cloud APIs', 'Tailwind CSS']
  },
  {
    id: 'deployment-automation-tool',
    name: 'Ferramenta de Automação de Deploy',
    description: 'Sistema para deploys automatizados',
    category: 'technology',
    icon: Rocket,
    color: 'bg-orange-500',
    features: ['Automated deployment', 'Rollback', 'Blue-green', 'Canary'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'secret-management-platform',
    name: 'Plataforma de Gestão de Secrets',
    description: 'Sistema para gerenciar credenciais',
    category: 'technology',
    icon: Key,
    color: 'bg-red-700',
    features: ['Secrets', 'Encryption', 'Rotation', 'Access control'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'service-mesh-dashboard',
    name: 'Dashboard de Service Mesh',
    description: 'Painel para service mesh',
    category: 'technology',
    icon: Network,
    color: 'bg-blue-700',
    features: ['Istio', 'Traffic management', 'Security', 'Observability'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'data-pipeline-manager',
    name: 'Gerenciador de Pipeline de Dados',
    description: 'Sistema para ETL/ELT',
    category: 'technology',
    icon: Database,
    color: 'bg-purple-600',
    features: ['ETL', 'Data flows', 'Scheduling', 'Monitoring'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'api-testing-platform',
    name: 'Plataforma de Teste de APIs',
    description: 'Sistema para testar APIs',
    category: 'technology',
    icon: TestTube,
    color: 'bg-green-600',
    features: ['API testing', 'Mock servers', 'Load testing', 'Documentation'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'feature-flag-manager',
    name: 'Gerenciador de Feature Flags',
    description: 'Sistema para feature toggles',
    category: 'technology',
    icon: Flag,
    color: 'bg-yellow-600',
    features: ['Feature flags', 'A/B testing', 'Rollout', 'Analytics'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'observability-platform',
    name: 'Plataforma de Observabilidade',
    description: 'Sistema para observabilidade completa',
    category: 'technology',
    icon: Eye,
    color: 'bg-indigo-600',
    features: ['Metrics', 'Traces', 'Logs', 'Alerts'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'chaos-engineering-tool',
    name: 'Ferramenta de Chaos Engineering',
    description: 'Sistema para testes de resiliência',
    category: 'technology',
    icon: Zap,
    color: 'bg-red-600',
    features: ['Chaos experiments', 'Fault injection', 'Monitoring', 'Reports'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'cloud-migration-planner',
    name: 'Planejador de Migração para Nuvem',
    description: 'Sistema para planejar migrações',
    category: 'technology',
    icon: Cloud,
    color: 'bg-sky-500',
    features: ['Assessment', 'Planning', 'Cost estimation', 'Timeline'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'kubernetes-cluster-manager',
    name: 'Gerenciador de Cluster Kubernetes',
    description: 'Sistema para gestão de K8s',
    category: 'technology',
    icon: Layers,
    color: 'bg-blue-800',
    features: ['Cluster management', 'Workloads', 'RBAC', 'Monitoring'],
    stack: ['React', 'Supabase', 'K8s APIs', 'Tailwind CSS']
  },
  {
    id: 'gitops-platform',
    name: 'Plataforma GitOps',
    description: 'Sistema para GitOps workflows',
    category: 'technology',
    icon: GitBranch,
    color: 'bg-orange-600',
    features: ['GitOps', 'ArgoCD', 'Flux', 'Automation'],
    stack: ['React', 'Supabase', 'Git APIs', 'Tailwind CSS']
  },
  {
    id: 'artifact-repository-manager',
    name: 'Gerenciador de Repositório de Artefatos',
    description: 'Sistema para gestão de artefatos',
    category: 'technology',
    icon: Package,
    color: 'bg-brown-600',
    features: ['Artifacts', 'Repositories', 'Security scanning', 'Cleanup'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'infrastructure-compliance-checker',
    name: 'Verificador de Compliance de Infraestrutura',
    description: 'Sistema para verificar conformidade',
    category: 'technology',
    icon: Shield,
    color: 'bg-red-700',
    features: ['Compliance rules', 'Scanning', 'Reports', 'Remediation'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'environment-provisioning-tool',
    name: 'Ferramenta de Provisionamento de Ambientes',
    description: 'Sistema para criar ambientes',
    category: 'technology',
    icon: Settings,
    color: 'bg-green-700',
    features: ['Self-service', 'Templates', 'Automation', 'Lifecycle'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'dependency-tracking-system',
    name: 'Sistema de Rastreamento de Dependências',
    description: 'Sistema para gerenciar dependências',
    category: 'technology',
    icon: Network,
    color: 'bg-purple-700',
    features: ['Dependencies', 'Vulnerabilities', 'Updates', 'Licenses'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'service-catalog-platform',
    name: 'Plataforma de Catálogo de Serviços',
    description: 'Sistema para catálogo de serviços',
    category: 'technology',
    icon: BookOpen,
    color: 'bg-blue-600',
    features: ['Service catalog', 'Self-service', 'Approval workflow', 'CMDB'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'release-management-platform',
    name: 'Plataforma de Gestão de Releases',
    description: 'Sistema para gerenciar releases',
    category: 'technology',
    icon: Rocket,
    color: 'bg-orange-600',
    features: ['Release planning', 'Coordination', 'Rollback', 'Communication'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'disaster-recovery-planner',
    name: 'Planejador de Recuperação de Desastres',
    description: 'Sistema para DR planning',
    category: 'technology',
    icon: Shield,
    color: 'bg-red-600',
    features: ['DR plans', 'Testing', 'Documentation', 'Automation'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'cloud-governance-platform',
    name: 'Plataforma de Governança de Nuvem',
    description: 'Sistema para governança cloud',
    category: 'technology',
    icon: Crown,
    color: 'bg-purple-800',
    features: ['Policies', 'Compliance', 'Cost control', 'Security'],
    stack: ['React', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'technical-debt-tracker',
    name: 'Rastreador de Débito Técnico',
    description: 'Sistema para gerenciar débito técnico',
    category: 'technology',
    icon: AlertTriangle,
    color: 'bg-yellow-700',
    features: ['Debt tracking', 'Prioritization', 'Metrics', 'Planning'],
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
  { id: 'ecommerce', name: 'E-commerce', icon: Store },
  { id: 'marketing', name: 'Marketing', icon: TrendingUp },
  { id: 'finance', name: 'Finanças', icon: DollarSign },
  { id: 'technology', name: 'Tecnologia', icon: Code }
];

// Combine all templates
export const projectTemplates: ProjectTemplate[] = [
  ...healthTemplates,
  ...businessTemplates,
  ...deliveryTemplates,
  ...educationTemplates,
  ...socialTemplates,
  ...ecommerceTemplates,
  ...marketingTemplates,
  ...financeTemplates,
  ...technologyTemplates
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

