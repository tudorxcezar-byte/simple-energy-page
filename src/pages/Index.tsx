import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleOpenForm = () => setShowContactForm(true);
  const handleCloseForm = () => setShowContactForm(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onContactClick={handleOpenForm} />
      <Hero onStartClick={handleOpenForm} />
      <PricingSection onPlanClick={handleOpenForm} />
      <Footer />
      
      {showContactForm && <ContactForm onClose={handleCloseForm} />}
    </div>
  );
};

export default Index;
