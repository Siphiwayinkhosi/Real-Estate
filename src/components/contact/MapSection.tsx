import { motion } from "framer-motion";

export const MapSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-2xl p-8 shadow-soft"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Finden Sie uns</h2>
      <div className="bg-muted rounded-xl h-96 flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <div className="text-lg font-semibold mb-2">Interaktive Karte</div>
          <p>Hier würde die Google Maps-Integration eingebunden werden</p>
          <p className="text-sm mt-2">Musterstraße 123, 12345 Berlin</p>
        </div>
      </div>
    </motion.div>
  );
};
