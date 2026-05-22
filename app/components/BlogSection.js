"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const blogs = [
  {
    id: 1,
    category: "Design",
    date: "Dec 12, 2025",
    title: "3 Simple Ways to Choose the Right Creative Team",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Managing",
    date: "Dec 12, 2025",
    title:
      "Why Simpler Is Always Better: The Secret to High-Impact Branding",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Branding",
    date: "Dec 12, 2025",
    title: "Stop Guessing: Get Great Design That Works!",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section className="w-full bg-[#f5f5f3] py-20 px-5 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-14">
          {/* Left Small Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-6 h-[2px] bg-red-500" />
            <button className="border border-black/20 rounded-full px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300">
              OUR BLOGS
            </button>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight max-w-4xl">
              See What We're Building
              <br />
              News & Inspiration
            </h2>
          </motion.div>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black text-white rounded-full px-7 py-3 flex items-center gap-5 w-fit hover:scale-[1.02] transition-all duration-300"
          >
            <span className="text-sm md:text-base">
              Browse All Blogs
            </span>

            <span className="bg-white text-black rounded-full p-2">
              <ArrowUpRight size={18} />
            </span>
          </motion.button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-[28px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mt-5">
                <div className="bg-white rounded-xl px-4 py-2 flex items-center gap-4 shadow-sm">
                  <span className="text-sm text-black/70">
                    {blog.category}
                  </span>

                  <ArrowRight
                    size={15}
                    className="text-red-500"
                  />

                  <span className="text-sm text-black/70">
                    {blog.date}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-[2rem] leading-tight font-medium mt-5 max-w-md group-hover:translate-x-1 transition-transform duration-300">
                {blog.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;