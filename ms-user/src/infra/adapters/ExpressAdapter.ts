import { ParamsDictionary as Params, Query } from "express-serve-static-core";
import { HttpError } from "../../common/HttpError";
import { IExpressContext, IResquest, IResponse, INextFunction } from "../../common/types";

export type Send<ResBody = any, T = IResponse<ResBody>> = (body?: ResBody) => T;

export class ExpressAdapter<ReqBody, ResBody, ReqParams extends Params, ReqQuery extends Query>
  implements IExpressContext<ReqBody, ResBody, ReqParams, ReqQuery>
{
  constructor(
    private _request: IResquest<ReqBody, ReqParams, ReqQuery>,
    private _response: IResponse<ResBody>,
    private _next: INextFunction
  ) {}

  apiRequest() {
    return this._request;
  }

  apiReqBody() {
    return this.apiRequest().body;
  }

  apiReqParams() {
    return this.apiRequest().params;
  }

  apiResponse() {
    return this._response;
  }

  apiNext(value?: HttpError) {
    return value ? this._next(value) : this._next();
  }

  apiSend(body: any, status?: number) {
    if (status) return this.apiResponse().status(status).json(body);
    return this.apiResponse().json(body);
  }

  apiSendNoContent() {
    return this.apiResponse().sendStatus(204);
  }
}
