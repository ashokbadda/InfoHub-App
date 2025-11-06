import React, { useState } from "react";

const WeatherModule = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const weatherDescriptions = [
    "clear sky",
    "partly cloudy",
    "light rain",
    "heavy rain",
    "thunderstorm",
    "sunny",
    "misty",
    "foggy",
    "windy",
  ];

  const fetchWeather = async () => {
    if (!city) return setError("Enter a city name");
    setError("");
    setLoading(true);
    setWeather(null);

    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Generate random temperature and weather
      const randomTemp = (20 + Math.random() * 15).toFixed(1); // 20°C–35°C
      const randomDesc =
        weatherDescriptions[
          Math.floor(Math.random() * weatherDescriptions.length)
        ];

      // Create dynamic dummy data
      const dummyData = {
        city,
        temp: randomTemp,
        description: randomDesc,
      };

      setWeather(dummyData);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Weather Info</h2>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {loading && <p className="info">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && !error && (
        <div className="result">
          <h3>{weather.city}</h3>
          <p>{weather.temp}°C</p>
          <p>{weather.description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherModule;
