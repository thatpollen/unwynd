import Stripe from 'stripe';
import MailAction from '../mail/mail-action';
import CustomerAction from './customer-action';

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
    await this.mailAction.addContact({ email, tags: [lang, 'incomplete'] });

    return customer;
  }

  async getCustomer(id: string) {
    return this.action.get(id);
  }

  async getCustomers({ lastId, limit }: { lastId?: string; limit?: number }) {
    const customers = await this.action.getAllCustomers({ lastId, limit });

    return customers;
  }

  async listCharges() {
    let lastId;
    const chargeList: Stripe.Charge[] = [];
    const now = Math.floor(Date.now() / 1000); // Current Unix timestamp in seconds
    const twentyFourHoursAgo = now - 24 * 60 * 60; // Unix timestamp 24 hours ago

    do {
      const charges = await this.action.listCharges({
        lastId,
        from: twentyFourHoursAgo,
        to: now,
      });

      chargeList.concat(charges.data);

      if (charges.has_more) {
        lastId = charges.data[charges.data.length - 1].id;
      }
    } while (lastId);

    return chargeList;
  }
}

export default CustomerService;
