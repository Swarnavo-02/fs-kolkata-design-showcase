import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mr. Sujit Saha",
      designation: "MD of Saha Textile",
      title: "Simply The Best",
      content: "The best thing is - This guy's Behavior, Work, Dedication, Design, Patience and Hard Working make everyone fall for him and his Design. He knows what a client wants, he understands the taste of what client needs! I really appreciate And thank you",
      date: "09-03-2022",
      rating: 5
    },
    {
      name: "Pulak Halder", 
      designation: "Doctor",
      title: "Satisfied",
      content: "Our kitchen is designed by F.S. Infrastructure. I would like to specially mention Mr. Farez who was extremely cooperative and professional in the way he designed & handled our project from start to end. Also I should say thanks to Mr. Farez he design and have given his finishing touch to create our dream kitchen. Thank you F.S.Infrastructure!",
      date: "6 Month Ago",
      rating: 5
    },
    {
      name: "Deepshikha Barbhuiya",
      designation: "Army Officer", 
      title: "Perfection",
      content: "This team led by Mr Farez is aware what perfection means. They understand what commitment to work, time limit and the client means. Worked on a 3d visualization of a project on Children School with this firm. Extremely satisfied with the delivery of product in such a short time. Kudos Team Farez. Keep it up and All the best!",
      date: "07-08-2023",
      rating: 5
    },
    {
      name: "Mr. Samaresh Ghosh",
      designation: "CEO of S S Engineering Services",
      title: "Creative", 
      content: "Seriously I'm spellbound about this guy and his Designing accuracy. He designed my flat and Recently Designed my Company Office (S S Engineering Services Pvt. Ltd.) In a very high end concept with full space utilization. He's doing a great job with his knowledge and perfection.",
      date: "10.04.2020",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Clients Say About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6"></div>
          
          {/* Google Rating */}
          <div className="inline-flex items-center space-x-3 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">5/5</span>
            <span className="text-muted-foreground">100+ Ratings on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 relative hover:shadow-2xl transition-all duration-500 bg-white/50 backdrop-blur-sm">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/30" />
              
              <div className="space-y-6">
                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                    <p className="text-muted-foreground">{testimonial.designation}</p>
                  </div>
                </div>

                {/* Rating & Title */}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="font-semibold text-primary">{testimonial.title}</span>
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Date */}
                <div className="text-sm text-muted-foreground font-medium">
                  {testimonial.date}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;