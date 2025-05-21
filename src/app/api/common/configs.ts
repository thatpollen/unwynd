import { AutomationIDs } from "./types";

const automationIds: AutomationIDs = {
  en: {
    success: process.env.MAILCHIMP_EN_SUCCESS_AUTOMATION_ID!,
    failed: process.env.MAILCHIMP_EN_FAILED_AUTOMATION_ID!,
    incomplete: process.env.MAILCHIMP_EN_INCOMPLETE_AUTOMATION_ID!,
  },
  fr: {
    success: process.env.MAILCHIMP_FR_SUCCESS_AUTOMATION_ID!,
    failed: process.env.MAILCHIMP_FR_FAILED_AUTOMATION_ID!,
    incomplete: process.env.MAILCHIMP_FR_INCOMPLETE_AUTOMATION_ID!,
  },
  de: {
    success: process.env.MAILCHIMP_DE_SUCCESS_AUTOMATION_ID!,
    failed: process.env.MAILCHIMP_DE_FAILED_AUTOMATION_ID!,
    incomplete: process.env.MAILCHIMP_DE_INCOMPLETE_AUTOMATION_ID!,
  },
  it: {
    success: process.env.MAILCHIMP_IT_SUCCESS_AUTOMATION_ID!,
    failed: process.env.MAILCHIMP_IT_FAILED_AUTOMATION_ID!,
    incomplete: process.env.MAILCHIMP_IT_INCOMPLETE_AUTOMATION_ID!,
  },
};

const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  logLevel: process.env.LOG_LEVEL || "info",
  stripeAccountId: process.env.STRIPE_ACCOUNT_ID || "acct_123456789",
  stripeApiKey:
    process.env.NODE_ENV === "production"
      ? process.env.STRIPE_API_KEY_PROD || "sk_live_"
      : process.env.STRIPE_API_KEY_DEV || "sk_test_",
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET || "whsec_uMq7Y",
  mailchimpApiKey: process.env.MAILCHIMP_API_KEY || "",
  mailchimpServerPrefix: process.env.MAILCHIMP_SERVER_PREFIX || "",
  mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID || "",
  // product
  productPriceId: process.env.PRODUCT_PRICE_ID!,
  automationIds,
};

export default config;
