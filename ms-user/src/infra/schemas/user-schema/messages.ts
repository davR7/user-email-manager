export const createUserMessages = {
  fullname: {
    "any.required": "The fullname property is required",
    "string.base": "Invalid type, fullname must be a string",
    "string.empty": "Please enter you fullname",
  },
  email: {
    "any.required": "The email property is required",
    "string.base": "Invalid type, email must be a string",
    "string.empty": "Please enter you email",
  },
  password: {
    "any.required": "The password property is required",
    "string.base": "Invalid type, password must be a string",
    "string.empty": "Please enter you password",
    "string.min": "Password must be at most {#limit} character long",
  },
};
