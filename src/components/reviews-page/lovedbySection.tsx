"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  logo: string;
}

export default function LovedBySection() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Sportstradex has transformed my understanding of sports trading. Their free courses are informative, engaging, and beginner-friendly. The pocket money program is a fantastic way to earn while promoting partners on social media.",
      author: "Rahul Sharma",
      title: "Aspiring Sports Trader",
      company: "Self-Employed",
      logo: "/rahul-logo.svg",
    },
    {
      quote:
        "With Sportstradex, I discovered the potential of sports trading as a source of income. The affiliate program is well-structured and has opened up new earning opportunities for me.",
      author: "Sneha Agarwal",
      title: "Freelance Marketer",
      company: "Freelance",
      logo: "/sneha-logo.svg",
    },
    {
      quote:
        "Sportstradex provides a perfect blend of learning and earning. The courses are detailed and insightful, and the pocket money program helped me earn extra cash by simply sharing posts on social media.",
      author: "Ankit Verma",
      title: "College Student",
      company: "University of Delhi",
      logo: "/ankit-logo.svg",
    },
    {
      quote:
        "The free courses offered by Sportstradex on sports trading are truly a game-changer. Thanks to their programs, I've been able to learn new skills and earn consistently through affiliate marketing.",
      author: "Priya Banerjee",
      title: "Content Creator",
      company: "Independent",
      logo: "/priya-logo.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [autoplay, setAutoplay] = useState(true);

  const handlePrev = () => {
    setAutoplay(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-scroll effect
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, autoplay]);

  // Calculate visible testimonials (current and next two)
  const visibleTestimonials = () => {
    const result = [];
    let index = currentIndex;

    for (let i = 0; i < 3; i++) {
      result.push({
        testimonial: testimonials[index],
        index,
      });
      index = (index + 1) % testimonials.length;
    }

    return result;
  };

  return (
    <div
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background:
          "linear-gradient(135deg, #0a2a2f 0%, #0a2a2f 50%, #c8f65d 100%)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-0">
            Loved &<br className="md:hidden" /> trusted
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={containerRef} className="relative overflow-hidden">
          <div className="flex space-x-6">
            <AnimatePresence initial={false} custom={direction}>
              {visibleTestimonials().map(({ testimonial, index }, i) => (
                <motion.div
                  key={`${index}-${i}`}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 300 : -300,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    x: direction > 0 ? -300 : 300,
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                  className={cn(
                    "flex-shrink-0 w-full md:w-[calc(33.333%-16px)] p-6 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10",
                    i === 0 ? "block" : "hidden md:block"
                  )}
                >
                  <div className="h-full flex flex-col justify-between">
                    <blockquote className="text-white/90 text-sm md:text-base mb-6">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <div className="flex items-center">
                      <div className="flex-1">
                        <p className="text-white font-medium">
                          {testimonial.author}
                        </p>
                        <p className="text-white/70 text-sm">
                          {testimonial.title}
                        </p>
                      </div>
                      <div className="w-24 h-8 relative">
                        {/* <Image
                          src={testimonial.logo || "/placeholder.svg"}
                          alt={`${testimonial.company} logo`}
                          fill
                          className="object-contain"
                        /> */}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
