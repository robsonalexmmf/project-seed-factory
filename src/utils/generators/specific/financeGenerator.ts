
import { ProjectFile, GeneratedProject } from '../projectGeneratorFactory';
import { ProjectTemplate } from '../../projectTemplates';

interface ProjectConfig {
  projectName: string;
  projectDescription: string;
  customFeatures: string;
  template: ProjectTemplate;
}

export const generateFinanceProject = (config: ProjectConfig): GeneratedProject => {
  const files: ProjectFile[] = [
    {
      path: 'src/components/ExpenseCard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, DollarSign, Tag, Edit, Trash2 } from 'lucide-react';

interface ExpenseCardProps {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  type: 'income' | 'expense';
  recurring?: boolean;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({
  id,
  description,
  amount,
  category,
  date,
  type,
  recurring = false
}) => {
  const categoryColors: { [key: string]: string } = {
    'Alimentação': 'bg-orange-100 text-orange-800',
    'Transporte': 'bg-blue-100 text-blue-800',
    'Moradia': 'bg-green-100 text-green-800',
    'Saúde': 'bg-red-100 text-red-800',
    'Educação': 'bg-purple-100 text-purple-800',
    'Lazer': 'bg-pink-100 text-pink-800',
    'Salário': 'bg-emerald-100 text-emerald-800',
    'Investimentos': 'bg-indigo-100 text-indigo-800'
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{description}</CardTitle>
          <div className="flex items-center space-x-2">
            {recurring && (
              <Badge variant="outline" className="text-xs">
                Recorrente
              </Badge>
            )}
            <Badge className={categoryColors[category] || 'bg-gray-100 text-gray-800'}>
              {category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <DollarSign className={\`w-5 h-5 \${type === 'income' ? 'text-green-600' : 'text-red-600'}\`} />
              <span className={\`text-xl font-bold \${type === 'income' ? 'text-green-600' : 'text-red-600'}\`}>
                {type === 'income' ? '+' : '-'} R$ {amount.toFixed(2)}
              </span>
            </div>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{new Date(date).toLocaleDateString('pt-BR')}</span>
          </div>

          <div className="flex space-x-2 pt-2">
            <Button size="sm" variant="outline" className="flex-1">
              <Edit className="w-4 h-4 mr-1" />
              Editar
            </Button>
            <Button size="sm" variant="destructive">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpenseCard;`
    },
    {
      path: 'src/components/BudgetOverview.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, Target } from 'lucide-react';

interface BudgetCategory {
  name: string;
  budgeted: number;
  spent: number;
  color: string;
}

const BudgetOverview = () => {
  const budgetCategories: BudgetCategory[] = [
    { name: 'Alimentação', budgeted: 800, spent: 650, color: 'bg-orange-500' },
    { name: 'Transporte', budgeted: 400, spent: 320, color: 'bg-blue-500' },
    { name: 'Moradia', budgeted: 1500, spent: 1500, color: 'bg-green-500' },
    { name: 'Lazer', budgeted: 300, spent: 180, color: 'bg-pink-500' },
    { name: 'Saúde', budgeted: 200, spent: 95, color: 'bg-red-500' }
  ];

  const totalBudgeted = budgetCategories.reduce((sum, cat) => sum + cat.budgeted, 0);
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
  const remainingBudget = totalBudgeted - totalSpent;

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orçamento Total</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {totalBudgeted.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Planejado para este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Gasto</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">R$ {totalSpent.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {((totalSpent / totalBudgeted) * 100).toFixed(1)}% do orçamento
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Restante</CardTitle>
            {remainingBudget > 0 ? (
              <TrendingUp className="h-4 w-4 text-green-600" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-600" />
            )}
          </CardHeader>
          <CardContent>
            <div className={\`text-2xl font-bold \${remainingBudget > 0 ? 'text-green-600' : 'text-red-600'}\`}>
              R$ {Math.abs(remainingBudget).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              {remainingBudget > 0 ? 'Disponível' : 'Acima do orçamento'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Budget Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Orçamento por Categoria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {budgetCategories.map((category) => {
              const percentage = (category.spent / category.budgeted) * 100;
              const isOverBudget = category.spent > category.budgeted;
              
              return (
                <div key={category.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={\`w-4 h-4 rounded-full \${category.color}\`}></div>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <div className="text-right">
                      <span className={\`font-bold \${isOverBudget ? 'text-red-600' : 'text-gray-900'}\`}>
                        R$ {category.spent.toFixed(2)}
                      </span>
                      <span className="text-gray-500 text-sm ml-1">
                        / R$ {category.budgeted.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Progress 
                      value={Math.min(percentage, 100)} 
                      className="flex-1"
                    />
                    <Badge 
                      variant={isOverBudget ? 'destructive' : percentage > 80 ? 'default' : 'outline'}
                      className="text-xs"
                    >
                      {percentage.toFixed(0)}%
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetOverview;`
    },
    {
      path: 'src/App.tsx',
      content: `import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpenseCard from './components/ExpenseCard';
import BudgetOverview from './components/BudgetOverview';
import { Button } from '@/components/ui/button';
import { PlusCircle, BarChart3, Target, CreditCard, TrendingUp } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const recentTransactions = [
    {
      id: '1',
      description: 'Supermercado Extra',
      amount: 85.50,
      category: 'Alimentação',
      date: '2024-03-20',
      type: 'expense' as const
    },
    {
      id: '2',
      description: 'Salário',
      amount: 5000.00,
      category: 'Salário',
      date: '2024-03-15',
      type: 'income' as const,
      recurring: true
    },
    {
      id: '3',
      description: 'Uber',
      amount: 25.80,
      category: 'Transporte',
      date: '2024-03-19',
      type: 'expense' as const
    },
    {
      id: '4',
      description: 'Netflix',
      amount: 32.90,
      category: 'Lazer',
      date: '2024-03-18',
      type: 'expense' as const,
      recurring: true
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-green-600">${config.projectName}</h1>
              
              <div className="flex items-center space-x-4">
                <Button
                  variant={currentView === 'dashboard' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('dashboard')}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button
                  variant={currentView === 'transactions' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('transactions')}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Transações
                </Button>
                <Button
                  variant={currentView === 'budget' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('budget')}
                >
                  <Target className="w-4 h-4 mr-2" />
                  Orçamentos
                </Button>
                <Button
                  variant={currentView === 'reports' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('reports')}
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Relatórios
                </Button>
                <Button variant="outline">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Nova Transação
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6">
          {currentView === 'dashboard' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Dashboard Financeiro</h2>
                <p className="text-gray-600">Visão geral das suas finanças pessoais</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Receita do Mês</h3>
                  <p className="text-3xl font-bold text-green-600">R$ 5.000</p>
                  <p className="text-sm text-gray-500">+15% vs mês anterior</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Gastos do Mês</h3>
                  <p className="text-3xl font-bold text-red-600">R$ 2.745</p>
                  <p className="text-sm text-gray-500">-8% vs mês anterior</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Saldo Atual</h3>
                  <p className="text-3xl font-bold text-blue-600">R$ 12.580</p>
                  <p className="text-sm text-gray-500">Em todas as contas</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Economia</h3>
                  <p className="text-3xl font-bold text-purple-600">R$ 2.255</p>
                  <p className="text-sm text-gray-500">45% da receita</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">Transações Recentes</h3>
                  <div className="space-y-3">
                    {recentTransactions.slice(0, 4).map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-gray-600">{transaction.category}</p>
                        </div>
                        <span className={\`font-bold \${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}\`}>
                          {transaction.type === 'income' ? '+' : '-'} R$ {transaction.amount.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <BudgetOverview />
              </div>
            </div>
          )}

          {currentView === 'transactions' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Todas as Transações</h2>
                <p className="text-gray-600">Gerencie suas receitas e despesas</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentTransactions.map((transaction) => (
                  <ExpenseCard key={transaction.id} {...transaction} />
                ))}
              </div>
            </div>
          )}

          {currentView === 'budget' && <BudgetOverview />}

          {currentView === 'reports' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Relatórios Financeiros</h2>
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <TrendingUp className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Relatórios Detalhados</h3>
                <p className="text-gray-600">Visualize gráficos e análises detalhadas das suas finanças.</p>
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
    description: `Sistema completo de finanças com ${config.template.name}`,
    features: [
      'Controle de gastos e receitas',
      'Orçamentos personalizados',
      'Relatórios financeiros',
      'Dashboard intuitivo',
      'Categorização automática',
      'Metas de economia',
      ...config.template.features
    ]
  };
};
