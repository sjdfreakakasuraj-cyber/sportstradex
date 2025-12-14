"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import ImageOne from "@/assets/howitworks/howitworks_1.png";
import ImageTwo from "@/assets/howitworks/howitworks_2.png";
import ImageThree from "@/assets/landing-page/step-3.png";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      heading: "Create",
      description:
        "Create your free affiliate account in seconds and unlock your personal dashboard to start tracking clicks, signups, and income — all in one place. No investment needed.",
      alt: "SportsTradex Affiliate Program - 15% commission on client winnings",
      imgSrc: ImageOne,
    },
    {
      number: 2,
      title: "Share & Promote",
      heading: "Engage",
      description:
        "Get your unique referral link and start promoting it via WhatsApp, Instagram, Telegram, YouTube, or personal contacts. Use our promo kit, custom creatives, and link generator to boost engagement.",
      alt: "Free Blueprint Course - Learn Sports Trading from Zero",
      imgSrc: ImageTwo,
    },
    {
      number: 3,
      title: "Earn & Grow",
      heading: "Analyze",
      description:
        "Earn commissions for every successful referral and user activity. Track your growth in real time, and withdraw your earnings weekly. Build your own sub-affiliate team and earn extra 10% from their success too.",
      alt: "Pocket Money Program - Earn by sharing content",
      imgSrc: ImageThree,
    },
  ];

  return (
    <section className="pt-16 pb-10 md:pt-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header section */}
        <div className="mb-16 md:mb-24">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-6 font-manrope">
              How it works
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Manage your experience from start to finish, from integrations to
              registration and from interactive stage elements to post-event
              data, it&apos;s all here.
            </p>
            <button className="bg-lime-500 hover:bg-lime-500/75 text-white font-medium py-3 px-8 rounded-full transition-all">
              Learn more
            </button>
          </div>
        </div>

        {/* Steps section */}
        <div className="space-y-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid md:grid-cols-12 gap-0 md:gap-6 items-center"
            >
              {/* Step Info */}
              <div className="md:col-span-4 flex flex-col justify-center space-y-5">
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Step {step.number}
                </p>
                <div className="flex items-center mb-2">
                  <h3 className="text-3xl md:text-4xl font-bold font-manrope">
                    {step.heading}
                  </h3>
                  <ArrowUpRight className="h-6 w-6 ml-2" />
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Image - Consistent styling and presentation */}
              <div className="md:col-span-8">
                <div className="rounded-3xl overflow-hidden bg-white  md:p-6">
                  <div className="w-full h-48 sm:h-56 md:h-80 lg:h-96 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50/5 to-transparent rounded-2xl" />
                    <Image
                      src={step.imgSrc}
                      alt={step.alt}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                      className="rounded-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
