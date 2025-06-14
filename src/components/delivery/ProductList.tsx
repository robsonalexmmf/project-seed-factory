
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import ProductForm from "./ProductForm";
import type { Restaurant } from "./RestaurantList";

export type Product = {
  id?: string;
  name: string;
  description?: string;
  image_url?: string;
  price: number;
  available?: boolean;
  restaurant_id: string;
  created_at?: string;
};

const ProductList: React.FC = () => {
  const { userProfile } = useAuth();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Product | null>(null);
  const [creating, setCreating] = useState(false);

  // Buscar restaurante do usuário logado
  async function fetchRestaurant() {
    if (!userProfile) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("restaurants")
      .select("*")
      .eq("user_id", userProfile.id)
      .order("created_at", { ascending: false })
      .maybeSingle();

    if (error) {
      toast({
        title: "Erro ao carregar restaurante",
        description: error.message,
        variant: "destructive",
      });
      setRestaurant(null);
    } else {
      setRestaurant(data ?? null);
    }
    setLoading(false);
  }

  async function fetchProducts(restaurantId: string) {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("restaurant_id", restaurantId)
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Erro ao carregar produtos",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setProducts(data ?? []);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchRestaurant();
    // eslint-disable-next-line
  }, [userProfile]);

  useEffect(() => {
    if (restaurant?.id) fetchProducts(restaurant.id);
  }, [restaurant]);

  async function handleDelete(id: string) {
    if (!window.confirm("Deseja deletar este produto?")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      toast({
        title: "Erro ao deletar",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({ title: "Produto removido" });
      restaurant?.id && fetchProducts(restaurant.id);
    }
  }

  if (loading) return <div className="p-6">Carregando...</div>;
  if (!restaurant)
    return <div className="p-6 text-red-600">Nenhum restaurante encontrado para este usuário.</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Produtos do restaurante</CardTitle>
        {!creating && (
          <Button size="sm" className="mt-2" onClick={() => setCreating(true)}>
            Novo produto
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {creating && (
          <ProductForm
            restaurantId={restaurant.id!}
            onSaved={() => {
              setCreating(false);
              fetchProducts(restaurant.id!);
            }}
            onCancel={() => setCreating(false)}
          />
        )}
        {editing && (
          <ProductForm
            restaurantId={restaurant.id!}
            initial={editing}
            onSaved={() => {
              setEditing(null);
              fetchProducts(restaurant.id!);
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
                  <th className="px-2 py-2">Preço (R$)</th>
                  <th className="px-2 py-2">Imagem</th>
                  <th className="px-2 py-2">Descrição</th>
                  <th className="px-2 py-2">Status</th>
                  <th className="px-2 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center text-gray-500 py-6">
                      Nenhum produto cadastrado
                    </td>
                  </tr>
                )}
                {products.map(prod => (
                  <tr key={prod.id}>
                    <td className="px-2 py-2 font-medium">{prod.name}</td>
                    <td className="px-2 py-2">{Number(prod.price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                    <td className="px-2 py-2">
                      {prod.image_url ? (
                        <img
                          src={prod.image_url}
                          alt={prod.name}
                          className="object-cover rounded w-14 h-8"
                        />
                      ) : (
                        <span className="text-xs text-gray-400">sem imagem</span>
                      )}
                    </td>
                    <td className="px-2 py-2">{prod.description ?? ""}</td>
                    <td className="px-2 py-2">
                      {prod.available ? (
                        <span className="text-green-700 font-semibold">Disponível</span>
                      ) : (
                        <span className="text-gray-500">Indisponível</span>
                      )}
                    </td>
                    <td className="px-2 py-2 flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditing(prod)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => prod.id && handleDelete(prod.id)}
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

export default ProductList;
