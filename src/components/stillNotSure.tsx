"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Person1 from "@/assets/testimonals/ananyadesia.png";
import Person2 from "@/assets/testimonals/arjunreddy.png";
import Person3 from "@/assets/testimonals/karan.png";
import Person4 from "@/assets/testimonals/meera.png";
import Person5 from "@/assets/testimonals/priya.png";
import Person6 from "@/assets/testimonals/raj.png";
import Person7 from "@/assets/testimonals/vikram.png";
import Person8 from "@/assets/testimonals/rajesh.png";
import Person9 from "@/assets/testimonals/suresh.png";

const testimonials = [
  {
    id: 1,
    title: "Testimonials",
    rating: 4.98,
    hasButton: true,
    buttonText: "Get Free Course!",
    image: null,
  },
  {
    id: 2,
    title: '"Made 3x what I paid"',
    image: Person1,
  },
  {
    id: 3,
    title: '"Loved the course"',
    image: Person2,
  },
  {
    id: 4,
    title: '"Made Over 1.2Lakhs"',
    image: Person3,
  },
  {
    id: 5,
    title: '"Tripled My Accounts"',
    image: Person4,
  },
  {
    id: 6,
    title: '"Best Decision Ever"',
    image: Person5,
  },
  {
    id: 7,
    title: '"Consistent Winners"',
    image: Person6,
  },
  {
    id: 8,
    title: '"Amazing Results"',
    image: Person7,
  },
  {
    id: 9,
    title: '"Life Changing"',
    image: Person8,
  },
  {
    id: 10,
    title: '"Incredible Results"',
    image: Person9,
  },
];

export default function StillNotSure() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = testimonials.length;
  const slidesToShow = {
    mobile: 1,
    tablet: 3,
    desktop: 4,
  };

  const getVisibleSlides = () => {
    if (typeof window === "undefined") return slidesToShow.mobile;
    if (window.innerWidth >= 1280) return slidesToShow.desktop;
    if (window.innerWidth >= 768) return slidesToShow.tablet;
    return slidesToShow.mobile;
  };

  const [visibleSlides, setVisibleSlides] = useState(slidesToShow.mobile);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = totalSlides - visibleSlides;

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [maxIndex, isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [maxIndex, isAnimating]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index > maxIndex ? maxIndex : index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [maxIndex, isAnimating]
  );

  // Auto-play functionality
  useEffect(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [nextSlide, isPaused]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="w-full bg-white py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 text-gray-800">
          Still <span className="text-green-600">Not Sure</span> ?
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleSlides)
              }%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={cn(
                  "flex-shrink-0 px-4 py-6", // Increased padding for better spacing
                  visibleSlides === 1
                    ? "w-full"
                    : visibleSlides === 2
                    ? "w-1/2"
                    : visibleSlides === 3
                    ? "w-1/3"
                    : "w-1/4"
                )}
              >
                <div className="h-full bg-white border-b-4 border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden">
                  {testimonial.image && (
                    <div className="flex justify-center pt-6 pb-4">
                      <div className="relative w-40 h-40 rounded-full border-4 border-lime-500 overflow-hidden shadow-lg">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.title}
                            width={160}
                            height={160}
                            className="min-w-full min-h-full object-cover"
                            style={{
                              transform: "scale(1.1)",
                              transformOrigin: "center center",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-6 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                      {testimonial.title}
                    </h3>

                    {testimonial.id === 1 && (
                      <div className="flex flex-col items-center mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-6 h-6 text-green-500 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-md text-gray-600 mt-2 font-medium">
                          Rated {testimonial.rating}/5 Stars
                        </p>
                      </div>
                    )}

                    {testimonial.hasButton && (
                      <div className="mt-6">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-lg transition-all duration-300 rounded-md">
                          {testimonial.buttonText}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <Button
              key={i}
              variant="outline"
              size="icon"
              className={cn(
                "h-3 w-3 p-0 rounded-full border-0",
                i === currentIndex
                  ? "bg-green-600"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              onClick={() => goToSlide(i)}
            >
              <span className="sr-only">Go to slide {i + 1}</span>
            </Button>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 shadow-md"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 bg-green-600 border-0 text-white hover:bg-green-700 shadow-md"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
