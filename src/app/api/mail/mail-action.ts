import { logger, mailchimpClient } from '../common/clients';
import systemConfig from '../common/configs';
import HttpError from 'http-errors';
import { getMd5Hash } from '../common/utils';
import type { lists } from '@mailchimp/mailchimp_marketing';

export interface MailchimpMergeFields {
  firstName?: string;
  lastName?: string;
}

class MailAction {
  readonly mailClient;
  readonly listId: string;
  readonly emailType: 'html' | 'text';

  constructor() {
    this.mailClient = mailchimpClient;
    this.emailType = 'html';
    this.listId = systemConfig.mailchimpAudienceId;
  }

  private generateMailChimpTags(tags: string[]) {
    return tags.map((tag) => ({
      name: tag,
      status: 'active' as const,
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
    logger.info('MailAction::AddToAutomationQueue::Start');

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

      throw HttpError.InternalServerError('Failed to add to automation queue!');
    }
  }

  async getAutomationQueueSubscribers({
    automationId,
    workflowEmailId,
  }: {
    automationId: string;
    workflowEmailId: string;
  }) {
    logger.info('MailAction::GetAutomationQueueSubscribers::Start');

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
        'Failed to get autiomation queue subscribers!',
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
    logger.info('MailAction::RemoveFromAutomationQueue::Start');

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

      throw HttpError('Failed to remove mail from atuomation queue!');
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
    language,
  }: {
    email: string;
    mergeFields?: MailchimpMergeFields;
    tags: string[];
    language?: string;
  }) {
    logger.info('MailAction::AddContact::Start');

    const lowerCaseEmail = email.toLowerCase();

    try {
      const res = await this.mailClient.lists.addListMember(
        this.listId,
        {
          email_address: lowerCaseEmail,
          status: 'subscribed',
          merge_fields: mergeFields,
          tags: tags,
          language: language,
        },
        {
          skipMergeValidation: true,
        },
      );

      return res;
    } catch (err) {
      logger.info(`MailAction::AddContact::Error: ${JSON.stringify(err)}`);

      throw HttpError.InternalServerError('Failed ot add contact!');
    }
  }

  async createOrUpdate({
    email,
    language,
  }: {
    email: string;
    language: string;
  }) {
    logger.info('MailAction::CreateOrUpdate::Start');

    const subscriberHash = getMd5Hash(email);

    try {
      const contact = await this.mailClient.lists.setListMember(
        this.listId,
        subscriberHash,
        {
          email_address: email,
          status: 'subscribed',
          status_if_new: 'subscribed',
          language: language,
        },
        {
          skipMergeValidation: true,
        },
      );

      return contact as lists.MembersSuccessResponse;
    } catch (error) {
      logger.info(
        `MailAction::CreateOrUpdate::Error: ${JSON.stringify(error)}`,
      );

      throw HttpError.InternalServerError('Failed ot update contact!');
    }
  }

  /**
   * Update a existing contact
   * @param {object} param
   * @param {string} param.email - Email address of the contact
   * @param {string[]} param.tags - Tags to update to the contact
   */
  async updateTags({ email, tags }: { email: string; tags: string[] }) {
    logger.info('MailAction::Update-Tags::Start');

    const hashedMail = getMd5Hash(email);

    try {
      const existingTags = (await this.mailClient.lists.getListMemberTags(
        this.listId,
        hashedMail,
      )) as lists.ListMemberTagsResponse;
      const updatedTags = existingTags.tags.map((tag) => ({
        name: tag.name,
        status: tags.includes(tag.name) ? 'active' : 'inactive',
      }));

      const updatedContact = await this.mailClient.lists.updateListMemberTags(
        this.listId,
        hashedMail,
        {
          tags: [
            ...updatedTags,
            ...tags.map((tag) => ({
              name: tag,
              status: 'active',
            })),
          ],
        },
      );

      return updatedContact;
    } catch (error) {
      logger.error(
        `MailAction::UpdateContact::Error: ${JSON.stringify(error)}`,
      );

      throw HttpError.InternalServerError('Failed ot update contact!');
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
          status: 'subscribed',
        })),
        update_existing: true,
        sync_tags: true,
      });

      return res;
    } catch (err) {
      logger.error(`MailAction::AddContacts::Error: ${JSON.stringify(err)}`);

      throw HttpError.InternalServerError('Failed ot add contacts!');
    }
  }
}

export default MailAction;
