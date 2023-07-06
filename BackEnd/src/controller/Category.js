import ProductSchame from "../Models/Product";
import { CheckValidateCate } from "../Validate/CateRoute";
import CategorySchame from "../Models/Category";

export const Create_Category = async (req, res) => {
  try {
    const { error } = CheckValidateCate.validate(req.body);
    console.log(error);
    if (error) {
      return res.json({
        message: "Error",
        error: error.details[0].message,
      });
    }
    const { Cate_Name } = req.body;
    const CategoryExists = await CategorySchame.findOne({ Cate_Name });
    if (CategoryExists) {
      return res.json({
        message: "Category exists",
      });
    }
    const data = await CategorySchame.create(req.body);
    console.log("a1");
    return res.json({
      message: "Thêm sản phẩm thành công",
      data: data,
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

export const Get_Category = async (req, res) => {
  try {
    const data = await CategorySchame.find();
    if (data) {
      return res.status(200).json({
        message: "Get Data Success",
        data: data,
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

export const Get_One_Category = async (req, res) => {
  try {
    const data = await CategorySchame.findById(req.params.id).populate(
      "Product"
    );
    if (data) {
      return res.status(200).json({
        message: "Get Data Success ",
        data: data,
      });
    } else {
      return res.json({
        message: "Product does not exist",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

export const Delete_Category = async (req, res) => {
  try {
    const data = await CategorySchame.findByIdAndDelete({
      _id: req.params.id,
    });
    if (data) {
      return res.status(200).json({
        message: "Product deleted successfully",
        data: data,
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

export const Put_Category = async (req, res) => {
  try {
    const { error } = CheckValidateCate.validate(req.body);
    if (error) {
      console.log(error.details[0].message);
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const data = await CategorySchame.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (data) {
      return res.json({
        message: "Update Product Successfully",
        data: data,
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
