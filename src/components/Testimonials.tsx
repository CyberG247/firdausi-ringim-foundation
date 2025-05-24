
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Aisha Mohammed",
      role: "Bursary Recipient",
      location: "Dutse, Jigawa",
      quote: "The foundation's bursary helped me complete my university education. I'm now a teacher, giving back to my community. Thank you, Firdausi Ringim Foundation!",
      image: "/lovable-uploads/photo-1649972904349-6e44c42644a7"
    },
    {
      id: 2,
      name: "Fatima Usman",
      role: "Girls Development Community",
      location: "Hadejia, Jigawa",
      quote: "Through the Girls Development Community, I learned valuable life skills and gained confidence. The program changed my perspective and helped me become a leader in my village.",
      image: "/lovable-uploads/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: 3,
      name: "Ibrahim Sani",
      role: "Parent",
      location: "Ringim, Jigawa",
      quote: "My daughter was struggling in school until the foundation provided educational support. Now she's one of the top students in her class. We are forever grateful.",
      image: "/lovable-uploads/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 4,
      name: "Maryam Abdullahi",
      role: "Economic Empowerment Beneficiary",
      location: "Kazaure, Jigawa",
      quote: "The economic empowerment grant helped me start my small business. I can now support my family and employ other women in my community.",
      image: "/lovable-uploads/photo-1649972904349-6e44c42644a7"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-foundation-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What People Say <span className="text-foundation-light">About Us</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Voices from our community sharing their transformative experiences
          </p>
          <div className="w-24 h-1 bg-foundation-light mx-auto mt-6"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
            <Quote className="w-16 h-16 text-foundation-light mb-6 mx-auto" />
            
            <div className="text-center">
              <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8">
                "{testimonials[currentSlide].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-foundation-light/20 flex items-center justify-center">
                  <span className="text-foundation-light font-bold text-xl">
                    {testimonials[currentSlide].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-lg font-semibold text-white">
                    {testimonials[currentSlide].name}
                  </p>
                  <p className="text-foundation-light">
                    {testimonials[currentSlide].role}
                  </p>
                  <p className="text-sm text-gray-300">
                    {testimonials[currentSlide].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white/20 border-white/30 text-white hover:bg-white/30"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white/20 border-white/30 text-white hover:bg-white/30"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-foundation-light scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
