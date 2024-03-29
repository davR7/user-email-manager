import { HttpError } from "../../common/HttpError";
import { INextFunction, IResponse, IResquest } from "../../common/types";
import { HttpAdapter } from "../../utils/HttpAdapter";

class GlobalExceptionHandler {
  constructor() {}

  handleResourceNotFound(req: IResquest, res: IResponse, next: INextFunction) {
    const error = new HttpError("Route Not Found", 404);
    const adapter = new HttpAdapter(req, res, next);
    adapter.apiNext(error);
  }

  handleCatchAll(error: HttpError, req: IResquest, res: IResponse, next: INextFunction) {
    const adapter = new HttpAdapter(req, res, next);
    const message = process.env.NODE_ENV !== "production" ? error.message : "Internal Server Error";
    adapter.apiSend({ error: message }, error.statusCode || 500);
  }
}

export default new GlobalExceptionHandler();
