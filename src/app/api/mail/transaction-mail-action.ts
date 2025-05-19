import { logger, transactionMailClient } from "../common/clients";

class TransactionMailAction {
  readonly mailClient;

  constructor() {
    this.mailClient = transactionMailClient;
  }

  async sendWelcomeMail(to: string) {
    logger.info("TransactionMailAction::SendWelcomeMail::Start");

    try {
      const message = {
        subject: "Welcome ",
        from_email: "no-reply@unwynd.com",
        from_name: "Jhon Doe",
        to: [
          {
            email: to,
          },
        ],
        html: "Html content",
        text: "Optional text content",
      };

      const res = await this.mailClient.messages.send({ message });

      return res;
    } catch (err) {
      logger.error(
        `TransactionMailAction::SendWelcomeMail::Error: ${JSON.stringify(err)}`,
      );
    }
  }
}

export default TransactionMailAction;
