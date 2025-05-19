import Stripe from "stripe";
import { logger, StripeClient } from "../../common/clients";
import config from "../../common/configs";
import { NextResponse } from "next/server";
import { eventListener } from "./customer-payment-event-listener";

const handlePaymentEvent = async (req: Request) => {
  logger.info("Handler::Payment-Event::Start");

  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature") || "";

  let event: Stripe.Event;

  try {
    if (!signature || !config.stripeWebhookSecret) {
      console.error("Webhook Error: Missing signature or secret");

      return NextResponse.json(
        { error: "Webhook Error: Missing signature or secret" },
        { status: 400 },
      );
    }
    event = StripeClient.webhooks.constructEvent(
      body,
      signature,
      config.stripeWebhookSecret,
    );

    await eventListener(event);
  } catch (error) {
    logger.error(`Handler::Payment-Event::Error: ${error}`);

    return NextResponse.json(
      {
        error: `Webhook Error: ${error}`,
      },
      { status: 400 },
    );
  }

  logger.info(`Handler::Payment-Event::Body: \n ${JSON.stringify(event)}`);

  // Handle the event
  eventListener(event);

  return NextResponse.json({ received: true });
};

export { handlePaymentEvent };
