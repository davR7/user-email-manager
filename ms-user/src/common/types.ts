import { HttpError } from "./HttpError";
import { Application, Request, Response, NextFunction } from "express";
import { ParamsDictionary as Params, Query, Send } from "express-serve-static-core";

export interface IApp extends Application {}

export interface IRequestBody<T> extends Request {
  body: T;
}

export interface IRequestParams<T extends Params> extends Request {
  params: T;
}

export interface IRequestQuery<T extends Query> extends Request {
  query: T;
}

export interface IResquest<ReqBody = any, ReqParams extends Params = any, ReqQuery extends Query = any>
  extends Request {
  body: ReqBody;
  params: ReqParams;
  query: ReqQuery;
}

export interface IResponse<ResBody = any> extends Response {
  json: Send<ResBody, this>;
}

export interface INextFunction extends NextFunction {}

export interface IExpressContext<
  ReqBody = any,
  ResBody = any,
  ReqParams extends Params = any,
  ReqQuery extends Query = any,
> {
  apiRequest(): IResquest<ReqBody, ReqParams, ReqQuery>;
  apiReqBody(): ReqBody;
  apiReqParams(): ReqParams;
  apiResponse(): IResponse<ResBody>;
  apiNext(value?: HttpError): HttpError | void;
  apiSend(body?: ResBody, status?: number): IResponse<ResBody>;
}
