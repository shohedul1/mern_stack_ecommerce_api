import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./route/userRoute.js";
import productRoute from "./route/productRoute.js";
import stripeRoute from "./route/stripeRoute.js"

// const Stripe = require('stripe')

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connect to Databse"))
    .catch((err) => console.log(err));


//

//api
app.get("/", (req, res) => {
    res.send("Server is  running hello developer");
});

//sign up
app.use("/", userRoute);
app.use("/", productRoute);
app.use("/", stripeRoute);



//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));