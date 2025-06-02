
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

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
  return (
    <Card 
      className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${
        isSelected ? 'ring-2 ring-blue-500 shadow-lg' : ''
      }`}
      onClick={onSelect}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className={`p-2 rounded-lg ${template.color} bg-opacity-10`}>
            <template.icon className={`w-6 h-6 ${template.color.replace('bg-', 'text-')}`} />
          </div>
          <Badge variant="secondary" className="text-xs">
            {categoryName}
          </Badge>
        </div>
        <CardTitle className="text-lg">{template.name}</CardTitle>
        <CardDescription className="text-sm">
          {template.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Funcionalidades:</p>
          <div className="flex flex-wrap gap-1">
            {template.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {template.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{template.features.length - 3} mais
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
