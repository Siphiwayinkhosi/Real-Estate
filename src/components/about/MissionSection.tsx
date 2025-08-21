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
          <h3 className="text-2xl font-bold mb-4">Unsere Vision</h3>
          <p className="text-muted-foreground">
            Deutschlands vertrauenswürdigster Immobilienpartner sein, bekannt für Integrität, Fachkompetenz und exzellenten Kundenservice.
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
            Integrität, Transparenz und Engagement, unseren Kunden dabei zu helfen, ihr perfektes Zuhause oder ihre ideale Investitionsmöglichkeit zu finden.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
