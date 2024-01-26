import Avatar from "@/components/Avatar";
import Transition from "@/components/Transition";
import React from "react";

export default function Home() {
  return (
    <Transition>
      <div className="">
      <div className=" flex  flex-col md:flex-row text-center gap-16 px-8 xl:mr-36 mt-24">
        <div className="flex w-full items-center md:w-5/12 aspect-square bg-yellow-300 rounded-full object-cover">
          <Avatar />
        </div>
        <div className="flex max-md:justify-center md:items-center text-3xl xl:text-6xl xl:text-left ">
            Hi, I am Vishwajeet <br />
            Web Developer
        </div>
      </div>
      </div>
    </Transition>
  );
}
