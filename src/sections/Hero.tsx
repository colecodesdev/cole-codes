import ResumeIcon from "@/assets/icons/resume.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ctaBase =
  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-6 font-semibold transition sm:w-auto sm:justify-start";

export const HeroSection = () => {
  return (
    <div className="relative z-0 py-16 md:py-24 lg:flex lg:h-full lg:items-center lg:py-0">
      <div className="container lg:px-0">
        <div className="max-w-3xl">
          <h1 className="font-serif text-3xl tracking-wide text-white md:text-5xl">
            Colton Reilly
          </h1>

          <p className="mt-5 text-white/70 md:text-lg md:leading-8">
            I'm a software engineer with an affinity for building useful tools and clean interfaces. Working in hospitality taught me that making people happy is easy, give them what they want. Helping them figure out what they actually want, now that's the hard part.
          </p>
          <p className="mt-4 text-white/70 md:text-lg md:leading-8">
            Most of my work sits at the seam between engineering and the people the software is for. I help small business owners figure out which SaaS fits their actual workflow, and when nothing on the market does, I build it. I care about what I do because I care about who I do it for. It&apos;s easier that way.
          </p>
          <p className="mt-4 text-white/70 md:text-lg md:leading-8">
            When I'm not working or building something, I'm probably touching some grass, eating something delicious, or binging a TV show with my roommates.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:gap-4">
          <a
            href="https://www.linkedin.com/in/colecodes/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaBase} z-10 bg-white/[0.03] text-white hover:bg-white/[0.06]`}
          >
            <FaLinkedin className="size-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/colecodesdev"
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaBase} z-10 bg-white/[0.03] text-white hover:bg-white/[0.06]`}
          >
            <FaGithub className="size-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://coltonreilly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaBase} z-10 bg-white/[0.03] text-white hover:bg-white/[0.06]`}
          >
            <ResumeIcon className="size-4" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};
