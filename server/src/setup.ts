import mongoose from "mongoose";

export const connectToDB = () => {
  const MONGODB_URI = "mongodb://127.0.0.1:27017/workoutApp";
  return mongoose.connect(MONGODB_URI);
};
