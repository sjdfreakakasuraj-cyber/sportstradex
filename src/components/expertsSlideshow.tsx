"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import NehaKapoor1 from "@/assets/images/e1.png";
import NehaKapoor2 from "@/assets/images/e2.png";
import RaghavMehta from "@/assets/images/e3.png";
import SanaIqbal from "@/assets/images/e4.png";

// Define the slide content type
type ExpertSlideContent = {
  id: number;
  title: string;
  name: string;
  role: string;
  description: string;
  category: string;
  categoryDescription: string;
  experience: string;
  specialties: string[];
  imagePath: string | StaticImageData;
};

export default function ExpertsSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Expert slide content data based on document
  const experts: ExpertSlideContent[] = [
    {
      id: 1,
      title: "Learn from our expert",
      name: "Neha Kapoor",
      role: "Risk Control & Behavior Specialist",
      description:
        "Master the analytical frameworks used by professional traders to decode live match data and identify high-probability patterns before they become obvious.",
      category: "RISK EXPERT",
      categoryDescription:
        "With 7 years as a Behavioral Coach and Risk-Reward Strategist, Neha helps traders develop disciplined approaches to market volatility and emotional control systems necessary for consistent performance.",
      experience: "7 Years",
      specialties: [
        "RISK MANAGEMENT",
        "BEHAVIORAL COACHING",
        "REWARD STRATEGY",
      ],
      imagePath: NehaKapoor1,
    },
    {
      id: 2,
      title: "Train with our expert",
      name: "Neha Kapoor",
      role: "Risk Control & Behavior Specialist",
      description:
        "Learn proven risk management systems that protect your resources while maximizing return potential across different match scenarios.",
      category: "RISK SPECIALIST",
      categoryDescription:
        "Specializing in both behavioral psychology and risk analysis, Neha provides practical frameworks for traders to maintain discipline during volatile market conditions while optimizing decision-making under pressure.",
      experience: "7 Years",
      specialties: ["RISK CONTROL", "CAPITAL PROTECTION", "BEHAVIORAL SYSTEMS"],
      imagePath: NehaKapoor2,
    },
    {
      id: 3,
      title: "Build your skills with our",
      name: "Sana Iqbal",
      role: "Decision-Making & Performance Coach",
      description:
        "Master the psychological aspects of sports trading with guidance focused on cognitive edge techniques that improve decision quality under pressure.",
      category: "PERFORMANCE EXPERT",
      categoryDescription:
        "With 6+ years specializing in cognitive performance and cricket IQ coaching, Sana helps traders develop mental resilience and decision clarity needed for consistent performance in volatile market conditions.",
      experience: "6+ Years",
      specialties: ["COGNITIVE EDGE", "DECISION PSYCHOLOGY", "CRICKET IQ"],
      imagePath: SanaIqbal,
    },
    {
      id: 4,
      title: "Master the tools with our",
      name: "Raghav Mehta",
      role: "AI & Strategic Data Architect",
      description:
        "Get hands-on training with proprietary tools like GameFlow Analyzer and SmartPitch Tool from the developer who built them specifically for the Indian cricket market.",
      category: "TECH EXPERT",
      categoryDescription:
        "With 8+ years as an AI visionary and cricket intelligence strategist, Raghav specializes in developing predictive systems and automated analysis tools that give traders significant timing advantages in live markets.",
      experience: "8+ Years",
      specialties: ["AI SYSTEMS", "PREDICTIVE ENGINES", "DATA ARCHITECTURE"],
      imagePath: RaghavMehta,
    },
    {
      id: 5,
      title: "Scale your business with our",
      name: "Rajdeep Maan",
      role: "Affiliate Intelligence Strategist",
      description:
        "Learn how to build and manage a network of clients while earning passive income through our industry-leading affiliate and consultant programs.",
      category: "BUSINESS EXPERT",
      categoryDescription:
        "With 10 years as a top affiliate mentor in India's sports skill development space, Rajdeep has designed community-funnel systems used by 3,000+ earners and helped 500+ students earn their first ₹50K via smart digital sharing strategies.",
      experience: "10 Years",
      specialties: [
        "COMMUNITY BUILDING",
        "CONVERSION SYSTEMS",
        "AFFILIATE GROWTH",
      ],
      imagePath: RaghavMehta, // Using Raghav's image as placeholder for now
    },
  ];

  // Auto-rotate slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % experts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [experts.length]);

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-2">
          <p className="text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <ArrowRight className="h-4 w-4" />
            MEET OUR EXPERTS
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 max-w-3xl mx-auto">
              {experts[currentSlide].title}{" "}
              <span className="font-bold">{experts[currentSlide].name}</span>
            </h2>
            <p className="text-lg md:text-xl mt-2 text-gray-600">
              {experts[currentSlide].role}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentSlide}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="relative h-[350px] md:h-[400px] w-full overflow-hidden rounded-md bg-gray-100"
            >
              <Image
                src={experts[currentSlide].imagePath}
                alt={experts[currentSlide].name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <p className="font-bold text-lg">
                      {experts[currentSlide].name}
                    </p>
                    <p className="text-sm">
                      {experts[currentSlide].experience} Experience
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  <h3 className="text-xl font-bold uppercase">
                    {experts[currentSlide].category}
                  </h3>
                </div>

                <p className="text-gray-800">
                  {experts[currentSlide].description}
                </p>

                <p className="text-gray-600">
                  {experts[currentSlide].categoryDescription}
                </p>

                <Link
                  href="#"
                  className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
                >
                  Learn More
                </Link>

                <div className="pt-6 space-y-3">
                  {experts[currentSlide].specialties.map((specialty, index) => (
                    <div
                      key={index}
                      className="uppercase text-gray-700 font-medium hover:text-black cursor-pointer transition-colors flex items-center"
                    >
                      <ArrowRight className="h-4 w-4 mr-2" />
                      {specialty}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {experts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? "w-8 bg-black" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
