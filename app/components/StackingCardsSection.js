"use client";

import React, {
  useRef,
  useState,
} from "react";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
} from "framer-motion";

const projects = [
  {
    title: "AI Workspace",
    year: "2025",
    category: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Quantum Motion",
    year: "2025",
    category: "Creative Development",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Neural Interface",
    year: "2025",
    category: "UI Engineering",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Future Systems",
    year: "2025",
    category: "Tech Experience",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  },
];

function Card({
  i,
  title,
  category,
  year,
  image,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null);

  const [hovered, setHovered] = useState(false);

  // cursor follow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);

    mouseY.set(e.clientY - rect.top);
  };

  // card scroll
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // image zoom
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [2, 1]
  );

  // stack scale
  const scale = useTransform(
    progress,
    range,
    [1, targetScale]
  );

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center"
    >

      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        className="group relative h-[520px] w-[92%] overflow-hidden rounded-[2.5rem] bg-[#dcdcdc] shadow-[0_25px_120px_rgba(0,0,0,0.08)] md:h-[620px] md:w-[82%]"
      >

        {/* image */}
        <motion.div
          style={{
            scale: imageScale,
          }}
          className="absolute inset-0"
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* content */}
        <div className="absolute left-0 top-0 z-10 p-6 md:p-10">

          {/* top info */}
          <div className="flex items-center gap-3">

            <span className="text-sm text-white/80">
              {year}
            </span>

            <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />

            <span className="text-sm text-white/80">
              {category}
            </span>
          </div>

          {/* heading */}
          <h2 className="mt-4 max-w-xl font-sans text-3xl font-medium tracking-tight text-white md:text-6xl">
            {title}
          </h2>
        </div>

        {/* cursor follower */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              style={{
                left: mouseX,
                top: mouseY,
              }}
              className="pointer-events-none text-white absolute z-50 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-sm uppercase tracking-[0.25em] text-black shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              View
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default function StackingCardsSection() {
  const container = useRef(null);

  // whole section progress
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={container}
      className="relative bg-[#f3f3f1]"
    >

      {/* heading */}
      <section className="flex h-[45vh] items-end justify-center pb-16">

        <div className="text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-black/35">
            Selected Work
          </p>

          <h1 className="font-sans text-5xl font-medium tracking-tight text-black md:text-8xl">
            Project Section
          </h1>

          <p className="mx-auto mt-6 max-w-2xl px-6 text-sm leading-relaxed text-black/50 md:text-lg">
            A curated collection of immersive design
            systems, creative interfaces and modern
            digital experiences.
          </p>
        </div>
      </section>

      {/* cards */}
      <section>
        {projects.map((project, i) => {
          const targetScale =
            1 - (projects.length - i) * 0.05;

          return (
            <Card
              key={i}
              i={i}
              title={project.title}
              category={project.category}
              year={project.year}
              image={project.image}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>

      {/* bottom spacing */}
      <div className="h-[30vh]" />
    </section>
  );
}