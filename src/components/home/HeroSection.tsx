import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with slow zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
        animate={{ scale: [1, 1.05] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Text background for readability */}
        <div className="inline-block bg-black/5 backdrop-blur-sm p-6 rounded-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Mit Begeisterung für
              <span className="block text-white">Ihr Zuhause</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white max-w-xl mx-auto"
            >
              Und das seit über 30 Jahren.<br /> Ihr Immobilienmakler im
              Rheinisch-Bergischen Kreis.<br /> Mit Herz & Kompetenz
            </motion.p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/find-real-estate">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                  Immobilien entdecken
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-xl bg-white/10 backdrop-blur-sm transition-all hover:scale-105"
                >
                  Jetzt Beratung anfragen
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};


