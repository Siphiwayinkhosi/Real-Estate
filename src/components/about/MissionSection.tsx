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
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-muted-foreground">To provide exceptional real estate services that exceed expectations and create lasting relationships with our clients.</p>
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
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-muted-foreground">To be Germany's most trusted real estate partner, known for integrity, expertise, and exceptional client service.</p>
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
          <h3 className="text-2xl font-bold mb-4">Our Values</h3>
          <p className="text-muted-foreground">Integrity, transparency, and dedication to helping our clients find their perfect home or investment opportunity.</p>
        </motion.div>
      </div>
    </section>
  );
};