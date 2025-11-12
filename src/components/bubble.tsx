import type { ReactNode } from "react";

type BubbleProps = {
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
};

const Bubble = ({
  children,
  position = "top",
  className = "",
}: BubbleProps) => {
  const positionClasses = {
    top: `
      mt-1
      before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-b-foreground
      after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-b-background after:translate-y-px
    `,
    bottom: `
      mb-1
      before:top-full before:left-1/2 before:-translate-x-1/2 before:border-t-foreground
      after:top-full after:left-1/2 after:-translate-x-1/2 after:border-t-background after:-translate-y-px
    `,
    left: `
      ml-1
      before:right-full before:top-1/2 before:-translate-y-1/2 before:border-r-foreground
      after:right-full after:top-1/2 after:-translate-y-1/2 after:border-r-background after:translate-x-px
    `,
    right: `
      mr-1
      before:left-full before:top-1/2 before:-translate-y-1/2 before:border-l-foreground
      after:left-full after:top-1/2 after:-translate-y-1/2 after:border-l-background after:-translate-x-px
    `,
  };

  return (
    <div
      className={`
        relative w-fit rounded border border-foreground bg-background px-2 py-1 text-foreground z-10
        
        before:absolute
        before:content-['']
        before:h-0
        before:w-0
        before:border-8
        before:border-transparent

        after:absolute
        after:content-['']
        after:h-0
        after:w-0
        after:border-8 
        after:border-transparent

        ${positionClasses[position]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Bubble;
