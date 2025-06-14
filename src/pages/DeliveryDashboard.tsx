
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DeliveryDashboard = () => {
  const { userProfile } = useAuth();

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Delivery - Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Restaurantes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Gerencie seus restaurantes e cadastre novos.</p>
            <Button asChild>
              <Link to="/delivery/restaurants">Ver restaurantes</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pedidos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Veja e acompanhe seus pedidos.</p>
            <Button asChild>
              <Link to="/delivery/orders">Ver pedidos</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Estatísticas rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="text-center">
              <div className="text-2xl font-bold">R$ 0</div>
              <div>Total vendido hoje</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">0</div>
              <div>Pedidos hoje</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">0</div>
              <div>Restaurantes cadastrados</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeliveryDashboard;
