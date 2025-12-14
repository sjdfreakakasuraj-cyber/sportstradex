"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, User, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Check for user authentication (replace with your auth logic)
  useEffect(() => {
    // Example: Check if user token exists in localStorage
    const userToken = localStorage.getItem("userToken");
    setIsAuthenticated(!!userToken);
  }, []);

  // Check for scroll position on both initial load and scroll
  useEffect(() => {
    // Set initial scroll state on component mount
    const initialCheck = () => {
      setScrolled(window.scrollY > 10);
    };

    // Handle scroll events
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Run initial check immediately
    initialCheck();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle clicks outside of profile dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Logout function
  const handleLogout = () => {
    // Example: Remove user token from localStorage
    localStorage.removeItem("userToken");
    setIsAuthenticated(false);
    setIsProfileOpen(false);
    // Add any additional logout logic here
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-darkest/80 backdrop-blur-sm shadow-md"
          : "bg-darkest backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transform hover:scale-105 duration-300 ease-in-out"
          >
            <div className="relative h-8 w-auto">
              <div className="flex items-center gap-2">
                <Image
                  src={Logo}
                  alt="SportsTradeX"
                  className="h-10 w-auto pl-2"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 font-bold lg:font-extrabold font-manrope">
            <Link
              href="/courses"
              className="text-white hover:text-lighter transition-colors text-xs lg:text-base whitespace-nowrap"
            >
              Courses
            </Link>
            <Link
              href="/experts"
              className="text-white hover:text-lighter transition-colors text-xs lg:text-base whitespace-nowrap"
            >
              Our Experts
            </Link>
            <Link
              href="/pocketmoney"
              className="text-white hover:text-lighter transition-colors text-xs lg:text-base whitespace-nowrap"
            >
              Pocket Money
            </Link>
            <Link
              href="/affiliate"
              className="text-white hover:text-lighter transition-colors text-xs lg:text-base whitespace-nowrap"
            >
              Affiliate
            </Link>
            <Link
              href="/reviews"
              className="text-white hover:text-lighter transition-colors text-xs lg:text-base whitespace-nowrap"
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-lighter transition-colors text-xs lg:text-base whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          {/* Auth Buttons or Profile */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {isAuthenticated ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 text-white hover:text-lighter transition-colors"
                  aria-expanded={isProfileOpen}
                  aria-haspopup="true"
                >
                  <div className="relative w-8 h-8 overflow-hidden rounded-full bg-lighter/20 border border-lighter/40">
                    <User className="h-5 w-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lighter" />
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isProfileOpen ? "rotate-180" : ""
                    )}
                  />
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 py-2 bg-dark border border-white/10 rounded-lg shadow-lg z-50">
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-2 text-xs text-white hover:bg-white/5 hover:text-lighter"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="flex items-center px-4 py-2 text-xs text-white hover:bg-white/5 hover:text-lighter"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2 text-xs text-white hover:bg-white/5 hover:text-lighter"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-white px-4 py-1.5 lg:px-5 lg:py-2 rounded-full border border-white/20 hover:bg-lighter/25 transition-colors text-xs md:text-sm"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-lighter text-darkest font-medium px-4 py-1.5 lg:px-5 lg:py-2 rounded-full hover:bg-lighter/75 transition-colors text-xs md:text-sm"
                >
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-[420px] opacity-100 py-2" : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col space-y-3 pb-3 bg-dark shadow-lg rounded-lg p-4 border border-white/10 tracking-wide font-extrabold font-manrope">
            <Link
              href="/courses"
              className="text-white/90 hover:text-lighter transition-colors text-center py-2 rounded-md hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/experts"
              className="text-white/90 hover:text-lighter transition-colors text-center py-2 rounded-md hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Experts
            </Link>
            <Link
              href="/pocketmoney"
              className="text-white/90 hover:text-lighter transition-colors text-center py-2 rounded-md hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Pocket Money
            </Link>
            <Link
              href="/affiliate"
              className="text-white/90 hover:text-lighter transition-colors text-center py-2 rounded-md hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Affiliate
            </Link>
            <Link
              href="/reviews"
              className="text-white/90 hover:text-lighter transition-colors text-center py-2 rounded-md hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className="text-white/90 hover:text-lighter transition-colors text-center py-2 rounded-md hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Auth buttons or Profile for mobile */}
            {isAuthenticated ? (
              <div className="mt-2 pt-2 border-t border-white/10">
                <Link
                  href="/profile"
                  className="flex items-center justify-center py-2 text-white/90 hover:text-lighter hover:bg-white/5 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center justify-center py-2 text-white/90 hover:text-lighter hover:bg-white/5 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center py-2 text-white/90 hover:text-lighter hover:bg-white/5 rounded-md"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href="/login"
                  className="text-white text-center px-3 py-2 rounded-full border border-white/20 hover:bg-lighter/25 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-lighter text-center text-darkest font-medium px-3 py-2 rounded-full hover:bg-lighter/75 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
