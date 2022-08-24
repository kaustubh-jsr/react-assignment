import React from "react";
import {
  filterBrandInputs,
  filterDiscountInputs,
  filterGenderInputs,
  filterSortInputs,
} from "../data";
import { FilterSection } from "./FilterSection";

const Sidebar = () => {
  return (
    <nav className="bg-white flex flex-col w-96 sticky -top-1">
      <header className="font-medium text-xl px-2 py-4 border-b-2 flex justify-between">
        Filters
        <button className="text-blue-500 text-sm">CLEAR ALL</button>
      </header>
      <FilterSection
        filterHeading="Gender"
        filterInputs={filterGenderInputs}
        filterInputType="checkbox"
      />
      <FilterSection
        filterHeading="Brand"
        filterInputs={filterBrandInputs}
        filterInputType="checkbox"
      />
      <FilterSection
        filterHeading="Discount"
        filterInputs={filterDiscountInputs}
        filterInputType="radio"
      />
      <FilterSection
        filterHeading="Sort by"
        filterInputs={filterSortInputs}
        filterInputType="radio"
      />
    </nav>
  );
};

export { Sidebar };
