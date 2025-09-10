import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/PropertyCard";
import { ArrowRight } from "lucide-react";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";

export const FeaturedProperties = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Luxuriöse moderne Villa",
      price: "€350,000",
      location: "Leverkusen",
      image: property1,
      bedrooms: 5,
      bathrooms: 3,
      area: "350 m²",
      type: "sale" as const
    },
    {
      id: 2,
      title: "Zeitgemäßes Familienhaus",
      price: "€490,000",
      location: "Opladen",
      image: property2,
      bedrooms: 4,
      bathrooms: 2,
      area: "280 m²",
      type: "sale" as const
    },
    {
      id: 3,
      title: "Premium Penthouse",
      price: "€500,000",
      location: "Burscheid",
      image: property3,
      bedrooms: 3,
      bathrooms: 2,
      area: "220 m²",
      type: "sale" as const
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send the data to a server
    console.log(formData);
    alert('Suchanfrage gesendet! Wir werden uns in Kürze bei Ihnen melden.');
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ausgewählte <span className="text-primary">Immobilien</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unsere handverlesene Auswahl an Premium-Immobilien,
            sorgfältig ausgewählt wegen ihrer außergewöhnlichen Qualität und Investitionsmöglichkeiten.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/find-real-estate">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105"
            >
              Mehr Immobilien ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>

        {/* Simplified and wider Real Estate Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20 p-8 bg-gray-50 rounded-xl shadow-lg"
        >
          <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Suche nach einer bestimmten Immobilie
          </h3>
          <p className="text-center text-gray-600 mb-8">
            Haben Sie Ihre Traumimmobilie nicht gefunden? Teilen Sie uns Ihre Wünsche mit, und wir helfen Ihnen bei der Suche.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Ihre Suchkriterien und Wünsche</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="z.B. Art der Immobilie, bevorzugte Lage, Preisvorstellung, Zimmeranzahl, Mindestfläche usw."
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              ></textarea>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light transition-all duration-200"
              >
              Suchanfrage für eine Immobilie
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};