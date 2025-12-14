"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Zap, Users, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const reasons = [
    {
      icon: <Shield className="h-6 w-6 text-[#c8f65d]" />,
      title: "Safe & Reliable",
      points: [
        "No app downloads or installation required",
        "No product selling or subscriptions",
        "No referral chain or networking needed",
        "Works even if you have zero followers",
        "Posts use verified, platform-friendly content",
        "Every post is reviewed for fairness and quality",
      ],
    },
    {
      icon: <Zap className="h-6 w-6 text-[#c8f65d]" />,
      title: "Why Are We Offering This?",
      description:
        "Instead of spending heavily on digital ads, we'd rather reward real people for promoting our platform. This initiative helps us grow while giving you a zero-cost opportunity to earn and learn. It's a win-win for smart users like you.",
    },
    {
      icon: <Users className="h-6 w-6 text-[#c8f65d]" />,
      title: "Terms & Conditions",
      points: [
        "Posts must remain public and follow guidelines for at least 7 days",
        "Deleted or hidden posts will not qualify",
        "All UPI payments are processed within 7 working days",
        "Only one Pocket Money account per user",
        "Fake activity or spamming leads to immediate disqualification",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-12 md:py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-[#0a2a2f] font-manrope leading-tight">
            Why Choose Our Pocket Money Program?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            We&lsquo;ve designed this program to be simple, transparent, and
            beneficial for everyone involved.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 h-full hover:shadow-xl transition-shadow duration-300 hover:border-[#c8f65d]/20"
              variants={itemVariants}
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0a2a2f] flex items-center justify-center mr-4 flex-shrink-0">
                  {reason.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0a2a2f] leading-tight">
                  {reason.title}
                </h3>
              </div>

              {reason.description && (
                <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                  {reason.description}
                </p>
              )}

              {reason.points && (
                <ul className="space-y-3 sm:space-y-4">
                  {reason.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#c8f65d] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
