
import { ProjectFile, GeneratedProject } from '../projectGeneratorFactory';
import { ProjectTemplate } from '../../projectTemplates';

interface ProjectConfig {
  projectName: string;
  projectDescription: string;
  customFeatures: string;
  template: ProjectTemplate;
}

export const generateRealEstateProject = (config: ProjectConfig): GeneratedProject => {
  const files: ProjectFile[] = [
    {
      path: 'src/components/PropertyCard.tsx',
      content: `import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Heart, Phone } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  title: string;
  price: number;
  type: 'sale' | 'rent';
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  features: string[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  price,
  type,
  address,
  bedrooms,
  bathrooms,
  area,
  images,
  features
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow group">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <Badge 
            className={\`absolute top-3 left-3 \${type === 'sale' ? 'bg-green-500' : 'bg-blue-500'}\`}
          >
            {type === 'sale' ? 'Venda' : 'Aluguel'}
          </Badge>
          <Button
            size="sm"
            variant="outline"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white"
          >
            <Heart className="w-4 h-4" />
          </Button>
          <div className="absolute bottom-3 left-3">
            <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm font-bold">
              R$ {type === 'rent' ? \`\${price.toLocaleString()}/mês\` : price.toLocaleString()}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{address}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              <span>{area}m²</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
          {features.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{features.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Phone className="w-4 h-4 mr-1" />
            Contato
          </Button>
          <Button size="sm" className="flex-1">
            Ver Detalhes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;`
    },
    {
      path: 'src/components/PropertySearch.tsx',
      content: `import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, MapPin } from 'lucide-react';

interface PropertySearchProps {
  onSearch: (filters: any) => void;
}

const PropertySearch: React.FC<PropertySearchProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    propertyType: ''
  });

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Search className="w-5 h-5" />
          <span>Buscar Imóveis</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="lg:col-span-2">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Localização ou bairro"
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                className="pl-10"
              />
            </div>
          </div>
          
          <Select value={filters.type} onValueChange={(value) => setFilters({...filters, type: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sale">Venda</SelectItem>
              <SelectItem value="rent">Aluguel</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.propertyType} onValueChange={(value) => setFilters({...filters, propertyType: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Imóvel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartamento</SelectItem>
              <SelectItem value="house">Casa</SelectItem>
              <SelectItem value="condo">Condomínio</SelectItem>
              <SelectItem value="land">Terreno</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex space-x-2">
            <Input
              placeholder="Preço mín"
              value={filters.minPrice}
              onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
            />
            <Input
              placeholder="Preço máx"
              value={filters.maxPrice}
              onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
            />
          </div>

          <Button onClick={handleSearch} className="w-full">
            <Search className="w-4 h-4 mr-2" />
            Buscar
          </Button>
        </div>

        <div className="flex items-center space-x-4 mt-4">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros Avançados
          </Button>
          <div className="flex space-x-2">
            {['1', '2', '3', '4+'].map((bed) => (
              <Button
                key={bed}
                variant={filters.bedrooms === bed ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilters({...filters, bedrooms: bed})}
              >
                {bed} {bed === '4+' ? 'quartos' : 'quarto' + (bed === '1' ? '' : 's')}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertySearch;`
    },
    {
      path: 'src/App.tsx',
      content: `import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyCard from './components/PropertyCard';
import PropertySearch from './components/PropertySearch';
import { Button } from '@/components/ui/button';
import { Home, PlusCircle, BarChart3, Users } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('properties');

  const properties = [
    {
      id: '1',
      title: 'Apartamento Moderno no Centro',
      price: 450000,
      type: 'sale' as const,
      address: 'Centro, São Paulo - SP',
      bedrooms: 2,
      bathrooms: 2,
      area: 85,
      images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400'],
      features: ['Varanda', 'Academia', 'Piscina', 'Portaria 24h']
    },
    {
      id: '2',
      title: 'Casa com Quintal em Condomínio',
      price: 3500,
      type: 'rent' as const,
      address: 'Vila Madalena, São Paulo - SP',
      bedrooms: 3,
      bathrooms: 3,
      area: 120,
      images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400'],
      features: ['Quintal', 'Garagem', 'Churrasqueira']
    },
    {
      id: '3',
      title: 'Cobertura Duplex com Vista',
      price: 890000,
      type: 'sale' as const,
      address: 'Moema, São Paulo - SP',
      bedrooms: 4,
      bathrooms: 4,
      area: 180,
      images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400'],
      features: ['Terraço', 'Vista panorâmica', 'Sacada gourmet', 'Vagas duplas']
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
                  variant={currentView === 'properties' ? 'default' : 'outline'}
                  onClick={() => setCurrentView('properties')}
                >
                  <Home className="w-4 h-4 mr-2" />
                  Imóveis
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
                  Anunciar
                </Button>
                <Button variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Clientes
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6">
          {currentView === 'properties' && (
            <div>
              <PropertySearch onSearch={() => {}} />
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Imóveis Disponíveis</h2>
                <p className="text-gray-600">{properties.length} imóveis encontrados</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
            </div>
          )}

          {currentView === 'dashboard' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Dashboard Imobiliário</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Total de Imóveis</h3>
                  <p className="text-3xl font-bold text-blue-600">156</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Vendidos Este Mês</h3>
                  <p className="text-3xl font-bold text-green-600">12</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Visitas Agendadas</h3>
                  <p className="text-3xl font-bold text-orange-600">34</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Clientes Ativos</h3>
                  <p className="text-3xl font-bold text-purple-600">89</p>
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
    description: `Plataforma completa imobiliária com ${config.template.name}`,
    features: [
      'Catálogo de imóveis',
      'Sistema de busca avançada',
      'Gestão de clientes',
      'Agendamento de visitas',
      'Portal do corretor',
      'Relatórios de vendas',
      ...config.template.features
    ]
  };
};
