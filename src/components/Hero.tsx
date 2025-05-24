
import { ArrowRight, Heart, Users, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-foundation-blue via-foundation-blue/90 to-foundation-dark min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              A Lending Hand for 
              <span className="text-foundation-light block">Sustainable Development</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
              Firdausi Ringim Foundation is committed to alleviating the circle of poverty through 
              <span className="text-foundation-light font-semibold"> FEEDING, EDUCATION, EMPOWERMENT</span> and other sustainable measures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-foundation-light text-foundation-blue hover:bg-foundation-light/90 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                <Heart className="w-5 h-5 mr-2" />
                Lend A Hand
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foundation-blue px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                Partner With Us
              </Button>
            </div>
          </div>

          {/* Right Content - Quick Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Users className="w-8 h-8 text-foundation-light mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">5,000+</div>
              <div className="text-foundation-light text-sm">Beneficiaries Reached</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <GraduationCap className="w-8 h-8 text-foundation-light mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">2,500+</div>
              <div className="text-foundation-light text-sm">Bursaries Awarded</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Heart className="w-8 h-8 text-foundation-light mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">1,200+</div>
              <div className="text-foundation-light text-sm">Girls Empowered</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Briefcase className="w-8 h-8 text-foundation-light mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">800+</div>
              <div className="text-foundation-light text-sm">Economic Grants</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
