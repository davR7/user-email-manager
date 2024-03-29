import { IRabbitMQConnection } from "./IRabbitMQConnection";
import { IMessagerBroker } from "../../utils/IMessagerBroker";

export class RabbitMQManager implements IMessagerBroker {
  constructor(private rabbitMQ: IRabbitMQConnection) {}

  private async initRabbitMQ() {
    await this.rabbitMQ.createChannel();
  }

  private async startListeningToNewMessages(
    exchangeName: string,
    exchangeType: string,
    queue: string,
    routingKey: string
  ) {
    try {
      await this.rabbitMQ.channel.assertExchange(exchangeName, exchangeType, { durable: true });
      await this.rabbitMQ.channel.assertQueue(queue, { durable: true });
      await this.rabbitMQ.channel.bindQueue(queue, exchangeName, routingKey);
    } catch (err) {
      console.log(err);
    }
  }

  async sendToQueue(exchangeName: string, exchangeType: string, queue: string, routingKey: string, data: any) {
    try {
      await this.initRabbitMQ();
      await this.startListeningToNewMessages(exchangeName, exchangeType, queue, routingKey);
      await this.rabbitMQ.channel.publish(exchangeName, routingKey, Buffer.from(JSON.stringify(data)));
      setTimeout(() => this.rabbitMQClose, 500);
    } catch (err) {
      console.log(err);
    }
  }

  private rabbitMQClose(): void {
    this.rabbitMQ.connection.close();
  }
}
