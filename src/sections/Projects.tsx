"use client";

import { useState } from "react";
import Image from "next/image";

import wildOlives from "@/assets/images/wild-olives.png";
import winksLandingPage from "@/assets/images/winks-landing-page.png";
import linkupLandingPage from "@/assets/images/linkup-landing-page.png";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";

type PortfolioProject = {
  company: string;
  year: string;
  title: string;
  results: { title: string }[];
  more?: string[];
  link: string;
  image: any;
  github?: string;
};

const portfolioProjects: PortfolioProject[] = [
  {
    company: "LinkUp Solutions",
    year: "2024 - Present",
    title: "Bilingual Consultation Platform",
    results: [
      {
        title:
          "WordPress multi-site platform supporting bilingual content and client consultation workflows.",
      },
    ],
    more: [
      "Configured and maintain WordPress multi-site architecture with shared infrastructure.",
      "Implemented bilingual site structure and consultation workflows.",
      "Managed hosting configuration and ongoing technical updates.",
      "Provide production troubleshooting and technical support."
    ],
    link: "https://linkupsolutions.us/",
    image: linkupLandingPage,
  },
  {
    company: "Winks Iron Lot",
    year: "2025 - Present",
    title: "Gym Website & Ecommerce Platform",
    results: [
      {
        title:
          "Production gym website with integrated ecommerce platform and ongoing technical support.",
      },
    ],
    more: [
      "Built and deployed website supporting membership information and apparel sales.",
      "Configured ecommerce platform including product catalog and checkout workflows.",
      "Supported store launch and ongoing feature updates.",
      "Provide ongoing technical consulting and troubleshooting."
    ],
    link: "https://www.winksironlot.net/",
    image: winksLandingPage,
  },
  {
    company: "Wild Olives 30A",
    year: "2024 - 2026",
    title: "Mediterranean Bistro Restaurant",
    results: [
      {
        title:
          "Rebuilt the production restaurant website as a React + Tailwind single-page application deployed on AWS S3 and CloudFront.",
      },
    ],
    more: [
      "Recreated the existing Wix-based site using a reusable React component architecture.",
      "Implemented responsive layouts, mobile navigation, and client-side routing with React Router.",
      "Structured the UI around reusable layout primitives and section components for maintainability.",
      "Deployed the static frontend using AWS S3 and CloudFront for low-cost global delivery."
    ],
    link: "https://d6uiwxps2u5ue.cloudfront.net/",
    image: wildOlives,
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
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">
            Real-world Results
          </p>
        </div>

        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          Featured Projects
        </h2>

        <div className="flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => {
            const isOpen = openIndex === projectIndex;

            return (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20"
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                      {project.title}
                    </h3>

                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-2 text-sm text-white/50 md:text-base"
                        >
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                      <button
                        type="button"
                        onClick={() => toggle(projectIndex)}
                        aria-expanded={isOpen}
                        aria-controls={`project-accordion-${projectIndex}`}
                        className="border border-white/15 text-white h-12 w-full rounded-xl font-semibold px-6 inline-flex items-center justify-center gap-2 sm:w-auto hover:bg-white/5 transition"
                      >
                        {isOpen ? "Read Less" : "Read More"}
                        <ChevronDownIcon
                          className={[
                            "size-4 transition-transform duration-300",
                            isOpen ? "rotate-180" : "",
                          ].join(" ")}
                        />
                      </button>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <button
                          type="button"
                          className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold px-6 inline-flex items-center justify-center gap-2 sm:w-auto"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </a>

                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full sm:w-auto"
                        >
                          <button
                            type="button"
                            className="border border-white/15 text-white h-12 w-full rounded-xl font-semibold px-6 inline-flex items-center justify-center gap-2 sm:w-auto hover:bg-white/5 transition"
                          >
                            <span>GitHub</span>
                            <ArrowUpRightIcon className="size-4" />
                          </button>
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
                              "rounded-xl border border-white/10 bg-white/5 p-5 transition-opacity duration-200",
                              isOpen ? "opacity-100 delay-100" : "opacity-0",
                            ].join(" ")}
                          >
                            <p className="text-white/70 font-semibold mb-3">
                              More details
                            </p>

                            <ul className="flex flex-col gap-2">
                              {(project.more ?? []).map((item) => (
                                <li
                                  key={item}
                                  className="text-white/60 text-sm md:text-base"
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
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
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