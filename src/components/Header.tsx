
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Jigawa Project', href: '/jigawa-project' },
    { name: 'Girls Project', href: '/girls-project' },
    { name: 'Economic Empowerment', href: '/economic-empowerment' },
    { name: 'Impact Dashboard', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/6d1ca7d2-2197-4fea-9cbb-e0057183f829.png" 
              alt="Firdausi Ringim Foundation" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foundation-dark hover:text-foundation-blue transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foundation-dark hover:text-foundation-blue transition-colors duration-300 font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Donate Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/donate">
              <Button className="bg-foundation-blue hover:bg-foundation-blue/90 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foundation-dark hover:text-foundation-blue transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-foundation-dark hover:text-foundation-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-foundation-dark hover:text-foundation-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link to="/donate">
                <Button className="w-full mt-4 bg-foundation-blue hover:bg-foundation-blue/90 text-white">
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
