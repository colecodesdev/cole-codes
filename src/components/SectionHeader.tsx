export const SectionHeader = ({
    title,
    eyebrow,
}: {
    title: string;
    eyebrow: string;
}) => {
    return (
        <>
        <div className="flex justify-center">
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">{eyebrow}</p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">{title}</h2>
        </>
    )
}