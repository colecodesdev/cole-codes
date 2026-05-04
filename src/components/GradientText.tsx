import { twMerge } from "tailwind-merge";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
};

export const GradientText = ({
  children,
  className,
  as: Tag = "span",
}: GradientTextProps) => {
  return (
    <Tag
      className={twMerge(
        "bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </Tag>
  );
};
