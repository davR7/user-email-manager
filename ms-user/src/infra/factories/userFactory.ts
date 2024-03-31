import rabbitMQ from "../rabbitmq";
import { PrismaUserRepo } from "../repositories/PrismaUserRepo";
import { UserService } from "../../services/UserService";
import { UserResource } from "../../resources/UserResource";
import { UserProducer } from "../../producers/UserProducer";
import { Bcrypt } from "../password-hashing/Bcrypt";

export const userFactory = () => {
  const prismaUserRepo = new PrismaUserRepo();
  const userProducer = new UserProducer(rabbitMQ);
  const bcrypt = new Bcrypt();
  const userService = new UserService(prismaUserRepo, userProducer, bcrypt);
  const userResource = new UserResource(userService);
  return userResource;
};
