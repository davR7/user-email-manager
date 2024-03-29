import { RabbitMQConnection } from "./RabbitMQConnection";
import { RabbitMQManager } from "./RabbitMQManager";

const connection = new RabbitMQConnection();
export default new RabbitMQManager(connection);
