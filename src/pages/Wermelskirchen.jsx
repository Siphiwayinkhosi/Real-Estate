import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Users, Building, Home, Handshake } from 'lucide-react';

// Farben & Texteinstellungen
const brandColor = '#6A8A6A'; // Grün für Icons
const primaryText = '#000000'; // Schwarze Überschriften
const secondaryText = '#757575';
const backgroundColor = '#F9F9F7';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const Wermelskirchen = () => {
  const images = {
    advantages: '/wes.JPG', // Bild für Vorteile
    properties: '/wes1.JPG', // Bild für Immobilien
  };

  return (
    <div className="bg-white text-gray-800 font-sans leading-relaxed">
      <title>Haus & Wohnung kaufen oder mieten in Wermelskirchen | Kintscher Immobilien</title>
      <meta
        name="description"
        content="Ihr Immobilienmakler in Wermelskirchen ✓ Häuser & Wohnungen kaufen oder mieten ✓ Über 25 Jahre Erfahrung."
      />

      {/* Hero Section */}
      <motion.div
        className="relative flex flex-col items-center justify-center pt-24 pb-12 px-8 text-center"
        style={{ backgroundColor: backgroundColor }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative z-10 max-w-5xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-4 tracking-tight"
            style={{ color: primaryText }}
            variants={itemVariants}
          >
            Immobilien in Wermelskirchen – Wohnen im Bergischen Land
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-light max-w-3xl mx-auto"
            style={{ color: secondaryText }}
            variants={itemVariants}
          >
            Mit rund 35.000 Einwohnern ist Wermelskirchen eine lebendige Stadt im Bergischen Land. 
            Sie bietet eine ausgezeichnete Infrastruktur und gleichzeitig eine landschaftlich reizvolle Umgebung.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Vorteile mit Bild */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-8" style={{ color: primaryText }}>
              Vorteile von Wermelskirchen
            </h2>
            <div className="space-y-8 text-lg text-gray-700">
              <div className="flex items-start">
                <MapPin size={32} className="mr-4 mt-1" style={{ color: brandColor }} />
                <div>
                  <h3 className="text-xl font-semibold mb-1" style={{ color: primaryText }}>Zentrale Lage</h3>
                  <p>Günstig gelegen zwischen Köln, Düsseldorf und dem Ruhrgebiet.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Briefcase size={32} className="mr-4 mt-1" style={{ color: brandColor }} />
                <div>
                  <h3 className="text-xl font-semibold mb-1" style={{ color: primaryText }}>Starke Wirtschaft</h3>
                  <p>Ein florierender Mittelstand sorgt für attraktive Arbeitsplätze.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users size={32} className="mr-4 mt-1" style={{ color: brandColor }} />
                <div>
                  <h3 className="text-xl font-semibold mb-1" style={{ color: primaryText }}>Familienfreundlich</h3>
                  <p>Zahlreiche Schulen, Sportvereine und Freizeitangebote für alle Altersgruppen.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={imageVariants}>
            <img
              src={images.advantages}
              alt="Landschaft in Wermelskirchen"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Typische Immobilien */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16"
        style={{ backgroundColor: backgroundColor }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={imageVariants}>
            <img
              src={images.properties}
              alt="Moderne Immobilien in Wermelskirchen"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div className="flex flex-col justify-center" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-left mb-8" style={{ color: primaryText }}>
              Typische Immobilien in Wermelskirchen
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <div className="flex items-center">
                <Building size={24} className="mr-3" style={{ color: brandColor }} />
                <span>Eigentumswohnungen im Stadtzentrum</span>
              </div>
              <div className="flex items-center">
                <Home size={24} className="mr-3" style={{ color: brandColor }} />
                <span>Einfamilienhäuser in Lennep und Dhünn</span>
              </div>
              <div className="flex items-center">
                <Building size={24} className="mr-3" style={{ color: brandColor }} />
                <span>Mehrfamilienhäuser für Investoren</span>
              </div>
              <div className="flex items-center">
                <Home size={24} className="mr-3" style={{ color: brandColor }} />
                <span>Mietwohnungen in zentraler Lage</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SEO & CTA */}
      <motion.div
        className="py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h2 className="text-4xl font-bold mb-6" style={{ color: primaryText }} variants={itemVariants}>
            Ihr Immobilienmakler in Wermelskirchen
          </motion.h2>
          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10"
            variants={sectionVariants}
          >
            <motion.li
              className="text-left font-semibold flex items-center p-3 rounded-md transition-colors"
              style={{ color: primaryText, backgroundColor: backgroundColor }}
              variants={itemVariants}
            >
              <Handshake size={24} className="mr-3 flex-shrink-0" style={{ color: brandColor }} /> Wohnung mieten in Wermelskirchen
            </motion.li>
            <motion.li
              className="text-left font-semibold flex items-center p-3 rounded-md transition-colors"
              style={{ color: primaryText, backgroundColor: backgroundColor }}
              variants={itemVariants}
            >
              <Handshake size={24} className="mr-3 flex-shrink-0" style={{ color: brandColor }} /> Haus kaufen in Wermelskirchen
            </motion.li>
            <motion.li
              className="text-left font-semibold flex items-center p-3 rounded-md transition-colors"
              style={{ color: primaryText, backgroundColor: backgroundColor }}
              variants={itemVariants}
            >
              <Handshake size={24} className="mr-3 flex-shrink-0" style={{ color: brandColor }} /> Wohnung kaufen in Wermelskirchen
            </motion.li>
            <motion.li
              className="text-left font-semibold flex items-center p-3 rounded-md transition-colors"
              style={{ color: primaryText, backgroundColor: backgroundColor }}
              variants={itemVariants}
            >
              <Handshake size={24} className="mr-3 flex-shrink-0" style={{ color: brandColor }} /> Haus mieten in Wermelskirchen
            </motion.li>
          </motion.ul>

          <motion.button
            className="bg-white text-lg font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform mt-8"
            style={{
              color: '#448243',
             
              borderColor: brandColor,
              borderWidth: '2px',
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(106, 138, 106, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Lassen Sie sich beraten – wir bringen Sie schnell zu Ihrer Immobilie in Wermelskirchen.
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Wermelskirchen;
