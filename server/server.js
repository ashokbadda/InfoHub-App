import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 🌦 Weather API
app.get("/api/weather", async (req, res) => {
  const { city } = req.query;
  if (!city) return res.json({ error: "City is required" });

  try {
    const apiKey = "YOUR_REAL_API_KEY_HERE"; // 👈 replace this
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    // 🔍 log the data for debugging
    console.log("Weather API Response:", data);

    if (data.cod !== 200) {
      return res.json({ error: data.message || "City not found" });
    }

    res.json({
      city: data.name,
      temp: data.main.temp,
      description: data.weather[0].description,
    });
  } catch (err) {
    console.error("Server error:", err);
    res.json({ error: "Server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
