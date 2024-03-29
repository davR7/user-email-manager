import { User } from "../domain/User";
import { IUserDTO } from "../dtos/IUserDTO";
import { EmailOrId } from "../infra/repositories/PrismaUserRepo";

export interface IUserRepository {
  insertUser(user: User): Promise<IUserDTO>;
  findAllUsers(): Promise<IUserDTO[]>;
  findOneUser(obj: EmailOrId): Promise<IUserDTO | null>;
}
