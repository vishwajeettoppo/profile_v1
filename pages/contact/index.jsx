import Transition from "@/components/Transition";
import React from "react";
import { FiMap, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <Transition>
      <div className="lg:p-10 flex flex-col gap-10 w-3/4 lg:w-1/2 mx-auto mt-20">
        <p className="uppercase font-bold">Contact</p>
        <p className="text-xl">Don't be shy! Hit me up!</p>
        <div className="flex flex-col gap-10">
          <div className="flex gap-10 items-center hover:bg-third/10 rounded-full px-6 py-4 hover:translate-x-5 transition-all duration-300 hover:cursor-pointer">
            <FiMap className="text-4xl lg:text-6xl" />
            <div>
              <p className="font-bold">Location</p>
              <p>Jabalpur, Madhya Pradesh</p>
            </div>
          </div>
          <div className="flex gap-10 items-center hover:bg-third/10 rounded-full px-6 py-4  hover:translate-x-5 transition-all duration-300 hover:cursor-pointer">
            <FiMail className="text-4xl lg:text-6xl" />
            <div>
              <p className="font-bold">Mail</p>
              <p>21bcs246@iiitdmj.ac.in</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
