"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

interface FadeDownProps {
  text?: string;
  className?: string;
  highlight?: string[];
}

export const FadeDown: React.FC<FadeDownProps> = ({
  text = "",
  className = "",
  highlight = [],
}) => {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 1.2 },
    },
  };

  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h1
        className={clsx(
          "text-center font-display font-bold drop-shadow-sm",
          "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
          "tracking-[-0.02em]",
          "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]",
          className
        )}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        {words.map((word, index) => (
          <span
            key={index}
            className={clsx(
              highlight.includes(word) && "text-blue-300"
            )}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </span>
        ))}
      </motion.h1>
    </motion.div>
  );
};
