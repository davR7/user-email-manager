import { IUserDTO } from "../dtos/IUserDTO";

export interface IUserProducer {
  publishMessageEmail(user: IUserDTO): void;
}
