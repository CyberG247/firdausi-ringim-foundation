import { Heart, Users, Target, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foundation-dark mb-6">
            About <span className="text-foundation-blue">Our Foundation</span>
          </h2>
          <div className="w-24 h-1 bg-foundation-light mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foundation-dark mb-4">Who Are We?</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Firdausi Ringim Foundation is a <span className="font-semibold text-foundation-blue">Non-Governmental, Non-Profit and Apolitical</span> organization committed to alleviating the circle of poverty through <span className="font-semibold text-foundation-blue">FEEDING, EDUCATION, EMPOWERMENT</span> and other sustainable measures.
            </p>

            <div className="bg-foundation-blue/5 border-l-4 border-foundation-blue p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-foundation-blue italic">
                "A Lending hand for sustainable development."
              </p>
              <p className="text-sm text-gray-600 mt-2">- Our Motto</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              We are an online and offline non-sectarian peoples organization working for the empowerment of economically and/or socially marginalized groups.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              At the heart of our mission lies the belief in the power of girls, leading to the initiative: <span className="font-semibold text-foundation-blue">GIRLS DEVELOPMENT COMMUNITY</span>.
            </p>
          </div>

          {/* Right Content - Mission Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-foundation-blue">
              <Heart className="w-12 h-12 text-foundation-blue mb-4" />
              <h4 className="text-xl font-bold text-foundation-dark mb-2">Feeding</h4>
              <p className="text-gray-600">Ensuring no child goes hungry through our feeding programs</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-foundation-light">
              <Users className="w-12 h-12 text-foundation-light mb-4" />
              <h4 className="text-xl font-bold text-foundation-dark mb-2">Education</h4>
              <p className="text-gray-600">Providing quality education access for all children</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-foundation-blue">
              <Target className="w-12 h-12 text-foundation-blue mb-4" />
              <h4 className="text-xl font-bold text-foundation-dark mb-2">Empowerment</h4>
              <p className="text-gray-600">Building capacity for sustainable livelihoods</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-foundation-light">
              <Award className="w-12 h-12 text-foundation-light mb-4" />
              <h4 className="text-xl font-bold text-foundation-dark mb-2">Community</h4>
              <p className="text-gray-600">Strengthening communities through collaboration</p>
            </div>
          </div>
        </div>

        {/* Campaign Section */}
        <div className="bg-foundation-blue rounded-2xl p-8 lg:p-12 text-white text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            KEEPING UP WITH A GIRL NEXT DOOR
          </h3>
          <p className="text-xl mb-4">A NEIGHBOR TO NEIGHBOR Initiative</p>
          <p className="text-lg text-foundation-light max-w-3xl mx-auto">
            Impacting one girl, one community, one village at a time. We collaborate with private and public partners to transform lives and uplift vulnerable populations, especially children and impoverished families.
          </p>
        </div>

        {/* Community Impact Section */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/e564c03f-8a4b-4727-a3f9-f2d91bcdcf89.png" 
            alt="Firdausi Ringim Foundation community impact - beneficiaries receiving support" 
            className="w-full rounded-2xl shadow-lg"
          />
          <div className="text-center mt-6">
            <p className="text-lg text-gray-600 italic">
              Our community impact in action - empowering lives across Jigawa State
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foundation-dark mb-4">Founder's Desk</h3>
            <div className="w-16 h-1 bg-foundation-light mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 text-center">
              <div className="w-48 h-48 mx-auto rounded-full p-1 mb-6 bg-gradient-to-br from-foundation-blue to-foundation-light">
                <img 
                  src="/lovable-uploads/db3f1040-f363-469d-9429-d1d2692e7027.png" 
                  alt="Firdausi Umar Ringim - Founder and Director" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold text-foundation-dark mb-2">Firdausi Umar Ringim</h4>
              <p className="text-foundation-blue font-semibold">President & Founder of Firdausi Ringim Foundation</p>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Firdausi Umar Ringim, a passionate Legal Practitioner, is the founder and director of the Foundation. She owns a reputable legal firm, <span className="font-semibold text-foundation-blue">Firdausi Umar & Co</span>, and has dedicated her life to public service and social impact initiatives across Northern Nigeria.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Her commitment to justice and social equity drives the foundation's mission to create lasting change in the lives of the most vulnerable members of our society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
