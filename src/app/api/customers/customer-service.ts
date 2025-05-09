import CustomerAction from "./customer-action";

class CustomerService {
  private readonly action: CustomerAction;

  constructor() {
    this.action = new CustomerAction();
  }

  async createCustomer({ email, lang }: { email: string; lang: string }) {
    const customer = await this.action.create({ email, lang });

    return customer;
  }

  async getCustomers() {
    const customers = await this.action.getAllCustomers();

    return customers;
  }
}

export default CustomerService;
