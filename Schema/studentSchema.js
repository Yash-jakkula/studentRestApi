const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Name:String,
    Id:String,
    Email:String,
    Section:String,
    Branch:String,
    Year:String,
    liked:Array,
    voted:Array,
    Profile:String,
    commented:Array
})

const studentInfo = mongoose.model('studentInfo',studentSchema);

module.exports = studentInfo;