import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";


export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/kintscherimmobilien" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://www.twitter.com/kintscherimmo" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/kintscherimmobilien" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/kintscherimmobilien" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Kintscher Immobilien GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};