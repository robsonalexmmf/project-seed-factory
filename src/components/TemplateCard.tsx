
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
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{template.name}</CardTitle>
          <Badge variant={template.complexity === 'easy' ? 'secondary' : 'default'}>
            {template.complexity === 'easy' ? 'Básico' : 
             template.complexity === 'medium' ? 'Intermediário' : 'Avançado'}
          </Badge>
        </div>
        <CardDescription>{template.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Recursos incluídos:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {template.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {categoryName && (
            <div>
              <h4 className="font-semibold mb-2">Categoria:</h4>
              <Badge variant="outline">{categoryName}</Badge>
            </div>
          )}
        </div>
        
        <Button 
          onClick={() => onSelect(template)} 
          className="w-full mt-4"
          disabled={isBlocked}
        >
          {isBlocked ? 'Limite Atingido' : 'Gerar Projeto'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
