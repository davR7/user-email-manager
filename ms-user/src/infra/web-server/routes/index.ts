import { Application } from "express";
import UserRoutes from "./UserRoutes";

export class Routes {
  static apiPath = "/api-v1";

  constructor(app: Application) {
    app.use(Routes.apiPath, UserRoutes);
  }
}
