import { motion } from "framer-motion";
import { Home, Key, TrendingUp, Settings, Users, Shield } from "lucide-react";

export const ServicesGrid = () => {
  const services = [
    { icon: Home, title: "Immobilienverkauf", description: "Professionelle Beratung beim Kauf und Verkauf von Premium-Immobilien" },
    { icon: Key, title: "Immobilienvermietung", description: "Umfassende Vermietungsservices für Mieter und Vermieter" },
    { icon: TrendingUp, title: "Investment-Beratung", description: "Strategische Beratung für Immobilieninvestitionen" },
    { icon: Settings, title: "Property Management", description: "Professionelles Management Ihrer Mietobjekte" },
    { icon: Users, title: "Umzugsservice", description: "Komplette Unterstützung bei Firmen- und Privatumzügen" },
    { icon: Shield, title: "Rechtliche Unterstützung", description: "Fachkundige rechtliche Beratung während aller Transaktionen" },
  ];

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="bg-primary/10 rounded-full p-3 w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
