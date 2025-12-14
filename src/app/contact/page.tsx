import ContactForm from "../../components/contact-page/contactForm";
import Cta from "../../components/global/layout/cta";
import FAQ from "../../components/global/layout/faq";
import { Footer } from "../../components/global/layout/footer";
import Navbar from "../../components/global/layout/navbar";

export default function Contact() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ContactForm />
        <FAQ />
        <Cta />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
