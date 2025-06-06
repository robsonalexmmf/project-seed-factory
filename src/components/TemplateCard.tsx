
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectTemplate } from '@/utils/projectTemplates';

interface TemplateCardProps {
  template: ProjectTemplate;
  onSelect: (template: ProjectTemplate) => void;
  categoryName?: string;
  isBlocked?: boolean;
}

const TemplateCard = ({ template, onSelect, categoryName, isBlocked }: TemplateCardProps) => {
  const IconComponent = template.icon;
  
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-purple-200 bg-gradient-to-br from-white to-gray-50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg">
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <Badge 
            variant={template.complexity === 'easy' ? 'secondary' : template.complexity === 'medium' ? 'default' : 'destructive'}
            className="font-semibold"
          >
            {template.complexity === 'easy' ? 'Básico' : 
             template.complexity === 'medium' ? 'Intermediário' : 'Avançado'}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-gray-800 leading-tight">
          {template.name}
        </CardTitle>
        <CardDescription className="text-gray-600 text-base leading-relaxed">
          {template.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Recursos incluídos:
            </h4>
            <ul className="space-y-2">
              {template.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {categoryName && (
            <div className="pt-2 border-t border-gray-100">
              <h4 className="font-semibold text-gray-700 mb-2 text-sm">Categoria:</h4>
              <Badge variant="outline" className="bg-gradient-to-r from-blue-50 to-purple-50 border-purple-200">
                {categoryName}
              </Badge>
            </div>
          )}
        </div>
        
        <Button 
          onClick={() => onSelect(template)} 
          className={`w-full mt-6 py-3 font-bold text-lg rounded-xl transition-all duration-300 ${
            isBlocked 
              ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105'
          }`}
          disabled={isBlocked}
        >
          {isBlocked ? 'Limite Atingido' : 'Gerar Projeto'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
