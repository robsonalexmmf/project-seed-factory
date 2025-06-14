
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import type { Restaurant } from "./RestaurantList";

interface RestaurantFormProps {
  initial?: Restaurant | null;
  onSaved: () => void;
  onCancel?: () => void;
}

const RestaurantForm: React.FC<RestaurantFormProps> = ({ initial, onSaved, onCancel }) => {
  const { userProfile } = useAuth();
  const [rest, setRest] = useState<Restaurant>(
    initial ?? { name: "", cuisine: "", image_url: "", is_open: true }
  );
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!userProfile) return;
    setLoading(true);

    const restData = {
      ...rest,
      user_id: userProfile.id,
      is_open: rest.is_open ?? true,
    };

    let result;
    if (rest.id) {
      result = await supabase
        .from("restaurants")
        .update({ ...restData })
        .eq("id", rest.id);
    } else {
      result = await supabase
        .from("restaurants")
        .insert([{ ...restData }]);
    }

    if (result.error) {
      toast({
        title: "Erro ao salvar restaurante",
        description: result.error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Restaurante salvo!",
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
          value={rest.name}
          onChange={e => setRest(r => ({ ...r, name: e.target.value }))}
        />
      </div>
      <div>
        <Label>Cozinha</Label>
        <Input
          value={rest.cuisine ?? ""}
          onChange={e => setRest(r => ({ ...r, cuisine: e.target.value }))}
        />
      </div>
      <div>
        <Label>URL da Imagem</Label>
        <Input
          value={rest.image_url ?? ""}
          onChange={e => setRest(r => ({ ...r, image_url: e.target.value }))}
          placeholder="https://link-da-imagem.jpg"
        />
      </div>
      <div>
        <Label>Status</Label>
        <select
          value={rest.is_open ? "open" : "closed"}
          onChange={e => setRest(r => ({ ...r, is_open: e.target.value === "open" }))}
          className="border rounded-md px-3 py-2 w-full"
        >
          <option value="open">Aberto</option>
          <option value="closed">Fechado</option>
        </select>
      </div>
      <div className="flex gap-2 justify-end pt-2">
        {onCancel && (
          <Button type="button" variant="ghost" onClick={onCancel} disabled={loading}>
            Cancelar
          </Button>
        )}
        <Button type="submit" disabled={loading}>
          {loading
            ? (rest.id ? "Atualizando..." : "Salvando...")
            : (rest.id ? "Atualizar" : "Criar")} Restaurante
        </Button>
      </div>
    </form>
  );
};

export default RestaurantForm;
