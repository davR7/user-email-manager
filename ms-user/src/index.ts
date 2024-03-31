import { App } from "./infra/web-server/app";
import express from "express";

const app = express();
const port = process.env.APP_PORT;

new App(app, express).listenPort(port, () => {
  console.log("Server listening on: " + port);
});
