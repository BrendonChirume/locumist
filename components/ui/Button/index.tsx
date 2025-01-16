import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "flat" | "outlined";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, variant = "flat", ...rest } = props;

    const variantClasses: Record<"flat" | "outlined", string> = {
      flat: "bg-black hover:bg-black active:bg-black disabled:bg-black/30 disabled:text-white",
      outlined: "border border-primary-400 text-primary-400 hover:border-black hover:text-black active:border-primary-700 active:text-primary-700 disabled:border-primary-200 disabled:text-primary-200",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex gap-2 justify-center mx-auto items-center px-4 py-2.5 text-gray-50 transition",
          "duration-300 ease-in-out rounded-lg outline-none md:px-6 focus:outline-none",
          variantClasses[variant],
          className
        )}
        {...rest}
      />
    );
  }
);

Button.displayName = "Button";