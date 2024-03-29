export interface IMessagerBroker {
  sendToQueue(exchangeName: string, exchangeType: string, queue: string, routingKey: string, data: any): void;
}
