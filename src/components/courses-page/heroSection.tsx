"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpenCheck } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  const headerRef = useRef<HTMLDivElement>(null);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Background gradient animation
  const gradientAnimation = {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  };

  // Subtle card hover animation
  const cardHoverAnimation = {
    scale: 1.03,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" },
  };

  return (
    <div className="relative min-w-full bg-[#0a2a2f] overflow-hidden">
      {/* Animated Background Element */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        animate={gradientAnimation}
        style={{
          background:
            "linear-gradient(45deg, #0a2a2f 0%, #228B22 50%, #0a2a2f 100%)",
          backgroundSize: "200% 200%",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <section className="relative p-28 px-4 overflow-hidden">
        <motion.div
          ref={headerRef}
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 font-manrope"
            variants={itemVariants}
          >
            <motion.span
              className="text-[#c8f65d] inline-block"
              animate={{
                color: ["#c8f65d", "#ADFF2F", "#c8f65d"],
                textShadow: [
                  "0 0 5px rgba(200, 246, 93, 0)",
                  "0 0 15px rgba(200, 246, 93, 0.5)",
                  "0 0 5px rgba(200, 246, 93, 0)",
                ],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Transform
            </motion.span>{" "}
            Your Sports Knowledge Into{" "}
            <motion.span
              className="text-[#c8f65d] inline-block"
              animate={{
                color: ["#c8f65d", "#ADFF2F", "#c8f65d"],
                textShadow: [
                  "0 0 5px rgba(200, 246, 93, 0)",
                  "0 0 15px rgba(200, 246, 93, 0.5)",
                  "0 0 5px rgba(200, 246, 93, 0)",
                ],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              Profitable Skills
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Our structured courses teach you the exact strategies to analyze
            odds, identify value, and make data-driven decisions that lead to
            consistent profits in sports trading.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 items-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="#courses"
                className="inline-flex items-center bg-[#c8f65d] text-[#0a2a2f] font-medium px-6 py-3 rounded-full hover:bg-[#c8f65d]/90 transition-colors duration-300 btn-hover-effect"
              >
                Explore Courses
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="#testimonials"
                className="inline-flex items-center gap-2 bg-transparent text-white px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors duration-300 btn-hover-effect"
              >
                <motion.div
                  className="bg-white rounded-full p-1"
                  animate={{ rotate: [0, 0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                >
                  <BookOpenCheck size={12} className="text-[#0a2a2f] ml-0.5" />
                </motion.div>
                Student Success Stories
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            variants={itemVariants}
          >
            {/* Stats Cards with Animations */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
              whileHover={cardHoverAnimation}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div
                className="text-[#c8f65d] font-bold text-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                10K+
              </motion.div>
              <div className="text-white/80 text-sm">Students</div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
              whileHover={cardHoverAnimation}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.div
                className="text-[#c8f65d] font-bold text-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                4.8
              </motion.div>
              <div className="text-white/80 text-sm">Average Rating</div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
              whileHover={cardHoverAnimation}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div
                className="text-[#c8f65d] font-bold text-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                3+
              </motion.div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
              whileHover={cardHoverAnimation}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.div
                className="text-[#c8f65d] font-bold text-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                85%
              </motion.div>
              <div className="text-white/80 text-sm">Success Rate</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Curved Bottom Edge */}
        <div
          className="absolute bottom-0 left-0 right-0 w-full h-16 md:h-24 lg:h-32 overflow-hidden"
          style={{ zIndex: 5 }}
        >
          <svg
            className="absolute bottom-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <motion.path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,90.7C672,107,768,117,864,112C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            ></motion.path>
          </svg>
        </div>
      </section>
    </div>
  );
}
