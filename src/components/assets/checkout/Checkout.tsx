"use client";

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { fetchClientSecret } from "@/app/actions/payment-actions";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable",
  );
}

const stripePromise = loadStripe(publishableKey);

interface CheckoutProps {
  customerId: string;
}

// Wrapper to ensure fetchClientSecret always returns a string
const fetchClientSecretWrapper = (customerId: string) => async () => {
  console.log("Checkout Component:: CustomerId: ", customerId);
  const secret = await fetchClientSecret(customerId);
  if (!secret) {
    throw new Error("Failed to create checkout session");
  }
  return secret;
};

export default function Checkout({ customerId }: CheckoutProps) {
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret: fetchClientSecretWrapper(customerId) }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
