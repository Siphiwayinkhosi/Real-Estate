import { motion } from "framer-motion";
import { Home, Building2, KeyRound, Phone } from "lucide-react"; // icons
import partnerImg from "@/assets/founder.png";

const Partner = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left - Image */}
          <motion.div
            className="relative w-full lg:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative h-[36rem] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={partnerImg}
                alt="Führung im Immobilienbereich"
                className="w-full h-full object-cover"
                style={{ objectPosition: "top center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Decorative green dots - bottom right */}
            <span className="absolute -bottom-8 -right-8">
              <svg
                width="93"
                height="93"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {Array.from({ length: 5 }).map((_, row) =>
                  Array.from({ length: 5 }).map((_, col) => (
                    <circle
                      key={`${row}-${col}`}
                      cx={2.5 + col * 22}
                      cy={2.5 + row * 22}
                      r="2.5"
                      fill="#16A34A"
                    />
                  ))
                )}
              </svg>
            </span>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Persönlich für Sie da:{" "}
             <span className="bg-gradient-to-r from-[#448243] to-[#448243] bg-clip-text text-transparent">

                Melanie Wollthan
              </span> Immobilienmaklerin
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-2">
              Wir nehmen uns Zeit für Ihre Fragen und beraten Sie individuell — 
              transparent, ehrlich und verlässlich. Vereinbaren Sie noch heute ein Gespräch.
            </p>

  <a
  href="tel:+492174785796"
  className="inline-flex items-center gap-2 bg-[#448243] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors"
>
  <Phone className="h-5 w-5" />
  Jetzt Beratung anfragen
</a>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
  <motion.div 
    whileHover={{ scale: 1.05 }} 
    className="flex flex-col items-start text-left p-4"
  >
    <Home className="h-10 w-10 text-[#448243] mb-3" />
    <p className="text-gray-800 font-semibold">Haus kaufen</p>
    <span className="text-sm text-gray-600 leading-relaxed">
      Ihr neues Zuhause mit Kintscher Immobilien. <br />
      
    </span>
  </motion.div>

  <motion.div 
    whileHover={{ scale: 1.05 }} 
    className="flex flex-col items-start text-left p-4"
  >
    <Building2 className="h-10 w-10 text-[#448243] mb-3" />
    <p className="text-gray-800 font-semibold">Städtisches Wohnen</p>
    <span className="text-sm text-gray-600 leading-relaxed">
       
      Sie möchten eine Wohnung finden? Wir unterstützen Sie dabei.
    </span>
  </motion.div>

<motion.div 
  whileHover={{ scale: 1.05 }} 
  className="inline-block align-top flex flex-col items-start text-left p-4"
>
  <KeyRound className="h-10 w-10 text-[#448243] mb-3" />
  <p className="text-gray-800 font-semibold whitespace-nowrap">Smarte Investitionen</p>
  <span className="text-sm text-gray-600 leading-relaxed">
    Absicherung von Immobilien mit langfristigem Wert.
  </span>
</motion.div>

</div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partner;


