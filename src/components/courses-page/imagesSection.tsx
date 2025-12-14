"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ConceptImage1 from "@/assets/courses/sneek-peek-2.png";
import ConceptImage2 from "@/assets/courses/sneek-peek-6.png";
import ConceptImage3 from "@/assets/courses/sneek-peek-4.png";
import ConceptImage4 from "@/assets/courses/sneek-peek-5.png";
import ConceptImage5 from "@/assets/courses/sneek-peek-3.png";
import ConceptImage6 from "@/assets/courses/sneek-peek-7.png";
import ConceptImage7 from "@/assets/courses/sneek-peek-1.png";

export default function ImagesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioning = useRef(false);

  // Array of all images with their descriptions
  const images = [
    {
      src: ConceptImage1,
      alt: "Profit from Price Shifts",
      description:
        "Learn how expert traders lock in profits during live games by acting on price changes — not predictions. Enter at ₹2.00 → market shifts to ₹1.65 → exit → lock ₹200 profit.",
    },
    {
      src: ConceptImage2,
      alt: "Sports Trading Demystified",
      description:
        "This is trading, not gambling. Just like stock market traders buy low and sell high, sports traders back and lay at strategic price points for consistent profits.",
    },
    {
      src: ConceptImage3,
      alt: "Understanding Match Momentum",
      description:
        "Smart traders don't wait for the result. They trade the momentum. Learn how to time your trades based on match events that influence the market.",
    },
    {
      src: ConceptImage4,
      alt: "Back vs Lay",
      description:
        "Understanding the two core strategies every sports trader must know to make consistent profits: BACK = You support | LAY = You oppose",
    },
    {
      src: ConceptImage5,
      alt: "Odds Movement = Profit",
      description:
        "Just catch the right price movement and EXIT smartly. Back a team at 2.00 odds, then exit (lay) at lower odds after good performance, locking in ₹200 profit without waiting for the match to end!",
    },
    {
      src: ConceptImage6,
      alt: "DDP Framework",
      description:
        "Understand the process behind daily profit — not luck, just logic! Our proven Data → Decision → Profit framework gives you a systematic approach to sports trading.",
    },
    {
      src: ConceptImage7,
      alt: "Fantasy vs Trading",
      description:
        "Fantasy gives you just 30% win chance with lineup luck. Trading offers 80%+ win chance with live decisions and controlled risk. Which would you prefer?",
    },
  ];

  // Calculate number of visible slides based on screen width
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 3; // Default for SSR
  };

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Simple navigation functions with debounce
  const nextSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetAutoplayTimer();

    // Reset transitioning status after animation completes
    setTimeout(() => {
      isTransitioning.current = false;
    }, 600);
  };

  const prevSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    resetAutoplayTimer();

    // Reset transitioning status after animation completes
    setTimeout(() => {
      isTransitioning.current = false;
    }, 600);
  };

  interface GoToSlide {
    (index: number): void;
  }

  const goToSlide: GoToSlide = (index: number): void => {
    if (isTransitioning.current || index === currentIndex) return;
    isTransitioning.current = true;

    setCurrentIndex(index);
    resetAutoplayTimer();

    // Reset transitioning status after animation completes
    setTimeout((): void => {
      isTransitioning.current = false;
    }, 600);
  };

  // Autoplay functionality
  const resetAutoplayTimer = () => {
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
    }

    if (!isPaused) {
      autoplayTimeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 7000); // 7 seconds
    }
  };

  useEffect(() => {
    resetAutoplayTimer();
    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  // Get slides to display
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % images.length;
      slides.push({ ...images[index], index });
    }
    return slides;
  };

  return (
    <section className="bg-white text-darkest py-12 px-4 sm:px-6 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Simple background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lime-50 to-blue-50 opacity-30" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-manrope text-gray-900">
            Expect to Learn
          </h2>
        </div>

        <div
          className="relative mx-auto px-4 sm:px-8 md:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {getVisibleSlides().map((slide, idx) => (
              <div
                key={`slide-${slide.index}`}
                className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-lime-400/30 hover:border-lime-500/70 shadow-lg hover:shadow-xl transition-all duration-500 opacity-100 animate-fadeIn"
                style={{
                  animation: "fadeIn 0.5s ease-in-out",
                }}
              >
                <div className="relative h-64 sm:h-72 md:h-80 w-full flex items-center justify-center p-4 bg-black border-b-2 border-lime-400/40">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    className="object-contain max-h-full rounded-lg"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "100%",
                    }}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    priority={idx < 3}
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col bg-white">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-darkest text-center">
                    {slide.alt}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Simple Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 sm:-translate-x-2 md:-translate-x-4 bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-xl z-20 hover:bg-lime-500 hover:text-white transition-all duration-300 border-2 border-lime-500"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 sm:translate-x-2 md:translate-x-4 bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-xl z-20 hover:bg-lime-500 hover:text-white transition-all duration-300 border-2 border-lime-500"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Simplified indicators */}
          <div className="flex justify-center mt-6 sm:mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 mx-1 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-lime-500 w-8"
                    : "bg-gray-300 w-4 hover:bg-lime-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS animation for fade effect */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
