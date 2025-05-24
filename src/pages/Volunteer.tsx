
import { Users, Clock, MapPin, ArrowRight, Heart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Volunteer = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-foundation-blue via-foundation-blue/90 to-foundation-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Volunteer <span className="text-foundation-light">Opportunities</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              Join our community of passionate volunteers making a real difference in the lives of people across Jigawa State
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-foundation-dark mb-6">
                Why Volunteer With Us?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Volunteering with Firdausi Ringim Foundation offers you the opportunity to make a tangible impact while developing new skills and building meaningful connections.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-foundation-blue flex-shrink-0" />
                  <span className="text-gray-700">Make a direct impact on community development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-foundation-blue flex-shrink-0" />
                  <span className="text-gray-700">Gain valuable experience and skills</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-foundation-blue flex-shrink-0" />
                  <span className="text-gray-700">Connect with like-minded individuals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-foundation-blue flex-shrink-0" />
                  <span className="text-gray-700">Flexible volunteer opportunities</span>
                </div>
              </div>
            </div>

            <div className="bg-foundation-blue/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foundation-dark mb-6">Current Volunteer Needs</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-foundation-blue/20">
                  <h4 className="font-semibold text-foundation-dark">Education Support Volunteers</h4>
                  <p className="text-sm text-gray-600 mb-2">Help with tutoring and educational program coordination</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />Dutse, Jigawa</span>
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />10 hours/week</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-foundation-blue/20">
                  <h4 className="font-semibold text-foundation-dark">Community Outreach Coordinators</h4>
                  <p className="text-sm text-gray-600 mb-2">Organize and lead community engagement activities</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />Various LGAs</span>
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />15 hours/week</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-foundation-blue/20">
                  <h4 className="font-semibold text-foundation-dark">Digital Marketing Volunteers</h4>
                  <p className="text-sm text-gray-600 mb-2">Help with social media and content creation</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />Remote</span>
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />5 hours/week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-foundation-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-foundation-blue" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Community Programs</h3>
              <p className="text-gray-600">Support our various community development and outreach programs</p>
            </div>

            <div className="text-center">
              <div className="bg-foundation-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-foundation-blue" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Special Events</h3>
              <p className="text-gray-600">Help organize and run fundraising events and awareness campaigns</p>
            </div>

            <div className="text-center">
              <div className="bg-foundation-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-foundation-blue" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Administrative Support</h3>
              <p className="text-gray-600">Assist with office tasks, data entry, and organizational activities</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-foundation-blue/5 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foundation-dark mb-6 text-center">Volunteer Application</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foundation-dark mb-2">First Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue" placeholder="Enter first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foundation-dark mb-2">Last Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue" placeholder="Enter last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foundation-dark mb-2">Email Address</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue" placeholder="Enter email address" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foundation-dark mb-2">Phone Number</label>
                <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue" placeholder="Enter phone number" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foundation-dark mb-2">Area of Interest</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue">
                  <option>Education Support</option>
                  <option>Community Outreach</option>
                  <option>Digital Marketing</option>
                  <option>Event Organization</option>
                  <option>Administrative Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foundation-dark mb-2">Availability</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue">
                  <option>Weekends only</option>
                  <option>Weekdays only</option>
                  <option>Both weekdays and weekends</option>
                  <option>Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foundation-dark mb-2">Tell us about yourself</label>
                <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foundation-blue" placeholder="Share your background, skills, and why you want to volunteer with us..."></textarea>
              </div>

              <Button className="w-full bg-foundation-blue hover:bg-foundation-blue/90 text-white py-3">
                <Users className="w-5 h-5 mr-2" />
                Submit Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Volunteer;
