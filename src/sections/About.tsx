import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PythonIcon from "@/assets/icons/python.svg";
import NodeIcon from "@/assets/icons/node.svg";
import AWSIcon from "@/assets/icons/aws.svg";
import JavaIcon from "@/assets/icons/java.svg";
import PostgresqlIcon from "@/assets/icons/postgresql.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import WordPressIcon from "@/assets/icons/wordpress.svg";

import newMapImage from "@/assets/images/new-map.png";
import myMemoji from "@/assets/images/my-memoji.png";

import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { TechIconDefs } from "@/components/TechIconDefs";

const toolboxItems = [
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "AWS", iconType: AWSIcon },
  { title: "Java", iconType: JavaIcon },
  { title: "Docker", iconType: DockerIcon },
  { title: "PostgreSQL", iconType: PostgresqlIcon },
  { title: "GitHub", iconType: GithubIcon },
  { title: "Python", iconType: PythonIcon },
  { title: "WordPress", iconType: WordPressIcon },
  { title: "Node.js", iconType: NodeIcon },
];

const principles = [
  "Problem-first thinking before choosing tools",
  "Simple, maintainable system architecture",
  "Cost-aware decisions in cloud environments",
  "Automation wherever repetitive work exists",
  "Observability built in from the start",
  "Fast iteration and continuous refinement",
];

const horizontalFadeMask = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
};

export const AboutSection = () => {
  return (
    <section className="py-16 lg:py-28" id="About">
      <TechIconDefs />
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="How I Build"
          description="I build reliable web and cloud applications with a focus on production troubleshooting, real-world delivery, and practical AWS-based infrastructure."
        />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col gap-8 lg:col-span-2">
            <Card className="flex-1">
              <CardHeader
                title="My Toolbox"
                description="The tools and technologies I use to craft fast, reliable web experiences"
              />
              <div style={horizontalFadeMask}>
                <ToolboxItems
                  items={toolboxItems}
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
              </div>

              <div className="my-6" style={horizontalFadeMask}>
                <ToolboxItems
                  items={toolboxItems}
                  itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
                />
              </div>
            </Card>

            <Card className="relative min-h-[280px] flex-1 p-0">
              <Image
                src={newMapImage}
                alt="Map showing my location"
                sizes="(max-width: 1200px) 100vw, 700px"
                className="absolute inset-0 h-full w-full object-cover object-[left_30%]"
              />
              <div className='absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:content-[""]'>
                <div className="absolute inset-0 -z-20 animate-ping rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 [animation-duration:2s]"></div>
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"></div>
                <Image
                  src={myMemoji}
                  alt="Cole Codes Memoji"
                  sizes="80px"
                  className="size-20"
                />
              </div>
            </Card>
          </div>

          <Card className="flex flex-col lg:h-full">
            <CardHeader
              title="Engineering Principles"
              description="A practical approach focused on clarity, maintainability, and real-world delivery."
              className="px-6 py-6"
            />
            <div className="px-6 pb-6">
              <div className="grid grid-cols-1 gap-3">
                {principles.map((principle) => (
                  <div
                    key={principle}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <p className="text-sm text-white/90">{principle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
