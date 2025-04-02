
'use client';
import SubscribeButton from "./buttons/SubscribeButton";
import { useRef, useState } from "react";
import  cn  from "@/lib/utils/classname";

interface NewsletterSignUpFormProps {
      variant: "footer" | "modal";
}

export default function NewsletterSignUpForm({variant}: NewsletterSignUpFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  const subscribeUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputRef.current?.value) {
      setMessage("Please enter an email address.");
      return;
    }

    const res = await fetch("/api/subscribeUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: inputRef.current.value }),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error || "Something went wrong");
    } else {
      setMessage("Subscribed successfully!");
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={subscribeUser} className={cn("flex flex-col gap-1.5", variant === "footer" ? "footerForm w-auto md:w-[525px]" : "orderModalForm w-auto")}>
      <div className="w-auto relative flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
<label className="relative w-full inline-flex items-center">
        <input
          className={cn("w-full placeholder:text-text-secondary rounded-full p-4 border border-border-whiteOpacity12 focus:outline-none focus:border-dotted autofill", variant=== "footer" ? "text-white hover:bg-surface-inverted-secondary transition-all duration-100" : "text-text-primary bg-surface-tertiary")}
          id="email"
          ref={inputRef}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Enter your email" 
          required
        />
      </label>
      <SubscribeButton
        className={cn("relative md:absolute md:right-2.5", variant === "footer" ? "bg-white hover:bg-brand hover:text-text-inverted-primary" : "bg-surface-inverted-primary text-text-inverted-primary")}
        type="submit"
        name="subscribe"
      >
        Subscribe
      </SubscribeButton>
      
      </div>
      {message && <p className={cn("text-sm mt-2", variant === "footer" && "text-text-inverted-primary")}>{message}</p>}
    </form>
  );
}
