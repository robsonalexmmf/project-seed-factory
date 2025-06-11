
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';

export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  plan_type: 'freemium' | 'pro' | 'business' | 'admin';
  projects_generated: number;
  current_month_projects: number;
  monthly_limit: number;
  last_reset_date: string;
  created_at: string;
  updated_at: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    // Configurar o listener de alterações de autenticação primeiro
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);
        
        if (!mounted) return;
        
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Usando setTimeout para evitar problemas de deadlock
          setTimeout(() => {
            if (mounted) {
              fetchUserProfile(session.user.id);
            }
          }, 0);
        } else {
          setUserProfile(null);
        }
      }
    );

    // Depois verificar a sessão existente
    const getInitialSession = async () => {
      try {
        setLoading(true);
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error getting session:', error);
          throw error;
        }
        
        if (mounted) {
          setSession(session);
          setUser(session?.user ?? null);
          
          if (session?.user) {
            await fetchUserProfile(session.user.id);
          }
        }
      } catch (error) {
        console.error('Error in getInitialSession:', error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    getInitialSession();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
      console.log('Fetching profile for user:', userId);
      
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        console.error('Error fetching user profile:', error);
        return;
      }

      if (data) {
        const userProfile: UserProfile = {
          ...data,
          plan_type: data.plan_type as 'freemium' | 'pro' | 'business' | 'admin'
        };

        console.log('User profile loaded:', userProfile);
        setUserProfile(userProfile);
      } else {
        console.log('No user profile found for user:', userId);
        setUserProfile(null);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkCanGenerate = async (): Promise<boolean> => {
    if (!userProfile) return false;
    
    try {
      const { data, error } = await supabase.rpc('can_generate_project', {
        user_email: userProfile.email
      });
      
      if (error) {
        console.error('Error checking generation limit:', error);
        return false;
      }
      
      return data;
    } catch (error) {
      console.error('Error checking generation limit:', error);
      return false;
    }
  };

  const incrementProjectCount = async () => {
    if (!userProfile) return;
    
    try {
      await supabase.rpc('increment_user_projects', {
        user_email: userProfile.email
      });
      
      // Refresh user profile
      await fetchUserProfile(userProfile.id);
    } catch (error) {
      console.error('Error incrementing project count:', error);
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error);
        throw error;
      }
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const getProjectsRemaining = () => {
    if (!userProfile) return 0;
    if (userProfile.plan_type === 'admin' || userProfile.plan_type === 'business') return -1;
    return Math.max(0, userProfile.monthly_limit - userProfile.current_month_projects);
  };

  const canGenerate = () => {
    if (!userProfile) return false;
    if (userProfile.plan_type === 'admin' || userProfile.plan_type === 'business') return true;
    return userProfile.current_month_projects < userProfile.monthly_limit;
  };

  return {
    user,
    session,
    userProfile,
    loading,
    signOut,
    fetchUserProfile,
    checkCanGenerate,
    incrementProjectCount,
    getProjectsRemaining,
    canGenerate
  };
};
