import { ParamsDictionary as Params, Query } from "express-serve-static-core";
import { ExpressAdapter } from "../infra/adapters/ExpressAdapter";

class HttpAdapter<ReqBody, ResBody, ReqParams extends Params, ReqQuery extends Query> extends ExpressAdapter<
  ReqBody,
  ResBody,
  ReqParams,
  ReqQuery
> {}

export { HttpAdapter };
