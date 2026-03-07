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
    <div className="flex max-w-3xl flex-col items-center mx-auto text-center">
      <p className="font-semibold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
        {eyebrow}
      </p>
      <h2 className="mt-6 font-serif text-3xl md:text-5xl text-white">
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