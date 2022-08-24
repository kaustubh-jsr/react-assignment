import React from "react";
import { Navbar, Products, Sidebar } from "../components";

const ProductListing = () => {
  return (
    <>
      <Navbar />
      <main className="bg-color-grey h-screen flex gap-4">
        <Sidebar />
        <Products />
      </main>
    </>
  );
};

export { ProductListing };
