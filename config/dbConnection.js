import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "DB connected   host :",
      connect.connection.host,
      " name : ",
      connect.connection.name
    );
  } catch (err) {
    console.log("error", err);
    process.exit(1);
  }
};

export default connectDb;
