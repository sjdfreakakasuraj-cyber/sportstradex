"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Import the testimonial image you're going to attach
import TestimonialImage from "@/assets/experts/casestudy.png";

// Badge imports
import Badge1 from "@/assets/experts/case-study-badge-1.png";
import Badge2 from "@/assets/experts/case-study-badge-2.png";
import Badge3 from "@/assets/experts/case-study-badge-3.png";
import Badge4 from "@/assets/experts/case-study-badge-4.png";
import Badge5 from "@/assets/experts/case-study-badge-5.png";
import Badge6 from "@/assets/experts/case-study-badge-6.png";

export default function CaseStudySection() {
  const [activeBadge, setActiveBadge] = useState(0);
  const badges = [Badge1, Badge2, Badge3, Badge4, Badge5, Badge6];

  // Badge rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBadge((prev) => (prev === badges.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [badges.length]);

  return (
    <section className="w-full bg-[#bdf054] py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Left side - Fixed image container with proper sizing */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-auto">
              <div className="pb-[125%] relative">
                {" "}
                {/* 4:5 aspect ratio container */}
                <Image
                  src={TestimonialImage}
                  alt="Testimonial from sports trading expert"
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 500px"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  className="rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#004d40]">
              How the <span className="text-[#00c2b0]">Course</span> Drives
              Profits with Expert Insights
            </h2>

            <p className="text-gray-700 md:text-lg font-medium">
              We want everyone to get educated on the science of sports trading.
              They scored 1000%+ ROIs.
            </p>

            <div className="grid grid-cols-3 gap-4 py-6 bg-white/30 rounded-lg p-4 shadow-md">
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-[#004d40]">
                  1468%
                </p>
                <p className="text-sm text-gray-700">ROI</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-[#004d40]">
                  8.59%
                </p>
                <p className="text-sm text-gray-700">Conversion Rate</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-[#004d40]">
                  ₹73,457
                </p>
                <p className="text-sm text-gray-700">Profits Generated</p>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <Button
                variant="outline"
                className="rounded-full border-2 border-[#00c2b0] px-8 py-4 h-auto font-medium bg-white text-[#004d40] hover:bg-[#00c2b0] hover:text-white transition-colors"
              >
                READ REVIEWS
              </Button>
            </div>

            <div className="pt-8 border-t border-gray-300 mt-8">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                {badges.map((badge, index) => (
                  <div key={index} className="flex-shrink-0">
                    <Image
                      src={badge}
                      alt={`Partner badge ${index + 1}`}
                      width={50}
                      height={50}
                      className={`transition-opacity duration-300 ${
                        activeBadge === index ? "opacity-100" : "opacity-50"
                      }`}
                    />
                    {activeBadge === index && (
                      <div className="h-1 w-full bg-[#00c2b0] mt-2 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
