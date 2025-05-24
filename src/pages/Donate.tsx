
import { Heart, ArrowRight, Shield, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Donate = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-foundation-blue via-foundation-blue/90 to-foundation-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Make a <span className="text-foundation-light">Donation</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              Your generous contribution helps us continue our mission of transforming lives through education, empowerment, and support
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Shield className="w-16 h-16 text-foundation-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foundation-dark mb-2">Secure & Safe</h3>
              <p className="text-gray-600">All donations are processed through secure payment gateways with industry-standard encryption.</p>
            </div>

            <div className="text-center">
              <Award className="w-16 h-16 text-foundation-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foundation-dark mb-2">Transparent</h3>
              <p className="text-gray-600">We provide regular updates and reports on how your donations are being used to create impact.</p>
            </div>

            <div className="text-center">
              <Target className="w-16 h-16 text-foundation-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foundation-dark mb-2">Direct Impact</h3>
              <p className="text-gray-600">100% of your donation goes directly to our programs and beneficiaries in need.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-foundation-dark mb-6">
                Where Your Money Goes
              </h2>
              
              <div className="space-y-6">
                <div className="bg-foundation-blue/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-foundation-dark mb-2">Education & Bursaries - 40%</h3>
                  <p className="text-gray-600">Supporting students with school fees, books, and educational materials across Jigawa State.</p>
                </div>

                <div className="bg-foundation-blue/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-foundation-dark mb-2">Girls Development - 30%</h3>
                  <p className="text-gray-600">Empowering girls through our Girls Development Community programs and initiatives.</p>
                </div>

                <div className="bg-foundation-blue/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-foundation-dark mb-2">Economic Empowerment - 20%</h3>
                  <p className="text-gray-600">Providing grants and support for small business development and economic opportunities.</p>
                </div>

                <div className="bg-foundation-blue/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-foundation-dark mb-2">Operations - 10%</h3>
                  <p className="text-gray-600">Administrative costs to ensure efficient program delivery and organizational sustainability.</p>
                </div>
              </div>
            </div>

            <div className="bg-foundation-blue/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foundation-dark mb-6">Donation Form</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foundation-dark mb-2">Donation Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button type="button" className="p-3 border-2 border-foundation-blue text-foundation-blue rounded-lg hover:bg-foundation-blue hover:text-white transition-colors">
                      One-time
                    </button>
                    <button type="button" className="p-3 border-2 border-gray-300 text-gray-600 rounded-lg hover:border-foundation-blue hover:text-foundation-blue transition-colors">
                      Monthly
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foundation-dark mb-2">Amount (₦)</label>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <button type="button" className="p-3 border border-gray-300 rounded-lg hover:border-foundation-blue transition-colors">₦5,000</button>
                    <button type="button" className="p-3 border border-gray-300 rounded-lg hover:border-foundation-blue transition-colors">₦10,000</button>
                    <button type="button" className="p-3 border border-gray-300 rounded-lg hover:border-foundation-blue transition-colors">₦25,000</button>
                    <button type="button" className="p-3 border border-gray-300 rounded-lg hover:border-foundation-blue transition-colors">₦50,000</button>
                    <button type="button" className="p-3 border border-gray-300 rounded-lg hover:border-foundation-blue transition-colors">₦100,000</button>
                    <button type="button" className="p-3 border border-gray-300 rounded-lg hover:border-foundation-blue transition-colors">Other</button>
                  </div>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue" placeholder="Enter custom amount" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foundation-dark mb-2">Donation Purpose</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue">
                    <option>Where needed most</option>
                    <option>Education & Bursaries</option>
                    <option>Girls Development</option>
                    <option>Economic Empowerment</option>
                    <option>Emergency Relief</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foundation-dark mb-2">Personal Information</label>
                  <div className="space-y-3">
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue" placeholder="Full Name" />
                    <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue" placeholder="Email Address" />
                    <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue" placeholder="Phone Number" />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <label className="text-sm text-gray-600">
                    I would like to receive updates about the foundation's work
                  </label>
                </div>

                <Button className="w-full bg-foundation-blue hover:bg-foundation-blue/90 text-white py-3">
                  <Heart className="w-5 h-5 mr-2" />
                  Proceed to Secure Payment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Secure payment powered by Paystack, Flutterwave & PayPal
                </p>
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

export default Donate;
