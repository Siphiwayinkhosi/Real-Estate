import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaHome, FaPalette, FaUsers, FaMapMarkerAlt, FaKey, FaHandshake, FaTrain } from 'react-icons/fa';

// Brand colors
const brandColor = '#448243';
const primaryText = '#2c2c2c';
const lightBg = '#f9f9f9';

// Framer Motion variants for sections and text
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
  { src: '/opladen.JPG', alt: 'Urban train tracks and modern architecture in Opladen' },
  { src: '/opladen1.JPG', alt: 'Modern residential complex with terraces' },
  { src: '/opladen2.JPG', alt: 'Art Nouveau style building with large windows' },
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

const Opladen = () => {
  return (
    <div className="bg-white min-h-screen font-sans leading-relaxed text-gray-800">
      <title>Immobilien in Opladen: Kaufen & Mieten | Kintscher Immobilien</title>
      <meta
        name="description"
        content="Kaufen oder mieten Sie Wohnungen & Häuser in Opladen ✓ Ihr Partner für Immobilien in Leverkusen und Umgebung."
      />

      {/* Hero Section */}
      <motion.div
        className="container mx-auto px-4 md:px-8 py-16 text-center pt-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="text-4xl md:text-4xl font-bold leading-tight pt-20 "
          style={{ color: primaryText }}
          variants={textVariants}
        >
          Immobilien in Opladen – urban und charmant
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto"
          variants={textVariants}
        >
          Opladen ist ein beliebter Stadtteil von Leverkusen. Historische Gebäude, neue Wohnkomplexe und ausgezeichnete Verkehrsanbindungen machen Opladen attraktiv für Familien und Pendler.
        </motion.p>
      </motion.div>

      ---

      {/* Intro & Image Section */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={textVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primaryText }}>
              Opladen – Zwischen Industriegeschichte und urbanem Aufbruch
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Opladen, ein traditionsreicher Stadtteil von Leverkusen, ist derzeit eines der spannendsten Entwicklungsgebiete der Region. Das Projekt <strong>"Neue Bahnstadt Opladen"</strong> verwandelt ein ganzes Quartier. Alte Industriehallen werden zu Kultur-, Wohn- und Arbeitszwecken umgenutzt und schaffen so ein lebendiges, modernes Zentrum.
            </p>
 <ul className="space-y-4 text-gray-700">
  <li className="flex gap-4">
    <FaMapMarkerAlt size={24} className="flex-shrink-0 mt-1" style={{ color: brandColor }} />
    <p>
      Moderne Fuß- und Radwegbrücken verbinden die Stadtteile, und alte Bahngleise werden in öffentliche Plätze umgewandelt.
    </p>
  </li>

  <li className="flex gap-4">
    <FaUsers size={24} className="flex-shrink-0 mt-1" style={{ color: brandColor }} />
    <p>
      Opladen ist kulturell lebendig: Stadtfeste, Konzerte und Märkte beleben das Zentrum.
    </p>
  </li>

  <li className="flex gap-4">
    <FaTrain size={24} className="flex-shrink-0 mt-1" style={{ color: brandColor }} />
    <p>
      Ausgezeichnete Verkehrsanbindung an das gesamte Rheinland.
    </p>
  </li>
</ul>

          </motion.div>

          <motion.div className="rounded-xl overflow-hidden shadow-xl" variants={imageVariants}>
            <ImageSlider />
          </motion.div>
        </div>
      </motion.section>

      ---

      {/* Split Content Section */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="p-8 bg-gray-50 rounded-lg shadow-sm flex flex-col justify-between h-full" variants={textVariants}>
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: primaryText }}>
              Architektonische Vielfalt
            </h2>
            <p className="text-gray-700">
              Die Architektur von Opladen ist eine Mischung aus Jugendstilhäusern, wilhelminischen Fassaden und modernen Wohnkomplexen. Diese Stilvielfalt bietet einzigartige Wohnmöglichkeiten.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: primaryText }}>
              Typische Immobilien in Opladen
            </h3>
          </div>
          <ul className="space-y-3 text-gray-700 mt-4">
            <li><FaHome className="inline-block mr-2" style={{ color: brandColor }} />Wohnungen in Altbauten mit hohen Decken und Stuckverzierungen</li>
            <li><FaBuilding className="inline-block mr-2" style={{ color: brandColor }} />Moderne Neubauprojekte im Zentrum</li>
            <li><FaPalette className="inline-block mr-2" style={{ color: brandColor }} />Einfamilienhäuser am Stadtrand in ruhiger Lage</li>
            <li><FaKey className="inline-block mr-2" style={{ color: brandColor }} />Mietwohnungen für Singles und Familien</li>
          </ul>
        </motion.div>

        <motion.div className="p-8 bg-gray-50 rounded-lg shadow-sm flex flex-col justify-between h-full" variants={textVariants}>
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: primaryText }}>
              Unsere Expertise in Opladen
            </h2>
            <p className="text-gray-700 mb-6">
              Als Ihr Immobilienpartner in Opladen sind wir mit dem lokalen Markt bestens vertraut. Wir unterstützen Sie bei:
            </p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
            <li><FaHandshake className="inline-block mr-2" style={{ color: brandColor }} />Wohnung mieten in Opladen</li>
            <li><FaHandshake className="inline-block mr-2" style={{ color: brandColor }} />Haus kaufen in Opladen</li>
            <li><FaHandshake className="inline-block mr-2" style={{ color: brandColor }} />Wohnung kaufen in Opladen</li>
            <li><FaHandshake className="inline-block mr-2" style={{ color: brandColor }} />Immobilie verkaufen in Opladen</li>
          </ul>
        </motion.div>
      </motion.section>

      ---

      {/* CTA Section */}
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
          Finden Sie Ihre perfekte Immobilie
        </h3>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Kontaktieren Sie uns jetzt unverbindlich, um Ihre Suche nach Ihrem perfekten Zuhause in Opladen zu beginnen.
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

export default Opladen;