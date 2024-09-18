const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error(
        "MONGODB_URI is not defined in the environment variables"
      );
    }
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("MongoDB connected successfully"))
      .catch((err) => {
        console.error("MongoDB connection error:", err.message);
        process.exit(1);
      });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
