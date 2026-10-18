import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router";

function ModalTopUpEnterpin({ setShowModal = () => {} }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  const [pinValues, setPinValues] = useState(["", "", "", "", "", ""]);

  const handleNext = (e) => {
    e.preventDefault();
    const pin = pinValues.join("");

    if (pin.length < 6) {
      setError("Masukkan 6 digit PIN Anda.");
      return;
    }

    setShowModal(false);
    navigate("/top-up/summary");
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const newPin = [...pinValues];
    newPin[index] = value;
    setPinValues(newPin);
    setError("");

    if (value && index < pinValues.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && !pinValues[i] && i > 0) {
      const newPin = [...pinValues];
      newPin[i - 1] = "";
      setPinValues(newPin);
      inputRefs.current[i - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const digits = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!digits) return;

    // Update nilai PIN pada posisi yang diketik
    const newPin = ["", "", "", "", "", ""];
    digits.split("").forEach((d, i) => (newPin[i] = d));
    setPinValues(newPin);

    setError("");
    inputRefs.current[Math.min(digits.length, 5)].focus();
  };

  return (
    <div className="flex justify-center absolute inset-0 bg-black/50 p-5  items-center r z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-100 relative">
        <h2 className="text-lg font-semibold mb-4 ">Top Up Amount</h2>

        <form onSubmit={handleNext} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-[29px] ">Enter Your Pin 👋</h1>
            <p>Enter Your Pin For Transaction</p>
          </div>

          <div className="flex justify-center gap-3 mt-15 mb-15">
            {pinValues.map((value, i) => (
              <input
                key={i}
                type="password"
                maxLength={1}
                inputMode="numeric"
                autoComplete="off"
                ref={(el) => (inputRefs.current[i] = el)}
                value={value}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onPaste={handlePaste}
                onFocus={(e) => e.target.select()}
                className={`w-10 sm:w-12 h-12 text-center text-2xl outline-none border-b-2 transition-colors duration-200 focus:border-blue-600 ${
                  value ? "border-blue-600" : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="flex gap-3">
            <button
              type="button"
              className="flex-1 p-2 bg-gray-400 text-white rounded-lg cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 p-2 bg-blue-600 text-white rounded-lg cursor-pointer"
            >
              Next
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 text-[17px]">
            Forgot Your Pin ?{" "}
            <Link to={"/auth/enter-pin"}>
              <span className="cursor-pointer text-blue-700">Reset</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ModalTopUpEnterpin;
