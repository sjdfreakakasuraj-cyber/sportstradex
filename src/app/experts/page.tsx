import CaseStudySection from "../../components/caseStudy";
import Cta from "../../components/global/layout/cta";
import ExpertTeamSection from "../../components/experts-page/expertsTeam";
import FAQ from "../../components/global/layout/faq";
import { Footer } from "../../components/global/layout/footer";
import GrowTogetherSection from "../../components/growTogether";
import Navbar from "../../components/global/layout/navbar";
import ExploreExperts from "../../components/exploreExperts";

export default function Experts() {
  return (
    <>
      <header>
        <Navbar />
        <ExpertTeamSection />
      </header>
      <main>
        <ExploreExperts />
        <CaseStudySection />
        <GrowTogetherSection />
        <FAQ />
        <Cta />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
