const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { DB_NAME } = require("../constants");

dotenv.config({
  path: "../.env",
});

const connectDB = async () => {
  try {
    const url = process.env.MONGODB_URL;
    console.log(url);
    const connectionInstance = await mongoose.connect(`${url}/${DB_NAME}`);
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
