import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {

      return (
        <input
          ref={ref}
          {...props}
          type="text"
          id="firstName" name="firstName"
          placeholder="Enter name"
          className="mt-1 px-4 py-2.5 w-full rounded-lg insert focus:outline-none ring-1 ring-gray-200 focus:ring-primary-500 transition-colors duration-300"/>

      );
  }
);

Input.displayName = "Input";