import React, { useState } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/quote");
      const data = await res.json();
      setQuote(data.quote);
    } catch {
      setQuote("Failed to fetch quote");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Motivational Quote</h2>
      <button onClick={fetchQuote}>Generate Quote</button>
      {loading && <p className="info">Loading...</p>}
      {quote && <p className="quote">“{quote}”</p>}
    </div>
  );
};

export default QuoteGenerator;
