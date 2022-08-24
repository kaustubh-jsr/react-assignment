import React from "react";
import { SearchIcon, DownCaret, CartIcon } from "../assets";

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-color-brand-blue h-14 gap-24">
      <header className="flex gap-4 items-center">
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="flipkart-logo"
          className="h-6"
        />
        <section className="flex bg-white items-center pr-2">
          <input
            type="text"
            placeholder="Search for products,brands and more"
            className="h-8 w-[400px] px-4 active:bottom-4"
          />
          <SearchIcon />
        </section>
      </header>
      <section className="flex items-center text-white gap-10">
        <span className="font-semibold text-lg flex items-center gap-2">
          Kaustubh <DownCaret />
        </span>
        <p className="font-semibold text-lg">Become a Seller</p>
        <span className="font-semibold text-lg flex items-center gap-2">
          More <DownCaret />
        </span>
        <span className="font-semibold text-lg flex items-center gap-2">
          <CartIcon /> Cart
        </span>
      </section>
    </nav>
  );
};

export { Navbar };
