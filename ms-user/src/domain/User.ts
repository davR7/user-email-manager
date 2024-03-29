export class User {
  private _fullname: string;
  private _email: string;
  private _password: string;
  private _id?: string;

  constructor(fullname: string, email: string, password: string, id?: string) {
    this._fullname = fullname;
    this._email = email;
    this._password = password;
    this._id = id;
  }

  get id(): string | void {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get fullname(): string {
    return this._fullname;
  }

  set fullname(fullname: string) {
    this._fullname = fullname;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }
}
