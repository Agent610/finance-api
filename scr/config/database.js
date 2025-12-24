const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Mongo URL:", process.env.MONGODB_URL);
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

console.log("Mongo URL:", process.env.MONGODB_URL);

module.exports = connectDB;
