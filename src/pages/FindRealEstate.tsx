import { useState } from "react";
import { motion } from "framer-motion";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchFilters } from "@/components/SearchFilters";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";

const FindRealEstate = () => {
  const [filters, setFilters] = useState({
    priceRange: "",
    location: "",
    type: "",
  });

  const properties = [
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
    },
    {
      id: 4,
      title: "Elegant Townhouse",
      price: "€750,000",
      location: "Frankfurt-Westend",
      image: property1,
      bedrooms: 4,
      bathrooms: 3,
      area: "320 m²",
      type: "sale" as const
    },
    {
      id: 5,
      title: "Modern Apartment",
      price: "€650,000",
      location: "Cologne-Deutz",
      image: property2,
      bedrooms: 3,
      bathrooms: 2,
      area: "180 m²",
      type: "sale" as const
    },
    {
      id: 6,
      title: "Luxury Estate",
      price: "€3,200,000",
      location: "Stuttgart-Degerloch",
      image: property3,
      bedrooms: 6,
      bathrooms: 4,
      area: "450 m²",
      type: "sale" as const
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Find Your Dream <span className="text-primary">Property</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover exceptional properties across Germany's most desirable locations.
            Our carefully curated selection offers luxury, comfort, and investment potential.
          </p>
        </motion.div>

        <SearchFilters filters={filters} setFilters={setFilters} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FindRealEstate;