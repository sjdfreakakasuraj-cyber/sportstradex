"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Image1 from "@/assets/reviews/1.png";
import Image2 from "@/assets/reviews/2.png";
import Image3 from "@/assets/reviews/3.png";
import Image4 from "@/assets/reviews/4.png";
import Image5 from "@/assets/reviews/5.png";
import Image6 from "@/assets/reviews/6.png";
import Image7 from "@/assets/reviews/7.png";

export const topRowImages = [Image1, Image2, Image3, Image4];
export const bottomRowImages = [Image5, Image6, Image7];

export default function WelcomeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Adjusted transforms for better visibility
  const topRowX = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const bottomRowX = useTransform(scrollYProgress, [0, 1], [-100, 200]);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden py-10 md:py-20 lg:py-28 bg-white"
    >
      <div className="container mx-auto px-4 text-center mb-12 md:mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 font-manrope">
          Experience
          <br />
          Welcome
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          A webinar platform designed for traders to host jaw-dropping
          experiences that drive revenue.
        </p>
        <button className="bg-lime-500 hover:bg-lime-500/75 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
          Request a demo
        </button>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Top row - starts slightly right, moves left */}
        <motion.div
          style={{ x: topRowX }}
          className="flex gap-4 md:gap-6 mb-4 md:mb-6 justify-center"
        >
          {topRowImages.map((src, idx) => (
            <div
              key={`top-${idx}`}
              className="relative w-[280px] md:w-[350px] lg:w-[420px] flex-shrink-0 rounded-2xl overflow-hidden border-2 border-lime-400 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={src}
                alt={`Chat conversation ${idx + 1}`}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 280px, (max-width: 1200px) 350px, 420px"
              />
            </div>
          ))}
        </motion.div>

        {/* Bottom row - starts slightly left, moves right */}
        <motion.div
          style={{ x: bottomRowX }}
          className="flex gap-4 md:gap-6 justify-center"
        >
          {bottomRowImages.map((src, idx) => (
            <div
              key={`bottom-${idx}`}
              className="relative w-[280px] md:w-[350px] lg:w-[420px] flex-shrink-0 rounded-2xl overflow-hidden border-2 border-lime-400 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={src}
                alt={`Chat conversation ${idx + 5}`}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 280px, (max-width: 1200px) 350px, 420px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
