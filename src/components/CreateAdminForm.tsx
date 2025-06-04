
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { createNewAdmin } from '@/utils/createNewAdmin';
import { toast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

const CreateAdminForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '320809eu',
    fullName: 'Admin User'
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createNewAdmin(formData.email, formData.password, formData.fullName);
      
      // Limpar formulário após sucesso
      setFormData({
        email: '',
        password: '320809eu',
        fullName: 'Admin User'
      });
    } catch (error) {
      console.error('Erro ao criar admin:', error);
    } finally {
      setLoading(false);
    }
  };

  const createQuickAdmin = async () => {
    setLoading(true);
    try {
      const adminEmail = 'admin@admin.com';
      await createNewAdmin(adminEmail, '320809eu', 'Admin Principal');
      toast({
        title: "Admin criado",
        description: `Admin criado com email: ${adminEmail} e senha: 320809eu`,
      });
    } catch (error) {
      console.error('Erro ao criar admin rápido:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Criar Usuário Administrador</CardTitle>
        <CardDescription>
          Crie um novo usuário com privilégios de administrador
        </CardDescription>
        <Alert className="bg-blue-50 border-blue-200">
          <AlertDescription className="text-sm">
            <strong>Login Admin Padrão:</strong><br />
            Email: admin@admin.com<br />
            Senha: 320809eu
          </AlertDescription>
        </Alert>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Button 
            onClick={createQuickAdmin} 
            variant="default" 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Criando...' : 'Criar Admin Rápido (admin@admin.com)'}
          </Button>
        </div>
        
        <div className="mb-4 text-center text-sm text-gray-500">ou</div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Nome Completo</Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nome do administrador"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@exemplo.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Senha do administrador"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Criando...' : 'Criar Admin Personalizado'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateAdminForm;
