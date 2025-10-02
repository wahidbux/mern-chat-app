import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
import connectDB from "./db/db.connection.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 4000

app.get('/',(req ,res)=>{
    res.send("Hello Everyone...............")
})

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDB();
 console.log(`Server is running on ${port}`);
});
