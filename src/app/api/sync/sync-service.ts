// import systemConfig from "../common/configs";
import MailService from "../mail/mail-service";
import CustomerService from "../customers/customer-service";
import { logger } from "../common/clients";
import { PaymentStatusType } from "../common/types";

class SyncService {
  readonly mailService: MailService;
  readonly customerService: CustomerService;

  constructor() {
    this.mailService = new MailService();
    this.customerService = new CustomerService();
  }

  async eventSync(customerId: string, eventType: PaymentStatusType) {
    logger.info("EventSync::Start");

    const customer = await this.customerService.getCustomer(
      customerId.toString(),
    );
    if (customer) {
      const email = customer.email;
      const language = customer.preferred_locales?.length
        ? customer.preferred_locales[0]
        : "en";
      // const automationId = systemConfig.automationIds[language].success;

      if (email) {
        try {
          const contact = await this.mailService.addContact({
            email,
            tags: [language, eventType],
          });

          logger.info(`EventSync::Contact:: ${JSON.stringify(contact.status)}`);

          // await this.mailService.addAutomationContact(
          //   email,
          //   automationId,
          //   workflowEmailId,
          // );
        } catch (err) {
          logger.error(
            `PaymentEvent::${eventType}::Error: ${JSON.stringify(err)}`,
          );
        }
      }
    }
  }
}

export default SyncService;
