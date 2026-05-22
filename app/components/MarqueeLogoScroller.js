"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MarqueeLogoScroller() {
  // LOGOS
  const logos = [
    {
      src: "https://cdn.simpleicons.org/react",
      alt: "React",
      gradient: {
        from: "#61DAFB",
        via: "#0EA5E9",
        to: "#2563EB",
      },
    },
    {
      src: "https://cdn.simpleicons.org/nextdotjs",
      alt: "Next.js",
      gradient: {
        from: "#111111",
        via: "#333333",
        to: "#666666",
      },
    },
    {
      src: "https://cdn.simpleicons.org/framer",
      alt: "Framer",
      gradient: {
        from: "#0055FF",
        via: "#7B61FF",
        to: "#00D1FF",
      },
    },
    {
      src: "https://cdn.simpleicons.org/figma",
      alt: "Figma",
      gradient: {
        from: "#F24E1E",
        via: "#A259FF",
        to: "#1ABCFE",
      },
    },
    {
      src: "https://cdn.simpleicons.org/tailwindcss",
      alt: "Tailwind",
      gradient: {
        from: "#06B6D4",
        via: "#0EA5E9",
        to: "#2563EB",
      },
    },
  ];

  return (
    <>
      {/* KEYFRAMES */}
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <section className="relative w-full overflow-hidden bg-[#f7f4ef] py-20 md:py-28">
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_60%)]" />

        {/* HEADER */}
        <div className="mx-auto mb-16 flex max-w-7xl flex-col gap-8 px-6 md:px-10 lg:flex-row lg:items-end lg:justify-between">
          
          {/* LEFT */}
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
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-neutral-500">
              Trusted Technologies
            </p>

            <h2 className="text-4xl font-light leading-[1] tracking-tight text-black md:text-6xl">
              Technologies We Use
            </h2>
          </motion.div>

          {/* RIGHT */}
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
              delay: 0.1,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-lg text-base leading-relaxed text-neutral-600"
          >
            Modern tools and technologies powering immersive digital
            experiences and premium interfaces.
          </motion.p>
        </div>

        {/* MARQUEE */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* TRACK */}
          <div
            className="flex w-max items-center gap-6 py-6 hover:[animation-play-state:paused]"
            style={{
              animation: "marquee 30s linear infinite",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 18,
                }}
                className="group relative flex h-[120px] w-[220px] shrink-0 items-center justify-center overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
              >
                {/* GRADIENT BACKGROUND */}
                <div
                  style={{
                    background: `linear-gradient(135deg, ${logo.gradient.from}, ${logo.gradient.via}, ${logo.gradient.to})`,
                  }}
                  className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
                >
                  <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
                </div>

                {/* GRID EFFECT */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* LOGO */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="relative z-10 h-14 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                />

                {/* SHINE EFFECT */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute left-[-100%] top-0 h-full w-[60%] rotate-12 bg-white/30 blur-3xl transition-all duration-1000 group-hover:left-[120%]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}