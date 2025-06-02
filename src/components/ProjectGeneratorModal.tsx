
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Download, Rocket, Zap, X } from 'lucide-react';

interface ProjectGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTemplate: any;
  projectName: string;
  projectDescription: string;
  customFeatures: string;
  isGenerating: boolean;
  onProjectNameChange: (value: string) => void;
  onProjectDescriptionChange: (value: string) => void;
  onCustomFeaturesChange: (value: string) => void;
  onGenerate: () => void;
}

const ProjectGeneratorModal: React.FC<ProjectGeneratorModalProps> = ({
  isOpen,
  onClose,
  selectedTemplate,
  projectName,
  projectDescription,
  customFeatures,
  isGenerating,
  onProjectNameChange,
  onProjectDescriptionChange,
  onCustomFeaturesChange,
  onGenerate
}) => {
  if (!selectedTemplate) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <DialogHeader className="pb-6">
          <DialogTitle className="flex items-center space-x-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span>Configurar e Gerar Projeto</span>
          </DialogTitle>
          <DialogDescription className="text-lg text-gray-600">
            Configure os detalhes do seu projeto <span className="font-semibold text-purple-600">{selectedTemplate.name}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8">
          {/* Template Preview Card */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl text-white shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <selectedTemplate.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{selectedTemplate.name}</h3>
                <p className="text-blue-100">{selectedTemplate.description}</p>
              </div>
            </div>
            
            <div className="bg-white/10 p-4 rounded-xl">
              <h4 className="font-semibold text-white mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Funcionalidades Incluídas:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {selectedTemplate.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Configuration Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <Label htmlFor="projectName" className="text-lg font-semibold text-gray-800 mb-3 block">
                  Nome do Projeto *
                </Label>
                <Input
                  id="projectName"
                  placeholder="Ex: Meu Sistema de Delivery"
                  value={projectName}
                  onChange={(e) => onProjectNameChange(e.target.value)}
                  className="h-12 text-lg border-2 border-gray-200 focus:border-purple-500 rounded-xl"
                />
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <Label htmlFor="projectDescription" className="text-lg font-semibold text-gray-800 mb-3 block">
                  Descrição do Projeto
                </Label>
                <Textarea
                  id="projectDescription"
                  placeholder="Descreva brevemente o que seu projeto fará..."
                  value={projectDescription}
                  onChange={(e) => onProjectDescriptionChange(e.target.value)}
                  rows={4}
                  className="text-lg border-2 border-gray-200 focus:border-purple-500 rounded-xl resize-none"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <Label htmlFor="customFeatures" className="text-lg font-semibold text-gray-800 mb-3 block">
                Funcionalidades Personalizadas
              </Label>
              <Textarea
                id="customFeatures"
                placeholder="Adicione funcionalidades extras que deseja incluir..."
                value={customFeatures}
                onChange={(e) => onCustomFeaturesChange(e.target.value)}
                rows={8}
                className="text-lg border-2 border-gray-200 focus:border-purple-500 rounded-xl resize-none"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="px-8 py-3 text-lg font-semibold rounded-xl border-2 hover:bg-gray-50"
            >
              Cancelar
            </Button>
            <Button
              onClick={onGenerate}
              disabled={!projectName || isGenerating}
              className="px-8 py-3 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl shadow-lg transform transition-all hover:scale-105"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Gerando Projeto...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-3" />
                  Gerar e Baixar Projeto
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectGeneratorModal;
