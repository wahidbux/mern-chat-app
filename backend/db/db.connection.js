import mongoose from "mongoose";

const connectDB = async (req , res)=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL,)
        console.log("Database connected successfully.......")
    } catch (error) {
        console.log("Error: failed to connect Mongodb", error.message);
    }
}

export default connectDB