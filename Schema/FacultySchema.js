const mongoose = require('mongoose');
const faculty = [{
    facultyName:String,
    facultyId:String,
    experience:String,
    profile:String,
    specialization:String,
    basicInfo:String,
    likes:[{}],
    comments:[{}],
    votes:[{}]}]

const facultySchema = new mongoose.Schema([{
    title:String,
    faculty:faculty,
}])

const facultyInfo = mongoose.model('facultyInfo',facultySchema);

module.exports = facultyInfo;