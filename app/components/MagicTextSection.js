"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-3 mt-3">
      {/* faded text */}
      <span className="absolute left-0 top-0 opacity-10">
        {children}
      </span>

      {/* animated text */}
      <motion.span
        style={{ opacity }}
        className="relative"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default function MagicTextSection() {
  const container = useRef(null);

  const text =
    "We craft immersive digital experiences blending design motion and technology into premium interactions that feel modern elegant and unforgettable.";

  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.85", "start 0.25"],
  });

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f4ef] py-24 md:py-36">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* TOP LABEL */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mb-8 text-xs uppercase tracking-[0.4em] text-neutral-500"
        >
          About Our Vision
        </motion.p>

        {/* MAGIC TEXT */}
        <div ref={container}>
          <p className="flex flex-wrap leading-[1.15] text-black">
            {words.map((word, i) => {
              const start = i / words.length;

              const end = start + 1 / words.length;

              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                >
                  <span className="text-3xl font-light tracking-tight md:text-5xl lg:text-7xl">
                    {word}
                  </span>
                </Word>
              );
            })}
          </p>
        </div>

        {/* BOTTOM CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.15,
            duration: 0.8,
          }}
          className="mt-20 flex flex-col gap-10 border-t border-black/10 pt-10 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-xl text-base font- leading-relaxed text-neutral-600 md:text-lg">
            Every interaction is carefully designed to create emotional,
            cinematic and engaging digital experiences that feel timeless and
            human.
          </p>

          <motion.button
            whileHover={{
              scale: 1.03,
              
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="group flex  items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium tracking-[0.15em]  text-white shadow-[0_10px_40px_rgba(0,0,0,0.12)]"
          >
            KNOW MORE 

           
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}