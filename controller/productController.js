import productModel from "../models/productModel.js"

export const postProduct = async (req, res) => {
    // console.log(req.body)
    const data = await productModel(req.body)
    const datasave = await data.save()
    res.send({ message: "Upload successfully" })
};

export const getProduct = async (req, res) => {
    const data = await productModel.find({})
    res.send(JSON.stringify(data))
}