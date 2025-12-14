import PocketMoneyHero from "@/components/pocket-money/hero";
import EarningsOverview from "@/components/pocket-money/earnings-overview";
import WhyChooseUs from "@/components/pocket-money/why-choose-us";
import FAQ from "@/components/global/layout/faq";
import CallToAction from "@/components/pocket-money/call-to-action";
import { Footer } from "@/components/global/layout/footer";
import Navbar from "@/components/global/layout/navbar";
import StepProcess from "@/components/pocket-money/stepProcess";
import Cta from "@/components/global/layout/cta";
import ChecklistImage from "@/components/pocket-money/checklistImage";

export default function PocketMoneyPage() {
  return (
    <>
      <header>
        <Navbar />
        <PocketMoneyHero />
      </header>
      <main>
        <StepProcess />
        <EarningsOverview />
        <ChecklistImage />
        <WhyChooseUs />
        <CallToAction />
        <FAQ />
        <Cta />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
