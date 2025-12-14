"use client";

import dynamic from "next/dynamic";
import { BookOpen, Users } from "lucide-react";

// Dynamically import motion components to avoid the "export *" error
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function WhyOurCourse() {
  return (
    <section className="py-10 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose <span className="text-[#c8f65d]">Our Courses</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We provide a comprehensive learning experience that transforms
            beginners into skilled sports traders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <MotionDiv
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="bg-[#c8f65d] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <BookOpen className="text-[#0a2a2f]" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Structured Curriculum
            </h3>
            <p className="text-white/80 text-lg">
              Our courses follow a proven step-by-step approach that builds your
              knowledge and skills progressively, ensuring you master every
              concept.
            </p>
          </MotionDiv>

          <MotionDiv
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="bg-[#c8f65d] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Users className="text-[#0a2a2f]" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Community Support
            </h3>
            <p className="text-white/80 text-lg">
              Join our active Telegram community and weekly Zoom calls for
              ongoing support, networking, and guidance from experienced
              traders.
            </p>
          </MotionDiv>

          <MotionDiv
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="bg-[#c8f65d] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <svg
                className="text-[#0a2a2f]"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v6.5l3 1.5" />
                <path d="M12 2 9 10l-7 4" />
                <path d="M12 2l3 8 7 4" />
                <path d="M9 10l.81 8.59L12 22l2.19-3.41L15 10" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Proven Earning Potential
            </h3>
            <p className="text-white/80 text-lg">
              Our students have consistently turned their knowledge into income,
              with many reporting 30-50% monthly returns on their trading
              capital.
            </p>
          </MotionDiv>
        </div>

        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-[#c8f65d] text-4xl font-bold mb-2">
                ₹38,500+
              </div>
              <p className="text-white/80">Average Monthly Earnings</p>
            </div>
            <div className="text-center">
              <div className="text-[#c8f65d] text-4xl font-bold mb-2">85%</div>
              <p className="text-white/80">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-[#c8f65d] text-4xl font-bold mb-2">
                3,200+
              </div>
              <p className="text-white/80">Active Traders</p>
            </div>
            <div className="text-center">
              <div className="text-[#c8f65d] text-4xl font-bold mb-2">
                30-50%
              </div>
              <p className="text-white/80">Monthly ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
