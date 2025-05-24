
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import ProjectsPreview from '@/components/ProjectsPreview';
import ImpactDashboard from '@/components/ImpactDashboard';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <ProjectsPreview />
      <ImpactDashboard />
      <Testimonials />
      <Newsletter />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
