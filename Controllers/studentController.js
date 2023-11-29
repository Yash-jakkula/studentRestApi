const studentInfo = require('../Schema/studentSchema');
const file = require('fs');

const sdata = file.readFileSync('D:/contact/Data/students.json');
const studentData = JSON.parse(sdata);

async function getStudents(req,res){
    try{
       const info = await studentInfo.find();
       (info.length !=0) ?
       res.status(200).json(info) :
       res.status(404).json({message:"no student information"});
}
catch(err){
    res.status(500).send(err)
}
}

async function insertStudent(req,res){
    try{
        await studentInfo.insertMany(studentData);
        res.status(201).send("file inserted succesfully");
    }
    catch(err){
        res.status(500).json({errmessage:err,status:500});
    }
}

module.exports = {getStudents,insertStudent};