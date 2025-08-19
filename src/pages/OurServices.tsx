import { motion } from "framer-motion";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ProcessSection } from "@/components/services/ProcessSection";
import { WhyChooseUsSection } from "@/components/services/WhyChooseUsSection";

const OurServices = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your needs.
            From buying and selling to property management, we provide expert guidance every step of the way.
          </p>
        </motion.div>

        <ServicesGrid />
        <ProcessSection />
        <WhyChooseUsSection />
      </div>
    </div>
  );
};

export default OurServices;