export class EmailDTO {
  constructor(
    private userId: string = "",
    private emailTo: string = "",
    private subject: string = "",
    private text: string = ""
  ) {}

  getUserId() {
    return this.userId;
  }

  setUserId(userId: string) {
    this.userId = userId;
  }

  getEmailTo() {
    return this.emailTo;
  }

  setEmailTo(emailTo: string) {
    this.emailTo = emailTo;
  }

  getSubject() {
    return this.subject;
  }

  setSubject(subject: string) {
    this.subject = subject;
  }

  getText() {
    return this.text;
  }

  setText(text: string) {
    this.text = text;
  }
}
