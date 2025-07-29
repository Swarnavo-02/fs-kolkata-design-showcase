import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-premium ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-premium'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">FS</span>
            </div>
            <div className="hidden sm:block">
              <h2 className="text-xl font-bold text-foreground">F.S. Infrastructure</h2>
              <p className="text-sm text-muted-foreground">Architecture & Design</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-premium hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-premium"
            >
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <Button variant="default" className="bg-gradient-to-r from-gold to-gold-light hover:shadow-premium-gold">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-premium"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t shadow-premium">
            <div className="px-6 py-6 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium transition-premium hover:text-primary ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-2 text-sm text-muted-foreground"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </a>
                <Button variant="default" className="w-full bg-gradient-to-r from-gold to-gold-light">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;