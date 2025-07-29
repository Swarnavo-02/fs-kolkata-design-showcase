import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Building, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import interiorImage from '@/assets/interior-design.jpg';
import villasImage from '@/assets/villa-project.jpg';
import commercialImage from '@/assets/commercial-project.jpg';

const ServiceHighlights = () => {
  const highlights = [
    {
      title: "A Modern Approach to Interior Designing",
      description: "We are committed to incorporating sustainable design strategies into all of our projects. It is woven into our design practices.",
      image: interiorImage,
      link: "/projects",
      buttonText: "PROJECTS"
    },
    {
      title: "Designing Experiences, Not Just Spaces",
      description: "We have a multi-disciplined approach. Our clients enjoy an added value through the planning, architecture, landscape architecture, and interior design.",
      image: villasImage,
      link: "/services",
      buttonText: "SERVICES"
    },
    {
      title: "We're All Set to Design Your Dream Projects",
      description: "Get in touch with us to upgrade your dream project to whole new design.",
      image: commercialImage,
      link: "/contact",
      buttonText: "CONTACT"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  {highlight.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
                <Link to={highlight.link}>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-gold to-gold-light hover:shadow-premium-gold text-white"
                  >
                    {highlight.buttonText}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;