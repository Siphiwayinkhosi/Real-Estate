import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaHome, FaPalette, FaUsers, FaMapMarkedAlt, FaKey, FaHandshake } from 'react-icons/fa';

// Brand colors
const brandColor = '#448243';
const primaryText = '#2c2c2c';
const lightBg = '#f9f9f9';

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Opladen = () => {
  const images = [
    { src: '/opladen.JPG', alt: 'Urban train tracks and modern architecture in Opladen' },
    { src: '/opladen.JPG', alt: 'Art Nouveau style building with large windows' },
    { src: '/opladen1.JPG', alt: 'Modern residential complex with terraces' },
  ];

  const typicalRealEstateList = [
    { icon: <FaHome size={24} className="mr-4" style={{ color: brandColor }} />, text: 'Wohnungen in Altbauten' },
    { icon: <FaBuilding size={24} className="mr-4" style={{ color: brandColor }} />, text: 'Neubauprojekte im Zentrum' },
    { icon: <FaPalette size={24} className="mr-4" style={{ color: brandColor }} />, text: 'Einfamilienhäuser am Stadtrand' },
    { icon: <FaKey size={24} className="mr-4" style={{ color: brandColor }} />, text: 'Mietwohnungen für Singles und Familien' },
  ];

  const seoList = [
    { icon: <FaHandshake size={24} className="mr-4" style={{ color: brandColor }} />, text: 'Wohnung mieten in Opladen' },
    { icon: <FaHandshake size={24} className="mr-4" style={{ color: brandColor }} />, text: 'Haus kaufen in Opladen' },
    { icon: <FaHandshake size={24} className="mr-4" style={{ color: brandColor }} />, text: 'Wohnung kaufen in Opladen' },
    { icon: <FaHandshake size={24} className="mr-4" style={{ color: brandColor }} />, text: 'Immobilie verkaufen in Opladen' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans leading-relaxed pt-28">
      {/* SEO Tags */}
      <title>Immobilien in Opladen: Kaufen & Mieten | Kintscher Immobilien</title>
      <meta
        name="description"
        content="Kaufen oder mieten Sie Wohnungen & Häuser in Opladen ✓ Ihr Partner für Immobilien in Leverkusen und Umgebung."
      />

      {/* H1 Section for SEO */}
      <section className="container mx-auto px-4 md:px-8 mb-12 pt-24 ">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: primaryText }}>
          Immobilien in Opladen – urban und charmant
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Opladen ist ein beliebter Stadtteil von Leverkusen. Historische Gebäude, neue Wohnkomplexe und ausgezeichnete Verkehrsanbindungen machen Opladen attraktiv für Familien und Pendler.
        </p>
      </section>

      {/* Intro & Image Section */}
      <motion.div
        className="container mx-auto px-4 md:px-8 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div className="lg:order-1 order-2" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: primaryText }}>
              Opladen – Zwischen Industriegeschichte und urbanem Aufbruch
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Opladen, ein traditionsreicher Stadtteil von Leverkusen, ist derzeit eines der spannendsten Entwicklungsgebiete der Region. Das Projekt <strong>"Neue Bahnstadt Opladen"</strong> verwandelt ein ganzes Quartier. Alte Industriehallen werden zu Kultur-, Wohn- und Arbeitszwecken umgenutzt und schaffen so ein lebendiges, modernes Zentrum.
            </p>
            <ul className="space-y-4 text-gray-600 font-light">
              <li className="flex items-start">
                <FaMapMarkedAlt size={24} className="mr-4 mt-1" style={{ color: brandColor }} />
                <span>Moderne Fuß- und Radwegbrücken verbinden die Stadtteile, und alte Bahngleise werden in öffentliche Plätze umgewandelt.</span>
              </li>
              <li className="flex items-start">
                <FaUsers size={24} className="mr-4 mt-1" style={{ color: brandColor }} />
                <span>Opladen ist kulturell lebendig: Stadtfeste, Konzerte und Märkte beleben das Zentrum.</span>
              </li>
            </ul>
          </motion.div>
          <motion.div className="lg:order-2 order-1" variants={itemVariants}>
            <img src={images[1].src} alt={images[1].alt} className="w-full h-auto object-cover rounded-lg shadow-2xl" />
          </motion.div>
        </div>
      </motion.div>

      {/* Architectural Diversity Section */}
      <motion.div
        className="container mx-auto px-4 md:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <img src={images[2].src} alt={images[2].alt} className="w-full h-auto object-cover rounded-lg shadow-2xl" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: primaryText }}>
              Architektonische Vielfalt
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Die Architektur von Opladen ist eine Mischung aus Jugendstilhäusern, wilhelminischen Fassaden und modernen Wohnkomplexen. Diese Stilvielfalt bietet einzigartige Wohnmöglichkeiten.
            </p>
            <ul className="space-y-4 text-gray-600 font-light">
              <li className="flex items-start">
                <FaHome size={24} className="mr-4 mt-1" style={{ color: brandColor }} />
                <span>Viele Straßen haben ihren alten Charme mit hohen Decken, Stuckverzierungen und großen Fenstern bewahrt.</span>
              </li>
              <li className="flex items-start">
                <FaBuilding size={24} className="mr-4 mt-1" style={{ color: brandColor }} />
                <span>Moderne Eigentumswohnungen und Reihenhäuser für junge Familien entstehen gleichzeitig.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Typical Real Estate Section */}
      <motion.div
        className="bg-gray-100 py-16"
        style={{ backgroundColor: lightBg }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-3xl font-bold mb-6 text-center" style={{ color: primaryText }}>
            Typisches Immobilienangebot in Opladen
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {typicalRealEstateList.map((item, index) => (
              <motion.div key={index} className="p-6 rounded-lg text-center" variants={itemVariants}>
                <div className="flex justify-center items-center mb-4">{item.icon}</div>
                <p className="text-lg text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* SEO List & CTA */}
      <motion.div
        className="py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* SEO List */}
          <motion.div className="p-8 rounded-lg" variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-6" style={{ color: primaryText }}>
              Unser Immobilienangebot
            </h3>
            <ul className="list-none space-y-4 text-gray-700">
              {seoList.map((item, index) => (
                <li key={index} className="flex items-center">
                  {item.icon}
                  <span className="font-semibold">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Box */}
          <motion.div className="p-8 text-center rounded-lg shadow-lg" variants={itemVariants} style={{ backgroundColor: brandColor }}>
            <h3 className="text-3xl font-bold mb-4 text-white">Finden Sie Ihre perfekte Immobilie</h3>
            <p className="text-lg text-white mb-6">Kontaktieren Sie uns jetzt unverbindlich, um Ihre Suche zu beginnen.</p>
            <motion.button
              className="bg-white text-lg font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform"
              style={{ color: brandColor }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0,0,0,0.15)' }}
              whileTap={{ scale: 0.95 }}
            >
              Kintscher Immobilien kontaktieren
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Opladen;

