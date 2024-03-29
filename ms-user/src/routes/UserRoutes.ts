import { userFactory } from "../infra/factories/userFactory";
import { IResquest, IResponse, INextFunction } from "../common/types";
import { HttpAdapter } from "../utils/HttpAdapter";
import { Router } from "express";
import { validateData } from "../middlewares/validateData";
import schemas from "../infra/schemas";

class UserRoutes {
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/user",
      validateData(schemas.createUser),
      (req: IResquest, res: IResponse, next: INextFunction) => {
        const adapter = new HttpAdapter(req, res, next);
        return userFactory().handleCreateUser(adapter);
      }
    );
    this.router.get("/user", (req: IResquest, res: IResponse, next: INextFunction) => {
      const adapter = new HttpAdapter(req, res, next);
      return userFactory().handleReadAllUsers(adapter);
    });
    this.router.get("/user/:id", (req: IResquest, res: IResponse, next: INextFunction) => {
      const adapter = new HttpAdapter(req, res, next);
      return userFactory().handleReadOneUser(adapter);
    });
  }
}

export default new UserRoutes().router;
