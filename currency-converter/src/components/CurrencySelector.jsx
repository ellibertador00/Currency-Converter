import React from "react";

const CurrencySelector = ({ currencies, title, currency, setCurrency }) => {
  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>

      <div className="mt-1 relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded -md shadow -sm 
       focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <hr />
          {currencies.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencySelector;
