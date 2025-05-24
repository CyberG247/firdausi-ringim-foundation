
import { Heart, ArrowRight, Users, GraduationCap, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const LendAHand = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-foundation-blue via-foundation-blue/90 to-foundation-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Lend <span className="text-foundation-light">A Hand</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              Your support makes a difference in transforming lives across Jigawa State, Nigeria
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-foundation-dark mb-6">
                Ways to Help
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                There are many ways you can support our mission to alleviate poverty through feeding, education, and empowerment initiatives.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-foundation-blue/10 p-3 rounded-lg">
                    <DollarSign className="w-6 h-6 text-foundation-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foundation-dark mb-2">Financial Donation</h3>
                    <p className="text-gray-600">Support our programs with monetary contributions that directly impact beneficiaries.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-foundation-blue/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-foundation-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foundation-dark mb-2">Volunteer Your Time</h3>
                    <p className="text-gray-600">Join our team of volunteers and contribute your skills to our various projects.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-foundation-blue/10 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-foundation-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foundation-dark mb-2">Sponsor Education</h3>
                    <p className="text-gray-600">Sponsor a child's education or contribute to our bursary programs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-foundation-blue/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foundation-dark mb-6">Make a Donation</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foundation-dark mb-2">Donation Amount</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue">
                    <option>₦5,000</option>
                    <option>₦10,000</option>
                    <option>₦25,000</option>
                    <option>₦50,000</option>
                    <option>₦100,000</option>
                    <option>Custom Amount</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foundation-dark mb-2">Donation Purpose</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue">
                    <option>General Support</option>
                    <option>Education/Bursary</option>
                    <option>Girls Development</option>
                    <option>Economic Empowerment</option>
                    <option>Feeding Programs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foundation-dark mb-2">Your Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue" placeholder="Enter your full name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foundation-dark mb-2">Email Address</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue" placeholder="Enter your email" />
                </div>

                <Button className="w-full bg-foundation-blue hover:bg-foundation-blue/90 text-white py-3">
                  <Heart className="w-5 h-5 mr-2" />
                  Proceed to Payment
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

export default LendAHand;
