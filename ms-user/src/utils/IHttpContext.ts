import { ParamsDictionary as Params, Query } from "express-serve-static-core";
import { IExpressContext } from "../common/types";

export interface IHttpContext<
  ReqBody = any,
  ResBody = any,
  ReqParams extends Params = any,
  ReqQuery extends Query = any,
> extends IExpressContext<ReqBody, ResBody, ReqParams, ReqQuery> {}
