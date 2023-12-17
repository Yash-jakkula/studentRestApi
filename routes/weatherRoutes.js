const express = require("express");
const { insertData, getWeather } = require("../Controllers/weatherController");

const weatherRouter = express.Router();

weatherRouter.post("/insertWeatherData", insertData);

weatherRouter.get("/getweather", getWeather);

module.exports = weatherRouter;
