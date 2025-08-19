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
            <h3 className="font-semibold">Phone</h3>
            <p className="text-muted-foreground">+49 123 456 7890</p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-soft">
        <div className="flex items-center space-x-4">
          <div className="bg-primary/10 rounded-full p-3">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
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
            <h3 className="font-semibold">Address</h3>
            <p className="text-muted-foreground">Musterstraße 123<br />12345 Berlin, Germany</p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-soft">
        <div className="flex items-center space-x-4">
          <div className="bg-primary/10 rounded-full p-3">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Office Hours</h3>
            <p className="text-muted-foreground">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};