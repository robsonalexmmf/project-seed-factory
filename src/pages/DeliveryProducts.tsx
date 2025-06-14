
import React from "react";
import ProductList from "@/components/delivery/ProductList";

const DeliveryProducts = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">Meus Produtos</h1>
      <ProductList />
    </div>
  );
};

export default DeliveryProducts;
