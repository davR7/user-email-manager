import { prisma } from "../database/prisma";
import { User } from "../../domain/User";
import { IUserRepository } from "../../repositories/IUserRepository";

export type EmailOrId =
  | {
      email: string;
    }
  | {
      id: string;
    };

export class PrismaUserRepo implements IUserRepository {
  async insertUser(user: User) {
    const { fullname, email, password } = user;
    return await prisma.user.create({ data: { fullname, email, password } });
  }

  async findAllUsers() {
    return await prisma.user.findMany();
  }

  async findOneUser(obj: EmailOrId) {
    return await prisma.user.findUnique({ where: obj });
  }
}
