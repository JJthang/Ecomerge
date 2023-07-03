import joi from "joi";

export const CheckValidateCate = joi.object({
  _id: joi.string(),
  Cate_Name: joi.string().required().empty().messages({
    "string.required": "Không được để trống",
    "any.required": "Trường Cate_Name là bắt buộc",
    "string.empty": "Name không được để trống",
  }),
  Product: joi.string().empty().messages({
    "string.empty": "Password không được để trống",
    "any.required": "Trường password là bắt buộc",
  }),
});
