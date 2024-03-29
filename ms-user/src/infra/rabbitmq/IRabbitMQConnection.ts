import { Channel, Connection } from "amqplib";

export interface IRabbitMQConnection {
  connection: Connection;
  channel: Channel;
  connected: boolean;
  createChannel(): Promise<void>;
}
