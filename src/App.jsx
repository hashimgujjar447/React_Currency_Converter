import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hook/useCurrencyInfo";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const apiData = useCurrencyInfo(from);
  const options = Object.keys(apiData);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convertCurrency = () => {
    setConvertedAmount(amount * apiData[to]);
  };

  return (
    <>
      <div
        className="w-screen h-screen flex justify-center items-center"
        style={{
          background: `url(
            "https://images.unsplash.com/photo-1737365505271-ac0893983a40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          )`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto backdrop:blur-sm bg-white/30 border border-gray-60 rounded-lg p-5">
            <form
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label={"from"}
                  amount={amount}
                  onAmountChange={(value) => setAmount(value)}
                  selectedCurrency={from}
                  onCurrencyChange={(value) => setFrom(value)}
                  options={options}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  Swap{" "}
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label={"to"}
                  selectedCurrency={to}
                  onCurrencyChange={(value) => setTo(value)}
                  options={options}
                  amount={convertedAmount}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={convertCurrency}
              >
                {`Convert ${amount} ${from.toUpperCase()} to ${to.toUpperCase()}`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
