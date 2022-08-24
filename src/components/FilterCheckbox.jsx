import React from "react";

const FilterCheckbox = ({ label, id, checked, onChange }) => {
  return (
    <div className="flex gap-4">
      <input type="checkbox" id={id} name={id} onChange={onChange} />
      <label className="" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export { FilterCheckbox };
