
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// IMPORTANT: Import Lead type from LeadForm to ensure identical type!
import LeadForm, { Lead } from "./LeadForm";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export type Lead = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  value?: number;
  status?: string;
  last_contact?: string;
  created_at?: string;
  updated_at?: string;
};

const LeadsList: React.FC = () => {
  const { userProfile } = useAuth();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Lead | null>(null);
  const [creating, setCreating] = useState(false);

  async function fetchLeads() {
    if (!userProfile) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("crm_leads")
      .select("*")
      .eq("user_id", userProfile.id)
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Erro ao carregar Leads",
        description: error.message,
        variant: "destructive",
      });
    } else {
      // Coerce data to correct type, forcing 'status' to allowed values
      const safeData = (data ?? []).map((lead: any) => ({
        ...lead,
        status: (["new", "qualified", "proposal", "closed"].includes(lead.status)
          ? lead.status
          : "new") as Lead["status"],
      }));
      setLeads(safeData);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchLeads();
    // eslint-disable-next-line
  }, [userProfile]);

  async function handleDelete(id: string) {
    if (!window.confirm("Tem certeza que deseja deletar este lead?")) return;
    const { error } = await supabase.from("crm_leads").delete().eq("id", id);
    if (error) {
      toast({
        title: "Erro ao deletar",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({ title: "Lead removido" });
      fetchLeads();
    }
  }

  if (loading) return <div className="p-6">Carregando...</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leads</CardTitle>
        {!creating && (
          <Button size="sm" className="mt-2" onClick={() => setCreating(true)}>
            Novo Lead
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {creating && (
          <LeadForm
            onSaved={() => {
              setCreating(false);
              fetchLeads();
            }}
            onCancel={() => setCreating(false)}
          />
        )}
        {editing && (
          <LeadForm
            initial={editing}
            onSaved={() => {
              setEditing(null);
              fetchLeads();
            }}
            onCancel={() => setEditing(null)}
          />
        )}

        {!creating && !editing && (
          <div className="overflow-x-auto">
            <table className="w-full table-auto mt-3">
              <thead>
                <tr>
                  <th className="px-2 py-2">Nome</th>
                  <th className="px-2 py-2">Empresa</th>
                  <th className="px-2 py-2">Email</th>
                  <th className="px-2 py-2">Valor</th>
                  <th className="px-2 py-2">Status</th>
                  <th className="px-2 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center text-gray-500 py-6">
                      Nenhum lead cadastrado
                    </td>
                  </tr>
                )}
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="px-2 py-2 font-medium">{lead.name}</td>
                    <td className="px-2 py-2">{lead.company}</td>
                    <td className="px-2 py-2">{lead.email}</td>
                    <td className="px-2 py-2">
                      {lead.value != null ? `R$ ${lead.value}` : ""}
                    </td>
                    <td className="px-2 py-2">
                      <span className="capitalize">{lead.status}</span>
                    </td>
                    <td className="px-2 py-2 flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditing(lead)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(lead.id!)}
                      >
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

export default LeadsList;
