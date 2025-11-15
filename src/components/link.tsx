import NextLink from "next/link";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

export const Link = ({ className, ...props }: LinkProps) => {
  return (
    <NextLink
      target="_blank"
      className={`font-bold text-primary hover:text-primary-hover hover:underline ${className}`}
      {...props}
    />
  );
};
