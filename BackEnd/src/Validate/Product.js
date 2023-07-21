import joi from "joi";

export const CheckValidate = joi.object({
  _id: joi.string(),
  Product_Name: joi.string().required().empty().messages({
    "string.required": "Không được để trống",
    "any.required": "Trường Product_Name là bắt buộc",
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
    "any.required": "Trường Product_Desc là bắt buộc",
  }),
  Category: joi.string().empty().messages({
    "string.empty": "Password không được để trống",
    "any.required": "Trường password là bắt buộc",
  }),
});
