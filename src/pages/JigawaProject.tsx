
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { BookOpen, Users, Heart, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JigawaProject = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foundation-blue to-foundation-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Jigawa <span className="text-foundation-light">Project</span>
            </h1>
            <p className="text-2xl mb-4 text-foundation-light">Back to School Charitable Project</p>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Supporting orphans, flood victims, and students with disabilities through comprehensive educational assistance across Jigawa State
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foundation-dark mb-6">
                About the Project
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Jigawa Project is our flagship educational initiative designed to support the most vulnerable students in Jigawa State. We provide comprehensive assistance including school supplies, uniforms, and financial support to ensure no child is left behind.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-foundation-blue" />
                  <span className="text-gray-700">Educational Materials & Supplies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-foundation-blue" />
                  <span className="text-gray-700">Support for Vulnerable Groups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-foundation-blue" />
                  <span className="text-gray-700">Holistic Student Welfare</span>
                </div>
              </div>
            </div>
            <div className="bg-foundation-light/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foundation-dark mb-6">Project Impact 2023-2024</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foundation-blue mb-2">2,500+</div>
                  <div className="text-gray-600">Students Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foundation-blue mb-2">27</div>
                  <div className="text-gray-600">LGAs Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foundation-blue mb-2">150+</div>
                  <div className="text-gray-600">Schools Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foundation-blue mb-2">₦50M+</div>
                  <div className="text-gray-600">Total Investment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficiary Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foundation-dark mb-6">
              Who We <span className="text-foundation-blue">Support</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive support reaches the most vulnerable students in our communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-foundation-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-foundation-blue" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Orphans</h3>
              <p className="text-gray-600">Supporting children who have lost their parents with educational materials and emotional support.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-foundation-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-foundation-blue" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Flood Victims</h3>
              <p className="text-gray-600">Assisting students affected by natural disasters to continue their education.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-foundation-blue/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-foundation-blue" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Visually Impaired</h3>
              <p className="text-gray-600">Providing specialized educational resources for students with visual disabilities.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-foundation-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-foundation-blue" />
              </div>
              <h3 className="text-xl font-bold text-foundation-dark mb-3">Physically Challenged</h3>
              <p className="text-gray-600">Supporting students with physical disabilities to access quality education.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-foundation-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Help Us Reach More Students
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Your support can transform a child's future. Join us in making education accessible to every child in Jigawa State.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-foundation-light text-foundation-blue hover:bg-foundation-light/90">
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foundation-blue">
              <Download className="w-5 h-5 mr-2" />
              Download Report
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default JigawaProject;
