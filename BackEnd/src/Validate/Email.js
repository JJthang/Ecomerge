import joi from "joi";

export const validateEmail = joi.object({
  name: joi.string().required().empty().messages({
    "string.required": "Vui lòng nhập Name",
    "string.empty": "Name không được để trống",
  }),
  email: joi.string().email().required().empty().messages({
    "string.required": "Vui lòng nhập Email",
    "string.empty": "Email không được để trống",
    "string.email": "Email không hợp lệ",
  }),
  text: joi.string().required().empty().messages({
    "string.required": "Vui lòng nhập Text",
    "string.empty": "Text không được để trống",
  }),
});
