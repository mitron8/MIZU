"use client";

import React from "react";
import { motion } from "framer-motion";

const links = [
  "Home",
  "Projects",
  "Services",
  "About",
  "Contact",
];

const socials = [
  "Instagram",
  "Behance",
  "Github",
  "Linkedin",
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0f0f0f] text-white overflow-hidden rounded-t-[40px]">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-10">
        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 border-b border-white/10 pb-16">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="uppercase tracking-[0.3em] text-sm text-white/50 mb-5"
            >
              Mizu Studio
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-[3rem] md:text-[5rem] lg:text-[7rem] leading-[0.95] tracking-tight font-medium max-w-4xl"
            >
              Let’s Build
              <br />
              Something Clean
            </motion.h2>
          </div>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-white text-black rounded-full px-7 py-4 flex items-center gap-4 hover:gap-6 transition-all duration-300"
          >
            <span className="font-medium">
              Start Project
            </span>

            <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition duration-300">
              ↗
            </span>
          </motion.button>
        </div>

        {/* Middle */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 py-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-5">
              Mizu
            </h3>

            <p className="text-white/50 leading-relaxed max-w-sm">
              Creating minimal digital experiences with
              smooth interaction and modern aesthetics.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-white/40 text-sm uppercase tracking-[0.2em] mb-5">
              Navigation
            </p>

            <div className="flex flex-col gap-4">
              {links.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="group flex items-center gap-2 text-lg hover:text-white/60 transition-all duration-300"
                >
                  <span>{item}</span>

                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-white/40 text-sm uppercase tracking-[0.2em] mb-5">
              Socials
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {socials.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-sm hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300"
                >
                  {item.charAt(0)}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-white/40 text-sm">
            © 2026 Mizu Studio. All rights reserved.
          </p>

          <p className="text-white/30 text-sm text-center">
            Designed & Developed with minimal motion.
          </p>
        </div>
      </div>

      {/* Big Background Text */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 0.04, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-[22vw] leading-none font-black tracking-[-0.08em] pointer-events-none select-none"
      >
        MIZU
      </motion.h1>
    </footer>
  );
};

export default Footer;