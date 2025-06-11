
import { ProjectFile, GeneratedProject } from '../projectGeneratorFactory';
import { ProjectTemplate } from '../../projectTemplates';

interface ProjectConfig {
  projectName: string;
  projectDescription: string;
  customFeatures: string;
  template: ProjectTemplate;
}

export const generateEcommerceProject = (config: ProjectConfig): GeneratedProject => {
  const files: ProjectFile[] = [
    {
      path: 'src/components/ProductCard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  inStock,
  discount
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow group">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {discount && (
            <Badge className="absolute top-2 left-2 bg-red-500">
              -{discount}%
            </Badge>
          )}
          <Button
            size="sm"
            variant="outline"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="w-4 h-4" />
          </Button>
          {!inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-t-lg flex items-center justify-center">
              <span className="text-white font-semibold">Esgotado</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-medium text-sm mb-2 line-clamp-2">{name}</h3>
        
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={\`w-3 h-3 \${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}\`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({reviews})</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-green-600">
              R$ {price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                R$ {originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <Button 
          className="w-full" 
          disabled={!inStock}
          size="sm"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;`
    },
    {
      path: 'src/components/ShoppingCart.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShoppingCartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = total > 100 ? 0 : 15;
  const finalTotal = total + shipping;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <ShoppingBag className="w-5 h-5" />
          <span>Carrinho ({items.length})</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingBag className="w-12 h-12 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">Seu carrinho está vazio</p>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-green-600 font-bold">R$ {item.price.toFixed(2)}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
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
            
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Frete:</span>
                <span>{shipping === 0 ? 'Grátis' : \`R$ \${shipping.toFixed(2)}\`}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total:</span>
                <span>R$ {finalTotal.toFixed(2)}</span>
              </div>
              
              {total < 100 && (
                <p className="text-xs text-gray-600 text-center">
                  Frete grátis em compras acima de R$ 100,00
                </p>
              )}
              
              <Button onClick={onCheckout} className="w-full mt-4">
                Finalizar Compra
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ShoppingCart;`
    },
    {
      path: 'src/App.tsx',
      content: `import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';
import { Button } from '@/components/ui/button';
import { ShoppingCart as CartIcon, Search, Menu } from 'lucide-react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      id: '1',
      name: 'Smartphone Samsung Galaxy',
      price: 899.99,
      originalPrice: 1299.99,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      rating: 4,
      reviews: 128,
      inStock: true,
      discount: 31
    },
    {
      id: '2',
      name: 'Notebook Dell Inspiron',
      price: 2499.99,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
      rating: 5,
      reviews: 64,
      inStock: true
    },
    {
      id: '3',
      name: 'Fone de Ouvido Bluetooth',
      price: 149.99,
      originalPrice: 199.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      rating: 4,
      reviews: 89,
      inStock: false,
      discount: 25
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
                    placeholder="Buscar produtos..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setShowCart(!showCart)}
                  className="relative"
                >
                  <CartIcon className="w-4 h-4 mr-2" />
                  Carrinho ({cartItems.length})
                </Button>
                <Button variant="outline" className="md:hidden">
                  <Menu className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex gap-6">
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Produtos em Destaque</h2>
                <p className="text-gray-600">Confira nossas melhores ofertas</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>

            {showCart && (
              <div className="w-80">
                <ShoppingCart
                  items={cartItems}
                  onUpdateQuantity={() => {}}
                  onRemoveItem={() => {}}
                  onCheckout={() => {}}
                />
              </div>
            )}
          </div>
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
    description: `Plataforma completa de e-commerce com ${config.template.name}`,
    features: [
      'Catálogo de produtos',
      'Carrinho de compras',
      'Sistema de pagamento',
      'Gestão de estoque',
      'Avaliações e reviews',
      'Sistema de busca',
      ...config.template.features
    ]
  };
};
