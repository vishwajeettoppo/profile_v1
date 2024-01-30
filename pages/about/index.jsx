import Transition from "@/components/Transition";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <Transition>
      <div className="flex flex-col lg:flex-row h-screen p-12 gap-8 mx-auto max-lg:max-w-[600px] lg:w-3/4">
        <div className="h-1/3 lg:w-1/2 lg:h-1/2 xl:h-3/4">
          <div className="relative h-full w-full">
            <Image
              src={"/about.jpg"}
              alt=""
              objectFit="cover"
              layout="fill"
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:w-1/2">
          <p className="text-third text-lg font-bold uppercase">About Me</p>
          <p className="font-bold text-2xl 2xl:text-4xl text-fourth">
            Frontend Developer, <br />
            3rd year student persueing B.Tech. from IIITDM Jabalpur
          </p>
          <p className="text-xl text-gray-800">
            Hey, my name is Vishwajeet, and I'm a Frontend Developer. My passion
            is to create and develop a clean UI/UX for my users.
          </p>
          <p className="text-xl text-gray-800">
            My main stack current is React/Next.js in combination with Tailwind
            CSS and Framer Motion.
          </p>
        </div>
      </div>
    </Transition>
  );
}
