import express from "express";
import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose";
import { router } from "./Routes/BookRoutes.js";
import cors from "cors"
import { errorHandler } from "./Middleware/errorHandler.js";
import userRouter from "./Routes/UserRoutes.js";

const PORT = process.env.PORT
const mongoDBURL = process.env.mongoDBURL

const app = new express();


app.use(express.json())
app.use(cors())
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))
app.use("/api/books", router)
app.use("/api/auth", userRouter)
app.use(errorHandler)


app.get("/", (req, res) => {
    return res.status(234).send('Welcome To MERN Stack Tutorial');
});


mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("connected to database");
        app.listen(PORT, () => {
        console.log(`App is listening to port ${PORT}`);
        })
    })
    .catch((error)=>{
    console.log("connection error: "+error);
    })


