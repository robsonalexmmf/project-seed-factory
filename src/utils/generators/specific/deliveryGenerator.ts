import { ProjectFile, GeneratedProject } from '../projectGeneratorFactory';
import { ProjectTemplate } from '../../projectTemplates';

interface ProjectConfig {
  projectName: string;
  projectDescription: string;
  customFeatures: string;
  template: ProjectTemplate;
}

export const generateDeliveryProject = (config: ProjectConfig): GeneratedProject => {
  const files: ProjectFile[] = [
    {
      path: 'src/components/RestaurantCard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, MapPin } from 'lucide-react';

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  distance: string;
  image: string;
  isOpen: boolean;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  cuisine,
  rating,
  deliveryTime,
  distance,
  image,
  isOpen
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {!isOpen && (
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-t-lg flex items-center justify-center">
            <span className="text-white font-semibold">Fechado</span>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{name}</CardTitle>
        <Badge variant="secondary" className="w-fit">{cuisine}</Badge>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{deliveryTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{distance}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;`
    },
    {
      path: 'src/components/CartSidebar.tsx',
      content: `import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Seu Carrinho</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">Carrinho vazio</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-600">R$ {item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <Badge variant="outline">{item.quantity}</Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-bold">R$ {total.toFixed(2)}</span>
            </div>
            <Button onClick={onCheckout} className="w-full">
              Finalizar Pedido
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;`
    },
    {
      path: 'src/pages/DeliveryDashboard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Users, ShoppingBag, DollarSign, MapPin, Clock } from 'lucide-react';

const DeliveryDashboard = () => {
  const stats = [
    { title: 'Pedidos Hoje', value: '156', icon: ShoppingBag, change: '+12%' },
    { title: 'Receita Hoje', value: 'R$ 3.240', icon: DollarSign, change: '+8%' },
    { title: 'Clientes Ativos', value: '1.234', icon: Users, change: '+5%' },
    { title: 'Tempo Médio', value: '28 min', icon: Clock, change: '-3%' }
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard - ${config.projectName}</h1>
      
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
            <CardTitle>Pedidos Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((order) => (
                <div key={order} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Pedido #{order}001</p>
                    <p className="text-sm text-gray-600">Cliente João Silva</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">R$ 45,90</p>
                    <Badge variant="outline">Em preparo</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Entregadores Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((driver) => (
                <div key={driver} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    M{driver}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Entregador {driver}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>2 entregas ativas</span>
                    </div>
                  </div>
                  <Badge variant="default">Ativo</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeliveryDashboard;`
    },
    {
      path: 'src/App.tsx',
      content: `import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantCard from './components/RestaurantCard';
import CartSidebar from './components/CartSidebar';
import DeliveryDashboard from './pages/DeliveryDashboard';
import { Button } from '@/components/ui/button';
import { ShoppingCart, BarChart3 } from 'lucide-react';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [currentView, setCurrentView] = useState('restaurants');

  const restaurants = [
    {
      name: 'Burger King',
      cuisine: 'Fast Food',
      rating: 4.5,
      deliveryTime: '20-30 min',
      distance: '1.2 km',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400',
      isOpen: true
    },
    {
      name: 'Pizza Hut',
      cuisine: 'Italiana',
      rating: 4.7,
      deliveryTime: '25-35 min',
      distance: '0.8 km',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400',
      isOpen: true
    },
    {
      name: 'Sushi Yamato',
      cuisine: 'Japonesa',
      rating: 4.8,
      deliveryTime: '30-40 min',
      distance: '2.1 km',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400',
      isOpen: false
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
                variant={currentView === 'restaurants' ? 'default' : 'outline'}
                onClick={() => setCurrentView('restaurants')}
              >
                Restaurantes
              </Button>
              <Button
                variant={currentView === 'dashboard' ? 'default' : 'outline'}
                onClick={() => setCurrentView('dashboard')}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <Button onClick={() => setCartOpen(true)} variant="outline">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Carrinho ({cartItems.length})
              </Button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto p-6">
          {currentView === 'restaurants' ? (
            <div>
              <h2 className="text-xl font-semibold mb-6">Restaurantes Próximos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurants.map((restaurant, index) => (
                  <RestaurantCard key={index} {...restaurant} />
                ))}
              </div>
            </div>
          ) : (
            <DeliveryDashboard />
          )}
        </main>

        <CartSidebar
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={() => {}}
          onRemoveItem={() => {}}
          onCheckout={() => {}}
        />
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
    description: `Sistema completo de delivery com ${config.template.name}`,
    features: [
      'Interface de restaurantes',
      'Carrinho de compras',
      'Dashboard administrativo',
      'Sistema de pedidos',
      'Gestão de entregadores',
      'Relatórios em tempo real',
      ...config.template.features
    ]
  };
};
