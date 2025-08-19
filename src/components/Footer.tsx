import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="Kintscher Immobilien" className="h-12 w-auto filter brightness-0 invert" />
            <p className="text-primary-foreground/80">
              Your trusted partner in finding the perfect property. With years of experience in the real estate market, we help you make the right investment decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/find-real-estate" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Find Real Estate
                </Link>
              </li>
              <li>
                <Link to="/rental-properties" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Rental Properties
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/our-services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Property Sales
                </Link>
              </li>
              <li>
                <Link to="/our-services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Property Rentals
                </Link>
              </li>
              <li>
                <Link to="/our-services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link to="/our-services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Investment Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <span className="text-primary-foreground/80">+49 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <span className="text-primary-foreground/80">info@kintscher-immobilien.de</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} />
                <span className="text-primary-foreground/80">Musterstraße 123, 12345 Berlin</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Kintscher Immobilien GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};