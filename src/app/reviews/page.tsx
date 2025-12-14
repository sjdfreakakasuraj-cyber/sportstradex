import HeroSection from "@/components/reviews-page/heroSection";
import Navbar from "@/components/global/layout/navbar";
import WelcomeSection from "../../components/reviews-page/welcomeSection";
import LovedBySection from "../../components/reviews-page/lovedbySection";
import { Footer } from "@/components/global/layout/footer";
import FAQ from "@/components/global/layout/faq";
import Cta from "@/components/global/layout/cta";
import TestimonialSlideshow from "../../components/reviews-page/testimonialSlideshow";
import ImageSection from "@/components/reviews-page/imageSection";

export default function Reviews() {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <TestimonialSlideshow />
        <WelcomeSection />
        <LovedBySection />
        <ImageSection />
        <FAQ />
        <Cta />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
