import PropTypes from "prop-types";
import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  selectedCurrency,
  onCurrencyChange,
  options = [],
}) {
  const amountInputId = useId();
  return (
    <div className="bg-white p-2 rounded-lg flex ">
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          type="number"
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="bg-gray-100 py-1 px-1 rounded-lg cursor-pointer outline-none"
        >
          {options &&
            options.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
}
InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default InputBox;
