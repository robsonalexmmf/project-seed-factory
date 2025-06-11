
import { ProjectFile, GeneratedProject } from '../projectGeneratorFactory';
import { ProjectTemplate } from '../../projectTemplates';

interface ProjectConfig {
  projectName: string;
  projectDescription: string;
  customFeatures: string;
  template: ProjectTemplate;
}

export const generateInventoryProject = (config: ProjectConfig): GeneratedProject => {
  const files: ProjectFile[] = [
    {
      path: 'src/components/ProductCard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, AlertTriangle, TrendingUp, BarChart3, Plus, Minus } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  sku: string;
  category: string;
  currentStock: number;
  minStock: number;
  maxStock: number;
  unitPrice: number;
  totalValue: number;
  location: string;
  supplier: string;
  lastUpdated: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  sku,
  category,
  currentStock,
  minStock,
  maxStock,
  unitPrice,
  totalValue,
  location,
  supplier,
  lastUpdated
}) => {
  const getStockStatus = () => {
    if (currentStock === 0) return { status: 'out-of-stock', label: 'Sem Estoque', color: 'bg-red-100 text-red-800' };
    if (currentStock <= minStock) return { status: 'low-stock', label: 'Estoque Baixo', color: 'bg-yellow-100 text-yellow-800' };
    if (currentStock >= maxStock) return { status: 'overstock', label: 'Excesso', color: 'bg-blue-100 text-blue-800' };
    return { status: 'normal', label: 'Normal', color: 'bg-green-100 text-green-800' };
  };

  const stockStatus = getStockStatus();
  const stockPercentage = Math.min((currentStock / maxStock) * 100, 100);

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg line-clamp-1">{name}</CardTitle>
              <p className="text-sm text-gray-600">SKU: {sku}</p>
            </div>
          </div>
          <Badge className={stockStatus.color}>
            {stockStatus.status === 'out-of-stock' && <AlertTriangle className="w-3 h-3 mr-1" />}
            {stockStatus.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Stock Level */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Estoque Atual</span>
              <span className="text-lg font-bold">{currentStock} unidades</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={\`h-2 rounded-full \${
                  stockStatus.status === 'out-of-stock' ? 'bg-red-500' :
                  stockStatus.status === 'low-stock' ? 'bg-yellow-500' :
                  stockStatus.status === 'overstock' ? 'bg-blue-500' : 'bg-green-500'
                }\`}
                style={{ width: \`\${stockPercentage}%\` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Mín: {minStock}</span>
              <span>Máx: {maxStock}</span>
            </div>
          </div>

          {/* Category and Location */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Categoria</p>
              <p className="font-medium">{category}</p>
            </div>
            <div>
              <p className="text-gray-600">Localização</p>
              <p className="font-medium">{location}</p>
            </div>
          </div>

          {/* Financial Info */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Preço Unitário</p>
                <p className="font-bold text-green-600">R$ {unitPrice.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-gray-600">Valor Total</p>
                <p className="font-bold text-blue-600">R$ {totalValue.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Supplier and Last Updated */}
          <div className="text-xs text-gray-500">
            <p>Fornecedor: {supplier}</p>
            <p>Atualizado: {lastUpdated}</p>
          </div>

          {/* Actions */}
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" className="flex-1">
              <Minus className="w-4 h-4 mr-1" />
              Saída
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              <Plus className="w-4 h-4 mr-1" />
              Entrada
            </Button>
            <Button size="sm">
              <BarChart3 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;`
    },
    {
      path: 'src/components/InventoryDashboard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Boxes,
  ArrowUpDown,
  Truck
} from 'lucide-react';

const InventoryDashboard = () => {
  const inventoryMetrics = {
    totalProducts: 1247,
    totalValue: 2840500,
    lowStockAlerts: 23,
    outOfStock: 8,
    reorderPoints: 15,
    averageTurnover: 6.8
  };

  const topProducts = [
    { name: 'Produto A', stock: 150, value: 45000, turnover: 8.2 },
    { name: 'Produto B', stock: 89, value: 32000, turnover: 7.5 },
    { name: 'Produto C', stock: 234, value: 78000, turnover: 6.9 },
    { name: 'Produto D', stock: 67, value: 28000, turnover: 5.8 }
  ];

  const recentMovements = [
    { type: 'entrada', product: 'Produto X', quantity: 50, date: '2024-03-20', user: 'João Silva' },
    { type: 'saida', product: 'Produto Y', quantity: 25, date: '2024-03-20', user: 'Maria Santos' },
    { type: 'entrada', product: 'Produto Z', quantity: 100, date: '2024-03-19', user: 'Carlos Lima' },
    { type: 'saida', product: 'Produto W', quantity: 15, date: '2024-03-19', user: 'Ana Costa' }
  ];

  const alerts = [
    { type: 'low-stock', message: 'Produto ABC está com estoque baixo (5 unidades)', priority: 'high' },
    { type: 'out-of-stock', message: 'Produto XYZ está em falta', priority: 'critical' },
    { type: 'reorder', message: 'Produto DEF atingiu ponto de reposição', priority: 'medium' },
    { type: 'expiration', message: '12 produtos próximos ao vencimento', priority: 'high' }
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Produtos</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inventoryMetrics.totalProducts.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Valor Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {(inventoryMetrics.totalValue / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">Valor do estoque</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alertas</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{inventoryMetrics.lowStockAlerts}</div>
            <p className="text-xs text-muted-foreground">Produtos com estoque baixo</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Giro Médio</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inventoryMetrics.averageTurnover}x</div>
            <p className="text-xs text-muted-foreground">Vezes por mês</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Produtos de Maior Valor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.stock} unidades</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">R$ {product.value.toLocaleString()}</p>
                    <div className="flex items-center text-sm text-green-600">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      <span>{product.turnover}x</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Movements */}
        <Card>
          <CardHeader>
            <CardTitle>Movimentações Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMovements.map((movement, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                  <div className={\`w-8 h-8 rounded-full flex items-center justify-center \${
                    movement.type === 'entrada' ? 'bg-green-100' : 'bg-red-100'
                  }\`}>
                    {movement.type === 'entrada' ? (
                      <ArrowUpDown className="w-4 h-4 text-green-600 rotate-180" />
                    ) : (
                      <ArrowUpDown className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{movement.product}</p>
                    <p className="text-xs text-gray-600">
                      {movement.type === 'entrada' ? 'Entrada' : 'Saída'} de {movement.quantity} unidades
                    </p>
                    <p className="text-xs text-gray-500">{movement.user} • {movement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Alertas do Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 border-l-4 border-yellow-400 bg-yellow-50 rounded-r-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{alert.message}</p>
                </div>
                <Badge variant={alert.priority === 'critical' ? 'destructive' : alert.priority === 'high' ? 'default' : 'secondary'}>
                  {alert.priority === 'critical' ? 'Crítico' : alert.priority === 'high' ? 'Alto' : 'Médio'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryDashboard;`
    },
    {
      path: 'src/App.tsx',
      content: `import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import InventoryDashboard from './components/InventoryDashboard';
import { Button } from '@/components/ui/button';
import { Package, BarChart3, Truck, FileText, Settings, PlusCircle, Search } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const products = [
    {
      id: 'PROD001',
      name: 'Smartphone Samsung Galaxy S24',
      sku: 'SAMS24-128',
      category: 'Eletrônicos',
      currentStock: 45,
      minStock: 20,
      maxStock: 100,
      unitPrice: 2899.99,
      totalValue: 130499.55,
      location: 'Estoque A - Prateleira 1',
      supplier: 'Samsung Electronics',
      lastUpdated: '2024-03-20 14:30'
    },
    {
      id: 'PROD002',
      name: 'Notebook Dell Inspiron 15',
      sku: 'DELL-INS15-512',
      category: 'Informática',
      currentStock: 12,
      minStock: 15,
      maxStock: 50,
      unitPrice: 3499.99,
      totalValue: 41999.88,
      location: 'Estoque B - Prateleira 3',
      supplier: 'Dell Technologies',
      lastUpdated: '2024-03-19 16:45'
    },
    {
      id: 'PROD003',
      name: 'Fone de Ouvido Sony WH-1000XM5',
      sku: 'SONY-WH1000-XM5',
      category: 'Áudio',
      currentStock: 0,
      minStock: 10,
      maxStock: 80,
      unitPrice: 1899.99,
      totalValue: 0,
      location: 'Estoque A - Prateleira 5',
      supplier: 'Sony Corporation',
      lastUpdated: '2024-03-18 10:20'
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
                    placeholder="Buscar produtos por nome ou SKU..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant={currentView === 'dashboard' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('dashboard')}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button
                  variant={currentView === 'products' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('products')}
                >
                  <Package className="w-4 h-4 mr-2" />
                  Produtos
                </Button>
                <Button
                  variant={currentView === 'movements' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('movements')}
                >
                  <Truck className="w-4 h-4 mr-2" />
                  Movimentações
                </Button>
                <Button
                  variant={currentView === 'reports' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('reports')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Relatórios
                </Button>
                <Button variant="outline">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Novo Produto
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
                <h2 className="text-2xl font-bold mb-2">Dashboard de Estoque</h2>
                <p className="text-gray-600">Visão geral completa do seu inventário</p>
              </div>
              <InventoryDashboard />
            </div>
          )}

          {currentView === 'products' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Gestão de Produtos</h2>
                <p className="text-gray-600">{products.length} produtos cadastrados</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          )}

          {currentView === 'movements' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Movimentações de Estoque</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Entradas Hoje</h3>
                  <p className="text-3xl font-bold text-green-600">156</p>
                  <p className="text-sm text-gray-500">+12% vs ontem</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Saídas Hoje</h3>
                  <p className="text-3xl font-bold text-red-600">89</p>
                  <p className="text-sm text-gray-500">-5% vs ontem</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Transferências</h3>
                  <p className="text-3xl font-bold text-blue-600">23</p>
                  <p className="text-sm text-gray-500">Entre estoques</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Ajustes</h3>
                  <p className="text-3xl font-bold text-purple-600">8</p>
                  <p className="text-sm text-gray-500">Correções manuais</p>
                </div>
              </div>
            </div>
          )}

          {currentView === 'reports' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Relatórios de Estoque</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <Package className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Relatório de Estoque</h3>
                  <p className="text-gray-600 mb-4">Posição atual de todos os produtos</p>
                  <Button>Gerar Relatório</Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <BarChart3 className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Análise de Giro</h3>
                  <p className="text-gray-600 mb-4">Performance de rotatividade</p>
                  <Button>Ver Análise</Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <FileText className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Movimentações</h3>
                  <p className="text-gray-600 mb-4">Histórico de entradas e saídas</p>
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
    description: `Sistema completo de estoque com ${config.template.name}`,
    features: [
      'Controle de estoque em tempo real',
      'Alertas de estoque baixo',
      'Gestão de fornecedores',
      'Relatórios de movimentação',
      'Dashboard analítico',
      'Código de barras e SKU',
      ...config.template.features
    ]
  };
};
