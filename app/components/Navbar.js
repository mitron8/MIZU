"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // hide while scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);

      // show navbar when scrolling stops
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setHidden(false);
      }, 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [lastScrollY]);

  const navLinks = [
    "HOME",
    "WORK",
    "ABOUT",
    "CONTACT",
  ];

  return (
    <>
      <AnimatePresence>
        {!hidden && (
          <motion.nav
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -120, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed top-0 left-0 z-50 flex w-full justify-center px-4 pt-4"
          >
            <div className="flex w-full max-w-7xl items-center justify-between rounded-[28px] border border-white/10 bg-black/70 px-6 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl md:px-8">
              
              {/* LOGO */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <h1 className="text-xl font-semibold tracking-tight text-white">
                  MIZU.
                </h1>
              </motion.div>

              {/* DESKTOP NAV */}
              <div className="hidden items-center gap-10 md:flex">
                {navLinks.map((item, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ y: -2 }}
                    className="group relative text-sm tracking-[0.2em] text-white/70 transition-colors hover:text-white"
                  >
                    {item}

                    <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
                  </motion.button>
                ))}
              </div>

              {/* RIGHT ACTIONS */}
              <div className="hidden items-center gap-3 md:flex">
                {/* CART */}
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    rotate: -8,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl"
                >
                  <ShoppingBag size={18} />
                </motion.button>

                {/* CTA */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all"
                >
                  BOOK A CALL

                  <motion.div
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <ArrowUpRight size={16} />
                  </motion.div>
                </motion.button>
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white md:hidden"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed top-24 left-4 right-4 z-40 rounded-[28px] border border-black/5 bg-white p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((item, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="border-b border-black/5 pb-4 text-left text-lg font-medium text-black"
                >
                  {item}
                </motion.button>
              ))}

              <button className="mt-4 rounded-full bg-black py-4 text-sm font-medium tracking-wide text-white">
                BOOK A CALL
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;