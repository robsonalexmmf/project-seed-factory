import { Calculator, Calendar, FileText, MessageSquare, Lock, Database, Cloud, Settings, Zap, Wrench, Bot, Home, Code, BarChart, HardDrive, Shield, Scanner, Mail, AlertTriangle, Bell, BookOpen, GitBranch, Copy, Receipt, Wifi, Image, Package, Printer, Alert, Monitor } from 'lucide-react';
import { ProjectTemplate } from '../projectTemplates';

export const utilityTemplates: ProjectTemplate[] = [
  {
    id: 'task-manager',
    name: 'Gerenciador de Tarefas',
    description: 'Organize suas tarefas e projetos de forma eficiente',
    icon: Calendar,
    complexity: 'easy',
    features: [
      'Criação de tarefas',
      'Organização por projetos',
      'Definição de prioridades',
      'Lembretes automáticos',
      'Colaboração em equipe',
      'Relatórios de produtividade'
    ]
  },
  {
    id: 'note-taking',
    name: 'Bloco de Notas',
    description: 'Sistema avançado para criação e organização de notas',
    icon: FileText,
    complexity: 'easy',
    features: [
      'Editor rico em texto',
      'Organização por pastas',
      'Busca avançada',
      'Sincronização na nuvem',
      'Compartilhamento de notas',
      'Tags e categorias'
    ]
  },
  {
    id: 'password-manager',
    name: 'Gerenciador de Senhas',
    description: 'Armazene e gerencie suas senhas com segurança',
    icon: Lock,
    complexity: 'hard',
    features: [
      'Armazenamento criptografado',
      'Gerador de senhas',
      'Autenticação biométrica',
      'Sincronização segura',
      'Auditoria de segurança',
      'Preenchimento automático'
    ]
  },
  {
    id: 'url-shortener',
    name: 'Encurtador de URL',
    description: 'Encurte URLs e acompanhe estatísticas de cliques',
    icon: Zap,
    complexity: 'easy',
    features: [
      'Encurtamento de URLs',
      'URLs personalizadas',
      'Estatísticas de cliques',
      'QR Code automático',
      'Expiração de links',
      'Proteção por senha'
    ]
  },
  {
    id: 'backup-system',
    name: 'Sistema de Backup',
    description: 'Backup automático e seguro de arquivos importantes',
    icon: Database,
    complexity: 'hard',
    features: [
      'Backup automático',
      'Versionamento de arquivos',
      'Criptografia de dados',
      'Backup incremental',
      'Restauração rápida',
      'Múltiplos destinos'
    ]
  },
  {
    id: 'cloud-storage',
    name: 'Armazenamento na Nuvem',
    description: 'Sistema de armazenamento de arquivos na nuvem',
    icon: Cloud,
    complexity: 'hard',
    features: [
      'Upload de arquivos',
      'Sincronização automática',
      'Compartilhamento seguro',
      'Controle de versões',
      'Acesso mobile',
      'Gestão de permissões'
    ]
  },
  {
    id: 'system-monitor',
    name: 'Monitor de Sistema',
    description: 'Monitore performance e recursos do sistema',
    icon: Settings,
    complexity: 'medium',
    features: [
      'Monitoramento em tempo real',
      'Alertas automáticos',
      'Histórico de performance',
      'Dashboard personalizado',
      'Relatórios detalhados',
      'Integração com APIs'
    ]
  },
  {
    id: 'api-testing',
    name: 'Testador de API',
    description: 'Ferramenta para testar e documentar APIs',
    icon: Wrench,
    complexity: 'medium',
    features: [
      'Teste de endpoints',
      'Documentação automática',
      'Coleções de testes',
      'Ambientes configuráveis',
      'Histórico de requisições',
      'Geração de código'
    ]
  },
  {
    id: 'qr-generator',
    name: 'Gerador de QR Code',
    description: 'Crie QR codes personalizados para diversos usos',
    icon: Calculator,
    complexity: 'easy',
    features: [
      'Múltiplos tipos de QR',
      'Personalização visual',
      'Download em alta qualidade',
      'Rastreamento de escaneamentos',
      'QR codes dinâmicos',
      'API para integração'
    ]
  },
  {
    id: 'team-chat',
    name: 'Chat em Equipe',
    description: 'Sistema de comunicação para equipes de trabalho',
    icon: MessageSquare,
    complexity: 'medium',
    features: [
      'Salas de chat',
      'Mensagens diretas',
      'Compartilhamento de arquivos',
      'Integração com ferramentas',
      'Histórico de mensagens',
      'Notificações personalizadas'
    ]
  },
  {
    id: 'ai-personal-assistant',
    name: 'Assistente Pessoal IA',
    description: 'Assistente inteligente para tarefas do dia a dia',
    icon: Bot,
    complexity: 'hard',
    features: [
      'Processamento de linguagem natural',
      'Integração com calendário',
      'Automação de tarefas',
      'Lembretes inteligentes',
      'Análise de produtividade',
      'Múltiplas plataformas'
    ]
  },
  {
    id: 'smart-home-controller',
    name: 'Controlador de Casa Inteligente',
    description: 'Central de controle para dispositivos IoT domésticos',
    icon: Home,
    complexity: 'hard',
    features: [
      'Controle de dispositivos IoT',
      'Automação residencial',
      'Monitoramento de energia',
      'Segurança integrada',
      'Rotinas personalizadas',
      'Controle por voz'
    ]
  },
  {
    id: 'code-review-analyzer',
    name: 'Analisador de Code Review',
    description: 'IA para análise automática de code reviews',
    icon: Code,
    complexity: 'hard',
    features: [
      'Análise de código automática',
      'Detecção de bugs',
      'Sugestões de melhoria',
      'Métricas de qualidade',
      'Integração com Git',
      'Relatórios detalhados'
    ]
  },
  {
    id: 'data-visualization-studio',
    name: 'Estúdio de Visualização de Dados',
    description: 'Ferramenta avançada para criar visualizações interativas',
    icon: BarChart,
    complexity: 'hard',
    features: [
      'Múltiplos tipos de gráficos',
      'Interatividade avançada',
      'Conexão com dados em tempo real',
      'Templates profissionais',
      'Exportação de alta qualidade',
      'Colaboração em equipe'
    ]
  },
  {
    id: 'automated-backup-system',
    name: 'Sistema de Backup Automatizado',
    description: 'Backup inteligente e restauração de dados',
    icon: HardDrive,
    complexity: 'hard',
    features: [
      'Backup incremental',
      'Múltiplos destinos',
      'Criptografia avançada',
      'Agendamento inteligente',
      'Verificação de integridade',
      'Restauração seletiva'
    ]
  },
  {
    id: 'network-security-monitor',
    name: 'Monitor de Segurança de Rede',
    description: 'Monitoramento e análise de segurança em tempo real',
    icon: Shield,
    complexity: 'hard',
    features: [
      'Detecção de intrusões',
      'Análise de tráfego',
      'Alertas em tempo real',
      'Forensics digital',
      'Compliance automático',
      'Dashboard executivo'
    ]
  },
  {
    id: 'document-scanner-ocr',
    name: 'Scanner OCR Inteligente',
    description: 'Digitalização e reconhecimento óptico de caracteres',
    icon: Scanner,
    complexity: 'medium',
    features: [
      'OCR de alta precisão',
      'Múltiplos idiomas',
      'Detecção automática de texto',
      'Correção de distorções',
      'Extração de dados estruturados',
      'Processamento em lote'
    ]
  },
  {
    id: 'smart-email-filter',
    name: 'Filtro Inteligente de Email',
    description: 'IA para organização automática de emails',
    icon: Mail,
    complexity: 'medium',
    features: [
      'Classificação automática',
      'Detecção de spam',
      'Priorização inteligente',
      'Respostas sugeridas',
      'Agendamento de emails',
      'Analytics de produtividade'
    ]
  },
  {
    id: 'performance-optimizer',
    name: 'Otimizador de Performance',
    description: 'Análise e otimização de performance de sistemas',
    icon: Zap,
    complexity: 'hard',
    features: [
      'Monitoramento de recursos',
      'Análise de gargalos',
      'Otimização automática',
      'Alertas proativos',
      'Relatórios de performance',
      'Recomendações inteligentes'
    ]
  },
  {
    id: 'automated-testing-suite',
    name: 'Suite de Testes Automatizados',
    description: 'Framework completo para automação de testes',
    icon: CheckCircle,
    complexity: 'hard',
    features: [
      'Testes de regressão',
      'Múltiplas plataformas',
      'Geração de casos de teste',
      'Relatórios detalhados',
      'Integração CI/CD',
      'Análise de cobertura'
    ]
  },
  {
    id: 'ai-code-generator',
    name: 'Gerador de Código IA',
    description: 'IA que gera código a partir de descrições naturais',
    icon: Code,
    complexity: 'hard',
    features: [
      'Geração de código inteligente',
      'Múltiplas linguagens',
      'Documentação automática',
      'Testes unitários',
      'Otimização de código',
      'Padrões de design'
    ]
  },
  {
    id: 'database-optimizer',
    name: 'Otimizador de Banco de Dados',
    description: 'Análise e otimização automática de bancos de dados',
    icon: Database,
    complexity: 'hard',
    features: [
      'Análise de queries',
      'Otimização de índices',
      'Monitoramento de performance',
      'Sugestões de melhorias',
      'Backup inteligente',
      'Manutenção automática'
    ]
  },
  {
    id: 'api-documentation-generator',
    name: 'Gerador de Documentação API',
    description: 'Criação automática de documentação para APIs',
    icon: FileText,
    complexity: 'medium',
    features: [
      'Documentação automática',
      'Exemplos interativos',
      'Múltiplos formatos',
      'Validação de schema',
      'Versionamento',
      'Testes integrados'
    ]
  },
  {
    id: 'log-analyzer-ai',
    name: 'Analisador de Logs IA',
    description: 'Análise inteligente de logs de sistema',
    icon: FileText,
    complexity: 'hard',
    features: [
      'Análise automática de padrões',
      'Detecção de anomalias',
      'Alertas inteligentes',
      'Correlação de eventos',
      'Visualização de dados',
      'Predição de problemas'
    ]
  },
  {
    id: 'deployment-automation',
    name: 'Automação de Deploy',
    description: 'Pipeline automatizado para deployment de aplicações',
    icon: Rocket,
    complexity: 'hard',
    features: [
      'Deploy automatizado',
      'Rollback inteligente',
      'Múltiplos ambientes',
      'Monitoramento pós-deploy',
      'Blue-green deployment',
      'Canary releases'
    ]
  },
  {
    id: 'resource-monitoring-dashboard',
    name: 'Dashboard de Monitoramento',
    description: 'Monitoramento centralizado de recursos de TI',
    icon: Monitor,
    complexity: 'hard',
    features: [
      'Monitoramento em tempo real',
      'Múltiplas métricas',
      'Alertas customizáveis',
      'Dashboards interativos',
      'Análise histórica',
      'Relatórios automáticos'
    ]
  },
  {
    id: 'smart-file-organizer',
    name: 'Organizador Inteligente de Arquivos',
    description: 'IA para organização automática de arquivos',
    icon: Folder,
    complexity: 'medium',
    features: [
      'Classificação automática',
      'Detecção de duplicatas',
      'Organização por conteúdo',
      'Limpeza inteligente',
      'Backup seletivo',
      'Busca semântica'
    ]
  },
  {
    id: 'vulnerability-scanner',
    name: 'Scanner de Vulnerabilidades',
    description: 'Análise automática de vulnerabilidades de segurança',
    icon: Shield,
    complexity: 'hard',
    features: [
      'Scanning automatizado',
      'Base de vulnerabilidades',
      'Análise de código',
      'Relatórios de segurança',
      'Priorização de riscos',
      'Remediation automática'
    ]
  },
  {
    id: 'configuration-manager',
    name: 'Gerenciador de Configurações',
    description: 'Gestão centralizada de configurações de sistema',
    icon: Settings,
    complexity: 'hard',
    features: [
      'Configuração centralizada',
      'Versionamento de configs',
      'Deploy automático',
      'Rollback de configurações',
      'Validação automática',
      'Compliance tracking'
    ]
  },
  {
    id: 'smart-cache-manager',
    name: 'Gerenciador Inteligente de Cache',
    description: 'Otimização automática de sistemas de cache',
    icon: Database,
    complexity: 'hard',
    features: [
      'Cache inteligente',
      'Invalidação automática',
      'Múltiplas camadas',
      'Análise de hit ratio',
      'Otimização de TTL',
      'Monitoramento de performance'
    ]
  },
  {
    id: 'error-tracking-system',
    name: 'Sistema de Rastreamento de Erros',
    description: 'Monitoramento e análise de erros em aplicações',
    icon: AlertTriangle,
    complexity: 'hard',
    features: [
      'Coleta automática de erros',
      'Análise de stack traces',
      'Agrupamento inteligente',
      'Alertas em tempo real',
      'Dashboards de qualidade',
      'Integração com ferramentas'
    ]
  },
  {
    id: 'smart-notification-center',
    name: 'Central Inteligente de Notificações',
    description: 'Gestão inteligente de notificações multiplataforma',
    icon: Bell,
    complexity: 'medium',
    features: [
      'Notificações inteligentes',
      'Múltiplos canais',
      'Priorização automática',
      'Agrupamento de mensagens',
      'Agendamento avançado',
      'Analytics de engajamento'
    ]
  },
  {
    id: 'automated-documentation',
    name: 'Documentação Automatizada',
    description: 'Geração automática de documentação técnica',
    icon: BookOpen,
    complexity: 'medium',
    features: [
      'Documentação automática',
      'Múltiplos formatos',
      'Sincronização com código',
      'Templates customizáveis',
      'Versionamento automático',
      'Busca inteligente'
    ]
  },
  {
    id: 'smart-scheduler',
    name: 'Agendador Inteligente',
    description: 'Sistema de agendamento com IA para otimização',
    icon: Calendar,
    complexity: 'hard',
    features: [
      'Agendamento inteligente',
      'Otimização de recursos',
      'Resolução de conflitos',
      'Múltiplos critérios',
      'Integração com calendários',
      'Previsão de demanda'
    ]
  },
  {
    id: 'compliance-checker',
    name: 'Verificador de Compliance',
    description: 'Verificação automática de conformidade regulatória',
    icon: Shield,
    complexity: 'hard',
    features: [
      'Verificação automática',
      'Múltiplas regulamentações',
      'Relatórios de compliance',
      'Alertas de não conformidade',
      'Documentação automática',
      'Auditoria contínua'
    ]
  },
  {
    id: 'smart-load-balancer',
    name: 'Balanceador de Carga Inteligente',
    description: 'Distribuição inteligente de carga com IA',
    icon: Zap,
    complexity: 'hard',
    features: [
      'Balanceamento inteligente',
      'Análise de performance',
      'Auto-scaling',
      'Health checks automáticos',
      'Roteamento geográfico',
      'Failover automático'
    ]
  },
  {
    id: 'data-pipeline-builder',
    name: 'Construtor de Pipeline de Dados',
    description: 'Ferramenta visual para criação de pipelines de dados',
    icon: GitBranch,
    complexity: 'hard',
    features: [
      'Designer visual',
      'Múltiplas fontes de dados',
      'Transformações automáticas',
      'Monitoramento de pipeline',
      'Processamento em tempo real',
      'Escalabilidade automática'
    ]
  },
  {
    id: 'smart-clipboard-sync',
    name: 'Sincronização Inteligente de Clipboard',
    description: 'Compartilhamento de clipboard entre dispositivos',
    icon: Copy,
    complexity: 'medium',
    features: [
      'Sincronização multi-dispositivo',
      'Histórico inteligente',
      'Criptografia de dados',
      'Filtros de conteúdo',
      'Busca semântica',
      'Compartilhamento seletivo'
    ]
  },
  {
    id: 'automated-invoice-processor',
    name: 'Processador Automático de Faturas',
    description: 'Automatização de processamento de faturas com OCR',
    icon: Receipt,
    complexity: 'hard',
    features: [
      'OCR avançado',
      'Extração de dados',
      'Validação automática',
      'Integração contábil',
      'Workflow de aprovação',
      'Analytics financeiros'
    ]
  },
  {
    id: 'smart-wifi-analyzer',
    name: 'Analisador WiFi Inteligente',
    description: 'Análise e otimização de redes WiFi',
    icon: Wifi,
    complexity: 'medium',
    features: [
      'Análise de espectro',
      'Otimização de canais',
      'Mapeamento de cobertura',
      'Detecção de interferências',
      'Relatórios de performance',
      'Sugestões de melhoria'
    ]
  },
  {
    id: 'automated-image-optimizer',
    name: 'Otimizador Automático de Imagens',
    description: 'Otimização automática de imagens para web',
    icon: Image,
    complexity: 'medium',
    features: [
      'Compressão inteligente',
      'Múltiplos formatos',
      'Redimensionamento automático',
      'WebP conversion',
      'Progressive loading',
      'CDN integration'
    ]
  },
  {
    id: 'smart-inventory-tracker',
    name: 'Rastreador Inteligente de Inventário',
    description: 'Gestão automática de inventário com IA',
    icon: Package,
    complexity: 'hard',
    features: [
      'Rastreamento automático',
      'Previsão de demanda',
      'Otimização de estoque',
      'Alertas de reposição',
      'Análise de tendências',
      'Integração com fornecedores'
    ]
  },
  {
    id: 'virtual-assistant-builder',
    name: 'Construtor de Assistente Virtual',
    description: 'Plataforma para criar assistentes virtuais personalizados',
    icon: Bot,
    complexity: 'hard',
    features: [
      'Designer de conversas',
      'Treinamento de IA',
      'Integração com APIs',
      'Múltiplos canais',
      'Analytics de conversas',
      'Deployment automático'
    ]
  },
  {
    id: 'smart-energy-monitor',
    name: 'Monitor Inteligente de Energia',
    description: 'Monitoramento e otimização do consumo energético',
    icon: Zap,
    complexity: 'hard',
    features: [
      'Monitoramento em tempo real',
      'Análise de consumo',
      'Otimização automática',
      'Alertas de pico',
      'Relatórios de economia',
      'Integração com smart grid'
    ]
  },
  {
    id: 'automated-content-moderator',
    name: 'Moderador Automático de Conteúdo',
    description: 'IA para moderação automática de conteúdo',
    icon: Shield,
    complexity: 'hard',
    features: [
      'Detecção de conteúdo impróprio',
      'Análise de sentimento',
      'Múltiplos idiomas',
      'Filtros customizáveis',
      'Queue de revisão',
      'Analytics de moderação'
    ]
  },
  {
    id: 'smart-weather-station',
    name: 'Estação Meteorológica Inteligente',
    description: 'Sistema IoT para monitoramento meteorológico',
    icon: Cloud,
    complexity: 'hard',
    features: [
      'Múltiplos sensores',
      'Previsões locais',
      'Alertas meteorológicos',
      'Histórico de dados',
      'API de dados',
      'Dashboard interativo'
    ]
  },
  {
    id: 'automated-report-generator',
    name: 'Gerador Automático de Relatórios',
    description: 'Criação automática de relatórios com IA',
    icon: FileText,
    complexity: 'hard',
    features: [
      'Geração automática',
      'Múltiplas fontes de dados',
      'Templates customizáveis',
      'Insights automáticos',
      'Agendamento inteligente',
      'Distribuição automática'
    ]
  },
  {
    id: 'smart-reminder-system',
    name: 'Sistema Inteligente de Lembretes',
    description: 'Lembretes contextuais com base em localização e tempo',
    icon: Bell,
    complexity: 'medium',
    features: [
      'Lembretes contextuais',
      'Geolocalização',
      'IA preditiva',
      'Múltiplos triggers',
      'Priorização automática',
      'Integração com calendário'
    ]
  },
  {
    id: 'automated-code-formatter',
    name: 'Formatador Automático de Código',
    description: 'Formatação automática de código com padrões customizáveis',
    icon: Code,
    complexity: 'medium',
    features: [
      'Múltiplas linguagens',
      'Padrões customizáveis',
      'Integração com IDEs',
      'Formatação em lote',
      'Preservação de comentários',
      'Configuração por projeto'
    ]
  },
  {
    id: 'smart-printer-manager',
    name: 'Gerenciador Inteligente de Impressoras',
    description: 'Gestão automática de impressoras e consumíveis',
    icon: Printer,
    complexity: 'medium',
    features: [
      'Monitoramento de consumíveis',
      'Alertas de manutenção',
      'Otimização de filas',
      'Análise de custos',
      'Pedidos automáticos',
      'Dashboard de utilização'
    ]
  }
];
