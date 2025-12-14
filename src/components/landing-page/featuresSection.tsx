"use client";
import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section className="w-full py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Learn */}
          <motion.div
            className="feature-item flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 mb-4 relative overflow-hidden rounded-lg">
              <motion.img
                src="/api/placeholder/200/200"
                alt="Learn Feature"
                className="w-full h-full object-cover bg-[#FF7A59]"
                animate={{
                  boxShadow: [
                    "0px 0px 0px rgba(0,0,0,0.1)",
                    "0px 8px 20px rgba(0,0,0,0.2)",
                    "0px 0px 0px rgba(0,0,0,0.1)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ x: -10, opacity: 0.7 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full"></div>
                </div>
              </motion.div>
            </div>
            <h3 className="text-2xl font-semibold tracking-wide text-darkest mb-1 text-center font-manrope">
              LEARN
            </h3>
            <p className="text-xl text-gray-500 text-center">Video Module</p>
          </motion.div>

          {/* Analyze */}
          <motion.div
            className="feature-item flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 mb-4 relative overflow-hidden rounded-lg">
              <motion.img
                src="/api/placeholder/200/200"
                alt="Analyze Feature"
                className="w-full h-full object-cover bg-[#FFA500]"
                animate={{
                  boxShadow: [
                    "0px 0px 0px rgba(0,0,0,0.1)",
                    "0px 8px 20px rgba(0,0,0,0.2)",
                    "0px 0px 0px rgba(0,0,0,0.1)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="w-14 h-14 bg-white bg-opacity-30 rounded-md flex items-center justify-center">
                  <div className="w-10 h-6 bg-[#2AAE66] bg-opacity-70 rounded-sm"></div>
                </div>
              </motion.div>
            </div>
            <h3 className="text-2xl font-semibold tracking-wide text-darkest mb-1 text-center font-manrope">
              ANALYZE
            </h3>
            <p className="text-xl text-gray-500 text-center">
              Interactive Dashboard
            </p>
          </motion.div>

          {/* Apply */}
          <motion.div
            className="feature-item flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 mb-4 relative overflow-hidden rounded-lg">
              <motion.img
                src="/api/placeholder/200/200"
                alt="Apply Feature"
                className="w-full h-full object-cover bg-[#FFC857]"
                animate={{
                  boxShadow: [
                    "0px 0px 0px rgba(0,0,0,0.1)",
                    "0px 8px 20px rgba(0,0,0,0.2)",
                    "0px 0px 0px rgba(0,0,0,0.1)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <div className="w-16 h-16 bg-[#38B6FF] bg-opacity-50 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full"></div>
                </div>
              </motion.div>
            </div>
            <h3 className="text-2xl font-semibold tracking-wide text-darkest mb-1 text-center font-manrope">
              APPLY
            </h3>
            <p className="text-xl text-gray-500 text-center">Mentorship Call</p>
          </motion.div>

          {/* Share */}
          <motion.div
            className="feature-item flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 mb-4 relative overflow-hidden rounded-lg">
              <motion.img
                src="/api/placeholder/200/200"
                alt="Share Feature"
                className="w-full h-full object-cover bg-[#A7D1EB]"
                animate={{
                  boxShadow: [
                    "0px 0px 0px rgba(0,0,0,0.1)",
                    "0px 8px 20px rgba(0,0,0,0.2)",
                    "0px 0px 0px rgba(0,0,0,0.1)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  y: [0, -5, 0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <div className="w-16 h-12 bg-[#E2F1FB] bg-opacity-70 rounded-md flex items-center justify-center">
                  <motion.div
                    className="w-10 h-2 bg-[#FFA500] rounded-full"
                    animate={{ width: ["10px", "14px", "10px"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  ></motion.div>
                </div>
              </motion.div>
            </div>
            <h3 className="text-2xl font-semibold tracking-wide text-darkest mb-1 text-center font-manrope">
              SHARE
            </h3>
            <p className="text-xl text-gray-500 text-center">Plugin Tool</p>
          </motion.div>

          {/* Grow */}
          <motion.div
            className="feature-item flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 mb-4 relative overflow-hidden rounded-lg">
              <motion.img
                src="/api/placeholder/200/200"
                alt="Grow Feature"
                className="w-full h-full object-cover bg-[#2AAE66]"
                animate={{
                  boxShadow: [
                    "0px 0px 0px rgba(0,0,0,0.1)",
                    "0px 8px 20px rgba(0,0,0,0.2)",
                    "0px 0px 0px rgba(0,0,0,0.1)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </div>
            <h3 className="text-2xl font-semibold tracking-wide text-darkest mb-1 text-center font-manrope">
              GROW
            </h3>
            <p className="text-xl text-gray-500 text-center">
              Private Community
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
