import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center xl:text-left"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Bereit, Ihre Traumimmobilie zu finden?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Egal, ob Sie kaufen, verkaufen oder mieten möchten – unser
              Expertenteam begleitet Sie bei jedem Schritt Ihrer Immobilienreise.
              Entdecken Sie noch heute unsere außergewöhnlichen Immobilien.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
              <Link to="/find-real-estate" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-xl shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105"
                >
                  Immobilien durchsuchen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-xl backdrop-blur-sm bg-white/10 transition-all duration-300"
                >
                  Kontaktieren Sie uns
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 mt-10 xl:mt-0"
          >
            {/* Phone Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="flex items-start sm:items-center space-x-4">
                <div className="bg-white/20 rounded-full p-3 shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="text-sm sm:text-base">
                  <h3 className="font-semibold text-lg">Rufen Sie uns an</h3>
                  <p className="text-primary-foreground/80">+49 2174 785 796</p>
                  <p className="text-primary-foreground/70">
                    Mo–Fr 08:00–20:00 <br />
                    Sa: 09–17:00
                  </p>
                  <p className="text-primary-foreground/80 text-xs sm:text-sm mt-1">
                    Termine außerhalb der Geschäftszeiten auf Anfrage
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="flex items-start sm:items-center space-x-4">
                <div className="bg-white/20 rounded-full p-3 shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="text-sm sm:text-base">
                  <h3 className="font-semibold text-lg">Schreiben Sie uns</h3>
                  <p className="text-primary-foreground/80 break-words">
                    info@kintscher-immobilien.de
                  </p>
                  <p className="text-primary-foreground/70">
                    Wir antworten innerhalb von 24 Stunden
                  </p>
                </div>
              </div>
            </div>

            {/* Beratung Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10"
            >
              <h3 className="font-semibold text-lg mb-2">
                Kostenlose Beratung
              </h3>
              <p className="text-primary-foreground/80 text-sm sm:text-base">
                Vereinbaren Sie eine kostenlose Beratung mit unseren
                Immobilienexperten. Wir helfen Ihnen, den Markt zu verstehen und
                die besten Möglichkeiten zu finden.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 sm:top-20 right-6 sm:right-20 w-12 sm:w-20 h-12 sm:h-20 bg-white/5 rounded-full backdrop-blur-sm hidden xl:block"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 sm:bottom-20 left-6 sm:left-20 w-10 sm:w-16 h-10 sm:h-16 bg-white/5 rounded-full backdrop-blur-sm hidden xl:block"
      />
    </section>
  );
};
