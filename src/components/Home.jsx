import React, { useState } from "react";

function Home() {
  const [terms, setTerms] = useState(0);
  const [series, setSeries] = useState([]);

  const generateFibonacci = (n) => {
    let fib = [];
    for (let i = 0; i < n; i++) {
      if (i === 0) fib.push(0);
      else if (i === 1) fib.push(1);
      else fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
  };

  const handleGenerate = () => {
    setSeries(generateFibonacci(terms));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Fibonacci Series Generator</h2>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="number"
          placeholder="Enter number of terms"
          value={terms}
          onChange={(e) => setTerms(parseInt(e.target.value))}
        />
        <button
          onClick={handleGenerate}
          style={{ backgroundColor: '#3b82f6', color: 'white', border: 'none' }}
        >
          Generate
        </button>
      </div>
      {series.length > 0 && (
        <p className="bg-gray-100 p-4 rounded text-gray-700">Series: {series.join(", ")}</p>
      )}
    </div>
  );
}

export default Home;
