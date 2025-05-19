import MailAction from "./mail-action";

class MailService {
  readonly action: MailAction;

  constructor() {
    this.action = new MailAction();
  }

  /**
   * Adds a new contact to a Mailchimp Audience/List
   * @param param {Object} contact - Contact data
   * @param {string} contact.email - Contact email
   * @param {Array<string>} contact.tags - Contact tags
   * @param {string} contact.firstName - Contact first name
   * @param {string} contact.lastName - Contact last name
   */
  async addContact({
    email,
    tags,
    firstName,
    lastName,
  }: {
    email: string;
    tags: string[];
    firstName: string;
    lastName: string;
  }) {
    const mergeFields = { firstName, lastName };
    const member = this.action.addContact({ email, mergeFields, tags });

    return member;
  }

  /**
   * Add batch contacts to a Mailchimp Audience/List
   * @param param {Object} data - Contacts
   * @param {Array<string>} data.contacts - Contact List
   * @param {Array<string>} data.tags - Contact tags
   */
  async addBatchContacts({
    contacts,
    tags,
  }: {
    tags: string[];
    contacts: string[];
  }) {
    const res = await this.action.addBatchContacts(tags, contacts);

    return res;
  }
}

export default MailService;
