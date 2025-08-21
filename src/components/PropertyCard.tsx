import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart
} from "lucide-react";
import { useState } from "react";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: "sale" | "rental";
}

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 group"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
              isLiked 
                ? "bg-red-500 text-white" 
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
          </motion.button>
        </div>

        {/* Property Type Badge */}
        <div className="absolute top-4 left-4">
          <Badge 
            variant={property.type === "sale" ? "default" : "secondary"}
            className="bg-primary/90 text-primary-foreground font-semibold"
          >
            {property.type === "sale" ? "Zu Verkaufen" : "Zu Vermieten"}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center text-muted-foreground mb-3">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>
          <div className="text-2xl font-bold text-primary">
            {property.price}
          </div>
        </div>

        {/* Toggleable Property Details */}
        {showDetails && (
          <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <Bed size={16} className="mr-2" />
              <span>{property.bedrooms} Schlafzimmer</span>
            </div>
            <div className="flex items-center">
              <Bath size={16} className="mr-2" />
              <span>{property.bathrooms} Badezimmer</span>
            </div>
            <div className="flex items-center">
              <Square size={16} className="mr-2" />
              <span>{property.area} Wohnfläche</span>
            </div>
          </div>
        )}

        {/* View Details Button */}
        <Button 
          onClick={() => setShowDetails(!showDetails)}
          className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold rounded-lg"
        >
          {showDetails ? "Details ausblenden" : "Details anzeigen"}
        </Button>
      </div>
    </motion.div>
  );
};
