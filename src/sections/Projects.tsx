import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import quinDigitalLandingPage from "@/assets/images/quin-digital-landing-page.png";
import wildOlives30aLandingPage from "@/assets/images/wild-olives-30a-landing-page.png"
import Image from "next/image"
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Wild Olives 30A",
    year: "2024",
    title: "Mediterranean Bistro Restaurant",
    results: [
      { title: "Integrated online reservation system" },
      { title: "Optimized site speed for performance" },
      { title: "Implemented responsive mobile design" },
    ],
    link: "https://www.wildolives30a.com/",
    image: wildOlives30aLandingPage,
  },
  {
    company: "Quin Digital",
    year: "2025",
    title: "Digital Marketing Agency",
    results: [
      { title: "Designed a modern, minimal layout" },
      { title: "Improved page speed and SEO structure" },
      { title: "Made the site fully responsive" },
    ],
    link: "https://quindigital.com/",
    image: quinDigitalLandingPage,
  },
];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-24" id="Projects">
    <div className="container">
      <div className="flex justify-center">
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">Real-world Results</p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">Featured Projects</h2>
      <p className="text-center text-white/60 mt-4 max-w-md mx-auto md:text-lg lg:text-xl ">From concept to polished design — take a look</p>
      <div className="flex flex-col mt-10 gap-20 md:mt-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card 
            key={project.title} 
            className="px-8 pt-8 pb-0 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
              <span>{project.company}</span>
              <span>&bull;</span>
              <span>{project.year}</span>
             </div>
             <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
             <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
             <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map(result => (
                <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                  <CheckCircleIcon className="size-5 md:size-6"/>
                  <span>{result.title}</span>
                </li>
              ))}
             </ul>
             <a href={project.link} target="_blank">
             <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold  px-6 inline-flex items-center justify-center gap-2 mt-8 md:w-auto">
              <span>Visit Live Site</span>
              <ArrowUpRightIcon className="size-4"/>
              </button>
             </a>
             </div>
             <div className="relative">
             <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
             </div>
          </div>
          </Card>
        ))}
      </div>
    </div>
  </section>;
};
