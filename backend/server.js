import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser'

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";
import bodyParser from "body-parser";
import { app, server } from "./socket/socket.js";



const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

//app.use(express.json());    // to parse the incoming request with JSON payloads from (req.body())

// app.get('/',(req,res) => {
//     //root route http://localhost:5000/
//     res.send("Hello World!!");
// });


server.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});



