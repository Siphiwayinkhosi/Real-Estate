import { motion } from "framer-motion";
import { Home, Key, TrendingUp, Settings, Users, Shield } from "lucide-react";

export const ServicesGrid = () => {
  const services = [
    { icon: Home, title: "Property Sales", description: "Expert guidance for buying and selling premium properties" },
    { icon: Key, title: "Property Rentals", description: "Comprehensive rental services for tenants and landlords" },
    { icon: TrendingUp, title: "Investment Consulting", description: "Strategic advice for real estate investments" },
    { icon: Settings, title: "Property Management", description: "Professional management of your rental properties" },
    { icon: Users, title: "Relocation Services", description: "Complete support for corporate and personal relocations" },
    { icon: Shield, title: "Legal Support", description: "Expert legal guidance throughout all transactions" },
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