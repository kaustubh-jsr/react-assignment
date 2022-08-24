import React from "react";
import { ProductCard } from "./ProductCard";

const Products = ({ products }) => {
  return (
    <section className="flex flex-wrap">
      {products.map((product) => (
        <ProductCard {...product} />
      ))}
    </section>
  );
};

export { Products };
