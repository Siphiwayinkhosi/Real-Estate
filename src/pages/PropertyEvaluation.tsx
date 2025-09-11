import { motion } from "framer-motion";
import { Building2, Home, Key, CheckCircle, Clipboard } from "lucide-react";

export const PropertyEvaluation = () => {
  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            Ihr qualifizierter{" "}
            <span className="text-black">Immobilienmakler</span> vor Ort
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Sie möchten Ihre Immobilie verkaufen? Kintscher Immobilien ist Ihr
            verlässlicher Partner in Burscheid und im gesamten Rheinisch-Bergischen Kreis.
          </p>
        </motion.div>

        {/* Evaluation Steps / Info Boxes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#f2f7f3] border-l-4 border-[#448243] p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <Building2 size={40} className="text-[#448243] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Immobilienbewertung</h3>
            <p className="text-gray-700">
              Nehmen Sie direkt online Kontakt auf oder übermitteln Sie uns die Eckdaten Ihrer Immobilie.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#f2f7f3] border-l-4 border-[#448243] p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <Clipboard size={40} className="text-[#448243] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Erfahrung & Know-how</h3>
            <p className="text-gray-700">
              Profitieren Sie dabei von über 30+ Jahren Erfahrung im regionalen Immobilienmarkt und unserem umfassenden Know-how im Immobilienhandel.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#f2f7f3] border-l-4 border-[#448243] p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <CheckCircle size={40} className="text-[#448243] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professionelle Betreuung</h3>
            <p className="text-gray-700">
              Unser Team sorgt für eine professionelle Immobilienbewertung und unterstützt Sie bei allen Schritten des Verkaufsprozesses.
            </p>
          </motion.div>
        </motion.div>

        {/* Highlight / Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#448243] text-white rounded-2xl p-10 text-center shadow-lg"
        >
          <Home size={50} className="mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-bold mb-2">
            Jetzt Immobilienbewertung starten
          </h3>
          <p className="text-lg sm:text-xl">
            Übermitteln Sie uns die Eckdaten Ihrer Immobilie und erhalten Sie
            eine professionelle, verlässliche Bewertung.
          </p>
        </motion.div>
      </div>
    </section>
  );
};


