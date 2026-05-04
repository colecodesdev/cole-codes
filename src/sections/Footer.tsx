import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { GradientText } from "@/components/GradientText";

const footerLinks = [
  { title: "Resume", href: "https://coltonresume.com" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/colecodes/" },
  { title: "GitHub", href: "https://www.github.com/colecodesdev/" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-24 overflow-x-clip">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/12 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>

      <div className="container">
        <div className="flex flex-col items-center gap-4 border-t border-white/10 py-6 text-sm md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <GradientText
              as="p"
              className="text-sm font-semibold uppercase tracking-[0.3em]"
            >
              Colton Reilly
            </GradientText>
            <p className="text-xs text-white/40">
              &copy; {year} Cole Reilly. All rights reserved.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-col items-center gap-6 md:flex-row md:gap-8"
          >
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-white/70 transition hover:text-white"
              >
                <span>{link.title}</span>
                <ArrowUpRightIcon className="size-4 opacity-70" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
