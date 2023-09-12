import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongodb Connect Successfully ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error}`);
    process.exit();
  }
};
