"use client";

import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import NavbarCom from "./Navbar";
import BtnConnect from "./ui/btn-connect";

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const words = [
    { text: "Quality" },
    { text: "Gutter" },
    { text: "Experts" },
    {
      text: "South Star Gutters",
      className: "text-blue-400 dark:text-blue-400",
    },
  ];
  return (
    <ImagesSlider className="h-screen w-full" images={images}>
      <NavbarCom />
      <motion.div
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
      <motion.div className="w-full px-4 sm:px-6">
        <TypewriterEffectSmooth
          words={words}
          className="flex-wrap justify-center text-center "
        />
      </motion.div>
<BtnConnect title="Explore more"/>        
      </motion.div>
    </ImagesSlider>
  );
};

export default Hero;
