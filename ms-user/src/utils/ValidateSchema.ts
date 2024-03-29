import { Schema } from "joi";

class ValidateSchema {
  async exec(schema: Schema, body: any) {
    return await schema.validateAsync(body);
  }
}

export default new ValidateSchema();
