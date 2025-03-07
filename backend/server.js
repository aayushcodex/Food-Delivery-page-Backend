import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"
import foodRouter from "./routes/foodRout.js"


// app config

const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDb();

// api endpoint
app.use("/api/food",foodRouter)

app.get("/",(req,res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
    
})

// mongodb+srv://ayush9966:INCORRECT9966@cluster0.2vpyd.mongodb.net/?