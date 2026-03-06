import { twMerge } from "tailwind-merge";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={twMerge(
        "relative rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-sm overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]",
        "after:absolute after:inset-0 after:rounded-2xl after:outline after:outline-1 after:outline-white/5",
        className
      )}
    >
      {children}
    </div>
  );
};