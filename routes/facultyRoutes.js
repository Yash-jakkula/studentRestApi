const {getFaculty,insertFaculty,updateLikes, facDelete} = require('../Controllers/facultyController');


const Express = require('express');

const facultyRouter = Express.Router();

facultyRouter.get('/getFaculty',getFaculty);

facultyRouter.post('/insertFaculty',insertFaculty);

facultyRouter.put('/updateFaculty/:id',updateLikes);

facultyRouter.delete('/deleteFaculty',facDelete);


module.exports = facultyRouter;
