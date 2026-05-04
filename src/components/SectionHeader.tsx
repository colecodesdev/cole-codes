import { GradientText } from "./GradientText";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export const SectionHeader = ({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
      <GradientText
        as="p"
        className="font-semibold uppercase tracking-widest"
      >
        {eyebrow}
      </GradientText>
      <h2 className="mt-6 font-serif text-3xl text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-center text-white/70 md:text-lg md:leading-8">
          {description}
        </p>
      )}
    </div>
  );
};
