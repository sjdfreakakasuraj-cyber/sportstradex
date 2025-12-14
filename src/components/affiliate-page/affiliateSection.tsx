"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  DollarSign,
  FileText,
  Globe,
  LineChart,
  Percent,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Placeholder1 from "@/assets/landing-page/agent-dashboard.png";
import Placeholder2 from "@/assets/affiliate/1.png";

export default function AffiliateSection() {
  const [visibleStories, setVisibleStories] = useState(3);
  const totalStories = 6;
  const [isInView, setIsInView] = useState(false);
  const statsRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after a short delay to ensure animations are ready
    setTimeout(() => {
      setIsLoading(false);
    }, 300);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [visibleStories]);

  useEffect(() => {
    // Preload animations for better performance
    const preloadAnimations = () => {
      // This triggers the animations to be ready when components come into view
      setTimeout(() => {
        setIsInView(true);
      }, 100);
    };

    preloadAnimations();

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (this: HTMLAnchorElement, e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href")!);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });

    // Add responsive checks
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      if (isMobileView && visibleStories > 1) {
        setVisibleStories(1);
      } else if (!isMobileView && visibleStories === 1) {
        setVisibleStories(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLoadMore = () => {
    setVisibleStories(totalStories);
  };

  const successStories = [
    {
      name: "Amit",
      location: "College Student, Delhi",
      amount: "₹1.3 Lakh",
      period: "4 Months",
      testimonial:
        "I started with zero investment while attending college. Within 3 weeks, I onboarded 10 cricket-fanatic friends as clients. Today, I earn more than ₹30,000/month in passive income, all while studying full-time.",
      achievements: [
        "Trained using the free blueprint",
        "Built a Telegram group for tips & conversions",
        "Now mentoring juniors under him",
      ],
      initial: "A",
    },
    {
      name: "Sneha",
      location: "Digital Marketer, Mumbai",
      amount: "₹2.7 Lakhs",
      period: "6 Months",
      testimonial:
        "I already handled SEO and affiliate work for e-commerce clients. With SportsTradex, I finally found an offer that converts effortlessly. The dashboard, payouts, and support are next level.",
      achievements: [
        "Created a 2-page landing funnel with her links",
        "Onboarded 80+ clients organically",
        "Now runs targeted WhatsApp ads",
      ],
      initial: "S",
    },
    {
      name: "Ravi",
      location: "Part-Time Freelancer, Hyderabad",
      amount: "₹95,000",
      period: "3 Months",
      testimonial:
        "I promoted finance and trading tools on YouTube. SportsTradex gave me something new: a performance-based model with no fake promises. I reached ₹50K/month in 90 days.",
      achievements: [
        "Integrated affiliate links in his video descriptions",
        "Used blueprint scripts in DMs",
        "Grew client base from 0 to 40 organically",
      ],
      initial: "R",
    },
    {
      name: "Karan",
      location: "Gaming Influencer, Jaipur",
      amount: "₹4.2 Lakhs",
      period: "7 Months",
      testimonial:
        "I built a community of gamers who love online challenges. When I introduced SportsTradex with my referral, they loved the real-money concept. My earnings now beat what I make from game sponsorships.",
      achievements: [
        "Promoted through gaming Discord servers",
        "Created reels & story shoutouts",
        "Joined leaderboard 3x for bonuses",
      ],
      initial: "K",
    },
    {
      name: "Farha",
      location: "Housewife, Lucknow",
      amount: "₹70,000+",
      period: "5 Months",
      testimonial:
        "I had no technical skills. But the free training made it simple. I help relatives and neighbors learn trading safely, and I earn as they win. It feels amazing to contribute to my family income again.",
      achievements: [
        "Focused on local referrals",
        "Used ready-made creatives from SportsTradex",
        "Withdraws earnings via UPI monthly",
      ],
      initial: "F",
    },
    {
      name: "Siddharth",
      location: "Telegram Admin, Kolkata",
      amount: "₹1.8 Lakh",
      period: "2 Months",
      testimonial:
        "With 2 active Telegram channels, I used the blueprint strategy to redirect users to SportsTradex. Once they started profiting, commissions came in like clockwork.",
      achievements: [
        "Onboarded 200+ users with just 3 promos",
        "Built trust using payout screenshots & client results",
        "Added SportsTradex as a pinned message",
      ],
      initial: "S",
    },
  ];

  const whoShouldJoin = [
    {
      title: "Digital Marketers",
      description:
        "Add a high-converting offer to your existing marketing channels and maximize your ROI.",
      icon: Globe,
    },
    {
      title: "Students & Side Hustlers",
      description:
        "Build a passive income stream with zero investment while studying or working your day job.",
      icon: Users,
    },
    {
      title: "Influencers & Channel Admins",
      description:
        "Monetize your Telegram, WhatsApp, or social media audience with a valuable offer.",
      icon: Users,
    },
    {
      title: "Content Creators",
      description:
        "Cricket, Gaming & Finance content creators can offer real value to their audience.",
      icon: Users,
    },
    {
      title: "Freelancers",
      description:
        "Add a reliable passive income stream to complement your freelance work.",
      icon: Users,
    },
    {
      title: "Passive Income Seekers",
      description:
        "Anyone looking to build a real online income stream with long-term growth potential.",
      icon: DollarSign,
    },
  ];

  const counterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="flex flex-col min-h-dvh overflow-x-hidden">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#0e2e2e] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onAnimationComplete={() => setIsLoading(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              <motion.div
                className="w-4 h-4 bg-[#b4ff00] rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
              <motion.div
                className="w-4 h-4 bg-[#b4ff00] rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
              <motion.div
                className="w-4 h-4 bg-[#b4ff00] rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* 15% Commission Section - Enhanced */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto bg-gradient-to-r from-[#0e2e2e] to-[#1a4747] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-10 text-white relative overflow-hidden">
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-6">
                    Earn <span className="text-[#b4ff00]">15% Lifetime</span>{" "}
                    Commission
                  </h2>
                  <p className="text-gray-200 mb-6">
                    When your clients win, you win too. Our unique
                    profit-sharing model ensures your earnings grow as your
                    network succeeds.
                  </p>

                  <div className="flex items-center mb-6">
                    <div className="h-14 w-14 rounded-full bg-[#b4ff00] flex items-center justify-center mr-4">
                      <Percent className="h-7 w-7 text-[#0e2e2e]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Commission Rate</p>
                      <p className="text-2xl font-bold">15% Lifetime</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-[#b4ff00] mr-3 flex-shrink-0" />
                      <span>No caps or limits on your earnings</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-[#b4ff00] mr-3 flex-shrink-0" />
                      <span>Earn from every trade your clients make</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-[#b4ff00] mr-3 flex-shrink-0" />
                      <span>Transparent tracking and reporting</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="bg-[#f8f8f8] p-8 md:p-10 relative" ref={statsRef}>
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-[#0e2e2e] mb-8">
                    How It Works
                  </h3>

                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#0e2e2e] text-white flex items-center justify-center mr-4">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0e2e2e] mb-1">
                          Your Client Makes a Profit
                        </h4>
                        <p className="text-gray-600 text-sm">
                          When your referred client profits from trading
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#0e2e2e] text-white flex items-center justify-center mr-4">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0e2e2e] mb-1">
                          We Calculate Your Commission
                        </h4>
                        <p className="text-gray-600 text-sm">
                          15% of their profit is automatically credited to you
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#0e2e2e] text-white flex items-center justify-center mr-4">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0e2e2e] mb-1">
                          Withdraw Anytime
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Cash out via UPI, Bank, PayPal or Crypto
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="text-center p-4 bg-white rounded-lg shadow-sm"
                        custom={0}
                        variants={counterAnimation}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      >
                        <p className="text-sm text-gray-500">Minimum Payout</p>
                        <p className="text-2xl font-bold text-[#0e2e2e]">
                          ₹500
                        </p>
                      </motion.div>

                      <motion.div
                        className="text-center p-4 bg-white rounded-lg shadow-sm"
                        custom={1}
                        variants={counterAnimation}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      >
                        <p className="text-sm text-gray-500">
                          Avg. Monthly Earnings
                        </p>
                        <p className="text-2xl font-bold text-[#0e2e2e]">
                          ₹30,000+
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section - Enhanced */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Join the <span className="text-[#0e2e2e]">SportsTradex</span>{" "}
              Affiliate Program?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Welcome to India&apos;s most advanced and rewarding affiliate
              ecosystem. With the SportsTradex Affiliate Program, you earn a 15%
              lifetime commission on every client&apos;s profit — with zero
              upfront cost.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all h-full bg-white overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b4ff00] to-[#0e2e2e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-6">
                  <div className="bg-[#b4ff00]/20 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-[#b4ff00]/40 transition-colors duration-300">
                    <DollarSign className="h-8 w-8 text-[#0e2e2e]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Zero Investment Required
                  </h3>
                  <p className="text-gray-600">
                    Start your affiliate journey without spending a single
                    rupee. No registration fees, no hidden charges.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all h-full bg-white overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b4ff00] to-[#0e2e2e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-6">
                  <div className="bg-[#b4ff00]/20 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-[#b4ff00]/40 transition-colors duration-300">
                    <Percent className="h-8 w-8 text-[#0e2e2e]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    15% Lifetime Profit Commission
                  </h3>
                  <p className="text-gray-600">
                    Earn 15% of your clients&apos; profits for life. The more
                    they win, the more you earn.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all h-full bg-white overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b4ff00] to-[#0e2e2e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-6">
                  <div className="bg-[#b4ff00]/20 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-[#b4ff00]/40 transition-colors duration-300">
                    <BarChart3 className="h-8 w-8 text-[#0e2e2e]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Real-Time Affiliate Dashboard
                  </h3>
                  <p className="text-gray-600">
                    Track your earnings, client activity, and performance
                    metrics in real-time with our intuitive dashboard.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all h-full bg-white overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b4ff00] to-[#0e2e2e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-6">
                  <div className="bg-[#b4ff00]/20 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-[#b4ff00]/40 transition-colors duration-300">
                    <FileText className="h-8 w-8 text-[#0e2e2e]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Free Expert Training & Client Blueprint
                  </h3>
                  <p className="text-gray-600">
                    Access our comprehensive training program and client
                    acquisition blueprint at no cost.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all h-full bg-white overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b4ff00] to-[#0e2e2e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-6">
                  <div className="bg-[#b4ff00]/20 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-[#b4ff00]/40 transition-colors duration-300">
                    <CreditCard className="h-8 w-8 text-[#0e2e2e]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Instant Withdrawals
                  </h3>
                  <p className="text-gray-600">
                    Get paid instantly via UPI, Bank Transfer, PayPal, or
                    Cryptocurrency. Minimum payout: Just ₹500.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all h-full bg-white overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b4ff00] to-[#0e2e2e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardContent className="p-6">
                  <div className="bg-[#b4ff00]/20 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-[#b4ff00]/40 transition-colors duration-300">
                    <Award className="h-8 w-8 text-[#0e2e2e]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Leaderboards & Bonuses
                  </h3>
                  <p className="text-gray-600">
                    Compete for monthly rewards and recognition. Top affiliates
                    receive additional bonuses.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Your All-In-One Affiliate{" "}
                <span className="text-[#0e2e2e]">Command Center</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Gain access to the most powerful Affiliate Dashboard in the
                industry — built to help you grow your network and earnings at
                scale.
              </p>

              <div className="space-y-6">
                <motion.div
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#0e2e2e] text-white">
                      <LineChart className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Live Analytics</h3>
                    <p className="mt-2 text-gray-600">
                      Monitor each client&apos;s profit, trading activity &
                      status in real-time
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#0e2e2e] text-white">
                      <FileText className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">
                      Automated Commission Reports
                    </h3>
                    <p className="mt-2 text-gray-600">
                      View daily, weekly, and monthly earnings breakdowns
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#0e2e2e] text-white">
                      <Globe className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">
                      Custom Referral Links
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Unique, trackable links with real-time reporting
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#0e2e2e] text-white">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">
                      Client Funnel Tracking
                    </h3>
                    <p className="mt-2 text-gray-600">
                      See when users sign up, activate, trade, and profit
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#0e2e2e] text-white">
                      <CreditCard className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">
                      One-Click Withdrawals
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Instant payments to Bank, UPI, PayPal, or Crypto
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="relative mt-12 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-xl p-2 md:p-4 transform transition-all duration-500 hover:rotate-1 hover:scale-105">
                <Image
                  src={Placeholder1}
                  alt="Affiliate Dashboard"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#b4ff00] text-[#0e2e2e] px-4 py-2 rounded-lg font-bold shadow-lg transform transition-transform duration-300 hover:scale-110">
                  Real-time tracking
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 bg-[#0e2e2e] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Premium Training —{" "}
              <span className="text-[#b4ff00]">100% Free</span> for Every
              Affiliate
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              To ensure you don&apos;t just promote, but convert like a pro, we
              give you full access to our expert training system
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-[0_0_30px_rgba(180,255,0,0.1)]">
                <h3 className="text-2xl font-bold mb-4 text-[#b4ff00]">
                  &quot;Sports Trading Success Blueprint&quot;
                </h3>
                <p className="text-gray-300 mb-6">
                  8+1 Modules Built by professional traders and analysts
                </p>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#b4ff00] mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">
                        Lifetime access to expert-led training
                      </h4>
                      <p className="text-sm text-gray-400">
                        Complete digital program with ongoing updates
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#b4ff00] mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">
                        Marketing creatives & promotional assets
                      </h4>
                      <p className="text-sm text-gray-400">
                        Ready-to-use videos, images, and copy
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#b4ff00] mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">
                        Client engagement workflows
                      </h4>
                      <p className="text-sm text-gray-400">
                        Consultation scripts and conversion strategies
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#b4ff00] mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">
                        Certification upon completion
                      </h4>
                      <p className="text-sm text-gray-400">
                        Boost your credibility with official recognition
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#b4ff00] mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Dedicated support group</h4>
                      <p className="text-sm text-gray-400">
                        Exclusive access for top affiliates
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="mt-8 bg-[#b4ff00]/20 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-[#b4ff00] font-bold">
                    Everything 100% FREE — no hidden fees
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src={Placeholder2}
                alt="Training Blueprint"
                width={600}
                height={500}
                className="rounded-lg transform transition-all duration-500 hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-[#b4ff00] text-[#0e2e2e] px-4 py-2 rounded-lg font-bold shadow-lg transform transition-transform duration-300 hover:scale-110">
                Free Access
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How You Earn Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How You Earn —{" "}
              <span className="text-[#0e2e2e]">
                Simple, Transparent, Rewarding
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our Win-Win Model: help your clients profit through sports
              trading, and watch your income grow with them
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <motion.div
                  className="text-center md:text-left"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-500 mb-2">When your client earns</p>
                  <div className="text-4xl font-bold text-[#0e2e2e]">
                    ₹5,000
                  </div>
                  <p className="text-sm text-gray-500 mt-1">profit</p>
                </motion.div>

                <div className="flex items-center">
                  <div className="h-0.5 w-12 bg-gray-300 hidden md:block"></div>
                  <motion.div
                    className="bg-[#b4ff00] rounded-full p-3 mx-4"
                    initial={{ rotate: -10, scale: 0.9 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Percent className="h-6 w-6 text-[#0e2e2e]" />
                  </motion.div>
                  <div className="h-0.5 w-12 bg-gray-300 hidden md:block"></div>
                </div>

                <motion.div
                  className="text-center md:text-left"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-500 mb-2">You earn</p>
                  <div className="text-4xl font-bold text-[#0e2e2e]">₹750</div>
                  <p className="text-sm text-gray-500 mt-1">commission</p>
                </motion.div>

                <motion.div
                  className="hidden md:block"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-[#0e2e2e] text-white px-4 py-2 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                    <p className="text-sm">Automatically tracked</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4">
                  What Makes Us Different?
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Shield className="h-5 w-5 text-[#0e2e2e] mr-3 mt-1" />
                    <div>
                      <p className="font-medium">ZERO Upfront Investment</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Percent className="h-5 w-5 text-[#0e2e2e] mr-3 mt-1" />
                    <div>
                      <p className="font-medium">
                        15% Real Profit Commission — Lifetime
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <BarChart3 className="h-5 w-5 text-[#0e2e2e] mr-3 mt-1" />
                    <div>
                      <p className="font-medium">
                        Live Analytics & Transparent Dashboard
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <DollarSign className="h-5 w-5 text-[#0e2e2e] mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Minimum Payout: Just ₹500</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <CreditCard className="h-5 w-5 text-[#0e2e2e] mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Multiple Withdrawal Options</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Should Join Section - Enhanced */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Who Should Join?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our affiliate program is perfect for anyone looking to build a
              sustainable online income
            </p>
          </motion.div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {whoShouldJoin.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all h-full bg-white overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b4ff00] to-[#0e2e2e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <CardContent className="p-6">
                    <div className="bg-[#b4ff00]/20 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-[#b4ff00]/40 transition-colors duration-300">
                      <item.icon className="h-8 w-8 text-[#0e2e2e]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 bg-[#0e2e2e] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to <span className="text-[#b4ff00]">Get Started?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Join thousands of successful affiliates and start earning today
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex flex-col items-center text-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#b4ff00]/0 to-[#b4ff00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="bg-[#b4ff00] rounded-full w-12 h-12 flex items-center justify-center mb-4 relative z-10">
                  <span className="text-[#0e2e2e] font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 relative z-10">
                  Apply Now
                </h3>
                <p className="text-gray-300 relative z-10">
                  Get started at SportsTradex.in/Affiliate
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex flex-col items-center text-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#b4ff00]/0 to-[#b4ff00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="bg-[#b4ff00] rounded-full w-12 h-12 flex items-center justify-center mb-4 relative z-10">
                  <span className="text-[#0e2e2e] font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 relative z-10">
                  Access Dashboard
                </h3>
                <p className="text-gray-300 relative z-10">
                  Get your Dashboard + Free Blueprint
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex flex-col items-center text-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#b4ff00]/0 to-[#b4ff00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="bg-[#b4ff00] rounded-full w-12 h-12 flex items-center justify-center mb-4 relative z-10">
                  <span className="text-[#0e2e2e] font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2 relative z-10">
                  Start Promoting
                </h3>
                <p className="text-gray-300 relative z-10">
                  Use expert content & tools
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex flex-col items-center text-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#b4ff00]/0 to-[#b4ff00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="bg-[#b4ff00] rounded-full w-12 h-12 flex items-center justify-center mb-4 relative z-10">
                  <span className="text-[#0e2e2e] font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2 relative z-10">
                  Earn & Scale
                </h3>
                <p className="text-gray-300 relative z-10">
                  Build your 6-figure affiliate income
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-block bg-gradient-to-r from-[#b4ff00] to-[#d9ff80] p-6 rounded-lg mb-8 shadow-[0_0_30px_rgba(180,255,0,0.3)] transform transition-all duration-300 hover:scale-105"
                whileHover={{
                  boxShadow: "0 0 40px rgba(180,255,0,0.5)",
                  transition: { duration: 0.3 },
                }}
              >
                <p className="text-[#0e2e2e] font-bold text-lg">
                  <span className="bg-[#0e2e2e] text-[#b4ff00] px-3 py-1 rounded-md mr-2">
                    Limited Bonus
                  </span>
                  Apply this week and receive exclusive marketing assets &
                  one-on-one onboarding support
                </p>
              </motion.div>

              <Button className="bg-[#b4ff00] text-[#0e2e2e] hover:bg-[#a3e600] text-lg px-8 py-6 group transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(180,255,0,0.3)]">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Section - With Load More */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Success Stories from{" "}
              <span className="text-[#0e2e2e]">SportsTradex Affiliates</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Real people, real results. See how our affiliates are building
              sustainable income streams
            </p>
          </motion.div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {successStories.slice(0, visibleStories).map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all h-full group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#0e2e2e] rounded-full p-2 mr-3 group-hover:bg-[#b4ff00] transition-colors duration-300">
                        <span className="text-white font-bold group-hover:text-[#0e2e2e] transition-colors duration-300">
                          {story.initial}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold">{story.name}</h3>
                        <p className="text-sm text-gray-500">
                          {story.location}
                        </p>
                      </div>
                      <div className="ml-auto bg-[#b4ff00] text-[#0e2e2e] px-3 py-1 rounded-full text-sm font-bold">
                        {story.amount}
                        <span className="text-xs block text-[#0e2e2e]/70">
                          {story.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      &quot;{story.testimonial}&quot;
                    </p>
                    <div className="border-t pt-4">
                      {story.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-start mb-2 last:mb-0"
                        >
                          <CheckCircle2 className="h-5 w-5 text-[#0e2e2e] mr-2 mt-0.5" />
                          <p className="text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {visibleStories < totalStories && (
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={handleLoadMore}
                className="bg-[#0e2e2e] hover:bg-[#0e2e2e]/90 text-white px-8 py-6 text-lg group transition-all duration-300 hover:scale-105"
              >
                Load More Success Stories
                <ChevronDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-[#0e2e2e] text-white p-3 rounded-full shadow-lg hover:bg-[#0e2e2e]/90 transition-all duration-300 hover:scale-110"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-up"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </motion.button>
    </div>
  );
}
