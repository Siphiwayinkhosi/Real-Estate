import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Home, Key, Building2, DoorOpen } from "lucide-react";
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
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

        {/* Right - Big Icon with Floating Icons */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          {/* Central big house icon */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-green-400/90"
          >
            <Home className="w-40 h-40 md:w-56 md:h-56" />
          </motion.div>

          {/* Floating smaller icons */}
          <motion.div
            className="absolute -top-10 left-10 text-white/80"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Key className="w-10 h-10" />
          </motion.div>

          <motion.div
            className="absolute bottom-6 left-20 text-green-300/80"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Building2 className="w-12 h-12" />
          </motion.div>

          <motion.div
            className="absolute top-16 right-12 text-white/70"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <DoorOpen className="w-11 h-11" />
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
              src="/real.mp4"
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
