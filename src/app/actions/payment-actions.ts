"use server";

// import { headers } from "next/headers";
import { StripeClient } from "../api/common/clients";
import systemConfig from "../api/common/configs";

export async function fetchClientSecret(customerId: string) {
  // const origin = (await headers()).get("origin");

  const session = await StripeClient.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        // Provide the exact Price ID (for example, price_1234) of
        // the product you want to sell
        price: systemConfig.productPriceId,
        quantity: 1,
      },
    ],
    currency: "EUR",
    customer: customerId,
    customer_update: {
      name: "auto",
      address: "auto",
      shipping: "auto",
    },
    // consent_collection: {
    //   terms_of_service: "required",
    // },
    mode: "payment",
    redirect_on_completion: "never",
    // return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  return session.client_secret;
}
