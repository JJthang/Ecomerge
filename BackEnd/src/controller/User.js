import SchameCart from "../Models/Cart";
import SchameUser from "../Models/User";
import { CheckValidateSignIn, CheckValidateSignUp } from "../Validate/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const SignUp = async (req, res) => {
  try {
    const { Name_user, User_password, User_email } = req.body;
    const Userexists = await SchameUser.findOne({ User_email });
    if (Userexists) {
      return res.json({
        message: "User already exists",
      });
    }
    const { error } = CheckValidateSignUp.validate(req.body);
    if (error) {
      return res.json({
        message: "Error: " + error.details[0].message,
      });
    }
    const HashedPassword = await bcrypt.hash(User_password, 7);
    const user = await SchameUser.create({
      Name_user,
      User_email,
      User_password: HashedPassword,
    });
    console.log("1");

    console.log("2");
    user.User_password = undefined;
    return res.json({
      message: "Create user Successfully",
      data: user,
    });
  } catch (error) {
    return res.json({
      message: "Error creating user",
    });
  }
};

export const SIgnIn = async (req, res) => {
  try {
    const { User_password, User_email } = req.body;
    const { error } = CheckValidateSignIn.validate(req.body);
    if (error) {
      return res.json({
        message: error.details[0].message,
      });
    }
    const user = await SchameUser.findOne({ User_email });
    if (!user) {
      return res.json({
        message: "User is not exist",
      });
    }
    console.log(user);
    await SchameCart.create({
      id_user: user._id,
      List_Product: [],
    });
    const isMatch = await bcrypt.compare(User_password, user.User_password);
    console.log(isMatch);
    if (!isMatch) {
      return res.json({
        message: "Incorrect Password",
      });
    }
    const token = jwt.sign({ _id: user._id }, "1234", {
      expiresIn: "1h",
    });
    user.User_password = "undefined";
    return res.status(200).json({
      message: "Logged in successfully",
      accessTokent: token,
      user,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};
