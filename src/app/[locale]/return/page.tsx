import { redirect } from "next/navigation";

import { stripe } from "@/lib/stripe";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Return({ searchParams }: PageProps) {
  const session_id = searchParams.session_id as string;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (session.status === "open") {
    return redirect("/");
  }

  if (session.status === "complete") {
    const customerEmail = session.customer_details?.email;

    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail || "your email"}. If you have any questions, please
          email{" "}
        </p>
        <a href="mailto:orders@example.com">orders@example.com</a>.
      </section>
    );
  }
}
