import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TarifasHeader from "@/components/TarifasHeader";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleOpenForm = () => setShowContactForm(true);
  const handleCloseForm = () => setShowContactForm(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onContactClick={handleOpenForm} />
      <Hero />
      <TarifasHeader />
      <PricingSection onPlanClick={handleOpenForm} />
      <CTASection onCTAClick={handleOpenForm} />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <FinalCTASection onCTAClick={handleOpenForm} />
      <Footer />
      
      {showContactForm && <ContactForm onClose={handleCloseForm} />}
    </div>
  );
};

export default Index;
