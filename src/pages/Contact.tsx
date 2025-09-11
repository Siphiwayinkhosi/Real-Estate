import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapSection } from "@/components/contact/MapSection";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
  Nehmen Sie <span className="text-black">Kontakt auf</span>
</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sie möchten Ihre Traumimmobilie finden oder benötigen fachkundige Beratung im Immobilienbereich?
            Kontaktieren Sie uns noch heute und lassen Sie sich von unserem erfahrenen Team durch Ihre Immobilienreise begleiten.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ContactForm />
          <ContactInfo />
        </div>

        <MapSection />
      </div>
    </div>
  );
};

export default Contact;
