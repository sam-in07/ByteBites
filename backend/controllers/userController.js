import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user

const loginUser = async (req, res) => {};

//register

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  //store hobe

  try {
    //cheking is user is already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }
    //validation EMAIL
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Invalid email Enter valid one ",
      });
    }
    //validation password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }
    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(password, salt);

    //new user create
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
  } catch (error) {}
};

export { loginUser, registerUser };
