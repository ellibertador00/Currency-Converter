import React from "react";
import Select from "react-select";

const CurrencySelector = ({ currencies, title, currency, setCurrency }) => {
  const options = currencies.map((curr) => ({ value: curr, label: curr }));

  const handleChange = (selectedOption) => {
    setCurrency(selectedOption.value);
  };

  return (
    <div className="relative">
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>

      <div className="mt-1">
        <Select
          options={options}
          value={{ value: currency, label: currency }}
          onChange={handleChange}
          className="react-select-container"
          classNamePrefix="react-select"
          isSearchable={false} // Optional, depending on if you want a search box
          menuPlacement="bottom" // Ensure dropdown appears below
        />
      </div>
    </div>
  );
};

export default CurrencySelector;
