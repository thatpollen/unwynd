"use client";

import NewsletterPopup from "../Modal/NewsletterPopup";
import { useState } from "react";
import cn from "@/lib/utils/classname";
import SubscribeButton from "../buttons/SubscribeButton";
import { useLocale, useTranslations } from "next-intl";

interface GetNotifiedFormProps {
  variant: "footer" | "popover" | "comingsoon" | "whyback";
  setIsPopoverOpen?: (value: boolean) => void;
}

export default function GetNotifiedForm({
  variant,
  setIsPopoverOpen,
}: GetNotifiedFormProps) {
  const t = useTranslations("subscribeForm");
  const lang = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [customerId, setCustomerId] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const res = await fetch("/api/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailInput.value,
        lang: lang,
      }),
    });

    if (res) {
      const data = await res.json();
      setCustomerId(data.id);
    }

    if (emailInput && emailInput.checkValidity()) {
      setIsOpen(true);
    } else {
      emailInput.reportValidity();
    }
  };

  return (
    <form
      className={cn(
        "flex flex-col gap-1.5",
        variant === "footer"
          ? "footerForm w-auto md:w-[525px]"
          : variant === "popover"
          ? "orderModalForm w-auto"
          : "w-auto"
      )}
      onSubmit={handleSubmit}
    >
      <div
        className={cn(
          variant === "comingsoon"
            ? "flex flex-col gap-4"
            : variant === "footer" || "popover" || "whyback"
            ? "w-auto relative flex flex-col gap-4 md:flex-row md:items-center md:gap-0"
            : ""
        )}
      >
        <label className="relative w-full inline-flex items-center">
          <input
            className={cn(
              "w-full rounded-full p-4 border focus:outline-none focus:border-dotted autofill",
              variant === "footer"
                ? "text-white hover:bg-surface-inverted-secondary transition-all duration-100 placeholder:text-text-inverted-tertiary border-border-whiteOpacity12"
                : variant === "popover"
                ? "text-text-primary bg-surface-tertiary placeholder:text-text-inverted-tertiary border-border-whiteOpacity12"
                : variant === "comingsoon"
                ? "text-base placeholder:font-medium border-border-blackOpacity8 placeholder:text-text-quaternary bg-surface-secondary h-14 md:h-12"
                : "bg-surface-primary placeholder:text-text-tertiary border-border-whiteOpacity12"
            )}
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            autoFocus={false}
            placeholder={`${t("input")}`}
            required
          />
        </label>
        <SubscribeButton
          className={cn(
            variant === "footer"
              ? "relative md:absolute md:right-2.5 bg-white hover:bg-brand hover:text-text-inverted-primary"
              : variant === "popover"
              ? "relative md:absolute md:right-2.5 bg-surface-inverted-primary text-text-inverted-primary"
              : variant === "comingsoon"
              ? "bg-[rgb(21,93,252)] py-2.5 px-4 text-text-inverted-primary text-base font-medium rounded-[28px] cursor-pointer h-14 md:h-12"
              : "relative md:absolute md:right-2.5 bg-surface-inverted-primary text-text-inverted-primary py-2.5 px-4"
          )}
          type="submit"
          name={variant === "footer" || "popover" ? "subscribe" : "getnotified"}
        >
          {variant === "footer" || variant === "popover" ? t("btn") : t("btn2")}
        </SubscribeButton>
        {/* <button
          className="bg-[rgb(21,93,252)] py-2.5 px-4 text-text-inverted-primary text-base font-medium rounded-[28px] cursor-pointer h-14 md:h-12"
          // onClick={() => setIsOpen(true)}
          type="submit"
        >
          {" "}
          Get Notified
        </button> */}
        <NewsletterPopup
          customerId={customerId}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIsPopoverOpen={setIsPopoverOpen}
        />
      </div>
    </form>
  );
}
