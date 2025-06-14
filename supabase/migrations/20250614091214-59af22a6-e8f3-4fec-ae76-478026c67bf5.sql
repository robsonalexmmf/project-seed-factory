
-- Tabela de Leads (clientes potenciais)
CREATE TABLE public.crm_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  company TEXT,
  value NUMERIC,
  status TEXT CHECK (status IN ('new', 'qualified', 'proposal', 'closed')) NOT NULL DEFAULT 'new',
  last_contact TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Atividade do Lead (follow-up, ligação, reunião, etc)
CREATE TABLE public.crm_lead_activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES public.crm_leads(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  type TEXT NOT NULL,
  scheduled_for TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Habilitar Row Level Security
ALTER TABLE public.crm_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.crm_lead_activities ENABLE ROW LEVEL SECURITY;

-- Políticas RLS: Usuário só pode acessar leads/atividades que criou
CREATE POLICY "Can view own leads" ON public.crm_leads
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Can insert own leads" ON public.crm_leads
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Can update own leads" ON public.crm_leads
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Can delete own leads" ON public.crm_leads
  FOR DELETE USING (user_id = auth.uid());

CREATE POLICY "Can view own activities" ON public.crm_lead_activities
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Can insert own activities" ON public.crm_lead_activities
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Can update own activities" ON public.crm_lead_activities
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Can delete own activities" ON public.crm_lead_activities
  FOR DELETE USING (user_id = auth.uid());
