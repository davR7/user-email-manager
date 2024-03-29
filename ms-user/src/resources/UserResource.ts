import { User } from "../domain/User";
import { UserService } from "../services/UserService";
import { IHttpContext } from "../utils/IHttpContext";
import { IUserReqBodyDTO } from "../dtos/IUserReqBodyDTO";
import { IUserResBodyDTO } from "../dtos/IUserResBodyDTO";

export class UserResource {
  constructor(private userServ: UserService) {}

  async handleCreateUser(ctx: IHttpContext<IUserReqBodyDTO, IUserResBodyDTO>) {
    const { fullname, email, password } = ctx.apiReqBody();
    const user = await this.userServ.createUser(new User(fullname, email, password));
    return ctx.apiSend(user, 201);
  }

  async handleReadAllUsers(ctx: IHttpContext<any, IUserResBodyDTO[]>) {
    const users = await this.userServ.readAllUsers();
    return ctx.apiSend(users);
  }

  async handleReadOneUser(ctx: IHttpContext<any, IUserResBodyDTO, { id: string }>) {
    const userId = ctx.apiReqParams().id;
    const user = await this.userServ.readOneUser(userId);
    return ctx.apiSend(user);
  }
}
