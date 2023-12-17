const weatherData = require("../Schema/weatherData");

const insertData = async (req, res) => {
  try {
    const wdata = req.body;
    await weatherData.insertMany(wdata);
    res.status(200).json({ message: "inserted" });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const getWeather = async (req, res) => {
  try {
   const wdata =  await weatherData.find();
    res.status(200).json({ message: wdata});
  } catch (err) {
    res.status(200).json({ message: "data not found" });
  }
};

module.exports = { insertData, getWeather };
