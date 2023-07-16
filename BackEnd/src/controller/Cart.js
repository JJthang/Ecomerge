import mongoose from "mongoose";
import SchameCart from "../Models/Cart";
import { ValidateCart } from "../Validate/Cart";

export const CreateCart = async (req, res) => {
  try {
    const { error } = ValidateCart.validate(req.body);
    if (error) {
      return res.json({
        error: error.details[0].message,
      });
    }
    const data1 = await SchameCart.findOne({ id_user: req.body.id_user });
    if (!data1) {
      return res.status(404).json({
        message: "Khong tim Thấy User",
      });
    }
    const { List_Product } = req.body;
    const Currnet_Data = {
      List_Product,
    };
    data1.List_Product.push(Currnet_Data.List_Product);
    await data1.save();

    return res.status(200).json({
      message: "Success Add to Cart",
      data1,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

export const Get_All_Cart = async (req, res) => {
  try {
    const data = await SchameCart.find();
    return res.status(200).json({
      message: "Get Data Successfully",
      data,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

export const Get_Product_user = async (req, res) => {
  try {
    const data = await SchameCart.findOne({ id_user: req.params.id });
    console.log(data);
    if (data) {
      return res.status(200).json({
        message: "Successfully retrieved data",
        data,
      });
    } else {
      return res.status(404).json({
        message: "Cate does not exist",
      });
    }
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

export const Put_Cate = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }
    console.log("Cart1");
    console.log(req.params.id);
    console.log(_id);

    const result = await SchameCart.updateOne(
      { id_user: req.params.id },
      {
        $pull: { List_Product: { _id: _id } },
      }
    );
    console.log("Cart2");
    return res.status(200).json({
      message: "Product deleted successfully",
      result,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
