
import { ArrowRight, BookOpen, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsPreview = () => {
  const projects = [
    {
      id: 'jigawa-project',
      title: 'Jigawa Project',
      subtitle: 'Back to School Charitable Project',
      description: 'Supporting orphans, flood victims, and students with disabilities through comprehensive educational assistance.',
      icon: BookOpen,
      stats: '2,500+ Students Supported',
      color: 'from-foundation-blue to-foundation-blue/80'
    },
    {
      id: 'girls-project',
      title: 'Girls Project',
      subtitle: 'Girls Development Community',
      description: 'Empowering girls through community building, self-awareness, and financial independence programs.',
      icon: Users,
      stats: '1,200+ Girls Empowered',
      color: 'from-foundation-light to-accent'
    },
    {
      id: 'economic-empowerment',
      title: 'Economic Empowerment',
      subtitle: 'Students Pocket Money Grant',
      description: 'SDG Goal 4: Quality Education through statewide bursary distribution and financial support.',
      icon: Briefcase,
      stats: '800+ Grants Awarded',
      color: 'from-foundation-dark to-gray-700'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foundation-dark mb-6">
            Our <span className="text-foundation-blue">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming lives through targeted initiatives that address the core needs of our communities
          </p>
          <div className="w-24 h-1 bg-foundation-light mx-auto mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-white h-full flex flex-col justify-between min-h-[400px]">
                <div>
                  <project.icon className="w-12 h-12 mb-6 text-white/90" />
                  
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-lg font-medium mb-4 text-white/90">{project.subtitle}</p>
                  <p className="text-white/80 leading-relaxed mb-6">{project.description}</p>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-6">
                    <p className="font-semibold text-center">{project.stats}</p>
                  </div>
                </div>

                <Button 
                  variant="secondary" 
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 group-hover:bg-white group-hover:text-foundation-dark transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-foundation-blue hover:bg-foundation-blue/90 text-white px-8 py-4 text-lg rounded-full">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
