import { Check } from "lucide-react";
import AffiliateImage from "@/assets/landing-page/agent-dashboard.png";
import Image from "next/image";

export default function AffiliatePanel() {
  return (
    <section className="py-10 bg-white text-darkest">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side content - takes 7/12 columns on large screens */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 font-manrope">
              GET ACCESS TO OUR AFFILIATE PANEL
            </h2>
            <p className="text-gray-400 mb-8">
              Turn Your Network Into Daily Income! Unlock a smart earning
              opportunity with the SportsTradex Affiliate Program — where your
              influence turns into real income. Whether you&apos;re a content
              creator, student, or community leader — you can now earn
              consistently from sports trading enthusiasts you refer!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-full flex-shrink-0">
                  <Check className="h-5 w-5 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 font-manrope">
                    No Investment, No Risk
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Start promoting instantly with zero upfront cost.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-full flex-shrink-0">
                  <Check className="h-5 w-5 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-manrope mb-2">
                    Smart Dashboard
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Track clicks, signups, client activity, and your earnings in
                    real time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-full flex-shrink-0">
                  <Check className="h-5 w-5 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-manrope mb-2">
                    Weekly Payouts
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Withdraw your income every week with full transparency.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-full flex-shrink-0">
                  <Check className="h-5 w-5 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-manrope mb-2">
                    Your Network, Your Business
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Refer directly or build a team of sub-affiliates and earn a
                    10% override on their performance too!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Affiliate Panel Image - takes 5/12 columns on large screens */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src={AffiliateImage}
                alt="Affiliate Panel"
                className="rounded-lg shadow-lg border-2 border-lime-400 w-full h-auto"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
