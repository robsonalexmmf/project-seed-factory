
import { ProjectFile, GeneratedProject } from '../projectGeneratorFactory';
import { ProjectTemplate } from '../../projectTemplates';

interface ProjectConfig {
  projectName: string;
  projectDescription: string;
  customFeatures: string;
  template: ProjectTemplate;
}

export const generateMarketingProject = (config: ProjectConfig): GeneratedProject => {
  const files: ProjectFile[] = [
    {
      path: 'src/components/CampaignCard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Eye, DollarSign, BarChart3, Play, Pause } from 'lucide-react';

interface CampaignCardProps {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'completed' | 'draft';
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  startDate: string;
  endDate: string;
  platform: string;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  id,
  name,
  status,
  budget,
  spent,
  impressions,
  clicks,
  conversions,
  startDate,
  endDate,
  platform
}) => {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    paused: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-blue-100 text-blue-800',
    draft: 'bg-gray-100 text-gray-800'
  };

  const statusLabels = {
    active: 'Ativa',
    paused: 'Pausada',
    completed: 'Concluída',
    draft: 'Rascunho'
  };

  const ctr = clicks > 0 ? ((clicks / impressions) * 100).toFixed(2) : '0.00';
  const conversionRate = clicks > 0 ? ((conversions / clicks) * 100).toFixed(2) : '0.00';

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg line-clamp-1">{name}</CardTitle>
          <Badge className={statusColors[status]}>
            {statusLabels[status]}
          </Badge>
        </div>
        <p className="text-sm text-gray-600">{platform}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Budget Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Orçamento</p>
              <p className="font-semibold">R$ {budget.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Gasto</p>
              <p className="font-semibold text-red-600">R$ {spent.toLocaleString()}</p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4 text-blue-500" />
                <span>Impressões:</span>
              </div>
              <span className="font-medium">{impressions.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-green-500" />
                <span>Cliques:</span>
              </div>
              <span className="font-medium">{clicks.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1">
                <BarChart3 className="w-4 h-4 text-purple-500" />
                <span>CTR:</span>
              </div>
              <span className="font-medium">{ctr}%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1">
                <DollarSign className="w-4 h-4 text-orange-500" />
                <span>Conversões:</span>
              </div>
              <span className="font-medium">{conversions} ({conversionRate}%)</span>
            </div>
          </div>

          {/* Date Range */}
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{startDate} - {endDate}</span>
          </div>

          {/* Actions */}
          <div className="flex space-x-2 pt-2">
            {status === 'active' ? (
              <Button size="sm" variant="outline" className="flex-1">
                <Pause className="w-4 h-4 mr-1" />
                Pausar
              </Button>
            ) : (
              <Button size="sm" variant="outline" className="flex-1">
                <Play className="w-4 h-4 mr-1" />
                Ativar
              </Button>
            )}
            <Button size="sm" className="flex-1">
              Ver Detalhes
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignCard;`
    },
    {
      path: 'src/components/AnalyticsDashboard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Users, 
  DollarSign, 
  Target,
  BarChart3,
  Calendar
} from 'lucide-react';

const AnalyticsDashboard = () => {
  const metrics = [
    {
      title: 'Impressões Totais',
      value: '125.4K',
      change: '+12.5%',
      trend: 'up',
      icon: Eye
    },
    {
      title: 'Cliques Únicos',
      value: '3.2K',
      change: '+8.3%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Conversões',
      value: '168',
      change: '-2.1%',
      trend: 'down',
      icon: Target
    },
    {
      title: 'ROAS',
      value: '4.2x',
      change: '+15.8%',
      trend: 'up',
      icon: DollarSign
    }
  ];

  const campaigns = [
    {
      name: 'Campanha Black Friday',
      platform: 'Google Ads',
      budget: 5000,
      spent: 3200,
      performance: 78
    },
    {
      name: 'Promoção Verão',
      platform: 'Facebook Ads',
      budget: 3000,
      spent: 2100,
      performance: 92
    },
    {
      name: 'Lançamento Produto',
      platform: 'Instagram Ads',
      budget: 2000,
      spent: 1800,
      performance: 65
    }
  ];

  const topPerformingAds = [
    {
      name: 'Anúncio Produto A',
      ctr: 3.45,
      conversions: 45,
      cost: 'R$ 12.50'
    },
    {
      name: 'Anúncio Produto B',
      ctr: 2.89,
      conversions: 32,
      cost: 'R$ 15.80'
    },
    {
      name: 'Anúncio Produto C',
      ctr: 2.12,
      conversions: 28,
      cost: 'R$ 18.90'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center space-x-1 mt-1">
                {metric.trend === 'up' ? (
                  <TrendingUp className="w-3 h-3 text-green-600" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-red-600" />
                )}
                <span className={\`text-xs \${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}\`}>
                  {metric.change}
                </span>
                <span className="text-xs text-gray-500">vs mês anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Campaign Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Performance das Campanhas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaigns.map((campaign, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{campaign.name}</p>
                      <p className="text-sm text-gray-600">{campaign.platform}</p>
                    </div>
                    <Badge variant={campaign.performance > 80 ? 'default' : campaign.performance > 60 ? 'secondary' : 'destructive'}>
                      {campaign.performance}%
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>R$ {campaign.spent.toLocaleString()} / R$ {campaign.budget.toLocaleString()}</span>
                      <span>{((campaign.spent / campaign.budget) * 100).toFixed(0)}% do orçamento</span>
                    </div>
                    <Progress value={(campaign.spent / campaign.budget) * 100} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Ads */}
        <Card>
          <CardHeader>
            <CardTitle>Anúncios de Melhor Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformingAds.map((ad, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">{ad.name}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span>CTR: {ad.ctr}%</span>
                      <span>Conv: {ad.conversions}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">{ad.cost}</p>
                    <p className="text-xs text-gray-500">CPC médio</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Atividade Recente</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { action: 'Nova campanha criada', detail: 'Promoção de Natal', time: '2 horas atrás' },
              { action: 'Orçamento ajustado', detail: 'Campanha Black Friday +20%', time: '4 horas atrás' },
              { action: 'Anúncio pausado', detail: 'Performance baixa detectada', time: '6 horas atrás' },
              { action: 'Meta atingida', detail: 'Campanha Verão - 100 conversões', time: '1 dia atrás' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.action}</p>
                  <p className="text-xs text-gray-600">{activity.detail}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;`
    },
    {
      path: 'src/App.tsx',
      content: `import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CampaignCard from './components/CampaignCard';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import { Button } from '@/components/ui/button';
import { BarChart3, PlusCircle, Target, Settings, Mail, Users } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const campaigns = [
    {
      id: '1',
      name: 'Campanha Black Friday 2024',
      status: 'active' as const,
      budget: 10000,
      spent: 6500,
      impressions: 125400,
      clicks: 3200,
      conversions: 168,
      startDate: '15/11/2024',
      endDate: '30/11/2024',
      platform: 'Google Ads'
    },
    {
      id: '2',
      name: 'Promoção Verão',
      status: 'active' as const,
      budget: 5000,
      spent: 3200,
      impressions: 89200,
      clicks: 2100,
      conversions: 95,
      startDate: '01/12/2024',
      endDate: '31/01/2025',
      platform: 'Facebook Ads'
    },
    {
      id: '3',
      name: 'Lançamento Produto X',
      status: 'paused' as const,
      budget: 8000,
      spent: 4500,
      impressions: 67800,
      clicks: 1800,
      conversions: 72,
      startDate: '05/11/2024',
      endDate: '20/12/2024',
      platform: 'Instagram Ads'
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
                  variant={currentView === 'dashboard' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('dashboard')}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
                <Button
                  variant={currentView === 'campaigns' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('campaigns')}
                >
                  <Target className="w-4 h-4 mr-2" />
                  Campanhas
                </Button>
                <Button
                  variant={currentView === 'audiences' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('audiences')}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Audiências
                </Button>
                <Button
                  variant={currentView === 'email' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('email')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Marketing
                </Button>
                <Button variant="outline">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Nova Campanha
                </Button>
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Configurações
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6">
          {currentView === 'dashboard' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Analytics Dashboard</h2>
                <p className="text-gray-600">Visão geral de todas as suas campanhas de marketing</p>
              </div>
              <AnalyticsDashboard />
            </div>
          )}

          {currentView === 'campaigns' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Gerenciar Campanhas</h2>
                <p className="text-gray-600">{campaigns.length} campanhas ativas</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {campaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} {...campaign} />
                ))}
              </div>
            </div>
          )}

          {currentView === 'audiences' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Gestão de Audiências</h2>
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <Users className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Segmentação Avançada</h3>
                <p className="text-gray-600">Crie e gerencie audiências personalizadas para suas campanhas.</p>
              </div>
            </div>
          )}

          {currentView === 'email' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Email Marketing</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Campanhas Enviadas</h3>
                  <p className="text-3xl font-bold text-blue-600">24</p>
                  <p className="text-sm text-gray-500">Este mês</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Taxa de Abertura</h3>
                  <p className="text-3xl font-bold text-green-600">24.5%</p>
                  <p className="text-sm text-gray-500">Média geral</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Cliques</h3>
                  <p className="text-3xl font-bold text-purple-600">1.2K</p>
                  <p className="text-sm text-gray-500">Total do mês</p>
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
    description: `Plataforma completa de marketing com ${config.template.name}`,
    features: [
      'Gestão de campanhas publicitárias',
      'Analytics em tempo real',
      'Email marketing automation',
      'Segmentação de audiências',
      'ROI e métricas avançadas',
      'A/B Testing',
      ...config.template.features
    ]
  };
};
