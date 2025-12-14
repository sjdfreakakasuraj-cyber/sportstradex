import AffiliatePanel from "../components/landing-page/affiliatePanel";
import Cta from "../components/global/layout/cta";
import FAQ from "../components/global/layout/faq";
import { Footer } from "../components/global/layout/footer";
import HeroSection from "../components/landing-page/heroSection";
import HowItWorks from "../components/landing-page/howitworks";
import Navbar from "../components/global/layout/navbar";
import OfferingSection from "../components/landing-page/offeringSection";
import PotentialEarnings from "../components/landing-page/potentialEarnings";
import Tape from "../components/landing-page/tape";
import { TestimonialCarousel } from "../components/landing-page/testimonialCarousel";
import TryCourse from "../components/landing-page/tryCourse";
import WhyUs from "../components/landing-page/whyUs";
import CourseSneeekPeekSlideshow from "@/components/landing-page/coursesSneekPeek";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <Tape />
        <OfferingSection />
        <TryCourse />
        <CourseSneeekPeekSlideshow />
        <AffiliatePanel />
        <PotentialEarnings />
        <HowItWorks />
        <WhyUs />
        <TestimonialCarousel />
        <FAQ />
        <Cta />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
