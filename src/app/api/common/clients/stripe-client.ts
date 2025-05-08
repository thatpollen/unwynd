import stripe from 'stripe';
import systemConfig from '../configs';

const config: stripe.StripeConfig = {
  typescript: true,
  stripeAccount: systemConfig.stripeAccountId,
};

export const StripeClient = new stripe(systemConfig.stripeApiKey, config);
