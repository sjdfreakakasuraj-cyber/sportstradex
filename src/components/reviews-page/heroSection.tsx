import Image from "next/image";
import StatsCounter from "@/components/statsCounter";
import Placeholder from "@/assets/reviews/hero-image.png";

export default function ReviewHero() {
  return (
    <section className="py-10 bg-[#0a2330] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:mb-16">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight font-manrope">
                Just Start <span className="text-[#4ce2c2]">Earning</span>
              </h1>
              <div className="flex items-start gap-4 mt-2">
                <div>
                  <div className="text-gray-400 text-sm">Establish</div>
                  <div className="text-3xl md:text-4xl font-extrabold font-manrope">
                    2011
                  </div>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-manrope">
                  Start Trading
                </h2>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-700 hidden lg:block"></div>
            <div className="lg:pl-8">
              <p className="text-gray-300 text-lg max-w-md">
                we are a team of experts with several services that focus on
                quality and innovations for your sports trading career
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <StatsCounter value={12} label="Years of Experience" />
                <StatsCounter value={83} suffix="K" label="Students Joined" />
                <StatsCounter value={4.2} suffix="K" label="Trusted Reviews" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative w-full mb-10 px-4">
        <div className="relative mx-auto max-w-6xl">
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9]">
            <Image
              src={Placeholder}
              alt="Agency team collaboration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
