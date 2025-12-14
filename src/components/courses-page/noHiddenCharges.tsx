import Image from "next/image";
import { BadgePercent, TrendingUp, Users, LineChart } from "lucide-react";
import PhoneMockup from "@/assets/courses/nohiddencharges.png";

export default function NoHiddenCharges() {
  return (
    <section className="bg-white text-black py-6 px-6 md:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-light text-sm md:text-base mb-2 animate-fadeIn">
            40,000 STUDENTS & COUNTING
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2 animate-slideUp font-manrope">
            No hidden fees. No prior checks.
          </h2>
          <p className="text-xl md:text-2xl animate-slideUp animation-delay-200 font-medium font-manrope">
            No more barriers to earning passive income.
          </p>
        </div>

        {/* Main content with phone and features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Left features - visible on larger screens */}
          <div className="hidden md:flex flex-col justify-center space-y-24">
            <div className="max-w-xs animate-fadeInLeft animation-delay-300">
              <div className="flex items-start mb-3">
                <BadgePercent className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                Create a free account and claim the course in 5 minutes
              </h3>
              <p className="text-gray-400 text-sm">
                No hidden charges, credit checks or deposit required.
              </p>
            </div>

            <div className="max-w-xs animate-fadeInLeft animation-delay-500">
              <div className="flex items-start mb-3">
                <TrendingUp className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                The only premium course for building income
              </h3>
              <p className="text-gray-400 text-sm">
                You don&apos;t need to look anywhere else, one course and 18X
                your sports trading income now.
              </p>
            </div>
          </div>

          {/* Center - Phone */}
          <div className="flex justify-center items-center md:col-span-1">
            <div className="relative w-64 md:w-80 h-auto animate-float">
              <Image
                src={PhoneMockup}
                width={320}
                height={650}
                alt="Sports trading course mobile app interface"
                className="w-full h-auto object-contain"
                priority={true}
                quality={100}
              />
            </div>
          </div>

          {/* Right features - visible on larger screens */}
          <div className="hidden md:flex flex-col justify-center space-y-24">
            <div className="max-w-xs animate-fadeInRight animation-delay-300">
              <div className="flex items-start mb-3">
                <Users className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                Refer and earn steady weekly income
              </h3>
              <p className="text-gray-400 text-sm">
                We believe in forming positive habits. Build your client base
                learn how to refer efficiently and start earning a steady
                income.
              </p>
            </div>

            <div className="max-w-xs animate-fadeInRight animation-delay-500">
              <div className="flex items-start mb-3">
                <LineChart className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                Trade sports like a pro and join the community
              </h3>
              <p className="text-gray-400 text-sm">
                Start learning from industry leaders before you even enter the
                trading market, get expert tips.
              </p>
            </div>
          </div>

          {/* Mobile features - visible only on small screens */}
          <div className="grid grid-cols-1 gap-8 md:hidden">
            <div className="animate-fadeInUp animation-delay-300">
              <div className="flex items-start mb-3">
                <BadgePercent className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                Create a free account and claim the course in 5 minutes
              </h3>
              <p className="text-gray-400 text-sm">
                No hidden charges, credit checks or deposit required.
              </p>
            </div>

            <div className="animate-fadeInUp animation-delay-400">
              <div className="flex items-start mb-3">
                <TrendingUp className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                The only premium course for building income
              </h3>
              <p className="text-gray-400 text-sm">
                You don&apos;t need to look anywhere else, one course and 18X
                your sports trading income now.
              </p>
            </div>

            <div className="animate-fadeInUp animation-delay-500">
              <div className="flex items-start mb-3">
                <Users className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                Refer and earn steady weekly income
              </h3>
              <p className="text-gray-400 text-sm">
                We believe in forming positive habits. Build your client base
                learn how to refer efficiently and start earning a steady
                income.
              </p>
            </div>

            <div className="animate-fadeInUp animation-delay-600">
              <div className="flex items-start mb-3">
                <LineChart className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                Trade sports like a pro and join the community
              </h3>
              <p className="text-gray-400 text-sm">
                Start learning from industry leaders before you even enter the
                trading market, get expert tips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
