import HttpError from "http-errors";
import { logger, StripeClient } from "../common/clients";

class CustomerAction {
  constructor() {}

  async create({ email, lang }: { email: string; lang: string }) {
    logger.info("Action::Create-Customer::Start");

    try {
      const customer = await StripeClient.customers.create({
        email,
        preferred_locales: [lang],
        metadata: {
          preferred_lang: lang,
          createdBy: 'unwynd_api'
        }
      });

      return customer;
    } catch (error) {
      logger.error(`Action::Create-Customer::Error: ${error}`);
      
      if (error instanceof StripeClient.errors.StripeError) {
        throw HttpError(error.statusCode || 500, error.message);
      }

      throw HttpError.InternalServerError("An unexpected error occurred!");
    }
  }

  async getAllCustomers() {
    logger.info("Action::Get-All-Customers::Start");

    try {
      const customers = await StripeClient.customers.list({
        limit: 100,
      });

      return customers;
    } catch (error) {
      logger.error(`Action::Get-All-Customers::Error: ${error}`);
      
      if (error instanceof StripeClient.errors.StripeError) {
        throw HttpError(error.statusCode || 500, error.message);
      }

      throw HttpError.InternalServerError("An unexpected error occurred!");
    }
  }
}

export default CustomerAction;
