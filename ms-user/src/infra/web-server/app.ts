import "../config/dotenv";
import "express-async-errors";
import cors from "cors";
import helmet from "helmet";
import { Routes } from "./routes";
import GlobalExceptionHandler from "../../resources/exceptions/GlobalHandlerExceptions";
import { IApp, IExpressUtils } from "../../common/types";

class App {
  static amountInst = 0;

  constructor(
    private app: IApp,
    private exUtils: IExpressUtils
  ) {
    App.amountInst++;
    if (App.amountInst > 1) {
      throw new Error("Only one instance of the App class is allowed.");
    }

    this.setupLoaders();
    this.setupRoutes();
    this.setupMiddlewares();
  }

  private setupLoaders() {
    this.app.use(this.exUtils.json());
    this.app.use(this.exUtils.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(helmet());
  }

  private setupRoutes() {
    new Routes(this.app);
  }

  private setupMiddlewares() {
    this.app.use(GlobalExceptionHandler.handleResourceNotFound);
    this.app.use(GlobalExceptionHandler.handleCatchAll);
  }

  listenPort(port: number, callback: () => void) {
    this.app.listen(port, callback);
  }
}

export { App };
