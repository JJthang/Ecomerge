import joi from "joi";

export const CheckValidateSignUp = joi.object({
  Name_user: joi.string().required().empty().messages({
    "string.empty": "Email không được để trống",
  }),
  User_email: joi.string().email().required().empty().messages({
    "string.email": "Email không hợp lệ",
    "string.required": "Trường Email là bắt buộc",
    "string.empty": "Email không được để trống",
  }),
  User_password: joi.string().required().min(4).empty().messages({
    "string.empty": "Password không được để trống",
    "any.required": "Trường password là bắt buộc",
    "string.min": "Password phải có ít nhất 5 ký tự",
  }),
  confirmPassword: joi
    .string()
    .valid(joi.ref("User_password"))
    .required()
    .empty()
    .messages({
      "string.empty": 'Trường "xác nhận mật khẩu" không được để trống',
      "any.required": "Trường xác nhận mật khẩu là bắt buộc",
      "any.only": 'Trường "xác nhận mật khẩu" không khớp',
    }),
});
export const CheckValidateSignIn = joi.object({
  User_email: joi.string().email().required().empty().messages({
    "string.email": "Email không hợp lệ",
    "string.required": "Trường Email là bắt buộc",
    "string.empty": "Email không được để trống",
  }),
  User_password: joi.string().required().min(4).empty().messages({
    "string.empty": "Password không được để trống",
    "any.required": "Trường password là bắt buộc",
    "string.min": "Password phải có ít nhất 5 ký tự",
  }),
});
