"use client";

import SubscribeButton from "../buttons/SubscribeButton";
import { useRef, useState } from "react";
import cn from "@/lib/utils/classname";
import { useLocale, useTranslations } from "next-intl";

interface NewsletterSignUpFormProps {
  variant: "footer" | "popover" | "getnotified";
}

export default function NewsletterSignUpForm({
  variant,
}: NewsletterSignUpFormProps) {
  const t = useTranslations("subscribeForm");
  const lang = useLocale();

  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  const subscribeUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputRef.current?.value) {
      setMessage("Please enter an email address.");
      return;
    }

    // const res = await fetch("/api/subscribeUser", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email: inputRef.current.value }),
    // });

    const res = await fetch("/api/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: inputRef.current.value,
        lang: lang,
      }),
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
    <form
      onSubmit={subscribeUser}
      className={cn(
        "flex flex-col gap-1.5",
        variant === "footer"
          ? "footerForm w-auto md:w-[525px]"
          : variant === "popover"
            ? "orderModalForm w-auto"
            : "w-auto",
      )}
    >
      <div className="w-auto relative flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
        <label className="relative w-full inline-flex items-center">
          <input
            className={cn(
              "w-full rounded-full p-4 border border-border-whiteOpacity12 focus:outline-none focus:border-dotted autofill",
              variant === "footer"
                ? "text-white hover:bg-surface-inverted-secondary transition-all duration-100 placeholder:text-text-inverted-tertiary"
                : variant === "popover"
                  ? "text-text-primary bg-surface-tertiary placeholder:text-text-inverted-tertiary"
                  : "bg-surface-primary placeholder:text-text-tertiary",
            )}
            id="email"
            ref={inputRef}
            type="email"
            name="email"
            autoComplete="email"
            placeholder={`${t("input")}`}
            required
          />
        </label>
        <SubscribeButton
          className={cn(
            "relative md:absolute md:right-2.5",
            variant === "footer"
              ? "bg-white hover:bg-brand hover:text-text-inverted-primary"
              : variant === "popover"
                ? "bg-surface-inverted-primary text-text-inverted-primary"
                : "bg-surface-inverted-primary text-text-inverted-primary py-2.5 px-4",
          )}
          type="submit"
          name="subscribe"
        >
          {t("btn")}
        </SubscribeButton>
      </div>
      {message && (
        <p
          className={cn(
            "text-sm mt-2",
            variant === "footer" && "text-text-inverted-primary",
          )}
        >
          {message}
        </p>
      )}
    </form>
  );
}
