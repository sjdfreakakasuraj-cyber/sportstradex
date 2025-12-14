"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { TrendingUp, Clock, Award, ChevronRight } from "lucide-react";

export default function WhyUs() {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
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

  // Chart animation variants - modified for animated loading
  const barWithUsVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 140,
      opacity: 1,
      transition: {
        height: { duration: 1.2, ease: "easeOut" },
        opacity: { duration: 0.4 },
      },
    },
  };

  const barWithoutUsVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 35,
      opacity: 1,
      transition: {
        height: { duration: 0.6, ease: "easeOut", delay: 0.4 },
        opacity: { duration: 0.4, delay: 0.4 },
      },
    },
  };

  // Button pulse animation
  const buttonVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        scale: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(76, 225, 182, 0.4)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-24 bg-darkest relative overflow-hidden"
    >
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

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 font-manrope"
            variants={titleVariants}
            initial="hidden"
            animate={controls}
          >
            Why choose us?
          </motion.h2>

          <motion.p
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-manrope"
            variants={titleVariants}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            It{" "}
            <motion.span
              className="text-lighter font-serif italic"
              animate={{
                scale: [1, 1.1, 1],
                color: ["#4ce1b6", "#ADFF2F", "#4ce1b6"],
                textShadow: [
                  "0 0 5px rgba(76, 225, 182, 0)",
                  "0 0 15px rgba(76, 225, 182, 0.5)",
                  "0 0 5px rgba(76, 225, 182, 0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              works
            </motion.span>{" "}
            like crazy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Return Rate Card */}
          <motion.div
            className="bg-darker rounded-xl overflow-hidden relative group"
            variants={statVariants}
            custom={0}
            initial="hidden"
            animate={controls}
          >
            {/* Card gradient border */}
            <div className="absolute inset-0 p-0.5 rounded-xl bg-gradient-to-br from-lime-400 to-teal-500 opacity-70"></div>

            {/* Card content - improved text contrast */}
            <div className="relative bg-darker h-full rounded-xl p-6 border border-white/5 backdrop-blur-sm overflow-hidden group-hover:bg-darker/80 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full -mr-12 -mt-12 group-hover:bg-teal-500/20 transition-colors duration-300"></div>

              <div className="mb-6 relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-900/30 border border-teal-500/20 text-teal-400 mb-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Superior Results
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full mb-3"></div>
              </div>

              <div className="mb-6">
                <div className="flex items-end justify-start gap-1">
                  <motion.span
                    className="text-5xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    18
                  </motion.span>
                  <motion.span
                    className="text-3xl font-bold text-lime-400 mb-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    X
                  </motion.span>
                </div>
                <p className="text-white text-sm font-medium mt-2">
                  Higher return rate compared to industry standards
                </p>
              </div>

              <motion.div
                className="mt-auto"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center text-sm text-teal-300 font-medium">
                  <span>Learn our strategy</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Comparison Chart Card - with animated loading bar graph */}
          <motion.div
            className="bg-darker rounded-xl overflow-hidden relative group"
            variants={statVariants}
            custom={1}
            initial="hidden"
            animate={controls}
          >
            {/* Card gradient border */}
            <div className="absolute inset-0 p-0.5 rounded-xl bg-gradient-to-br from-lime-400 to-teal-500 opacity-70"></div>

            {/* Card content - improved text contrast */}
            <div className="relative bg-darker h-full rounded-xl p-6 border border-white/5 backdrop-blur-sm overflow-hidden group-hover:bg-darker/80 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 rounded-bl-full -mr-12 -mt-12 group-hover:bg-lime-500/20 transition-colors duration-300"></div>

              <div className="mb-6 relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-lime-900/30 border border-lime-500/20 text-lime-400 mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Success Rate
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full mb-3"></div>
              </div>

              <div className="flex justify-center items-end gap-6 h-[160px] mb-4">
                <div className="flex flex-col items-center">
                  <motion.div
                    className="relative w-24 bg-gradient-to-t from-lime-600 to-lime-500 rounded-lg flex items-center justify-center mb-3 shadow-lg"
                    variants={barWithUsVariants}
                    initial="hidden"
                    animate={controls}
                  >
                    <motion.p
                      className="text-white font-bold text-2xl drop-shadow-md"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      90%
                    </motion.p>
                  </motion.div>
                  <p className="text-sm font-medium text-white">With us</p>
                </div>

                <div className="flex flex-col items-center">
                  <motion.div
                    className="relative w-16 bg-gradient-to-t from-orange-700 to-orange-500 rounded-lg flex items-center justify-center mb-3 shadow-lg"
                    variants={barWithoutUsVariants}
                    initial="hidden"
                    animate={controls}
                  >
                    <motion.p
                      className="text-white font-bold text-lg drop-shadow-md"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6, duration: 0.5 }}
                    >
                      5%
                    </motion.p>
                  </motion.div>
                  <p className="text-sm font-medium text-white">Without us</p>
                </div>
              </div>

              <p className="text-white text-sm font-medium">
                Our students consistently achieve a 90% success rate compared to
                the industry average of only 5%
              </p>
            </div>
          </motion.div>

          {/* Payout Time Card */}
          <motion.div
            className="bg-darker rounded-xl overflow-hidden relative group"
            variants={statVariants}
            custom={2}
            initial="hidden"
            animate={controls}
          >
            {/* Card gradient border */}
            <div className="absolute inset-0 p-0.5 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500 opacity-50"></div>

            {/* Card content - improved text contrast */}
            <div className="relative bg-darker h-full rounded-xl p-6 border border-white/5 backdrop-blur-sm overflow-hidden group-hover:bg-darker/80 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-12 -mt-12 group-hover:bg-blue-500/20 transition-colors duration-300"></div>

              <div className="mb-6 relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-900/30 border border-blue-500/20 text-blue-400 mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Rapid Results
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mb-3"></div>
              </div>

              <div className="mb-6">
                <div className="flex items-center">
                  <motion.span
                    className="text-5xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    7
                  </motion.span>
                  <motion.span
                    className="text-2xl font-bold text-teal-300 ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    Days
                  </motion.span>
                </div>
                <p className="text-white text-sm font-medium mt-2">
                  Average time to receive your first payout after starting
                </p>
              </div>

              <div className="mt-6">
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-teal-400 to-blue-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "70%" }}
                    transition={{ delay: 2.5, duration: 1 }}
                  />
                </div>
                <div className="flex justify-between mt-1 text-xs text-white">
                  <span>Day 1</span>
                  <span>Day 7</span>
                  <span>Day 14</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          <motion.div
            className="relative inline-block overflow-hidden rounded-full"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
          >
            <button className="px-10 py-4 bg-gradient-to-r from-teal-500 to-lime-500 text-darker font-medium rounded-full shadow-lg transition-all duration-300 transform group">
              <div className="flex items-center justify-center">
                <span className="mr-2">Start your journey today</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <ChevronRight size={16} className="text-darker" />
                </div>
              </div>
            </button>
            {/* Pulsating effect layer */}
            <motion.span
              className="absolute inset-0 rounded-full z-[-1]"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(76, 225, 182, 0.7)",
                  "0 0 0 10px rgba(76, 225, 182, 0)",
                  "0 0 0 0 rgba(76, 225, 182, 0)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
