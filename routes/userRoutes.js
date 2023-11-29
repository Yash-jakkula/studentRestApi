const express = require('express');
const {userInfo,insertUser} = require('../Controllers/userAuthController');

const userRouter = express.Router();

userRouter.get('/getUsers',userInfo);

userRouter.post('/insertUser',insertUser);

module.exports = userRouter;