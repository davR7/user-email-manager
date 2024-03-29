import rabbitMQ from "../rabbitmq";
import { PrismaUserRepo } from "../repositories/PrismaUserRepo";
import { UserService } from "../../services/UserService";
import { UserResource } from "../../resources/UserResource";
import { UserProducer } from "../../producers/UserProducer";

export const userFactory = () => {
  const prismaUserRepo = new PrismaUserRepo();
  const userProducer = new UserProducer(rabbitMQ);
  const userService = new UserService(prismaUserRepo, userProducer);
  const userResource = new UserResource(userService);
  return userResource;
};
