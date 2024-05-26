import express from "express";
import { postStripe } from "../controller/stripeController.js";

const router = express.Router();

router.post("/create-checkout-session",postStripe ); // Use POST for signup


export default router;