import React from "react";
import { FilterCheckbox } from "./FilterCheckbox";

const FilterSection = ({ filterHeading, filterInputs, filterInputType }) => {
  return (
    <section className="py-4 border-b-2 px-2">
      <h1 className="text-lg font-medium mb-4">{filterHeading}</h1>
      {filterInputType === "checkbox"
        ? filterInputs.map((filter) => (
            <FilterCheckbox
              label={filter.label}
              id={filter.id}
              onChange={filter.onChange}
            />
          ))
        : filterInputs.map((filter) => (
            <div className="pb-1 flex gap-2">
              <input
                type="radio"
                name={filter.name}
                id={filter.id}
                // checked={
                //   filterState.discFilter &&
                //   filterState.discFilter === "discFiftyPlus"
                // }
                onChange={filter.onChange}
              />
              <label htmlFor={filter.id}>{filter.label}</label>
            </div>
          ))}
    </section>
  );
};

export { FilterSection };
