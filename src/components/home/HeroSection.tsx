import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";
import heroBackground from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with slow zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
        animate={{ scale: [1, 1.1] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left - Text + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Find Your Perfect{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
              Dream Home
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0"
          >
            Discover exclusive properties across Germany’s most prestigious
            locations. Luxury living starts with the right choice.
          </motion.p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/find-real-estate">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                Explore Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowVideo(true)}
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-xl bg-white/10 backdrop-blur-sm transition-all hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>
        </motion.div>

         {/* Right - Founder Highlight */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative flex flex-col items-center lg:items-end"
        >
           {/* Floating Founder Card */}
           <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-80 h-96 md:w-96 md:h-[28rem] rounded-lg overflow-hidden shadow-2xl flex items-center justify-center group"
          >
            <motion.img
              src="/founder.png"
              alt="Founder"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Name and Title */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Jane Müller
              </h3>
              <p className="text-white/70 text-sm md:text-base">
                Founder & CEO
              </p>
            </div>
            {/* Hover Quote */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 text-white/80 italic text-sm md:text-base text-center max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              “Every home tells a story, let’s write yours together.”
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative bg-black rounded-2xl overflow-hidden max-w-4xl w-full aspect-video shadow-2xl border border-white/20"
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition"
            >
              ×
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Promo Video"
              allow="autoplay; fullscreen"
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
