import Joi from "joi";

export const ValiCHeckOut = Joi.object({
  _id: Joi.string(),
  name: Joi.string().required(),
  id_user: Joi.string().required(),
  email: Joi.email().required(),
  number: Joi.string().required(),
  payment_method: Joi.string().required(),
  status: Joi.string(),
  List_Product: Joi.object().empty().messages({
    "string.required": "id_User không được để trống",
    "any.required": "Trường Product là bắt buộc",
  }),
});
