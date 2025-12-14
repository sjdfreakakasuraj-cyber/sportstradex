import FirstImage from "@/assets/landing-page/earnings-1.png";
import SecondImage from "@/assets/landing-page/earnings-2.png";
import ThirdImage from "@/assets/landing-page/earnings-3.png";
import Image from "next/image";

export default function PotentialEarnings() {
  return (
    <section className="pb-6 pt-10 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl mx-auto font-manrope">
          Most Profitable Skill-Based Career You Haven&apos;t Heard Of
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Our expert team offers mathematically-backed strategies to master
          sports trading and helping you turn your passion into serious income.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={FirstImage}
              alt="Invest your money accurately"
              className="w-full h-auto object-cover"
              width={400}
              height={300}
            />
          </div>

          {/* Second Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={SecondImage}
              alt="The Next Big Income Wave in India"
              className="w-full h-auto object-cover"
              width={400}
              height={300}
            />
          </div>

          {/* Third Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={ThirdImage}
              alt="Your estimated earnings"
              className="w-full h-auto object-cover"
              width={400}
              height={300}
            />
          </div>

          {/* Original Cards (Commented Out)
          <div className="bg-zinc-900 text-white p-6 rounded-lg">
            <h3 className="text-lime-400 text-xl font-bold mb-4 font-manrope">
              Invest your money accurately
            </h3>
            <div className="h-40 flex items-end justify-center mb-6">
              <div className="flex items-end h-full gap-3">
                {[60, 75, 85, 95, 80].map((height, i) => (
                  <div
                    key={i}
                    className="w-8 bg-lime-400 rounded-t-sm"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="text-left">
              <p className="text-xl font-bold">87,000</p>
              <p className="text-xs text-gray-400">Total users</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 font-manrope">
              The Next Big Income Wave in India
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Secure your financial future with our expert guidance and proven
              strategies. The future belongs to skill-driven earners.
            </p>
            <div className="mt-8 relative">
              <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
                <div className="absolute inset-0 rounded-full border-8 border-lime-400 border-r-transparent border-b-transparent rotate-45" />
                <div className="text-center">
                  <p className="text-2xl font-bold">4.7</p>
                  <p className="text-lg">70% Odds</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 font-manrope">
              Your estimated earnings
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Our expert team offers expert guidance, helping you navigate and
              maximize your profits.
            </p>
            <div className="mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">Weekly Income</p>
                    <p className="text-2xl font-bold">₹4.5k</p>
                  </div>
                  <div className="bg-lime-400 rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-2 pb-4">
                  <div className="h-1 bg-gray-100 rounded-full w-full">
                    <div
                      className="h-1 bg-lime-400 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">Monthly Income</p>
                    <p className="text-2xl font-bold">₹18k</p>
                  </div>
                  <div className="bg-lime-400 rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-2">
                  <div className="h-1 bg-gray-100 rounded-full w-full">
                    <div
                      className="h-1 bg-lime-400 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
