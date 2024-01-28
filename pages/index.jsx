import Avatar from "@/components/Avatar";
import Transition from "@/components/Transition";
import Image from "next/image";
import React from "react";

export const techs = [
  { name: "HTML", path: "/html.png" },
  { name: "CSS", path: "/css.png" },
  { name: "JavaScript", path: "/js.png" },
  { name: "TypeScript", path: "/ts.png" },
  { name: "React", path: "/react.png" },
  { name: "Next", path: "/next.png" },
  { name: "Tailwind", path: "/tailwind.jpg" },
  { name: "Framer Motion", path: "/motion.png" },
];

export default function Home() {
  return (
    <Transition>
      {/* <div className="">
        <div className=" flex  flex-col md:flex-row text-center gap-16 px-8 xl:mr-36 mt-24">
          <div className="flex w-full items-center md:w-5/12 aspect-square bg-yellow-300 rounded-full object-cover">
            <Avatar />
          </div>
          <div className="flex max-md:justify-center md:items-center text-3xl xl:text-6xl xl:text-left ">
            Hi, I am Vishwajeet <br />
            Web Developer
          </div>
        </div>
      </div> */}
      <div className="flex flex-col w-10/12 lg:w-8/12 2xl:10/12 mx-auto 2xl:top-[50%]">
        <div className="lg:flex xl:gap-20">
          <div className="h-[350px] lg:w-[450px] xl:h-[450px]">
            <Avatar />
          </div>
          <div className="text-center  mt-4 lg:text-start lg:my-auto">
            <p className="text-4xl xl:text-6xl text-third font-bold">Hi, I am Vishwajeet</p>
            <p className="text-6xl xl:text-8xl text-fourth font-bold">Web Developer</p>
          </div>
        </div>
        <div className="flex flex-col text-center max-lg:w-60 mx-auto max-lg:mt-12 2xl:mt-16">
          <p className="text-third text-2xl">Tech Stacks</p>
          <div className=" grid grid-cols-4 xl:grid-cols-8 gap-8 mt-4">
            {techs.map((img, index) => {
              return (
                <div className="relative w-12 lg:w-16 h-12 lg:h-16  mx-auto">
                  <Image
                    key={index}
                    src={img.path}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Transition>
  );
}
