
import { ProjectFile, GeneratedProject } from '../projectGeneratorFactory';
import { ProjectTemplate } from '../../projectTemplates';

interface ProjectConfig {
  projectName: string;
  projectDescription: string;
  customFeatures: string;
  template: ProjectTemplate;
}

export const generateHRProject = (config: ProjectConfig): GeneratedProject => {
  const files: ProjectFile[] = [
    {
      path: 'src/components/EmployeeCard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Mail, Phone, MapPin, Calendar, Building } from 'lucide-react';

interface EmployeeCardProps {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  location: string;
  startDate: string;
  status: 'active' | 'inactive' | 'on-leave';
  avatar?: string;
  salary?: number;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  id,
  name,
  position,
  department,
  email,
  phone,
  location,
  startDate,
  status,
  avatar,
  salary
}) => {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-red-100 text-red-800',
    'on-leave': 'bg-yellow-100 text-yellow-800'
  };

  const statusLabels = {
    active: 'Ativo',
    inactive: 'Inativo',
    'on-leave': 'Licença'
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-4">
          {avatar ? (
            <img 
              src={avatar} 
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
          <div className="flex-1">
            <CardTitle className="text-lg">{name}</CardTitle>
            <p className="text-sm text-gray-600">{position}</p>
          </div>
          <Badge className={statusColors[status]}>
            {statusLabels[status]}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <Building className="w-4 h-4 mr-2" />
            <span>{department}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="w-4 h-4 mr-2" />
            <span>{email}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="w-4 h-4 mr-2" />
            <span>{phone}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Desde {startDate}</span>
          </div>

          {salary && (
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-gray-800">Salário:</p>
              <p className="text-lg font-bold text-green-600">R$ {salary.toLocaleString()}</p>
            </div>
          )}

          <div className="flex space-x-2 pt-2">
            <Button size="sm" variant="outline" className="flex-1">
              <User className="w-4 h-4 mr-1" />
              Perfil
            </Button>
            <Button size="sm" className="flex-1">
              Editar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;`
    },
    {
      path: 'src/components/PayrollDashboard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, 
  Users, 
  Calendar, 
  TrendingUp,
  Download,
  FileText,
  Calculator
} from 'lucide-react';

const PayrollDashboard = () => {
  const payrollSummary = {
    totalEmployees: 156,
    totalPayroll: 892500,
    averageSalary: 5723,
    pendingPayments: 12
  };

  const departmentPayroll = [
    { name: 'Tecnologia', employees: 45, total: 425000, average: 9444 },
    { name: 'Vendas', employees: 32, total: 198000, average: 6187 },
    { name: 'Marketing', employees: 28, total: 168000, average: 6000 },
    { name: 'Administrativo', employees: 25, total: 125000, average: 5000 },
    { name: 'RH', employees: 12, total: 84000, average: 7000 },
    { name: 'Financeiro', employees: 14, total: 112500, average: 8036 }
  ];

  const recentPayments = [
    { employee: 'João Silva', amount: 8500, date: '2024-03-15', status: 'paid' },
    { employee: 'Maria Santos', amount: 6200, date: '2024-03-15', status: 'paid' },
    { employee: 'Carlos Oliveira', amount: 7800, date: '2024-03-15', status: 'pending' },
    { employee: 'Ana Costa', amount: 5900, date: '2024-03-15', status: 'pending' }
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Funcionários</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{payrollSummary.totalEmployees}</div>
            <p className="text-xs text-muted-foreground">+12 este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Folha de Pagamento</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {payrollSummary.totalPayroll.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Total mensal</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Salário Médio</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {payrollSummary.averageSalary.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+5.2% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pagamentos Pendentes</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{payrollSummary.pendingPayments}</div>
            <p className="text-xs text-muted-foreground">Aguardando processamento</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Folha por Departamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentPayroll.map((dept, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{dept.name}</p>
                      <p className="text-sm text-gray-600">{dept.employees} funcionários</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">R$ {dept.total.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Média: R$ {dept.average.toLocaleString()}</p>
                    </div>
                  </div>
                  <Progress 
                    value={(dept.total / payrollSummary.totalPayroll) * 100} 
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Payments */}
        <Card>
          <CardHeader>
            <CardTitle>Pagamentos Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPayments.map((payment, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{payment.employee}</p>
                    <p className="text-sm text-gray-600">{payment.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">R$ {payment.amount.toLocaleString()}</p>
                    <Badge 
                      variant={payment.status === 'paid' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {payment.status === 'paid' ? 'Pago' : 'Pendente'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-16 flex-col space-y-2">
              <Calculator className="w-6 h-6" />
              <span>Calcular Folha</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <FileText className="w-6 h-6" />
              <span>Gerar Relatório</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <Download className="w-6 h-6" />
              <span>Exportar Dados</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PayrollDashboard;`
    },
    {
      path: 'src/App.tsx',
      content: `import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeCard from './components/EmployeeCard';
import PayrollDashboard from './components/PayrollDashboard';
import { Button } from '@/components/ui/button';
import { Users, DollarSign, Calendar, FileText, BarChart3, PlusCircle } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('employees');

  const employees = [
    {
      id: 'EMP001',
      name: 'João Silva',
      position: 'Desenvolvedor Senior',
      department: 'Tecnologia',
      email: 'joao.silva@empresa.com',
      phone: '(11) 99999-9999',
      location: 'São Paulo, SP',
      startDate: '15/03/2020',
      status: 'active' as const,
      salary: 12000
    },
    {
      id: 'EMP002',
      name: 'Maria Santos',
      position: 'Gerente de Marketing',
      department: 'Marketing',
      email: 'maria.santos@empresa.com',
      phone: '(11) 88888-8888',
      location: 'São Paulo, SP',
      startDate: '08/01/2019',
      status: 'active' as const,
      salary: 8500
    },
    {
      id: 'EMP003',
      name: 'Carlos Oliveira',
      position: 'Analista Financeiro',
      department: 'Financeiro',
      email: 'carlos.oliveira@empresa.com',
      phone: '(11) 77777-7777',
      location: 'Rio de Janeiro, RJ',
      startDate: '22/11/2021',
      status: 'on-leave' as const,
      salary: 7200
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
                  variant={currentView === 'employees' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('employees')}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Funcionários
                </Button>
                <Button
                  variant={currentView === 'payroll' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('payroll')}
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  Folha de Pagamento
                </Button>
                <Button
                  variant={currentView === 'attendance' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('attendance')}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Presença
                </Button>
                <Button
                  variant={currentView === 'reports' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('reports')}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Relatórios
                </Button>
                <Button variant="outline">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Novo Funcionário
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6">
          {currentView === 'employees' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Gestão de Funcionários</h2>
                <p className="text-gray-600">{employees.length} funcionários cadastrados</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {employees.map((employee) => (
                  <EmployeeCard key={employee.id} {...employee} />
                ))}
              </div>
            </div>
          )}

          {currentView === 'payroll' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Folha de Pagamento</h2>
                <p className="text-gray-600">Gestão completa da folha de pagamento da empresa</p>
              </div>
              <PayrollDashboard />
            </div>
          )}

          {currentView === 'attendance' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Controle de Presença</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Presentes Hoje</h3>
                  <p className="text-3xl font-bold text-green-600">142</p>
                  <p className="text-sm text-gray-500">91% dos funcionários</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Ausentes</h3>
                  <p className="text-3xl font-bold text-red-600">8</p>
                  <p className="text-sm text-gray-500">5% dos funcionários</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Em Licença</h3>
                  <p className="text-3xl font-bold text-yellow-600">6</p>
                  <p className="text-sm text-gray-500">4% dos funcionários</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Horas Extras</h3>
                  <p className="text-3xl font-bold text-blue-600">156h</p>
                  <p className="text-sm text-gray-500">Este mês</p>
                </div>
              </div>
            </div>
          )}

          {currentView === 'reports' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Relatórios de RH</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <FileText className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Relatório de Funcionários</h3>
                  <p className="text-gray-600 mb-4">Lista completa com dados dos funcionários</p>
                  <Button>Gerar Relatório</Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <BarChart3 className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Análise de Presença</h3>
                  <p className="text-gray-600 mb-4">Estatísticas de presença e ausências</p>
                  <Button>Ver Análise</Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <DollarSign className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Relatório Financeiro</h3>
                  <p className="text-gray-600 mb-4">Custos com pessoal e benefícios</p>
                  <Button>Exportar Dados</Button>
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
    description: `Sistema completo de RH com ${config.template.name}`,
    features: [
      'Gestão de funcionários',
      'Folha de pagamento automatizada',
      'Controle de ponto e presença',
      'Relatórios de RH',
      'Gestão de benefícios',
      'Avaliação de desempenho',
      ...config.template.features
    ]
  };
};
