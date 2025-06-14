
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Product } from "./ProductList";

interface ProductFormProps {
  initial?: Product | null;
  onSaved: () => void;
  onCancel?: () => void;
  restaurantId: string;
}

const ProductForm: React.FC<ProductFormProps> = ({
  initial,
  onSaved,
  onCancel,
  restaurantId,
}) => {
  const [prod, setProd] = useState<Product>(
    initial ?? {
      name: "",
      price: 0,
      description: "",
      image_url: "",
      available: true,
      restaurant_id: restaurantId,
    }
  );
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const prodData = {
      ...prod,
      restaurant_id: restaurantId,
      available: prod.available ?? true,
    };

    let result;
    if (prod.id) {
      result = await supabase
        .from("products")
        .update({ ...prodData })
        .eq("id", prod.id);
    } else {
      result = await supabase.from("products").insert([{ ...prodData }]);
    }

    if (result.error) {
      toast({
        title: "Erro ao salvar produto",
        description: result.error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Produto salvo!",
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
          value={prod.name}
          onChange={e => setProd(r => ({ ...r, name: e.target.value }))}
        />
      </div>
      <div>
        <Label>Preço (R$)*</Label>
        <Input
          required
          type="number"
          min={0}
          step={0.01}
          value={prod.price}
          onChange={e => setProd(r => ({ ...r, price: Number(e.target.value) }))}
        />
      </div>
      <div>
        <Label>Descrição</Label>
        <Input
          value={prod.description ?? ""}
          onChange={e => setProd(r => ({ ...r, description: e.target.value }))}
        />
      </div>
      <div>
        <Label>URL da Imagem</Label>
        <Input
          value={prod.image_url ?? ""}
          onChange={e => setProd(r => ({ ...r, image_url: e.target.value }))}
          placeholder="https://link-da-imagem.jpg"
        />
      </div>
      <div>
        <Label>Status</Label>
        <select
          value={prod.available ? "available" : "unavailable"}
          onChange={e => setProd(r => ({ ...r, available: e.target.value === "available" }))}
          className="border rounded-md px-3 py-2 w-full"
        >
          <option value="available">Disponível</option>
          <option value="unavailable">Indisponível</option>
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
            ? (prod.id ? "Atualizando..." : "Salvando...")
            : (prod.id ? "Atualizar" : "Criar")} Produto
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
