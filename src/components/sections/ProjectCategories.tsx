import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Building, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import interiorImage from '@/assets/interior-design.jpg';
import commercialImage from '@/assets/commercial-project.jpg';
import landscapeImage from '@/assets/landscape-project.jpg';

const ProjectCategories = () => {
  const categories = [
    {
      title: "Interior Design",
      subtitle: "Residential & Commercial",
      icon: Home,
      image: interiorImage,
      link: "/projects"
    },
    {
      title: "Architectural Design", 
      subtitle: "Residential & Commercial",
      icon: Building,
      image: commercialImage,
      link: "/projects"
    },
    {
      title: "Plan & Layout",
      subtitle: "Residential & Commercial", 
      icon: PenTool,
      image: landscapeImage,
      link: "/projects"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Project Categories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of design services tailored to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="relative h-80">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-1 w-fit mb-4">
                      <IconComponent className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-200 mb-4">{category.subtitle}</p>
                    <Link to={category.link}>
                      <Button 
                        variant="ghost" 
                        className="text-white hover:bg-white/20 p-0 h-auto font-medium group-hover:text-gold transition-colors"
                      >
                        View Projects
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Services We Provide Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Services We Provide
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {categories.map((service, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-semibold text-primary mb-2">{service.title}</h4>
                <p className="text-muted-foreground">{service.subtitle}</p>
              </div>
            ))}
          </div>
          
          <Link to="/services">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-gold to-gold-light hover:shadow-premium-gold text-white"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectCategories;