import mongoose from "mongoose";

export const connectionDB= async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected successfully");
    } catch(error){
        console.error("Error connecting to MongoDB", error);
        process.exit(1); // exit with failure
    }
};