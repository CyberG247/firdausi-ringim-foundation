
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Briefcase, DollarSign, GraduationCap, Target, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EconomicEmpowerment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foundation-dark to-gray-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Economic <span className="text-foundation-light">Empowerment</span>
            </h1>
            <p className="text-2xl mb-4 text-foundation-light">Students Pocket Money Grant</p>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              SDG Goal 4: Quality Education through statewide bursary distribution and comprehensive financial support
            </p>
          </div>
        </div>
      </section>

      {/* SDG Goal Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-foundation-blue mr-4" />
                <h2 className="text-4xl font-bold text-foundation-dark">
                  SDG Goal 4: Quality Education
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Economic Empowerment program directly contributes to Sustainable Development Goal 4 by ensuring that financial constraints do not prevent students from accessing quality education. We provide comprehensive financial support to students across Jigawa State.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-6 h-6 text-foundation-blue" />
                  <span className="text-gray-700">Direct Financial Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-foundation-blue" />
                  <span className="text-gray-700">Educational Materials Coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-6 h-6 text-foundation-blue" />
                  <span className="text-gray-700">Skills Development Programs</span>
                </div>
              </div>
            </div>
            <div className="bg-foundation-blue/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foundation-dark mb-6">Program Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foundation-blue mb-2">800+</div>
                  <div className="text-gray-600">Grants Awarded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foundation-blue mb-2">27</div>
                  <div className="text-gray-600">LGAs Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foundation-blue mb-2">₦75M+</div>
                  <div className="text-gray-600">Total Disbursed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foundation-blue mb-2">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foundation-dark mb-6">
              What Our <span className="text-foundation-blue">Bursary Covers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial support to ensure students can focus on their education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-foundation-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-foundation-blue" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Books & Materials</h3>
              <p className="text-gray-600">Complete coverage of textbooks, stationery, and learning materials required for studies.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-foundation-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-foundation-blue" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Travel Allowance</h3>
              <p className="text-gray-600">Transportation costs to and from school, ensuring no student misses classes due to travel expenses.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-foundation-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-foundation-blue" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Accommodation</h3>
              <p className="text-gray-600">Support for boarding fees and accommodation expenses for students studying away from home.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-foundation-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-foundation-blue" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Living Allowance</h3>
              <p className="text-gray-600">Monthly stipends to cover basic living expenses and ensure students can maintain their studies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foundation-dark mb-6">
              Special <span className="text-foundation-blue">Initiatives</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-foundation-blue to-foundation-blue/80 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Statewide Bursary Distribution</h3>
              <p className="text-lg mb-6 text-gray-200">
                Our flagship program reaches every Local Government Area in Jigawa State, ensuring equitable distribution of educational support across urban and rural communities.
              </p>
              <ul className="space-y-2 text-gray-200">
                <li>• Merit-based selection process</li>
                <li>• Need-based assessment</li>
                <li>• Community involvement in selection</li>
                <li>• Transparent distribution process</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-foundation-light to-accent rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Special Online Slots Giveaway</h3>
              <p className="text-lg mb-6 text-gray-200">
                Digital platform initiatives providing additional opportunities for students to access educational grants and resources through our online application system.
              </p>
              <ul className="space-y-2 text-gray-200">
                <li>• Online application portal</li>
                <li>• Digital skills training</li>
                <li>• Remote mentorship programs</li>
                <li>• Technology access support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 bg-foundation-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Apply for Economic Empowerment Grant
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Ready to take the next step in your education? Apply now or nominate a deserving student for our economic empowerment program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-foundation-light text-foundation-blue hover:bg-foundation-light/90">
              <FileText className="w-5 h-5 mr-2" />
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foundation-blue">
              <Users className="w-5 h-5 mr-2" />
              Nominate Someone
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EconomicEmpowerment;
