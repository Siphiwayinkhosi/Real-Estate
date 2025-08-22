import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Bereit, Ihre Traumimmobilie zu finden?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Egal, ob Sie kaufen, verkaufen oder mieten möchten – unser Expertenteam begleitet Sie bei jedem Schritt Ihrer Immobilienreise. Entdecken Sie noch heute unsere außergewöhnlichen Immobilien.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/find-real-estate">
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105"
                >
                  Immobilien durchsuchen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm bg-white/10 transition-all duration-300"
                >
                  Kontaktieren Sie uns
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Rufen Sie uns an</h3>
                  <p className="text-primary-foreground/80">+49 2174 785 796</p>
                  <p className="text-sm text-primary-foreground/70">Mo-Fr 08:00-20:00</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Schreiben Sie uns</h3>
                  <p className="text-primary-foreground/80">info@kintscher-immobilien.de</p>
                  <p className="text-sm text-primary-foreground/70">Wir antworten innerhalb von 24 Stunden</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="font-semibold text-lg mb-2">Kostenlose Beratung</h3>
              <p className="text-primary-foreground/80 text-sm">
                Vereinbaren Sie eine kostenlose Beratung mit unseren Immobilienexperten. 
                Wir helfen Ihnen, den Markt zu verstehen und die besten Möglichkeiten zu finden.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-20 h-20 bg-white/5 rounded-full backdrop-blur-sm hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-16 h-16 bg-white/5 rounded-full backdrop-blur-sm hidden lg:block"
      />
    </section>
  );
};
