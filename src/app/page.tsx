import Preloader from "@/components/Preloader";
import FloatingCall from "@/components/FloatingCall";
import StickyCta from "@/components/StickyCta";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Trust from "@/components/Trust";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <FloatingCall />
      <StickyCta />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Gallery />
        <Trust />
        <CtaBanner />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
