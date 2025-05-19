import { logger, mailchimpClient } from "../common/clients";
import systemConfig from "../common/configs";
import HttpError from "http-errors";

export interface MailchimpMergeFields {
  firstName?: string;
  lastName?: string;
}

class MailAction {
  readonly mailClient;
  readonly listId: string;
  readonly emailType: "html" | "text";

  constructor() {
    this.mailClient = mailchimpClient;
    this.emailType = "html";
    this.listId = systemConfig.mailchimpAudienceId;
  }

  private generateMailChimpTags(tags: string[]) {
    return tags.map((tag) => ({
      name: tag,
      status: "active" as const,
    }));
  }

  // sendMail(email: string) {}
  //

  async addToAutomationQueue({
    automationId,
    email,
    workflowEmailId,
  }: {
    email: string;
    workflowEmailId: string;
    automationId: string;
  }) {
    logger.info("MailAction::AddToAutomationQueue::Start");

    try {
      //@ts-expect-error - automation types not defined in client.
      await this.mailClient.automations.addWorkflowEmailSubscriber(
        automationId,
        workflowEmailId,
        {
          email_address: email,
        },
      );
    } catch (err) {
      logger.info(
        `MailAction::AddToAutomationQueue::Error: ${JSON.stringify(err)}`,
      );

      throw HttpError.InternalServerError("Failed to add to automation queue!");
    }
  }

  async getAutomationQueueSubscribers({
    automationId,
    workflowEmailId,
  }: {
    automationId: string;
    workflowEmailId: string;
  }) {
    logger.info("MailAction::GetAutomationQueueSubscribers::Start");

    try {
      const res =
        //@ts-expect-error - automation type not defined in client.
        await this.mailClient.automations.getWorkflowEmailSubscriberQueue(
          automationId,
          workflowEmailId,
        );

      return res as {
        workflow_id: string;
        email_id: string;
        queue: {
          id: string;
          email_address: string;
          list_id: string;
          workflow_id: string;
        }[];
        total_items: number;
      };
    } catch (err) {
      logger.error(
        `MailAction::GetAutomationQueueSubscribers::Error: ${JSON.stringify(err)}`,
      );

      throw HttpError.InternalServerError(
        "Failed to get autiomation queue subscribers!",
      );
    }
  }

  /**
   * Remove a subscriber from a specific classic automation workflow. You can remove a subscriber at any point in an automation workflow, regardless of how many emails they've been sent from that workflow. Once they're removed, they can never be added back to the same workflow.
   * @param
   */
  async removeFromAutomationQueue({
    automationId,
    email,
  }: {
    automationId: string;
    email: string;
  }) {
    logger.info("MailAction::RemoveFromAutomationQueue::Start");

    try {
      //@ts-expect-error - automation not defined in client type
      await this.mailClient.automations.removeWorkflowEmailSubscriber(
        automationId,
        { email_address: email },
      );
    } catch (err) {
      logger.info(
        `MailAction::RemoveFromAutomationQueue::Error: ${JSON.stringify(err)}`,
      );

      throw HttpError("Failed to remove mail from atuomation queue!");
    }
  }

  /**
   * Add new contacts to List
   * @param param0
   * @returns
   */
  async addContact({
    email,
    mergeFields,
    tags,
  }: {
    email: string;
    mergeFields?: MailchimpMergeFields;
    tags: string[];
  }) {
    logger.info("MailAction::AddContact::Start");

    const lowerCaseEmail = email.toLowerCase();

    try {
      const res = await this.mailClient.lists.addListMember(
        this.listId,
        {
          email_address: lowerCaseEmail,
          status: "subscribed",
          merge_fields: mergeFields,
          tags: tags,
        },
        {
          skipMergeValidation: true,
        },
      );

      return res;
    } catch (err) {
      logger.info(`MailAction::AddContact::Error: ${JSON.stringify(err)}`);

      throw HttpError.InternalServerError("Failed ot add contact!");
    }
  }

  /**
   * Add batch contacts to List
   * @param tags
   * @param contacts
   * @returns
   */
  async addBatchContacts(tags: string[], contacts: string[]) {
    try {
      const res = await this.mailClient.lists.batchListMembers(this.listId, {
        members: contacts.map((contact) => ({
          email_address: contact,
          email_type: this.emailType,
          tags: tags,
          status: "subscribed",
        })),
        update_existing: true,
      });

      return res;
    } catch (err) {
      logger.error(`MailAction::AddContacts::Error: ${JSON.stringify(err)}`);

      throw HttpError.InternalServerError("Failed ot add contacts!");
    }
  }
}

export default MailAction;
