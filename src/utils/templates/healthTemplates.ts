import { Heart, Calendar, Pill, Activity, FileText, Users, Phone, Stethoscope, Brain, Shield, Bot, Dna, Smartphone, Watch, MessageSquare, Scan, TrendingUp, Gamepad2, Target, Zap, Baby, UserCheck, Smile, Eye, Database, Languages, Moon, Wind, DollarSign, Flask } from 'lucide-react';
import { ProjectTemplate } from '../projectTemplates';

export const healthTemplates: ProjectTemplate[] = [
  {
    id: 'telemedicine',
    name: 'Telemedicina',
    description: 'Plataforma para consultas médicas online',
    icon: Heart,
    complexity: 'hard',
    features: [
      'Consultas por vídeo',
      'Prescrições digitais',
      'Prontuário eletrônico',
      'Agendamento online',
      'Pagamento integrado',
      'Histórico médico'
    ]
  },
  {
    id: 'clinic-management',
    name: 'Gestão de Clínica',
    description: 'Sistema completo para gestão de clínicas médicas',
    icon: Calendar,
    complexity: 'medium',
    features: [
      'Agendamento de consultas',
      'Prontuário eletrônico',
      'Gestão financeira',
      'Controle de estoque',
      'Relatórios médicos',
      'Integração com laboratórios'
    ]
  },
  {
    id: 'pharmacy-system',
    name: 'Sistema de Farmácia',
    description: 'Gestão completa para farmácias e drogarias',
    icon: Pill,
    complexity: 'medium',
    features: [
      'Controle de medicamentos',
      'Prescrições eletrônicas',
      'Gestão de estoque',
      'Alertas de validade',
      'Sistema de vendas',
      'Relatórios regulatórios'
    ]
  },
  {
    id: 'fitness-tracker',
    name: 'Rastreador Fitness',
    description: 'Aplicativo para monitoramento de atividades físicas',
    icon: Activity,
    complexity: 'medium',
    features: [
      'Registro de exercícios',
      'Monitoramento de peso',
      'Planos de treino',
      'Contador de calorias',
      'Gráficos de progresso',
      'Integração com wearables'
    ]
  },
  {
    id: 'medical-records',
    name: 'Prontuário Eletrônico',
    description: 'Sistema seguro para gestão de prontuários médicos',
    icon: FileText,
    complexity: 'hard',
    features: [
      'Prontuários seguros',
      'Histórico médico completo',
      'Prescrições digitais',
      'Exames e laudos',
      'Compartilhamento seguro',
      'Backup automático'
    ]
  },
  {
    id: 'mental-health',
    name: 'Saúde Mental',
    description: 'Plataforma de apoio à saúde mental e bem-estar',
    icon: Brain,
    complexity: 'medium',
    features: [
      'Diário de humor',
      'Exercícios de mindfulness',
      'Chat com terapeutas',
      'Recursos educativos',
      'Monitoramento de progresso',
      'Comunidade de apoio'
    ]
  },
  {
    id: 'nutrition-tracker',
    name: 'Rastreador Nutricional',
    description: 'App para monitoramento de alimentação e nutrição',
    icon: Users,
    complexity: 'medium',
    features: [
      'Diário alimentar',
      'Contador de calorias',
      'Planos nutricionais',
      'Base de alimentos',
      'Relatórios nutricionais',
      'Metas personalizadas'
    ]
  },
  {
    id: 'emergency-system',
    name: 'Sistema de Emergência',
    description: 'Plataforma para gestão de emergências médicas',
    icon: Phone,
    complexity: 'hard',
    features: [
      'Alertas de emergência',
      'Localização GPS',
      'Contatos de emergência',
      'Histórico médico rápido',
      'Integração com SAMU',
      'Notificações automáticas'
    ]
  },
  {
    id: 'lab-management',
    name: 'Gestão Laboratorial',
    description: 'Sistema para laboratórios de análises clínicas',
    icon: Stethoscope,
    complexity: 'hard',
    features: [
      'Gestão de exames',
      'Resultados online',
      'Controle de qualidade',
      'Integração com equipamentos',
      'Relatórios automáticos',
      'Faturamento integrado'
    ]
  },
  {
    id: 'vaccine-tracker',
    name: 'Controle de Vacinas',
    description: 'Sistema para controle e agendamento de vacinas',
    icon: Shield,
    complexity: 'medium',
    features: [
      'Carteira de vacinação digital',
      'Agendamento de vacinas',
      'Alertas de doses',
      'Controle de estoque',
      'Relatórios epidemiológicos',
      'Certificados digitais'
    ]
  },
  {
    id: 'ai-diagnostics',
    name: 'Diagnóstico por IA',
    description: 'Sistema de diagnóstico assistido por inteligência artificial',
    icon: Brain,
    complexity: 'hard',
    features: [
      'Análise de imagens médicas',
      'Diagnóstico diferencial',
      'Aprendizado de máquina',
      'Precisão diagnóstica',
      'Integração com prontuários',
      'Validação clínica'
    ]
  },
  {
    id: 'robotic-surgery-assistant',
    name: 'Assistente Cirúrgico Robótico',
    description: 'Sistema robótico para assistência em cirurgias',
    icon: Bot,
    complexity: 'hard',
    features: [
      'Precisão cirúrgica',
      'Controle háptico',
      'Visualização 3D',
      'Planejamento pré-operatório',
      'Minimamente invasivo',
      'Teleoperation'
    ]
  },
  {
    id: 'genomic-analysis',
    name: 'Análise Genômica',
    description: 'Plataforma para análise de dados genômicos',
    icon: Dna,
    complexity: 'hard',
    features: [
      'Sequenciamento genético',
      'Análise de variantes',
      'Medicina de precisão',
      'Predisposição genética',
      'Farmacogenômica',
      'Aconselhamento genético'
    ]
  },
  {
    id: 'digital-therapeutics',
    name: 'Terapias Digitais',
    description: 'Intervenções terapêuticas baseadas em software',
    icon: Smartphone,
    complexity: 'hard',
    features: [
      'Terapia cognitiva digital',
      'Intervenções personalizadas',
      'Monitoramento de adesão',
      'Evidências clínicas',
      'Prescrição médica',
      'Integração com tratamento'
    ]
  },
  {
    id: 'wearable-health-monitoring',
    name: 'Monitoramento por Wearables',
    description: 'Plataforma integrada de dispositivos vestíveis de saúde',
    icon: Watch,
    complexity: 'hard',
    features: [
      'Múltiplos biosensores',
      'Monitoramento contínuo',
      'Alertas em tempo real',
      'Análise preditiva',
      'Integração clínica',
      'Dashboard de saúde'
    ]
  },
  {
    id: 'ai-drug-discovery',
    name: 'Descoberta de Medicamentos IA',
    description: 'Aceleração da descoberta de novos medicamentos com IA',
    icon: Pill,
    complexity: 'hard',
    features: [
      'Modelagem molecular',
      'Predição de atividade',
      'Otimização de compostos',
      'Análise de toxicidade',
      'Simulação de ensaios',
      'Pipeline de descoberta'
    ]
  },
  {
    id: 'virtual-reality-therapy',
    name: 'Terapia em Realidade Virtual',
    description: 'Tratamentos terapêuticos usando realidade virtual',
    icon: Headphones,
    complexity: 'hard',
    features: [
      'Terapia de exposição VR',
      'Reabilitação virtual',
      'Controle de dor',
      'Treinamento cognitivo',
      'Ambientes terapêuticos',
      'Monitoramento de progresso'
    ]
  },
  {
    id: 'personalized-nutrition',
    name: 'Nutrição Personalizada',
    description: 'Planos nutricionais baseados em dados individuais',
    icon: Apple,
    complexity: 'medium',
    features: [
      'Análise metabólica',
      'Genética nutricional',
      'Planos personalizados',
      'Tracking de alimentos',
      'Recomendações adaptativas',
      'Integração com wearables'
    ]
  },
  {
    id: 'mental-health-chatbot',
    name: 'Chatbot de Saúde Mental',
    description: 'Assistente de IA para apoio à saúde mental',
    icon: MessageSquare,
    complexity: 'hard',
    features: [
      'Conversação terapêutica',
      'Detecção de humor',
      'Intervenções preventivas',
      'Encaminhamento profissional',
      'Suporte 24/7',
      'Privacidade garantida'
    ]
  },
  {
    id: 'remote-patient-monitoring',
    name: 'Monitoramento Remoto de Pacientes',
    description: 'Sistema para acompanhamento de pacientes à distância',
    icon: Activity,
    complexity: 'hard',
    features: [
      'Sensores remotos',
      'Alertas médicos',
      'Dashboard clínico',
      'Comunicação paciente-médico',
      'Compliance de medicação',
      'Intervenções automáticas'
    ]
  },
  {
    id: 'medical-imaging-ai',
    name: 'IA para Imagens Médicas',
    description: 'Análise automatizada de imagens médicas',
    icon: Scan,
    complexity: 'hard',
    features: [
      'Detecção automática',
      'Segmentação de imagens',
      'Quantificação precisa',
      'Comparação temporal',
      'Relatórios automáticos',
      'Múltiplas modalidades'
    ]
  },
  {
    id: 'clinical-decision-support',
    name: 'Suporte à Decisão Clínica',
    description: 'Sistema de apoio às decisões médicas',
    icon: Brain,
    complexity: 'hard',
    features: [
      'Guidelines clínicos',
      'Alertas de segurança',
      'Recomendações de tratamento',
      'Análise de riscos',
      'Evidências científicas',
      'Integração com prontuários'
    ]
  },
  {
    id: 'epidemic-modeling',
    name: 'Modelagem Epidemiológica',
    description: 'Simulação e previsão de epidemias',
    icon: TrendingUp,
    complexity: 'hard',
    features: [
      'Modelos epidemiológicos',
      'Simulação de cenários',
      'Previsão de surtos',
      'Análise de intervenções',
      'Vigilância epidemiológica',
      'Dashboard público'
    ]
  },
  {
    id: 'rehabilitation-gaming',
    name: 'Reabilitação Gamificada',
    description: 'Jogos terapêuticos para reabilitação',
    icon: Gamepad2,
    complexity: 'medium',
    features: [
      'Exercícios gamificados',
      'Monitoramento de progresso',
      'Adaptação de dificuldade',
      'Motivação através de jogos',
      'Múltiplas especialidades',
      'Telereabilitação'
    ]
  },
  {
    id: 'precision-oncology',
    name: 'Oncologia de Precisão',
    description: 'Tratamento personalizado do câncer',
    icon: Target,
    complexity: 'hard',
    features: [
      'Análise genômica tumoral',
      'Biomarcadores preditivos',
      'Terapias direcionadas',
      'Monitoramento de resposta',
      'Medicina personalizada',
      'Ensaios clínicos'
    ]
  },
  {
    id: 'smart-prosthetics',
    name: 'Próteses Inteligentes',
    description: 'Próteses controladas por sinais neurais',
    icon: Zap,
    complexity: 'hard',
    features: [
      'Controle neural',
      'Feedback sensorial',
      'Aprendizado adaptativo',
      'Múltiplos graus de liberdade',
      'Calibração automática',
      'Interface cérebro-máquina'
    ]
  },
  {
    id: 'maternal-health-monitoring',
    name: 'Monitoramento de Saúde Materna',
    description: 'Acompanhamento da gravidez e pós-parto',
    icon: Baby,
    complexity: 'medium',
    features: [
      'Monitoramento fetal',
      'Alertas de risco',
      'Educação pré-natal',
      'Telemedicina obstétrica',
      'Tracking de sintomas',
      'Suporte pós-parto'
    ]
  },
  {
    id: 'geriatric-care-platform',
    name: 'Plataforma de Cuidados Geriátricos',
    description: 'Sistema integrado para cuidados com idosos',
    icon: UserCheck,
    complexity: 'hard',
    features: [
      'Monitoramento domiciliar',
      'Detecção de quedas',
      'Lembretes de medicação',
      'Comunicação familiar',
      'Emergências automáticas',
      'Cuidados coordenados'
    ]
  },
  {
    id: 'dental-ai-assistant',
    name: 'Assistente de IA Odontológico',
    description: 'IA para diagnóstico e planejamento odontológico',
    icon: Smile,
    complexity: 'hard',
    features: [
      'Análise radiográfica',
      'Diagnóstico automatizado',
      'Planejamento de tratamento',
      'Modelagem 3D',
      'Prognóstico de tratamento',
      'Educação do paciente'
    ]
  },
  {
    id: 'cardiac-monitoring-iot',
    name: 'Monitoramento Cardíaco IoT',
    description: 'Rede de dispositivos para monitoramento cardíaco',
    icon: Heart,
    complexity: 'hard',
    features: [
      'ECG contínuo',
      'Detecção de arritmias',
      'Alertas de emergência',
      'Análise de tendências',
      'Telemedicina cardiológica',
      'Prevenção de eventos'
    ]
  },
  {
    id: 'surgical-planning-ar',
    name: 'Planejamento Cirúrgico AR',
    description: 'Realidade aumentada para planejamento cirúrgico',
    icon: Eye,
    complexity: 'hard',
    features: [
      'Visualização 3D',
      'Sobreposição de imagens',
      'Planejamento pré-operatório',
      'Navegação cirúrgica',
      'Treinamento cirúrgico',
      'Precisão anatômica'
    ]
  },
  {
    id: 'pharmacy-automation',
    name: 'Automação Farmacêutica',
    description: 'Sistema automatizado para farmácias',
    icon: Bot,
    complexity: 'hard',
    features: [
      'Dispensação automatizada',
      'Verificação de prescrições',
      'Gestão de estoque',
      'Alertas de interações',
      'Controle de qualidade',
      'Rastreabilidade completa'
    ]
  },
  {
    id: 'biomarker-discovery',
    name: 'Descoberta de Biomarcadores',
    description: 'Plataforma para identificação de biomarcadores',
    icon: Target,
    complexity: 'hard',
    features: [
      'Análise ômica',
      'Machine learning',
      'Validação clínica',
      'Correlação fenotípica',
      'Desenvolvimento de testes',
      'Tradução clínica'
    ]
  },
  {
    id: 'medical-education-vr',
    name: 'Educação Médica em VR',
    description: 'Treinamento médico em realidade virtual',
    icon: GraduationCap,
    complexity: 'hard',
    features: [
      'Simulações anatômicas',
      'Procedimentos virtuais',
      'Casos clínicos',
      'Avaliação de competências',
      'Treinamento seguro',
      'Múltiplas especialidades'
    ]
  },
  {
    id: 'health-data-lake',
    name: 'Data Lake de Saúde',
    description: 'Repositório centralizado de dados de saúde',
    icon: Database,
    complexity: 'hard',
    features: [
      'Integração de dados',
      'Análise big data',
      'Inteligência artificial',
      'Pesquisa clínica',
      'Descoberta de padrões',
      'Interoperabilidade'
    ]
  },
  {
    id: 'medical-translator-ai',
    name: 'Tradutor Médico IA',
    description: 'Tradução especializada de terminologia médica',
    icon: Languages,
    complexity: 'medium',
    features: [
      'Terminologia médica',
      'Múltiplos idiomas',
      'Contexto clínico',
      'Precisão técnica',
      'Comunicação paciente',
      'Documentação médica'
    ]
  },
  {
    id: 'sleep-disorder-analysis',
    name: 'Análise de Distúrbios do Sono',
    description: 'Sistema para diagnóstico de distúrbios do sono',
    icon: Moon,
    complexity: 'hard',
    features: [
      'Polissonografia digital',
      'Análise automática',
      'Diagnóstico de distúrbios',
      'Monitoramento domiciliar',
      'Relatórios médicos',
      'Tratamento personalizado'
    ]
  },
  {
    id: 'wound-healing-monitoring',
    name: 'Monitoramento de Cicatrização',
    description: 'Acompanhamento digital da cicatrização de feridas',
    icon: Activity,
    complexity: 'medium',
    features: [
      'Análise de imagens',
      'Progresso de cicatrização',
      'Alertas de complicações',
      'Protocolos de cuidado',
      'Documentação visual',
      'Telemedicina especializada'
    ]
  },
  {
    id: 'pain-management-platform',
    name: 'Plataforma de Gestão da Dor',
    description: 'Sistema integrado para manejo da dor crônica',
    icon: Shield,
    complexity: 'hard',
    features: [
      'Avaliação multidimensional',
      'Protocolos de tratamento',
      'Monitoramento contínuo',
      'Intervenções não-farmacológicas',
      'Educação do paciente',
      'Equipe multidisciplinar'
    ]
  },
  {
    id: 'immunotherapy-tracking',
    name: 'Rastreamento de Imunoterapia',
    description: 'Monitoramento de tratamentos de imunoterapia',
    icon: Shield,
    complexity: 'hard',
    features: [
      'Monitoramento de resposta',
      'Efeitos adversos',
      'Biomarcadores imunológicos',
      'Ajuste de protocolo',
      'Comunicação de equipe',
      'Registro de dados'
    ]
  },
  {
    id: 'respiratory-monitoring',
    name: 'Monitoramento Respiratório',
    description: 'Sistema para monitoramento da função respiratória',
    icon: Wind,
    complexity: 'hard',
    features: [
      'Espirometria digital',
      'Monitoramento contínuo',
      'Detecção de exacerbações',
      'Alertas preventivos',
      'Telemedicina pulmonar',
      'Educação respiratória'
    ]
  },
  {
    id: 'diabetes-management-ai',
    name: 'Gestão de Diabetes com IA',
    description: 'Sistema inteligente para manejo do diabetes',
    icon: Activity,
    complexity: 'hard',
    features: [
      'Monitoramento glicêmico',
      'Predição de hipoglicemia',
      'Ajuste automático de insulina',
      'Análise de padrões',
      'Recomendações personalizadas',
      'Integração com dispositivos'
    ]
  },
  {
    id: 'allergy-management',
    name: 'Gestão de Alergias',
    description: 'Plataforma para manejo de alergias e reações',
    icon: Alert,
    complexity: 'medium',
    features: [
      'Registro de alérgenos',
      'Alertas de exposição',
      'Planos de emergência',
      'Educação sobre alergias',
      'Comunicação médica',
      'Monitoramento de sintomas'
    ]
  },
  {
    id: 'organ-transplant-matching',
    name: 'Compatibilidade para Transplantes',
    description: 'Sistema para matching de órgãos para transplante',
    icon: Heart,
    complexity: 'hard',
    features: [
      'Análise de compatibilidade',
      'Lista de espera inteligente',
      'Otimização de matching',
      'Logística de transplante',
      'Acompanhamento pós-transplante',
      'Rede de coordenação'
    ]
  },
  {
    id: 'infection-control-system',
    name: 'Sistema de Controle de Infecção',
    description: 'Prevenção e controle de infecções hospitalares',
    icon: Shield,
    complexity: 'hard',
    features: [
      'Vigilância epidemiológica',
      'Detecção de surtos',
      'Protocolos de isolamento',
      'Rastreamento de contatos',
      'Educação de profissionais',
      'Relatórios regulatórios'
    ]
  },
  {
    id: 'rehabilitation-progress',
    name: 'Progresso de Reabilitação',
    description: 'Acompanhamento objetivo do progresso reabilitativo',
    icon: TrendingUp,
    complexity: 'medium',
    features: [
      'Avaliação funcional',
      'Métricas objetivas',
      'Protocolos personalizados',
      'Gamificação terapêutica',
      'Comunicação familiar',
      'Ajuste de metas'
    ]
  },
  {
    id: 'medical-device-integration',
    name: 'Integração de Dispositivos Médicos',
    description: 'Plataforma para integração de dispositivos médicos',
    icon: Smartphone,
    complexity: 'hard',
    features: [
      'Interoperabilidade de dispositivos',
      'Coleta de dados unificada',
      'Dashboard centralizado',
      'Alertas integrados',
      'Análise correlacionada',
      'Padrões de comunicação'
    ]
  },
  {
    id: 'health-economics-platform',
    name: 'Plataforma de Economia da Saúde',
    description: 'Análise econômica de intervenções de saúde',
    icon: DollarSign,
    complexity: 'hard',
    features: [
      'Análise custo-efetividade',
      'Modelos econômicos',
      'Avaliação de tecnologias',
      'Decisões de reembolso',
      'Evidências econômicas',
      'Orçamento de impacto'
    ]
  },
  {
    id: 'population-health-analytics',
    name: 'Analytics de Saúde Populacional',
    description: 'Análise de dados de saúde populacional',
    icon: Users,
    complexity: 'hard',
    features: [
      'Análise epidemiológica',
      'Indicadores de saúde',
      'Determinantes sociais',
      'Intervenções populacionais',
      'Políticas públicas',
      'Dashboards governamentais'
    ]
  },
  {
    id: 'clinical-trial-platform',
    name: 'Plataforma de Ensaios Clínicos',
    description: 'Gestão completa de ensaios clínicos',
    icon: Flask,
    complexity: 'hard',
    features: [
      'Recrutamento de pacientes',
      'Randomização',
      'Coleta de dados',
      'Monitoramento de segurança',
      'Análise estatística',
      'Regulatory compliance'
    ]
  }
];
