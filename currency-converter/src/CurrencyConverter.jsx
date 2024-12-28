import React, { useState, useEffect } from "react";
import axios from "axios";
import { HiArrowsRightLeft } from "react-icons/hi2";
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from "./components/AmountInput";
import ConversionResult from "./components/ConversionResult";
import Notification from "./components/Notification";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("ETB");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [notification, setNotification] = useState({
    visible: false,
    message: "",
    type: "",
  });

  // Fetch available currencies
  const fetchCurrencies = async () => {
    try {
      const response = await axios.get(
        "https://v6.exchangerate-api.com/v6/631d5c8ce4c79a6097116ce4/latest/USD"
      );
      setCurrencies(Object.keys(response.data.conversion_rates));
    } catch (err) {
      console.log("Error fetching currencies:", err);
    }
  };

  // Fetch currencies on mount
  useEffect(() => {
    fetchCurrencies();
  }, []);

  // Calculate conversion when the button is clicked
  const calculateConvertedAmount = async () => {
    if (!amount || amount < 0) {
      setConvertedAmount(null);
      setNotification({
        visible: true,
        message: "Please enter a valid amount.",
        type: "error",
      });
      return;
    }

    try {
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/631d5c8ce4c79a6097116ce4/latest/${fromCurrency}`
      );
      const rate = response.data.conversion_rates[toCurrency];
      setConvertedAmount((amount * rate).toFixed(2) + " " + toCurrency);
      setNotification({ visible: false, message: "", type: "" });
    } catch (err) {
      console.log("Error converting currency:", err);
      setNotification({
        visible: true,
        message: "Error fetching conversion rates. Please try again.",
        type: "error",
      });
    }
  };

  // Swap the currencies
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl font-semibold text-gray-700 text-center">
        Currency Converter
      </h2>

      {/* Notification */}
      {notification.visible && (
        <Notification message={notification.message} type={notification.type} />
      )}

      {/* Currency selectors and swap button */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <CurrencySelector
          currencies={currencies}
          title="From"
          currency={fromCurrency}
          setCurrency={setFromCurrency}
        />
        <div className="flex justify-center md:justify-center -mb-5 md:mb-0">
          <button
            onClick={swapCurrencies}
            className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
          >
            <HiArrowsRightLeft className="text-xl text-gray-700" />
          </button>
        </div>
        <CurrencySelector
          currencies={currencies}
          title="To"
          currency={toCurrency}
          setCurrency={setToCurrency}
        />
      </div>

      {/* Amount Input */}
      <AmountInput
        amount={amount}
        setAmount={(value) => {
          setAmount(value);
          if (value < 0) {
            setNotification({
              visible: true,
              message: "Please enter a valid amount.",
              type: "error",
            });
          } else {
            setNotification({
              visible: false,
              message: "",
              type: "",
            });
          }
        }}
      />

      {/* Convert Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={calculateConvertedAmount}
          className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Convert
        </button>
      </div>

      {/* Converted amount display */}
      {convertedAmount && (
        <ConversionResult convertedAmount={convertedAmount} />
      )}
    </div>
  );
};

export default CurrencyConverter;
