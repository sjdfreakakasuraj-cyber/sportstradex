import Cta from "@/components/global/layout/cta";
import FAQ from "@/components/global/layout/faq";
import { Footer } from "@/components/global/layout/footer";
import Navbar from "@/components/global/layout/navbar";
import AffiliateSection from "../../components/affiliate-page/affiliateSection";
import AffiliateHeroSection from "@/components/affiliate-page/affiliateHeroSection";

export default function Affiliate() {
  return (
    <>
      <header>
        <Navbar />
        <AffiliateHeroSection />
      </header>
      <main>
        <AffiliateSection />
        <FAQ />
        <Cta />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
