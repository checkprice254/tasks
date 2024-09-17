import mongoose from "mongoose";

const ConnectDB = await mongoose.connect(process.env.MONGODB_URI);

export default ConnectDB;
