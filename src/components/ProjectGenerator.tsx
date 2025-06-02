
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Download, Rocket, Zap } from 'lucide-react';

interface ProjectGeneratorProps {
  selectedTemplate: any;
  projectName: string;
  projectDescription: string;
  customFeatures: string;
  isGenerating: boolean;
  onProjectNameChange: (value: string) => void;
  onProjectDescriptionChange: (value: string) => void;
  onCustomFeaturesChange: (value: string) => void;
  onGenerate: () => void;
  onCancel: () => void;
}

const ProjectGenerator: React.FC<ProjectGeneratorProps> = ({
  selectedTemplate,
  projectName,
  projectDescription,
  customFeatures,
  isGenerating,
  onProjectNameChange,
  onProjectDescriptionChange,
  onCustomFeaturesChange,
  onGenerate,
  onCancel
}) => {
  if (!selectedTemplate) return null;

  return (
    <Card className="border-t-4 border-t-blue-500">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Rocket className="w-5 h-5 text-blue-500" />
          <span>Configurar e Gerar Projeto</span>
        </CardTitle>
        <CardDescription>
          Configure os detalhes do seu projeto {selectedTemplate.name}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="projectName">Nome do Projeto *</Label>
              <Input
                id="projectName"
                placeholder="Ex: Meu Sistema de Delivery"
                value={projectName}
                onChange={(e) => onProjectNameChange(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="projectDescription">Descrição do Projeto</Label>
              <Textarea
                id="projectDescription"
                placeholder="Descreva brevemente o que seu projeto fará..."
                value={projectDescription}
                onChange={(e) => onProjectDescriptionChange(e.target.value)}
                rows={3}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="customFeatures">Funcionalidades Personalizadas</Label>
              <Textarea
                id="customFeatures"
                placeholder="Adicione funcionalidades extras que deseja incluir..."
                value={customFeatures}
                onChange={(e) => onCustomFeaturesChange(e.target.value)}
                rows={5}
              />
            </div>
          </div>
        </div>

        {/* Template Features Preview */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Funcionalidades Incluídas:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {selectedTemplate.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button
            onClick={onGenerate}
            disabled={!projectName || isGenerating}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Gerando...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Gerar e Baixar
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectGenerator;
