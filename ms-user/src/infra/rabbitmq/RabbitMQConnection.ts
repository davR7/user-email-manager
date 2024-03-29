import client, { Connection, Channel } from "amqplib";
import { IRabbitMQConnection } from "./IRabbitMQConnection";

export class RabbitMQConnection implements IRabbitMQConnection {
  private _connection!: Connection;
  private _channel!: Channel;
  private _conected!: boolean;

  get connection() {
    return this._connection;
  }

  get channel() {
    return this._channel;
  }

  get connected() {
    return this._conected;
  }

  async createChannel() {
    try {
      this._connection = await client.connect(process.env.RABBITMQ_ADDRESS);
      this._channel = await this._connection.createChannel();
      this._conected = true;
    } catch (err) {
      this._conected = false;
    }
  }
}
