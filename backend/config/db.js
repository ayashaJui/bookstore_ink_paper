import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);

    console.log(`MongoDB connected!! ${conn.connection.host}`.brightYellow);
  } catch (error) {
    console.error(`Error:: ${error.message}`.brightRed);
    process.exit(1);
  }
};

export default connectDB;
