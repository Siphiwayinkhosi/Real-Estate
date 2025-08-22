import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div className="bg-card rounded-2xl p-6 shadow-soft">
        <div className="flex items-center space-x-4">
          <div className="bg-primary/10 rounded-full p-3">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Telefon</h3>
            <p className="text-muted-foreground">+49 2174 785 796</p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-soft">
        <div className="flex items-center space-x-4">
          <div className="bg-primary/10 rounded-full p-3">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">E-Mail</h3>
            <p className="text-muted-foreground">info@kintscher-immobilien.de</p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-soft">
        <div className="flex items-center space-x-4">
          <div className="bg-primary/10 rounded-full p-3">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Adresse</h3>
            <p className="text-muted-foreground">
              Höhestr. 23<br />51399 Burscheid
            </p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-soft">
        <div className="flex items-center space-x-4">
          <div className="bg-primary/10 rounded-full p-3">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Bürozeiten</h3>
            <p className="text-muted-foreground">
              Mo-Fr: 08:00-20:00<br />Sa: 09:00-18:00
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
