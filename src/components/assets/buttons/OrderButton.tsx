import cn from "../../../lib/utils/classname";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary";
}

export default function OrderButton({
  className,
  children,
  type,
  variant,
}: ButtonProps) {
  return (
    <button
      className={cn(
        `text-sm text-white px-4 py-2 rounded-full cursor-pointer ${
          variant === "primary"
            ? "bg-brand hover:bg-brand-hover"
            : variant === "secondary"
            ? "bg-transparent hover:bg-surface-inverted-secondary border border-stroke-opacity8 text-current"
            : variant === "tertiary"
            ? "bg-transparent hover:bg-current"
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
