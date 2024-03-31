import bcrypt from "bcrypt";
import { IPassHashing } from "../../utils/IPassHashing";

class Bcrypt implements IPassHashing {
  constructor() {}

  async hash(password: string) {
    return await bcrypt.hash(password, 10);
  }

  async compare(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}

export { Bcrypt };
