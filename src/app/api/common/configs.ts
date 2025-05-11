
const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    logLevel: process.env.LOG_LEVEL || 'info',
    stripeAccountId: process.env.STRIPE_ACCOUNT_ID || 'acct_123456789',
    stripeApiKey: process.env.NODE_ENV === 'production' ? process.env.STRIPE_API_KEY_PROD ||'sk_live_' : process.env.STRIPE_API_KEY_DEV || 'sk_test_',
    stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET || 'whsec_uMq7Y',
};

export default config;
