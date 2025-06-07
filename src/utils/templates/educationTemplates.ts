
import { GraduationCap, BookOpen, Users, Video, Award, FileText, Calculator, Globe, Brain, Code } from 'lucide-react';
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
  }
];
