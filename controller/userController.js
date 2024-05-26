import userModel from "../models/userModel.js";

export const userSignup = async (req, res) => {
    // console.log(req.body);
    const { email } = req.body;

    userModel.findOne({ email: email }, (err, result) => {
        // console.log(result);
        console.log(err);
        if (result) {
            res.send({ message: "Email id is already register", alert: false });
        } else {
            const data = userModel(req.body);
            const save = data.save();
            res.send({ message: "Successfully sign up", alert: true });
        }
    });
};


//login  controller  
export const userLogin = (req, res) => {
    // console.log(req.body);
    const { email } = req.body;
    userModel.findOne({ email: email }, (err, result) => {
        if (result) {
            const dataSend = {
                _id: result._id,
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
                image: result.image,
            };
            console.log(dataSend);
            res.send({
                message: "Login is successfully",
                alert: true,
                data: dataSend,
            });
        } else {
            res.send({
                message: "Email is not available, please sign up",
                alert: false,
            });
        }
    });
}