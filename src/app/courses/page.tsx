import { Footer } from "@/components/global/layout/footer";
import Navbar from "@/components/global/layout/navbar";
import WhyOurCourse from "../../components/whyOurCourse";
import CoursesSection from "../../components/courses-page/coursesSection";
import FAQ from "@/components/global/layout/faq";
import Cta from "@/components/global/layout/cta";
import NoHiddenCharges from "../../components/courses-page/noHiddenCharges";
import HeroSection from "@/components/courses-page/heroSection";
import ImagesSection from "@/components/courses-page/imagesSection";
import StillNotSure from "@/components/stillNotSure";

export default function Courses() {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <CoursesSection />
        <NoHiddenCharges />
        <ImagesSection />
        <WhyOurCourse />
        <StillNotSure />
        <FAQ />
        <Cta />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
