import "./App.css";
import CurrencyConverter from "./CurrencyConverter";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-4">
      <div className="container mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
