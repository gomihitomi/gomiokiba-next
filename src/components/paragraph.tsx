import React from "react";

type SectionProps = {
  isFirst?: boolean;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"p">;

export const Paragraph = ({
  isFirst = false,
  children,
  className,
  ...props
}: SectionProps) => {
  const classString = `mb-1 ${
    isFirst
      ? "first-letter:text-4xl first-letter:font-bold first-letter:text-background first-letter:bg-foreground first-letter:mr-1 first-letter:p-1 first-letter:float-left"
      : ""
  }`;
  return (
    <p className={`${classString} ${className || ""}`} {...props}>
      {children}
    </p>
  );
};
