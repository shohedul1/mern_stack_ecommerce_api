import express from "express";
import { userLogin, userSignup } from "../controller/userController.js";

const router = express.Router();

router.post("/signup",userSignup ); // Use POST for signup
router.post("/login",userLogin ); // Use POST for signup


export default router;