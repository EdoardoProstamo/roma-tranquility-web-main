import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import Strengths from "@/components/Strengths";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <Strengths />
        <Reviews />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
