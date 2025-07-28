import React from 'react';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, Star, ArrowRight, CheckCircle } from 'lucide-react';
import villaImage from '@/assets/villa-project.jpg';
import interiorImage from '@/assets/interior-design.jpg';
import salonImage from '@/assets/salon-project.jpg';

const Home = () => {
  const stats = [
    { icon: Award, number: '500+', label: 'Projects Completed', color: 'text-gold' },
    { icon: Users, number: '300+', label: 'Happy Clients', color: 'text-navy' },
    { icon: Clock, number: '15+', label: 'Years Experience', color: 'text-gold' },
    { icon: Star, number: '4.9', label: 'Client Rating', color: 'text-navy' }
  ];

  const featuredProjects = [
    {
      title: 'Luxury Villa - Ballygunge',
      location: 'Kolkata, West Bengal',
      category: 'Residential',
      image: villaImage,
      description: 'Modern architectural marvel with contemporary interiors'
    },
    {
      title: 'Premium Salon Design',
      location: 'Park Street, Kolkata',
      category: 'Commercial',
      image: salonImage,
      description: 'Elegant salon interior with luxury finishes'
    },
    {
      title: 'Executive Apartment',
      location: 'Salt Lake, Kolkata',
      category: 'Interior Design',
      image: interiorImage,
      description: 'Sophisticated interior design for modern living'
    }
  ];

  const whyChooseUs = [
    'Award-winning design team',
    'End-to-end project management',
    'Transparent pricing',
    'On-time delivery guarantee',
    'Post-completion support',
    '3D visualization included'
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      
      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Choose F.S. Infrastructure?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                With over 15 years of experience in architectural and interior design, 
                we've established ourselves as Kolkata's premier design firm, delivering 
                exceptional results that exceed expectations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {whyChooseUs.map((point) => (
                  <div key={point} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-gradient-to-r from-gold to-gold-light hover:shadow-premium-gold">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="animate-slide-up">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <Card key={stat.label} className="text-center shadow-premium hover-lift transition-premium">
                    <CardContent className="p-6">
                      <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                      <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our latest architectural and interior design projects that showcase 
              our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="overflow-hidden hover-lift transition-premium shadow-premium animate-slide-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-premium"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-gold transition-premium">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.location}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-gold group-hover:text-white transition-premium">
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-white"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="py-20 bg-gradient-to-r from-navy to-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Refer & Earn Up to ₹10,000
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Know someone who needs our design services? Refer them and earn attractive rewards 
              when they complete their project with us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Refer a Friend</h3>
                <p className="opacity-80">Share our services with friends & family</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">They Book Project</h3>
                <p className="opacity-80">Your referral signs up for our services</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Earn Rewards</h3>
                <p className="opacity-80">Get paid when project is completed</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-light text-charcoal font-semibold"
            >
              Start Referring Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;