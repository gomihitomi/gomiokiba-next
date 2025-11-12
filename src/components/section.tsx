import React from "react";

type SectionProps = {
  title?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"section">;

export const Section = ({
  title,
  children,
  className,
  ...props
}: SectionProps) => {
  return (
    <section className={`mt-12 ${className || ""}`} {...props}>
      {title && (
        <h2 className="text-3xl font-black tracking-tighter mb-3">{title}</h2>
      )}
      {children}
    </section>
  );
};
