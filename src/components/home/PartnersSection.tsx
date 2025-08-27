import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const PartnersSection = () => {
  const partners = [
    
    { name: "Sparkasse", logo: "/partner2.png" },
    { name: "Commerzbank", logo: "/partner3.png" },
    { name: "ING", logo: "/partner4.png" },
    { name: "Postbank", logo: "/partner5.png" },
  ];

  const controls = useAnimation();
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Start scrolling animation dynamically based on width
  useEffect(() => {
    if (marqueeRef.current) {
      const totalWidth = marqueeRef.current.scrollWidth / 2; // half because we doubled array
      controls.start({
        x: [0, -totalWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        },
      });
    }
  }, [controls]);

  return (
    <section className="py-16 bg-muted/30" aria-label="Unsere Partner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Unsere <span className="text-primary">Partner</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wir arbeiten mit führenden Finanzinstituten Deutschlands zusammen, 
            um unseren Kunden die besten Finanzierungsmöglichkeiten zu bieten.
          </p>
        </motion.div>

        {/* Scrolling Marquee */}
        <div className="relative overflow-hidden py-4">
          {/* Fades on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10"></div>

          <motion.div
            ref={marqueeRef}
            className="flex space-x-12 items-center"
            animate={controls}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 bg-background rounded-xl p-6 shadow-soft border border-border/20 transition hover:shadow-lg"
              >
                <div className="h-16 w-40 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
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
