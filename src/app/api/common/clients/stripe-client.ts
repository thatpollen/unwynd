import stripe from 'stripe';
import systemConfig from '../configs';

const config: stripe.StripeConfig = {
  typescript: true,
  stripeAccount: systemConfig.stripeAccountId,
};

const StripeClient = new stripe(systemConfig.stripeDevApiKey, config);

export default StripeClient;
