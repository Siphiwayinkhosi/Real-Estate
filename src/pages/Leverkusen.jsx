import React from 'react';
import { motion } from 'framer-motion';
import { FaCity, FaHome, FaBriefcase, FaStar, FaBuilding, FaTrain, FaHandshake, FaPalette, FaChartLine, FaMapMarkedAlt } from 'react-icons/fa';

const brandColor = '#448243';
const primaryText = '#1a1a1a';
const secondaryText = '#666666';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
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

const Leverkusen = () => {
  const images = {
    transition: '/Leverkusen1.JPG',
    cultural: '/Leverkusen.JPG',
  };

  return (
    <div className="bg-white text-gray-800 font-sans leading-relaxed">
      <title>Kaufen & mieten Immobilien in Leverkusen | Kintscher Immobilien</title>
      <meta name="description" content="Häuser & Wohnungen in Leverkusen ✓ Von Schlebusch bis Opladen ✓ Ihr Immobilienmakler mit 25 Jahren Erfahrung." />

      {/* TOP SEO H1 Section */}
      <motion.section
        className="container mx-auto px-4 md:px-8 pt-24 pb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1 className="text-4xl md:text-5xl font-bold text-center mb-6" style={{ color: primaryText }} variants={itemVariants}>
          Immobilien in Leverkusen – Leben zwischen Köln und Düsseldorf
        </motion.h1>
        <motion.p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto" variants={itemVariants}>
          Leverkusen ist eine Stadt mit vielen Facetten. Von lebendigen Stadtteilen wie Opladen bis hin zu grünen Wohngebieten wie Schlebusch – hier findet jeder das passende Zuhause.
        </motion.p>
      </motion.section>

      {/* Section 1: City in Transition with Image Right */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <motion.div className="md:order-1 order-2 flex flex-col justify-center" variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6" style={{ color: primaryText }}>
              Leverkusen – Stadt im Wandel
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Leverkusen ist als Industriestadt bekannt, doch dieses Image wandelt sich schnell. Viertel wie das neue City C, Projekte in Wiesdorf und die Modernisierung der Innenstadt zeigen, dass Leverkusen zunehmend auf Lebensqualität setzt.
            </p>
            <p className="text-lg text-gray-700">
              Gleichzeitig werden historische Gebäude wie die Villa Römer, Wilhelminische Villen in Schlebusch und alte Bayer-Werkswohnanlagen als identitätsstiftende Architektur erhalten.
            </p>
          </motion.div>
          <motion.div className="md:order-2 order-1" variants={imageVariants}>
            <img src={images.transition} alt="Moderne Architektur im sich wandelnden Stadtzentrum Leverkusen" className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-xl" />
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2: Why Leverkusen is Ideal with Image Left */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16 bg-gray-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <motion.div variants={imageVariants}>
            <img src={images.cultural} alt="Sportarena oder Konzerthalle in Leverkusen, kulturelles Highlight" className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-xl" />
          </motion.div>
          <motion.div className="flex flex-col justify-center" variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6" style={{ color: primaryText }}>
              Warum Leverkusen ideal ist
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Leverkusen bietet eine Fülle kultureller Möglichkeiten: die BayArena, das Forum Leverkusen mit Konzerten, Theater und Konferenzen, zahlreiche Museen und eine lebendige Clubszene.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Parks und Grünflächen wie der Neulandpark an der Rheinuferpromenade bieten Erholung im urbanen Umfeld. Der Immobilienmarkt ist breit gefächert und bietet hervorragenden Wert.
            </p>
            <ul className="space-y-3 text-gray-700 font-light">
              <li className="flex items-start">
                <FaChartLine size={20} className="mr-3 mt-1" style={{ color: brandColor }} />
                <span>Oft niedrigere Immobilienpreise als in Köln und Düsseldorf bei ähnlich guten Lagen.</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkedAlt size={20} className="mr-3 mt-1" style={{ color: brandColor }} />
                <span>Vielfältige Arbeits- und Freizeitmöglichkeiten für jeden Lebensstil.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 3: Typical Properties */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="text-4xl font-bold text-center mb-12" style={{ color: primaryText }} variants={itemVariants}>
          Typische Immobilien in Leverkusen
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div className="p-6 rounded-lg shadow-md flex flex-col items-center text-center" style={{ backgroundColor: '#f0f4f0' }} variants={itemVariants}>
            <FaBuilding size={40} className="mb-4" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold mb-2">Moderne Eigentumswohnungen</h3>
            <p className="text-gray-700">In innerstädtischen Projekten mit zeitgemäßem Design.</p>
          </motion.div>
          <motion.div className="p-6 rounded-lg shadow-md flex flex-col items-center text-center" style={{ backgroundColor: '#f0f4f0' }} variants={itemVariants}>
            <FaHome size={40} className="mb-4" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold mb-2">Reihenhäuser</h3>
            <p className="text-gray-700">Familienfreundliche Optionen in Schlebusch oder Manfort.</p>
          </motion.div>
          <motion.div className="p-6 rounded-lg shadow-md flex flex-col items-center text-center" style={{ backgroundColor: '#f0f4f0' }} variants={itemVariants}>
            <FaHome size={40} className="mb-4" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold mb-2">Einfamilienhäuser</h3>
            <p className="text-gray-700">Geräumige Immobilien mit Garten am Stadtrand.</p>
          </motion.div>
          <motion.div className="p-6 rounded-lg shadow-md flex flex-col items-center text-center" style={{ backgroundColor: '#f0f4f0' }} variants={itemVariants}>
            <FaPalette size={40} className="mb-4" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold mb-2">Historische Villen</h3>
            <p className="text-gray-700">Stilvolle Villen aus der Wilhelminischen oder klassischen Bauhaus-Ära.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* SEO & CTA */}
      <motion.div
        className="bg-gray-100 py-24"
        style={{ backgroundColor: '#f0f4f0' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h2 className="text-4xl font-bold mb-6" style={{ color: primaryText }} variants={itemVariants}>
            Ihr Immobilienpartner in Leverkusen
          </motion.h2>
          <motion.p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: secondaryText }} variants={itemVariants}>
            Mit über 25 Jahren Erfahrung ist Kintscher Immobilien Ihr kompetenter Partner auf dem dynamischen Leverkusener Immobilienmarkt. Persönliche und fachkundige Beratung für all Ihre Immobilienanliegen.
          </motion.p>
          <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10" variants={sectionVariants}>
            <motion.li className="text-left font-semibold flex items-center p-3 rounded-md transition-colors" style={{ color: primaryText, backgroundColor: 'white' }} variants={itemVariants}>
                <FaHandshake size={24} className="mr-3 flex-shrink-0" style={{ color: brandColor }} /> Haus kaufen in Leverkusen
            </motion.li>
            <motion.li className="text-left font-semibold flex items-center p-3 rounded-md transition-colors" style={{ color: primaryText, backgroundColor: 'white' }} variants={itemVariants}>
                <FaHandshake size={24} className="mr-3 flex-shrink-0" style={{ color: brandColor }} /> Wohnung mieten in Leverkusen
            </motion.li>
            <motion.li className="text-left font-semibold flex items-center p-3 rounded-md transition-colors" style={{ color: primaryText, backgroundColor: 'white' }} variants={itemVariants}>
                <FaHandshake size={24} className="mr-3 flex-shrink-0" style={{ color: brandColor }} /> Wohnung kaufen in Leverkusen
            </motion.li>
          </motion.ul>
          <motion.button
            className="bg-white text-lg font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform mt-8"
            style={{ color: brandColor, borderColor: brandColor, borderWidth: '2px' }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(68, 130, 67, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Starten Sie jetzt mit Kintscher Immobilien in Leverkusen
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Leverkusen;
