import productModel from "../models/productModel.js";

// Post Product Controller
export const postProduct = async (req, res) => {
    try {
        // Create a new product instance with the request body data
        const newProduct = new productModel(req.body);

        // Save the new product to the database
        await newProduct.save();

        // Send a success response
        res.status(201).send({ message: "Upload successfully", alert: true });
    } catch (error) {
        // Log the error and send an error response
        console.error(error);
        res.status(500).send({ message: "Internal server error", alert: false });
    }
};

// Get Product Controller
export const getProduct = async (req, res) => {
    try {
        // Retrieve all products from the database
        const products = await productModel.find({});

        // Send the products as a JSON response
        res.status(200).json(products);
    } catch (error) {
        // Log the error and send an error response
        console.error(error);
        res.status(500).send({ message: "Internal server error", alert: false });
    }
};
