"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Tape() {
  const [, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sports = [
    "Free Blueprint",
    "Game Analyzer",
    "Match Flow",
    "Risk Control",
    "Pro Metrics",
    "Strategy Hub",
    "Live Tracker",
    "Edge Alerts",
    "Skill System",
    "Clutch Index",
    "Market Map",
    "Win Signals",
    "Smart Models",
  ];

  return (
    <section className="pb-6 pt-5 bg-gradient-to-b from-white to-zinc-50 overflow-hidden relative">
      {/* Gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-36 lg:w-48 bg-gradient-to-r from-zinc-50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-36 lg:w-48 bg-gradient-to-l from-zinc-50 to-transparent z-10" />

      {/* Section title */}
      <div className="container mx-auto mb-8 px-4 relative z-20">
        <h3 className="text-center text-zinc-400 uppercase tracking-wider font-extrabold font-manrope">
          Trading Markets
        </h3>
      </div>

      <div className="flex overflow-hidden">
        {/* First marquee - scrolling to the left */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -100 * sports.length * 15], // Large negative value based on content width
          }}
          transition={{
            duration: 75,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ willChange: "transform" }}
        >
          {/* Generate many copies to ensure we never run out */}
          {Array(10)
            .fill(0)
            .map((_, copyIndex) =>
              sports.map((sport, idx) => (
                <div
                  key={`item-${copyIndex}-${idx}`}
                  className="flex items-center"
                >
                  <span
                    className="text-5xl md:text-6xl lg:text-7xl px-4 font-bold"
                    style={{
                      color: idx % 2 === 0 ? "#228B22" : "#ADFF2F",
                    }}
                  >
                    {sport}
                  </span>
                  <span className="text-3xl text-zinc-300 flex items-center justify-center w-8">
                    •
                  </span>
                </div>
              ))
            )}
        </motion.div>
      </div>
    </section>
  );
}
