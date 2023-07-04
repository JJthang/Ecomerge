import CategorySchame from "../Models/Category";
import ProductSchame from "../Models/Product";
import { CheckValidate } from "../Validate/Product";
import cloudinary from "../config/Cloudinary";

export const Create_Product = async (req, res) => {
  try {
    const { error } = CheckValidate.validate(req.body);
    if (error) {
      return res.json({
        message: "Error",
        error: error.details[0].message,
      });
    }
    const { Product_Name } = req.body;
    const ProductExists = await ProductSchame.findOne({ Product_Name });
    if (ProductExists) {
      return res.json({
        message: "Product already exists",
      });
    }
    const data = await ProductSchame.create(req.body);

    await CategorySchame.findByIdAndUpdate(data.Category, {
      $addToSet: {
        Product: data._id,
      },
    });

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

export const Get_Product = async (req, res) => {
  try {
    const data = await ProductSchame.find();
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

export const Get_One_Product = async (req, res) => {
  try {
    const data = await ProductSchame.findById(req.params.id);
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

export const Delete_Product = async (req, res) => {
  try {
    const product = await ProductSchame.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    } else {
      await ProductSchame.deleteOne();
      await CategorySchame.findByIdAndUpdate(product.Category, {
        $pull: { Product: product._id },
      });
    }
    return res.json({
      message: "Delete Product Successfully",
      data: product,
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

export const Put_Product = async (req, res) => {
  try {
    const { error } = CheckValidate.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const data = await ProductSchame.findByIdAndUpdate(
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
