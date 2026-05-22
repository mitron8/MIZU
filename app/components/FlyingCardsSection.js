"use client";

import React, { useRef } from "react";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const cards = [
  {
    title: "Creative UI",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Modern Design",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Motion System",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "AI Experience",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Backend Logic",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function FlyingCardsSection() {
  const sectionRef = useRef(null);

  // SECTION SCROLL ONLY
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // CARD 1
  const card1X = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-1800, 0]
  );

  const card1Y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-1000, 0]
  );

  const card1Rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-45, 0]
  );

  // CARD 2
  const card2X = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1600, 0]
  );

  const card2Y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-800, 0]
  );

  const card2Rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [35, 0]
  );

  // CARD 3
  const card3X = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-1600, 0]
  );

  const card3Y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [900, 0]
  );

  const card3Rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-30, 0]
  );

  // CARD 4
  const card4X = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1800, 0]
  );

  const card4Y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1000, 0]
  );

  const card4Rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [28, 0]
  );

  // CARD 5
  const card5Y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-1800, 0]
  );

  const card5Rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-25, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[320vh] bg-[#f7f4ef]"
      style={{ overflow: "clip" }}
    >

      {/* STICKY SECTION */}
      <div className="sticky top-0 flex h-screen items-center justify-center">

        {/* background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_70%)]" />

        {/* GRID */}
        <div className="relative grid h-[80vh] w-full max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-3 md:grid-rows-2 md:gap-5">

          {/* BIG IMAGE */}
          <motion.div
            style={{
              x: card1X,
              y: card1Y,
              rotate: card1Rotate,
            }}
            className="will-change-transform col-span-2 overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_120px_rgba(0,0,0,0.08)] md:col-span-1 md:row-span-2"
          >
            <img
              src={cards[0].image}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            style={{
              x: card2X,
              y: card2Y,
              rotate: card2Rotate,
            }}
            className="will-change-transform rounded-[2rem] bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
          >
            <h2 className="font-serif text-5xl md:text-7xl">
              200+
            </h2>

            <h3 className="mt-6 font-serif text-2xl md:text-3xl">
              Projects
            </h3>

            <p className="mt-3 text-black/50">
              Modern immersive experiences.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            style={{
              x: card3X,
              y: card3Y,
              rotate: card3Rotate,
            }}
            className="will-change-transform overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
          >
            <img
              src={cards[2].image}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            style={{
              x: card4X,
              y: card4Y,
              rotate: card4Rotate,
            }}
            className="will-change-transform overflow-hidden rounded-[2rem] bg-[#1a1a1a] text-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="flex h-full flex-col justify-between p-8">

              <h2 className="font-serif text-5xl md:text-7xl">
                4.9
              </h2>

              <div>
                <h3 className="font-serif text-2xl md:text-3xl">
                  Client Rating
                </h3>

                <p className="mt-3 text-white/60">
                  Trusted by premium clients.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 5 */}
          <motion.div
            style={{
              y: card5Y,
              rotate: card5Rotate,
            }}
            className="will-change-transform overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
          >
            <img
              src={cards[4].image}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}