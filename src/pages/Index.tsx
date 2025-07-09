import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { InstallationSection } from "@/components/InstallationSection";
import { UsageSection } from "@/components/UsageSection";
import { ConfigurationSection } from "@/components/ConfigurationSection";
import { FAQSection } from "@/components/FAQSection";
import { ContributeSection } from "@/components/ContributeSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <InstallationSection />
      <UsageSection />
      <ConfigurationSection />
      <FAQSection />
      <ContributeSection />
      <Footer />
    </div>
  );
};

export default Index;
