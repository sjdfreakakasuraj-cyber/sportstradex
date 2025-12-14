"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import StepOne from "@/assets/pocketMoney/step-1.png";
import StepTwo from "@/assets/pocketMoney/step-2.png";
import StepThree from "@/assets/pocketMoney/step-3.png";

// Define the step data structure
interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  image: StaticImageData;
}

// Sample data with actual images
const steps: Step[] = [
  {
    id: "signup",
    number: "01",
    title: "Sign Up & Access Your Promo Dashboard",
    description:
      'Click "Join Now" to instantly access your Pocket Money Offer Page. You\'ll find 3 content-based tasks — each worth ₹50.',
    image: StepOne,
  },
  {
    id: "post",
    number: "02",
    title: "Post Banners & Videos On Social Media",
    description:
      "Upload the provided visuals to Instagram (Post or Story), Facebook (Feed or Story), or WhatsApp (Status)..",
    image: StepTwo,
  },
  {
    id: "earn",
    number: "03",
    title: "Get Reviewed & Paid",
    description:
      "If your post is active, correctly shared, and eligible — you unlock ₹50. Complete the other tasks any time within 7 days. For each approved post, you'll receive ₹50 credited via UPI.",
    image: StepThree,
  },
];

export default function StepProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const AUTO_ADVANCE_TIME = 5000; // 5 seconds per step

  // Handle auto-advancing through steps
  useEffect(() => {
    // Reset progress when active step changes
    setProgress(0);

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set up progress tracking
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (AUTO_ADVANCE_TIME / 100);
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

    // Set up step advancement
    const advanceInterval = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, AUTO_ADVANCE_TIME);

    intervalRef.current = advanceInterval;

    return () => {
      clearInterval(progressInterval);
      clearTimeout(advanceInterval);
    };
  }, [activeStep]);

  // Handle manual step selection
  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            No Investment. Earn Fast.
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-teal-500 font-handwriting font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here&apos;s how.
          </motion.p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Steps list */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <motion.button
                  className={`flex items-start gap-4 sm:gap-6 w-full text-left transition-opacity duration-300 ${
                    activeStep === index ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => handleStepClick(index)}
                  whileHover={{ opacity: 1 }}
                  animate={{ opacity: activeStep === index ? 1 : 0.5 }}
                >
                  <div className="relative flex-shrink-0">
                    <span
                      className={`text-xl sm:text-2xl lg:text-3xl font-light ${
                        activeStep === index ? "text-teal-500" : "text-gray-400"
                      }`}
                    >
                      {step.number}
                    </span>

                    {/* Progress line */}
                    {activeStep === index && (
                      <div className="absolute left-1/2 top-full -translate-x-1/2 w-0.5 h-8 sm:h-12 lg:h-16 bg-gray-200 mt-2">
                        <motion.div
                          className="w-full bg-teal-500 origin-top"
                          style={{ height: `${progress}%` }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-lg sm:text-xl lg:text-2xl font-extrabold mb-2 sm:mb-3 ${
                        activeStep === index ? "text-gray-800" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <AnimatePresence mode="wait">
                      {activeStep === index && (
                        <motion.p
                          key={`desc-${step.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm sm:text-base lg:text-md text-gray-600 overflow-hidden leading-relaxed"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              </div>
            ))}
          </div>

          {/* Image section */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl aspect-[3/4] sm:aspect-[2/3] lg:aspect-[3/4]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${activeStep}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={steps[activeStep].image}
                    alt={`Illustration for ${steps[activeStep].title}`}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    priority={activeStep === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
