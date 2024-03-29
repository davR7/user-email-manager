declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: number;
      NODE_ENV: "development" | "production";
      RABBITMQ_ADDRESS: string;
      RABBITMQ_BROKER: string;
      RABBITMQ_QUEUE: string;
      RABBITMQ_ROUTING_KEY: string;
    }
  }
}

export {};
