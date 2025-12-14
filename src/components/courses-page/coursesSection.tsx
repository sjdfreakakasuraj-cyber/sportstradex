"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import One from "@/assets/courses/1st card.png";
import Two from "@/assets/courses/2nd card.png";
import Third from "@/assets/courses/3rd card.png";
import Fourth from "@/assets/courses/4th card.png";

export default function CoursesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Pulse animation for the arrow icon
  const pulseAnimation = {
    pulse: {
      scale: [1, 1.15, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
      },
    },
  };

  const courses = [
    {
      title: "Free Blueprint Course",
      price: "100% Free",
      description: "For All Beginners - No credit card required",
      features: [
        "The Science of Sports Trading",
        "Indian Market Sports Trading Blueprint",
        "Sports Trading vs Stock Trading",
      ],
      background: "bg-gray-100",
      titleHighlight: true,
      imageUrl: One,
    },
    {
      title: "Pro Learner Plan",
      price: "₹799/month",
      description: "For fantasy pros & aspiring analysts",
      features: [
        "Advanced Modules 4-7",
        "Live Tools Access",
        "2 Mentorship Calls/Month",
      ],
      background: "bg-lime-300",
      titleHighlight: true,
      imageUrl: Two,
    },
    {
      title: "Expert Suite",
      price: "₹1,999/month",
      description: "For consultants & community leaders",
      features: [
        "All Modules & Premium Guides",
        "Advanced Trading Tools",
        "Community Monetization",
      ],
      background: "bg-black text-white",
      titleHighlight: false,
      imageUrl: Third,
    },
    {
      title: "Annual Elite Plan",
      price: "₹14,999/year",
      description: "All access + early release courses",
      features: [
        "Exclusive Early Access Content",
        "Mentorship",
        "Resale Rights for Affiliates",
      ],
      background: "bg-gray-100",
      titleHighlight: true,
      imageUrl: Fourth,
    },
  ];

  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold inline-block">
            <span className="bg-lighter px-2 py-1 font-manrope">
              Course Plans
            </span>
          </h2>
          <p className="text-lg max-w-3xl">
            Our comprehensive sports trading courses are designed to help you
            master the skill of sports analysis and trading. Choose from our
            range of plans to fit your experience level and goals:
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className={`rounded-3xl p-6 ${course.background} relative overflow-hidden h-full`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    delay: 0.1 * index,
                  },
                },
              }}
            >
              <div className="flex flex-col h-full justify-between space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">
                      {course.titleHighlight ? (
                        <span
                          className={
                            course.background === "bg-lime-300"
                              ? "bg-black text-white px-2 py-1"
                              : "bg-lime-300 px-2 py-1"
                          }
                        >
                          {course.title}
                        </span>
                      ) : (
                        course.title
                      )}
                    </h3>
                    <span className="font-bold text-lg">{course.price}</span>
                  </div>
                  <p className="text-sm mb-4">{course.description}</p>

                  {/* Improved Image Container */}
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-4">
                    {course.imageUrl ? (
                      <Image
                        src={course.imageUrl}
                        alt={`${course.title} illustration`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                        priority
                      />
                    ) : (
                      <div
                        className={`w-full h-full flex items-center justify-center ${
                          course.background === "bg-black text-white"
                            ? "bg-gray-800"
                            : "bg-gray-200"
                        }`}
                      >
                        <svg
                          width="140"
                          height="140"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-40 h-40 ${
                            course.background === "bg-black text-white"
                              ? "text-blue-400"
                              : "text-blue-500"
                          }`}
                        >
                          <rect
                            x="25"
                            y="35"
                            width="50"
                            height="35"
                            rx="3"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="8"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                          <line
                            x1="25"
                            y1="45"
                            x2="75"
                            y2="45"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <line
                            x1="42"
                            y1="35"
                            x2="42"
                            y2="70"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <line
                            x1="58"
                            y1="35"
                            x2="58"
                            y2="70"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M20 75 L30 75 L25 85 Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="currentColor"
                          />
                          <path
                            d="M70 75 L80 75 L75 85 Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 my-4">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  className="flex items-center space-x-2 group mt-4 cursor-pointer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial="initial"
                  animate="visible"
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
                    variants={pulseAnimation}
                    animate="pulse"
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                  <motion.span
                    className="font-medium"
                    whileHover={{
                      textDecoration: "underline",
                      transition: { duration: 0.2 },
                    }}
                  >
                    Enroll now
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
