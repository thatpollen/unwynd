import HttpError from 'http-errors';
import { logger, StripeClient } from '../common/clients';
import Stripe from 'stripe';

class CustomerAction {
  readonly client;

  constructor() {
    this.client = StripeClient;
  }

  async create({ email, lang }: { email: string; lang: string }) {
    logger.info('Action::Create-Customer::Start');

    try {
      const customer = await StripeClient.customers.create({
        email,
        preferred_locales: [lang],
        metadata: {
          preferred_lang: lang,
          createdBy: 'unwynd_api',
        },
      });

      return customer;
    } catch (error) {
      logger.error(`Action::Create-Customer::Error: ${error}`);

      if (error instanceof StripeClient.errors.StripeError) {
        throw HttpError(error.statusCode || 500, error.message);
      }

      throw HttpError.InternalServerError('An unexpected error occurred!');
    }
  }

  async get(id: string) {
    logger.info('Action::Get-Customer::Start');

    try {
      const customer = await StripeClient.customers.retrieve(id);

      return customer as Stripe.Customer;
    } catch (error) {
      logger.info(`Action::Get-Customer::Error: ${JSON.stringify(error)}`);

      throw HttpError.InternalServerError('Failed to retrieve a customer!');
    }
  }

  async findCustomer(email: string) {
    logger.info('Action::Find-Customer::Start');

    try {
      const customers = await this.client.customers.list({
        email: email,
        limit: 1,
      });
      logger.info(
        `Action::Find-Customer::Customers: ${JSON.stringify(customers)}`,
      );

      return customers.data;
    } catch (error) {
      logger.error(`Action::Find-Customer::Error: ${JSON.stringify(error)}`);

      if (error instanceof StripeClient.errors.StripeError) {
        throw HttpError(error.statusCode || 500, error.message);
      }

      throw HttpError.InternalServerError('Failed to query customers!');
    }
  }

  async getAllCustomers({
    lastId,
    limit = 100,
  }: {
    lastId?: string;
    limit?: number;
  }) {
    logger.info('Action::Get-All-Customers::Start');

    try {
      const customers = await StripeClient.customers.list({
        limit: limit,
        starting_after: lastId,
      });

      return customers;
    } catch (error) {
      logger.error(`Action::Get-All-Customers::Error: ${error}`);

      if (error instanceof StripeClient.errors.StripeError) {
        throw HttpError(error.statusCode || 500, error.message);
      }

      throw HttpError.InternalServerError('An unexpected error occurred!');
    }
  }

  async listCharges({
    lastId,
    from,
    to,
  }: {
    lastId?: string;
    from: number;
    to: number;
  }) {
    // const now = Math.floor(Date.now() / 1000); // Current Unix timestamp in seconds
    // const twentyFourHoursAgo = now - (24 * 60 * 60); // Unix timestamp 24 hours ago

    try {
      const charges = await this.client.charges.list({
        starting_after: lastId,
        created: {
          gte: from,
          lte: to,
        },
        limit: 100, // Adjust limit as needed, or implement pagination
      });

      logger.info(
        `Charges in the last 24 hours:  ${JSON.stringify(charges.data)}`,
      );

      return charges;
    } catch (error) {
      logger.error(`Error listing charges: ${error}`);

      if (error instanceof StripeClient.errors.StripeError) {
        throw HttpError(error.statusCode || 500, error.message);
      }

      throw HttpError.InternalServerError('An unexpected error occurred!');
    }
  }
}

export default CustomerAction;
