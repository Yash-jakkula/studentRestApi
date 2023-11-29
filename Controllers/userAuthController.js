const userAuth = require('../Schema/userAuthSchema');
const fs = require('fs');

const userDetails = fs.readFileSync('D:/contact/Data/userAuth.json','utf-8');
const userLogin = JSON.parse(userDetails);
async function userInfo(req,res){
    try{
        const userData = await userAuth.find();
        (userData.length != 0)?
        res.status(200).json(userData)
        :
        res.status(404).json({message:"no users found"})
    }
    catch(err){
        res.status(500).json({message:err})
    }
}

async function insertUser(req,res){
    try{
        await userAuth.insertMany(userLogin);
        res.status(201).json(userAuth);
    }
    catch(err){
        res.status(500).json({message:err})
    }
}


module.exports  = {userInfo,insertUser}