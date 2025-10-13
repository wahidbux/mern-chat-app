import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.route.js"

import connectDB from "./db/db.connection.js";

const app = express();
dotenv.config();

app.use(express.json()) // to parse the incomming requests with json  payload (form req.body)
app.use(cookieParser())
const port = process.env.PORT || 4000

app.get('/',(req ,res)=>{
    res.send("Hello Everyone...............")
})

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  connectDB();
 console.log(`Server is running on ${port}`);
});
