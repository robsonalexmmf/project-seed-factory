
import { ProjectFile, GeneratedProject } from '../projectGeneratorFactory';
import { ProjectTemplate } from '../../projectTemplates';

interface ProjectConfig {
  projectName: string;
  projectDescription: string;
  customFeatures: string;
  template: ProjectTemplate;
}

export const generateCRMProject = (config: ProjectConfig): GeneratedProject => {
  const files: ProjectFile[] = [
    {
      path: 'src/components/LeadCard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Calendar, DollarSign } from 'lucide-react';

interface LeadCardProps {
  name: string;
  email: string;
  phone: string;
  company: string;
  value: number;
  status: 'new' | 'qualified' | 'proposal' | 'closed';
  lastContact: string;
}

const LeadCard: React.FC<LeadCardProps> = ({
  name,
  email,
  phone,
  company,
  value,
  status,
  lastContact
}) => {
  const statusColors = {
    new: 'bg-blue-100 text-blue-800',
    qualified: 'bg-yellow-100 text-yellow-800',
    proposal: 'bg-orange-100 text-orange-800',
    closed: 'bg-green-100 text-green-800'
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Badge className={statusColors[status]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        <p className="text-sm text-gray-600">{company}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="w-4 h-4 mr-2" />
            <span>{email}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="w-4 h-4 mr-2" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm font-medium">
              <DollarSign className="w-4 h-4 mr-1 text-green-600" />
              <span>R$ {value.toLocaleString()}</span>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <Calendar className="w-3 h-3 mr-1" />
              <span>{lastContact}</span>
            </div>
          </div>
          <div className="flex space-x-2 pt-2">
            <Button size="sm" variant="outline" className="flex-1">
              Contatar
            </Button>
            <Button size="sm" className="flex-1">
              Ver Detalhes
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadCard;`
    },
    {
      path: 'src/components/SalesPipeline.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface Deal {
  id: string;
  client: string;
  value: number;
  probability: number;
}

interface PipelineStage {
  id: string;
  name: string;
  deals: Deal[];
  color: string;
}

const SalesPipeline = () => {
  const stages: PipelineStage[] = [
    {
      id: 'prospecting',
      name: 'Prospecção',
      color: 'bg-blue-500',
      deals: [
        { id: '1', client: 'Empresa A', value: 15000, probability: 20 },
        { id: '2', client: 'Empresa B', value: 8500, probability: 15 }
      ]
    },
    {
      id: 'qualified',
      name: 'Qualificado',
      color: 'bg-yellow-500',
      deals: [
        { id: '3', client: 'Empresa C', value: 25000, probability: 50 },
        { id: '4', client: 'Empresa D', value: 12000, probability: 40 }
      ]
    },
    {
      id: 'proposal',
      name: 'Proposta',
      color: 'bg-orange-500',
      deals: [
        { id: '5', client: 'Empresa E', value: 35000, probability: 80 }
      ]
    },
    {
      id: 'closed',
      name: 'Fechado',
      color: 'bg-green-500',
      deals: [
        { id: '6', client: 'Empresa F', value: 18000, probability: 100 }
      ]
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Pipeline de Vendas</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stages.map((stage) => (
          <Card key={stage.id} className="h-fit">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2">
                <div className={\`w-3 h-3 rounded-full \${stage.color}\`}></div>
                <span className="text-sm font-medium">{stage.name}</span>
                <Badge variant="outline">{stage.deals.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {stage.deals.map((deal) => (
                  <div key={deal.id} className="p-3 bg-gray-50 rounded-lg border">
                    <h4 className="font-medium text-sm">{deal.client}</h4>
                    <p className="text-lg font-bold text-green-600">
                      R$ {deal.value.toLocaleString()}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-600">
                        {deal.probability}% chance
                      </span>
                      <div className="w-16 bg-gray-200 rounded-full h-1">
                        <div 
                          className="bg-blue-500 h-1 rounded-full"
                          style={{ width: \`\${deal.probability}%\` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SalesPipeline;`
    },
    {
      path: 'src/pages/CRMDashboard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, DollarSign, TrendingUp, Target } from 'lucide-react';

const CRMDashboard = () => {
  const stats = [
    { title: 'Leads Totais', value: '1.247', icon: Users, change: '+12%' },
    { title: 'Vendas do Mês', value: 'R$ 156.400', icon: DollarSign, change: '+18%' },
    { title: 'Taxa Conversão', value: '24.5%', icon: TrendingUp, change: '+3%' },
    { title: 'Meta do Mês', value: '78%', icon: Target, change: '+5%' }
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard CRM - ${config.projectName}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <Badge variant={stat.change.startsWith('+') ? 'default' : 'destructive'}>
                {stat.change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Leads Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((lead) => (
                <div key={lead} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Lead #{lead}001</p>
                    <p className="text-sm text-gray-600">Empresa Exemplo {lead}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">R$ {(15000 + lead * 5000).toLocaleString()}</p>
                    <Badge variant="outline">Qualificado</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Atividades Pendentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((activity) => (
                <div key={activity} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">Ligar para Cliente {activity}</p>
                    <p className="text-sm text-gray-600">Agendado para hoje 14:00</p>
                  </div>
                  <Badge variant="outline">Urgente</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CRMDashboard;`
    },
    {
      path: 'src/App.tsx',
      content: `import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeadCard from './components/LeadCard';
import SalesPipeline from './components/SalesPipeline';
import CRMDashboard from './pages/CRMDashboard';
import { Button } from '@/components/ui/button';
import { Users, BarChart3, PlusCircle } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const sampleLeads = [
    {
      name: 'João Silva',
      email: 'joao@empresa.com',
      phone: '(11) 9999-9999',
      company: 'Tech Solutions',
      value: 25000,
      status: 'qualified' as const,
      lastContact: '2 dias atrás'
    },
    {
      name: 'Maria Santos',
      email: 'maria@startup.com',
      phone: '(11) 8888-8888',
      company: 'StartupX',
      value: 15000,
      status: 'new' as const,
      lastContact: '1 dia atrás'
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">${config.projectName}</h1>
            <div className="flex items-center space-x-4">
              <Button
                variant={currentView === 'dashboard' ? 'default' : 'outline'}
                onClick={() => setCurrentView('dashboard')}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <Button
                variant={currentView === 'leads' ? 'default' : 'outline'}
                onClick={() => setCurrentView('leads')}
              >
                <Users className="w-4 h-4 mr-2" />
                Leads
              </Button>
              <Button
                variant={currentView === 'pipeline' ? 'default' : 'outline'}
                onClick={() => setCurrentView('pipeline')}
              >
                Pipeline
              </Button>
              <Button variant="outline">
                <PlusCircle className="w-4 h-4 mr-2" />
                Novo Lead
              </Button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto p-6">
          {currentView === 'dashboard' && <CRMDashboard />}
          
          {currentView === 'leads' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Gerenciar Leads</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleLeads.map((lead, index) => (
                  <LeadCard key={index} {...lead} />
                ))}
              </div>
            </div>
          )}
          
          {currentView === 'pipeline' && <SalesPipeline />}
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
    description: `Sistema completo de CRM com ${config.template.name}`,
    features: [
      'Gestão de leads e clientes',
      'Pipeline de vendas visual',
      'Dashboard com métricas',
      'Controle de atividades',
      'Relatórios de conversão',
      'Sistema de follow-up',
      ...config.template.features
    ]
  };
};
