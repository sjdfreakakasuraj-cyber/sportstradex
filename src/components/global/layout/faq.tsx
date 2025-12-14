"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [selectedFAQ, setSelectedFAQ] = useState(0);

  const faqs: FAQItem[] = [
    {
      question: "What is SportsTradeX?",
      answer:
        "SportsTradeX is India’s first structured, skill‑based sports trading and analysis platform. We combine data science, expert guidance, and real‑time market insights to help you trade sports outcomes with confidence.",
    },
    {
      question: "Which sports markets can I trade on?",
      answer:
        "You can trade in a variety of markets including Cricket, Football, Badminton, Poker and Greyhound Racing, with more sports coming soon.",
    },
    {
      question: "How does the Pocket Money program work?",
      answer:
        "Pocket Money lets you deploy small amounts of capital into curated trading strategies created by our experts. Earn passive returns as they manage risk and optimize for consistent growth.",
    },
    {
      question: "What is the Affiliate program?",
      answer:
        "Refer friends and fellow traders to SportsTradeX to earn up to 20% commission on their subscription fees, plus exclusive bonuses when they hit trading milestones.",
    },
    {
      question: "Are there any fees or commissions?",
      answer:
        "We charge a nominal platform fee of 0.5% per trade to cover data feeds, platform maintenance, and expert support. Premium members get fee waivers and discounted rates.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "Our team of quantitative analysts and former professional traders are available 24/7 via chat and email. You also get access to weekly live webinars and one‑on‑one coaching sessions.",
    },
    {
      question: "What is Surge Pricing?",
      answer:
        "During high‑volatility events (e.g., major tournaments, playoffs), a small surge fee may apply to ensure deep liquidity and fast execution. This fee is transparently displayed before you confirm any trade.",
    },
  ];

  return (
    <div className="w-full relative">
      {/* Split background */}
      <div className="absolute inset-0 z-0">
        <div className="h-1/2 bg-white"></div>
        <div className="h-1/2 bg-lighter"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-3 md:px-4 py-8">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* FAQ Questions Column */}
            <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <h2 className="text-xl md:text-2xl font-extrabold text-darkest mb-4 md:mb-6 font-manrope">
                FAQs.
              </h2>
              <div className="space-y-2 md:space-y-3">
                {faqs.map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFAQ(index)}
                    className={`w-full text-left p-2 md:p-3 rounded-md flex justify-between items-center transition-colors text-sm md:text-base ${
                      selectedFAQ === index
                        ? "bg-darkest text-white"
                        : "text-darkest hover:bg-darkest/10"
                    }`}
                  >
                    <span className="pr-2">{faq.question}</span>
                    {selectedFAQ === index && (
                      <Star className="h-3 w-3 md:h-4 md:w-4 text-lighter fill-lighter flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Answer Column */}
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-extrabold text-darkest mb-4 md:mb-6 font-manrope">
                Ans.
              </h2>
              <div className="bg-lighter p-4 md:p-6 rounded-md">
                <div className="flex items-start gap-2">
                  <Star className="h-3 w-3 md:h-4 md:w-4 mt-1 text-darkest fill-darkest flex-shrink-0" />
                  <p className="text-darkest text-sm md:text-base">
                    {faqs[selectedFAQ].answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
