import joi from "joi";

export const CheckValidateCate = joi.object({
  _id: joi.string(),
  Cate_Name: joi.string().required().empty().messages({
    "string.required": "Không được để trống",
    "any.required": "Trường Cate_Name là bắt buộc",
    "string.empty": "Name không được để trống",
  }),
  Product: joi.array().empty().messages({
    "string.empty": "Product không được để trống",
    "any.required": "Trường Product là bắt buộc",
  }),
});
