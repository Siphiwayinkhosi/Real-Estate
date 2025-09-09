import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Handshake, Building, Home, MapPin, Car, Users } from 'lucide-react';

// Brand colors
const brandColor = '#448243';
const primaryText = '#1a1a1a';
const secondaryText = '#666666';

// Framer Motion Variants
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const Burscheid = () => {
  const images = {
    nature: '/bucheid.JPG',

  };

  return (
    <div className="bg-white text-gray-800 font-sans leading-relaxed">
      <title>Haus oder Wohnung kaufen oder mieten in Burscheid | Kintscher Immobilien</title>
      <meta name="description" content="Immobilien in Burscheid kaufen oder mieten ✓ Ihr Partner mit über 25 Jahren Erfahrung ✓ Häuser, Wohnungen & Grundstücke im Rheinisch-Bergischen Kreis." />

      {/* Hero Section */}
      <motion.div
        className="relative bg-gray-50 flex flex-col items-center justify-center py-24 px-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative z-10 w-full text-center"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
  className="text-4xl md:text-5xl font-bold leading-tight mb-4 tracking-tight w-full"
  style={{ color: primaryText }}
  variants={itemVariants}
>
  Immobilien in Burscheid – Ihr Zuhause mit Kintscher Immobilien
</motion.h1>

          <motion.p
            className="text-lg md:text-xl font-light max-w-3xl mx-auto"
            style={{ color: secondaryText }}
            variants={itemVariants}
          >
            Burscheid ist eine charmante Stadt im Rheinisch-Bergischen Kreis. Mit ihrer naturnahen Lage und der schnellen Anbindung nach Köln, Düsseldorf und Leverkusen bietet Burscheid die perfekte Mischung für alle, die das Ländliche mit der Nähe zur Stadt suchen.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Why Burscheid Section */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="text-4xl font-bold text-center mb-12" style={{ color: primaryText }} variants={itemVariants}>
          Warum Burscheid ideal für Immobiliensuchende und Mieter ist
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={imageVariants}>
            <img src={images.nature} alt="Üppige grüne Wälder und Naturpfade in Burscheid" className="w-full h-auto object-cover rounded-lg shadow-xl" />
          </motion.div>
          <motion.div className="flex flex-col justify-center" variants={itemVariants}>
            <div className="space-y-8 text-lg text-gray-700">
              <div className="flex items-start">
                <Car size={32} className="mr-4 mt-1" style={{ color: brandColor }} />
                <div>
                  <h3 className="text-2xl font-semibold mb-2" style={{ color: primaryText }}>Verkehrsanbindung</h3>
                  <p>Direkt an der A1 gelegen, nur wenige Minuten von Leverkusen oder Köln entfernt, was ein problemloses Pendeln ermöglicht.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Leaf size={32} className="mr-4 mt-1" style={{ color: brandColor }} />
                <div>
                  <h3 className="text-2xl font-semibold mb-2" style={{ color: primaryText }}>Natur</h3>
                  <p>Wälder, Rad- und Wanderwege machen Burscheid ideal für Familien und Naturliebhaber.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users size={32} className="mr-4 mt-1" style={{ color: brandColor }} />
                <div>
                  <h3 className="text-2xl font-semibold mb-2" style={{ color: primaryText }}>Infrastruktur</h3>
                  <p>Wesentliche Einrichtungen wie Schulen, Kindergärten, Einkaufsmöglichkeiten und medizinische Versorgung sind vor Ort verfügbar.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Typical Properties Section */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16 bg-gray-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="text-4xl font-bold text-center mb-12" style={{ color: primaryText }} variants={itemVariants}>
          Typische Immobilien in Burscheid
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div className="p-6 rounded-lg shadow-md flex flex-col items-center text-center" style={{ backgroundColor: '#f0f4f0' }} variants={itemVariants}>
            <Home size={40} className="mb-4" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold mb-2">Einfamilienhäuser & Doppelhaushälften</h3>
            <p className="text-gray-700">In ruhigen Wohngebieten zu finden, perfekt für Familien.</p>
          </motion.div>
          <motion.div className="p-6 rounded-lg shadow-md flex flex-col items-center text-center" style={{ backgroundColor: '#f0f4f0' }} variants={itemVariants}>
            <Building size={40} className="mb-4" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold mb-2">Mietwohnungen</h3>
            <p className="text-gray-700">Verfügbar im Zentrum oder im Stadtteil Hilgen.</p>
          </motion.div>
          <motion.div className="p-6 rounded-lg shadow-md flex flex-col items-center text-center" style={{ backgroundColor: '#f0f4f0' }} variants={itemVariants}>
            <MapPin size={40} className="mb-4" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold mb-2">Grundstücke für Neubauten</h3>
            <p className="text-gray-700">Ausgezeichnete Möglichkeiten für maßgeschneiderte Eigenheime.</p>
          </motion.div>
          <motion.div className="p-6 rounded-lg shadow-md flex flex-col items-center text-center" style={{ backgroundColor: '#f0f4f0' }} variants={itemVariants}>
            <Home size={40} className="mb-4" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold mb-2">Schnäppchenhäuser und Bestandsobjekte</h3>
            <p className="text-gray-700">Charmante und erschwingliche Optionen mit großem Potenzial.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Advantage & SEO Section */}
      <motion.div
        className="relative py-24 bg-gray-100"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <motion.h2 className="text-4xl font-bold mb-6" style={{ color: primaryText }} variants={itemVariants}>
            Ihr Vorteil mit Kintscher Immobilien
          </motion.h2>
          <motion.p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: secondaryText }} variants={itemVariants}>
            Wir kennen den Burscheider Markt seit Jahrzehnten und begleiten Sie persönlich – von der Wertschätzung bis zum Notartermin.
          </motion.p>
          <motion.h3 className="text-2xl font-bold mb-6" style={{ color: primaryText }} variants={itemVariants}>
            Relevante Suchbegriffe
          </motion.h3>
          <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10" variants={sectionVariants}>
            <motion.li className="text-left font-semibold flex items-center p-3 rounded-md transition-colors" style={{ color: primaryText, backgroundColor: 'white' }} variants={itemVariants}>
              <Handshake size={24} className="mr-3 flex-shrink-0" style={{ color: brandColor }} /> Haus kaufen in Burscheid
            </motion.li>
            <motion.li className="text-left font-semibold flex items-center p-3 rounded-md transition-colors" style={{ color: primaryText, backgroundColor: 'white' }} variants={itemVariants}>
              <Handshake size={24} className="mr-3 flex-shrink-0" style={{ color: brandColor }} /> Wohnung mieten in Burscheid
            </motion.li>
            <motion.li className="text-left font-semibold flex items-center p-3 rounded-md transition-colors" style={{ color: primaryText, backgroundColor: 'white' }} variants={itemVariants}>
              <Handshake size={24} className="mr-3 flex-shrink-0" style={{ color: brandColor }} /> Wohnung kaufen in Burscheid
            </motion.li>
            <motion.li className="text-left font-semibold flex items-center p-3 rounded-md transition-colors " style={{ color: primaryText, backgroundColor: 'white' }} variants={itemVariants}>
              <Handshake size={24} className="mr-3 flex-shrink-0" style={{ color: brandColor }} /> Haus mieten in Burscheid
            </motion.li>
          </motion.ul>

          <motion.button
            className="bg-white text-lg font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform mt-6"
            style={{ color: brandColor, borderColor: brandColor, borderWidth: '2px' }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(68, 130, 67, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Kontaktieren Sie uns für ein unverbindliches Gespräch – Ihr neues Zuhause in Burscheid wartet schon!
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Burscheid;
