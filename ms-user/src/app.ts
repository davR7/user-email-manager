import "./infra/config/dotenv";
import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { Routes } from "./routes";
import GlobalExceptionHandler from "./resources/exceptions/GlobalHandlerExceptions";

class App {
  private app: Application = express();
  static amountInst = 0;

  constructor() {
    App.amountInst++;
    if (App.amountInst > 1) {
      throw new Error("Only one instance of the App class is allowed.");
    }

    this.setupLoaders();
    this.setupRoutes();
    this.setupMiddlewares();
  }

  private setupLoaders() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
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
