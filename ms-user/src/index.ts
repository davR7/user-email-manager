import { App } from "./app";

const port = process.env.APP_PORT;

new App().listenPort(port, () => {
  console.log("Server listening on: " + port);
});
