import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import RiskSection from './components/RiskSection';
import TrustSection from './components/TrustSection';
import ServicesSection from './components/ServicesSection';
import TechMarquee from './components/TechMarquee';
import CaseStudies from './components/CaseStudies';
import WorkModes from './components/WorkModes';
import AdaptSection from './components/AdaptSection';
import Testimonials from './components/Testimonials';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <RiskSection />
        <TrustSection />
        <ServicesSection />
        <TechMarquee />
        <CaseStudies />
        <WorkModes />
        <AdaptSection />
        <Testimonials />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}
