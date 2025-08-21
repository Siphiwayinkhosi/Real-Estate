import { motion } from "framer-motion";

export const AchievementsSection = () => {
  const achievements = [
    { value: "500+", label: "Verkaufte Immobilien" },
    { value: "98%", label: "Kundenzufriedenheit" },
    { value: "30+", label: "Jahre Erfahrung" },
    { value: "€50M+", label: "Gesamtverkaufswert" },
  ];

  return (
    <section className="py-16 bg-secondary rounded-2xl mb-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-4xl font-bold text-primary mb-2">{achievement.value}</div>
            <div className="text-foreground font-semibold">{achievement.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
