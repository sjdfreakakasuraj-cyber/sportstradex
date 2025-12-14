"use client";

import Image from "next/image";
import Link from "next/link";
import { ChartNoAxesCombined } from "lucide-react";
import { motion } from "framer-motion";
import HeroImage from "@/assets/landing-page/hero-character.png";

export default function HeroSection() {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Faster stagger for quicker loading
        delayChildren: 0.2, // Reduced delay for faster appearance
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
        duration: 0.5, // Slightly faster animations
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

  // Button pulse animation variants (copied from tryCourse)
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
    <div className="relative min-w-full bg-darkest overflow-hidden">
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

      <section className="relative pt-20 md:pt-24 pb-14 md:pb-24 px-4 lg:px-6 container mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Column - Text Content */}
          <motion.div className="space-y-6 lg:space-y-8">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-white font-manrope leading-tight"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block"
                animate={{
                  color: ["#228B22", "#ADFF2F", "#228B22"],
                  textShadow: [
                    "0 0 5px rgba(76, 225, 182, 0)",
                    "0 0 15px rgba(76, 225, 182, 0.5)",
                    "0 0 5px rgba(76, 225, 182, 0)",
                  ],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Master
              </motion.span>{" "}
              The Science Of
              <br />
              Sports Trading
            </motion.h1>

            <motion.p
              className="text-white/80 text-lg max-w-md leading-relaxed"
              variants={itemVariants}
            >
              Join India&apos;s first structured, skill-based sports trading
              course from industry level experts and start earning now!
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              variants={itemVariants}
            >
              {/* Free Course Button with pulse animation */}
              <motion.div
                className="relative inline-block overflow-hidden rounded-full"
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/account"
                  className="inline-block bg-lighter text-darker font-medium px-6 py-3 rounded-full hover:bg-lighter/75 transition-colors duration-300"
                >
                  Free Course
                </Link>
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

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="/tutorial"
                  className="inline-flex items-center gap-2 bg-[#0a2a2f] text-white px-6 py-3 rounded-full border border-white/20 hover:bg-lighter/25 transition-colors duration-300"
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
                    <ChartNoAxesCombined
                      size={15}
                      className="text-[#0a2a2f] ml-0.5"
                    />
                  </motion.div>
                  Start Trading
                </Link>
              </motion.div>
            </motion.div>

            <motion.div className="pt-2" variants={itemVariants}>
              <p className="text-white/60 text-sm mb-4 tracking-wide font-medium">
                TRUSTED BY THE BEST
              </p>
              <motion.div
                className="flex flex-wrap items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }} // Faster animation
              >
                {/* Redesigned logos to look more like actual logos rather than buttons */}
                <motion.div
                  className="text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 0.7,
                    duration: 0.3,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center font-semibold text-white text-lg tracking-wide">
                    <span className=" text-[#4ce1b6] ">Fin</span>
                    ology
                  </div>
                </motion.div>

                <motion.div
                  className="text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 0.8,
                    duration: 0.3,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center font-semibold text-lg tracking-wide text-white">
                    <span className=" text-[#279e27] ">NSE</span> Academy
                  </div>
                </motion.div>

                <motion.div
                  className="text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 0.9,
                    duration: 0.3,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center text-lg tracking-wide font-semibold text-white">
                    <span className=" text-[#ADFF2F] ">Trading</span>
                    View
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image and Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }} // Reduced x offset for faster loading
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} // Faster animation
          >
            <div className="relative h-[400px] md:h-[450px] lg:h-[500px] w-full">
              {/* Main Image - Updated for better responsiveness */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }} // Faster transition
              >
                <motion.div
                  className="relative h-full w-full rounded-xl overflow-hidden"
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                >
                  <Image
                    src={HeroImage}
                    alt="Person using SportsTradeX"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                    priority
                    style={{
                      maxWidth: "100%",
                      objectPosition: "center",
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Curved Bottom Edge */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 md:h-24 lg:h-32 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.0 }} // Faster animation
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
            initial={{ y: 30 }} // Reduced y offset for faster loading
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }} // Faster animation
          ></motion.path>
        </svg>
      </motion.div>
    </div>
  );
}
