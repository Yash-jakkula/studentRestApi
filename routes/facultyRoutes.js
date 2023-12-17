const {getFaculty,insertFaculty,updateLikes, facDelete, updateLikesFaculty} = require('../Controllers/facultyController');


const Express = require('express');

const facultyRouter = Express.Router();

facultyRouter.get('/getFaculty',getFaculty);

facultyRouter.post('/insertFaculty',insertFaculty);

facultyRouter.put('/updateFacultyLikes/:facultyId/:sId/:sec/:year',updateLikesFaculty);

facultyRouter.delete('/deleteFaculty',facDelete);


module.exports = facultyRouter;
