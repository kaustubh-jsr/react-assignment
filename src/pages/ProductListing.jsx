import React, { useState } from "react";
import { Navbar, Products, Sidebar } from "../components";
import { productList } from "../data";
const ProductListing = () => {
  const [products, setProducts] = useState(productList);

  return (
    <>
      <Navbar />
      <main className="bg-color-grey flex gap-4">
        <Sidebar />
        <Products products={products} />
      </main>
    </>
  );
};

export { ProductListing };
