"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import HeadshotImage1 from "@/assets/reviews/girl-1.png";
import HeadshotImage2 from "@/assets/reviews/guy-2.png";
import HeadshotImage3 from "@/assets/reviews/girl-3.png";
import HeadshotImage4 from "@/assets/reviews/guy-4.png";

import type { StaticImageData } from "next/image";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  project: string;
  image: string | StaticImageData;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "FRAZER HURRELL",
    role: "CREATIVE TECHNOLOGIST",
    company: "YAHOO!",
    project: "BRITISH AIRWAYS",
    image: HeadshotImage1,
    quote:
      "From the initial meeting to the final delivery, Ethan has created a feeling of trust and delivered everything we asked of him. The quality of his work speaks for itself and he is able to execute at a pace. He is an excellent Webflow developer and we will be calling on his services again, very soon.",
  },
  {
    id: 2,
    name: "SARAH JOHNSON",
    role: "MARKETING DIRECTOR",
    company: "SPOTIFY",
    project: "BRAND REFRESH",
    image: HeadshotImage2,
    quote:
      "Working with this team has been transformative for our brand. Their attention to detail and creative approach helped us achieve results beyond our expectations. The project was delivered on time and the communication throughout was exceptional.",
  },
  {
    id: 3,
    name: "MICHAEL CHEN",
    role: "PRODUCT MANAGER",
    company: "ADOBE",
    project: "MOBILE APP REDESIGN",
    image: HeadshotImage3,
    quote:
      "The redesign of our mobile application exceeded all our expectations. The team demonstrated deep understanding of user experience principles and delivered a product that has significantly improved our user engagement metrics and customer satisfaction scores.",
  },
  {
    id: 4,
    name: "ELENA RODRIGUEZ",
    role: "CTO",
    company: "FINTECH STARTUP",
    project: "PAYMENT PLATFORM",
    image: HeadshotImage4,
    quote:
      "The technical expertise brought to our payment platform project was outstanding. Complex problems were solved with elegant solutions, and the entire development process was smooth and well-documented. We've seen a 40% increase in transaction speed since implementation.",
  },
];

export default function TestimonialSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  // Pause auto-rotation when user interacts with navigation
  const handleManualNavigation = useCallback((callback: () => void) => {
    setIsAutoPlaying(false);
    callback();

    // Resume auto-rotation after 5 seconds of inactivity
    const timer = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full max-w-4xl my-10 mx-auto">
      <div className="border border-gray-200 rounded-sm overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 text-sm md:text-base">
          <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200">
            <span className="font-medium">NAME:</span> {currentTestimonial.name}
          </div>
          <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200">
            <span className="font-medium">ROLE:</span> {currentTestimonial.role}
          </div>
          <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200">
            <span className="font-medium">COMPANY:</span>{" "}
            {currentTestimonial.company}
          </div>
          <div className="p-4 md:p-6">
            <span className="font-medium">PROJECT:</span>{" "}
            {currentTestimonial.project}
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 items-center"
            >
              <div className="relative w-full h-full flex items-center justify-center bg-darkest p-4 md:p-6">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="p-6 md:p-10 relative">
                <div className="text-gray-200 text-8xl font-serif absolute top-4 left-4 md:top-6 md:left-6 select-none">
                  &quot;
                </div>
                <div className="relative z-10 text-base md:text-lg leading-relaxed mt-8">
                  {currentTestimonial.quote}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-gray-200 p-4">
          <button
            onClick={() => handleManualNavigation(prevSlide)}
            className="p-2 hover:bg-gray-100 transition-colors rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="text-sm">
            {String(currentIndex + 1).padStart(2, "0")}/
            {String(testimonials.length).padStart(2, "0")}
          </div>

          <button
            onClick={() => handleManualNavigation(nextSlide)}
            className="p-2 hover:bg-gray-100 transition-colors rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
