import { motion } from "framer-motion";

export const TeamSection = () => {
  const team = [
    { name: "Anka Nett", role: "Buchhaltung", image: "/team1.png" },
    { name: "Anna Kappertz", role: "Back Office", image: "/team3.png" },
    { name: "Peter Kintscher", role: "Immobilienmakler", image: "/team2.png" },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Unser Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-2xl p-6 shadow-soft text-center hover:shadow-medium transition-shadow"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-72 h-72 rounded-lg mx-auto mb-6 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-muted-foreground">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
