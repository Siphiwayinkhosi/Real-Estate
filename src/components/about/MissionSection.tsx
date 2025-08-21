import { motion } from "framer-motion";
import { CheckCircle, Heart, Users, Shield, Star } from "lucide-react";
import missionImage from "@/assets/4.png"; // Replace with a relevant image

export const MissionSection = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Ehrlichkeit",
      description:
        "Offene und transparente Kommunikation bildet die Grundlage unserer Zusammenarbeit.",
    },
    {
      icon: Heart,
      title: "Wertschätzung",
      description:
        "Jede Interaktion ist von Wertschätzung und Respekt geprägt – gegenüber Kunden, Partnern und der Gemeinschaft.",
    },
    {
      icon: Shield,
      title: "Verantwortung",
      description:
        "Wir übernehmen Verantwortung für die Qualität unserer Arbeit und die Bedürfnisse unserer Kunden.",
    },
    {
      icon: Star,
      title: "Professionalität",
      description:
        "Professionalität steht für unser Engagement, Ihnen stets den besten Service zu bieten.",
    },
    {
      icon: Users,
      title: "Gesellschaftliches Engagement",
      description:
        "Wir unterstützen aktiv unsere Region und die Menschen, die hier leben.",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Image */}
        <motion.div
          className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={missionImage}
            alt="Mission"
            className="w-full h-[36rem] object-cover rounded-3xl"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-8"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Our Values */}
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Unsere Werte
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ehrlichkeit, Wertschätzung, Verantwortung, Professionalität und
            gesellschaftliches Engagement bilden die Grundlage unserer täglichen
            Arbeit bei Kintscher Immobilien. Diese Werte begleiten uns in jedem
            Schritt unserer Zusammenarbeit mit Kunden.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-orange-100 text-orange-600 p-3 rounded-full w-fit">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Our Approach */}
          <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-4">
            Unser Ansatz
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <p className="text-gray-700 leading-relaxed">
              Bei Kintscher Immobilien stehen Sie im Mittelpunkt. Unser Ansatz
              basiert auf ganzheitlicher und individueller Betreuung, die Ihre
              persönlichen Bedürfnisse und Wünsche berücksichtigt. Wir nehmen
              uns Zeit, Ihre Anforderungen vollständig zu verstehen und
              begleiten Sie von der Erstberatung bis zum erfolgreichen Abschluss
              – und darüber hinaus.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Unser Ziel ist es, den Kauf oder Verkauf von Immobilien so
              stressfrei wie möglich zu gestalten, indem wir Sie mit unserer
              langjährigen Erfahrung, lokalen Expertise und einem engagierten
              Team unterstützen. Wir setzen auf Transparenz, Vertrauen und offene
              Kommunikation, um das bestmögliche Ergebnis für Sie zu erzielen.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
