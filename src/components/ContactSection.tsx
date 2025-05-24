
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsLoading(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@firdausiringimfoundation.org',
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+234 XXX XXX XXXX',
      subtitle: 'Monday to Friday, 9AM - 5PM'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Jigawa State, Nigeria',
      subtitle: 'Central Office Location'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foundation-dark mb-6">
            Get In <span className="text-foundation-blue">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make a difference? Contact us to learn how you can partner with us or get involved in our mission.
          </p>
          <div className="w-24 h-1 bg-foundation-light mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foundation-dark mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  required
                />
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-foundation-blue hover:bg-foundation-blue/90 text-white py-3"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-foundation-blue/10 p-3 rounded-lg">
                      <item.icon className="w-6 h-6 text-foundation-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foundation-dark mb-1">
                        {item.title}
                      </h4>
                      <p className="text-foundation-blue font-medium mb-1">
                        {item.details}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-foundation-blue rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Follow Our Journey</h4>
              <p className="text-foundation-light mb-6">
                Stay updated with our latest projects and impact stories on social media.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                    title={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-foundation-light rounded-xl p-6">
              <h4 className="text-xl font-bold text-foundation-dark mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <Button className="w-full bg-foundation-blue hover:bg-foundation-blue/90 text-white">
                  Refer a Beneficiary
                </Button>
                <Button variant="outline" className="w-full border-foundation-blue text-foundation-blue hover:bg-foundation-blue hover:text-white">
                  Partner With Us
                </Button>
                <Button variant="outline" className="w-full border-foundation-blue text-foundation-blue hover:bg-foundation-blue hover:text-white">
                  Volunteer Opportunities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
