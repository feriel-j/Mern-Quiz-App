//importing express
const express = require("express");
const cors = require("cors");
//initialisation
const app = express();
//importing database
const connectDB = require("./config/connectDB");

//importing passport
const passport = require("passport");
//importing dotenv
require("dotenv").config();
//connection database
connectDB();
//convert json:middleware
app.use(express.json());
app.use(cors());
//running passport
app.use(passport.initialize());
//ROUTE
app.use("/uploads", express.static("uploads"));
app.use("/user", require("./routes/user"));
app.use("/quizz", require("./routes/quizz"));

app.use("/quiz/uploads", require("./routes/uploadRouter"));
app.listen(process.env.PORT, (err) => {
  err ? console.log(err) : console.log("server is running...");
});
