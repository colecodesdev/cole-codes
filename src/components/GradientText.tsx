import { twMerge } from "tailwind-merge";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div" | "h2";
};

export const GradientText = ({
  children,
  className,
  as: Tag = "span",
}: GradientTextProps) => {
  return (
    <Tag
      className={twMerge(
        "bg-gradient-to-r from-[#d4521e] to-[#f97316] bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </Tag>
  );
};
