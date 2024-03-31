import { User } from "../domain/User";
import { IUserRepository } from "../repositories/IUserRepository";
import { HttpError } from "../common/HttpError";
import { UserResDTO } from "../dtos/UserResDTO";
import { IUserResBodyDTO } from "../dtos/IUserResBodyDTO";
import { IUserProducer } from "../producers/IUserProducer";
import { IPassHashing } from "../utils/IPassHashing";

export class UserService {
  constructor(
    private userRepo: IUserRepository,
    private userProd: IUserProducer,
    private passHashing: IPassHashing
  ) {}

  async createUser({ fullname, email, password }: User): Promise<IUserResBodyDTO> {
    if (await this.userRepo.findOneUser({ email })) {
      throw new HttpError("User already exists", 400);
    }
    const hash = await this.passHashing.hash(password);
    const user = await this.userRepo.insertUser(new User(fullname, email, hash));
    await this.userProd.publishMessageEmail(user);
    return new UserResDTO(user);
  }

  async readAllUsers(): Promise<IUserResBodyDTO[]> {
    const users = await this.userRepo.findAllUsers();
    return users.map(user => new UserResDTO(user));
  }

  async readOneUser(id: string): Promise<IUserResBodyDTO> {
    const user = await this.userRepo.findOneUser({ id });
    if (!user) {
      throw new HttpError("User not found", 404);
    }
    return new UserResDTO(user);
  }
}
