"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Percent } from "lucide-react";

export default function AffiliateHeroSection() {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
        duration: 0.5,
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

  // Button variants
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
      boxShadow: "0 10px 25px -5px rgba(173, 255, 47, 0.4)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative min-w-full bg-[#0a2a2f] text-white overflow-hidden">
      {/* Animated Background Element */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        animate={gradientAnimation}
        style={{
          background:
            "linear-gradient(45deg, #0a2a2f 0%, #ADFF2F 50%, #0a2a2f 100%)",
          backgroundSize: "200% 200%",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#ADFF2F]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                filter: "blur(60px)",
              }}
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <section className="relative pt-20 md:pt-24 pb-14 md:pb-24 px-4 lg:px-6 container mx-auto z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Column - Text Content */}
          <motion.div
            className="max-w-xl space-y-6 lg:space-y-8"
            variants={itemVariants}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="inline-block bg-[#ADFF2F]/20 px-4 py-2 rounded-full mb-4 backdrop-blur-sm border border-[#ADFF2F]/30">
                <span className="text-[#ADFF2F] font-semibold text-sm md:text-base">
                  India&apos;s #1 Sports Trading Affiliate Program
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-manrope leading-tight tracking-tight"
              variants={itemVariants}
            >
              Join the SportsTradex{" "}
              <motion.span
                className="text-[#ADFF2F] inline-block"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(173, 255, 47, 0)",
                    "0 0 15px rgba(173, 255, 47, 0.5)",
                    "0 0 5px rgba(173, 255, 47, 0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Affiliate Program
              </motion.span>
            </motion.h1>

            <motion.div className="space-y-4" variants={itemVariants}>
              <p className="text-xl md:text-2xl text-white font-medium">
                Start Earning ₹₹₹ Online — Without Investment, Without Risk,
                Without Limits
              </p>
              <p className="text-lg text-white/80">
                Your Journey to a 6-Figure Online Income Starts Here
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
              variants={itemVariants}
            >
              {/* Apply Now Button */}
              <motion.div
                className="relative inline-block overflow-hidden rounded-full w-fit"
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
              >
                <button className="inline-flex items-center gap-2 bg-[#ADFF2F] text-[#0a2a2f] font-bold px-8 py-4 rounded-full hover:bg-[#9AE234] transition-colors duration-300 text-lg group">
                  Apply Now
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                {/* Pulsating effect layer */}
                <motion.span
                  className="absolute inset-0 rounded-full z-[-1]"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(173, 255, 47, 0.7)",
                      "0 0 0 10px rgba(173, 255, 47, 0)",
                      "0 0 0 0 rgba(173, 255, 47, 0)",
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
                className="w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg backdrop-blur-sm">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Commission Card */}
          <motion.div
            className="relative mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <div className="bg-[#0a2a2f]/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-[0_0_40px_rgba(173,255,47,0.15)] relative overflow-hidden">
              {/* Animated border effect */}
              <motion.div
                className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ADFF2F]/70 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ADFF2F]/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ADFF2F]/5 rounded-full -ml-16 -mb-16 blur-xl"></div>

              {/* Commission Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <motion.div
                    className="bg-[#ADFF2F] rounded-full p-3"
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Percent className="h-6 w-6 text-[#0a2a2f]" />
                  </motion.div>
                  <motion.span
                    className="ml-4 text-3xl md:text-4xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    15%
                  </motion.span>
                </div>
                <div className="text-right">
                  <span className="block text-sm text-white/60 uppercase tracking-wide">
                    Lifetime Commission
                  </span>
                  <span className="block text-lg font-semibold text-white">
                    On All Profits
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {[
                  "Zero Investment Required",
                  "Real-Time Affiliate Dashboard",
                  "Free Expert Training & Client Blueprint",
                  "Instant Withdrawals – UPI, Bank, PayPal, or Crypto",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#ADFF2F] mr-3 flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Curved Bottom Edge */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 md:h-24 lg:h-32 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.0 }}
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
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
