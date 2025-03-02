import cn from "../../../lib/utils/classname";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "loading" | "disabled" | "success" | "error";
}

export default function SubscribeButton({
  className,
  children,
  type,
  variant,
}: ButtonProps) {
  return (
    <button
      className={cn(
        `flex justify-center items-center text-sm text-text-primary px-4 py-2 rounded-full cursor-pointer bg-white hover:bg-background-secondary ${
          variant === "disabled"
            ? "disabled:opacity-50 disabled:cursor-not-allowed"
            : variant === "success"
            ? "font-semibold"
            : variant === "error"
            ? "bg-background-error text-error font-semibold"
            : ""
        } transition-colors duration-200`,
        className
      )}
      type={type}
    >
      {children}
    </button>
  );
}
