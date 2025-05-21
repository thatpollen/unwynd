"use client";

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { fetchClientSecret } from "@/app/api/actions/stripe";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
if (!publishableKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable"
  );
}

const stripePromise = loadStripe(publishableKey);

// Wrapper to ensure fetchClientSecret always returns a string
const fetchClientSecretWrapper = async () => {
  const secret = await fetchClientSecret();
  if (!secret) {
    throw new Error("Failed to create checkout session");
  }
  return secret;
};

export default function Checkout() {
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret: fetchClientSecretWrapper }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
