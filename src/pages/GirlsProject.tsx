
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Users, Heart, GraduationCap, Star, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GirlsProject = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foundation-light to-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Girls <span className="text-foundation-dark">Project</span>
            </h1>
            <p className="text-2xl mb-4 text-foundation-dark">Girls Development Community</p>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Empowering girls through community building, self-awareness, and financial independence programs across Jigawa State
            </p>
          </div>
        </div>
      </section>

      {/* Campaign Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foundation-dark mb-6">
              KEEPING UP WITH A <span className="text-foundation-light">GIRL NEXT DOOR</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A NEIGHBOR TO NEIGHBOR initiative, impacting one girl, one community, one village at a time
            </p>
            <div className="w-24 h-1 bg-foundation-light mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foundation-dark mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At the heart of our mission lies the belief in the power of girls. We work to build strong community bonds, enhance self-awareness, promote financial and emotional independence, and improve hygiene practices among girls in Jigawa State.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-foundation-light" />
                  <span className="text-gray-700">Community Building & Networking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-foundation-light" />
                  <span className="text-gray-700">Self-Awareness & Confidence Building</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-foundation-light" />
                  <span className="text-gray-700">Financial Independence Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-foundation-light" />
                  <span className="text-gray-700">Health & Hygiene Education</span>
                </div>
              </div>
            </div>
            <div className="bg-foundation-light/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foundation-dark mb-6">Program Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foundation-light mb-2">1,200+</div>
                  <div className="text-gray-600">Girls Empowered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foundation-light mb-2">45</div>
                  <div className="text-gray-600">Communities Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foundation-light mb-2">80+</div>
                  <div className="text-gray-600">Schools Visited</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foundation-light mb-2">25</div>
                  <div className="text-gray-600">Workshops Conducted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foundation-dark mb-6">
              Our <span className="text-foundation-light">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive initiatives designed to empower girls at every stage of their development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-foundation-light/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-foundation-light" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Community Building</h3>
              <p className="text-gray-600">Creating strong networks and support systems among girls in local communities.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-foundation-light/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-foundation-light" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Self-Awareness</h3>
              <p className="text-gray-600">Building confidence and helping girls understand their potential and worth.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-foundation-light/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-foundation-light" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Financial Literacy</h3>
              <p className="text-gray-600">Teaching financial management and entrepreneurship skills for independence.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-foundation-light/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-foundation-light" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Health Education</h3>
              <p className="text-gray-600">Promoting proper hygiene practices and reproductive health awareness.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-foundation-light/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-foundation-light" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Mentorship</h3>
              <p className="text-gray-600">Connecting girls with successful female role models and mentors.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-foundation-light/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-foundation-light" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Outreach</h3>
              <p className="text-gray-600">Reaching girls in schools, including those with special needs and disabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-foundation-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Empower a Girl Today
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join us in transforming the lives of girls across Jigawa State. Your support creates ripple effects that benefit entire communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-foundation-light hover:bg-gray-100">
              <Heart className="w-5 h-5 mr-2" />
              Support Our Girls
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foundation-light">
              <Users className="w-5 h-5 mr-2" />
              Become a Mentor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GirlsProject;
