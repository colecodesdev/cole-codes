import myMemojiComputer from "@/assets/images/my-memoji-computer.png";
import Image from "next/image";
import ResumeIcon from "@/assets/icons/resume.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { FaGithub } from "react-icons/fa";
import { HeroOrbit } from "@/components/HeroOrbit";

const ctaBase =
  "inline-flex h-12 items-center gap-2 rounded-xl border border-white/10 px-6 font-semibold transition";

export const HeroSection = () => {
  return (
    <div className="relative z-0 overflow-x-clip py-32 md:py-48 lg:py-60">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-[0.035]"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/15" />
        </HeroOrbit>

        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/15" />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/15" />
        </HeroOrbit>

        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/15" />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300/60" />
        </HeroOrbit>

        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300/60" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/15" />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/15" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/15" />
        </HeroOrbit>

        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300/50" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={myMemojiComputer}
            className="size-[100px] translate-y-1"
            alt="Person peeking from behind laptop"
            priority
            sizes="100px"
          />

          <div className="inline-flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
            <div className="relative size-2.5 rounded-full bg-emerald-400">
              <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium text-white/90">Colton Reilly</div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <h1 className="mt-8 text-center font-serif text-3xl tracking-wide text-white md:text-5xl">
            Software Engineering Graduate:<br /> Cloud &amp; Web Applications
          </h1>

          <p className="mt-5 text-center text-white/70 md:text-lg md:leading-8">
            I build and support production systems across web and cloud environments, combining technical execution with strong communication and practical problem solving.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <a
            href="https://github.com/colecodesdev/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaBase} z-10 bg-white/[0.03] text-white hover:bg-white/[0.06]`}
          >
            <FaGithub className="size-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://coltonresume.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaBase} z-10 bg-white/[0.92] text-gray-950 hover:bg-white`}
          >
            <ResumeIcon className="size-4" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};
