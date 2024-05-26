import userModel from "../models/userModel.js";

// User Signup Controller
export const userSignup = async (req, res) => {
    try {
        const { email } = req.body;

        // Check if the user already exists
        const existingUser = await userModel.findOne({ email: email });

        if (existingUser) {
            return res.status(400).send({ message: "Email id is already registered", alert: false });
        }

        // Create a new user
        const newUser = new userModel(req.body);
        await newUser.save();

        res.status(201).send({ message: "Successfully signed up", alert: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error", alert: false });
    }
};

// User Login Controller
export const userLogin = async (req, res) => {
    try {
        const { email } = req.body;

        // Find the user by email
        const user = await userModel.findOne({ email: email });

        if (user) {
            const dataSend = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                image: user.image,
            };

            console.log(dataSend);
            res.status(200).send({
                message: "Login is successful",
                alert: true,
                data: dataSend,
            });
        } else {
            res.status(400).send({
                message: "Email is not available, please sign up",
                alert: false,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error", alert: false });
    }
};
