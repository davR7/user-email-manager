import { createUserMessages } from "./messages";
import Joi from "joi";

export const createUser = Joi.object({
  fullname: Joi.string().required().messages(createUserMessages.fullname),
  email: Joi.string().required().messages(createUserMessages.email),
  password: Joi.string().required().min(5).messages(createUserMessages.password),
});
