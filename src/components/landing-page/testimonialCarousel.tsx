"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Pause,
  Play,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ananya from "@/assets/testimonals/ananyadesia.png";
import arjun from "@/assets/testimonals/arjunreddy.png";
import karan from "@/assets/testimonals/karan.png";
import meera from "@/assets/testimonals/meera.png";
import rajesh from "@/assets/testimonals/rajesh.png";
import priya from "@/assets/testimonals/priya.png";
import vikram from "@/assets/testimonals/vikram.png";
import suresh from "@/assets/testimonals/suresh.png";
import raj from "@/assets/testimonals/raj.png";

// Testimonial data type
type Testimonial = {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  content: string;
  rating: number;
  course: string;
};

// Sample testimonials with Indian names and contexts
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Aspiring Sports Trader",
    location: "Mumbai",
    image: rajesh.src,
    content:
      "Sportstradex has revolutionized how I approach sports trading. The free courses simplified complex strategies and the pocket money program is a creative way to earn by promoting partners on social media.",
    rating: 5,
    course: "Sports Trading Basics",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Content Creator",
    location: "Bangalore",
    image: priya.src,
    content:
      "Sportstradex is a game-changer! I now understand trading and have started earning consistently through their affiliate program. Sharing on social media is so easy and rewarding.",
    rating: 5,
    course: "Affiliate Marketing Insights",
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "College Student",
    location: "Delhi",
    image: vikram.src,
    content:
      "The courses on Sportstradex are incredibly detailed and practical. I learned trading strategies that boosted my confidence and the pocket money program helped me earn extra ₹150 effortlessly.",
    rating: 4,
    course: "Trading Strategies for Beginners",
  },
  {
    id: 4,
    name: "Ananya Desai",
    role: "Freelance Marketer",
    location: "Chennai",
    image: ananya.src,
    content:
      "Sportstradex offers the perfect blend of learning and earning. The affiliate program helped me diversify my income streams and the free courses sharpened my trading skills.",
    rating: 5,
    course: "Affiliate Program Mastery",
  },
  {
    id: 5,
    name: "Arjun Reddy",
    role: "Recent Graduate",
    location: "Hyderabad",
    image: arjun.src,
    content:
      "As a beginner in sports trading, Sportstradex has been a lifesaver. Their free courses are easy to follow and the earning programs are a fantastic way to gain financial stability.",
    rating: 5,
    course: "Sports Trading Essentials",
  },
  {
    id: 6,
    name: "Meera Iyer",
    role: "Homemaker",
    location: "Kolkata",
    image: meera.src,
    content:
      "I never imagined being able to earn through sports trading until I joined Sportstradex. The courses are beginner-friendly, and the affiliate program is perfect for passive earnings!",
    rating: 5,
    course: "Earning with Social Media",
  },
  {
    id: 7,
    name: "Karan Singh",
    role: "Small Business Owner",
    location: "Pune",
    image: karan.src,
    content:
      "Sportstradex's free courses made sports trading accessible for me. I've started earning through the pocket money program and developed skills to grow my trading portfolio.",
    rating: 4,
    course: "Trading Portfolio Management",
  },
  {
    id: 9,
    name: "Suresh Menon",
    role: "Entrepreneur",
    location: "Kochi",
    image: suresh.src,
    content:
      "Sportstradex has helped me discover sports trading as a viable earning avenue. Their affiliate and pocket money programs are reliable and rewarding.",
    rating: 4,
    course: "Advanced Trading Tactics",
  },
  {
    id: 10,
    name: "Raj Agarwal",
    role: "Sports Enthusiast",
    location: "Jaipur",
    image: raj.src,
    content:
      "I was always interested in sports, and Sportstradex helped me turn that passion into a source of income. The courses and programs are simple yet impactful!",
    rating: 5,
    course: "Passion to Profit",
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      startAutoPlay();
    }
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      startAutoPlay();
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      startAutoPlay();
    }
  };

  // Card animation variants for entering, center, and exiting states
  const cardVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? 10 : -10,
      scale: 0.96,
      rotateY: direction > 0 ? 3 : -3,
    }),
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        opacity: { duration: 0.3, ease: "easeOut" },
        y: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        rotateY: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? -10 : 10,
      scale: 0.96,
      rotateY: direction > 0 ? -3 : 3,
      transition: {
        opacity: { duration: 0.3, ease: "easeIn" },
        y: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        rotateY: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
    }),
  };

  // Content fade animations for staggered effect
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
        delay: 0.1,
      },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.4 } },
  };

  return (
    <section className="py-10 relative overflow-hidden bg-white text-darkest">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 font-manrope">
            What Our Students Say About Us
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main testimonial carousel */}
          <div className="relative bg-zinc-300/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-xl border border-white/10 mb-10 min-h-[320px] md:min-h-[280px] perspective">
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
                  <div className="md:w-1/4 flex flex-col items-center">
                    <motion.div
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                      className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-lime-400 mb-3"
                    >
                      <Image
                        src={
                          testimonials[currentIndex].image || "/placeholder.svg"
                        }
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h3 className="font-bold text-lg text-center">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-dark text-sm text-center">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-darkest text-xs text-center">
                        {testimonials[currentIndex].location}
                      </p>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-4 w-4",
                              i < testimonials[currentIndex].rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-600 text-gray-600"
                            )}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div className="md:w-3/4">
                    <div className="relative">
                      <motion.div
                        variants={quoteVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-lime-400" />
                      </motion.div>
                      <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <p className="text-darkest pl-6 pt-4 italic leading-relaxed">
                          {testimonials[currentIndex].content}
                        </p>
                        <div className="mt-4 pl-6">
                          <span className="inline-block bg-lime-400/20 text-black text-xs px-3 py-1 rounded-full">
                            Course: {testimonials[currentIndex].course}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-zinc-500 rounded-full px-3 py-2 shadow-lg border border-white/10">
              <Button
                onClick={handlePrevious}
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-zinc-800 hover:bg-zinc-900 text-white hover:text-[#c8f65d] hover:scale-105 transition-all duration-300"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>

              <Button
                onClick={togglePlayPause}
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-zinc-800 hover:bg-zinc-900 text-white hover:text-[#c8f65d] hover:scale-105 transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
                <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
              </Button>

              <Button
                onClick={handleNext}
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-zinc-800 hover:bg-zinc-900 text-white hover:text-[#c8f65d] hover:scale-105 transition-all duration-300"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>

          {/* Testimonial indicators/thumbnails */}
          <div className="flex justify-center flex-wrap gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-lime-400 w-8"
                    : "bg-darkest hover:bg-darkest/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p
            className="text-dark mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Join thousands of satisfied students and transform your financial
            future today
          </p>
          <Button className="bg-lime-400 hover:bg-lime-400/75 text-black px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300">
            Enroll Now
          </Button>
        </div>
      </div>

      {/* Add this global style for 3D perspective */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
