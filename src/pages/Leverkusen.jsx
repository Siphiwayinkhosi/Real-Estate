import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCity, FaHome, FaBriefcase, FaStar, FaBuilding, FaTrain, FaHandshake, FaPalette, FaChartLine, FaMapMarkedAlt, FaPlane } from 'react-icons/fa';

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

const imageSectionVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const sliderImages = [
  { src: '/Leverkusen1.JPG', alt: 'Moderne Architektur im sich wandelnden Stadtzentrum Leverkusen' },
  { src: '/Leverkusen.JPG', alt: 'Sportarena oder Konzerthalle in Leverkusen' },
  { src: '/Leverkusen2.JPG', alt: 'Rheinuferpromenade mit Grünflächen in Leverkusen' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
    }),
    center: {
      x: 0,
      transition: {
        x: { type: "tween", duration: 1.5, ease: "easeInOut" },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      transition: {
        x: { type: "tween", duration: 1.5, ease: "easeInOut" },
      },
    }),
  };

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={sliderImages[currentIndex].src}
          alt={sliderImages[currentIndex].alt}
          className="absolute inset-0 w-full h-full object-cover"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
        />
      </AnimatePresence>
    </div>
  );
};

const Leverkusen = () => {
  return (
    <div className="bg-white text-gray-800 font-sans leading-relaxed">
      <title>Kaufen & mieten Immobilien in Leverkusen | Kintscher Immobilien</title>
      <meta name="description" content="Häuser & Wohnungen in Leverkusen ✓ Von Schlebusch bis Opladen ✓ Ihr Immobilienmakler mit 25 Jahren Erfahrung." />

      {/* TOP SEO H1 Section - Matches Odenthal */}
      <motion.section
        className="container mx-auto px-4 md:px-8 pt-24 pb-16 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: primaryText }} variants={itemVariants}>
          Immobilien in Leverkusen – Leben zwischen Köln und Düsseldorf
        </motion.h1>
        <motion.p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto" variants={itemVariants}>
          Leverkusen ist eine Stadt mit vielen Facetten. Von lebendigen Stadtteilen wie Opladen bis hin zu grünen Wohngebieten wie Schlebusch – hier findet jeder das passende Zuhause.
        </motion.p>
      </motion.section>

      {/* City in Transition Section with Image Slider - Matches Odenthal */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primaryText }}>
              Leverkusen – Stadt im Wandel
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Leverkusen ist als Industriestadt bekannt, doch dieses Image wandelt sich schnell. Viertel wie das neue City C, Projekte in Wiesdorf und die Modernisierung der Innenstadt zeigen, dass Leverkusen zunehmend auf Lebensqualität setzt.
            </p>
           <ul className="space-y-4 text-gray-700">
  <li className="flex items-start">
    <FaStar size={24} className="mt-1" style={{ color: brandColor }} />
    <span style={{ marginLeft: '1rem' }}>Vielfältige Arbeits- und Freizeitmöglichkeiten für jeden Lebensstil.</span>
  </li>
  <li className="flex items-start">
    <span style={{ transform: 'scale(1.2)', transformOrigin: 'top left' }}><FaCity size={24} className="mt-1" style={{ color: brandColor }} /></span>
    <span style={{ marginLeft: '1rem' }}>Gleichzeitig werden historische Gebäude wie die Villa Römer, Wilhelminische Villen in Schlebusch und alte Bayer-Werkswohnanlagen als identitätsstiftende Architektur erhalten.</span>
  </li>
  <li className="flex items-start">
    <FaPlane size={24} className="mt-1" style={{ color: brandColor }} />
    <span style={{ marginLeft: '1rem' }}>Die Anbindung an die Flughäfen Köln/Bonn und Düsseldorf ist sehr gut.</span>
  </li>
</ul>
          </motion.div>

          <motion.div className="rounded-xl overflow-hidden shadow-xl" variants={imageSectionVariants}>
            <ImageSlider />
          </motion.div>
        </div>
      </motion.section>

      {/* Why Leverkusen is Ideal / Typical Properties Section - Matches Odenthal */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="p-8 bg-gray-50 rounded-lg shadow-sm" variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: primaryText }}>
            Warum Leverkusen ideal für Käufer und Mieter ist
          </h2>
          <p className="text-gray-700 mb-6">
            Leverkusen bietet eine Fülle kultureller Möglichkeiten: die BayArena, das Forum Leverkusen mit Konzerten, Theater und Konferenzen, zahlreiche Museen und eine lebendige Clubszene.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li><FaChartLine className="inline-block mr-2" style={{ color: brandColor }} />Oft niedrigere Immobilienpreise als in Köln und Düsseldorf bei ähnlich guten Lagen.</li>
            <li><FaMapMarkedAlt className="inline-block mr-2" style={{ color: brandColor }} />Vielfältige Arbeits- und Freizeitmöglichkeiten für jeden Lebensstil.</li>
            <li><FaTrain className="inline-block mr-2" style={{ color: brandColor }} />Ausgezeichnete Verkehrsanbindung an das gesamte Rheinland.</li>
          </ul>
        </motion.div>

        <motion.div className="p-8 bg-gray-50 rounded-lg shadow-sm" variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: primaryText }}>
            Typische Immobilien in Leverkusen
          </h2>
          <p className="text-gray-700 mb-6">
            In Leverkusen finden Sie eine breite Palette an Immobilien, die zu jedem Lebensstil passen, von modernen Wohnungen bis zu geräumigen Familienhäusern.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><FaBuilding className="inline-block mr-2" style={{ color: brandColor }} />Moderne Eigentumswohnungen in innerstädtischen Projekten</li>
            <li><FaHome className="inline-block mr-2" style={{ color: brandColor }} />Reihenhäuser in familienfreundlichen Stadtteilen</li>
            <li><FaHome className="inline-block mr-2" style={{ color: brandColor }} />Einfamilienhäuser mit Gärten am Stadtrand</li>
            <li><FaPalette className="inline-block mr-2" style={{ color: brandColor }} />Historische Villen aus der klassischen Bauhaus-Ära</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* CTA Section - Matches Odenthal */}
      <motion.div
        className="text-center bg-gray-100 p-12 rounded-lg shadow-md max-w-5xl mx-auto my-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex justify-center mb-4">
          <FaHandshake size={60} style={{ color: brandColor }} />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: primaryText }}>
          Finden wir gemeinsam Ihre Traumimmobilie
        </h3>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Mit über 25 Jahren Erfahrung ist Kintscher Immobilien Ihr kompetenter Partner auf dem dynamischen Leverkusener Immobilienmarkt.
        </p>
        <motion.button
         className="inline-flex items-center gap-2 bg-[#448243] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors mb-4"
        >
         Jetzt kontaktieren
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Leverkusen;