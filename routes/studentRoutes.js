const express = require('express');
const { getStudents, insertStudent, updateLikesStudent, deleteStudents, deleteParticular } = require('../Controllers/studentController');


const studentRouter = express.Router();

studentRouter.get('/getStudents',getStudents);

studentRouter.post('/insertStudent',insertStudent);

studentRouter.put(`/updateLike/:id/:facId`,updateLikesStudent);

studentRouter.put('/deleteParticular/:Id/:ele',deleteParticular);

studentRouter.delete('/deleteStudents',deleteStudents);

module.exports = studentRouter;