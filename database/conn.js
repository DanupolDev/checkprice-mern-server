import mongoose from "mongoose";

export default async function connect() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(process.env.ATLAS_URL);
  console.log("Database Connected");
}
