import MailClient from "@mailchimp/mailchimp_transactional";
import systemConfig from "../configs";

const transactionMailClient = MailClient(systemConfig.mailchimpApiKey);

export { transactionMailClient };
