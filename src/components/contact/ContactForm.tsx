import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-card rounded-2xl p-8 shadow-soft"
    >
      <h2 className="text-2xl font-bold mb-6">Senden Sie uns eine Nachricht</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Vorname" />
          <Input placeholder="Nachname" />
        </div>
        <Input placeholder="E-Mail-Adresse" type="email" />
        <Input placeholder="Telefonnummer" />
        <Textarea placeholder="Ihre Nachricht" rows={5} />
        <Button className="w-full bg-primary hover:bg-primary-light">
          <Send className="mr-2 h-4 w-4" />
          Nachricht senden
        </Button>
      </form>
    </motion.div>
  );
};
