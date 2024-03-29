import { IUserDTO } from "./IUserDTO";

export class UserResDTO {
  id: string;
  fullname: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: IUserDTO) {
    this.id = user.id;
    this.fullname = user.fullname;
    this.email = user.email;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
