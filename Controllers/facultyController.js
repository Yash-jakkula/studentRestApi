const facultyInfo = require('../Schema/FacultySchema');
const fs = require('fs');
const Express = require('express');
const { title } = require('process');

const file = fs.readFileSync('D:/contact/Data/data.json','utf-8');

const jsonfile = JSON.parse(file);

async function getFaculty(req,res){
    try{
       const info = await facultyInfo.find();
       res.status(200).json(info);

}
catch(err){
    res.status(500).send(err)
}
}

async function insertFaculty(req,res){
    try{
        await facultyInfo.insertMany(jsonfile);
        res.status(201).send("file inserted succesfully");
    }
    catch(err){
        res.status(500).json({errmessage:err,status:500});
    }
}

async function updateLikes(req,res){
    try{
        const {id} = await req.params;
        const data = await facultyInfo.find()
        let facultyId = "";

        data.find((item) => {(item.faculty.find((fac)=>
            {
                const fId = ":"+fac.facultyId;
                if(fId == id){
                    facultyId = fac.facultyId;
                }
            }
            ))})
       await facultyInfo.updateOne({"faculty.facultyId":facultyId},{$push:{faculty:{"facultyName" : "Dr.Sridevi"}}});

        res.status(201).json({message:'updated '});
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function facDelete(req,res){
    try{
        await facultyInfo.deleteMany({});
        res.status(200).json({message:'deleted'});
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {getFaculty , insertFaculty, updateLikes, facDelete};