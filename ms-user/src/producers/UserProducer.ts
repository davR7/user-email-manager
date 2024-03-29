import { EmailDTO } from "../dtos/EmailDTO";
import { IUserDTO } from "../dtos/IUserDTO";
import { IUserProducer } from "./IUserProducer";
import { IMessagerBroker } from "../utils/IMessagerBroker";

class UserProducer implements IUserProducer {
  private exchange = process.env.RABBITMQ_BROKER;
  private queue = process.env.RABBITMQ_QUEUE;
  private routingKey = process.env.RABBITMQ_ROUTING_KEY;

  constructor(private messagerBroker: IMessagerBroker) {}

  publishMessageEmail(user: IUserDTO) {
    const emailDto = new EmailDTO();
    emailDto.setUserId(user.id);
    emailDto.setEmailTo(user.email);
    emailDto.setSubject("Cadastro realizado com sucesso!");
    emailDto.setText(
      `${user.fullname}, seja bem vindo(a)! \nAgradecemos o seu cadastro, aproveite agora todos os recursos da nossa plataforma!`
    );
    this.messagerBroker.sendToQueue(this.exchange, "direct", this.queue, this.routingKey, emailDto);
  }
}

export { UserProducer };
