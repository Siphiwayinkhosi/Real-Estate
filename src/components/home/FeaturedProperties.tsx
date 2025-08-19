import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/PropertyCard";
import { ArrowRight } from "lucide-react";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";

export const FeaturedProperties = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Modern Villa",
      price: "€1,250,000",
      location: "Berlin-Charlottenburg",
      image: property1,
      bedrooms: 5,
      bathrooms: 3,
      area: "350 m²",
      type: "sale" as const
    },
    {
      id: 2,
      title: "Contemporary Family Home",
      price: "€890,000",
      location: "Munich-Schwabing",
      image: property2,
      bedrooms: 4,
      bathrooms: 2,
      area: "280 m²",
      type: "sale" as const
    },
    {
      id: 3,
      title: "Premium Penthouse",
      price: "€2,100,000",
      location: "Hamburg-Hafencity",
      image: property3,
      bedrooms: 3,
      bathrooms: 2,
      area: "220 m²",
      type: "sale" as const
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Properties</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties, carefully chosen for their exceptional quality and investment potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/find-real-estate">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105"
            >
              View All Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};