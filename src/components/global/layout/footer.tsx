"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import Logo from "@/assets/logo/logo.png";

export function Footer() {
  const controls = useAnimation();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.2,
      color: "#c8f65d",
      transition: { duration: 0.2 },
    },
  };

  // Background gradient animation
  const gradientAnimation = {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-darkest">
      {/* Animated Background Element */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        animate={gradientAnimation}
        style={{
          background:
            "linear-gradient(45deg, #0a2a2f 0%, #228B22 50%, #0a2a2f 100%)",
          backgroundSize: "200% 200%",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <div className="relative text-white py-16 z-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={itemVariants}>
              <Link href="/" className="flex items-center mb-6">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={Logo}
                    alt="SportsTradex Logo"
                    width={40}
                    height={40}
                    className="mr-2"
                  />
                </motion.div>
                <motion.span
                  className="text-xl font-extrabold font-manrope"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(76, 225, 182, 0)",
                      "0 0 5px rgba(76, 225, 182, 0.5)",
                      "0 0 0px rgba(76, 225, 182, 0)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  SportsTradex
                </motion.span>
              </Link>
              <p className="text-white/80 mb-6 max-w-xs">
                India&apos;s first structured, skill-based cricket analytics and
                sports trading training platform.
              </p>
              <div className="flex space-x-5">
                {[
                  { icon: Twitter, link: "#" },
                  { icon: Instagram, link: "#" },
                  { icon: Linkedin, link: "#" },
                  { icon: Facebook, link: "#" },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    variants={socialIconVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    <Link
                      href={social.link}
                      className="text-white/70 hover:text-[#c8f65d] transition duration-300"
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-extrabold mb-6 font-manrope">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { text: "Home", link: "/" },
                  { text: "Courses", link: "/courses" },
                  { text: "Pocket Money", link: "/pocket-money" },
                  { text: "Our Experts", link: "/experts" },
                  { text: "Testimonials", link: "/reviews" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={item.link}
                      className="text-white/70 hover:text-[#c8f65d] transition duration-300"
                    >
                      {item.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-extrabold mb-6 font-manrope">
                Legal
              </h3>
              <ul className="space-y-3">
                {[
                  { text: "Terms of Service", link: "#" },
                  { text: "Privacy Policy", link: "#" },
                  { text: "Refund Policy", link: "#" },
                  { text: "Cookie Policy", link: "#" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={item.link}
                      className="text-white/70 hover:text-[#c8f65d] transition duration-300"
                    >
                      {item.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-extrabold mb-6 font-manrope">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="text-white/70">
                  Email: support@sportstradex.in
                </li>
                <li className="text-white/70">Phone: +91 98765 43210</li>
                <li className="text-white/70">Address: Mumbai, India</li>
              </ul>
              <div className="mt-6">
                <h4 className="text-sm font-extrabold mb-3 font-manrope">
                  Subscribe to our newsletter
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-l-md w-full text-sm focus:outline-none border border-white/10 focus:border-[#c8f65d]"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-[#c8f65d] hover:bg-[#c8f65d]/90 text-darkest font-medium rounded-l-none">
                      Subscribe
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="border-t border-white/10 pt-8 text-center"
            variants={itemVariants}
          >
            <motion.p
              className="text-white/60 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Built for Responsible Learning. Designed for Smarter Decisions.
            </motion.p>
            <motion.p
              className="text-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              © 2025 SportsTradex.in. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
