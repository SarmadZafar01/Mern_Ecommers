import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connect to db ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in mongodb ${error}`);
  }
};

export default connectdb;
