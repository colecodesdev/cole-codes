import GitHubIcon from "@/assets/icons/github.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";
import { GradientText } from "@/components/GradientText";

type PortfolioProject = {
  company: string;
  year: string;
  title: string;
  techStack?: string;
  focus?: string[];
  results: { title: string }[];
  link?: string;
  linkLabel?: string;
  github?: string;
  hideLinkButton?: boolean;
};

const portfolioProjects: PortfolioProject[] = [
  {
    company: "Restaurant Website",
    year: "2024",
    title: "Wild Olives 30A",
    techStack: "React, JavaScript, AWS S3, CloudFront",
    focus: ["Production Website", "Performance", "Mobile-First"],
    results: [
      {
        title:
          "Restaurant site serving 45K+ unique visitors and driving 900+ phone conversions over 21 months.",
      },
    ],
    link: "https://wild-olives.vercel.app/",
    github: "https://github.com/colecodesdev/wild-olives",
  },
  {
    company: "Bar Staff Scheduling Tool",
    year: "2026",
    title: "Perfect Shift",
    techStack: "React, Vite, Vercel",
    github: "https://github.com/colecodesdev/perfect-shift",
    focus: ["Scheduling Logic", "Frontend App", "Domain-Driven"],
    results: [
      {
        title:
          "Web app for drafting weekly bar staff schedules with role-aware auto-assignment and shift equity tracking.",
      },
    ],
    link: "https://perfect-shift.vercel.app",
  },
  {
    company: "Single-Location Gym Website",
    year: "2025",
    title: "Wink's Iron Lot",
    techStack:
      "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Base UI, Zod, Resend",
    focus: ["Marketing Site", "E-Commerce", "Class Scheduling"],
    results: [
      {
        title:
          "Marketing and operations site for a single-location gym, covering apparel sales and class scheduling.",
      },
    ],
    link: "https://winks-iron-lot.vercel.app",
    github: "https://github.com/colecodesdev/winks-iron-lot",
  },
  {
    company: "Wellness Practice Website",
    year: "2026",
    title: "The Fitness Factory",
    techStack:
      "Next.js, TypeScript, Tailwind CSS, Radix UI, lucide-react, react-hook-form, Zod",
    focus: ["Wellness", "HIPAA-Aware Architecture", "Client Portal"],
    results: [
      {
        title:
          "Platform for a wellness practice that delivers tailored health and coaching plans from client genetic testing.",
      },
    ],
    link: "https://fitness-factory-rosy.vercel.app",
    github: "https://github.com/colecodesdev/fitness-factory",
  },
];

const ctaBase =
  "inline-flex h-11 items-center justify-center gap-1.5 rounded-lg border border-white/10 px-4 text-xs font-semibold transition md:h-9 md:px-3";

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:flex lg:h-full lg:flex-col lg:justify-center lg:py-0" id="Projects">
      <div className="container lg:flex lg:flex-col lg:px-0">
        <GradientText
          as="h2"
          className="block text-center text-sm font-semibold uppercase tracking-widest md:text-base"
        >
          Featured Projects
        </GradientText>

        <div className="mt-6 flex flex-col gap-3 lg:mt-4 lg:pr-2">
          {portfolioProjects.map((project) => {
            return (
              <Card
                key={project.title}
                className="flex flex-col gap-3 px-5 py-4 transition duration-300 hover:border-white/25 hover:bg-white/[0.05] hover:shadow-[0_0_0_1px_rgba(212,82,30,0.25)] after:pointer-events-none md:flex-row md:gap-4"
              >
                <div className="flex min-w-0 flex-1 flex-col">
                  <GradientText className="inline-flex gap-2 text-xs font-bold uppercase tracking-widest">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </GradientText>

                  <h3 className="mt-1.5 font-serif text-xl text-white">
                    {project.title}
                  </h3>

                  {project.techStack ? (
                    <p className="mt-1.5 font-mono text-xs leading-5 text-white/50 line-clamp-2 md:line-clamp-none md:truncate">
                      <span className="font-semibold text-white/70">Tech:</span>{" "}
                      {project.techStack}
                    </p>
                  ) : null}

                  {project.focus ? (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.focus.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <ul className="mt-3 flex flex-col gap-1.5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="text-sm leading-6 text-white/60"
                      >
                        {result.title}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full shrink-0 flex-row items-center justify-between gap-2 md:w-24 md:flex-col md:items-end">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="inline-flex size-9 items-center justify-center rounded-md text-white/70 transition hover:text-white md:size-7"
                    >
                      <GitHubIcon className="size-5 md:size-4" />
                    </a>
                  ) : (
                    <span aria-hidden="true" />
                  )}
                  {!project.hideLinkButton && project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${ctaBase} bg-white/[0.92] text-gray-950 hover:bg-white md:w-full`}
                    >
                      <span>{project.linkLabel ?? "Demo"}</span>
                      <ArrowUpRightIcon className="size-3.5" />
                    </a>
                  ) : null}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
