import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaHome, FaPalette, FaUsers, FaHandshake, FaMapMarkedAlt, FaLeaf, FaTrain, FaTree } from 'react-icons/fa';

// Brand colors and typography
const brandColor = '#448243';
const primaryText = '#1a1a1a';
const secondaryText = '#666666';

// Framer Motion variants
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
  { src: '/leichileng.JPG', alt: 'Idyllisches Fachwerkhaus in Leichlingen' },
  { src: '/leichileng1.JPG', alt: 'Modernes Wohnhaus in Leichlingen' },
  { src: '/leichileng2.JPG', alt: 'Wupperufer mit Blick auf Leichlingen' },
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

const Leichlingen = () => {
  return (
    <div className="bg-white min-h-screen font-sans leading-relaxed text-gray-800">

      {/* SEO & Meta */}
      <title>Kaufen & Mieten von Immobilien in Leichlingen | Kintscher Immobilien</title>
      <meta
        name="description"
        content="Häuser & Wohnungen in Leichlingen ✓ Nah an der Natur mit hervorragender Anbindung an Köln und Düsseldorf."
      />

      {/* Hero Section - Matches Odenthal/Leverkusen */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16 text-center pt-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight"
          style={{ color: primaryText }}
          variants={textVariants}
        >
          Immobilien in Leichlingen – die Blumenstadt an der Wupper
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto"
          variants={textVariants}
        >
          Leichlingen heißt nicht umsonst "Blumenstadt": Grüne Landschaften, Obstgärten und die Wupper machen den Ort besonders lebenswert.
        </motion.p>
      </motion.section>
      
      {/* Intro & Image Section - Matches Odenthal/Leverkusen */}
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
              Leben in Leichlingen
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Leichlingen bietet eine Mischung aus modernen Neubauten und bergischer Tradition. Idyllische Fachwerkhäuser finden Sie entlang der Wupper, während neue Wohnkomplexe mit Balkonen und Dachterrassen im Stadtzentrum liegen.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <FaTree size={24} className="mr-3 mt-1" style={{ color: brandColor }} />
                <span>Die Natur prägt den Alltag: Spaziergänge entlang der Wupper, Radwege durch Felder und kleine Cafés am Flussufer.</span>
              </li>
              <li className="flex items-start">
                <FaTrain size={24} className="mr-3 mt-1" style={{ color: brandColor }} />
                <span>Gleichzeitig sind die Metropolen Köln, Leverkusen und Düsseldorf schnell erreichbar.</span>
              </li>
              <li className="flex items-start">
                <FaLeaf size={24} className="mr-3 mt-1" style={{ color: brandColor }} />
                <span>Grüne Landschaften, Obstgärten und die Wupper machen den Ort besonders lebenswert.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div className="rounded-xl overflow-hidden shadow-xl" variants={imageVariants}>
            <ImageSlider />
          </motion.div>
        </div>
      </motion.section>

      {/* Split Content Section - Matches Odenthal/Leverkusen */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="p-8 bg-gray-50 rounded-lg shadow-sm" variants={textVariants}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: primaryText }}>
            Modernes und traditionelles Wohnen
          </h2>
          <p className="text-gray-700">
            Moderne Apartments und Neubauprojekte bieten komfortable Wohnungen mit Terrasse oder Balkon, perfekt für alle, die Natur und urbanes Leben verbinden möchten.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: primaryText }}>
            Typische Immobilien in Leichlingen
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li><FaHome className="inline-block mr-2" style={{ color: brandColor }} />Reihenhäuser in ruhigen Neubaugebieten</li>
            <li><FaBuilding className="inline-block mr-2" style={{ color: brandColor }} />Wohnungen mit Terrasse oder Balkon</li>
            <li><FaHome className="inline-block mr-2" style={{ color: brandColor }} />Großzügige Einfamilienhäuser</li>
            <li><FaMapMarkedAlt className="inline-block mr-2" style={{ color: brandColor }} />Charmante Bestandshäuser entlang der Wupper</li>
          </ul>
        </motion.div>

        <motion.div className="p-8 bg-gray-50 rounded-lg shadow-sm" variants={textVariants}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: primaryText }}>
            Ihr Immobilienpartner vor Ort
          </h2>
          <p className="text-gray-700 mb-6">
            Als Ihr Experte für den lokalen Immobilienmarkt begleiten wir Sie professionell bei allen Schritten, vom ersten Gespräch bis zum Vertragsabschluss.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><FaHandshake className="inline-block mr-2" style={{ color: brandColor }} />Haus kaufen in Leichlingen</li>
            <li><FaHandshake className="inline-block mr-2" style={{ color: brandColor }} />Wohnung mieten in Leichlingen</li>
            <li><FaHandshake className="inline-block mr-2" style={{ color: brandColor }} />Immobilie verkaufen in Leichlingen</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* CTA Section - Matches Odenthal/Leverkusen */}
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
          Finden Sie Ihre Traumimmobilie in Leichlingen
        </h3>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Starten Sie jetzt mit Kintscher Immobilien und lassen Sie sich von uns auf dem Weg zu Ihrem neuen Zuhause begleiten.
        </p>
        <motion.button
          className="bg-white text-lg font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform mb-3"
          style={{ color: brandColor, borderColor: brandColor, borderWidth: '2px' }}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(68, 130, 67, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Kontaktieren Sie uns jetzt!
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Leichlingen;