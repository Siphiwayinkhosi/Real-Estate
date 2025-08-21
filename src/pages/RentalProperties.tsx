import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchFilters } from "@/components/SearchFilters";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";

const Mietobjekte = () => {
  const [filters, setFilters] = useState({
    priceRange: "",
    location: "",
    type: "",
  });

  const rentalProperties = [
    {
      id: 1,
      title: "Modernes Stadtapartment",
      price: 2800,
      displayPrice: "€2.800/Monat",
      location: "Berlin-Mitte",
      image: property1,
      bedrooms: 2,
      bathrooms: 1,
      area: "85 m²",
      type: "rental" as const
    },
    {
      id: 2,
      title: "Luxus-Penthouse",
      price: 4500,
      displayPrice: "€4.500/Monat",
      location: "München-Maxvorstadt",
      image: property2,
      bedrooms: 3,
      bathrooms: 2,
      area: "120 m²",
      type: "rental" as const
    },
    {
      id: 3,
      title: "Geräumiges Familienhaus",
      price: 3200,
      displayPrice: "€3.200/Monat",
      location: "Hamburg-Eppendorf",
      image: property3,
      bedrooms: 4,
      bathrooms: 2,
      area: "180 m²",
      type: "rental" as const
    },
    {
      id: 4,
      title: "Studio-Apartment",
      price: 1400,
      displayPrice: "€1.400/Monat",
      location: "Frankfurt-Sachsenhausen",
      image: property1,
      bedrooms: 1,
      bathrooms: 1,
      area: "45 m²",
      type: "rental" as const
    },
    {
      id: 5,
      title: "Designer-Loft",
      price: 2100,
      displayPrice: "€2.100/Monat",
      location: "Köln-Ehrenfeld",
      image: property2,
      bedrooms: 2,
      bathrooms: 1,
      area: "95 m²",
      type: "rental" as const
    },
    {
      id: 6,
      title: "Executive Suite",
      price: 3800,
      displayPrice: "€3.800/Monat",
      location: "Stuttgart-Mitte",
      image: property3,
      bedrooms: 3,
      bathrooms: 2,
      area: "140 m²",
      type: "rental" as const
    }
  ];

  // Gefilterte Objekte
  const filteredProperties = useMemo(() => {
    return rentalProperties.filter(property => {
      const matchesLocation = filters.location
        ? property.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;

      const matchesType = filters.type
        ? property.type === filters.type
        : true;

      const matchesPrice = filters.priceRange
        ? (() => {
            const [min, max] = filters.priceRange.split("-").map(Number);
            if (!max) return property.price >= min;
            return property.price >= min && property.price <= max;
          })()
        : true;

      return matchesLocation && matchesType && matchesPrice;
    });
  }, [filters]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium <span className="text-primary">Mietobjekte</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Finden Sie Ihr perfektes Mietobjekt aus unserer Auswahl an hochwertigen Immobilien. 
            Ob gemütliches Apartment oder geräumiges Familienhaus – wir bieten Optionen für jeden Lebensstil.
          </p>
        </motion.div>

        {/* Filters */}
        <SearchFilters filters={filters} setFilters={setFilters} />

        {/* Properties Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PropertyCard property={{
                  ...property,
                  price: property.displayPrice // formatted price
                }} />
              </motion.div>
            ))
          ) : (
            <p className="text-center text-muted-foreground col-span-full">
              Keine Immobilien entsprechen Ihren Suchkriterien.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Mietobjekte;
