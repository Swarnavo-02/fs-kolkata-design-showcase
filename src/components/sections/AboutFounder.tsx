import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutFounder = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our Founder
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founder Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="w-full h-[600px] bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold">FA</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Er. Farez Ahmed Gazi</h3>
                  <p className="text-gold">Founder & Principal Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Founder & Principal Designer
              </h3>
              <h4 className="text-xl text-primary font-semibold mb-6">
                Er. Farez Ahmed Gazi
              </h4>
              <div className="text-muted-foreground space-y-2 mb-6">
                <p>(M.Bdes, B.Tech, Dip)</p>
                <p>[Civil Engineer, Chartered Engineer, Architect, Interior Designer]</p>
                <p className="font-medium">AM3158902 - Member of IE(INDIA)</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                F.S.Infrastructure – India's Most Trusted & Esteemed Engineering, Interior-Architectural design firm located in Kolkata, West Bengal.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by Farez Ahmed Gazi, with over 8 years of experience, the firm specializes in innovative Residential and Commercial Projects.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Clients are drawn to F.S.Infrastructure for its meticulous attention to detail and personalized service that seamlessly blends aesthetics with functionality. Committed to sustainability and high-quality design & craftsmanship, F.S.Infrastructure has become a trusted name in the design industry since its establishment.
              </p>
            </div>

            {/* Appreciation */}
            <Card className="p-6 bg-gradient-to-r from-gold/10 to-gold-light/10 border-gold/20">
              <div className="flex items-start space-x-4">
                <Award className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-semibold text-foreground mb-2">
                    Appreciation Letter From INDIAN ARMY
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    For Designing Army Public School, Panagarh
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-muted-foreground">Connect:</span>
              <a 
                href="https://www.facebook.com/farezahmedgazi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.instagram.com/farez_ahmed_gazi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.linkedin.com/in/farezahmedgazi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link to="/about">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-gold to-gold-light hover:shadow-premium-gold text-white"
                >
                  How it Works?
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;