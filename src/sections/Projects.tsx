"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";

import wildOlives from "@/assets/images/wild-olives.png";
import linkupLandingPage from "@/assets/images/linkup-landing-page.png";
import codeChallengeGenerator from "@/assets/images/code-challenge.png";

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
  more?: string[];
  link?: string;
  linkLabel?: string;
  image: StaticImageData;
  github?: string;
  hideLinkButton?: boolean;
};

const portfolioProjects: PortfolioProject[] = [
  {
    company: "Wild Olives 30A",
    year: "2024 - 2026",
    title: "Mediterranean Bistro Restaurant",
    techStack: "React, Tailwind CSS, React Router, AWS S3, CloudFront",
    github: "https://github.com/colecodesdev/wild-olives",
    focus: [
      "Production Web Applications",
      "Frontend Architecture",
      "Cloud Hosting",
    ],
    results: [
      {
        title:
          "Rebuilt the production restaurant website as a React + Tailwind single-page application deployed on AWS S3 and CloudFront.",
      },
    ],
    more: [
      "Recreated the existing Wix-based site using a reusable React component architecture designed for maintainability and responsive layouts.",
      "Implemented client-side routing with React Router, mobile navigation systems, and responsive UI components using Tailwind CSS.",
      "Structured the UI around reusable layout primitives and composable section components to simplify page creation and reduce duplication.",
      "Deployed the static frontend using Amazon S3 and CloudFront for low-cost global delivery and CDN caching.",
    ],
    link: "https://d6uiwxps2u5ue.cloudfront.net/",
    image: wildOlives,
  },
  {
    company: "Reilly Labs",
    year: "2026",
    title: "AI Code Challenge Generator",
    techStack:
      "React, Vite, FastAPI, OpenAI API, SQLAlchemy, SQLite, Docker, AWS, GitHub Actions",
    github: "https://github.com/colecodesdev/code-challenge-generator",
    focus: ["AI Integration", "Full-Stack Development", "CI/CD Automation"],
    results: [
      {
        title:
          "Built a full-stack AI application that generates programming challenges using the OpenAI API, with a React frontend and FastAPI backend deployed on AWS.",
      },
    ],
    more: [
      "Designed and implemented a React + Vite single-page application that allows users to generate programming challenges, answer multiple-choice questions, and review explanations within a consistent UI structure.",
      "Developed a FastAPI backend that integrates with the OpenAI API to generate structured coding challenges, performs strict JSON validation on AI responses, and stores challenge history using SQLAlchemy with a SQLite database.",
      "Deployed the frontend as a static site hosted in Amazon S3 and delivered through CloudFront, while routing /api requests to a containerized FastAPI backend running on EC2.",
      "Implemented a CI/CD pipeline using GitHub Actions with OIDC authentication to build Docker images, push them to Amazon ECR, and automatically redeploy the backend container.",
    ],
    link: "https://d1tsfobuj7g5p2.cloudfront.net/",
    image: codeChallengeGenerator,
  },
  {
    company: "LinkUp Solutions",
    year: "2025 - Present",
    title: "Bilingual Consultation Platform",
    focus: [
      "Client Systems",
      "WordPress Platform Engineering",
      "Technical Support",
    ],
    results: [
      {
        title:
          "Maintain a WordPress multi-site platform supporting bilingual content and client consultation workflows.",
      },
    ],
    more: [
      "Configured and maintain WordPress multi-site architecture with shared infrastructure supporting multiple language-specific sites.",
      "Implement UI updates, build new pages using reusable components, and extend theme functionality with custom code when required.",
      "Manage hosting configuration, plugin updates, and performance optimization across production environments.",
      "Provide ongoing troubleshooting and technical support for client-facing systems and platform updates.",
    ],
    link: "https://linkupsolutions.us/",
    image: linkupLandingPage,
  },
];

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const ctaBase =
  "inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 px-6 font-semibold transition";

export const ProjectsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => {
      const next = current === index ? null : index;

      if (next !== null) {
        setTimeout(() => {
          document
            .getElementById(`project-accordion-${index}`)
            ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 50);
      }

      return next;
    });
  };

  return (
    <section className="pb-16 lg:py-24" id="Projects">
      <div className="container">
        <div className="flex justify-center">
          <GradientText
            as="p"
            className="text-center text-sm font-semibold uppercase tracking-[0.3em] md:text-base"
          >
            Real-world Results
          </GradientText>
        </div>

        <h2 className="mt-6 text-center font-serif text-3xl text-white md:text-5xl">
          Featured Projects
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-white/60 md:text-lg">
          A selection of production-ready projects demonstrating full-stack development,
          cloud infrastructure, AI integration, and long-term ownership of real-world systems.
        </p>

        <div className="mt-10 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => {
            const isOpen = openIndex === projectIndex;

            return (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] after:pointer-events-none md:px-10 md:pt-12 lg:px-20 lg:pt-16"
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-10">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <GradientText className="inline-flex gap-2 text-sm font-bold uppercase tracking-widest">
                          <span>{project.company}</span>
                          <span>&bull;</span>
                          <span>{project.year}</span>
                        </GradientText>

                        <h3 className="mt-2 font-serif text-2xl text-white md:mt-5 md:text-4xl">
                          {project.title}
                        </h3>
                      </div>

                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center self-start rounded-xl border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.06]"
                        >
                          <GitHubIcon className="size-5 text-white" />
                        </a>
                      ) : null}
                    </div>

                    {project.techStack ? (
                      <p className="mt-3 text-sm leading-6 text-white/50 md:text-base">
                        <span className="font-semibold text-white/70">Tech Stack:</span>{" "}
                        {project.techStack}
                      </p>
                    ) : null}

                    {project.focus ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.focus.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <hr className="mt-4 border-t border-white/10 md:mt-5" />

                    <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                      {project.results.map((result) => (
                        <li
                          key={result.title}
                          className="text-sm text-white/60 md:text-base md:leading-7"
                        >
                          {result.title}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                      <button
                        type="button"
                        onClick={() => toggle(projectIndex)}
                        aria-expanded={isOpen}
                        aria-controls={`project-accordion-${projectIndex}`}
                        className={`${ctaBase} w-full bg-white/[0.03] text-white hover:bg-white/[0.06] sm:w-auto`}
                      >
                        {isOpen ? "Read Less" : "Read More"}
                        <ChevronDownIcon
                          className={[
                            "size-4 transition-transform duration-300",
                            isOpen ? "rotate-180" : "",
                          ].join(" ")}
                        />
                      </button>
                      {!project.hideLinkButton && project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${ctaBase} w-full bg-white/[0.92] text-gray-950 hover:bg-white sm:w-auto`}
                        >
                          <span>{project.linkLabel ?? "Live Demo"}</span>
                          <ArrowUpRightIcon className="size-4" />
                        </a>
                      ) : null}
                    </div>

                    <div className="mt-6">
                      <div
                        id={`project-accordion-${projectIndex}`}
                        className={[
                          "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out",
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                        ].join(" ")}
                      >
                        <div className="overflow-hidden">
                          <div
                            className={[
                              "rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm transition-opacity duration-200",
                              isOpen ? "opacity-100 delay-100" : "opacity-0",
                            ].join(" ")}
                          >
                            <p className="mb-3 font-semibold text-white/80">
                              More details
                            </p>

                            <ul className="flex flex-col gap-3">
                              {(project.more ?? []).map((item) => (
                                <li
                                  key={item}
                                  className="text-sm leading-7 text-white/60 md:text-base"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      sizes="(max-width: 1200px) 100vw, 600px"
                      className="mt-8 -mb-4 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
