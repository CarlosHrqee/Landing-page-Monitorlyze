import { useState } from 'react';
import type { FC } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Calculator: FC = () => {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");

  const handleNumber = (num: string) => {
    if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (operator: string) => {
    setEquation(display + " " + operator + " ");
    setDisplay("0");
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation("");
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setEquation("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Free Calculator Tool
          </h1>
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            <div className="bg-gray-900 rounded p-4 mb-4">
              <div className="text-gray-400 text-sm mb-1">{equation}</div>
              <div className="text-white text-3xl font-mono text-right">
                {display}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => {
                    if (btn === "=") handleEqual();
                    else if (["+", "-", "×", "÷"].includes(btn)) handleOperator(btn);
                    else handleNumber(btn);
                  }}
                  className={`p-4 rounded-lg text-xl font-semibold transition-colors
                    ${btn === "=" 
                      ? "bg-blue-600 hover:bg-blue-700 text-white" 
                      : ["+", "-", "×", "÷"].includes(btn)
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-600 hover:bg-gray-500 text-white"
                    }`}
                >
                  {btn}
                </button>
              ))}
              <button
                onClick={handleClear}
                className="col-span-4 p-4 rounded-lg text-xl font-semibold bg-red-600 hover:bg-red-700 text-white transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calculator; 
