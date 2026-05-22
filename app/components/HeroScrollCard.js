"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    title: "OUR CLICKS",
    image:
      "https://images.unsplash.com/photo-1762274830531-094bfc02b6cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Design",
    image:
      "https://plus.unsplash.com/premium_photo-1661311862112-a360a205ab1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Innovation",
    image:
      "https://plus.unsplash.com/premium_photo-1678935941660-68ed0e85945c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Technology",
    image:
      "https://images.unsplash.com/photo-1739184523594-564cb9b61126?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function HeroScrollCards() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-[#f7f6f2]"
    >
      {/* STICKY HERO */}
      <div className="sticky top-0 flex h-screen overflow-hidden">
        {/* LEFT CONTENT */}
        <div className="flex w-[45%] items-center px-16">
          <div>
            <motion.p
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.1],
                  [0, 1]
                ),
              }}
              className="mb-5 text-xs uppercase tracking-[0.4em] text-neutral-500"
            >
              Future Experience
            </motion.p>

            <motion.h1
              style={{
                y: useTransform(
                  scrollYProgress,
                  [0, 1],
                  [0, -120]
                ),
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.8, 1],
                  [1, 1, 0]
                ),
              }}
              className="text-7xl font-light leading-[0.95] tracking-tight text-black"
            >
             Your Trusted Creative Agency
            </motion.h1>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="  hidden md:block relative mt-40 px-40  flex w-[55%] items-center justify-center ">
          {cards.map((card, i) => (
            <ScrollCard
              key={i}
              card={card}
              index={i}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollCard({ card, index, progress }) {
  /*
    Animation:

    0 → 0.25
    Cards are horizontal + tilted

    0.25 → 0.7
    Cards become vertical stack

    0.7 → 1
    Cards exit downward + fade
  */

  // INITIAL HORIZONTAL POSITION
  const startX = [-220, -70, 80, 230][index];

  // FINAL VERTICAL STACK POSITION
  const verticalY = [-240, -70, 100, 270][index];

  // X movement
  const x = useTransform(
    progress,
    [0, 0.25, 0.7],
    [startX, 0, 0]
  );

  // Y movement
  const y = useTransform(
    progress,
    [0, 0.25, 0.7, 1],
    [0, verticalY, verticalY, verticalY + 500]
  );

  // Tilt rotation
  const rotate = useTransform(
    progress,
    [0, 0.25],
    [index % 2 === 0 ? -14 : 14, 0]
  );

  // Scale
  const scale = useTransform(
    progress,
    [0, 0.2],
    [0.9, 1]
  );

  // Fade out at end
  const opacity = useTransform(
    progress,
    [0, 0.8, 1],
    [1, 1, 0]
  );

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
      }}
      className="absolute"
    >
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.03,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="group relative h-[380px] w-[250px] overflow-hidden rounded-[30px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
      >
        {/* IMAGE */}
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 p-7">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            Creative Tech
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-white">
            {card.title}
          </h2>
        </div>

        {/* GLOW */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute left-[-100%] top-0 h-full w-[60%] rotate-12 bg-white/20 blur-3xl transition-all duration-1000 group-hover:left-[120%]" />
        </div>
      </motion.div>
    </motion.div>
  );
}