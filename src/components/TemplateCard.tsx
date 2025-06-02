
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LucideIcon, Rocket, ArrowRight } from 'lucide-react';

interface TemplateCardProps {
  template: {
    id: string;
    name: string;
    description: string;
    category: string;
    features: string[];
    icon: LucideIcon;
    color: string;
  };
  isSelected: boolean;
  onSelect: () => void;
  categoryName: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ 
  template, 
  isSelected, 
  onSelect, 
  categoryName 
}) => {
  // Mapear cores para gradientes mais bonitos
  const getGradientClass = (color: string) => {
    const gradientMap: { [key: string]: string } = {
      'bg-blue-600': 'from-blue-500 to-blue-700',
      'bg-green-600': 'from-green-500 to-emerald-600',
      'bg-purple-600': 'from-purple-500 to-purple-700',
      'bg-red-600': 'from-red-500 to-rose-600',
      'bg-yellow-600': 'from-yellow-500 to-orange-500',
      'bg-indigo-600': 'from-indigo-500 to-indigo-700',
      'bg-pink-600': 'from-pink-500 to-rose-600',
      'bg-teal-600': 'from-teal-500 to-cyan-600',
      'bg-orange-600': 'from-orange-500 to-red-500',
      'bg-cyan-600': 'from-cyan-500 to-blue-500',
      'bg-emerald-600': 'from-emerald-500 to-green-600',
      'bg-rose-600': 'from-rose-500 to-pink-600',
      'bg-violet-600': 'from-violet-500 to-purple-600',
      'bg-lime-600': 'from-lime-500 to-green-500',
      'bg-amber-600': 'from-amber-500 to-orange-500',
      'bg-slate-600': 'from-slate-500 to-gray-600',
    };
    return gradientMap[color] || 'from-blue-500 to-purple-600';
  };

  const getIconBgClass = (color: string) => {
    const iconMap: { [key: string]: string } = {
      'bg-blue-600': 'bg-gradient-to-r from-blue-100 to-blue-200',
      'bg-green-600': 'bg-gradient-to-r from-green-100 to-emerald-200',
      'bg-purple-600': 'bg-gradient-to-r from-purple-100 to-purple-200',
      'bg-red-600': 'bg-gradient-to-r from-red-100 to-rose-200',
      'bg-yellow-600': 'bg-gradient-to-r from-yellow-100 to-orange-200',
      'bg-indigo-600': 'bg-gradient-to-r from-indigo-100 to-indigo-200',
      'bg-pink-600': 'bg-gradient-to-r from-pink-100 to-rose-200',
      'bg-teal-600': 'bg-gradient-to-r from-teal-100 to-cyan-200',
      'bg-orange-600': 'bg-gradient-to-r from-orange-100 to-red-200',
      'bg-cyan-600': 'bg-gradient-to-r from-cyan-100 to-blue-200',
      'bg-emerald-600': 'bg-gradient-to-r from-emerald-100 to-green-200',
      'bg-rose-600': 'bg-gradient-to-r from-rose-100 to-pink-200',
      'bg-violet-600': 'bg-gradient-to-r from-violet-100 to-purple-200',
      'bg-lime-600': 'bg-gradient-to-r from-lime-100 to-green-200',
      'bg-amber-600': 'bg-gradient-to-r from-amber-100 to-orange-200',
      'bg-slate-600': 'bg-gradient-to-r from-slate-100 to-gray-200',
    };
    return iconMap[color] || 'bg-gradient-to-r from-blue-100 to-purple-200';
  };

  const getTextColorClass = (color: string) => {
    const textMap: { [key: string]: string } = {
      'bg-blue-600': 'text-blue-600',
      'bg-green-600': 'text-green-600',
      'bg-purple-600': 'text-purple-600',
      'bg-red-600': 'text-red-600',
      'bg-yellow-600': 'text-yellow-600',
      'bg-indigo-600': 'text-indigo-600',
      'bg-pink-600': 'text-pink-600',
      'bg-teal-600': 'text-teal-600',
      'bg-orange-600': 'text-orange-600',
      'bg-cyan-600': 'text-cyan-600',
      'bg-emerald-600': 'text-emerald-600',
      'bg-rose-600': 'text-rose-600',
      'bg-violet-600': 'text-violet-600',
      'bg-lime-600': 'text-lime-600',
      'bg-amber-600': 'text-amber-600',
      'bg-slate-600': 'text-slate-600',
    };
    return textMap[color] || 'text-blue-600';
  };

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-gray-200 overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${getGradientClass(template.color)}`}></div>
      
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-4 rounded-2xl ${getIconBgClass(template.color)} shadow-lg group-hover:scale-110 transition-transform`}>
            <template.icon className={`w-8 h-8 ${getTextColorClass(template.color)}`} />
          </div>
          <Badge variant="secondary" className="text-sm font-semibold px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200">
            {categoryName}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
          {template.name}
        </CardTitle>
        <CardDescription className="text-gray-600 text-base leading-relaxed">
          {template.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <p className="text-sm font-bold text-gray-700 mb-3 flex items-center">
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-2"></div>
            Funcionalidades:
          </p>
          <div className="flex flex-wrap gap-2">
            {template.features.slice(0, 3).map((feature, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs font-medium px-3 py-1 border-gray-300 text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                {feature}
              </Badge>
            ))}
            {template.features.length > 3 && (
              <Badge 
                variant="outline" 
                className="text-xs font-bold px-3 py-1 border-purple-300 text-purple-700 bg-purple-50"
              >
                +{template.features.length - 3} mais
              </Badge>
            )}
          </div>
        </div>

        <Button 
          onClick={onSelect}
          className={`w-full bg-gradient-to-r ${getGradientClass(template.color)} hover:shadow-lg transition-all duration-300 text-white font-bold py-3 px-6 rounded-xl group-hover:scale-105`}
        >
          <Rocket className="w-5 h-5 mr-2" />
          Usar Template
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
