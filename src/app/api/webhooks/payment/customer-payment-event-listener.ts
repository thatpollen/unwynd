import Stripe from "stripe";
import { logger } from "../../common/clients";
import SyncService from "../../sync/sync-service";

export const eventListener = async (event: Stripe.Event) => {
  const { type, data } = event;
  const syncService = new SyncService();

  switch (type) {
    case "checkout.session.completed":
      logger.info(`PaymentEvent::${type}`);
      break;

    case "checkout.session.async_payment_succeeded":
      logger.info(`PaymentEvent::${type}`);
      const paymentSuccessData = data.object as Stripe.Checkout.Session;

      if (paymentSuccessData.customer) {
        await syncService.eventSync(
          paymentSuccessData.customer as string,
          "success",
        );
      }

      break;
    case "checkout.session.async_payment_failed":
      logger.info(`PaymentEvent::${type}`);
      const paymentFailedData = data.object as Stripe.Checkout.Session;

      if (paymentFailedData.customer) {
        await syncService.eventSync(
          paymentFailedData.customer as string,
          "failed",
        );
      }

      break;
    case "payment_intent.succeeded":
      logger.info(`PaymentEvent::${type}`);
      const chargeSucceeded = data.object as Stripe.PaymentIntent;
      const customerId = chargeSucceeded.customer;

      if (customerId) {
        await syncService.eventSync(customerId as string, "success");
      }

      break;

    case "payment_intent.payment_failed":
      logger.info(`PaymentEvent::${type}`);
      const chargeFailed = data.object as Stripe.PaymentIntent;
      const failedCustomerId = chargeFailed.customer;

      if (failedCustomerId) {
        await syncService.eventSync(failedCustomerId as string, "failed");
      }

      break;

    // case "payment_intent.canceled":
    //   logger.info(`PaymentEvent::${type}`);
    //   const chargeCanceled = data.object as Stripe.PaymentIntent;
    //   const canceledCustomerId = chargeCanceled.customer;

    //   if (canceledCustomerId) {
    //     await syncService.eventSync(canceledCustomerId as string, "incomplete");
    //   }

    //   break;

    default:
      console.log(`Unhandled event type ${type}`);
  }
};
