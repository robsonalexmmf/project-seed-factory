
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

type Lead = {
  id?: string;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  value?: number;
  status?: "new" | "qualified" | "proposal" | "closed";
  last_contact?: string;
};

interface LeadFormProps {
  initial?: Lead | null;
  onSaved: () => void;
  onCancel?: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ initial, onSaved, onCancel }) => {
  const { userProfile } = useAuth();
  const [lead, setLead] = useState<Lead>(
    initial ?? {
      name: "",
      email: "",
      phone: "",
      company: "",
      value: 0,
      status: "new",
    }
  );
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!userProfile) return;

    setLoading(true);

    const leadData = {
      ...lead,
      user_id: userProfile.id,
      value: Number(lead.value) || 0,
    };

    let result;
    if (lead.id) {
      result = await supabase
        .from("crm_leads")
        .update({ ...leadData, updated_at: new Date().toISOString() })
        .eq("id", lead.id);
    } else {
      result = await supabase
        .from("crm_leads")
        .insert([{ ...leadData }]);
    }

    if (result.error) {
      toast({
        title: "Erro ao salvar Lead",
        description: result.error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Lead salvo!",
      });
      onSaved();
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <Label>Nome*</Label>
        <Input
          required
          value={lead.name}
          onChange={e => setLead(l => ({ ...l, name: e.target.value }))}
        />
      </div>
      <div>
        <Label>Email</Label>
        <Input
          value={lead.email ?? ""}
          type="email"
          onChange={e => setLead(l => ({ ...l, email: e.target.value }))}
        />
      </div>
      <div>
        <Label>Telefone</Label>
        <Input
          value={lead.phone ?? ""}
          onChange={e => setLead(l => ({ ...l, phone: e.target.value }))}
        />
      </div>
      <div>
        <Label>Empresa</Label>
        <Input
          value={lead.company ?? ""}
          onChange={e => setLead(l => ({ ...l, company: e.target.value }))}
        />
      </div>
      <div>
        <Label>Valor (R$)</Label>
        <Input
          type="number"
          min={0}
          value={lead.value ?? 0}
          onChange={e => setLead(l => ({ ...l, value: Number(e.target.value) }))}
        />
      </div>
      <div>
        <Label>Status</Label>
        <select
          value={lead.status ?? "new"}
          onChange={e => setLead(l => ({ ...l, status: e.target.value as Lead["status"] }))}
          className="border rounded-md px-3 py-2 w-full"
        >
          <option value="new">Novo</option>
          <option value="qualified">Qualificado</option>
          <option value="proposal">Proposta</option>
          <option value="closed">Fechado</option>
        </select>
      </div>
      <div className="flex gap-2 justify-end pt-2">
        {onCancel && (
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancelar
          </Button>
        )}
        <Button type="submit" loading={loading}>
          {lead.id ? "Atualizar" : "Criar"} Lead
        </Button>
      </div>
    </form>
  );
};

export default LeadForm;
