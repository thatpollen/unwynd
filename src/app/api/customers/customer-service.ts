import MailAction from "../mail/mail-action";
import CustomerAction from "./customer-action";

class CustomerService {
  private readonly action: CustomerAction;
  private readonly mailAction: MailAction;

  constructor() {
    this.action = new CustomerAction();
    this.mailAction = new MailAction();
  }

  async createCustomer({ email, lang }: { email: string; lang: string }) {
    const existingCustomers = await this.action.findCustomer(email);

    if (existingCustomers.length > 0) {
      return existingCustomers[0];
    }

    const customer = await this.action.create({ email, lang });
    await this.mailAction.addContact({ email, tags: [lang, "incomplete"] });

    return customer;
  }

  async getCustomer(id: string) {
    return this.action.get(id);
  }

  async getCustomers() {
    const customers = await this.action.getAllCustomers();

    return customers;
  }
}

export default CustomerService;
