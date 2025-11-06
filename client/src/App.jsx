import React, { useState } from "react";
import WeatherModule from "./components/WeatherModule";
import CurrencyConverter from "./components/CurrencyConverter";
import QuoteGenerator from "./components/QuoteGenerator";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("weather");

  return (
    <div className="app-container">
      <h1 className="title">InfoHub</h1>

      <div className="tabs">
        <button
          className={activeTab === "weather" ? "tab active" : "tab"}
          onClick={() => setActiveTab("weather")}
        >
          Weather
        </button>
        <button
          className={activeTab === "currency" ? "tab active" : "tab"}
          onClick={() => setActiveTab("currency")}
        >
          Currency
        </button>
        <button
          className={activeTab === "quote" ? "tab active" : "tab"}
          onClick={() => setActiveTab("quote")}
        >
          Quotes
        </button>
      </div>

      <div className="content">
        {activeTab === "weather" && <WeatherModule />}
        {activeTab === "currency" && <CurrencyConverter />}
        {activeTab === "quote" && <QuoteGenerator />}
      </div>
    </div>
  );
}

export default App;
