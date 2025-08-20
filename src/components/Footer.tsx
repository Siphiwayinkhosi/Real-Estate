import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span className="text-primary-foreground/80">+49 123 456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span className="text-primary-foreground/80">info@kintscher-immobilien.de</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span className="text-primary-foreground/80">Musterstraße 123, 12345 Berlin</span>
              </div>
            </div>
          </div>

          {/* Empty Spacer for Desktop Alignment */}
          <div className="hidden lg:block" />

          {/* Socials */}
          <div className="flex flex-col justify-end lg:items-end">
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-4 lg:justify-end">
                <a
                  href="https://www.facebook.com/kintscherimmobilien"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.twitter.com/kintscherimmo"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://www.instagram.com/kintscherimmobilien"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/kintscherimmobilien"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Kintscher Immobilien GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
