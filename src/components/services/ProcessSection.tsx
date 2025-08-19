import { motion } from "framer-motion";

export const ProcessSection = () => {
  const steps = [
    { step: "01", title: "Initial Consultation", description: "We discuss your needs and preferences" },
    { step: "02", title: "Property Search", description: "Find properties that match your criteria" },
    { step: "03", title: "Viewing & Selection", description: "Tour properties and make your choice" },
    { step: "04", title: "Negotiation", description: "We handle all negotiations on your behalf" },
    { step: "05", title: "Documentation", description: "Complete all legal and financial paperwork" },
    { step: "06", title: "Completion", description: "Keys in hand - welcome to your new property!" },
  ];

  return (
    <section className="py-16 bg-secondary rounded-2xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Process</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A streamlined approach that makes your real estate journey smooth and stress-free
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-background rounded-xl p-6 shadow-soft text-center"
          >
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
              {step.step}
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};