import NextLink from "next/link";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

export const Link = ({ className, ...props }: LinkProps) => {
  return (
    <NextLink
      target="_blank"
      className={`text-red-600 hover:text-red-500 hover:underline ${className}`}
      {...props}
    />
  );
};
