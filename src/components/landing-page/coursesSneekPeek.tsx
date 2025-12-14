"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ConceptImage1 from "@/assets/courses/sneek-peek-2.png";
import ConceptImage2 from "@/assets/courses/sneek-peek-6.png";
import ConceptImage3 from "@/assets/courses/sneek-peek-4.png";
import ConceptImage4 from "@/assets/courses/sneek-peek-5.png";
import ConceptImage5 from "@/assets/courses/sneek-peek-3.png";
import ConceptImage6 from "@/assets/courses/sneek-peek-7.png";
import ConceptImage7 from "@/assets/courses/sneek-peek-1.png";

// Define the slide content type
type CourseSlideContent = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  categoryDescription: string;
  benefits: string[];
  imagePath: string | StaticImageData;
};

export default function CourseSneeekPeekSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Course slide content data based on document
  const courseSnippets: CourseSlideContent[] = [
    {
      id: 1,
      title: "Profit from Price Shifts",
      subtitle: "The Smarter Way to Trade Sports",
      description:
        "Learn how expert traders lock in profits during live games by acting on price changes — not predictions. Enter at ₹2.00 → market shifts to ₹1.65 → exit → lock ₹200 profit.",
      category: "STRATEGY FUNDAMENTALS",
      categoryDescription:
        "In this sneak peek from our free course, you'll discover how to leverage price action in live sports markets for guaranteed profit through strategic entries and exits. No guesswork. Just timing, price movement, and smart exits.",
      benefits: [
        "NO OUTCOME DEPENDENCY",
        "100% LEGAL & SKILL-BASED",
        "RISK-CONTROLLED STRATEGIES",
      ],
      imagePath: ConceptImage1,
    },
    {
      id: 2,
      title: "Sports Trading Demystified",
      subtitle: "Learn the Smart Way to Trade on Live Events",
      description:
        "This is trading, not gambling. Just like stock market traders buy low and sell high, sports traders back and lay at strategic price points for consistent profits.",
      category: "MARKET COMPARISON",
      categoryDescription:
        "This visual draws a powerful parallel between stock market trading and sports market trading, simplifying complex ideas to make them accessible for beginners. You'll learn how exit strategy + market understanding = guaranteed profits.",
      benefits: [
        "STOCK VS SPORTS MARKETS",
        "EXIT STRATEGY MASTERY",
        "MARKET LOGIC TRAINING",
      ],
      imagePath: ConceptImage2,
    },
    {
      id: 3,
      title: "Understanding Match Momentum",
      subtitle: "Kab Trade Karna Hai?",
      description:
        "Smart traders don't wait for the result. They trade the momentum. Learn how to time your trades based on match events that influence the market.",
      category: "EVENT-BASED TRADING",
      categoryDescription:
        "Just like stock traders react to breaking news or earnings reports, sports traders act based on match events that influence the market. Learn to identify high-impact moments for optimal entry and exit.",
      benefits: [
        "REAL-TIME REACTIONS",
        "MATCH EVENT ANALYSIS",
        "SMART TRADING ENTRY/EXIT",
      ],
      imagePath: ConceptImage3,
    },
    {
      id: 4,
      title: "Back vs Lay",
      subtitle: "Market Mein Position Kaise Lete Hain?",
      description:
        "Understanding the two core strategies every sports trader must know to make consistent profits: BACK = You support | LAY = You oppose",
      category: "CORE STRATEGIES",
      categoryDescription:
        "Learn when to BACK (support a team at 2.00 odds) and when to LAY (oppose a team at 3.00 odds). Master the timing of these positions to create consistent profit opportunities regardless of match outcome.",
      benefits: ["POSITION STRATEGY", "RISK MANAGEMENT", "PROFIT CALCULATION"],
      imagePath: ConceptImage4,
    },
    {
      id: 5,
      title: "Odds Movement = Profit",
      subtitle: "You Don't Need to Predict the Result",
      description:
        "Just catch the right price movement and EXIT smartly. Back a team at 2.00 odds, then exit (lay) at lower odds after good performance, locking in ₹200 profit without waiting for the match to end!",
      category: "PROFIT STRATEGY",
      categoryDescription:
        "Market is a live game — odds constantly move. Learn to profit from market movements rather than match results. Back high, lay low, and be free from result tension. Result unpredictable, lekin price controllable hai!",
      benefits: [
        "RESULT-INDEPENDENT PROFIT",
        "STRATEGIC TIMING",
        "CONTROLLED RISK",
      ],
      imagePath: ConceptImage5,
    },
    {
      id: 6,
      title: "DDP Framework",
      subtitle: "Trading Ka Winning Formula",
      description:
        "Understand the process behind daily profit — not luck, just logic! Our proven Data → Decision → Profit framework gives you a systematic approach to sports trading.",
      category: "TRADING SYSTEM",
      categoryDescription:
        "Master our systematic approach: DATA (toss, pitch, matchups, momentum), DECISION (back or lay at the right time), and PROFIT (based on odds movement, not match result). This trading mindset is completely different from fantasy sports.",
      benefits: [
        "SYSTEMATIC TRADING",
        "ODDS MOVEMENT MASTERY",
        "DAILY PROFIT POTENTIAL",
      ],
      imagePath: ConceptImage6,
    },
    {
      id: 7,
      title: "Fantasy vs Trading",
      subtitle:
        "Jaha Fantasy mein luck ka khel hai, Trading mein decision ka faayda hai!",
      description:
        "Fantasy gives you just 30% win chance with lineup luck. Trading offers 80%+ win chance with live decisions and controlled risk. Which would you prefer?",
      category: "COMPARISON",
      categoryDescription:
        "Fantasy requires high fees with low returns, depends heavily on luck, and only pays weekly if you top the leaderboard. Trading allows daily withdrawals, requires minimal investment, and relies more on skill than luck.",
      benefits: [
        "DAILY VS WEEKLY PAYOUT",
        "SKILL VS LUCK",
        "CONTROLLED RISK VS HIGH LOSS",
      ],
      imagePath: ConceptImage7,
    },
  ];

  // Setup and manage auto-rotation interval with pause functionality
  useEffect(() => {
    // Start the interval when the component mounts
    startSlideInterval();

    // Clean up the interval when the component unmounts
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, []);

  // Reset the interval whenever isPaused changes
  useEffect(() => {
    if (isPaused) {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
        slideIntervalRef.current = null;
      }
    } else {
      startSlideInterval();
    }
  }, [isPaused]);

  const startSlideInterval = () => {
    // Clear any existing interval first
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }

    // Set up a new interval (6 seconds)
    slideIntervalRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % courseSnippets.length);
      }
    }, 6000);
  };

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-2">
          <p className="text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <ArrowRight className="h-4 w-4" />
            COURSE SNEAK PEEK
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 max-w-3xl mx-auto">
              <span className="font-bold">
                {courseSnippets[currentSlide].title}
              </span>
            </h2>
            <p className="text-lg md:text-xl mt-2 text-gray-600">
              {courseSnippets[currentSlide].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Improved image container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentSlide}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center rounded-lg overflow-hidden bg-white"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="w-full aspect-square md:aspect-[4/3] lg:aspect-[16/10] relative">
                <Image
                  src={courseSnippets[currentSlide].imagePath}
                  alt={courseSnippets[currentSlide].title}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col space-y-6 md:space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 md:space-y-6"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2 flex-shrink-0" />
                  <h3 className="text-xl font-bold uppercase">
                    {courseSnippets[currentSlide].category}
                  </h3>
                </div>

                <p className="text-gray-800">
                  {courseSnippets[currentSlide].description}
                </p>

                <p className="text-gray-600">
                  {courseSnippets[currentSlide].categoryDescription}
                </p>

                <Link
                  href="#"
                  className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
                >
                  Watch This in Action — Start Free Course
                </Link>

                <div className="pt-4 md:pt-6 space-y-3">
                  {courseSnippets[currentSlide].benefits.map(
                    (benefit, index) => (
                      <div
                        key={index}
                        className="uppercase text-gray-700 font-medium hover:text-black cursor-pointer transition-colors flex items-center"
                      >
                        <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {courseSnippets.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                handleSlideClick(index);
                setIsPaused(true);
                // Resume auto-rotation after 10 seconds of inactivity
                setTimeout(() => setIsPaused(false), 10000);
              }}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? "w-8 bg-black" : "w-2 bg-gray-300"
              } hover:bg-gray-600`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
