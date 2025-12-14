"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CoursesMockup from "@/assets/landing-page/courses-mockup.png";
import AffiliateMockup from "@/assets/mockups/affiliate-mockup.png";
import PocketMoneyMockup from "@/assets/mockups/pocketmoney-mockup.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OfferingSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof content>("courses");
  // Add a ref to track when a user manually changes the tab
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const extendedTimeRef = useRef<boolean>(false);

  const tabs = useMemo(
    () =>
      [
        { id: "courses", label: "Courses" },
        { id: "pocketmoney", label: "Pocket Money" },
        { id: "affiliate", label: "Affiliate" },
      ] as const,
    []
  );

  const content = {
    courses: {
      title: "Try our Courses",
      description:
        "Get expert-led training designed for Indian sports enthusiasts that cover everything from the basics to advanced strategies. Learn at your own pace and become a pro.",
      image: CoursesMockup,
    },
    pocketmoney: {
      title: "Earn With Us",
      description:
        "Earn ₹150 instantly just by sharing! Post our ready-made promotional content on your social media and get paid, no investment just sharing. It's that simple!",
      image: PocketMoneyMockup,
    },
    affiliate: {
      title: "Become an Agent",
      description:
        "Earn 10% commission on every sale! Help your friends and family discover our courses and earn money while doing it. Get access to our dashboard, easy payouts and unlimited earnings. It's a win-win!",
      image: AffiliateMockup,
    },
  };

  // Function to handle next/previous tab navigation
  const navigateTab = useCallback(
    (direction: "next" | "prev") => {
      const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
      const tabsCount = tabs.length;

      if (direction === "next") {
        const nextIndex = (currentIndex + 1) % tabsCount;
        setActiveTab(tabs[nextIndex].id);
      } else {
        const prevIndex = (currentIndex - 1 + tabsCount) % tabsCount;
        setActiveTab(tabs[prevIndex].id);
      }
    },
    [activeTab, tabs]
  );

  // Handle tab selection with extended viewing time
  const handleTabSelect = useCallback((tabId: keyof typeof content) => {
    setActiveTab(tabId);
    extendedTimeRef.current = true;

    // Clear existing timer if any
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Reset extended time flag after 10s (5s extra)
    timerRef.current = setTimeout(() => {
      extendedTimeRef.current = false;
    }, 10000);
  }, []);

  // Setup interval for auto-rotation
  useEffect(() => {
    // Create interval that rotates the tabs every 5 seconds
    const rotationInterval = setInterval(() => {
      // Only auto-rotate if not in extended viewing time
      if (!extendedTimeRef.current) {
        navigateTab("next");
      }
    }, 5000);

    // Clear interval on component unmount or when activeTab changes
    return () => clearInterval(rotationInterval);
  }, [activeTab, navigateTab]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full pb-16 pt-6 px-4 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full bg-dark p-1 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabSelect(tab.id)}
                className={`relative px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 font-manrope ${
                  activeTab === tab.id
                    ? "bg-lighter text-dark"
                    : "hover:bg-lighter/20 hover:text-lighter text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="h-64 relative flex items-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center md:text-left w-full absolute"
                >
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-manrope">
                    {content[activeTab].title}
                  </h2>
                  <p className="text-gray-700 mb-0 max-w-lg mx-auto md:mx-0">
                    {content[activeTab].description}
                  </p>

                  {/* Navigation buttons with improved positioning and z-index for mobile */}
                  <div className="flex justify-center md:justify-start space-x-4 mt-4 relative z-10">
                    <button
                      className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center hover:bg-light transition-colors shadow-md"
                      aria-label="Previous"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateTab("prev");
                        extendedTimeRef.current = true;
                        if (timerRef.current) clearTimeout(timerRef.current);
                        timerRef.current = setTimeout(() => {
                          extendedTimeRef.current = false;
                        }, 10000);
                      }}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center hover:bg-light transition-colors shadow-md"
                      aria-label="Next"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateTab("next");
                        extendedTimeRef.current = true;
                        if (timerRef.current) clearTimeout(timerRef.current);
                        timerRef.current = setTimeout(() => {
                          extendedTimeRef.current = false;
                        }, 10000);
                      }}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative h-96 md:h-auto overflow-visible w-full max-w-xs md:max-w-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <div className="relative w-full aspect-[3/6] max-w-xs">
                    <Image
                      src={content[activeTab].image}
                      alt={`${activeTab} mockup`}
                      fill
                      className="object-contain pointer-events-none"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
