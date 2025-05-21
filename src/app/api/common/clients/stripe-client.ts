import stripe from "stripe";
import systemConfig from "../configs";
import { logger } from "./logger";

const config: stripe.StripeConfig = {
  typescript: true,
  stripeAccount: systemConfig.stripeAccountId,
};

logger.info("Stripe-client::Init");

export const StripeClient = new stripe(systemConfig.stripeApiKey, config);
