
import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { LogOut, User, Settings } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { user, userProfile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  if (!user || !userProfile) {
    return null;
  }

  const getInitials = (name?: string, email?: string) => {
    if (name) {
      return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    if (email) {
      return email.substring(0, 2).toUpperCase();
    }
    return 'U';
  };

  const getPlanColor = (planType: string) => {
    switch (planType) {
      case 'admin':
        return 'bg-red-100 text-red-800';
      case 'business':
        return 'bg-purple-100 text-purple-800';
      case 'pro':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-blue-500 text-white">
              {getInitials(userProfile.full_name, userProfile.email)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium leading-none">
                {userProfile.full_name || 'Usuário'}
              </p>
              <Badge className={getPlanColor(userProfile.plan_type)}>
                {userProfile.plan_type}
              </Badge>
            </div>
            <p className="text-xs leading-none text-muted-foreground">
              {userProfile.email}
            </p>
            {userProfile.plan_type !== 'admin' && (
              <div className="text-xs text-muted-foreground">
                <div>Projetos gerados: {userProfile.projects_generated}</div>
                <div>
                  Limite mensal: {userProfile.monthly_limit === -1 ? 'Ilimitado' : userProfile.monthly_limit}
                </div>
              </div>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate('/generator')}>
          <User className="mr-2 h-4 w-4" />
          <span>Gerar Projeto</span>
        </DropdownMenuItem>
        {userProfile.plan_type === 'admin' && (
          <DropdownMenuItem onClick={() => navigate('/admin')}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Dashboard Admin</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
