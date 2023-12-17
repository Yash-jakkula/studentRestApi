const facultyRouter = require("./routes/facultyRoutes");
const userRouter = require("./routes/userRoutes");
const studentRouter = require("./routes/studentRoutes");
const weatherRouter = require("./routes/weatherRoutes");
const Express = require("express");
const App = Express();
const cors = require("cors");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://username:password@cluster0.iz8qnim.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    App.listen(3000, () => {
      console.log("server started on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

App.use(Express.json());
App.use(cors());
App.use("/faculty", facultyRouter);
App.use("/user", userRouter);
App.use("/student", studentRouter);
App.use('/weather',weatherRouter)
