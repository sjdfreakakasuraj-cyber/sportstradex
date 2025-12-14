"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import Placeholder1 from "@/assets/experts/case-study-1.png";
import Placeholder2 from "@/assets/experts/case-study-2.png";

export default function GrowTogetherSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20 overflow-hidden bg-white"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative">
        {/* Left Image */}
        <motion.div
          className="w-full max-w-sm lg:max-w-none lg:w-[30%] relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          <div className="rounded-3xl overflow-hidden border-2 border-lime-400 shadow-lg transform -rotate-2 mx-auto">
            <Image
              src={Placeholder1}
              alt="Person writing and working"
              width={400}
              height={320}
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
              priority
            />
          </div>
        </motion.div>

        {/* Center Content */}
        <motion.div
          className="w-full lg:w-[40%] text-center px-4 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.1, ease: "easeOut" },
            },
          }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 tracking-tight leading-tight">
            Make you <span className="text-lime-500">grow</span>,
            <br />
            together<span className="text-gray-400">.</span>
          </h2>
          <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We believe in collaborative success through sports trading
            education. Our platform doesn&apos;t just provide information—it
            creates transformation. By combining data-driven strategies with
            personalized guidance, we empower you to make informed decisions and
            achieve consistent profits.
          </p>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 lg:mt-10"
          >
            <a
              href="#contact"
              className="inline-block px-8 sm:px-12 py-3 rounded-full bg-gradient-to-r from-lime-500 to-lime-700 text-white font-medium transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
            >
              Start Your Trading Journey
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full max-w-sm lg:max-w-none lg:w-[30%] relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          <div className="rounded-3xl overflow-hidden border-2 border-gray-800 shadow-lg transform rotate-2 mx-auto">
            <Image
              src={Placeholder2}
              alt="Person working on laptop"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
