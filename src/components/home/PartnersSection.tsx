import { motion } from "framer-motion";

export const PartnersSection = () => {
  const partners = [
    { name: "Deutsche Bank", logo: "/partner1.png" },
    { name: "Sparkasse", logo: "/partner2.png" },
    { name: "Commerzbank", logo: "/partner3.png" },
    { name: "ING", logo: "/partner4.png" },
    { name: "Postbank", logo: "/partner5.png" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Trusted <span className="text-primary">Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work with Germany's leading financial institutions to provide our clients with the best financing options.
          </p>
        </motion.div>

        {/* Scrolling Marquee */}
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-12 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 bg-background rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Static version for better accessibility */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-6 gap-8 mt-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto mx-auto transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};