export const PaymentStatus = ["success", "failed", "incomplete"] as const;
export type PaymentStatusType = (typeof PaymentStatus)[number];

// Mailchimp
export interface AutomationIDs {
  [languageCode: string]: {
    success: string;
    failed: string;
    incomplete: string;
  };
}
