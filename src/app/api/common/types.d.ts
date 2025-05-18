export const PaymentStatus = ["succeeded", "failed", "incomplete"] as const;
export type PaymentStatusType = (typeof PaymentStatus)[number];

// Mailchimp
export interface AutomationIDs {
  en: {
    success: string;
    failed: string;
    incomplete: string;
  };
  fr: {
    success: string;
    failed: string;
    incomplete: string;
  };
  de: {
    success: string;
    failed: string;
    incomplete: string;
  };
  it: {
    success: string;
    failed: string;
    incomplete: string;
  };
}
