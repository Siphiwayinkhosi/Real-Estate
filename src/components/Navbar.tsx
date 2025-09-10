import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence  } from "framer-motion";
import { Menu, X, Home, Search, Users, Settings, Phone, ClipboardCheck, ChevronDown } from "lucide-react";
import logo from "/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () =>
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Immobilien Finden", path: "/find-real-estate", icon: Search, dropdown: true },
    { name: "Immobilienbewertung", path: "/property-evaluation", icon: ClipboardCheck },
    { name: "Über Uns", path: "/about-us", icon: Users },
    { name: "Unsere Dienstleistungen", path: "/our-services", icon: Settings },
    { name: "Kontakt", path: "/contact", icon: Phone },
  ];

  const cities = [
    { name: "Opladen", path: "/opladen" },
    { name: "Leichlingen", path: "/leichlingen" },
    { name: "Leverkusen", path: "/leverkusen" },
    { name: "Odenthal", path: "/odenthal" },
    { name: "Wermelskirchen", path: "/wermelskirchen" },
    { name: "Burscheid", path: "/burscheid" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "shadow-md py-3" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Kintscher Immobilien"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className={`flex ${isTablet ? "gap-x-4" : "gap-x-6"} flex-wrap justify-center`}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const isDropdownActive = item.dropdown && cities.some(city => location.pathname === city.path);

                if (item.dropdown) {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center gap-1 px-2 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 ${
                          isActive || isDropdownActive
                            ? "text-primary font-semibold"
                            : "text-foreground hover:text-primary"
                        } ${isTablet ? "text-sm" : "text-base"}`}
                      >
                        <span className="relative z-10 whitespace-nowrap flex items-center gap-1">
                          {item.name}
                          <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </span>
                        {(isActive || isDropdownActive) && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-primary/10 rounded-lg"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </Link>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 overflow-hidden"
                          >
                            {cities.map((city) => (
                              <Link
                                key={city.name}
                                to={city.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                                onClick={() => setDropdownOpen(false)}
                              >
                                {city.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-2 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary"
                    } ${isTablet ? "text-sm" : "text-base"}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary/10 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 whitespace-nowrap">
                      {isTablet ? item.name.split(" ")[0] : item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              if (item.dropdown) {
                return (
                  <div key={item.name} className="px-4">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center justify-between w-full py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary"
                    >
                      <span className="flex items-center space-x-3">
                        <Icon size={20} />
                        <span>{item.name}</span>
                      </span>
                      <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="mt-2 space-y-1">
                        {cities.map((city) => (
                          <Link
                            key={city.name}
                            to={city.path}
                            className="block px-6 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md"
                            onClick={() => {
                              setDropdownOpen(false);
                              setIsOpen(false);
                            }}
                          >
                            {city.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};