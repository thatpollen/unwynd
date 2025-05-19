import Stripe from "stripe";
import { logger } from "../../common/clients";
import SyncService from "../../sync/sync-service";

export const eventListener = async (event: Stripe.Event) => {
  const { type, data } = event;
  const syncService = new SyncService();

  switch (type) {
    case "charge.succeeded":
      logger.info(`PaymentEvent::${type}`);
      const chargeSucceeded = data.object as Stripe.Charge;
      const customerId = chargeSucceeded.customer;

      if (customerId) {
        await syncService.eventSync(customerId as string, "success");
      }

      break;

    case "charge.failed":
      logger.info(`PaymentEvent::${type}`);
      const chargeFailed = data.object as Stripe.Charge;
      const failedCustomerId = chargeFailed.customer;

      if (failedCustomerId) {
        await syncService.eventSync(failedCustomerId as string, "failed");
      }

      break;

    default:
      console.log(`Unhandled event type ${type}`);
  }
};
