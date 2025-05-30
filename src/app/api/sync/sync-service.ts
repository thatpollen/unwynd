// import systemConfig from "../common/configs";
import type Stripe from 'stripe';
import { logger } from '../common/clients';
import { PaymentStatusType } from '../common/types';
import CustomerService from '../customers/customer-service';
import MailService from '../mail/mail-service';

class SyncService {
  readonly mailService: MailService;
  readonly customerService: CustomerService;

  constructor() {
    this.mailService = new MailService();
    this.customerService = new CustomerService();
  }

  async eventSync(customerId: string, eventType: PaymentStatusType) {
    logger.info('EventSync::Start');

    const customer = await this.customerService.getCustomer(
      customerId.toString(),
    );

    if (customer) {
      const email = customer.email;
      const language = customer.preferred_locales?.length
        ? customer.preferred_locales[0]
        : 'en';

      if (email) {
        try {
          await this.mailService.updateContactTags({
            email,
            tags: [language, eventType],
          });
        } catch (err) {
          logger.error(
            `PaymentEvent::${eventType}::Error: ${JSON.stringify(err)}`,
          );
        }
      }
    }
  }

  async getCustomers() {
    logger.info('Sync-Customer::Start');

    const customers: Stripe.Customer[] = [];
    let lastId: string | undefined;

    do {
      const stripeCustomers = await this.customerService.getCustomers({
        limit: 5,
      });
      customers.concat(stripeCustomers.data);

      if (stripeCustomers.has_more) {
        lastId = stripeCustomers.data[stripeCustomers.data.length - 1].id;
      } else {
        lastId = undefined;
      }
    } while (lastId);

    Promise.all(customers);

    return customers;
  }
}

export default SyncService;
