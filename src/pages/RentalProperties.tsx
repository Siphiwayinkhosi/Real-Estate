import { useState } from "react";
import { motion } from "framer-motion";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchFilters } from "@/components/SearchFilters";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";

const RentalProperties = () => {
  const [filters, setFilters] = useState({
    priceRange: "",
    location: "",
    type: "",
  });

  const rentalProperties = [
    {
      id: 1,
      title: "Modern City Apartment",
      price: "€2,800/month",
      location: "Berlin-Mitte",
      image: property1,
      bedrooms: 2,
      bathrooms: 1,
      area: "85 m²",
      type: "rental" as const
    },
    {
      id: 2,
      title: "Luxury Penthouse",
      price: "€4,500/month",
      location: "Munich-Maxvorstadt",
      image: property2,
      bedrooms: 3,
      bathrooms: 2,
      area: "120 m²",
      type: "rental" as const
    },
    {
      id: 3,
      title: "Spacious Family Home",
      price: "€3,200/month",
      location: "Hamburg-Eppendorf",
      image: property3,
      bedrooms: 4,
      bathrooms: 2,
      area: "180 m²",
      type: "rental" as const
    },
    {
      id: 4,
      title: "Studio Apartment",
      price: "€1,400/month",
      location: "Frankfurt-Sachsenhausen",
      image: property1,
      bedrooms: 1,
      bathrooms: 1,
      area: "45 m²",
      type: "rental" as const
    },
    {
      id: 5,
      title: "Designer Loft",
      price: "€2,100/month",
      location: "Cologne-Ehrenfeld",
      image: property2,
      bedrooms: 2,
      bathrooms: 1,
      area: "95 m²",
      type: "rental" as const
    },
    {
      id: 6,
      title: "Executive Suite",
      price: "€3,800/month",
      location: "Stuttgart-Mitte",
      image: property3,
      bedrooms: 3,
      bathrooms: 2,
      area: "140 m²",
      type: "rental" as const
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
            Premium <span className="text-primary">Rental Properties</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find your perfect rental home from our selection of premium properties.
            Whether you need a cozy apartment or a spacious family home, we have options for every lifestyle.
          </p>
        </motion.div>

        <SearchFilters filters={filters} setFilters={setFilters} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {rentalProperties.map((property, index) => (
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

export default RentalProperties;