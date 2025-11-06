import React, { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const convert = async () => {
    if (!amount) return;
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/currency?amount=${amount}`);
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ error: "API Error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Currency Converter</h2>
      <input
        type="number"
        placeholder="Enter amount in INR"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={convert}>Convert</button>

      {loading && <p className="info">Converting...</p>}
      {result && !result.error && (
        <div className="result">
          <p>USD: {result.usd}</p>
          <p>EUR: {result.eur}</p>
        </div>
      )}
      {result?.error && <p className="error">{result.error}</p>}
    </div>
  );
};

export default CurrencyConverter;
