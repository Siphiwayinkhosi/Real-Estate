import { motion } from "framer-motion";

export const TimelineSection = () => {
  const timelineData = [
    { year: "2008", title: "Gründung des Unternehmens", description: "Begann als kleines Familienunternehmen" },
    { year: "2012", title: "Erste größere Expansion", description: "Eröffnung von Büros in München und Hamburg" },
    { year: "2016", title: "Digitale Transformation", description: "Einführung einer Online-Plattform und virtueller Rundgänge" },
    { year: "2020", title: "Marktführerschaft", description: "Wurde zu einer der führenden Immobilienagenturen Deutschlands" },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Unsere Reise</h2>
      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-8"
          >
            <div className="bg-primary text-primary-foreground rounded-full px-4 py-2 font-bold min-w-fit">
              {item.year}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
