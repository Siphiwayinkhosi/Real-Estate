import { motion } from "framer-motion";
import { Home, Key, TrendingUp, Settings, Users, Shield, Camera } from "lucide-react";

export const ServicesGrid = () => {
  const services = [
    {
      icon: Home,
      title: "Verkauf von Immobilien",
      description:
        "Wenn Sie Ihre Immobilie verkaufen möchten, bieten wir einen umfassenden Service vom ersten Wertgutachten über Marktanalysen bis zu Verhandlungen mit Interessenten. Wir fokussieren uns auf zielgerichtetes Marketing, um den besten Preis zu erzielen und garantieren eine schnelle, reibungslose Abwicklung."
    },
    {
      icon: Key,
      title: "Vermietung von Immobilien",
      description:
        "Sie möchten Ihre Immobilie vermieten? Wir bieten professionelles Management und helfen, den idealen Mieter zu finden. Durch detaillierte Inspektionen und gezieltes Marketing wird Ihre Immobilie zuverlässig und rentabel vermietet."
    },
    {
      icon: TrendingUp,
      title: "Immobilienbewertung",
      description:
        "Wir ermitteln den fairen Marktwert Ihrer Immobilie basierend auf aktuellen Daten und individuellen Faktoren."
    },
    {
      icon: Shield,
      title: "Rechtliche Beratung",
      description:
        "Wir unterstützen Sie bei Verträgen, rechtlichen Fragen und sorgen für eine sichere Abwicklung."
    },
    {
      icon: Settings,
      title: "Immobilienverwaltung",
      description:
        "Von Mietabrechnung bis Wartung – wir kümmern uns um alles, damit Sie sich auf Ihre Immobilie konzentrieren können. Profitieren Sie von unserem Rundum-Service."
    },
    {
      icon: Camera,
      title: "Professionelle Immobilienfotografie",
      description:
        "Hochwertige Bilder sorgen für einen besten ersten Eindruck und steigern die Nachfrage nach Ihrer Immobilie."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Unsere Dienstleistungen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="bg-green-100 rounded-full p-4 w-fit mb-5 group-hover:bg-green-600 transition-colors">
                  <Icon className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

