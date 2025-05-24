
import { Handshake, Building, Users, GraduationCap, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const PartnerWithUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-foundation-blue via-foundation-blue/90 to-foundation-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Partner <span className="text-foundation-light">With Us</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              Join hands with us to create sustainable impact and transform communities across Nigeria
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foundation-dark mb-6">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in the power of collaboration to create lasting change in our communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-foundation-blue/5 p-8 rounded-2xl text-center">
              <Building className="w-16 h-16 text-foundation-blue mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foundation-dark mb-4">Corporate Partnership</h3>
              <p className="text-gray-600 mb-6">
                Partner with us through CSR initiatives, funding programs, or employee volunteer opportunities.
              </p>
              <Button className="bg-foundation-blue hover:bg-foundation-blue/90 text-white">
                Learn More
              </Button>
            </div>

            <div className="bg-foundation-blue/5 p-8 rounded-2xl text-center">
              <GraduationCap className="w-16 h-16 text-foundation-blue mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foundation-dark mb-4">Educational Institutions</h3>
              <p className="text-gray-600 mb-6">
                Collaborate on research, student exchange programs, and educational development initiatives.
              </p>
              <Button className="bg-foundation-blue hover:bg-foundation-blue/90 text-white">
                Learn More
              </Button>
            </div>

            <div className="bg-foundation-blue/5 p-8 rounded-2xl text-center">
              <Users className="w-16 h-16 text-foundation-blue mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foundation-dark mb-4">NGO Collaboration</h3>
              <p className="text-gray-600 mb-6">
                Work together with other non-profits to amplify our collective impact and reach.
              </p>
              <Button className="bg-foundation-blue hover:bg-foundation-blue/90 text-white">
                Learn More
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foundation-dark mb-6">
                Why Partner With Us?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-foundation-light/20 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-foundation-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foundation-dark mb-2">Proven Impact</h3>
                    <p className="text-gray-600">Over 5,000 beneficiaries reached through our various programs across Jigawa State.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-foundation-light/20 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-foundation-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foundation-dark mb-2">Transparency</h3>
                    <p className="text-gray-600">Full accountability and regular reporting on all partnership activities and outcomes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-foundation-light/20 p-2 rounded-lg">
                    <Handshake className="w-5 h-5 text-foundation-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foundation-dark mb-2">Collaborative Approach</h3>
                    <p className="text-gray-600">We work closely with partners to ensure mutual goals and sustainable outcomes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-foundation-blue/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foundation-dark mb-6">Partnership Inquiry</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foundation-dark mb-2">Organization Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue" placeholder="Enter organization name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foundation-dark mb-2">Contact Person</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue" placeholder="Enter contact person name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foundation-dark mb-2">Email Address</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue" placeholder="Enter email address" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foundation-dark mb-2">Partnership Interest</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue">
                    <option>Corporate Partnership</option>
                    <option>Educational Collaboration</option>
                    <option>NGO Partnership</option>
                    <option>Funding Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foundation-dark mb-2">Message</label>
                  <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue" placeholder="Tell us about your partnership idea..."></textarea>
                </div>

                <Button className="w-full bg-foundation-blue hover:bg-foundation-blue/90 text-white py-3">
                  <Handshake className="w-5 h-5 mr-2" />
                  Submit Partnership Inquiry
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PartnerWithUs;
