
import { ArrowRight, Heart, Users, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-foundation-blue via-foundation-blue/90 to-foundation-dark min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-foundation-light rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-foundation-light rounded-full animate-bounce opacity-30 animation-delay-300"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-foundation-light rounded-full animate-pulse opacity-25 animation-delay-700"></div>
        <div className="absolute top-60 left-1/3 w-5 h-5 bg-foundation-light rounded-full animate-bounce opacity-20 animation-delay-1000"></div>
        <div className="absolute bottom-20 right-32 w-4 h-4 bg-foundation-light rounded-full animate-pulse opacity-30 animation-delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              A Lending Hand for 
              <span className="text-foundation-light block animate-slide-in-left animation-delay-300">Sustainable Development</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed animate-fade-in animation-delay-500">
              Firdausi Ringim Foundation is committed to alleviating the circle of poverty through 
              <span className="text-foundation-light font-semibold"> FEEDING, EDUCATION, EMPOWERMENT</span> and other sustainable measures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-700">
              <Link to="/lend-a-hand">
                <Button size="lg" className="bg-foundation-light text-foundation-blue hover:bg-foundation-light/90 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto group">
                  <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Lend A Hand
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/partner-with-us">
                <Button size="lg" className="bg-foundation-light text-foundation-blue hover:bg-foundation-light/90 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto group">
                  <Users className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Partner With Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Quick Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in animation-delay-900">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
              <Users className="w-8 h-8 text-foundation-light mx-auto mb-3 animate-pulse" />
              <div className="text-3xl font-bold text-white mb-2 counter-animation">5,000+</div>
              <div className="text-foundation-light text-sm">Beneficiaries Reached</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 animation-delay-200">
              <GraduationCap className="w-8 h-8 text-foundation-light mx-auto mb-3 animate-pulse" />
              <div className="text-3xl font-bold text-white mb-2 counter-animation">2,500+</div>
              <div className="text-foundation-light text-sm">Bursaries Awarded</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:rotate-1 animation-delay-400">
              <Heart className="w-8 h-8 text-foundation-light mx-auto mb-3 animate-pulse" />
              <div className="text-3xl font-bold text-white mb-2 counter-animation">1,200+</div>
              <div className="text-foundation-light text-sm">Girls Empowered</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 animation-delay-600">
              <Briefcase className="w-8 h-8 text-foundation-light mx-auto mb-3 animate-pulse" />
              <div className="text-3xl font-bold text-white mb-2 counter-animation">800+</div>
              <div className="text-foundation-light text-sm">Economic Grants</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
