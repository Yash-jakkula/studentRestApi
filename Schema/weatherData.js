const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    data:{},
})

const weatherData = mongoose.model('weatherSchema',weatherSchema);

module.exports = weatherData;