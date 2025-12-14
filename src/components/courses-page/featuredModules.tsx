"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FeaturedModules() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".story-card");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId === selectedCourse ? null : courseId);
  };

  interface Course {
    id: string;
    backgroundColor: string;
    category: string;
    title: string;
    tagline: string;
    price: string;
    content: string;
    imageSrc: string;
    modules: {
      title: string;
      description: string;
      details: string[];
    }[];
    ctaText: string;
    ctaLink: string;
  }

  const courses: Course[] = [
    {
      id: "blueprint",
      backgroundColor: "bg-dark",
      category: "BEGINNERS",
      title: "FREE BLUEPRINT COURSE",
      tagline: "Start your cricket analysis journey with zero risk",
      price: "100% Free",
      content:
        "For new users and cricket lovers exploring analysis as a side hustle. Acts as an educational gateway + lead magnet + soft upsell base",
      imageSrc: "/cricket-analysis.jpg",
      modules: [
        {
          title: "Module 1: The Science of Sports Trading",
          description: "Skill-Based Career of the Future",
          details: [
            "How sports trading resembles stock/commodity markets",
            "Match momentum, timing, and price movement basics",
            '"Data + Decision = Profit" model',
            "Why this is India's most underrated online skill",
          ],
        },
        {
          title: "Module 2: Indian Market Sports Trading Blueprint",
          description: "2025 Ready",
          details: [
            "India's booming sports trading ecosystem",
            "The roles of analysts, match readers & platform partners",
            "Legal pathways to start responsibly",
            "Who the top consultants are (case-style reference)",
          ],
        },
        {
          title: "Module 3: Sports Trading vs Stock Trading",
          description: "Strategic Comparison",
          details: [
            "Deep dive: Risk, reward, psychology, skill",
            "Why sports trading is faster & more engaging",
            'Shared strategies like "Value Investing = Value Trading"',
            "CTA to explore advanced tools & dashboards",
          ],
        },
      ],
      ctaText: "Enroll For Free",
      ctaLink: "/enroll/blueprint",
    },
    {
      id: "pro",
      backgroundColor: "bg-[#0a2a2f]",
      category: "INTERMEDIATE",
      title: "PRO LEARNER PLAN",
      tagline: "Level up with advanced tools and mentorship",
      price: "₹799/month",
      content:
        "Best for fantasy pros, aspiring analysts, Telegram group admins, and semi-serious traders. Structured progression + Live Tools + Real-World Application.",
      imageSrc: "/pro-analysis.jpg",
      modules: [
        {
          title: "Module 4: Data Science of Match Prediction",
          description: "From Gut to Graphs",
          details: [
            "Match phase + momentum analysis techniques",
            "Team forms, pitch data, and timing entry",
            "Candle pattern analogy for timing trades",
            "Real-time alerts and smart triggers",
          ],
        },
        {
          title: "Module 5: Decision Making Framework",
          description: "Of a Pro Sports Trader",
          details: [
            "Entry–exit planning through live analytics",
            'Volume control using "Split Sizing"',
            "Strategy switching mid-match",
            "Downloadable worksheet: Decision Tree Matrix",
          ],
        },
        {
          title: "Bonus Access",
          description: "Pro Tools & Mentorship",
          details: [
            "Telegram-compatible dashboards",
            "Trading log sheets",
            "2 mentorship calls/month",
          ],
        },
      ],
      ctaText: "Start Pro Plan",
      ctaLink: "/enroll/pro",
    },
    {
      id: "expert",
      backgroundColor: "bg-[#004d40]",
      category: "ADVANCED",
      title: "EXPERT SUITE",
      tagline: "Full professional toolkit for serious analysts",
      price: "₹1,999/month",
      content:
        "For independent consultants, expert fantasy players, data scientists, and community leaders. Full suite of knowledge + community monetization.",
      imageSrc: "/expert-toolkit.jpg",
      modules: [
        {
          title: "Premium Expert Guides",
          description: "Free for Early Members",
          details: [
            "Game Decoder: Advanced momentum switch recognition",
            "Trading Calendar: Weekly goal-setting framework",
            "₹500 to ₹50,000 Transformation Map",
            "The Consultant's Toolkit: Monetize your knowledge",
            "Low-Risk High-Control Career Model",
          ],
        },
        {
          title: "Advanced Access",
          description: "Tools & Community",
          details: [
            "All Pro Plan benefits included",
            "Priority analytics updates",
            "Access to expert community",
            "Weekly strategy sessions",
            "Personal growth roadmap",
          ],
        },
      ],
      ctaText: "Become an Expert",
      ctaLink: "/enroll/expert",
    },
  ];

  return (
    <section
      className="w-full py-16 md:py-24 bg-white relative"
      ref={sectionRef}
    >
      {/* Grid Background - like in HeroSection */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 w-px bg-white/7"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            className="mb-3"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/favicon.ico"
              alt="courses logo"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold font-manrope text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured <span className="text-lighter">Courses</span>
          </motion.h2>
          <motion.p
            className="mt-3 text-white/80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Master cricket analysis and sports trading with our structured
            learning paths
          </motion.p>
        </div>
        course: Course;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
              isExpanded={selectedCourse === course.id}
              onToggleExpand={() => handleCourseSelect(course.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CourseCardProps {
  course: Course;
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

// Reuse the Course interface from the parent component
interface Course {
  id: string;
  backgroundColor: string;
  category: string;
  title: string;
  tagline: string;
  price: string;
  content: string;
  imageSrc: string;
  modules: {
    title: string;
    description: string;
    details: string[];
  }[];
  ctaText: string;
  ctaLink: string;
}

function CourseCard({
  course,
  index,
  isExpanded,
  onToggleExpand,
}: CourseCardProps) {
  return (
    <motion.div
      className={`story-card rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-lg ${course.backgroundColor} opacity-0`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 0 }} // Will be animated by Intersection Observer
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={course.imageSrc || "/placeholder.svg"}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-0 left-0 m-3 bg-[#c8f65d] text-[#0a2a2f] px-3 py-1 rounded-full text-xs font-bold">
          {course.category}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <span className="text-[#c8f65d] text-sm font-bold">
            {course.price}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-white">{course.title}</h3>
          <button
            onClick={onToggleExpand}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c8f65d] text-[#0a2a2f] hover:bg-[#c8f65d]/75 transition-colors"
          >
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
        <p className="text-sm text-white mb-4">{course.tagline}</p>
        <p className="text-sm text-white/80 mb-4">{course.content}</p>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-white/10"
          >
            {course.modules.map(
              (module: Course["modules"][number], i: number) => (
                <div key={i} className="mb-4">
                  <h4 className="font-bold text-sm mb-1 text-[#c8f65d]">
                    {module.title}
                  </h4>
                  <p className="text-sm text-white/70 mb-2">
                    {module.description}
                  </p>
                  <ul className="text-xs text-white/60 space-y-1 pl-4">
                    {module.details.map((detail: string, j: number) => (
                      <li key={j} className="list-disc">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </motion.div>
        )}

        <Link
          href={course.ctaLink}
          className="mt-4 inline-block bg-[#c8f65d] text-[#0a2a2f] hover:bg-[#c8f65d]/75 transition-colors duration-200 text-sm font-medium py-3 px-4 rounded-full w-full text-center"
        >
          {course.ctaText}
        </Link>
      </div>
    </motion.div>
  );
}
