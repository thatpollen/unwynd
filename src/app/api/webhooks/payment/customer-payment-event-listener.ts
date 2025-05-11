import Stripe from "stripe";
import { logger } from "../../common/clients";

export const eventListener = async (event: Stripe.Event) => {
  const { type, data } = event;

  switch (type) {
    case "payment_intent.succeeded":
      let paymentIntent = data.object as Stripe.PaymentIntent;
      logger.info(`PaymentIntent: ${JSON.stringify(paymentIntent)}`);
      break;
    case "payment_intent.payment_failed":
      paymentIntent = data.object as Stripe.PaymentIntent;
      logger.info(`PaymentIntent: ${JSON.stringify(paymentIntent)}`);
      console.log("PaymentIntent failed.");
      break;
    case "payment_method.attached":
      console.log("PaymentMethod was attached to a Customer!");
      break;
    default:
      console.log(`Unhandled event type ${type}`);
  }
}
