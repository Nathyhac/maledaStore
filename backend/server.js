import express from "express"
import  dotenv  from "dotenv";
import { connectDb } from "./config/db.js";
import productRoute from "./routes/productRoutes.js"

dotenv.config();
const app  = express();
app.use(express.json())

app.use("/api/product", productRoute)

console.log(process.env.MONGO_URI)

app.listen(5000, ()=>{
    connectDb()
    console.log("listening on port 5000")
})



