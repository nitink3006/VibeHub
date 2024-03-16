const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config(); // Load environment variables from .env file

const connectDB = async () => {
  try {
    //console.log(process.env.MONGO_URI); // Optional: Verify the connection string
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;
