import React from "react";
import Image from "next/image";
import Placeholder from "@/assets/pocketMoney/image.png";

const ChecklistImage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-darkest p-4 sm:p-6 lg:p-8">
      <div className="relative w-full h-full min-h-screen bg-black overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-3xl">
        {/* Background Image */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl lg:rounded-3xl overflow-hidden">
          <Image
            src={Placeholder}
            alt="Group of people on boat"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-white space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    Join over{" "}
                    <span className="block">
                      <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
                        40,000
                      </span>{" "}
                      <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                        accounts
                      </span>
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-lg">
                    Join the Pocket Money Program and step into the smarter side
                    of social media sharing now.
                  </p>
                </div>
              </div>

              {/* Right side - empty for image focus */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChecklistImage;
