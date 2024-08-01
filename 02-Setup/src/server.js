// require('dotenv').config({path: './env'})
const dotenv = require("dotenv");
const connectDB = require("./dbconfig/mongodb.js");
const express = require("express");

dotenv.config({
  path: "./.env",
});


const app = express();

connectDB()
  .then(() => {
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`⚙️ "  " Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
