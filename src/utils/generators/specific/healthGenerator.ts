
import { ProjectFile, GeneratedProject } from '../projectGeneratorFactory';
import { ProjectTemplate } from '../../projectTemplates';

interface ProjectConfig {
  projectName: string;
  projectDescription: string;
  customFeatures: string;
  template: ProjectTemplate;
}

export const generateHealthProject = (config: ProjectConfig): GeneratedProject => {
  const files: ProjectFile[] = [
    {
      path: 'src/components/PatientCard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Calendar, Phone, MapPin, AlertCircle } from 'lucide-react';

interface PatientCardProps {
  id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  address: string;
  lastVisit: string;
  nextAppointment?: string;
  condition: string;
  priority: 'low' | 'medium' | 'high';
}

const PatientCard: React.FC<PatientCardProps> = ({
  id,
  name,
  age,
  gender,
  phone,
  address,
  lastVisit,
  nextAppointment,
  condition,
  priority
}) => {
  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center space-x-2">
            <User className="w-5 h-5 text-blue-600" />
            <span>{name}</span>
          </CardTitle>
          <Badge className={priorityColors[priority]}>
            {priority === 'high' && <AlertCircle className="w-3 h-3 mr-1" />}
            {priority.toUpperCase()}
          </Badge>
        </div>
        <p className="text-sm text-gray-600">ID: {id} • {age} anos • {gender}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="w-4 h-4 mr-2" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{address}</span>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm font-medium text-gray-800 mb-1">Condição:</p>
            <p className="text-sm text-gray-600">{condition}</p>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="text-gray-500">Última consulta:</p>
              <p className="font-medium">{lastVisit}</p>
            </div>
            {nextAppointment && (
              <div className="text-right">
                <p className="text-gray-500">Próxima consulta:</p>
                <p className="font-medium text-blue-600">{nextAppointment}</p>
              </div>
            )}
          </div>
          <div className="flex space-x-2 pt-2">
            <Button size="sm" variant="outline" className="flex-1">
              <Calendar className="w-4 h-4 mr-1" />
              Agendar
            </Button>
            <Button size="sm" className="flex-1">
              Ver Prontuário
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientCard;`
    },
    {
      path: 'src/components/AppointmentScheduler.tsx',
      content: `import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';

interface Appointment {
  id: string;
  patientName: string;
  time: string;
  type: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  doctor: string;
}

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const appointments: Appointment[] = [
    {
      id: '1',
      patientName: 'Maria Silva',
      time: '09:00',
      type: 'Consulta Geral',
      status: 'scheduled',
      doctor: 'Dr. João Santos'
    },
    {
      id: '2',
      patientName: 'Carlos Oliveira',
      time: '10:30',
      type: 'Retorno',
      status: 'completed',
      doctor: 'Dr. Ana Costa'
    },
    {
      id: '3',
      patientName: 'Fernanda Lima',
      time: '14:00',
      type: 'Exame',
      status: 'scheduled',
      doctor: 'Dr. Paulo Mendes'
    }
  ];

  const statusColors = {
    scheduled: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Agenda do Dia</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              {selectedDate.toLocaleDateString('pt-BR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="flex items-center space-x-1 text-sm font-medium">
                      <Clock className="w-4 h-4" />
                      <span>{appointment.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">{appointment.patientName}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {appointment.type} • {appointment.doctor}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Badge className={statusColors[appointment.status]}>
                    {appointment.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                    {appointment.status === 'scheduled' ? 'Agendado' : 
                     appointment.status === 'completed' ? 'Realizado' : 'Cancelado'}
                  </Badge>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      Editar
                    </Button>
                    {appointment.status === 'scheduled' && (
                      <Button size="sm">
                        Iniciar
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Button>
              <Calendar className="w-4 h-4 mr-2" />
              Novo Agendamento
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentScheduler;`
    },
    {
      path: 'src/App.tsx',
      content: `import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientCard from './components/PatientCard';
import AppointmentScheduler from './components/AppointmentScheduler';
import { Button } from '@/components/ui/button';
import { Users, Calendar, FileText, BarChart3, PlusCircle } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('patients');

  const patients = [
    {
      id: 'P001',
      name: 'Maria Silva',
      age: 45,
      gender: 'Feminino',
      phone: '(11) 9999-9999',
      address: 'Rua das Flores, 123',
      lastVisit: '15/03/2024',
      nextAppointment: '22/03/2024',
      condition: 'Hipertensão arterial',
      priority: 'medium' as const
    },
    {
      id: 'P002',
      name: 'João Santos',
      age: 62,
      gender: 'Masculino',
      phone: '(11) 8888-8888',
      address: 'Av. Central, 456',
      lastVisit: '10/03/2024',
      condition: 'Diabetes tipo 2',
      priority: 'high' as const
    },
    {
      id: 'P003',
      name: 'Ana Costa',
      age: 28,
      gender: 'Feminino',
      phone: '(11) 7777-7777',
      address: 'Rua da Paz, 789',
      lastVisit: '18/03/2024',
      nextAppointment: '25/03/2024',
      condition: 'Check-up preventivo',
      priority: 'low' as const
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-blue-600">${config.projectName}</h1>
              
              <div className="flex items-center space-x-4">
                <Button
                  variant={currentView === 'patients' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('patients')}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Pacientes
                </Button>
                <Button
                  variant={currentView === 'appointments' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('appointments')}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Agenda
                </Button>
                <Button
                  variant={currentView === 'records' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('records')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Prontuários
                </Button>
                <Button
                  variant={currentView === 'dashboard' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('dashboard')}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button variant="outline">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Novo Paciente
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6">
          {currentView === 'patients' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Gerenciar Pacientes</h2>
                <p className="text-gray-600">{patients.length} pacientes cadastrados</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {patients.map((patient) => (
                  <PatientCard key={patient.id} {...patient} />
                ))}
              </div>
            </div>
          )}

          {currentView === 'appointments' && <AppointmentScheduler />}

          {currentView === 'dashboard' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Dashboard Médico</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Pacientes Total</h3>
                  <p className="text-3xl font-bold text-blue-600">156</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Consultas Hoje</h3>
                  <p className="text-3xl font-bold text-green-600">12</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Pendências</h3>
                  <p className="text-3xl font-bold text-orange-600">5</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Taxa Satisfação</h3>
                  <p className="text-3xl font-bold text-purple-600">96%</p>
                </div>
              </div>
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
    description: `Sistema completo de saúde com ${config.template.name}`,
    features: [
      'Gestão de pacientes',
      'Agendamento de consultas',
      'Prontuários eletrônicos',
      'Dashboard médico',
      'Prescrições digitais',
      'Histórico médico',
      ...config.template.features
    ]
  };
};
