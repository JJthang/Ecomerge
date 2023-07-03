import joi from "joi";
import ProductSchame from "../Models/Product";
const CheckValidate = joi.object({
  _id: joi.string(),
  Product_Name: joi.string().required().empty().messages({
    "string.required": "Không được để trống",
    "any.required": "Trường passwofewfwerd là bắt buộc",
    "string.empty": "Name không được để trống",
  }),
  Product_Price: joi.number().required().empty().messages({
    "number.empty": "Number không được để trống",
    "any.required": "Trường password là bắt buộc",
  }),
  Product_KG: joi.number().required().empty().messages({
    "number.empty": "Number không được để trống",
    "any.required": "Trường password là bắt buộc",
  }),
  Product_Image: joi.string().required().empty().messages({
    "string.empty": "Password không được để trống",
    "any.required": "Trường Image là bắt buộc",
  }),
  Product_Desc: joi.string().required().empty().messages({
    "string.empty": "Password không được để trống",
    "any.required": "Trường dwefpassword là bắt buộc",
  }),
});

export const Create_Product = async (req, res) => {
  try {
    const { error } = CheckValidate.validate(req.body);
    console.log(error);
    if (error) {
      return res.json({
        message: "Error",
        error: error.details[0].message,
      });
    }
    const data = await ProductSchame.create(req.body);
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
    const data = await ProductSchame.findByIdAndDelete({ _id: req.params.id });
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
