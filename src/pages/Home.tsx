import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { PartnersSection } from "@/components/home/PartnersSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import Partner from "@/components/home/Partner";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Partner/>
      <StatsSection />
      <FeaturedProperties />
      <PartnersSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;