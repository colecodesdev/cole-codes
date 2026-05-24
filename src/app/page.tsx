import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { BackgroundGlow } from "@/components/BackgroundGlow";
import grainImage from "@/assets/images/grain.jpg";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <BackgroundGlow />
      <main
        id="main"
        className="relative z-0 overflow-x-clip lg:flex lg:h-screen lg:flex-col lg:overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />

        <div className="lg:flex lg:flex-1 lg:min-h-0 lg:gap-10 lg:px-10 lg:py-10">
          <div className="lg:flex-1 lg:min-w-0 lg:overflow-y-auto lg:pr-4">
            <HeroSection />
          </div>
          <div className="relative lg:flex lg:flex-1 lg:min-w-0 lg:flex-col">
            <div
              aria-hidden="true"
              className="dot-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
            />
            <ProjectsSection />
          </div>
        </div>
      </main>
    </>
  );
}
