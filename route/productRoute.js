import express from "express";
import { getProduct, postProduct } from "../controller/productController.js";

const router = express.Router();

router.post("/product",postProduct); // Use POST for signup
router.get("/getproduct",getProduct); // Use POST for signup



export default router;