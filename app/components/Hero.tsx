"use client";

import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import NavbarCom from "./Navbar";
import BtnConnect from "./ui/btn-connect";
import { FlipText } from "@/components/magicui/flip-text";
import { WordRotate } from "@/components/magicui/word-rotate";


const Hero = () => {
  const images = [
    "/roof-and-gutter-replacement-cost.webp",
    "/g5..webp",
    "/sdr-blog-165.webp",
  ];

  const words = [
     "Quality" ,
     "Reliable" ,
     "Gutter" ,
     "Experts" ,
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
     <motion.div className="w-full px-2 sm:px-6 flex flex-col items-center justify-center text-center -space-y-9 md:space-y-4 mb-2 lg:pb-5">
        <div className="relative w-full h-[5.5rem] flex items-center justify-center overflow-hidden">
          <WordRotate className="absolute inset-0 text-4xl font-bold tracking-widest text-white md:text-7xl md:leading-[5rem]" words={words} />
        </div>

      <FlipText className="text-4xl font-bold text-blue-300 md:text-7xl md:leading-[5rem]">
        South Star Gutters
      </FlipText>
    </motion.div>

<BtnConnect title="Get a Free Quote"/>        
      </motion.div>
    </ImagesSlider>
  );
};

export default Hero;
