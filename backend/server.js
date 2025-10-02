import express from "express";

const app = express();

const port = process.env.PORT || 5000

app.get('/',(req ,res)=>{
    res.send("Hello Everyone...............")
})
app.listen(port, () => {
  console.log("Server is running on port 4000");
});
