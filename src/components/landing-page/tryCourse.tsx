"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

import ImageOne from "@/assets/landing-page/try-course-1.png";
import ImageTwo from "@/assets/landing-page/try-course-2.png";

export default function TryCourse() {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: ImageOne,
      alt: "Course material image 1",
      badge1: {
        text: "BEST SELLER",
        bg: "bg-white",
      },
      badge2: {
        text: "TRENDING",
        bg: "bg-[#4ce1b6]",
      },
    },
    {
      src: ImageTwo,
      alt: "Course material image 2",
      badge1: {
        text: "HOT PICK",
        bg: "bg-yellow-400",
      },
      badge2: {
        text: "TOP RATED",
        bg: "bg-blue-500",
      },
    },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Image carousel effect with longer interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 7000); // Increased from 5000 to 7000 ms

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 3,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  // Enhanced image transition
  const imageTransition = {
    enter: { opacity: 0, scale: 0.95, y: 10 },
    center: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -5,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  // Enhanced float animation
  const floatAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [-8, 8, -8],
      transition: {
        repeat: Infinity,
        duration: 6,
        ease: "easeInOut",
      },
    },
  };

  // Button variants with pulse effect
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

  // Background gradient animation
  const gradientAnimation = {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  };

  return (
    <section
      ref={sectionRef}
      className="text-white overflow-hidden relative bg-darkest"
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

      <div className="container px-4 py-12 mx-auto md:py-18 relative z-10">
        <motion.div
          className="grid items-center gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="space-y-6">
            <motion.h1
              className="text-4xl font-extrabold md:text-5xl lg:text-6xl font-manrope"
              variants={itemVariants}
            >
              Try Our Course 100% <br />
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
                Risk-Free
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-white/80 text-lg max-w-md"
              variants={itemVariants}
            >
              No contracts. No commitments. Guaranteed results.
              <span className="text-sm align-super ml-1">*</span>
            </motion.p>

            <motion.div
              className="flex items-center gap-4 flex-wrap"
              variants={itemVariants}
            >
              {/* Themed button with pulsating effect */}
              <div className="inline-block">
                <motion.div
                  className="relative inline-block overflow-hidden rounded-full"
                  variants={buttonVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    className="bg-lighter text-darkest font-medium px-8 py-6 rounded-full hover:bg-lighter/90 transition-colors duration-300 text-base"
                    size="lg"
                  >
                    Get Started
                  </Button>
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
              </div>

              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex">
                  {/* 4 Full stars with staggered animation */}
                  {[...Array(4)].map((_, i) => (
                    <motion.svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#4ce1b6"
                      stroke="#4ce1b6"
                      className="w-5 h-5"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + i * 0.1, duration: 0.3 }}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </motion.svg>
                  ))}
                  {/* Partial star (70% filled) with animation */}
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.3 }}
                  >
                    <defs>
                      <linearGradient id="partialFill">
                        <stop offset="70%" stopColor="#4ce1b6" />
                        <stop offset="70%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      fill="url(#partialFill)"
                      stroke="#4ce1b6"
                    />
                  </motion.svg>
                </div>
                <motion.span
                  className="text-sm font-medium text-white/90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  4.7 Rating (800+ Reviews)
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.p className="text-white/50 text-xs" variants={itemVariants}>
              * for serious learners with verified ₹5 Lakh+ annual income.
            </motion.p>
          </div>

          {/* Enhanced Image Container */}
          <div className="flex justify-center md:justify-end">
            <motion.div
              className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]"
              variants={imageVariants}
              animate={controls}
            >
              {/* Improved Float Animation */}
              <motion.div
                variants={floatAnimation}
                animate="visible"
                className="transform rotate-3 w-full h-full"
              >
                {/* Added shadow effect for better depth */}
                <div className="relative rounded-xl overflow-hidden backdrop-blur-sm">
                  <AnimatePresence mode="sync">
                    <motion.div
                      key={currentImage}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      variants={imageTransition}
                      className="relative w-full h-full"
                    >
                      {/* Improved Image Container */}
                      <div className="w-full h-full relative bg-darker/20 backdrop-blur-sm rounded-xl overflow-hidden">
                        {/* Use a placeholder image instead of the imported images */}
                        <Image
                          src={images[currentImage].src}
                          alt={images[currentImage].alt}
                          className="w-full h-full object-contain p-2 drop-shadow-xl"
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Enhanced Badges with better positioning */}
                <AnimatePresence mode="sync">
                  <motion.div
                    key={`badge1-${currentImage}`}
                    className={`absolute -top-4 -right-4 w-16 h-16 ${images[currentImage].badge1.bg} rounded-full flex items-center justify-center shadow-lg`}
                    initial={{ opacity: 0, scale: 0, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: 45 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    }}
                  >
                    <span className="text-darkest text-xs font-bold text-center">
                      {images[currentImage].badge1.text}
                    </span>
                  </motion.div>

                  <motion.div
                    key={`badge2-${currentImage}`}
                    className={`absolute -bottom-2 -left-2 w-20 h-20 ${images[currentImage].badge2.bg} rounded-full flex items-center justify-center shadow-lg`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    }}
                  >
                    <span className="text-darker text-xs font-bold text-center">
                      {images[currentImage].badge2.text}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
