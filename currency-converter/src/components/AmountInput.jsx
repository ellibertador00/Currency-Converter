import React from "react";

const AmountInput = ({ amount, setAmount }) => {
  return (
    <div className="mt-6">
      <label
        htmlFor="amount"
        className="block text-sm font-medium text-gray-700 text-left" // Ensure left alignment
      >
        Amount:
      </label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
      />
    </div>
  );
};

export default AmountInput;
