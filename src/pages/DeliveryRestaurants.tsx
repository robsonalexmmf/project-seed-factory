
import React from "react";
import RestaurantList from "@/components/delivery/RestaurantList";

const DeliveryRestaurants = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">Meus Restaurantes</h1>
      <RestaurantList />
    </div>
  );
};

export default DeliveryRestaurants;
