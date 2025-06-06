
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Trash2, Edit, Plus, UserPlus, Crown } from 'lucide-react';

interface User {
  id: string;
  email: string;
  full_name: string;
  plan_type: string;
  projects_generated: number;
  current_month_projects: number;
  monthly_limit: number;
  created_at: string;
}

interface AdminActionsProps {
  users: User[];
  onRefresh: () => void;
}

const AdminActions = ({ users, onRefresh }: AdminActionsProps) => {
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [newPlan, setNewPlan] = useState<string>('');
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChangePlan = async () => {
    if (!selectedUser || !newPlan) {
      toast({
        title: "Erro",
        description: "Selecione um usuário e um plano",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const monthlyLimit = newPlan === 'freemium' ? 2 : newPlan === 'pro' ? 5 : -1;
      
      const { error } = await supabase
        .from('users')
        .update({ 
          plan_type: newPlan,
          monthly_limit: monthlyLimit,
          updated_at: new Date().toISOString()
        })
        .eq('id', selectedUser);

      if (error) throw error;

      toast({
        title: "Sucesso",
        description: "Plano do usuário alterado com sucesso"
      });

      onRefresh();
      setSelectedUser('');
      setNewPlan('');
    } catch (error) {
      console.error('Erro ao alterar plano:', error);
      toast({
        title: "Erro",
        description: "Erro ao alterar plano do usuário",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Tem certeza que deseja deletar este usuário? Esta ação não pode ser desfeita.')) {
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', userId);

      if (error) throw error;

      toast({
        title: "Sucesso",
        description: "Usuário deletado com sucesso"
      });

      onRefresh();
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      toast({
        title: "Erro",
        description: "Erro ao deletar usuário",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResetProjects = async (userId: string) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('users')
        .update({ 
          current_month_projects: 0,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId);

      if (error) throw error;

      toast({
        title: "Sucesso",
        description: "Contador de projetos resetado"
      });

      onRefresh();
    } catch (error) {
      console.error('Erro ao resetar projetos:', error);
      toast({
        title: "Erro",
        description: "Erro ao resetar contador de projetos",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAdmin = async () => {
    if (!newAdminEmail) {
      toast({
        title: "Erro",
        description: "Digite um email válido",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      // Procurar usuário existente
      const { data: existingUser, error: searchError } = await supabase
        .from('users')
        .select('*')
        .eq('email', newAdminEmail)
        .maybeSingle();

      if (searchError) throw searchError;

      if (existingUser) {
        // Promover usuário existente para admin
        const { error } = await supabase
          .from('users')
          .update({ 
            plan_type: 'admin',
            monthly_limit: -1,
            updated_at: new Date().toISOString()
          })
          .eq('email', newAdminEmail);

        if (error) throw error;

        toast({
          title: "Sucesso",
          description: `${newAdminEmail} foi promovido a administrador`
        });
      } else {
        toast({
          title: "Usuário não encontrado",
          description: "O usuário precisa se cadastrar primeiro na plataforma",
          variant: "destructive"
        });
        return;
      }

      onRefresh();
      setNewAdminEmail('');
    } catch (error) {
      console.error('Erro ao criar admin:', error);
      toast({
        title: "Erro",
        description: "Erro ao promover usuário para admin",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Change User Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Edit className="w-5 h-5" />
            <span>Alterar Plano do Usuário</span>
          </CardTitle>
          <CardDescription>
            Selecione um usuário e altere seu plano
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="user-select">Usuário</Label>
              <Select value={selectedUser} onValueChange={setSelectedUser}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um usuário" />
                </SelectTrigger>
                <SelectContent>
                  {users.map((user) => (
                    <SelectItem key={user.id} value={user.id}>
                      {user.email} ({user.plan_type})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="plan-select">Novo Plano</Label>
              <Select value={newPlan} onValueChange={setNewPlan}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um plano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="freemium">Freemium (2 projetos)</SelectItem>
                  <SelectItem value="pro">Pro (5 projetos)</SelectItem>
                  <SelectItem value="business">Business (Ilimitado)</SelectItem>
                  <SelectItem value="admin">Admin (Ilimitado)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button onClick={handleChangePlan} disabled={loading} className="w-full">
                Alterar Plano
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Create Admin */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Crown className="w-5 h-5" />
            <span>Promover para Administrador</span>
          </CardTitle>
          <CardDescription>
            Digite o email de um usuário existente para promover a admin
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Label htmlFor="admin-email">Email do Usuário</Label>
              <Input
                id="admin-email"
                type="email"
                placeholder="usuario@exemplo.com"
                value={newAdminEmail}
                onChange={(e) => setNewAdminEmail(e.target.value)}
              />
            </div>
            <div className="flex items-end">
              <Button onClick={handleCreateAdmin} disabled={loading}>
                <UserPlus className="w-4 h-4 mr-2" />
                Promover
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Ações por Usuário</CardTitle>
          <CardDescription>
            Ações rápidas para cada usuário
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{user.email}</div>
                  <div className="text-sm text-gray-500">
                    {user.plan_type} • {user.current_month_projects}/{user.monthly_limit === -1 ? '∞' : user.monthly_limit} projetos
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleResetProjects(user.id)}
                    disabled={loading}
                  >
                    Resetar Projetos
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDeleteUser(user.id)}
                    disabled={loading || user.plan_type === 'admin'}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminActions;
