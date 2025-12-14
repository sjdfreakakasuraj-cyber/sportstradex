"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Bell, Star, HeadphonesIcon } from "lucide-react";
import ExpertsOne from "@/assets/experts/experts-1.png";
import ExpertsTwo from "@/assets/experts/experts-2.png";
import ExpertsThree from "@/assets/experts/experts-3.png";
import ExpertsFour from "@/assets/experts/experts-4.png";
import ExpertsFifth from "@/assets/experts/experts-5.png";
import ExpertTeam from "@/assets/experts/expertsteam.png";

const categories = [
  {
    id: "01",
    title: "Sharique Khan",
    image: ExpertsOne,
  },
  {
    id: "02",
    title: "Kapil Gupta",
    image: ExpertsTwo,
  },
  {
    id: "03",
    title: "Neha Kapoor",
    image: ExpertsThree,
  },
  {
    id: "04",
    title: "Sana Iqbal",
    image: ExpertsFour,
  },
  {
    id: "05",
    title: "Arun Didwania",
    image: ExpertsFifth,
  },
];

const features = [
  {
    icon: <Zap className="w-5 h-5 text-yellow-400" />,
    text: "Quick and easy onboarding",
  },
  {
    icon: <Bell className="w-5 h-5 text-blue-400" />,
    text: "Live updates on stats",
  },
  {
    icon: <Star className="w-5 h-5 text-green-400" />,
    text: "Highly rated courses",
  },
  {
    icon: <HeadphonesIcon className="w-5 h-5 text-pink-400" />,
    text: "24/7 support for customers",
  },
];

export default function ExploreExperts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const allFeatures = [...features];

  const nextCategory = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };

  const prevCategory = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

  // Auto-rotate categories
  useEffect(() => {
    const interval = setInterval(() => {
      nextCategory();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <>
      <div className="max-w-full">
        <section className="relative bg-white py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
          <motion.button
            onClick={prevCategory}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={18} />
          </motion.button>
          <motion.button
            onClick={nextCategory}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={18} />
          </motion.button>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
              Explore Our Team
            </h2>

            <div className="relative h-64 md:h-80 flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute w-full flex justify-center"
                >
                  <Image
                    src={categories[activeIndex].image || "/placeholder.svg"}
                    alt={categories[activeIndex].title}
                    className="object-contain w-[225px] h-[225px] md:w-[360px] md:h-[360px]"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center items-center gap-2 mt-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`relative rounded-full flex items-center justify-center ${
                    activeIndex === index
                      ? "bg-black text-white w-10 h-10"
                      : "bg-black/10 hover:bg-black/20 w-8 h-8"
                  } transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs font-medium">{category.id}</span>
                  {activeIndex === index && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-black"
                      layoutId="activeDot"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
              <motion.button
                onClick={nextCategory}
                className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center ml-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </section>
        <section className="bg-emerald-800 text-white py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                >
                  SportsTradex has
                  <br />
                  you covered
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative w-50 h-32"
                >
                  <Image
                    src={ExpertTeam}
                    alt="Expert Team"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <p className="text-lg">
                  SportsTradex is your one-stop destination for all your sports
                  needs. Whether you&apos;re a fan of cricket, football, tennis,
                  or poker, we&apos;ve got you covered with the best courses and
                  resources to enhance your skills and knowledge.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="bg-emerald-800 text-white py-6 px-4 md:px-8 lg:px-16 border-t border-emerald-700 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative">
            {/* Marquee container */}
            <div className="overflow-hidden relative">
              <div className="marquee flex space-x-4 md:space-x-8 py-2">
                {allFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 bg-emerald-700/30 px-4 py-2 rounded-full whitespace-nowrap flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: Math.min(index * 0.05, 0.5),
                      duration: 0.3,
                    }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900">
                      {feature.icon}
                    </div>
                    <span className="text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
