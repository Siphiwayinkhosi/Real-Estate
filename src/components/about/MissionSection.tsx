import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

export const MissionSection = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 shadow-soft text-center"
        >
          <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-6">
            <Target className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Unsere Mission</h3>
          <p className="text-muted-foreground">
            Außergewöhnliche Immobilienservices bieten, die Erwartungen übertreffen und nachhaltige Beziehungen zu unseren Kunden schaffen.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl p-8 shadow-soft text-center"
        >
          <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-6">
            <Eye className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Unser Ansatz</h3>
          <p className="text-muted-foreground">
            Bei Kintscher Immobilien stehen Sie im Mittelpunkt. Unser Ansatz beruht auf einer ganzheitlichen und maßgeschneiderten Betreuung, die Ihre individuellen Bedürfnisse und Wünsche berücksichtigt.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl p-8 shadow-soft text-center"
        >
          <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-6">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Unsere Werte</h3>
          <p className="text-muted-foreground">
            Ehrlichkeit, Wertschätzung, Verantwortung, Professionalität und soziales Engagement bilden das Fundament unserer täglichen Arbeit bei Kintscher Immobilien.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
