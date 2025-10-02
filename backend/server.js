import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"

const app = express();
dotenv.config();

const port = process.env.PORT || 4000

app.get('/',(req ,res)=>{
    res.send("Hello Everyone...............")
})

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log("Server is running on port 8000");
});
