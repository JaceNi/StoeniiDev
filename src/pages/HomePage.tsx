import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import RiskSection from '../components/RiskSection';
import TrustSection from '../components/TrustSection';
import ServicesSection from '../components/ServicesSection';
import TechMarquee from '../components/TechMarquee';
import CaseStudies from '../components/CaseStudies';
import WorkModes from '../components/WorkModes';
import AdaptSection from '../components/AdaptSection';
import Testimonials from '../components/Testimonials';
import ProcessSection from '../components/ProcessSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

export default function HomePage() {
  useEffect(() => {
    if (window.location.hash === '#contact') {
      const el = document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
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
        <ContactSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
