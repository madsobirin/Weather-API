import express from "express";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Weather API is running");
});

app.get("/api/weather/:city", (req, res) => {
  const { city } = req.params;

  const mocWeather = {
    city: city,
    temperature: 30,
    condition: "sunny",
    humidity: 70,
    windSpeed: 10,
  };

  res.status(200).json({
    success: true,
    message: "Weather berhasil ditemukan",
    data: mocWeather,
  });
});

export default app;
