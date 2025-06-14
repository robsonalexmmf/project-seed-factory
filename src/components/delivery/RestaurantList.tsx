
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import RestaurantForm from "./RestaurantForm";

export type Restaurant = {
  id?: string;
  name: string;
  cuisine?: string;
  image_url?: string;
  is_open?: boolean;
  created_at?: string;
};

const RestaurantList: React.FC = () => {
  const { userProfile } = useAuth();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Restaurant | null>(null);
  const [creating, setCreating] = useState(false);

  async function fetchRestaurants() {
    if (!userProfile) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("restaurants")
      .select("*")
      .eq("user_id", userProfile.id)
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Erro ao carregar restaurantes",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setRestaurants(data ?? []);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchRestaurants();
    // eslint-disable-next-line
  }, [userProfile]);

  async function handleDelete(id: string) {
    if (!window.confirm("Deseja deletar este restaurante?")) return;
    const { error } = await supabase.from("restaurants").delete().eq("id", id);
    if (error) {
      toast({
        title: "Erro ao deletar",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({ title: "Restaurante removido" });
      fetchRestaurants();
    }
  }

  if (loading) return <div className="p-6">Carregando...</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Restaurantes</CardTitle>
        {!creating && (
          <Button size="sm" className="mt-2" onClick={() => setCreating(true)}>
            Novo restaurante
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {creating && (
          <RestaurantForm
            onSaved={() => {
              setCreating(false);
              fetchRestaurants();
            }}
            onCancel={() => setCreating(false)}
          />
        )}
        {editing && (
          <RestaurantForm
            initial={editing}
            onSaved={() => {
              setEditing(null);
              fetchRestaurants();
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
                  <th className="px-2 py-2">Cozinha</th>
                  <th className="px-2 py-2">Imagem</th>
                  <th className="px-2 py-2">Status</th>
                  <th className="px-2 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {restaurants.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center text-gray-500 py-6">
                      Nenhum restaurante cadastrado
                    </td>
                  </tr>
                )}
                {restaurants.map((rest) => (
                  <tr key={rest.id}>
                    <td className="px-2 py-2 font-medium">{rest.name}</td>
                    <td className="px-2 py-2">{rest.cuisine ?? ""}</td>
                    <td className="px-2 py-2">
                      {rest.image_url ? (
                        <img
                          src={rest.image_url}
                          alt={rest.name}
                          className="object-cover rounded w-16 h-10"
                        />
                      ) : (
                        <span className="text-xs text-gray-400">sem imagem</span>
                      )}
                    </td>
                    <td className="px-2 py-2">
                      {rest.is_open ? (
                        <span className="text-green-700 font-semibold">Aberto</span>
                      ) : (
                        <span className="text-gray-500">Fechado</span>
                      )}
                    </td>
                    <td className="px-2 py-2 flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditing(rest)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => rest.id && handleDelete(rest.id)}
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

export default RestaurantList;
