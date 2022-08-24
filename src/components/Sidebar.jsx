import React from "react";
import { FilterCheckbox } from "./FilterCheckbox";
import { FilterSection } from "./FilterSection";

const filterGenderInputs = [
  { label: "Men", key: 0, id: "men", checked: false, onChange: () => {} },
  { label: "Women", key: 1, id: "women", checked: false, onChange: () => {} },
];
const filterBrandInputs = [
  { label: "ADIDAS", key: 0, id: "adidas", checked: false, onChange: () => {} },
  {
    label: "Allen Solly",
    key: 1,
    id: "allen-solly",
    checked: false,
    onChange: () => {},
  },
  { label: "Arrow", key: 2, id: "arrow", checked: false, onChange: () => {} },
  {
    label: "Raymond",
    key: 3,
    id: "raymond",
    checked: false,
    onChange: () => {},
  },
];
const filterDiscountInputs = [
  {
    label: "30% or more",
    key: 0,
    id: "discThirtyPlus",
    checked: false,
    onChange: () => {},
  },
  {
    label: "40% or more",
    key: 1,
    id: "discFortyPlus",
    checked: false,
    onChange: () => {},
  },
  {
    label: "50% or more",
    key: 2,
    id: "discFiftyPlus",
    checked: false,
    onChange: () => {},
  },
  {
    label: "60% or more",
    key: 3,
    id: "discSixtyPlus",
    checked: false,
    onChange: () => {},
  },
  {
    label: "70% or more",
    key: 4,
    id: "discSeventyPlus",
    checked: false,
    onChange: () => {},
  },
];

const Sidebar = () => {
  return (
    <nav className="bg-white flex flex-col w-64">
      <header className="font-medium text-xl px-2 py-4 border-b-2">
        Filters
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
    </nav>
  );
};

export { Sidebar };
