
import { Heart, Calendar, Pill, Activity, FileText, Users, Phone, Stethoscope, Brain, Shield } from 'lucide-react';
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
  }
];
