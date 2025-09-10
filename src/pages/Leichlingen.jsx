import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Train, Users, Handshake, Building, Home, Flower, MapPin } from 'lucide-react';

// Brand colors and typography
const brandColor = '#448243';
const primaryText = '#1a1a1a';
const secondaryText = '#666666';

// Framer Motion variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const Leichlingen = () => {
  const images = {
   
   
    halftimbered: '/leichileng.JPG', modern: '/leichileng1.JPG',
    
  };

  return (
    <div className="bg-white text-gray-800 font-sans leading-relaxed">

      {/* SEO & Meta */}
      <title>Kaufen & Mieten von Immobilien in Leichlingen | Kintscher Immobilien</title>
      <meta
        name="description"
        content="Häuser & Wohnungen in Leichlingen ✓ Nah an der Natur mit hervorragender Anbindung an Köln und Düsseldorf."
      />

      {/* Spacer for sticky navbar */}
      <div className="h-24 md:h-28"></div>

      {/* H1 Section */}
      <section className="container mx-auto px-4 md:px-8 mb-12 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: primaryText }}>
          Immobilien in Leichlingen – die Blumenstadt an der Wupper
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Leichlingen heißt nicht umsonst "Blumenstadt": Grüne Landschaften, Obstgärten und die Wupper machen den Ort besonders lebenswert.
        </p>
      </section>

      
      {/* Section 1: Text + Image */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div className="flex flex-col justify-center order-2 md:order-1" variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6" style={{ color: primaryText }}>
              Leben in Leichlingen
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Leichlingen bietet eine Mischung aus modernen Neubauten und bergischer Tradition. Idylische Fachwerkhäuser finden Sie entlang der Wupper, während neue Wohnkomplexe mit Balkonen und Dachterrassen im Stadtzentrum liegen.
            </p>
            <p className="text-lg text-gray-700">
              Die Natur prägt den Alltag: Spaziergänge entlang der Wupper, Radwege durch Felder und kleine Cafés am Flussufer. Gleichzeitig sind Köln, Leverkusen und Düsseldorf schnell erreichbar.
            </p>
          </motion.div>
          <motion.div className="order-1 md:order-2" variants={imageVariants}>
            <img src={images.halftimbered} alt="Idyllisches Fachwerkhaus in Leichlingen" className="w-full h-full object-cover rounded-lg shadow-xl" />
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2: Additional Image + Text */}
      <motion.section
        className="container mx-auto px-4 md:px-8 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <motion.div className="md:order-2 order-2 flex flex-col justify-center" variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6" style={{ color: primaryText }}>
              Modernes Wohnen in Leichlingen
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Moderne Apartments und Neubauprojekte bieten komfortable Wohnungen mit Terrasse oder Balkon. Perfekt für alle, die Natur und urbanes Leben verbinden möchten.
            </p>
            <p className="text-lg text-gray-700">
              Große Fenster und offene Grundrisse schaffen helle, freundliche Wohnräume, die sich ideal für Familien und Paare eignen.
            </p>
          </motion.div>
          <motion.div className="md:order-1 order-1 items-center" variants={imageVariants}>
  <img
    src={images.modern}
    alt="Modernes Wohnhaus in Leichlingen"
    className="w-full h-full object-cover rounded-lg shadow-xl"
  />
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
          Typische Immobilien in Leichlingen
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Home, title: 'Reihenhäuser', desc: 'Familienfreundliche Häuser in ruhigen Neubaugebieten.' },
            { icon: Building, title: 'Wohnungen', desc: 'Mit Terrasse oder Balkon für Naturverbundene.' },
            { icon: Home, title: 'Einfamilienhäuser', desc: 'Großzügige Immobilien in ruhigen Lagen.' },
            { icon: MapPin, title: 'Bestandsimmobilien', desc: 'Charmante Häuser entlang der Wupper.' },
          ].map((item, idx) => (
            <motion.div key={idx} className="p-6 rounded-lg shadow-md flex flex-col items-center text-center" style={{ backgroundColor: '#f0f4f0' }} variants={itemVariants}>
              <item.icon size={40} className="mb-4" style={{ color: brandColor }} />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SEO & CTA Section */}
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
            Ihr Immobilienpartner in Leichlingen
          </motion.h2>
          <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10" variants={sectionVariants}>
            {['Haus kaufen', 'Wohnung kaufen', 'Grundstück kaufen', 'Immobilie verkaufen', 'Wohnung mieten', 'Haus mieten', 'Immobilie mieten'].map((text, idx) => (
              <motion.li key={idx} className="text-left font-semibold flex items-center p-3 rounded-md transition-colors" style={{ color: primaryText, backgroundColor: 'white' }} variants={itemVariants}>
                <Handshake size={24} className="mr-3 flex-shrink-0" style={{ color: brandColor }} /> {text} in Leichlingen
              </motion.li>
            ))}
          </motion.ul>
          <motion.button
            className="bg-white text-lg font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform mt-8"
            style={{ color: brandColor, borderColor: brandColor, borderWidth: '2px' }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(68, 130, 67, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Finden Sie Ihre Traumimmobilie in Leichlingen mit Kintscher Immobilien – starten Sie jetzt!
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Leichlingen;
