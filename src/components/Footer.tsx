
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Projects', href: '#projects' },
    { name: 'Impact Dashboard', href: '#impact' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const projects = [
    { name: 'Jigawa Project', href: '#jigawa-project' },
    { name: 'Girls Project', href: '#girls-project' },
    { name: 'Economic Empowerment', href: '#economic-empowerment' },
    { name: 'Beneficiaries', href: '#beneficiaries' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-foundation-dark text-white relative">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-foundation-blue hover:bg-foundation-blue/90 rounded-full p-3 shadow-lg"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Foundation Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/6d1ca7d2-2197-4fea-9cbb-e0057183f829.png" 
                alt="Firdausi Ringim Foundation" 
                className="h-12 w-auto mr-3"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A lending hand for sustainable development through feeding, education, and empowerment initiatives across Jigawa State, Nigeria.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-foundation-blue/20 hover:bg-foundation-blue p-2 rounded-lg transition-all duration-300"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-foundation-light">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-foundation-light transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Projects */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-foundation-light">Our Projects</h3>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <li key={index}>
                  <a
                    href={project.href}
                    className="text-gray-300 hover:text-foundation-light transition-colors duration-300"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-foundation-light">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-foundation-light flex-shrink-0" />
                <span className="text-gray-300">Jigawa State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-foundation-light flex-shrink-0" />
                <span className="text-gray-300">info@firdausiringimfoundation.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-foundation-light flex-shrink-0" />
                <span className="text-gray-300">+234 XXX XXX XXXX</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-foundation-light">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-foundation-blue/20 border border-foundation-blue/30 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-foundation-light"
                />
                <Button className="bg-foundation-blue hover:bg-foundation-blue/90 rounded-l-none px-4">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-foundation-blue/10 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foundation-light">Ready to Make a Difference?</h3>
          <p className="text-gray-300 mb-6">Join us in transforming lives and building sustainable communities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-foundation-light text-foundation-dark hover:bg-foundation-light/90">
              <Heart className="w-4 h-4 mr-2" />
              Donate Now
            </Button>
            <Button variant="outline" className="border-foundation-light text-foundation-light hover:bg-foundation-light hover:text-foundation-dark">
              Become a Partner
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Firdausi Ringim Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-foundation-light transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-foundation-light transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-foundation-light transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
