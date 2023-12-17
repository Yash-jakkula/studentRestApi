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

async function updateLikesFaculty(req,res){
    try{
        const {facultyId,sId,sec,year} = await req.params;
        console.log(facultyId,sId,sec,year)
        const data = await facultyInfo.find()
        let value = true;
        data.find((item) => {(item.faculty.find((fac)=>
            {
                if(fac.facultyId == facultyId && fac.likes.find((item) => item.sId == sId)){
                    value = false;
                }
                else if(fac.facultyId == facultyId && fac.likes.find((item) => item.sId != sId)){
                    value = true;
                }
            }
            ))})
if(value){           
       await facultyInfo.updateOne({"faculty.facultyId":facultyId},{$push:{"faculty.$.likes":{sId:sId,section:sec,year:year}}});
       res.status(201).json({message:'updated '});
}
else{
    res.status(404).json({message:'user not found'});
}
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

module.exports = {getFaculty , insertFaculty, updateLikesFaculty, facDelete};