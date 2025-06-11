
import React from 'react';
import { ProjectTemplate } from '@/utils/projectTemplates';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings,
  Home,
  CreditCard,
  Package,
  MessageSquare,
  Calendar,
  FileText,
  Heart,
  BookOpen,
  Music,
  Camera,
  Car,
  Plane,
  Building,
  Stethoscope,
  GraduationCap,
  Coffee,
  Shirt,
  Gamepad2,
  Map,
  Shield,
  Zap
} from 'lucide-react';

interface TemplatePreviewProps {
  template: ProjectTemplate;
  projectName: string;
  customFeatures: string;
}

export const generateTemplatePreview = (template: ProjectTemplate, projectName: string, customFeatures: string) => {
  
  // Delivery App Preview
  if (template.id === 'delivery-app') {
    return {
      screens: [
        {
          name: 'Sistema Inicial',
          description: 'Tela principal do app de delivery',
          content: (
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-500 p-3 rounded-full">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">{projectName}</h1>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=800&q=80" 
                  alt="Delivery app interface"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-800">Restaurantes</h3>
                    <p className="text-orange-600 text-sm">150+ parceiros</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800">Pedidos Hoje</h3>
                    <p className="text-green-600 text-sm">1,243 entregas</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          name: 'Carrinho',
          description: 'Sistema de carrinho de compras',
          content: (
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <ShoppingCart className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold">Carrinho de Compras</h2>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80" 
                  alt="Shopping cart interface"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                
                <div className="space-y-3">
                  {['Pizza Margherita', 'Hambúrguer Artesanal', 'Refrigerante'].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{item}</span>
                      <span className="text-green-600 font-bold">R$ {(15 + idx * 5).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-green-600">R$ 35.00</span>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          name: 'Dashboard',
          description: 'Painel administrativo do delivery',
          content: (
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-purple-600" />
                  Dashboard Administrativo
                </h2>
                
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                  alt="Admin dashboard"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">1,243</div>
                    <div className="text-blue-800 text-sm">Pedidos Hoje</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">R$ 15.8K</div>
                    <div className="text-green-800 text-sm">Faturamento</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600">97%</div>
                    <div className="text-orange-800 text-sm">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ]
    };
  }

  // E-commerce Preview
  if (template.category === 'e-commerce') {
    return {
      screens: [
        {
          name: 'Loja Virtual',
          description: 'Interface principal da loja online',
          content: (
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold">{projectName}</h1>
                  <Badge className="bg-blue-100 text-blue-800">Loja Online</Badge>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" 
                  alt="E-commerce store"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  {template.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="bg-blue-50 p-3 rounded-lg">
                      <div className="font-medium text-blue-800">{feature}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        },
        {
          name: 'Produtos',
          description: 'Catálogo de produtos da loja',
          content: (
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-6">Catálogo de Produtos</h2>
                
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" 
                  alt="Product catalog"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                
                <div className="grid grid-cols-2 gap-3">
                  {['Produto A', 'Produto B', 'Produto C', 'Produto D'].map((product, idx) => (
                    <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium">{product}</div>
                      <div className="text-green-600 font-bold">R$ {(50 + idx * 20).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        },
        {
          name: 'Vendas',
          description: 'Dashboard de vendas e analytics',
          content: (
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-6">Dashboard de Vendas</h2>
                
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                  alt="Sales dashboard"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">R$ 45K</div>
                    <div className="text-green-800 text-sm">Vendas do Mês</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">1,856</div>
                    <div className="text-blue-800 text-sm">Pedidos</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600">92%</div>
                    <div className="text-orange-800 text-sm">Conversão</div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ]
    };
  }

  // CRM Preview
  if (template.category === 'crm' || template.name.toLowerCase().includes('crm')) {
    return {
      screens: [
        {
          name: 'Sistema CRM',
          description: 'Interface principal do CRM',
          content: (
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold">{projectName}</h1>
                  <Badge className="bg-indigo-100 text-indigo-800">CRM Ativo</Badge>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                  alt="CRM interface"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-800">Leads Ativos</h3>
                    <p className="text-indigo-600 text-2xl font-bold">247</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800">Conversões</h3>
                    <p className="text-green-600 text-2xl font-bold">89</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          name: 'Clientes',
          description: 'Gestão de clientes e contatos',
          content: (
            <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="w-6 h-6 text-green-600" />
                  <h2 className="text-xl font-bold">Gestão de Clientes</h2>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
                  alt="Customer management"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                
                <div className="space-y-3">
                  {['João Silva', 'Maria Santos', 'Pedro Costa', 'Ana Oliveira'].map((client, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{client}</span>
                      <Badge variant="outline" className="text-green-600">Ativo</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        },
        {
          name: 'Dashboard',
          description: 'Métricas e relatórios do CRM',
          content: (
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-purple-600" />
                  Analytics CRM
                </h2>
                
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                  alt="CRM analytics"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">2,543</div>
                    <div className="text-blue-800 text-sm">Total Leads</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">34%</div>
                    <div className="text-green-800 text-sm">Taxa Conversão</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600">R$ 125K</div>
                    <div className="text-orange-800 text-sm">Receita Mensal</div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ]
    };
  }

  // Blog/Content Preview
  if (template.category === 'content' || template.name.toLowerCase().includes('blog')) {
    return {
      screens: [
        {
          name: 'Blog',
          description: 'Interface principal do blog',
          content: (
            <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold">{projectName}</h1>
                  <Badge className="bg-yellow-100 text-yellow-800">Blog Ativo</Badge>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                  alt="Blog interface"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="space-y-3">
                  {['Como criar conteúdo viral', 'SEO para iniciantes', 'Marketing digital 2024'].map((post, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                      <h3 className="font-medium">{post}</h3>
                      <p className="text-sm text-gray-600">Publicado há {idx + 1} dias</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        },
        {
          name: 'Editor',
          description: 'Editor de conteúdo do blog',
          content: (
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold">Editor de Posts</h2>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80" 
                  alt="Content editor"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg">
                    <p className="text-gray-600">Editor de texto rico com formatação completa</p>
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="outline">Rascunho</Badge>
                    <Badge variant="outline">Revisão</Badge>
                    <Badge className="bg-green-100 text-green-800">Publicado</Badge>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          name: 'Analytics',
          description: 'Métricas de engajamento do blog',
          content: (
            <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-green-600" />
                  Analytics do Blog
                </h2>
                
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                  alt="Blog analytics"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">45.2K</div>
                    <div className="text-blue-800 text-sm">Visualizações</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">1,234</div>
                    <div className="text-green-800 text-sm">Comentários</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">89%</div>
                    <div className="text-purple-800 text-sm">Engajamento</div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ]
    };
  }

  // Healthcare Preview
  if (template.category === 'health') {
    return {
      screens: [
        {
          name: 'Sistema Médico',
          description: 'Interface principal do sistema de saúde',
          content: (
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <Stethoscope className="w-8 h-8 text-green-600" />
                    <h1 className="text-2xl font-bold">{projectName}</h1>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Sistema Ativo</Badge>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80" 
                  alt="Healthcare system"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800">Pacientes Ativos</h3>
                    <p className="text-green-600 text-2xl font-bold">1,247</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800">Consultas Hoje</h3>
                    <p className="text-blue-600 text-2xl font-bold">89</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          name: 'Prontuários',
          description: 'Sistema de prontuários eletrônicos',
          content: (
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold">Prontuários Eletrônicos</h2>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80" 
                  alt="Medical records"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                
                <div className="space-y-3">
                  {['João Silva - Consulta Cardiologia', 'Maria Santos - Exame Rotina', 'Pedro Costa - Retorno'].map((record, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{record}</span>
                      <Badge variant="outline" className="text-blue-600">Completo</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        },
        {
          name: 'Agendamentos',
          description: 'Sistema de agendamento de consultas',
          content: (
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-6 h-6 text-purple-600" />
                  <h2 className="text-xl font-bold">Agenda Médica</h2>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80" 
                  alt="Medical schedule"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                
                <div className="grid grid-cols-1 gap-3">
                  {['09:00 - Consulta Geral', '10:30 - Exame Preventivo', '14:00 - Retorno', '15:30 - Primeira Consulta'].map((appointment, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">{appointment}</span>
                      <Badge className="bg-green-100 text-green-800">Confirmado</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        }
      ]
    };
  }

  // Education Preview
  if (template.category === 'education') {
    return {
      screens: [
        {
          name: 'Plataforma EAD',
          description: 'Interface principal da plataforma educacional',
          content: (
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-8 h-8 text-indigo-600" />
                    <h1 className="text-2xl font-bold">{projectName}</h1>
                  </div>
                  <Badge className="bg-indigo-100 text-indigo-800">Plataforma Ativa</Badge>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                  alt="Education platform"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-800">Alunos Ativos</h3>
                    <p className="text-indigo-600 text-2xl font-bold">2,847</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800">Cursos Online</h3>
                    <p className="text-green-600 text-2xl font-bold">156</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          name: 'Cursos',
          description: 'Catálogo de cursos disponíveis',
          content: (
            <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <BookOpen className="w-6 h-6 text-green-600" />
                  <h2 className="text-xl font-bold">Catálogo de Cursos</h2>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80" 
                  alt="Course catalog"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                
                <div className="space-y-3">
                  {['Programação Web', 'Design UX/UI', 'Marketing Digital', 'Gestão de Projetos'].map((course, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{course}</span>
                      <Badge className="bg-blue-100 text-blue-800">{40 + idx * 10}h</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        },
        {
          name: 'Progresso',
          description: 'Acompanhamento do progresso dos alunos',
          content: (
            <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 h-full">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-yellow-600" />
                  Progresso dos Alunos
                </h2>
                
                <img 
                  src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&w=800&q=80" 
                  alt="Student progress"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">89%</div>
                    <div className="text-green-800 text-sm">Taxa Conclusão</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">4.8</div>
                    <div className="text-blue-800 text-sm">Avaliação Média</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">1,456</div>
                    <div className="text-purple-800 text-sm">Certificados</div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ]
    };
  }

  // Default preview para templates não específicos
  return {
    screens: [
      {
        name: 'Sistema Principal',
        description: `Interface principal do ${template.name}`,
        content: (
          <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 h-full">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <template.icon className="w-8 h-8 text-blue-600" />
                  <h1 className="text-2xl font-bold">{projectName}</h1>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Sistema Ativo</Badge>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                alt="System interface"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              
              <div className="grid grid-cols-2 gap-4">
                {template.features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="bg-blue-50 p-3 rounded-lg">
                    <div className="font-medium text-blue-800">{feature}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      },
      {
        name: 'Funcionalidades',
        description: 'Recursos principais do sistema',
        content: (
          <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 h-full">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-green-600" />
                Funcionalidades Principais
              </h2>
              
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                alt="System features"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              
              <div className="space-y-3">
                {template.features.slice(0, 6).map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      },
      {
        name: 'Dashboard',
        description: 'Painel administrativo do sistema',
        content: (
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 h-full">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-2 text-purple-600" />
                Dashboard Administrativo
              </h2>
              
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="Admin dashboard"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">2,543</div>
                  <div className="text-blue-800 text-sm">Total Usuários</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">89%</div>
                  <div className="text-green-800 text-sm">Eficiência</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">R$ 45K</div>
                  <div className="text-orange-800 text-sm">Receita</div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  };
};
