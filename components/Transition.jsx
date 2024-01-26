"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const routes={
  '/':'Home',
  '/about':'About',
  '/contact':'Contact',
  '/services':'Services',
  '/testimonials':'Testimonials',
  '/work':'Work',
}

export default function Transition({ children }) {

  const router=useRouter()
  

  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const slide = {
    initial: {
      x: "0%",
    },
    enter: {
      x: "-100%",
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: [0.45, 0, 0.55, 1],
      },
    },
    exit: {
      x: "0%",
      transition: {
        duration: 0.6,
        ease: [0.45, 0, 0.55, 1],
      },
    },
  };
  const text = {
    initial: {
      x: "0%",
    },
    enter: {
      x: "-100%",
      transition: {
        delay: 0.6,
        duration: 0.6,
        ease: [0.45, 0, 0.55, 1],
      },
    },
    exit: {
      x: "0%",
      transition: {
        duration: 0.5,
        ease: [0.45, 0, 0.55, 1],
      },
    },
  };

  return (
    <>
      <div className="">
      <motion.div
        {...anim(text)}
        className="absolute top-[45%] pl-10 xl:pl-40 w-screen h-screen z-40 text-3xl lg:text-6xl text-first font-bold"
      >
        {routes[router.route]}
      </motion.div>
      <motion.div
        {...anim(slide)}
        className="fixed top-0 left-0 w-screen h-screen z-20 bg-fourth"
      />
      </div>
      <div className="">
      {children}
      </div>
    </>
  );
}
