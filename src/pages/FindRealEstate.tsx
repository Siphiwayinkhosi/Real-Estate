import { useState } from "react";
import { motion } from "framer-motion";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchFilters } from "@/components/SearchFilters";

// Import images (1.jpg → 6.jpg)
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";

const FindRealEstate = () => {
  const [filters, setFilters] = useState({
    priceRange: "",
    location: "",
    type: "",
  });

  const properties = [
    {
      id: 1,
      title: "Luxuriöse Moderne Villa",
      price: "€550,000",
      location: "Odenthal",
      image: img1,
      bedrooms: 5,
      bathrooms: 3,
      area: "350 m²",
      type: "sale" as const
    },
    {
      id: 2,
      title: "Zeitgemäßes Familienhaus",
      price: "€390,000",
      location: "Wermelskirchen",
      image: img2,
      bedrooms: 4,
      bathrooms: 2,
      area: "280 m²",
      type: "sale" as const
    },
    {
      id: 3,
      title: "Premium Penthouse",
      price: "€400,000",
      location: "Leichlingen",
      image: img3,
      bedrooms: 3,
      bathrooms: 2,
      area: "220 m²",
      type: "sale" as const
    },
    {
      id: 4,
      title: "Elegantes Stadthaus",
      price: "€450,000",
      location: "Burscheid",
      image: img4,
      bedrooms: 4,
      bathrooms: 3,
      area: "320 m²",
      type: "sale" as const
    },
    {
      id: 5,
      title: "Moderne Wohnung",
      price: "€650,000",
      location: "Leverkusen",
      image: img5,
      bedrooms: 3,
      bathrooms: 2,
      area: "180 m²",
      type: "sale" as const
    },
    {
      id: 6,
      title: "Luxusanwesen",
      price: "€250,000",
      location: "Opladen",
      image: img6,
      bedrooms: 6,
      bathrooms: 4,
      area: "450 m²",
      type: "sale" as const
    }
  ];

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
            Finde Dein Traum-<span className="text-primary">Immobilie</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecke außergewöhnliche Immobilien an den begehrtesten Standorten Deutschlands.
            Unsere sorgfältig ausgewählte Auswahl bietet Luxus, Komfort und Investitionspotenzial.
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
