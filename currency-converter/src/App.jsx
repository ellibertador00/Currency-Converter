import "./App.css";
import CurrencyConverter from "./CurrencyConverter";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="container mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl bg-white rounded-lg shadow-xl p-6 border border-gray-300">
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
