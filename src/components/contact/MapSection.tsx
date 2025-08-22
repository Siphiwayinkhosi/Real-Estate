import { motion } from "framer-motion";

export const MapSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-2xl p-8 shadow-soft"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Finden Sie uns</h2>
      <div className="rounded-xl overflow-hidden h-96">
        <iframe
          title="Kintscher Immobilien Standort"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.485625633049!2d7.17814717633502!3d51.09173537956552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8b666f78879d7%3A0x8c999d1e2b0b1f11!2sKintscher%20Immobilien!5e0!3m2!1sde!2sde!4v1692733456789!5m2!1sde!2sde"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-xl"
        />
      </div>
      <p className="text-center text-muted-foreground mt-4">
        Höhestr. 23
51399 Burscheid
      </p>
    </motion.div>
  );
};
