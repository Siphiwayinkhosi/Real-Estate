import { motion } from "framer-motion";

export const ProcessSection = () => {
  const steps = [
    { step: "01", title: "Erstberatung", description: "Wir besprechen Ihre Bedürfnisse und Wünsche" },
    { step: "02", title: "Immobiliensuche", description: "Finden Sie Immobilien, die Ihren Kriterien entsprechen" },
    { step: "03", title: "Besichtigung & Auswahl", description: "Besichtigen Sie Objekte und treffen Sie Ihre Wahl" },
    { step: "04", title: "Verhandlung", description: "Wir führen alle Verhandlungen in Ihrem Namen" },
    { step: "05", title: "Dokumentation", description: "Abwicklung aller rechtlichen und finanziellen Unterlagen" },
    { step: "06", title: "Abschluss", description: "Schlüssel in der Hand – willkommen in Ihrer neuen Immobilie!" },
  ];

  return (
    <section className="py-16 bg-secondary rounded-2xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Unser Prozess</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ein effizienter Ablauf, der Ihre Immobilienreise reibungslos und stressfrei gestaltet
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
