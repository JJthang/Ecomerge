import Joi from "joi";

export const ValidateCart = Joi.object({
  _id: Joi.string(),
  id_user: Joi.string(),
  List_Product: Joi.object().empty().messages({
    "string.required": "id_User không được để trống",
    "any.required": "Trường Product là bắt buộc",
  }),
});
