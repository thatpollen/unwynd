import MailChimp from "@mailchimp/mailchimp_marketing";
import systemConfig from "../configs";

const mailchimpClient = MailChimp;
const mailchimpConfig: MailChimp.Config = {
  apiKey: systemConfig.mailchimpApiKey,
  server: systemConfig.mailchimpServerPrefix,
};

mailchimpClient.setConfig(mailchimpConfig);

export { mailchimpClient };
