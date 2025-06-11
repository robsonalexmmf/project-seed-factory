
import { ProjectFile, GeneratedProject } from '../projectGeneratorFactory';
import { ProjectTemplate } from '../../projectTemplates';

interface ProjectConfig {
  projectName: string;
  projectDescription: string;
  customFeatures: string;
  template: ProjectTemplate;
}

export const generateEducationProject = (config: ProjectConfig): GeneratedProject => {
  const files: ProjectFile[] = [
    {
      path: 'src/components/CourseCard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlayCircle, Clock, Users, Star, BookOpen } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  rating: number;
  students: number;
  price: number;
  image: string;
  progress?: number;
  isEnrolled?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  instructor,
  duration,
  level,
  rating,
  students,
  price,
  image,
  progress,
  isEnrolled = false
}) => {
  const levelColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  return (
    <Card className="hover:shadow-lg transition-shadow group">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg flex items-center justify-center">
            <PlayCircle className="w-12 h-12 text-white" />
          </div>
          <Badge className="absolute top-3 left-3 bg-black bg-opacity-70 text-white">
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </Badge>
          {isEnrolled && (
            <Badge className="absolute top-3 right-3 bg-green-500">
              Inscrito
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2 line-clamp-2">{title}</CardTitle>
        <p className="text-sm text-gray-600 mb-3">Por {instructor}</p>
        
        <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>

        {isEnrolled && progress !== undefined && (
          <div className="mb-3">
            <div className="flex items-center justify-between text-sm mb-1">
              <span>Progresso</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: \`\${progress}%\` }}
              ></div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">
            {price === 0 ? 'Gratuito' : \`R$ \${price.toFixed(2)}\`}
          </span>
          <Button size="sm">
            {isEnrolled ? 'Continuar' : 'Inscrever-se'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;`
    },
    {
      path: 'src/components/StudentDashboard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Trophy, Clock, Target } from 'lucide-react';

const StudentDashboard = () => {
  const currentCourses = [
    {
      id: '1',
      title: 'React para Iniciantes',
      progress: 75,
      nextLesson: 'Hooks Avançados',
      timeSpent: '12h 30min'
    },
    {
      id: '2',
      title: 'Node.js Completo',
      progress: 45,
      nextLesson: 'APIs REST',
      timeSpent: '8h 15min'
    },
    {
      id: '3',
      title: 'Design Thinking',
      progress: 90,
      nextLesson: 'Projeto Final',
      timeSpent: '15h 45min'
    }
  ];

  const achievements = [
    { title: 'Primeiro Curso', icon: '🎓', date: '15/03/2024' },
    { title: 'Dedicação', icon: '⏰', date: '10/03/2024' },
    { title: 'Estudante Ativo', icon: '📚', date: '05/03/2024' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cursos Ativos</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentCourses.length}</div>
            <p className="text-xs text-muted-foreground">+2 este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Horas Estudadas</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">36h</div>
            <p className="text-xs text-muted-foreground">+8h esta semana</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conquistas</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{achievements.length}</div>
            <p className="text-xs text-muted-foreground">Desbloqueadas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meta Semanal</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">80%</div>
            <p className="text-xs text-muted-foreground">8h de 10h</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Meus Cursos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentCourses.map((course) => (
                <div key={course.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{course.title}</h4>
                    <Badge variant="outline">{course.progress}%</Badge>
                  </div>
                  <Progress value={course.progress} className="mb-2" />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Próxima aula: {course.nextLesson}</span>
                    <span>{course.timeSpent}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conquistas Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-medium">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.date}</p>
                  </div>
                  <Badge>Nova</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;`
    },
    {
      path: 'src/App.tsx',
      content: `import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseCard from './components/CourseCard';
import StudentDashboard from './components/StudentDashboard';
import { Button } from '@/components/ui/button';
import { BookOpen, BarChart3, Search, PlusCircle, User } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('courses');

  const courses = [
    {
      id: '1',
      title: 'Desenvolvimento Web Completo',
      instructor: 'Prof. Carlos Silva',
      duration: '40 horas',
      level: 'intermediate' as const,
      rating: 4.8,
      students: 1250,
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
      progress: 35,
      isEnrolled: true
    },
    {
      id: '2',
      title: 'Python para Data Science',
      instructor: 'Dra. Ana Santos',
      duration: '32 horas',
      level: 'beginner' as const,
      rating: 4.9,
      students: 890,
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400'
    },
    {
      id: '3',
      title: 'UX/UI Design Avançado',
      instructor: 'Designer João Costa',
      duration: '28 horas',
      level: 'advanced' as const,
      rating: 4.7,
      students: 654,
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400'
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-blue-600">${config.projectName}</h1>
              
              <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Buscar cursos..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant={currentView === 'courses' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('courses')}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Cursos
                </Button>
                <Button
                  variant={currentView === 'dashboard' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('dashboard')}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Meu Progresso
                </Button>
                <Button variant="outline">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Criar Curso
                </Button>
                <Button variant="outline">
                  <User className="w-4 h-4 mr-2" />
                  Perfil
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6">
          {currentView === 'courses' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Cursos Disponíveis</h2>
                <p className="text-gray-600">Descubra e aprenda com os melhores instrutores</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            </div>
          )}

          {currentView === 'dashboard' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Meu Progresso</h2>
                <p className="text-gray-600">Acompanhe seu desenvolvimento nos cursos</p>
              </div>
              <StudentDashboard />
            </div>
          )}
        </main>
      </div>
    </Router>
  );
}

export default App;`
    }
  ];

  return {
    files,
    name: config.projectName,
    description: `Plataforma completa de educação com ${config.template.name}`,
    features: [
      'Cursos online interativos',
      'Dashboard do estudante',
      'Progresso detalhado',
      'Sistema de conquistas',
      'Comunidade de aprendizado',
      'Certificados digitais',
      ...config.template.features
    ]
  };
};
