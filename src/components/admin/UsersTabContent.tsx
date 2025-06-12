import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

interface User {
  id: string;
  email: string;
  full_name?: string;
  plan_type: string;
  created_at: string;
}

const UsersTabContent = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      try {
        const { data: usersData, error: usersError } = await supabase
          .from('users')
          .select('*');

        if (usersError) {
          console.error('Error fetching users:', usersError);
          toast({
            title: 'Error fetching users',
            description: usersError.message,
            variant: 'destructive',
          });
          return;
        }

        setUsers(usersData || []);
      } catch (error) {
        console.error('Error loading users:', error);
        toast({
          title: 'Error loading users',
          description: error instanceof Error ? error.message : 'Unknown error',
          variant: 'destructive',
          });
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const handlePlanChange = async (userId: string, newPlan: string) => {
    try {
      const { error } = await supabase
        .from('users')
        .update({ plan_type: newPlan })
        .eq('id', userId);

      if (error) {
        console.error('Error updating user plan:', error);
        toast({
          title: 'Error updating user plan',
          description: error.message,
          variant: 'destructive',
        });
        return;
      }

      // Update the user in the state
      setUsers(users.map(user =>
        user.id === userId ? { ...user, plan_type: newPlan } : user
      ));

      toast({
        title: 'User plan updated',
        description: `User plan updated to ${newPlan}`,
      });
    } catch (error) {
      console.error('Error updating user plan:', error);
      toast({
        title: 'Error updating user plan',
        description: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', userId);

      if (error) {
        console.error('Error deleting user:', error);
        toast({
          title: 'Error deleting user',
          description: error.message,
          variant: 'destructive',
        });
        return;
      }

      // Update the user in the state
      setUsers(users.filter(user => user.id !== userId));

      toast({
        title: 'User deleted',
        description: 'User deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting user:', error);
      toast({
        title: 'Error deleting user',
        description: error instanceof Error ? error.message : 'Unknown error',
        variant: 'destructive',
      });
    }
  };


  return (
    <Card>
      <CardHeader>
        <CardTitle>Gerenciamento de Usuários</CardTitle>
        <CardDescription>Gerenciar usuários cadastrados na plataforma</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="text-center py-8">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Carregando usuários...</h3>
            <p className="text-gray-500">Aguarde enquanto os usuários são carregados</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plano
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.full_name || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Select value={user.plan_type} onValueChange={(newPlan) => handlePlanChange(user.id, newPlan)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a plan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="freemium">Freemium</SelectItem>
                          <SelectItem value="pro">Pro</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Button variant="destructive" onClick={() => handleDeleteUser(user.id)}>
                        Excluir
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UsersTabContent;
