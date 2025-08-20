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

        {/* Enhanced Scrolling Marquee */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient fade effects on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <motion.div
            className="flex space-x-12 items-center"
            animate={{
              x: [0, -1030],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 bg-background rounded-xl p-6 shadow-soft transition-all duration-300 border border-border/20"
              >
                <div className="h-16 w-40 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};