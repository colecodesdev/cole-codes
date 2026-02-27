"use client";

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
import { motion } from "framer-motion";
import { useRef } from "react";

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

const hobbies = [
  { title: "Movies & TV", emoji: "🎥", left: "50%", top: "5%" },
  { title: "Eating Healthy", emoji: "🥑", left: "35%", top: "40%" },
  { title: "Computer Games", emoji: "🎮", left: "10%", top: "35%" },
  { title: "Audio Books", emoji: "🎧", left: "70%", top: "45%" },
  { title: "Staying Active", emoji: "🏋", left: "5%", top: "65%" },
  { title: "Drinking Coffee", emoji: "☕", left: "5%", top: "5%" },
  { title: "Building AI Agents", emoji: "🤖", left: "45%", top: "70%" },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section className="py-16 lg:py-28" id="About">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="More Than Just Code" />

        <div className="mt-10 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-5 lg:col-span-3">
              <CardHeader
                title="My Toolbox"
                description="The tools and technologies I use to craft fast, reliable web experiences"
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Passions and hobbies that keep me inspired outside of web development"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={newMapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[""] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30'>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={myMemoji}
                  alt="Cole Codes Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};