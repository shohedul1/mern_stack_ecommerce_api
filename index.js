import  express from "express";
import cors  from "cors"
import mongoose from "mongoose";
import dotenv  from "dotenv";
import userRoute  from "./route/userRoute.js";
import productRoute  from "./route/productRoute.js"

// const Stripe = require('stripe')

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT 

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connect to Databse"))
    .catch((err) => console.log(err));


//

//api
app.get("/", (req, res) => {
    res.send("Server is running");
});

//sign up
app.use("/", userRoute);
app.use("/", productRoute);



// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// app.post("/create-checkout-session", async (req, res) => {

//     try {
//         const params = {
//             submit_type: 'pay',
//             mode: "payment",
//             payment_method_types: ['card'],
//             billing_address_collection: "auto",
//             shipping_options: [{ shipping_rate: "shr_1N0qDnSAq8kJSdzMvlVkJdua" }],

//             line_items: req.body.map((item) => {
//                 return {
//                     price_data: {
//                         currency: "inr",
//                         product_data: {
//                             name: item.name,
//                             // images : [item.image]
//                         },
//                         unit_amount: item.price * 100,
//                     },
//                     adjustable_quantity: {
//                         enabled: true,
//                         minimum: 1,
//                     },
//                     quantity: item.qty
//                 }
//             }),

//             success_url: `${process.env.FRONTEND_URL}/success`,
//             cancel_url: `${process.env.FRONTEND_URL}/cancel`,

//         }


//         const session = await stripe.checkout.sessions.create(params)
//         // console.log(session)
//         res.status(200).json(session.id)
//     }
//     catch (err) {
//         res.status(err.statusCode || 500).json(err.message)
//     }

// })


//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));