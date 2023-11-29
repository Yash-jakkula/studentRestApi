const mongoose = require('mongoose');

const userAuthSchema = new mongoose.Schema({
    userEmail:String,
    userPassword:String,
    userName:String
})

const userAuth = mongoose.model('userAuth',userAuthSchema);

module.exports = userAuth;