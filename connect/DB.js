const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connect successfully ${db.connection.host}`);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
