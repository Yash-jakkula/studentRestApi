const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Name:String,
    Id:String,
    Mail:String,
    Section:String,
    Branch:String,
    Year:String,
    liked:Array,
    voted:Array,
    commented:Array
})

const studentInfo = mongoose.model('studentInfo',studentSchema);

module.exports = studentInfo;