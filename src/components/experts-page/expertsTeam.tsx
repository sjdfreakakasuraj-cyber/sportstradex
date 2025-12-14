"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StatItem {
  id: number;
  value: string;
  description: string;
  highlight?: boolean;
}

export default function ExpertTeamSection() {
  const [activeStatIndex, setActiveStatIndex] = useState(1);
  const [autoRotate, setAutoRotate] = useState(true);

  const stats: StatItem[] = [
    {
      id: 0,
      value: "₹3.7 Cr+",
      description: "Total Value Analyzed & Engineered",
    },
    {
      id: 1,
      value: "0.3%",
      description: "Of Global Sports Trade Volume Handled",
      highlight: true,
    },
    {
      id: 2,
      value: "30+",
      description: "Elite Analysts, AI Architects & Mentors",
    },
    {
      id: 3,
      value: "25+",
      description: "Partnered Local & Global Platforms",
    },
    {
      id: 4,
      value: "Since 2017",
      description: "Built by Sports & Data Natives",
    },
    {
      id: 5,
      value: "1,200+",
      description: "Intelligent Trading Scenarios Built",
    },
    {
      id: 6,
      value: "24/7",
      description: "Real-time Market Intelligence Flow",
    },
    {
      id: 7,
      value: "12 million+",
      description: "Decisions Optimized by Our Systems",
    },
  ];

  // Auto-rotate active stat every 3 seconds
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setActiveStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoRotate, stats.length]);

  // Pause auto-rotation for 10 seconds when user clicks a stat
  const handleStatClick = (index: number) => {
    setActiveStatIndex(index);
    setAutoRotate(false);

    // Resume auto-rotation after 10 seconds
    setTimeout(() => {
      setAutoRotate(true);
    }, 10000);
  };

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

      <section className="relative py-20 md:py-24 px-4 container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-white mb-4 md:mb-6 font-manrope"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our{" "}
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
              Experts
            </motion.span>{" "}
            Team
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            At SportsTradex we handpick our experts from the best trading teams
            in the world. We are a team of traders, developers, and data
            scientists with a passion for sports and trading.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden shadow-xl relative z-10"
          style={{
            boxShadow: "0 0 30px rgba(76, 225, 182, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className={`relative cursor-pointer p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center text-center min-h-[160px] md:min-h-[180px] backdrop-blur-sm ${
                index === activeStatIndex
                  ? "bg-[#0a2a2f]/90"
                  : "bg-[#0a0a0a]/90 hover:bg-[#0a2a2f]/70"
              }`}
              onClick={() => handleStatClick(index)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              variants={itemVariants}
            >
              <AnimatePresence mode="wait">
                {index === activeStatIndex && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#228B22]/20 to-[#ADFF2F]/20 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>

              <motion.div>
                <motion.h3
                  className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 ${
                    index === activeStatIndex ? "text-[#ADFF2F]" : "text-white"
                  }`}
                  whileHover={{
                    textShadow: "0 0 8px rgba(173, 255, 47, 0.6)",
                  }}
                >
                  {stat.value}
                </motion.h3>
                <motion.p className="text-xs md:text-sm text-white/60">
                  {stat.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Badge */}
        <motion.div
          className="mt-8 mx-auto w-max bg-[#0a2a2f] text-white px-6 py-3 rounded-full border border-white/20 shadow-lg hidden md:flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 20px rgba(76, 225, 182, 0.4)" 
          }}
          style={{
            backdropFilter: "blur(10px)",
          }}
        >
          <motion.span 
            className="h-3 w-3 bg-[#ADFF2F] rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <span className="text-sm font-medium">
            Our experts are available 24/7 for consultations
          </span>
        </motion.div>
      </section>

      {/* Curved Bottom Edge */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 md:h-24 lg:h-32 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
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
      </motion.div>
    </div>
  );
}