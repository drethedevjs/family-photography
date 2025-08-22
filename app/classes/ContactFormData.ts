import type IContactFormData from "@/interfaces/IContactFormData";

export default class ContactFormData implements IContactFormData {
  constructor(
    public firstName: string = "",
    public lastName: string = "",
    public phone: string = "",
    public email: string = "",
    public message: string = "",
    public numOfSubjects = null,
  ) {}

  clear() {
    this.firstName = "";
    this.lastName = "";
    this.phone = "";
    this.email = "";
    this.message = "";
    this.numOfSubjects = null;
  }
}
