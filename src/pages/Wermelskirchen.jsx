import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapPin, FaBriefcase, FaUsers, FaBuilding, FaHome, FaHandshake } from 'react-icons/fa';

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
  { src: '/wes.JPG', alt: 'Landschaft in Wermelskirchen' },
  { src: '/wes1.JPG', alt: 'Moderne Immobilien in Wermelskirchen' },
  { src: '/wes2.JPG', alt: 'Panoramablick auf die Stadt Wermelskirchen' },
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

const Wermelskirchen = () => {
  return (
    <div className="bg-white text-gray-800 font-sans leading-relaxed">
      <title>Haus & Wohnung kaufen oder mieten in Wermelskirchen | Kintscher Immobilien</title>
      <meta
        name="description"
        content="Ihr Immobilienmakler in Wermelskirchen ✓ Häuser & Wohnungen kaufen oder mieten ✓ Über 25 Jahre Erfahrung."
      />

      {/* Hero Section - Matches previous files */}
      <motion.div
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
          Immobilien in Wermelskirchen – Wohnen im Bergischen Land
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto"
          variants={textVariants}
        >
          Mit rund 35.000 Einwohnern ist Wermelskirchen eine lebendige Stadt im Bergischen Land. Sie bietet eine ausgezeichnete Infrastruktur und gleichzeitig eine landschaftlich reizvolle Umgebung.
        </motion.p>
      </motion.div>

      {/* Intro & Image Section with Image Slider - Matches previous files */}
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
              Vorteile von Wermelskirchen
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Wermelskirchen ist als familienfreundlicher Ort bekannt und überzeugt durch seine zentrale Lage. Hier verbinden sich die Ruhe der Natur mit der Nähe zu den Metropolen.
            </p>
           <ul className="space-y-4 text-gray-700">
  <li className="flex items-start">
    <FaMapPin size={24} className="mt-1" style={{ color: brandColor }} />
    <span style={{ marginLeft: '1rem' }}>Günstig gelegen zwischen Köln, Düsseldorf und dem Ruhrgebiet.</span>
  </li>
  <li className="flex items-start">
    <FaBriefcase size={24} className="mt-1" style={{ color: brandColor }} />
    <span style={{ marginLeft: '1rem' }}>Ein florierender Mittelstand sorgt für attraktive Arbeitsplätze.</span>
  </li>
  <li className="flex items-start">
    <FaUsers size={24} className="mt-1" style={{ color: brandColor }} />
    <span style={{ marginLeft: '1rem' }}>Zahlreiche Schulen, Sportvereine und Freizeitangebote für alle Altersgruppen.</span>
  </li>
</ul>
          </motion.div>

          <motion.div className="rounded-xl overflow-hidden shadow-xl" variants={imageVariants}>
            <ImageSlider />
          </motion.div>
        </div>
      </motion.section>

      {/* Split Content Section - Matches previous files */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="p-8 bg-gray-50 rounded-lg shadow-sm" variants={textVariants}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: primaryText }}>
            Typische Immobilien in Wermelskirchen
          </h2>
          <p className="text-gray-700">
            Der Immobilienmarkt in Wermelskirchen ist vielfältig und bietet für jeden Anspruch das passende Objekt, von zentralen Wohnungen bis zu Häusern in ländlichen Ortsteilen.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: primaryText }}>
            Unser Angebot umfasst
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li><FaBuilding className="inline-block mr-2" style={{ color: brandColor }} />Eigentumswohnungen im Stadtzentrum</li>
            <li><FaHome className="inline-block mr-2" style={{ color: brandColor }} />Einfamilienhäuser in den Ortsteilen wie Lennep und Dhünn</li>
            <li><FaBuilding className="inline-block mr-2" style={{ color: brandColor }} />Mehrfamilienhäuser für Investoren</li>
            <li><FaHome className="inline-block mr-2" style={{ color: brandColor }} />Mietwohnungen in zentraler Lage</li>
          </ul>
        </motion.div>

        <motion.div className="p-8 bg-gray-50 rounded-lg shadow-sm" variants={textVariants}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: primaryText }}>
            Ihr Immobilienpartner vor Ort
          </h2>
          <p className="text-gray-700 mb-6">
            Mit unserer Expertise auf dem Wermelskirchener Markt stehen wir Ihnen beim Kauf, Verkauf oder der Miete Ihrer Immobilie zur Seite.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><FaHandshake className="inline-block mr-2" style={{ color: brandColor }} />Haus kaufen in Wermelskirchen</li>
            <li><FaHandshake className="inline-block mr-2" style={{ color: brandColor }} />Wohnung mieten in Wermelskirchen</li>
            <li><FaHandshake className="inline-block mr-2" style={{ color: brandColor }} />Wohnung kaufen in Wermelskirchen</li>
            <li><FaHandshake className="inline-block mr-2" style={{ color: brandColor }} />Haus mieten in Wermelskirchen</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* CTA Section - Matches previous files */}
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
          Lassen Sie sich beraten – wir bringen Sie schnell zu Ihrer Traumimmobilie
        </h3>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Starten Sie jetzt mit Kintscher Immobilien und finden Sie Ihr neues Zuhause im Bergischen Land.
        </p>
<motion.button
 className="inline-flex items-center gap-2 bg-[#448243] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors mb-4"
>
  Unsere Region
</motion.button>
 

      </motion.div>
    </div>
  );
};

export default Wermelskirchen;
