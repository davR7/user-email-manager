import ValidateSchema from "../../utils/ValidateSchema";
import { Schema, ValidationError } from "joi";
import { IResponse, IResquest, INextFunction } from "../../common/types";
import { HttpAdapter } from "../../utils/HttpAdapter";

export const validateData = (schema: Schema) => {
  return async (req: IResquest, res: IResponse, next: INextFunction) => {
    const adapter = new HttpAdapter(req, res, next);
    const body = adapter.apiReqBody();

    try {
      await ValidateSchema.exec(schema, body);
    } catch (err: unknown) {
      if (err instanceof ValidationError) {
        return adapter.apiSend({ error: err.details[0].message }, 400);
      }
    }

    return adapter.apiNext();
  };
};
