import { GraduationCap, BookOpen, Users, Video, Award, FileText, Calculator, Globe, Brain, Code, FlaskConical, UserCheck, Clock, Code, Atom, Telescope, User, Calculator, Music, Palette, MessageSquare, PenTool, Brain, TreePine, DollarSign, TrendingUp, Users, Brain, Globe, Wrench, BookOpen, Users, Brain, Search, Presentation, Clock, Folder, Target, Users, Lightbulb, Scale, Crown } from 'lucide-react';
import { ProjectTemplate } from '../projectTemplates';

export const educationTemplates: ProjectTemplate[] = [
  {
    id: 'lms-platform',
    name: 'Plataforma LMS',
    description: 'Sistema completo de gestão de aprendizagem online',
    icon: GraduationCap,
    complexity: 'hard',
    features: [
      'Criação de cursos',
      'Avaliações online',
      'Certificados digitais',
      'Fórum de discussão',
      'Relatórios de progresso',
      'Sistema de notas'
    ]
  },
  {
    id: 'online-library',
    name: 'Biblioteca Digital',
    description: 'Sistema de biblioteca com catálogo online e empréstimos',
    icon: BookOpen,
    complexity: 'medium',
    features: [
      'Catálogo de livros',
      'Sistema de empréstimos',
      'Reservas online',
      'Multas automáticas',
      'Histórico de leituras',
      'Recomendações personalizadas'
    ]
  },
  {
    id: 'student-portal',
    name: 'Portal do Estudante',
    description: 'Portal completo para gestão acadêmica de estudantes',
    icon: Users,
    complexity: 'medium',
    features: [
      'Notas e frequência',
      'Cronograma de aulas',
      'Material didático',
      'Comunicação com professores',
      'Histórico acadêmico',
      'Solicitações online'
    ]
  },
  {
    id: 'video-conferencing',
    name: 'Sistema de Videoconferência',
    description: 'Plataforma para aulas e reuniões online',
    icon: Video,
    complexity: 'hard',
    features: [
      'Salas virtuais',
      'Compartilhamento de tela',
      'Gravação de sessões',
      'Chat integrado',
      'Controle de participantes',
      'Integração com calendário'
    ]
  },
  {
    id: 'certification-system',
    name: 'Sistema de Certificação',
    description: 'Plataforma para criação e validação de certificados',
    icon: Award,
    complexity: 'medium',
    features: [
      'Criação de certificados',
      'Validação blockchain',
      'Templates customizáveis',
      'Verificação online',
      'Histórico de certificações',
      'API de validação'
    ]
  },
  {
    id: 'exam-system',
    name: 'Sistema de Provas',
    description: 'Plataforma para criação e aplicação de provas online',
    icon: FileText,
    complexity: 'medium',
    features: [
      'Criação de questões',
      'Diferentes tipos de prova',
      'Correção automática',
      'Relatórios detalhados',
      'Sistema anti-cola',
      'Banco de questões'
    ]
  },
  {
    id: 'math-solver',
    name: 'Resolvedor Matemático',
    description: 'Ferramenta para resolver problemas matemáticos com explicações',
    icon: Calculator,
    complexity: 'hard',
    features: [
      'Resolução de equações',
      'Gráficos interativos',
      'Passo a passo',
      'Múltiplas áreas matemáticas',
      'Histórico de cálculos',
      'Exportação de soluções'
    ]
  },
  {
    id: 'language-learning',
    name: 'App de Idiomas',
    description: 'Aplicativo interativo para aprendizado de idiomas',
    icon: Globe,
    complexity: 'hard',
    features: [
      'Lições interativas',
      'Reconhecimento de voz',
      'Progresso gamificado',
      'Múltiplos idiomas',
      'Exercícios adaptativos',
      'Comunidade de prática'
    ]
  },
  {
    id: 'quiz-maker',
    name: 'Criador de Quiz',
    description: 'Ferramenta para criar e compartilhar quizzes interativos',
    icon: Brain,
    complexity: 'easy',
    features: [
      'Criação de quizzes',
      'Múltiplos formatos',
      'Compartilhamento social',
      'Estatísticas de participação',
      'Templates prontos',
      'Ranking de pontuações'
    ]
  },
  {
    id: 'coding-playground',
    name: 'Playground de Código',
    description: 'Ambiente online para praticar programação',
    icon: Code,
    complexity: 'hard',
    features: [
      'Editor de código online',
      'Múltiplas linguagens',
      'Execução em tempo real',
      'Exercícios de programação',
      'Sistema de níveis',
      'Compartilhamento de código'
    ]
  },
  {
    id: 'adaptive-learning-ai',
    name: 'IA de Aprendizado Adaptativo',
    description: 'Sistema que se adapta ao ritmo de cada aluno',
    icon: Brain,
    complexity: 'hard',
    features: [
      'Personalização automática',
      'Análise de performance',
      'Conteúdo adaptativo',
      'Recomendações inteligentes',
      'Gamificação dinâmica',
      'Analytics preditivos'
    ]
  },
  {
    id: 'virtual-laboratory',
    name: 'Laboratório Virtual',
    description: 'Experimentos científicos em ambiente virtual',
    icon: FlaskConical,
    complexity: 'hard',
    features: [
      'Simulações físicas',
      'Experimentos químicos',
      'Laboratório de biologia',
      'Instrumentos virtuais',
      'Coleta de dados',
      'Relatórios automáticos'
    ]
  },
  {
    id: 'ai-tutoring-system',
    name: 'Sistema de Tutoria com IA',
    description: 'Tutor pessoal alimentado por inteligência artificial',
    icon: UserCheck,
    complexity: 'hard',
    features: [
      'Explicações personalizadas',
      'Resolução de dúvidas',
      'Exercícios adaptativos',
      'Feedback instantâneo',
      'Múltiplas matérias',
      'Progresso individual'
    ]
  },
  {
    id: 'immersive-history',
    name: 'História Imersiva',
    description: 'Explore eventos históricos em realidade virtual',
    icon: Clock,
    complexity: 'hard',
    features: [
      'Recreações históricas',
      'Personagens interativos',
      'Linha do tempo 3D',
      'Artefatos virtuais',
      'Múltiplas perspectivas',
      'Avaliação contextual'
    ]
  },
  {
    id: 'collaborative-coding',
    name: 'Programação Colaborativa',
    description: 'Aprenda programação em equipe',
    icon: Code,
    complexity: 'medium',
    features: [
      'Editor colaborativo',
      'Múltiplas linguagens',
      'Projetos em equipe',
      'Code review educativo',
      'Desafios progressivos',
      'Mentoria automática'
    ]
  },
  {
    id: 'language-immersion-vr',
    name: 'Imersão em Idiomas VR',
    description: 'Aprenda idiomas em ambientes virtuais realistas',
    icon: Globe,
    complexity: 'hard',
    features: [
      'Conversação com IA',
      'Cenários culturais',
      'Reconhecimento de voz',
      'Feedback de pronúncia',
      'Múltiplos idiomas',
      'Gamificação cultural'
    ]
  },
  {
    id: 'molecular-visualization',
    name: 'Visualização Molecular',
    description: 'Explore estruturas moleculares em 3D',
    icon: Atom,
    complexity: 'hard',
    features: [
      'Modelos 3D interativos',
      'Simulações químicas',
      'Manipulação molecular',
      'Banco de dados químico',
      'Reações virtuais',
      'Análise estrutural'
    ]
  },
  {
    id: 'astronomy-simulator',
    name: 'Simulador de Astronomia',
    description: 'Explore o universo em simulação realística',
    icon: Telescope,
    complexity: 'hard',
    features: [
      'Sistema solar 3D',
      'Observatório virtual',
      'Mapa estelar',
      'Simulação de fenômenos',
      'Missões espaciais',
      'Catálogo astronômico'
    ]
  },
  {
    id: 'anatomy-3d-explorer',
    name: 'Explorador 3D de Anatomia',
    description: 'Estude anatomia humana em detalhes 3D',
    icon: User,
    complexity: 'hard',
    features: [
      'Modelos anatômicos 3D',
      'Sistemas do corpo',
      'Dissecação virtual',
      'Animações fisiológicas',
      'Quiz interativo',
      'Múltiplas perspectivas'
    ]
  },
  {
    id: 'mathematics-visualizer',
    name: 'Visualizador Matemático',
    description: 'Torne conceitos matemáticos visíveis',
    icon: Calculator,
    complexity: 'medium',
    features: [
      'Gráficos interativos',
      'Geometria dinâmica',
      'Álgebra visual',
      'Cálculo animado',
      'Estatística interativa',
      'Problemas contextuais'
    ]
  },
  {
    id: 'physics-playground',
    name: 'Playground de Física',
    description: 'Experimente com leis físicas interativamente',
    icon: Zap,
    complexity: 'hard',
    features: [
      'Simulações físicas',
      'Experimentos virtuais',
      'Leis da física',
      'Medições precisas',
      'Variação de parâmetros',
      'Análise de resultados'
    ]
  },
  {
    id: 'geography-explorer',
    name: 'Explorador de Geografia',
    description: 'Explore o mundo através de mapas interativos',
    icon: Map,
    complexity: 'medium',
    features: [
      'Mapas 3D interativos',
      'Dados geográficos',
      'Climas e biomas',
      'Demografia mundial',
      'Desastres naturais',
      'Culturas regionais'
    ]
  },
  {
    id: 'music-theory-interactive',
    name: 'Teoria Musical Interativa',
    description: 'Aprenda música de forma visual e auditiva',
    icon: Music,
    complexity: 'medium',
    features: [
      'Piano virtual',
      'Teoria musical',
      'Composição assistida',
      'Análise harmônica',
      'Treinamento auditivo',
      'Múltiplos instrumentos'
    ]
  },
  {
    id: 'art-studio-virtual',
    name: 'Estúdio de Arte Virtual',
    description: 'Crie arte digital e aprenda técnicas',
    icon: Palette,
    complexity: 'medium',
    features: [
      'Ferramentas de desenho',
      'Tutoriais interativos',
      'Galeria de referências',
      'Técnicas artísticas',
      'Crítica construtiva',
      'Portfolio digital'
    ]
  },
  {
    id: 'debate-platform',
    name: 'Plataforma de Debates',
    description: 'Desenvolva habilidades argumentativas',
    icon: MessageSquare,
    complexity: 'medium',
    features: [
      'Salas de debate',
      'Tópicos estruturados',
      'Avaliação de argumentos',
      'Moderação automática',
      'Ranking de debatedores',
      'Análise retórica'
    ]
  },
  {
    id: 'creative-writing-ai',
    name: 'Escrita Criativa com IA',
    description: 'Desenvolva habilidades de escrita com assistência de IA',
    icon: PenTool,
    complexity: 'hard',
    features: [
      'Prompts criativos',
      'Feedback automatizado',
      'Análise de estilo',
      'Sugestões de melhoria',
      'Colaboração em histórias',
      'Publicação de obras'
    ]
  },
  {
    id: 'mindfulness-education',
    name: 'Educação em Mindfulness',
    description: 'Desenvolva consciência plena e bem-estar',
    icon: Brain,
    complexity: 'medium',
    features: [
      'Meditações guiadas',
      'Exercícios de respiração',
      'Técnicas de relaxamento',
      'Diário emocional',
      'Progressão pessoal',
      'Conteúdo por idade'
    ]
  },
  {
    id: 'environmental-education',
    name: 'Educação Ambiental',
    description: 'Consciência ecológica através de simulações',
    icon: TreePine,
    complexity: 'medium',
    features: [
      'Simulações ecológicas',
      'Pegada de carbono',
      'Conservação virtual',
      'Projetos sustentáveis',
      'Monitoramento ambiental',
      'Ação comunitária'
    ]
  },
  {
    id: 'financial-literacy',
    name: 'Educação Financeira',
    description: 'Aprenda gestão financeira de forma prática',
    icon: DollarSign,
    complexity: 'medium',
    features: [
      'Simulador de investimentos',
      'Orçamento pessoal',
      'Planejamento financeiro',
      'Jogos de economia',
      'Cenários realistas',
      'Metas financeiras'
    ]
  },
  {
    id: 'entrepreneurship-simulator',
    name: 'Simulador de Empreendedorismo',
    description: 'Aprenda a empreender através de simulações',
    icon: TrendingUp,
    complexity: 'hard',
    features: [
      'Criação de startups',
      'Plano de negócios',
      'Simulação de mercado',
      'Pitch training',
      'Análise de concorrência',
      'Métricas de negócio'
    ]
  },
  {
    id: 'social-skills-training',
    name: 'Treinamento de Habilidades Sociais',
    description: 'Desenvolva competências socioemocionais',
    icon: Users,
    complexity: 'medium',
    features: [
      'Simulações sociais',
      'Cenários interpessoais',
      'Feedback comportamental',
      'Exercícios de empatia',
      'Comunicação assertiva',
      'Resolução de conflitos'
    ]
  },
  {
    id: 'critical-thinking-lab',
    name: 'Laboratório de Pensamento Crítico',
    description: 'Desenvolva habilidades analíticas e lógicas',
    icon: Brain,
    complexity: 'medium',
    features: [
      'Puzzles lógicos',
      'Análise de argumentos',
      'Detecção de falácias',
      'Estudos de caso',
      'Método científico',
      'Avaliação de evidências'
    ]
  },
  {
    id: 'cultural-exchange-platform',
    name: 'Plataforma de Intercâmbio Cultural',
    description: 'Conecte estudantes de diferentes culturas',
    icon: Globe,
    complexity: 'medium',
    features: [
      'Conexões internacionais',
      'Projetos colaborativos',
      'Compartilhamento cultural',
      'Tradução automática',
      'Eventos virtuais',
      'Certificados de participação'
    ]
  },
  {
    id: 'maker-space-virtual',
    name: 'Maker Space Virtual',
    description: 'Laboratório de fabricação digital',
    icon: Wrench,
    complexity: 'hard',
    features: [
      'Impressão 3D virtual',
      'CAD educacional',
      'Eletrônica simulada',
      'Robótica virtual',
      'Projetos práticos',
      'Compartilhamento de designs'
    ]
  },
  {
    id: 'storytelling-interactive',
    name: 'Narrativa Interativa',
    description: 'Crie e explore histórias ramificadas',
    icon: BookOpen,
    complexity: 'medium',
    features: [
      'Criação de histórias',
      'Narrativas ramificadas',
      'Personagens interativos',
      'Ilustrações automáticas',
      'Narração por voz',
      'Biblioteca de histórias'
    ]
  },
  {
    id: 'peer-review-system',
    name: 'Sistema de Revisão por Pares',
    description: 'Aprenda através da avaliação colaborativa',
    icon: Users,
    complexity: 'medium',
    features: [
      'Submissão de trabalhos',
      'Revisão anônima',
      'Critérios de avaliação',
      'Feedback estruturado',
      'Melhoria iterativa',
      'Ranking de qualidade'
    ]
  },
  {
    id: 'game-based-learning',
    name: 'Aprendizado Baseado em Jogos',
    description: 'Educação através de mecânicas de jogos',
    icon: Gamepad2,
    complexity: 'hard',
    features: [
      'Múltiplos gêneros',
      'Progressão por níveis',
      'Conquistas educativas',
      'Multiplayer educativo',
      'Analytics de aprendizado',
      'Conteúdo adaptativo'
    ]
  },
  {
    id: 'simulation-economics',
    name: 'Simulação Econômica',
    description: 'Entenda economia através de simulações',
    icon: TrendingUp,
    complexity: 'hard',
    features: [
      'Mercados virtuais',
      'Políticas econômicas',
      'Simulação de crises',
      'Indicadores econômicos',
      'Tomada de decisões',
      'Análise de impacto'
    ]
  },
  {
    id: 'digital-citizenship',
    name: 'Cidadania Digital',
    description: 'Aprenda responsabilidade no mundo digital',
    icon: Shield,
    complexity: 'medium',
    features: [
      'Segurança online',
      'Privacidade digital',
      'Ética digital',
      'Fake news detection',
      'Pegada digital',
      'Comportamento responsável'
    ]
  },
  {
    id: 'research-methodology',
    name: 'Metodologia de Pesquisa',
    description: 'Aprenda a conduzir pesquisas científicas',
    icon: Search,
    complexity: 'hard',
    features: [
      'Design de pesquisa',
      'Coleta de dados',
      'Análise estatística',
      'Redação científica',
      'Revisão bibliográfica',
      'Publicação acadêmica'
    ]
  },
  {
    id: 'presentation-skills',
    name: 'Habilidades de Apresentação',
    description: 'Desenvolva competências de comunicação pública',
    icon: Presentation,
    complexity: 'medium',
    features: [
      'Técnicas de apresentação',
      'Design de slides',
      'Linguagem corporal',
      'Controle de nervosismo',
      'Engajamento da audiência',
      'Feedback de performance'
    ]
  },
  {
    id: 'time-management-skills',
    name: 'Gestão de Tempo',
    description: 'Desenvolva habilidades de organização pessoal',
    icon: Clock,
    complexity: 'easy',
    features: [
      'Técnicas de produtividade',
      'Planejamento de estudos',
      'Priorização de tarefas',
      'Eliminação de distrações',
      'Metas SMART',
      'Tracking de progresso'
    ]
  },
  {
    id: 'digital-portfolio',
    name: 'Portfólio Digital',
    description: 'Crie e gerencie seu portfólio acadêmico',
    icon: Folder,
    complexity: 'medium',
    features: [
      'Showcase de projetos',
      'Reflexões de aprendizado',
      'Competências desenvolvidas',
      'Feedback de mentores',
      'Evolução temporal',
      'Compartilhamento profissional'
    ]
  },
  {
    id: 'skill-assessment-ai',
    name: 'Avaliação de Competências IA',
    description: 'Avalie habilidades através de IA avançada',
    icon: Target,
    complexity: 'hard',
    features: [
      'Avaliação adaptativa',
      'Múltiplas competências',
      'Feedback detalhado',
      'Recomendações personalizadas',
      'Tracking de progresso',
      'Certificação automática'
    ]
  },
  {
    id: 'collaborative-research',
    name: 'Pesquisa Colaborativa',
    description: 'Conduza pesquisas em equipes distribuídas',
    icon: Users,
    complexity: 'hard',
    features: [
      'Projetos colaborativos',
      'Compartilhamento de dados',
      'Análise distribuída',
      'Comunicação assíncrona',
      'Versionamento de resultados',
      'Publicação conjunta'
    ]
  },
  {
    id: 'emotional-intelligence',
    name: 'Inteligência Emocional',
    description: 'Desenvolva competências socioemocionais',
    icon: Heart,
    complexity: 'medium',
    features: [
      'Reconhecimento emocional',
      'Autorregulação',
      'Empatia desenvolve',
      'Habilidades sociais',
      'Motivação pessoal',
      'Inteligência social'
    ]
  },
  {
    id: 'innovation-lab',
    name: 'Laboratório de Inovação',
    description: 'Desenvolva soluções criativas para problemas reais',
    icon: Lightbulb,
    complexity: 'hard',
    features: [
      'Design thinking',
      'Prototipagem rápida',
      'Testes de usuário',
      'Iteração de ideias',
      'Pitch de soluções',
      'Implementação prática'
    ]
  },
  {
    id: 'ethics-simulator',
    name: 'Simulador de Ética',
    description: 'Explore dilemas éticos através de cenários',
    icon: Scale,
    complexity: 'medium',
    features: [
      'Dilemas éticos',
      'Múltiplas perspectivas',
      'Consequências de decisões',
      'Frameworks éticos',
      'Discussões guiadas',
      'Reflexão crítica'
    ]
  },
  {
    id: 'leadership-development',
    name: 'Desenvolvimento de Liderança',
    description: 'Cultive habilidades de liderança',
    icon: Crown,
    complexity: 'medium',
    features: [
      'Estilos de liderança',
      'Tomada de decisões',
      'Gestão de equipes',
      'Comunicação efetiva',
      'Resolução de conflitos',
      'Visão estratégica'
    ]
  },
  {
    id: 'cross-cultural-communication',
    name: 'Comunicação Intercultural',
    description: 'Desenvolva competências interculturais',
    icon: Globe,
    complexity: 'medium',
    features: [
      'Competência cultural',
      'Comunicação efetiva',
      'Sensibilidade cultural',
      'Adaptação comportamental',
      'Negociação intercultural',
      'Trabalho global'
    ]
  }
];
