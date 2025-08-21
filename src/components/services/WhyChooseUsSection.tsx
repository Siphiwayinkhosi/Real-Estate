import { motion } from "framer-motion";
import { Award, Clock, Users, Shield } from "lucide-react";

export const WhyChooseUsSection = () => {
  const reasons = [
    { icon: Award, title: "15+ Jahre Erfahrung", description: "Nachweisliche Erfolge im deutschen Immobilienmarkt" },
    { icon: Clock, title: "24/7 Unterstützung", description: "Immer erreichbar, wenn Sie uns am meisten brauchen" },
    { icon: Users, title: "Expertenteam", description: "Zertifizierte Fachkräfte mit Kenntnis des lokalen Marktes" },
    { icon: Shield, title: "Vertrauenswürdiger Service", description: "98% Kundenzufriedenheit und stetig steigend" },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Warum Kintscher Immobilien wählen?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Wir verbinden jahrzehntelange Erfahrung mit innovativer Technologie, um herausragende Ergebnisse zu liefern
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm">{reason.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
