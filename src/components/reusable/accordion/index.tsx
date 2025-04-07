"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import cn from "../../../lib/utils/classname";

interface AccordionProps {
  isBottomLine?: boolean;
}

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> &
    AccordionProps
>(({ isBottomLine, className, ...props }, ref) => (
  <div>
    <AccordionPrimitive.Item
      ref={ref}
      className={cn("", className)}
      {...props}
    />
    {isBottomLine && <div className="w-full h-px bg-[rgba(0,0,0,0.05)]"></div>}
  </div>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-start md:items-center justify-between py-4 text-base leading-[1.5em] font-medium text-[rgb(51,51,51)] text-left cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
      {/* <Minus className="h-4 w-4 shrink-0 text-current transition-transform duration-200 group-data-[state=closed]:hidden" /> */}
      <Plus className="h-4 w-4 my-1 md:my-0 shrink-0 text-current transition-transform duration-200 group-data-[state=open]:rotate-45 group-data-[state=closed]:rotate-0" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-base leading-[1.5em] font-normal text-text-secondary data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pt-0 pb-4", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
