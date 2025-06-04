
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectTemplate } from '@/utils/projectTemplates';

interface TemplateCardProps {
  template: ProjectTemplate;
  onSelect: (template: ProjectTemplate) => void;
}

const TemplateCard = ({ template, onSelect }: TemplateCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{template.name}</CardTitle>
          <Badge variant={template.complexity === 'básico' ? 'secondary' : 'default'}>
            {template.complexity}
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
          
          <div>
            <h4 className="font-semibold mb-2">Tecnologias:</h4>
            <div className="flex flex-wrap gap-1">
              {template.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <Button 
          onClick={() => onSelect(template)} 
          className="w-full mt-4"
        >
          Gerar Projeto
        </Button>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
