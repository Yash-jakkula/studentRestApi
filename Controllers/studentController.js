const studentInfo = require('../Schema/studentSchema');
const file = require('fs');
const { updateLikes } = require('./facultyController');

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

async function updateLikesStudent(req,res){
    try{
        const {id,facId} = req.params;

        const student = await studentInfo.find();
        let sId=true;
        student.find((item) => {
            item.liked.map((item) => {
                if(item==facId){
                    sId = false;
                }
            })
        })
        
        if(sId){
        await studentInfo.updateOne({Email:id},{$push:{liked:facId}});
        res.status(201).json({status:"updated"});
        }
        else{
            res.status(404).json({message:"Student Not Found"});
        }

    }
    catch(err){
        res.status(500).json({message:"Not updated"})
    }
}

async function deleteStudents(req,res){
    try{
        await studentInfo.deleteMany({})
        res.status(200).json({message:"deleted"})
    }
    catch(err){
        console.log(err)
    }
}

async function deleteParticular(req,res){
    try{
        const {Id,ele} = req.params;
        await studentInfo.updateOne({Email:Id},{$pull:{liked:ele}})
        res.status(200).json({message:"success"})
    }
    catch(err){
        res.status(500).json({message:err});
    }
}

module.exports = {getStudents,insertStudent,updateLikesStudent,deleteStudents,deleteParticular};