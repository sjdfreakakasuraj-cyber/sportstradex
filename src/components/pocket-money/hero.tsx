"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Facebook, MessageSquare } from "lucide-react";
import HeroImage from "@/assets/pocketMoney/hero-image.png";

export default function PocketMoneyHero() {
  // Animation variants for staggered children (matching landing page)
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

  // Background gradient animation (matching landing page)
  const gradientAnimation = {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  };

  // Button pulse animation variants (matching landing page)
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
      boxShadow: "0 10px 25px -5px rgba(200, 246, 93, 0.4)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative min-w-full bg-darkest overflow-hidden">
      {/* Animated Background Element (matching landing page) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        animate={gradientAnimation}
        style={{
          background:
            "linear-gradient(45deg, #0a2a2f 0%, #c8f65d 50%, #0a2a2f 100%)",
          backgroundSize: "200% 200%",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <section className="relative pt-20 md:pt-24 pb-20 md:pb-28 px-4 container mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Column - Text Content */}
          <motion.div className="space-y-6 lg:space-y-8 order-1 lg:order-1">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-manrope leading-tight"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block text-[#c8f65d]"
                animate={{
                  color: ["#c8f65d", "#d9ff90", "#c8f65d"],
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
                Pocket
              </motion.span>{" "}
              Money Program
              <br />
              <span className="text-[#c8f65d]">Share. Earn. Repeat.</span>
            </motion.h1>

            <motion.p
              className="text-white/80 text-lg max-w-md leading-relaxed"
              variants={itemVariants}
            >
              Get Paid ₹150 for Promoting SportsTradex on Social Media — No
              Skills Required!
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              variants={itemVariants}
            >
              <p className="w-full text-white/60 text-sm mb-2 tracking-wide font-medium">
                SHARE ON YOUR FAVORITE PLATFORMS
              </p>
              <motion.div
                className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-4 w-4 text-[#c8f65d]" />
                <span className="text-sm text-white">Instagram</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="h-4 w-4 text-[#c8f65d]" />
                <span className="text-sm text-white">Facebook</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="h-4 w-4 text-[#c8f65d]" />
                <span className="text-sm text-white">WhatsApp</span>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-white/80 text-xs max-w-md"
              variants={itemVariants}
            >
              If you&apos;ve got WhatsApp, Instagram, or Facebook — you&apos;re
              already eligible! We&apos;re inviting enthusiastic learners,
              sports fans, and digital explorers to help promote our educational
              platform.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              variants={itemVariants}
            >
              {/* Join Now Button with pulse animation (matching landing page) */}
              <motion.div
                className="relative inline-block overflow-hidden rounded-full"
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/pocket-money-signup"
                  className="inline-flex items-center gap-2 bg-[#c8f65d] text-[#0a2a2f] font-bold text-base md:text-lg px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:bg-[#c8f65d]/80 transition-colors duration-300"
                >
                  <span>Join Now</span>
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Link>
                {/* Pulsating effect layer */}
                <motion.span
                  className="absolute inset-0 rounded-full z-[-1]"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(200, 246, 93, 0.7)",
                      "0 0 0 10px rgba(200, 246, 93, 0)",
                      "0 0 0 0 rgba(200, 246, 93, 0)",
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
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative order-2 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              {/* Main Image Container with proper aspect ratio */}
              <motion.div
                className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                whileHover={{ y: -8 }}
              >
                <Image
                  src={HeroImage}
                  alt="Pocket Money Program"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 50vw"
                  className="object-contain"
                  priority
                />
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
          ></motion.path>
        </svg>
      </motion.div>
    </div>
  );
}
