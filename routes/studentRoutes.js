const express = require('express');
const { getStudents, insertStudent } = require('../Controllers/studentController');


const studentRouter = express.Router();

studentRouter.get('/getStudents',getStudents);

studentRouter.post('/insertStudent',insertStudent);

module.exports = studentRouter;