import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaTree, FaBus, FaChurch, FaBuilding, FaKey, FaHandshake, FaHiking, FaTheaterMasks } from 'react-icons/fa';

const headingColor = '#000000';
const iconColor = '#448243';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
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

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
};

const sliderImages = [
  { src: '/odenthal.JPG', alt: 'Modernes Haus umgeben von Bäumen' },
  { src: '/odenthal1.JPG', alt: 'Schönes Vorstadthaus' },
  { src: '/odenthal2.JPG', alt: 'Klassisches Haus mit Garten' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // Set direction to 1 for forward slide
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

const Odenthal = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans">
      <title>Haus oder Wohnung in Odenthal kaufen | Kintscher Immobilien</title>
      <meta name="description" content="Immobilien in Odenthal ✓ Wohnen im Grünen mit Köln vor der Haustür ✓ Kaufen oder mieten mit Kintscher Immobilien." />

      <motion.div
        className="container mx-auto px-4 md:px-8 py-16 text-center pt-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight"
          style={{ color: headingColor }}
          variants={textVariants}
        >
          Immobilien in Odenthal – Natur trifft auf Stadtnähe
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto"
          variants={textVariants}
        >
          Odenthal liegt idyllisch am Rande des Bergischen Landes, eingebettet in Wälder und Wiesen. Köln ist nur 20 Minuten entfernt, was den Ort attraktiv für Pendler, Familien und Ruhesuchende macht.
        </motion.p>
      </motion.div>

      <motion.section
        className="container mx-auto px-4 md:px-8 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={textVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: headingColor }}>
              Odenthal – Leben zwischen Dom, Natur und bergischer Geschichte
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Odenthal ist ein Juwel im Bergischen Land, geprägt durch den ikonischen Altenberger Dom, ein gotisches Meisterwerk aus dem 13. Jahrhundert. Dieses kulturelle Zentrum bietet Konzerte, Märkte und Führungen und ist das Herz der Region.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <FaChurch size={24} className="mr-3 mt-1" style={{ color: iconColor }} />
                <span>Die Altenberger Kulturlandschaft lädt zum Entspannen ein, mit Wanderwegen, dem Dhünn-Stausee und weitläufigen Wäldern.</span>
              </li>
              <li className="flex items-start">
                <FaTheaterMasks size={24} className="mr-3 mt-1" style={{ color: iconColor }} />
                <span>Odenthal hat starke kulturelle Wurzeln: das Märchenfestival und Konzerte im Altenberger Dom ziehen Familien und Kulturinteressierte von weit her an.</span>
              </li>
              <li className="flex items-start">
                <FaHiking size={24} className="mr-3 mt-1" style={{ color: iconColor }} />
                <span>Hier vereinen sich Ruhe, Kultur und Natur in perfekter Harmonie.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div className="rounded-xl overflow-hidden shadow-xl" variants={imageVariants}>
            <ImageSlider />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="container mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="p-8 bg-gray-50 rounded-lg shadow-sm" variants={textVariants}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: headingColor }}>
            Warum Odenthal ideal für Käufer und Mieter ist
          </h2>
          <p className="text-gray-700">
            Odenthal ist architektonisch vielfältig: klassische bergische Fachwerkhäuser mit Schiefer und grünen Fensterläden prägen die Dörfer, während moderne Neubauten mit großzügigen Fensterfronten Licht und Natur in die Wohnungen bringen.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: headingColor }}>
            Typische Immobilien in Odenthal
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li><FaHome className="inline-block mr-2" style={{ color: iconColor }} />Traditionelle bergische Häuser mit Schieferfassaden</li>
            <li><FaBuilding className="inline-block mr-2" style={{ color: iconColor }} />Freistehende Häuser und Villen mit Gärten in ruhigen Lagen</li>
            <li><FaBuilding className="inline-block mr-2" style={{ color: iconColor }} />Moderne Neubauten mit klaren Linien in Wohngebieten</li>
            <li><FaKey className="inline-block mr-2" style={{ color: iconColor }} />Kleinere Wohnungen in renovierten Mehrfamilienhäusern</li>
          </ul>
        </motion.div>

        <motion.div className="p-8 bg-gray-50 rounded-lg shadow-sm" variants={textVariants}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: headingColor }}>
            Unsere Expertise in Odenthal
          </h2>
          <p className="text-gray-700 mb-6">
            Unser Team bei Kintscher Immobilien verfügt über umfassende Expertise auf dem Odenthaler Immobilienmarkt. Wir sind spezialisiert auf:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><FaHandshake className="inline-block mr-2" style={{ color: iconColor }} />Kauf eines Hauses in Odenthal</li>
            <li><FaHandshake className="inline-block mr-2" style={{ color: iconColor }} />Kauf einer Wohnung in Odenthal</li>
            <li><FaHandshake className="inline-block mr-2" style={{ color: iconColor }} />Miete eines Hauses in Odenthal</li>
            <li><FaHandshake className="inline-block mr-2" style={{ color: iconColor }} />Miete einer Wohnung in Odenthal</li>
            <li><FaHandshake className="inline-block mr-2" style={{ color: iconColor }} />Verkauf einer Immobilie in Odenthal</li>
          </ul>
        </motion.div>
      </motion.section>

      <motion.div
        className="text-center bg-gray-100 p-12 rounded-lg shadow-md max-w-5xl mx-auto my-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex justify-center mb-4">
          <FaHandshake size={60} style={{ color: iconColor }} />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: headingColor }}>
          Finden wir gemeinsam Ihre Traumimmobilie
        </h3>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Suchen Sie ein Haus oder eine Wohnung in Odenthal? Unser Team hilft Ihnen, Ihr perfektes Zuhause zu finden.
        </p>
        <motion.button
          className="bg-white text-lg font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform mb-3"
          style={{ color: iconColor, borderColor: iconColor, borderWidth: '2px' }}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(68, 130, 67, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Kontaktieren Sie Kintscher Immobilien
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Odenthal;
