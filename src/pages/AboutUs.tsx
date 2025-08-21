import { motion } from "framer-motion";
import { TeamSection } from "@/components/about/TeamSection";
import { TimelineSection } from "@/components/about/TimelineSection";
import { MissionSection } from "@/components/about/MissionSection";
import { AchievementsSection } from "@/components/about/AchievementsSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Über <span className="text-primary">Kintscher Immobilien</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mit über zwei Jahrzehnten Erfahrung auf dem deutschen Immobilienmarkt
            sind wir Ihr vertrauenswürdiger Partner für außergewöhnliche
            Immobilienlösungen.
          </p>
        </motion.div>

        {/* Sections */}
        <MissionSection />
        <AchievementsSection />
        <TimelineSection />
        <TeamSection />
      </div>
    </div>
  );
};

export default AboutUs;
