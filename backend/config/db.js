import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Hariharan:admin@cluster0.hegdbkb.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB Connected");
    });
};
