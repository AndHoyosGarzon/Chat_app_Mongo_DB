import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`
      ------------------------------------------------
      Connected to Database => ${conn.connection.name} 
      ------------------------------------------------
      `);
    return conn;
  } catch (error) {
    console.log("error in connectMongoDB", error.message);
    process.exit(1);
  }
};

export default connectMongoDB;
