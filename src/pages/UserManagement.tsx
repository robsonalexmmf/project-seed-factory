
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Search, UserCheck, UserX, Crown, Users } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const UserManagement = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Verificar se é admin
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user.id || user.plan_type !== 'admin') {
      navigate('/login');
      return;
    }

    // Carregar usuários
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(allUsers);
    setFilteredUsers(allUsers);
  }, [navigate]);

  useEffect(() => {
    const filtered = users.filter((user: any) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.full_name && user.full_name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const updateUserPlan = (userId: string, newPlan: string) => {
    const updatedUsers = users.map((user: any) => {
      if (user.id === userId) {
        const updatedUser = { ...user, plan_type: newPlan };
        if (newPlan === 'freemium') updatedUser.monthly_limit = 2;
        if (newPlan === 'pro') updatedUser.monthly_limit = 10;
        if (newPlan === 'business') updatedUser.monthly_limit = -1;
        return updatedUser;
      }
      return user;
    });

    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    toast({
      title: "Plano atualizado",
      description: `Usuário alterado para plano ${newPlan}`,
    });
  };

  const deleteUser = (userId: string) => {
    const updatedUsers = users.filter((user: any) => user.id !== userId);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    toast({
      title: "Usuário removido",
      description: "Usuário foi removido do sistema",
    });
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'business': return 'default';
      case 'pro': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/admin')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Gerenciar Usuários</h1>
                <p className="text-gray-600">Administre todos os usuários da plataforma</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-500">{filteredUsers.length} usuários</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Lista de Usuários</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Buscar usuários..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome/Email</TableHead>
                  <TableHead>Plano</TableHead>
                  <TableHead>Projetos</TableHead>
                  <TableHead>Data de Cadastro</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user: any) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.full_name || user.email}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getPlanColor(user.plan_type)}>
                        {user.plan_type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {user.projects_generated || 0} / {user.monthly_limit === -1 ? '∞' : user.monthly_limit}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {new Date(user.created_at).toLocaleDateString('pt-BR')}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateUserPlan(user.id, 'pro')}
                          disabled={user.plan_type === 'pro'}
                        >
                          <Crown className="w-3 h-3 mr-1" />
                          Pro
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateUserPlan(user.id, 'business')}
                          disabled={user.plan_type === 'business'}
                        >
                          <UserCheck className="w-3 h-3 mr-1" />
                          Business
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteUser(user.id)}
                        >
                          <UserX className="w-3 h-3 mr-1" />
                          Remover
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {filteredUsers.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                Nenhum usuário encontrado
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserManagement;
