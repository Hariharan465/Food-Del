import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("DB Connected");
    
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
};

//  .connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {
//       console.log("DB Connected");
//     });